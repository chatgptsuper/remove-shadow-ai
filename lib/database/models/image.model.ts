// 这段代码设计数据库表格的格式（称为Schema）
import { Document,model, Schema, models } from "mongoose";

// 创建一个表格模板，数据库字段规则
// 这个schema定义了用户上传图片必须提供标题和出列类型等基本信息
// 存储处理后的的图片地址，记录图片是哪个用户创建的（author关联用户表）
const ImageSchema = new Schema({
  // required:true 表示必填
  title: { type: String, required: true },
  transformationType: { type: String, required: true },
  publicId: { type: String, required: true },
  secureURL: { type: String, required: true },
  width: { type: Number },
  height: { type: Number },
  config: { type: Object },
  transformationUrl: { type: String },
  aspectRatio: { type: String },
  color: { type: String },
  prompt: { type: String },
  author: { type: Schema.Types.ObjectId, ref: "User" },// 关联到user模型
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export interface IImage extends Document {  
  _id:string,
  title: string;
  transformationType: string;
  publicId: string; // 云存储唯一标识
  secureURL: string;
  width?: number;
  height?: number;
  config?: object; // 存储图片编辑参数
  transformationUrl?: string;
  aspectRatio?: string;
  color?: string;
  prompt?: string; // ai修图的指令
  author?: {  
    _id: string;
    firstName: string;
    lastName: string;
  };
  createdAt?: Date;
  updatedAt?: Date;
}

const Image = models?.Image || model("Image", ImageSchema);

export default Image;
