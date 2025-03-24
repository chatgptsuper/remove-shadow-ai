/* eslint-disable camelcase */
import { WebhookEvent, createClerkClient } from "@clerk/nextjs/server";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { Webhook } from "svix";

import { createUser, deleteUser, updateUser } from "@/lib/actions/user.actions";

// 添加GET方法用于测试端点是否可访问
export async function GET() {
  console.log("测试webhook端点访问");
  return new Response("Webhook端点正常工作", { status: 200 });
}
// POST方法用于处理Clerk Webhook事件
export async function POST(req: Request) {
  console.log("收到Webhook POST请求");
  // You can find this in the Clerk Dashboard -> Webhooks -> choose the webhook
  const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET;

  if (!WEBHOOK_SECRET) {
    console.error("缺少WEBHOOK_SECRET环境变量");
    throw new Error(
      "Please add WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local"
    );
  }

  // Get the headers
  const headerPayload = headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  // If there are no headers, error out
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response("Error occured -- no svix headers", {
      status: 400,
    });
  }

  // Get the body
  const payload = await req.json();
  const body = JSON.stringify(payload);

  // Create a new Svix instance with your secret.
  const wh = new Webhook(WEBHOOK_SECRET);

  let evt: WebhookEvent;

  // Verify the payload with the headers
  try {
    console.log("正在验证webhook签名...");
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent;
    console.log("Webhook签名验证成功");
  } catch (err) {
    console.error("验证webhook时出错:", err);
    console.error("Error verifying webhook:", err);
    return new Response("Error occured", {
      status: 400,
    });
  }

  // Get the ID and type
  const { id } = evt.data;
  const eventType = evt.type;

  console.log(`处理webhook事件: ${eventType}, 用户ID: ${id}`);

  // CREATE
  if (eventType === "user.created") {
    const { id, email_addresses, image_url, first_name, last_name, username } = evt.data;

    const effectiveUsername = username || email_addresses[0].email_address.split("@")[0];

    const user = {
      clerkId: id,
      email: email_addresses[0].email_address,
      username: effectiveUsername,
      firstName: first_name || "",  // createUser类型定义要求必须为string类型
      lastName: last_name || "",
      photo: image_url || "https://img.clerk.com/default-avatar.png",  // 添加默认头像
    };
    console.log("准备创建用户...");
    const newUser = await createUser(user);
    console.log("创建用户结果:", newUser ? "成功" : "失败");

    // Set public metadata
    if (newUser) {
      console.log("更新Clerk元数据...");
      // const clerk= await clerkClient();
      const clerk = createClerkClient({ secretKey: process.env.CLERK_SECRET_KEY })
      await clerk.users.updateUserMetadata(id, {
        publicMetadata: {
          userId: newUser._id,
        },
      });
      console.log("Clerk元数据更新成功");
    } else {
      console.error("创建用户失败，无法更新元数据");
    }

    return NextResponse.json({ message: "OK", user: newUser });
  }

  // UPDATE
  if (eventType === "user.updated") {
    const { id, image_url, first_name, last_name, username } = evt.data;

    const user = {
      firstName: first_name || "",
      lastName: last_name || "",
      username: username!,
      photo: image_url,
    };

    const updatedUser = await updateUser(id, user);

    return NextResponse.json({ message: "OK", user: updatedUser });
  }

  // DELETE
  if (eventType === "user.deleted") {
    const { id } = evt.data;

    const deletedUser = await deleteUser(id!);

    return NextResponse.json({ message: "OK", user: deletedUser });
  }

  console.log(`Webhook with and ID of ${id} and type of ${eventType}`);
  console.log("Webhook body:", body);

  return new Response("", { status: 200 });
}