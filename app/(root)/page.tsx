import { Collection } from "@/components/shared/Collection"
import { navLinks } from "@/constants"
import { getAllImages } from "@/lib/actions/image.actions"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Remove Shadow | AI Image Transformation Tool",
  description:
    "Transform your images with AI-powered technology. Remove shadows, backgrounds, and unwanted objects to create professional-quality photos in seconds.",
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
const Home = async ({ searchParams }: SearchParamProps) => {
  const page = Number(searchParams?.page) || 1;
  const searchQuery = (searchParams?.query as string) || '';

  const images = await getAllImages({ page, searchQuery})

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-purple-600 via-purple-500 to-purple-400 overflow-hidden">
        {/* 装饰元素 */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 opacity-20 rounded-full blur-3xl"></div>
          <div className="absolute top-60 -left-20 w-60 h-60 bg-indigo-500 opacity-20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-pink-500 opacity-20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 py-20 relative z-10">
          {/* 主要内容 */}
          <div className="flex flex-col items-center text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
              <span className="text-white text-sm font-medium">AI-Powered Image Editing</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-4xl leading-tight">
              Transform Your Images with <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300">AI Magic</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mb-10">
              Our advanced AI technology automatically enhances your photos by removing shadows, 
              backgrounds, and unwanted objects - creating professional-quality images in seconds.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Button asChild size="lg" className="bg-white text-purple-700 hover:bg-white/90 transition-all shadow-lg">
                <Link href="/transformations/add/remove-shadow-from-photo">
                  <span className="flex items-center gap-2">
                    Try for Free <Image src="/assets/icons/arrow.svg" width={16} height={16} alt="Arrow" />
                  </span>
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/30 text-black hover:bg-white/90 transition-all">
                <Link href="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
          {/* 信任标志 */}
          <div className="mt-20">
            <p className="text-white text-center mb-8 text-sm uppercase tracking-wider font-medium">
              Trusted by creators worldwide
            </p>
            <div className="flex justify-center flex-wrap gap-10 md:gap-16">
              {navLinks.slice(1, 6).map((link) => (
                <Link
                  key={link.route}
                  href={link.route}
                  className="flex flex-col items-center gap-3 group"
                >
                  <div className="flex items-center justify-center w-20 h-20 rounded-full bg-white/30 backdrop-blur-xl border-2 border-white/40 shadow-xl transition-all duration-300 
                    group-hover:bg-white/60 group-hover:scale-110 group-hover:border-white/70 
                    group-hover:shadow-white/20 group-hover:shadow-lg">
                    <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-white to-white/80 rounded-full">
                      <Image 
                        src={link.icon} 
                        alt={link.label} 
                        width={24} 
                        height={24} 
                        className="transition-all group-hover:scale-110" 
                      />
                    </div>
                  </div>
                  <p className="text-sm font-semibold text-center text-white group-hover:text-white transition-colors">
                    {link.label}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Comparison */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="h2-bold text-center mb-4">See the Difference</h2>
          <p className="text-center max-w-3xl mx-auto mb-8">
            Explore our powerful image transformation tools
          </p>
          
          
          {/* Main feature - Shadow Removal */}
          <div className="max-w-4xl mx-auto mb-16 bg-white rounded-xl overflow-hidden shadow-lg">
            <div className="p-8 pb-4">
              <h3 className="p-24-semibold text-center mb-4 text-purple-700">Shadow Remove</h3>
              <p className="text-center max-w-2xl mx-auto mb-6 text-gray-600">
                Our flagship technology automatically detects and removes unwanted shadows from your photos, 
                creating clean, professional images instantly.
              </p>
            </div>
            <div className="p-4">
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
                  height: '450px',
                  borderRadius: '0.5rem',
                }}
                className="shadow-inner"
              />
            </div>
            <div className="p-6 text-center">
              <Button asChild size="lg" className="bg-purple-gradient text-white">
                <Link href="/transformations/add/remove-shadow-from-photo">Try Shadow Remove</Link>
              </Button>
            </div>
          </div>
          
          {/* 其他功能展示 - 垂直布局 */}
          <div className="space-y-16 mt-20">
            {/* Background Removal */}
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <h3 className="p-24-semibold mb-4 text-purple-700">Background Remove</h3>
                  <p className="p-16-regular mb-6 text-gray-600">
                    Instantly remove backgrounds from your images with perfect edge detection. 
                    Create professional product photos with clean, transparent backgrounds for 
                    e-commerce, marketing materials, or design projects.
                  </p>
                  <Button asChild size="lg" className="bg-purple-gradient text-white">
                    <Link href="/transformations/add/removeBackground">Try Background Remove</Link>
                  </Button>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-md order-1 md:order-2">
                  <ReactCompareSlider
                    itemOne={
                      <ReactCompareSliderImage
                        src="/assets/images/bg-before1.png"
                        alt="Before Background Removal"
                      />
                    }
                    itemTwo={
                      <ReactCompareSliderImage
                        src="/assets/images/bg-after2.png"
                        alt="After Background Removal"
                      />
                    }
                    position={50}
                    style={{
                      height: '350px',
                      borderRadius: '0.5rem',
                    }}
                    className="shadow-inner"
                  />
                </div>
              </div>
            </div>
            
            {/* 分隔线 */}
            <div className="max-w-md mx-auto border-t border-gray-200"></div>
            
            {/* Object Removal */}
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="bg-white p-4 rounded-xl shadow-md">
                  <ReactCompareSlider
                    itemOne={
                      <ReactCompareSliderImage
                        src="/assets/images/remove-before.png"
                        alt="Before Object Removal"
                      />
                    }
                    itemTwo={
                      <ReactCompareSliderImage
                        src="/assets/images/remove-after.png"
                        alt="After Object Removal"
                      />
                    }
                    position={50}
                    style={{
                      height: '350px',
                      borderRadius: '0.5rem',
                    }}
                    className="shadow-inner"
                  />
                </div>
                <div>
                  <h3 className="p-24-semibold mb-4 text-purple-700">Object Remove</h3>
                  <p className="p-16-regular mb-6 text-gray-600">
                    Remove unwanted objects, people, or distractions from your photos with 
                    precision. Our AI intelligently fills the space, maintaining the natural 
                    look of your image without any trace of the removed elements.
                  </p>
                  <Button asChild size="lg" className="bg-purple-gradient text-white">
                    <Link href="/transformations/add/remove">Try Object Remove</Link>
                  </Button>
                </div>
              </div>
            </div>
            
            {/* 分隔线 */}
            <div className="max-w-md mx-auto border-t border-gray-200"></div>
            
            {/* Image Restoration */}
            {/* <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <h3 className="p-24-semibold mb-4 text-purple-700">Image Restore</h3>
                  <p className="p-16-regular mb-6 text-gray-600">
                    Repair old or damaged photos, remove scratches, and restore faded colors. 
                    Breathe new life into cherished memories and preserve your visual history 
                    with our advanced restoration technology.
                  </p>
                  <Button asChild size="lg" className="bg-purple-gradient text-white">
                    <Link href="/transformations/add/restore">Try Image Restore</Link>
                  </Button>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-md order-1 md:order-2">
                  <ReactCompareSlider
                    itemOne={
                      <ReactCompareSliderImage
                        src="/assets/images/restore-before.png"
                        alt="Before Restoration"
                      />
                    }
                    itemTwo={
                      <ReactCompareSliderImage
                        src="/assets/images/fill-after.png"
                        alt="After Restoration"
                      />
                    }
                    position={50}
                    style={{
                      height: '350px',
                      borderRadius: '0.5rem',
                    }}
                    className="shadow-inner"
                  />
                </div>
              </div>
            </div> */}
            
            {/* 分隔线 */}
            {/* <div className="max-w-md mx-auto border-t border-gray-200"></div> */}
            
            {/* 分隔线 */}
            {/* <div className="max-w-md mx-auto border-t border-gray-200"></div> */}
            
            {/* Generative Fill */}
            {/* <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="bg-white p-4 rounded-xl shadow-md">
                  <ReactCompareSlider
                    itemOne={
                      <ReactCompareSliderImage
                        src="/assets/images/fill-before.png"
                        alt="Before Generative Fill"
                      />
                    }
                    itemTwo={
                      <ReactCompareSliderImage
                        src="/assets/images/fill-after.png"
                        alt="After Generative Fill"
                      />
                    }
                    position={50}
                    style={{
                      height: '350px',
                      borderRadius: '0.5rem',
                    }}
                    className="shadow-inner"
                  />
                </div>
                <div>
                  <h3 className="p-24-semibold mb-4 text-purple-700">Generative Fill</h3>
                  <p className="p-16-regular mb-6 text-gray-600">
                    Enhance an image&apos;s dimensions using AI outpainting technology. 
                    Expand your photos beyond their original boundaries with 
                    naturally generated content that seamlessly blends with the original image.
                  </p>
                  <Button asChild size="lg" className="bg-purple-gradient text-white">
                    <Link href="/transformations/add/fill">Try Generative Fill</Link>
                  </Button>
                </div>
              </div>
            </div> */}
            
            {/* 分隔线 */}
            <div className="max-w-md mx-auto border-t border-gray-200"></div>
            
            {/* Object Recolor */}
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <h3 className="p-24-semibold mb-4 text-purple-700">Object Recolor</h3>
                  <p className="p-16-regular mb-6 text-gray-600">
                    Identify and recolor specific objects in your images with precision.
                    Change colors without affecting the rest of your image for perfect 
                    product variants and creative design options.
                  </p>
                  <Button asChild size="lg" className="bg-purple-gradient text-white">
                    <Link href="/transformations/add/recolor">Try Object Recolor</Link>
                  </Button>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-md order-1 md:order-2">
                  <ReactCompareSlider
                    itemOne={
                      <ReactCompareSliderImage
                        src="/assets/images/recolor-before.png"
                        alt="Before Object Recolor"
                      />
                    }
                    itemTwo={
                      <ReactCompareSliderImage
                        src="/assets/images/recolor-after.png"
                        alt="After Object Recolor"
                      />
                    }
                    position={50}
                    style={{
                      height: '350px',
                      borderRadius: '0.5rem',
                    }}
                    className="shadow-inner"
                  />
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </section>


      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="h2-bold text-center mb-12">Frequently Asked Questions</h2>
          
          <div className="space-y-4">
            {[
              {
                question: "How does the shadow removal technology work?",
                answer: "Our AI technology uses advanced machine learning algorithms to detect shadows in your images and intelligently remove them while preserving the natural look of your photos. The system analyzes light patterns, colors, and textures to identify shadow areas, then applies precise adjustments to restore details hidden by shadows."
              },
              {
                question: "Can I use the processed images for commercial purposes?",
                answer: "Yes! All images processed with our platform are yours to use for any purpose, including commercial use. You own full copyright to all output images with no attribution or additional fees required."
              },
              {
                question: "What file formats are supported?",
                answer: "We support all major image formats including JPG, PNG, WEBP, and HEIC. The maximum file size is 10MB per image. For larger files, we recommend compressing them before uploading or contacting our customer support team for assistance."
              },
              {
                question: "How long does it take to process an image?",
                answer: "Most images are processed within seconds. Processing time depends on the size and complexity of the image, as well as current system load. Premium users enjoy priority processing and typically get faster results."
              },
              {
                question: "What makes RemoveShadow different from other image editing tools?",
                answer: "RemoveShadow combines state-of-the-art AI models with an intuitive interface, making professional-grade image editing accessible to everyone. Our technology offers superior accuracy in detecting and processing complex image elements, with results that look natural and professional every time."
              },
              {
                question: "Do I need to install any software to use RemoveShadow?",
                answer: "No installation required! Imaginify is a fully web-based platform that works in your browser. You can access all features from any device with an internet connection, including desktops, laptops, tablets, and smartphones."
              },
              {
                question: "Is my data secure when I upload images to RemoveShadow?",
                answer: "Absolutely. We take data security seriously. All uploaded images are processed through secure, encrypted connections. We don't share your images with third parties, and you can delete your data from our servers at any time. For more details, please review our privacy policy."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden">
                <details className="group">
                  <summary className="p-6 flex justify-between items-center cursor-pointer">
                    <h3 className="p-20-semibold text-gray-800">{faq.question}</h3>
                    <span className="ml-6 flex-shrink-0 text-purple-600 group-open:rotate-180 transition-transform duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </span>
                  </summary>
                  <div className="px-6 pb-6 pt-0 text-gray-600 border-t border-gray-100">
                    <p className="p-16-regular">{faq.answer}</p>
                  </div>
                </details>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        {/* 渐变背景 */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-600 via-purple-500 to-purple-400"></div>
        
        {/* 装饰元素 */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-purple-500 opacity-20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-indigo-500 opacity-20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-pink-500 opacity-10 rounded-full blur-3xl"></div>
        </div>
        
        {/* 网格装饰 */}
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:40px_40px]"></div>
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
            <span className="text-white text-sm font-medium">Start Your Journey Today</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Ready to Transform Your Images?</h2>
          <p className="text-lg mb-10 max-w-2xl mx-auto text-white">
            Join thousands of photographers, designers, and e-commerce businesses who trust our AI technology for perfect images.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-purple-700 hover:bg-white/90 transition-all shadow-lg">
              <Link href="/transformations/new">
                <span className="flex items-center gap-2">
                  Get Started for Free <Image src="/assets/icons/arrow.svg" width={16} height={16} alt="Arrow" />
                </span>
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/30 text-black hover:bg-white/10 transition-all">
              <Link href="/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
      </section>

    </>
  )
}

export default Home