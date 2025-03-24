// 服务器端操作文件，处理与图像相关的数据库操作和云存储交互
"use server";

import { revalidatePath } from "next/cache";
import { connectToDatabase } from "../database/mongoose";
import { handleError } from "../utils";
import User from "../database/models/user.model";
import Image from "../database/models/image.model";
import { redirect } from "next/navigation";

import { v2 as cloudinary } from 'cloudinary'

const populateUser = (query: any) => query.populate({
  path: 'author',
  model: User,
  select: '_id firstName lastName clerkId'
})

// ADD IMAGE
export async function addImage({ image, userId, path }: AddImageParams) {
  try {
    await connectToDatabase();

    const author = await User.findById(userId);

    if (!author) {
      throw new Error("User not found");
    }

    const newImage = await Image.create({
      ...image,
      author: author._id,
    })

    revalidatePath(path);

    return JSON.parse(JSON.stringify(newImage));
  } catch (error) {
    handleError(error)
  }
}

// UPDATE IMAGE
export async function updateImage({ image, userId, path }: UpdateImageParams) {
  try {
    await connectToDatabase();

    const imageToUpdate = await Image.findById(image._id);

    if (!imageToUpdate || imageToUpdate.author.toHexString() !== userId) {
      throw new Error("Unauthorized or image not found");
    }

    const updatedImage = await Image.findByIdAndUpdate(
      imageToUpdate._id,
      image,
      { new: true }
    )

    revalidatePath(path);

    return JSON.parse(JSON.stringify(updatedImage));
  } catch (error) {
    handleError(error)
  }
}

// DELETE IMAGE
export async function deleteImage(imageId: string) {
  try {
    await connectToDatabase();

    await Image.findByIdAndDelete(imageId);
  } catch (error) {
    handleError(error)
  } finally{
    redirect('/')
  }
}

// GET IMAGE
export async function getImageById(imageId: string) {
  try {
    await connectToDatabase();

    const image = await populateUser(Image.findById(imageId));

    if(!image) throw new Error("Image not found");

    return JSON.parse(JSON.stringify(image));
  } catch (error) {
    handleError(error)
  }
}

// GET IMAGES
export async function getAllImages({ limit = 9, page = 1, searchQuery = '' }: {
  limit?: number;
  page: number;
  searchQuery?: string;
}) {
  try {
    await connectToDatabase();

    cloudinary.config({ // 配置cloudinary api
      cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
      secure: true,
    })

    let expression = 'folder=imaginify';  // 指定之搜索imaginify文件夹下的图片

    if (searchQuery) {  // "folder=imaginify AND cat"找到所有包含cat的图片
      expression += ` AND ${searchQuery}` // 添加搜索条件
    }

    const { resources } = await cloudinary.search // 执行cloudinary搜索
      .expression(expression)
      .execute(); // 包含所有匹配的图片资源信息

    const resourceIds = resources.map((resource: any) => resource.public_id);
    // 提取所有匹配图片的 public_id

    let query = {};

    if(searchQuery) {
      query = {
        publicId: {
          $in: resourceIds  // 查找publicId在resourceIds数组中的所有图片
        } // $in 是mongodb查询操作符，相当于 WHERE publicId IN ('img1', 'img2', 'img3')
        // MongoDB 查询会返回 publicId 为 "img1" 或 "img2" 或 "img3" 的所有图片文档
      }
    }

    const skipAmount = (Number(page) -1) * limit;
    // 计算分页时需要跳过的文档数量

    const images = await populateUser(Image.find(query))
      .sort({ updatedAt: -1 })  // 按更新时间降序排序（最新的在前）
      .skip(skipAmount) // 跳过计算好的文档数量
      .limit(limit);  // 限制返回的文档数量
    
    const totalImages = await Image.find(query).countDocuments(); // 获取符合搜索条件的图片总数
    const savedImages = await Image.find().countDocuments();  // 获取数据库中所有保存的图片总数（不考虑搜索条件）

    return {
      // 将图片数据转换为纯 JSON 格式
      data: JSON.parse(JSON.stringify(images)),
      // 计算总页数：总图片数除以每页限制数，向上取整
      totalPage: Math.ceil(totalImages / limit),
      // 返回总保存图片数
      savedImages,
    }
  } catch (error) {
    handleError(error)
  }
}

// GET IMAGES BY USER
export async function getUserImages({ // 需改为可以进行搜索
  limit = 9,
  page = 1,
  userId,
}: {
  limit?: number;
  page: number;
  userId: string;
}) {
  try {
    await connectToDatabase();  // 连接到mongodb数据库

    const skipAmount = (Number(page) - 1) * limit;  // 计算分页跳过的数量

    const images = await populateUser(Image.find({ author: userId })) // 查询数据库获取图片
      .sort({ updatedAt: -1 })  // 按更新时间降序排序
      .skip(skipAmount) // 跳过计算好的文档数量
      .limit(limit);  // 限制返回的文档数量

    const totalImages = await Image.find({ author: userId }).countDocuments();  // 获取符合搜索条件的图片总数

    return {
      data: JSON.parse(JSON.stringify(images)),
      totalPages: Math.ceil(totalImages / limit),
    };
  } catch (error) {
    handleError(error);
  }
}