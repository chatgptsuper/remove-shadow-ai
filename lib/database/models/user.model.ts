import { Schema, model, models } from "mongoose";

// 定义了用户数据在mongodb数据库中的结构和行为
const UserSchema = new Schema({
  // clerk只提供基本的认证功能
  // 通过clerkid字段，将clerk认证信息和mongodb中的用户数据关联起来
  // 
  clerkId: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  photo: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  planId: {
    type: Number,
    default: 1,
  },
  creditBalance: {
    type: Number,
    default: 5,  // 新用户默认5积分
  },
});

const User = models?.User || model("User", UserSchema);

export default User;
