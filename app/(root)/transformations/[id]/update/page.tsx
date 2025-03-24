import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

import Header from "@/components/shared/Header";
import TransformationForm from "@/components/shared/TransformationForm";
import { transformationTypes } from "@/constants";
import { getUserById } from "@/lib/actions/user.actions";
import { getImageById } from "@/lib/actions/image.actions";
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Update Image | Remove Shadow",
  description: "Update image in your account using Remove Shadow's AI image transformation services",
  robots: {
    index: false,
    follow: false,
  }
}
const Page = async ({ params: { id } }: SearchParamProps) => {
  const { userId } =  await auth();

  if (!userId) redirect("/sign-in");

  const user = await getUserById(userId);
  const image = await getImageById(id);

  let transformation = transformationTypes[image.transformationType as keyof typeof transformationTypes];

  return (
    <>
      <Header title={transformation.title} subtitle={transformation.subTitle} />

      <section className="mt-10">
        <TransformationForm
          action="Update"
          userId={user._id}
          type={image.transformationType as TransformationTypeKey}
          creditBalance={user.creditBalance}
          config={image.config}
          data={image}
        />
      </section>
    </>
  );
};

export default Page;