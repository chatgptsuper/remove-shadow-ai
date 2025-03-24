"use server";

import { revalidatePath } from "next/cache";

import User from "../database/models/user.model";
import { connectToDatabase } from "../database/mongoose";
import { handleError } from "../utils";

// CREATE
export async function createUser(user: CreateUserParams) {
  try {
    await connectToDatabase();

    const newUser = await User.create(user);

    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    handleError(error);
  }
}

// READ
export async function getUserById(userId: string) {
  try {
    await connectToDatabase();

    const user = await User.findOne({ clerkId: userId });

    if (!user) throw new Error("User not found");

    return JSON.parse(JSON.stringify(user));
  } catch (error) {
    handleError(error);
  }
}

// UPDATE
export async function updateUser(clerkId: string, user: UpdateUserParams) {
  try {
    await connectToDatabase();

    const updatedUser = await User.findOneAndUpdate({ clerkId }, user, {
      new: true,
    });

    if (!updatedUser) throw new Error("User update failed");
    
    return JSON.parse(JSON.stringify(updatedUser));
  } catch (error) {
    handleError(error);
  }
}

// DELETE
export async function deleteUser(clerkId: string) {
  try {
    await connectToDatabase();

    // Find user to delete
    const userToDelete = await User.findOne({ clerkId });

    if (!userToDelete) {
      throw new Error("User not found");
    }

    // Delete user
    const deletedUser = await User.findByIdAndDelete(userToDelete._id);
    revalidatePath("/");

    return deletedUser ? JSON.parse(JSON.stringify(deletedUser)) : null;
  } catch (error) {
    handleError(error);
  }
}

// UPDATE CREDITS
export async function updateCredits(userId: string, credits: number) {
  try {
    // 连接到数据库
    await connectToDatabase();

    // 获取当前用户
    const user = await User.findById(userId);
    if (!user) {
      throw new Error('User not found');
    }

    // 日志记录
    console.log('Current credits:', user.creditBalance);
    console.log('Adding credits:', credits);

    // 更新积分
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { $inc: { creditBalance: credits } }, // 使用$inc运算符增加积分，$inc是MongoDB的一个增量操作符
      { new: true } // 确保返回更新后的用户数据
    );

    console.log('Updated credits:', updatedUser.creditBalance);

    return updatedUser;
  } catch (error) {
    console.error('Error updating credits:', error);
    handleError(error);
    throw error;
  }
}