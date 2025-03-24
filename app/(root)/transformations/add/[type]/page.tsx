import Header from "@/components/shared/Header";
import TransformationForm from "@/components/shared/TransformationForm";
import { transformationTypes } from "@/constants";
import { getUserById } from "@/lib/actions/user.actions";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import {Metadata} from "next"
import Link from "next/link"
import Image from "next/image"

// 动态生成 metadata
export async function generateMetadata({ params }: { params: { type: string } }): Promise<Metadata> {
  const type = params.type;
  const transformation = transformationTypes[type as keyof typeof transformationTypes];
  
  if (!transformation) {
    return {
      title: "Image Transformation | Remove Shadow",
      description: "Transform your images with AI-powered technology",
    };
  }

  return {
    title: `${transformation.title} | Remove Shadow`,
    description: transformation.subTitle,
    openGraph: {
      title: `${transformation.title} | Remove Shadow AI`,
      description: transformation.subTitle,
      type: "website",
      locale: "en_US",
      url: `https://removeshadow.com/transformations/add/${type}`,
      siteName: "Remove Shadow",
    },
    twitter: {
      card: "summary_large_image",
      title: `${transformation.title} | Remove Shadow AI`,
      description: transformation.subTitle,
    },
    alternates: {
      canonical: `https://removeshadow.com/transformations/add/${type}`,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

const AddTransformationTypePage = async ({
  params: { type },
}: SearchParamProps) => {
  // 访问 /transformations/add/restore 时， type 的值就是 "restore"
  let transformation = transformationTypes[type as keyof typeof transformationTypes];
  const { userId } = await auth();
  // 为搜索引擎爬虫和未登录用户提供基本内容
  if (!userId) {
    return (
      <>
        <Header title={transformation.title} subtitle={transformation.subTitle} />
        <section className="mt-10 flex justify-center items-center min-h-[50vh]">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-8 max-w-md w-full mx-auto">
            <div className="flex flex-col items-center justify-center gap-6 text-center">

              
              <h3 className="h3-bold text-dark-600">Sign in to access full features</h3>
              
              <p className="text-dark-500 max-w-sm">
                {transformation.subTitle} requires authentication. Please sign in or create an account to use this feature.
              </p>
              
              <div className="flex gap-4 mt-2 w-full max-w-xs">
                <Link href="/sign-in" className="bg-purple-gradient text-white px-6 py-3 rounded-lg flex-1 text-center font-medium hover:opacity-90 transition-all">
                  Sign In
                </Link>
                <Link href="/sign-up" className="border-2 border-purple-500 text-purple-600 px-6 py-3 rounded-lg flex-1 text-center font-medium hover:bg-purple-50 transition-all">
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }

  const user = await getUserById(userId);
// 由于clerk只提供基本的认证信息，如用户id
// 完整的用户数据存储在mongodb数据库中，所以需要从mongodb数据库中获取用户数据
  return (
    <>
      <Header title={transformation.title} subtitle={transformation.subTitle} />
      <section className="mt-10">
      <TransformationForm
        action="Add"  // 表示这是添加新转换，而不是更新现有的转换操作
        userId={user._id} // 传递用户的mongodb的id
        type={transformation.type as TransformationTypeKey}
        // 传递转换类型type，如restore，remove
        creditBalance={user.creditBalance}
        // 传递用户的积分余额，检查用户是否有足够的积分进行转换操作
      />


      </section>
    </>
  );
};

export default AddTransformationTypePage;
