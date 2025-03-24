"use client";
import Link from "next/link";
import Image from "next/image";
import { SignedIn, UserButton } from "@clerk/nextjs";
import { navLinks } from "@/constants/index";
import { usePathname } from "next/navigation";
import { SignedOut } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <aside className="sidebar">
      <div className="flex size-full flex-col gap-4">
        <Link href="/" className="sidebar-logo">
          <Image
            src="/assets/icons/logo3.svg"
            alt="logo"
            width={250}
            height={40}
          />
        </Link>

        <nav className=" sidebar-nav">
          {/* <SignedIn> */}
          {/* 作用：内容只有在用户登录后才显示 */}
          <ul className="sidebar-nav_elements">
            {navLinks.slice(0, 7).map((link) => {
              const isActive = link.route === pathname;
              // 判断当前导航项是否处于活动状态

              return (
                <li
                  key={link.route}
                  className={`sidebar-nav_element group   
                      // group 将li标记为一个组的父元素
                      // 允许子元素使用group-hover响应父元素的悬停状态
                      // 当父元素被访问（鼠标悬停），子元素Image做出反应（改变样式）
                      ${
                        isActive
                          ? "bg-purple-gradient text-white"
                          : "text-gray-700"
                        // 激活状态为紫色渐变和白色文字，未激活为灰色文字
                      }`}
                >
                  <Link href={link.route} className="sidebar-link">
                    <Image
                      src={link.icon}
                      alt="logo"
                      className={`${isActive && "brightness-200"}`}
                      width={24}
                      height={24}
                    />
                    {link.label}
                    {/* label:导航项的标签 */}
                  </Link>
                </li>
              );
            })}
          </ul>
          {/* 设置两个ul块，将管理和付费导航项放在下面，功能导航项在上面 */}
          {/* justify-between样式自动将空间分配在子元素ul之间 */}
          <ul className="sidebar-nav_elements">
            {navLinks.slice(7).map((link) => {
              const isActive = link.route === pathname;
              // 判断当前导航项是否处于活动状态

              return (
                <li
                  key={link.route}
                  className={`sidebar-nav_element group   
                      // group 将li标记为一个组的父元素
                      // 允许子元素使用group-hover响应父元素的悬停状态
                      // 当父元素被访问（鼠标悬停），子元素Image做出反应（改变样式）
                      ${
                        isActive
                          ? "bg-purple-gradient text-white"
                          : "text-gray-700"
                        // 激活状态为紫色渐变和白色文字，未激活为灰色文字
                      }`}
                >
                  <Link href={link.route} className="sidebar-link">
                    <Image
                      src={link.icon}
                      alt="logo"
                      className={`${isActive && "brightness-200"}`}
                      width={24}
                      height={24}
                    />
                    {link.label}
                    {/* label:导航项的标签 */}
                  </Link>
                </li>
              );
            })}
            <li className="items-center justify-center gap-2 p-4 cursor-pointer">
              <SignedIn>
                <UserButton showName />
              </SignedIn>
              <SignedOut>
                {/* 未登录状态显示登录和注册按钮 */}
                <div className="flex flex-row gap-2">
                  <Button
                    asChild
                    className="button bg-purple-gradient bg-cover cursor-pointer"
                  >
                    <Link href="/sign-in">Login</Link>
                  </Button>
                  <Button
                    asChild
                    className="button bg-purple-gradient bg-cover cursor-pointer"
                  >
                    <Link href="/sign-up">Sign Up</Link>
                  </Button>
                </div>
              </SignedOut>
            </li>
          </ul>
          {/* </SignedIn> */}
          {/* <SignedOut> */}
          {/* 作用：内容只有在用户未登录时才显示 */}
          {/* asChild 允许按钮继承子元素的行为，将button样式应用到Link上 */}
          {/* <Button asChild className="button bg-purple-gradient bg-cover">
              <Link href={"/sign-in"}>Login</Link>
            </Button>
          </SignedOut> */}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
