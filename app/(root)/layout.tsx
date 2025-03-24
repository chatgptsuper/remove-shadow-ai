import Footer from "@/components/shared/Footer";
import MoblieNav from "@/components/shared/MoblieNav";
import Sidebar from "@/components/shared/Sidebar";
import { Toaster } from "sonner";
import {Metadata} from "next";

export const metadata: Metadata = {
  title: "Remove Shadow | AI Image Transformation Tool",
  description:
    "Transform your images with AI-powered technology. Remove shadows, backgrounds, and unwanted objects to create professional-quality photos in seconds.",
    icons: {
      icon: '/favicon.ico',
      // apple: '/apple-icon.png',
    },
    openGraph: {
    title: "Remove Shadow - AI Image Transformation Made Easy",
    description:
      "Transform your images with AI-powered technology. Remove shadows, backgrounds, and unwanted objects to create professional-quality photos in seconds.",
    type: "website",
    locale: "en_US",
    url: "https://removeshadow.com",
    siteName: "Remove Shadow",
  },
  twitter: {
    card: "summary_large_image",
    title: "Remove Shadow - AI Image Transformation Made Easy",
    description:
      "Transform your images with AI-powered technology. Remove shadows, backgrounds, and unwanted objects to create professional-quality photos in seconds.",
  },
  alternates: {
    canonical: "https://removeshadow.com",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="root">
      <Sidebar />
      <MoblieNav />
      <div className="root-container flex flex-col min-h-screen">
        <div className="wrapper flex-grow pb-60">{children}</div>
        <Footer />
      </div>

      <Toaster />

    </main>
  );
};

export default RootLayout;
