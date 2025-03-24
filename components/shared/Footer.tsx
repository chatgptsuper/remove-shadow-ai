"use client";

import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  // Function to handle social media sharing
  const handleShare = (platform: string) => {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent("Check out this amazing AI image transformation tool!");
    
    let shareUrl = '';
    
    switch(platform) {
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${title}`;
        break;
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
        break;
      case 'instagram':
        // Instagram doesn't have a direct share URL, but we can open Instagram
        shareUrl = 'https://www.instagram.com/';
        break;
      default:
        shareUrl = '';
    }
    
    if (shareUrl) {
      window.open(shareUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <footer className="w-full bg-white text-dark-500 py-6 border-t border-gray-200 shadow-sm mt-auto">
      <div className="wrapper grid grid-cols-1 md:grid-cols-4 gap-8">
      <div className="col-span-1 md:col-span-2">
      <Link href="/" className="mb-6 inline-block">
            <div className="overflow-hidden rounded-lg bg-purple-gradient p-4 flex items-center hover:opacity-90 transition-all">
              <div className="flex flex-col">
                <span className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                  Remove<span className="text-purple-200">Shadow</span>
                </span>
              </div>
            </div>
          </Link>
          {/* ico图标 */}
          {/* <Link href="/" className="mb-6 ml-4 inline-block">
            <div className="overflow-hidden rounded-lg bg-purple-gradient flex items-center justify-center hover:opacity-90 transition-all w-12 h-12">
              <span className="text-xl font-bold text-white">RS</span>
            </div>
          </Link> */}
          
          <p className="p-16-regular text-gray-600 mb-4">
            AI-powered image processing tools that unleash your creative potential.
          </p>
          <div className="flex gap-4">
            <button 
              onClick={() => handleShare('twitter')}
              className="text-purple-500 hover:text-purple-700 transition-colors bg-purple-100 p-2 rounded-full hover:bg-purple-200"
              aria-label="Share on Twitter"
            >
              <Image 
                src="/assets/icons/twitter.svg"
                alt="Twitter"
                width={20}
                height={20}
              />
            </button>
            <button 
              onClick={() => handleShare('facebook')}
              className="text-purple-500 hover:text-purple-700 transition-colors bg-purple-100 p-2 rounded-full hover:bg-purple-200"
              aria-label="Share on Facebook"
            >
              <Image 
                src="/assets/icons/facebook.svg"
                alt="Facebook"
                width={20}
                height={20}
              />
            </button>
            <button 
              onClick={() => handleShare('instagram')}
              className="text-purple-500 hover:text-purple-700 transition-colors bg-purple-100 p-2 rounded-full hover:bg-purple-200"
              aria-label="Visit our Instagram"
            >
              <Image 
                src="/assets/icons/instagram.svg"
                alt="Instagram"
                width={20}
                height={20}
              />
            </button>
          </div>
        </div>
        
        <div>
          <h3 className="p-16-semibold mb-4 text-dark-600">Features</h3>
          <ul className="space-y-3">
          <li>
              <Link href="/transformations/add/remove-shadow-from-photo" className="p-14-regular text-gray-600 hover:text-purple-600 transition-colors flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                Shadow Remove
              </Link>
            </li>
            <li>
              <Link href="/transformations/add/remove-background-from-image" className="p-14-regular text-gray-600 hover:text-purple-600 transition-colors flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                Background Remove
              </Link>
            </li>
            <li>
              <Link href="/transformations/add/image-restore" className="p-14-regular text-gray-600 hover:text-purple-600 transition-colors flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                Image Restore
              </Link>
            </li>
            <li>
              <Link href="/transformations/add/image-recolor" className="p-14-regular text-gray-600 hover:text-purple-600 transition-colors flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                Object Recolor
              </Link>
            </li>
            <li>
              <Link href="/transformations/add/remove-object-from-photo" className="p-14-regular text-gray-600 hover:text-purple-600 transition-colors flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                Object Remove
              </Link>
            </li>
            <li>
              <Link href="/transformations/add/generative-fill" className="p-14-regular text-gray-600 hover:text-purple-600 transition-colors flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                Generative Fill
              </Link>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 className="p-16-semibold mb-4 text-dark-600">Company</h3>
          <ul className="space-y-3">
            <li>
              <Link href="/pricing" className="p-14-regular text-gray-600 hover:text-purple-600 transition-colors flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                Pricing
              </Link>
            </li>
            <li>
              <Link href="/about" className="p-14-regular text-gray-600 hover:text-purple-600 transition-colors flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                About Us
              </Link>
            </li>
            <li>
              <Link href="/profile" className="p-14-regular text-gray-600 hover:text-purple-600 transition-colors flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                Profile
              </Link>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="wrapper mt-10 pt-6 border-t border-gray-200">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="p-14-regular text-gray-500">
            © {new Date().getFullYear()} RemoveShadow. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/terms" className="p-14-regular text-gray-500 hover:text-purple-600 transition-colors">
              Terms of Service
            </Link>
            <Link href="/privacy" className="p-14-regular text-gray-500 hover:text-purple-600 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/cookie" className="p-14-regular text-gray-500 hover:text-purple-600 transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;