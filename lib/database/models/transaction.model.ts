import { Schema, model, models } from "mongoose";

// 交易模型，记录用户购买积分的交易
const TransactionSchema = new Schema({
  createdAt: {  // 交易创建时间，默认值为当前时间
    type: Date,
    default: Date.now,
  },
  orderId: {   // Changed from stripeId to orderId for Creem
    type: String,
    required: true,
    unique: true,
  },
  checkoutId: { // Added for Creem checkout session tracking
    type: String,
    required: true,
  },
  customerId: { // 新增：存储 Creem 客户 ID
    type: String,
  },
  productId: {  // 新增：存储产品 ID
    type: String,
    required: true,
  },
  amount: {   // 交易金额
    type: Number,
    required: true,
  },
  credits: {  // 购买获得的积分数量
    type: Number,
  },
  plan: { // 套餐名称
    type: String,
  },
  buyer: {  // 购买用户信息，关联到user模型
    type: Schema.Types.ObjectId,
    ref: "User",
  }
});

const Transaction =
  models?.Transaction || model("Transaction", TransactionSchema);

export default Transaction;
