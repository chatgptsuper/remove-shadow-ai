import Header from "@/components/shared/Header";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service | Remove Shadow",
  description:
    "Our terms of service outline the rules, guidelines, and legal agreements between you and Remove Shadow for using our AI image transformation services.",
  openGraph: {
    title: "Terms of Service | Remove Shadow",
    description:
      "Our terms of service outline the rules, guidelines, and legal agreements between you and Remove Shadow for using our AI image transformation services.",
    type: "website",
    locale: "en_US",
    url: "https://removeshadow.com/terms",
    siteName: "Remove Shadow",
  },
  twitter: {
    card: "summary",
    title: "Terms of Service | Remove Shadow",
    description:
      "Our terms of service outline the rules, guidelines, and legal agreements between you and Remove Shadow for using our AI image transformation services.",
  },
  alternates: {
    canonical: "https://removeshadow.com/terms",
  },
  robots: {
    index: true,
    follow: true,
  },
};
const TermsPage = () => {
  return (
    <>
      <Header
        title="Terms of Service"
        subtitle="Please read our terms of service and conditions of use carefully"
      />

      <section className="mt-10">
        <div className="flex flex-col gap-8">
          {/* Introduction Section */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="h3-bold mb-4 text-purple-600">Welcome to RemoveShadow</h2>
            <p className="p-16-regular mb-4">
              Thank you for using our services. These Terms of Service (&quot;Terms&quot;) constitute an agreement between you and RemoveShadow (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), governing your use of our website, services, and applications.
            </p>
            <p className="p-16-regular">
              By accessing or using our services, you agree to be bound by these Terms. If you do not agree to any part of these Terms, you may not use our services.
            </p>
          </div>

          {/* Service Description */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="h3-bold mb-4 text-purple-600">Service Description</h2>
            <p className="p-16-regular mb-4">
              RemoveShadow provides AI-powered image processing services, including but not limited to shadow removal, background removal, image restoration, and object removal.
            </p>
            <p className="p-16-regular">
              We reserve the right to modify, suspend, or terminate the services at any time without notice. We are not responsible for any loss resulting from service interruptions, modifications, or terminations.
            </p>
          </div>

          {/* User Accounts */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="h3-bold mb-4 text-purple-600">User Accounts</h2>
            <p className="p-16-regular mb-4">
              To use certain services, you may need to create an account. You are responsible for maintaining the security of your account and are fully responsible for all activities that occur under your account.
            </p>
            <p className="p-16-regular">
              You agree to provide accurate, complete, and up-to-date information. If any information you provide is inaccurate, incomplete, or outdated, we may suspend or terminate your account.
            </p>
          </div>

          {/* Payments and Refunds */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="h3-bold mb-4 text-purple-600">Payments and Refunds</h2>
            <p className="p-16-regular mb-4">
              We offer both free and paid services. For paid services, you agree to pay all fees and applicable taxes. We offer a 14-day money-back guarantee for all purchases. If you are not satisfied with our services, you can request a refund within 14 days of your purchase.
            </p>
            <p className="p-16-regular">
              We reserve the right to change our prices at any time. Price changes will take effect after notification, typically by posting on our website or sending you an email.
            </p>
          </div>

          {/* Intellectual Property */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="h3-bold mb-4 text-purple-600">Intellectual Property</h2>
            <p className="p-16-regular mb-4">
              Our services and content (excluding content provided by you) and all materials provided by us are owned by us or our licensors. These materials are protected by copyright, trademark, and other intellectual property laws.
            </p>
            <p className="p-16-regular">
              You retain all rights to the content you upload to our services. By uploading content, you grant us a non-exclusive, worldwide, royalty-free license to use, copy, modify, publish, and display that content to provide and improve our services.
            </p>
          </div>

          {/* Prohibited Conduct */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="h3-bold mb-4 text-purple-600">Prohibited Conduct</h2>
            <p className="p-16-regular mb-4">
              You agree not to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li className="p-16-regular">Violate any applicable laws or regulations</li>
              <li className="p-16-regular">Infringe upon the intellectual property or other rights of others</li>
              <li className="p-16-regular">Upload content containing viruses, malware, or other harmful code</li>
              <li className="p-16-regular">Interfere with or disrupt the security or functionality of our services</li>
              <li className="p-16-regular">Use our services to send spam or engage in fraudulent activities</li>
              <li className="p-16-regular">Upload or share illegal, pornographic, violent, or otherwise inappropriate content</li>
            </ul>
          </div>

          {/* Disclaimer */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="h3-bold mb-4 text-purple-600">Disclaimer</h2>
            <p className="p-16-regular mb-4">
              Our services are provided &quot;as is&quot; and &quot;as available&quot; without any warranties, express or implied. We do not guarantee that the services will be uninterrupted, timely, secure, or error-free.
            </p>
            <p className="p-16-regular">
              You understand and agree that you use our services at your own risk. We are not responsible for any damages resulting from your use or inability to use our services.
            </p>
          </div>

          {/* Limitation of Liability */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="h3-bold mb-4 text-purple-600">Limitation of Liability</h2>
            <p className="p-16-regular">
              To the maximum extent permitted by law, we shall not be liable for any indirect, punitive, special, incidental, or consequential damages, including loss of profits, data, or other intangible losses.
            </p>
          </div>

          {/* Privacy Policy */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="h3-bold mb-4 text-purple-600">Privacy Policy</h2>
            <p className="p-16-regular">
              Your privacy is important to us. Our Privacy Policy, which is incorporated into these Terms, explains how we collect, use, and protect your personal information. By using our services, you also agree to our Privacy Policy.
            </p>
          </div>

          {/* Modifications to Terms */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="h3-bold mb-4 text-purple-600">Modifications to Terms</h2>
            <p className="p-16-regular">
              We reserve the right to modify these Terms at any time. Modified Terms will be effective when posted on our website. Your continued use of our services will be deemed acceptance of the modified Terms.
            </p>
          </div>

          {/* Governing Law */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="h3-bold mb-4 text-purple-600">Governing Law</h2>
            <p className="p-16-regular">
              These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which we operate, without regard to its conflict of law provisions.
            </p>
          </div>

          {/* Contact Us */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="h3-bold mb-4 text-purple-600">Contact Us</h2>
            <p className="p-16-regular mb-6">
              If you have any questions or concerns about these Terms, please contact us at:
            </p>
            <div className="flex justify-center">
              <Link 
                href="mailto:support@removeshadow.com" 
                className="text-purple-600 hover:text-purple-800 transition-colors text-xl font-medium"
              >
                support@removeshadow.com
              </Link>
            </div>
          </div>

          {/* Return Button */}
          <div className="flex justify-center mt-6">
            <Button asChild className="bg-purple-gradient text-white">
              <Link href="/">Return to Home</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default TermsPage;