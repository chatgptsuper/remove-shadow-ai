import mongoose, { Mongoose } from "mongoose";

const MONGODB_URL = process.env.MONGODB_URL;

interface MongooseConnection {
  // 保存数据库连接状态
  conn: Mongoose | null; // 已建立的数据库连接
  promise: Promise<Mongoose> | null; // 正在进行的连接操作（避免多个请求同时创建连接）
}

let cached: MongooseConnection = (global as any).mongoose;
// 全局缓存

if (!cached) {
  cached = (global as any).mongoose = {
    conn: null,
    promise: null,
  };
}

export const connectToDatabase = async () => {
  if (cached.conn) {
    return cached.conn;
  }
  if (!MONGODB_URL) throw new Error("Missing MONGODB_URL");
  // 如果正在连接中，等待它完成；否则创建新连接
  cached.promise =
    cached.promise ||
    mongoose.connect(MONGODB_URL, {
      dbName: "cluster0",
      bufferCommands: false,    // 禁用缓冲，提高性能
    });
  cached.conn = await cached.promise;   // 等待连接完成保存结果
  return cached.conn;
};
