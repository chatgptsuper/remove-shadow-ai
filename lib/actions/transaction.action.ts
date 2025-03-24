"use server";
// 服务器端，处理支付业务逻辑

import { redirect } from "next/navigation";
import { handleError } from "../utils";
import { connectToDatabase } from "../database/mongoose";
import Transaction from "../database/models/transaction.model";
import { updateCredits } from "./user.actions";
import { CREEM_PRODUCT_IDS } from "@/constants";

// 创建 Creem 支付会话，处理用户购买积分的结账流程
// 接受交易信息，调用creem API创建支付链接，返回支付链接到前端
export async function checkoutCredits(transaction: CheckoutTransactionParams) {
  try {
    if (transaction.plan.toUpperCase() === "FREE") {
      // toUpperCase() 方法将字符串转换为大写
      return { success: true };
    }

    if (!transaction.productId) {
      // 检查产品ID是否存在
      throw new Error(`Invalid product ID for plan: ${transaction.plan}`);
    }

    const apiUrl = process.env.CREEM_API_LOCATION || "https://api.creem.io/v1/checkouts"
      // process.env.CREEM_API_LOCATION || "https://test-api.creem.io";
      

    // 调用Creem支付API创建支付会话checkout session
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.CREEM_API_KEY!,
      },
      body: JSON.stringify({
        product_id: transaction.productId, // 产品ID
        request_id: `${transaction.buyerId}-${Date.now()}`, // 生成唯一请求ID
        success_url: `${process.env.NEXT_PUBLIC_SERVER_URL}/profile`,
        metadata: {
          // metadata保存在订阅对象中，并随着之后的每个webhook返回
          plan: transaction.plan,
          credits: transaction.credits,
          buyerId: transaction.buyerId,
        },
      }),
    });

    if (!response.ok) {
      // 检查API响应是否成功
      const error = await response.json();
      throw new Error(
        `Checkout session creation failed: ${JSON.stringify(error)}`
      );
    }

    const checkoutSession = await response.json();

    // 返回 checkout_url：支付链接 给前端 而不是直接重定向
    return { checkoutUrl: checkoutSession.checkout_url };
  } catch (error) {
    console.error("Checkout error:", error);
    throw error; // 向上传播错误
  }
}

// 在支付成功后创建交易记录并更新用户积分
export async function createTransaction(transaction: CreateTransactionParams) {
  try {
    // 连接到数据库
    await connectToDatabase();

    // 添加日志
    console.log("Creating transaction:", transaction);

    // 验证必要字段
    if (!transaction.buyerId || !transaction.credits) {
      throw new Error(
        `Missing required fields: ${JSON.stringify(transaction)}`
      );
    }

    // 在数据库中，创建交易记录
    const newTransaction = await Transaction.create({
      ...transaction, // 展开所有交易信息
      buyer: transaction.buyerId, // 设置卖家ID
    });

    console.log("Transaction created:", newTransaction);

    // 更新用户积分余额
    const updatedUser = await updateCredits(
      transaction.buyerId,
      transaction.credits
    );
    console.log("User credits updated:", updatedUser);

    // 检查用户积分是否更新成功
    if (!updatedUser) {
      console.error(
        "Failed to update user credits, but transaction was created"
      );
    }

    // 返回新创建的交易记录
    return JSON.parse(JSON.stringify(newTransaction));
  } catch (error) {
    console.error("Transaction creation error:", error);
    handleError(error);
    throw error; // 向上传播错误
  }
}
