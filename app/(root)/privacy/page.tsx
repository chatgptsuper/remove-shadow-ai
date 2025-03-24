import Header from "@/components/shared/Header";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Remove Shadow",
  description:
    "How we collect, use, and protect your information when using our AI image transformation services.",
  openGraph: {
    title: "Privacy Policy | Remove Shadow",
    description:
      "How we collect, use, and protect your information when using our AI image transformation services.",
    type: "website",
    locale: "en_US",
    url: "https://removeshadow.com/privacy",
    siteName: "Remove Shadow",
  },
  twitter: {
    card: "summary",
    title: "Privacy Policy | Remove Shadow",
    description:
      "How we collect, use, and protect your information when using our AI image transformation services.",
  },
  alternates: {
    canonical: "https://removeshadow.com/privacy",
  },
  robots: {
    index: true,
    follow: true,
  },
};
const PrivacyPage = () => {
  return (
    <>
      <Header
        title="Privacy Policy"
        subtitle="How we collect, use, and protect your information"
      />

      <section className="mt-10">
        <div className="flex flex-col gap-8">
          {/* Introduction Section */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="h3-bold mb-4 text-purple-600">Introduction</h2>
            <p className="p-16-regular mb-4">
              At RemoveShadow, we respect your privacy and are committed to
              protecting your personal data. This Privacy Policy explains how we
              collect, use, and safeguard your information when you use our
              website and services.
            </p>
            <p className="p-16-regular">
              By using our services, you agree to the collection and use of
              information in accordance with this policy. We will not use or
              share your information with anyone except as described in this
              Privacy Policy.
            </p>
          </div>

          {/* Information We Collect */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="h3-bold mb-4 text-purple-600">
              Information We Collect
            </h2>
            <p className="p-16-regular mb-4">
              We collect several types of information for various purposes to
              provide and improve our service to you:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li className="p-16-regular">
                <span className="font-semibold">Personal Data:</span> While
                using our service, we may ask you to provide certain personally
                identifiable information that can be used to contact or identify
                you, including but not limited to email address, name, and
                billing information.
              </li>
              <li className="p-16-regular">
                <span className="font-semibold">Usage Data:</span> We may
                collect information on how the service is accessed and used.
                This may include information such as your computer&apos;s
                Internet Protocol address, browser type, browser version, the
                pages of our service that you visit, the time and date of your
                visit, the time spent on those pages, and other diagnostic data.
              </li>
              <li className="p-16-regular">
                <span className="font-semibold">User Content:</span> We collect
                and store the images that you upload to our service for
                processing. These images remain your property, and we maintain
                them solely to provide our service to you. We do not analyze,
                share, or use your images for any purpose other than delivering
                the specific image processing services you request.
              </li>
              <li className="p-16-regular">
                <span className="font-semibold">
                  Cookies and Tracking Data:
                </span>{" "}
                We use cookies and similar tracking technologies to track
                activity on our service and hold certain information. Cookies
                are files with a small amount of data which may include an
                anonymous unique identifier.
              </li>
              <li className="p-16-regular">
                <span className="font-semibold">User Content:</span> We collect
                and store the images and other content that you upload to our
                service for processing.
              </li>
            </ul>
          </div>

          {/* How We Use Your Information */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="h3-bold mb-4 text-purple-600">
              How We Use Your Information
            </h2>
            <p className="p-16-regular mb-4">
              We use the collected data for various purposes:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li className="p-16-regular">
                To provide and maintain our service
              </li>
              <li className="p-16-regular">
                To notify you about changes to our service
              </li>
              <li className="p-16-regular">
                To allow you to participate in interactive features of our
                service when you choose to do so
              </li>
              <li className="p-16-regular">To provide customer support</li>
              <li className="p-16-regular">
                To gather analysis or valuable information so that we can
                improve our service
              </li>
              <li className="p-16-regular">
                To monitor the usage of our service
              </li>
              <li className="p-16-regular">
                To detect, prevent and address technical issues
              </li>
              <li className="p-16-regular">
                To process payments and prevent fraud
              </li>
            </ul>
          </div>

          {/* Data Retention */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="h3-bold mb-4 text-purple-600">Data Retention</h2>
            <p className="p-16-regular mb-4">
              We will retain your personal information only for as long as is
              necessary for the purposes set out in this Privacy Policy. We will
              retain and use your information to the extent necessary to comply
              with our legal obligations, resolve disputes, and enforce our
              policies.
            </p>
            <p className="p-16-regular">
              For your uploaded images that you choose to save, we will preserve
              them indefinitely unless you specifically request their deletion.
              We respect your ownership of this content and will never use your
              saved images for any purpose other than providing our service to
              you. Your images are stored securely and are only accessible to
              you through your account.
            </p>
            <p className="p-16-regular">
              We take the protection of your data seriously and implement strict
              security measures to ensure your images and personal information
              remain private and secure. We do not share, sell, or use your
              uploaded content for any purposes beyond providing and improving
              our core service.
            </p>
          </div>

          {/* Data Security */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="h3-bold mb-4 text-purple-600">Data Security</h2>
            <p className="p-16-regular">
              The security of your data is important to us, but remember that no
              method of transmission over the Internet or method of electronic
              storage is 100% secure. While we strive to use commercially
              acceptable means to protect your personal information, we cannot
              guarantee its absolute security. We implement a variety of
              security measures to maintain the safety of your personal
              information when you enter, submit, or access your personal
              information.
            </p>
          </div>

          {/* Third-Party Services */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="h3-bold mb-4 text-purple-600">
              Third-Party Services
            </h2>
            <p className="p-16-regular">
              Our service may contain links to other sites that are not operated
              by us. If you click on a third-party link, you will be directed to
              that third party&apos;s site. We strongly advise you to review the
              Privacy Policy of every site you visit. We have no control over
              and assume no responsibility for the content, privacy policies, or
              practices of any third-party sites or services.
            </p>
          </div>

          {/* Children's Privacy */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="h3-bold mb-4 text-purple-600">
              Children&apos;s Privacy
            </h2>
            <p className="p-16-regular">
              Our service does not address anyone under the age of 13. We do not
              knowingly collect personally identifiable information from
              children under 13. If you are a parent or guardian and you are
              aware that your child has provided us with personal data, please
              contact us. If we become aware that we have collected personal
              data from children without verification of parental consent, we
              take steps to remove that information from our servers.
            </p>
          </div>

          {/* Your Rights */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="h3-bold mb-4 text-purple-600">Your Rights</h2>
            <p className="p-16-regular mb-4">
              If you are a resident of the European Economic Area (EEA), you
              have certain data protection rights. We aim to take reasonable
              steps to allow you to correct, amend, delete, or limit the use of
              your personal information.
            </p>
            <p className="p-16-regular mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li className="p-16-regular">
                Access and receive a copy of the personal data we hold about you
              </li>
              <li className="p-16-regular">
                Rectify any personal data held about you that is inaccurate
              </li>
              <li className="p-16-regular">
                Request the deletion of personal data held about you
              </li>
              <li className="p-16-regular">
                Obtain restriction of processing of your personal data
              </li>
              <li className="p-16-regular">
                Object to processing of your personal data
              </li>
              <li className="p-16-regular">Data portability</li>
              <li className="p-16-regular">
                Withdraw consent where we are relying on consent to process your
                personal data
              </li>
            </ul>
          </div>

          {/* Changes to This Privacy Policy */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="h3-bold mb-4 text-purple-600">
              Changes to This Privacy Policy
            </h2>
            <p className="p-16-regular">
              We may update our Privacy Policy from time to time. We will notify
              you of any changes by posting the new Privacy Policy on this page
              and updating the &quot;effective date&quot; at the top of this
              Privacy Policy. You are advised to review this Privacy Policy
              periodically for any changes. Changes to this Privacy Policy are
              effective when they are posted on this page.
            </p>
          </div>

          {/* Contact Us */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="h3-bold mb-4 text-purple-600">Contact Us</h2>
            <p className="p-16-regular mb-6">
              If you have any questions about this Privacy Policy, please
              contact us at:
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

export default PrivacyPage;
