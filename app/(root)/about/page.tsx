import Image from "next/image";
import Link from "next/link";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import Header from "@/components/shared/Header";
import { Button } from "@/components/ui/button";
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us | Remove Shadow",
  description:
    "Discover our AI-powered image processing technology for shadow removal, background removal, and image enhancement. Learn about our features, workflow, and how we help creative professionals achieve flawless results.",
  openGraph: {
    title: "About Remove Shadow - AI Image Processing Technology",
    description:
      "Discover our AI-powered image processing technology for shadow removal, background removal, and image enhancement. Learn about our features, workflow, and how we help creative professionals achieve flawless results.",
    type: "website",
    locale: "en_US",
    url: "https://removeshadow.com/about",
    siteName: "Remove Shadow",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Remove Shadow - AI Image Processing Technology",
    description:
      "Discover our AI-powered image processing technology for shadow removal, background removal, and image enhancement. Learn about our features, workflow, and how we help creative professionals achieve flawless results.",
  },
  alternates: {
    canonical: "https://removeshadow.com/about",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const AboutPage = () => {
  return (
    <>
      <Header
        title="About RemoveShadow"
        subtitle="Learn about our AI-powered image processing technology and services"
      />

      <section className="mt-10">
        <div className="flex flex-col gap-8 md:gap-12">
          {/* Introduction Section */}
          <div className="flex flex-col-reverse md:flex-row gap-10 items-center">
            <div className="flex-1">
              <h2 className="h3-bold mb-4 text-purple-600">
                Advanced Shadow Removal Technology
              </h2>
              <p className="p-16-regular mb-6">
                RemoveShadow is an AI-powered platform specializing in shadow
                removal and image enhancement. Our cutting-edge technology
                intelligently detects and eliminates unwanted shadows from
                photos, creating clean, professional images for e-commerce, real
                estate, photography, and more.
              </p>
              <p className="p-16-regular">
                Beyond our core shadow removal capability, we offer a
                comprehensive suite of image processing tools including
                background removal, object removal, and image restoration - all
                designed to help creative professionals achieve flawless visual
                results with minimal effort.
              </p>
            </div>
            <div className="flex-1 flex-center">
              <div className="w-full max-w-[500px] rounded-lg overflow-hidden shadow-lg">
                <ReactCompareSlider
                  itemOne={
                    <ReactCompareSliderImage
                      src="/assets/images/before.png"
                      alt="Before Shadow Removal"
                    />
                  }
                  itemTwo={
                    <ReactCompareSliderImage
                      src="/assets/images/after.png"
                      alt="After Shadow Removal"
                    />
                  }
                  position={50}
                  style={{
                    height: '400px',
                  }}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Core Features */}
          <div className="mt-10">
            <h2 className="h3-bold mb-6 text-center text-purple-600">
              Core Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-purple-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 rounded-full bg-purple-100 flex-center mr-3">
                    <Image
                      src="/assets/icons/scan.svg"
                      alt="Shadow Removal"
                      width={24}
                      height={24}
                    />
                  </div>
                  <h3 className="p-20-semibold text-purple-700">
                    Shadow Removal
                  </h3>
                </div>
                <p className="p-16-regular">
                  Our flagship feature uses advanced AI to detect and eliminate
                  unwanted shadows from your images, creating clean,
                  professional results for product photography and more.
                </p>
              </div>
              <div className="bg-purple-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 rounded-full bg-purple-100 flex-center mr-3">
                    <Image
                      src="/assets/icons/camera.svg"
                      alt="Background Removal"
                      width={24}
                      height={24}
                    />
                  </div>
                  <h3 className="p-20-semibold text-purple-700">
                    Background Removal
                  </h3>
                </div>
                <p className="p-16-regular">
                  Intelligently identify and remove image backgrounds to create
                  clean visuals for your product photos, portraits, or other
                  materials.
                </p>
              </div>
              <div className="bg-purple-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 rounded-full bg-purple-100 flex-center mr-3">
                    <Image
                      src="/assets/icons/image.svg"
                      alt="Image Restoration"
                      width={24}
                      height={24}
                    />
                  </div>
                  <h3 className="p-20-semibold text-purple-700">
                    Image Restoration
                  </h3>
                </div>
                <p className="p-16-regular">
                  Repair old or damaged photos, remove scratches, stains, and
                  other imperfections to restore the original quality of your
                  images.
                </p>
              </div>
              <div className="bg-purple-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 rounded-full bg-purple-100 flex-center mr-3">
                    <Image
                      src="/assets/icons/scan.svg"
                      alt="Object Removal"
                      width={24}
                      height={24}
                    />
                  </div>
                  <h3 className="p-20-semibold text-purple-700">
                    Object Removal
                  </h3>
                </div>
                <p className="p-16-regular">
                  Easily remove unwanted objects or people from your images
                  while maintaining natural scene harmony with seamless
                  retouching.
                </p>
              </div>
              <div className="bg-purple-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 rounded-full bg-purple-100 flex-center mr-3">
                    <Image
                      src="/assets/icons/stars.svg"
                      alt="Generative Fill"
                      width={24}
                      height={24}
                    />
                  </div>
                  <h3 className="p-20-semibold text-purple-700">
                    Generative Fill
                  </h3>
                </div>
                <p className="p-16-regular">
                  Intelligently fill in missing or removed parts of images with
                  AI-generated content that seamlessly matches the surrounding
                  context.
                </p>
              </div>

              <div className="bg-purple-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 rounded-full bg-purple-100 flex-center mr-3">
                    <Image
                      src="/assets/icons/filter.svg"
                      alt="Object Recolor"
                      width={24}
                      height={24}
                    />
                  </div>
                  <h3 className="p-20-semibold text-purple-700">
                    Object Recolor
                  </h3>
                </div>
                <p className="p-16-regular">
                  Selectively change the colors of objects in your images while
                  maintaining natural lighting and texture effects.
                </p>
              </div>
            </div>
          </div>

          {/* How It Works */}
          <div className="mt-12 bg-gray-50 p-8 rounded-xl">
            <h2 className="h3-bold mb-8 text-center text-purple-600">
              How It Works
            </h2>
            <div className="flex flex-col md:flex-row gap-6 justify-between">
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-purple-100 flex-center mb-4">
                  <span className="text-purple-700 font-bold text-xl">1</span>
                </div>
                <h3 className="p-18-semibold mb-2">Create Account</h3>
                <p className="p-16-regular">
                  Sign up and log in to the RemoveShadow platform to begin your
                  image processing journey
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-purple-100 flex-center mb-4">
                  <span className="text-purple-700 font-bold text-xl">2</span>
                </div>
                <h3 className="p-18-semibold mb-2">Upload Image</h3>
                <p className="p-16-regular">
                  Upload the image files you need to process to the platform
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-purple-100 flex-center mb-4">
                  <span className="text-purple-700 font-bold text-xl">3</span>
                </div>
                <h3 className="p-18-semibold mb-2">Choose Transformation</h3>
                <p className="p-16-regular">
                  Select from multiple image processing options for your desired
                  effect
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-purple-100 flex-center mb-4">
                  <span className="text-purple-700 font-bold text-xl">4</span>
                </div>
                <h3 className="p-18-semibold mb-2">Download Result</h3>
                <p className="p-16-regular">
                  Once processing is complete, download your high-quality
                  transformed image
                </p>
              </div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="mt-12">
            <h2 className="h3-bold mb-8 text-center text-purple-600">
              What Our Users Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gray-200 mr-4">
                    <Image
                      src="/assets/images/user1.jpg"
                      alt="Sarah Johnson"
                      width={48}
                      height={48}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h4 className="p-18-semibold">Sarah Johnson</h4>
                    <p className="text-gray-500 text-sm">Photographer</p>
                  </div>
                </div>
                <p className="p-16-regular italic">
                  &quot;RemoveShaodw has revolutionized my workflow. The
                  background removal tool is incredibly accurate and saves me
                  hours of editing time. Highly recommended for any creative
                  professional!&quot;
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gray-200 mr-4">
                    <Image
                      src="/assets/images/user2.jpg"
                      alt="Michael Chen"
                      width={48}
                      height={48}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h4 className="p-18-semibold">Michael Chen</h4>
                    <p className="text-gray-500 text-sm">E-commerce Manager</p>
                  </div>
                </div>
                <p className="p-16-regular italic">
                  &quot;We&apos;ve been using RemoveShadow for our product
                  photos and the results are outstanding. The platform is
                  intuitive and the processing speed is impressive. It&apos;s
                  become an essential tool for our marketing team.&quot;
                </p>
              </div>
            </div>
          </div>

          {/* Pricing Plans */}
          <div className="mt-12 text-center">
            <h2 className="h3-bold mb-6 text-purple-600">
              Flexible Pricing Plans
            </h2>
            <p className="p-16-regular max-w-3xl mx-auto mb-6">
              We offer a variety of pricing plans, from free trials to
              enterprise-level solutions, to meet the needs of different users.
              Each plan includes a different number of image processing credits,
              allowing you to choose the option that best fits your usage.
            </p>
            <Button asChild className="bg-purple-gradient text-white">
              <Link href="/pricing">View Pricing Plans</Link>
            </Button>
          </div>

          {/* Contact Us */}
          <div className="mt-16 bg-purple-50 p-8 rounded-xl">
            <h2 className="h3-bold mb-4 text-center text-purple-600">
              Contact Us
            </h2>
            <p className="p-16-regular text-center max-w-2xl mx-auto mb-6">
              If you have any questions, suggestions, or partnership inquiries,
              please feel free to contact us. Our team is dedicated to providing
              you with support and assistance.
            </p>
            <div className="flex justify-center">
              <Link
                href="mailto:support@removeshadow.com"
                className="text-purple-600 hover:text-purple-800 transition-colors text-2xl font-medium"
              >
                support@removeshadow.com
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
