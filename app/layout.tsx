import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
const IBMPlex = IBM_Plex_Sans({
  subsets: ["latin"], // 只加载拉丁字母
  weight: ["400", "500", "600", "700"],
  variable: "--font--ibm-plex", // 定义css变量名（不是一个真实的类名）
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        // 定义clerk组件的外观
        variables: {  
          colorPrimary: "#624cf5", // 设置主题为紫色
        },
      }}
    >
      <html lang="en">
        {/* cn是工具函数，用于合并css类名 */}
        <body className={cn("font-IBMPlex antialiased", IBMPlex.variable)}>
          {/* <header className="flex justify-end items-center p-4 gap-4 h-16">
          </header> */}
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
