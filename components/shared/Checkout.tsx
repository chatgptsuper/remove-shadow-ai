// 整个支付流程的前端入口点，负责处理用户购买积分的交互流程
// 组件接受关键参数：
// - plan : 购买的套餐名称
// - amount : 支付金额
// - credits : 购买的积分数量
// - buyerId : 购买者ID
// - productId : 产品ID (用于Creem支付系统)
// 用户点击“buy credit”按钮，触发onChenckout函数：构建交易数据对象，调用后端API chekooutCredits，获取支付url并重定向用户到支付页面
"use client";

import { useEffect } from "react";
import { toast } from "sonner";
import { checkoutCredits } from "@/lib/actions/transaction.action";
import { Button } from "../ui/button";

const Checkout = ({
  plan,
  amount,
  credits,
  buyerId,
  productId,
}: {
  plan: string;
  amount: number;
  credits: number;
  buyerId: string;
  productId: string;
}) => {
  useEffect(() => {
    // 使用 useEffect 钩子监听URL参数，处理支付完成后的回调
    // 因为平台处理完支付后，会跳转到网站并携带参数，这里监听这些参数，处理支付完成后的逻辑
    const query = new URLSearchParams(window.location.search);

    // 根据文档，检查所有可能的返回参数，监听是否有支付成功的参数
    if (query.get("checkout_id") && query.get("order_id")) {
      // 验证签名
      const signature = query.get("signature");
      // TODO: 实现签名验证

      toast.success("Order placed!", {
        description: "Thank you for your purchase!",
        duration: 5000,
        className: "success-toast",
      });
    }

    // 添加页面刷新，确保显示最新积分
    setTimeout(() => {
      window.location.reload();
    }, 2000);

    if (query.get("canceled")) {
      // 表示支付取消
      toast.error("Payment canceled", {
        description: "The payment was canceled",
        duration: 5000,
        className: "error-toast",
      });
    }

    // Handle canceled case if needed
  }, []);

  const onCheckout = async () => {
    try {
      // 构建交易数据对象
      const transaction = {
        plan,
        amount, // 金额
        credits,
        buyerId,
        productId,
      };

      // 调用后端API，创建支付会话
      const result = await checkoutCredits(transaction);

      // 成功获取支付url，则重定向到支付页面
      if (result?.checkoutUrl) {
        window.location.href = result.checkoutUrl;
      }
    } catch (error) {
      console.error("Checkout error:", error);
      toast.error(
        `Failed to create checkout session: ${
          error instanceof Error ? error.message : "Unknown error"
        }`
      );
    }
  };

  return (
    <form
      onSubmit={(e) => {
        // 用户点击按钮时触发
        e.preventDefault(); // / 阻止表单默认提交行为（防止页面刷新）
        onCheckout(); // 调用支付函数（相当于点击“立即支付”）
      }}
    >
      <Button
        type="submit" // 表示这是表单提交按钮
        className="w-full rounded-full bg-purple-gradient bg-cover"
      >
        Buy Credit
      </Button>
    </form>
  );
};

export default Checkout;
