import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import { redirect } from "next/navigation";

import { Collection } from "@/components/shared/Collection";
import Header from "@/components/shared/Header";
import { getUserImages } from "@/lib/actions/image.actions";
import { getUserById } from "@/lib/actions/user.actions";
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "User Profile | Remove Shadow",
  description:
    "View your available credits, transformation history, and manage your transformed images in one place.",
  openGraph: {
    title: "User Profile | Remove Shadow",
    description:
      "View your available credits, transformation history, and manage your transformed images in one place.",
    type: "website",
    locale: "en_US",
    url: "https://removeshadow.com/profile",
    siteName: "Remove Shadow",
  },
  twitter: {
    card: "summary",
    title: "User Profile | Remove Shadow",
    description:
      "View your available credits, transformation history, and manage your transformed images in one place.",
  },
  alternates: {
    canonical: "https://removeshadow.com/profile",
  },
  robots: {
    index: false,
    follow: true,
  },
};

const Profile = async ({ searchParams }: SearchParamProps) => {
  const page = Number(searchParams?.page) || 1;
  const searchQuery=(searchParams?.query as string) || '';

  const { userId } = await auth();

  if (!userId) redirect("/sign-in");

  const user = await getUserById(userId);
  const images = await getUserImages({ page, userId: user._id });

  return (
    <>
      <Header title="Profile" />

      <section className="profile">
        <div className="profile-balance">
          <p className="p-14-medium md:p-16-medium">CREDITS AVAILABLE</p>
          <div className="mt-4 flex items-center gap-4">
            <Image
              src="/assets/icons/coins.svg"
              alt="coins"
              width={50}
              height={50}
              className="size-9 md:size-12"
            />
            <h2 className="h2-bold text-dark-600">{user.creditBalance}</h2>
          </div>
        </div>

        <div className="profile-image-manipulation">
          <p className="p-14-medium md:p-16-medium">IMAGE MANIPULATION DONE</p>
          <div className="mt-4 flex items-center gap-4">
            <Image
              src="/assets/icons/photo.svg"
              alt="coins"
              width={50}
              height={50}
              className="size-9 md:size-12"
            />
            <h2 className="h2-bold text-dark-600">{images?.data.length}</h2>
          </div>
        </div>
      </section>

      <section className="mt-8 md:mt-14">
        <Collection
          hasSearch={false}
          images={images?.data}
          totalPages={images?.totalPages}
          page={page}
        />
      </section>
    </>
  );
};

export default Profile;
