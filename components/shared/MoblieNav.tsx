"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import Image from "next/image";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { navLinks } from "@/constants";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";

const MoblieNav = () => {
  const pathname = usePathname();
  return (
    <header className="header">
      <Link href={"/"} className="flex items-center gap-2 md:py-2 "></Link>
      <Image
        src="/assets/icons/logo3.svg"
        alt="logo"
        width={180}
        height={28}
      />

      {/* 这部分是品牌名和logo区域 */}
      {/* 下面是用户按钮以及导航栏按钮 */}
      <nav className="flex gap-2">
        <SignedIn>
          <UserButton />
          <Sheet>
            <SheetTrigger>
              <Image
                src="/assets/images/menu.svg"
                alt="menu"
                width={32}
                height={32}
                className="cursor-pointer"
              />
            </SheetTrigger>
            <SheetContent className="sheet-content sm:w-64">
              <>
                <Image
                  src="/assets/images/logo-text.svg"
                  alt="logo"
                  width={152}
                  height={23}
                />
                <ul className="header-nav_elements">
                  {navLinks.map((link) => {
                    const isActive = link.route === pathname;
                    return (
                      <li
                        key={link.route}
                        className={`${
                          isActive && "gradient-text"
                        } p-18 flex whitespace-nowrap text-dark-700`}
                      >
                        <Link
                          href={link.route}
                          className="sidebar-link cursor-pointer"
                        >
                          <Image
                            src={link.icon}
                            alt="logo"
                            width={24}
                            height={24}
                          />
                          {link.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </>
            </SheetContent>
          </Sheet>
        </SignedIn>
        <SignedOut>
          <Button asChild className="button bg-purple-gradient bg-cover">
            <Link href={"/sign-in"}>Login</Link>
          </Button>
        </SignedOut>
      </nav>
    </header>
  );
};

export default MoblieNav;
