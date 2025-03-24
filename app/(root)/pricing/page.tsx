import { SignedIn } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import { redirect } from "next/navigation";

import Header from "@/components/shared/Header";
import { Button } from "@/components/ui/button";
import { getUserById } from "@/lib/actions/user.actions";
import Checkout from "@/components/shared/Checkout";
import { Metadata } from "next"
import { checkoutCredits } from "@/lib/actions/transaction.action";
import { CREEM_PRODUCT_IDS } from "@/constants/index";

export const metadata: Metadata = {
  title: "Pricing Plans | Remove Shadow",
  description:
    "Choose from our flexible pricing plans for AI image transformation services. Get credits for shadow removal, background removal, and more.",
  openGraph: {
    title: "Pricing Plans | Remove Shadow",
    description:
      "Choose from our flexible pricing plans for AI image transformation services. Get credits for shadow removal, background removal, and more.",
    type: "website",
    locale: "en_US",
    url: "https://removeshadow.com/pricing",
    siteName: "Remove Shadow",
  },
  twitter: {
    card: "summary",
    title: "Pricing Plans | Remove Shadow",
    description:
      "Choose from our flexible pricing plans for AI image transformation services. Get credits for shadow removal, background removal, and more.",
  },
  alternates: {
    canonical: "https://removeshadow.com/pricing",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const Credits = async () => {
  const { userId } = await auth();

  if (!userId) redirect("/sign-in");

  const user = await getUserById(userId);

  // Enhanced pricing plans
  const enhancedPlans = [
    {
      name: "Free",
      icon: "/assets/icons/free-plan.svg",
      price: 0,
      credits: 5,
      productId: "",
      inclusions: [
        {
          label: "5 Image Transformations",
          isIncluded: true,
        },
        {
          label: "Standard Processing Speed",
          isIncluded: true,
        },
        {
          label: "Basic Image Resolution",
          isIncluded: true,
        },
      ],
    },
    {
      name: "Starter",
      icon: "/assets/icons/free-plan.svg",
      price: 8,
      credits: 30,
      productId: CREEM_PRODUCT_IDS.STARTER || '',
      inclusions: [
        {
          label: "30 Image Transformations",
          isIncluded: true,
        },
        {
          label: "Standard Processing Speed",
          isIncluded: true,
        },
        {
          label: "Enhanced Image Resolution",
          isIncluded: true,
        },
      ],
    },
    {
      name: "Basic",
      icon: "/assets/icons/free-plan.svg",
      price: 15,
      credits: 75,
      productId: CREEM_PRODUCT_IDS.BASIC || '',
      inclusions: [
        {
          label: "75 Image Transformations",
          isIncluded: true,
        },
        {
          label: "Standard Processing Speed",
          isIncluded: true,
        },
        {
          label: "Enhanced Image Resolution",
          isIncluded: true,
        },
      ],
    },
    {
      name: "Pro",
      icon: "/assets/icons/free-plan.svg",
      price: 25,
      credits: 150,
      productId: CREEM_PRODUCT_IDS.PRO || '',
      inclusions: [
        {
          label: "150 Image Transformations",
          isIncluded: true,
        },
        {
          label: "Standard Processing Speed",
          isIncluded: true,
        },
        {
          label: "Enhanced Image Resolution",
          isIncluded: true,
        },
      ],
    },
    {
      name: "Business",
      icon: "/assets/icons/free-plan.svg",
      price: 45,
      credits: 400,
      productId: CREEM_PRODUCT_IDS.BUSINESS || '',
      inclusions: [
        {
          label: "400 Image Transformations",
          isIncluded: true,
        },
        {
          label: "Standard Processing Speed",
          isIncluded: true,
        },
        {
          label: "Enhanced Image Resolution",
          isIncluded: true,
        },
      ],
    },
    {
      name: "Enterprise",
      icon: "/assets/icons/free-plan.svg",
      price: 99,
      credits: 1000,
      productId: CREEM_PRODUCT_IDS.ENTERPRISE || '',
      inclusions: [
        {
          label: "1000 Image Transformations",
          isIncluded: true,
        },
        {
          label: "Standard Processing Speed",
          isIncluded: true,
        },
        {
          label: "Enhanced Image Resolution",
          isIncluded: true,
        },
      ],
    },
  ];

  return (
    <>
      <Header
        title="Pricing"
        subtitle="Choose a credit package that suits your needs!"
      />

      <section>
        <ul className="credits-list">
          {enhancedPlans.map((plan) => (
            <li
              key={plan.name}
              className={`credits-item relative ${
                plan.name === "Pro"
                  ? "border-3 border-purple-600 shadow-xl shadow-purple-200 bg-gradient-to-b from-purple-50 to-white scale-105 z-10 hover:border-purple-700"
                  : plan.name === "Free"
                  ? "border border-gray-200 hover:border-gray-300"
                  : plan.name === "Starter"
                  ? "border border-blue-200 hover:border-blue-300"
                  : plan.name === "Basic"
                  ? "border border-green-200 hover:border-green-300"
                  : plan.name === "Business"
                  ? "border border-orange-200 hover:border-orange-300"
                  : "border border-red-200 hover:border-red-300"
              } transition-all duration-300`}
            >
              {plan.name === "Pro" && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-purple-600 text-white px-6 py-1.5 rounded-full text-sm font-bold shadow-lg">
                  Most Popular
                </div>
              )}
              <div className="flex-center flex-col gap-3">
                <p
                  className={`p-20-semibold mt-2 ${
                    plan.name === "Pro"
                      ? "text-purple-700 text-xl"
                      : "text-purple-500"
                  }`}
                >
                  {plan.name}
                </p>
                <p
                  className={`h1-semibold ${
                    plan.name === "Pro"
                      ? "text-purple-800 text-[32px]"
                      : "text-dark-600"
                  }`}
                >
                  ${plan.price}
                </p>
                <p
                  className={`p-16-regular ${
                    plan.name === "Pro" ? "font-medium" : ""
                  }`}
                >
                  {plan.credits} Credits
                </p>
              </div>
              <ul className="flex flex-col gap-5 py-9">
                {plan.inclusions.map((inclusion) => (
                  <li
                    key={plan.name + inclusion.label}
                    className="flex items-center gap-4"
                  >
                    <Image
                      src={`/assets/icons/${
                        inclusion.isIncluded ? "check.svg" : "cross.svg"
                      }`}
                      alt="check"
                      width={24}
                      height={24}
                      className={
                        inclusion.isIncluded ? "text-green-500" : "text-red-500"
                      }
                    />
                    <p
                      className={`p-16-regular ${
                        inclusion.isIncluded ? "text-dark-600" : "text-gray-400"
                      }`}
                    >
                      {inclusion.label}
                    </p>
                  </li>
                ))}
              </ul>

              {plan.name === "Free" ? (
                <Button 
                  variant="outline" 
                  className="credits-btn"
                  disabled
                >
                  Free Plan
                </Button>
              ) : (
                <SignedIn>
                  <Checkout
                    plan={plan.name}
                    amount={plan.price}
                    credits={plan.credits}
                    buyerId={user._id}
                    productId={plan.productId}
                  />
                </SignedIn>
              )}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Credits;
