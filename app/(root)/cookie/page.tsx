import Header from "@/components/shared/Header";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cookie Policy | Remove Shadow",
  description:
    "Learn about how Remove Shadow uses cookies and similar technologies to enhance your experience on our AI image transformation platform.",
  openGraph: {
    title: "Cookie Policy | Remove Shadow",
    description:
      "Learn about how Remove Shadow uses cookies and similar technologies to enhance your experience on our AI image transformation platform.",
    type: "website",
    locale: "en_US",
    url: "https://removeshadow.com/cookie",
    siteName: "Remove Shadow",
  },
  twitter: {
    card: "summary",
    title: "Cookie Policy | Remove Shadow",
    description:
      "Learn about how Remove Shadow uses cookies and similar technologies to enhance your experience on our AI image transformation platform.",
  },
  alternates: {
    canonical: "https://removeshadow.com/cookie",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const CookiePolicyPage = () => {
  return (
    <>
      <Header
        title="Cookie Policy"
        subtitle="How we use cookies and similar technologies"
      />

      <section className="mt-10">
        <div className="flex flex-col gap-8">
          {/* Introduction Section */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="h3-bold mb-4 text-purple-600">Introduction</h2>
            <p className="p-16-regular mb-4">
              This Cookie Policy explains how RemoveShadow (&quot;we&quot;,
              &quot;us&quot;, or &quot;our&quot;) uses cookies and similar
              technologies to recognize you when you visit our website. It
              explains what these technologies are and why we use them, as well
              as your rights to control our use of them.
            </p>
            <p className="p-16-regular">
              By continuing to use our website, you are agreeing to our use of
              cookies as described in this Cookie Policy.
            </p>
          </div>

          {/* What Are Cookies */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="h3-bold mb-4 text-purple-600">What Are Cookies</h2>
            <p className="p-16-regular mb-4">
              Cookies are small data files that are placed on your computer or
              mobile device when you visit a website. Cookies are widely used by
              website owners to make their websites work, or to work more
              efficiently, as well as to provide reporting information.
            </p>
            <p className="p-16-regular">
              Cookies set by the website owner (in this case, RemoveShadow) are
              called &quot;first-party cookies&quot;. Cookies set by parties
              other than the website owner are called &quot;third-party
              cookies&quot;. Third-party cookies enable third-party features or
              functionality to be provided on or through the website (e.g.,
              advertising, interactive content, and analytics). The parties that
              set these third-party cookies can recognize your computer both
              when it visits the website in question and also when it visits
              certain other websites.
            </p>
          </div>

          {/* Types of Cookies We Use */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="h3-bold mb-4 text-purple-600">
              Types of Cookies We Use
            </h2>
            <p className="p-16-regular mb-4">
              We use the following types of cookies:
            </p>
            <ul className="list-disc pl-6 space-y-4">
              <li className="p-16-regular">
                <span className="font-semibold">Essential Cookies:</span> These
                cookies are necessary for the website to function and cannot be
                switched off in our systems. They are usually only set in
                response to actions made by you which amount to a request for
                services, such as setting your privacy preferences, logging in,
                or filling in forms. You can set your browser to block or alert
                you about these cookies, but some parts of the site will not
                then work.
              </li>
              <li className="p-16-regular">
                <span className="font-semibold">Performance Cookies:</span>{" "}
                These cookies allow us to count visits and traffic sources so we
                can measure and improve the performance of our site. They help
                us to know which pages are the most and least popular and see
                how visitors move around the site. All information these cookies
                collect is aggregated and therefore anonymous.
              </li>
              <li className="p-16-regular">
                <span className="font-semibold">Functionality Cookies:</span>{" "}
                These cookies enable the website to provide enhanced
                functionality and personalization. They may be set by us or by
                third-party providers whose services we have added to our pages.
                If you do not allow these cookies, then some or all of these
                services may not function properly.
              </li>
              <li className="p-16-regular">
                <span className="font-semibold">Targeting Cookies:</span> These
                cookies may be set through our site by our advertising partners.
                They may be used by those companies to build a profile of your
                interests and show you relevant advertisements on other sites.
                They do not store directly personal information but are based on
                uniquely identifying your browser and internet device.
              </li>
            </ul>
          </div>

          {/* Specific Cookies We Use */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="h3-bold mb-4 text-purple-600">
              Specific Cookies We Use
            </h2>
            <p className="p-16-regular mb-4">
              The table below provides more information about the specific
              cookies we use and why:
            </p>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white rounded-lg overflow-hidden">
                <thead className="bg-purple-50">
                  <tr>
                    <th className="py-3 px-4 text-left font-semibold">
                      Cookie Name
                    </th>
                    <th className="py-3 px-4 text-left font-semibold">
                      Purpose
                    </th>
                    <th className="py-3 px-4 text-left font-semibold">
                      Duration
                    </th>
                    <th className="py-3 px-4 text-left font-semibold">Type</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="py-3 px-4">_session</td>
                    <td className="py-3 px-4">
                      Used to maintain your session state across page requests
                    </td>
                    <td className="py-3 px-4">Session</td>
                    <td className="py-3 px-4">Essential</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">_csrf</td>
                    <td className="py-3 px-4">
                      Used to help protect against Cross-Site Request Forgery
                      attacks
                    </td>
                    <td className="py-3 px-4">Session</td>
                    <td className="py-3 px-4">Essential</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">_ga</td>
                    <td className="py-3 px-4">
                      Used by Google Analytics to distinguish users
                    </td>
                    <td className="py-3 px-4">2 years</td>
                    <td className="py-3 px-4">Performance</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">_gid</td>
                    <td className="py-3 px-4">
                      Used by Google Analytics to distinguish users
                    </td>
                    <td className="py-3 px-4">24 hours</td>
                    <td className="py-3 px-4">Performance</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">user_preferences</td>
                    <td className="py-3 px-4">
                      Stores user preferences for site functionality
                    </td>
                    <td className="py-3 px-4">1 year</td>
                    <td className="py-3 px-4">Functionality</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* How to Control Cookies */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="h3-bold mb-4 text-purple-600">
              How to Control Cookies
            </h2>
            <p className="p-16-regular mb-4">
              You can set or amend your web browser controls to accept or refuse
              cookies. If you choose to reject cookies, you may still use our
              website though your access to some functionality and areas of our
              website may be restricted. As the means by which you can refuse
              cookies through your web browser controls vary from browser to
              browser, you should visit your browser&apos;s help menu for more
              information.
            </p>
            <p className="p-16-regular mb-4">
              In addition, most advertising networks offer you a way to opt out
              of targeted advertising. If you would like to find out more
              information, please visit:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li className="p-16-regular">
                <Link
                  href="http://www.aboutads.info/choices/"
                  className="text-purple-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Digital Advertising Alliance
                </Link>
              </li>
              <li className="p-16-regular">
                <Link
                  href="https://youronlinechoices.eu/"
                  className="text-purple-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  European Interactive Digital Advertising Alliance
                </Link>
              </li>
            </ul>
          </div>

          {/* Do Not Track */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="h3-bold mb-4 text-purple-600">Do Not Track</h2>
            <p className="p-16-regular">
              Some browsers have a &quot;Do Not Track&quot; feature that lets
              you tell websites that you do not want to have your online
              activities tracked. At this time, we do not respond to browser
              &quot;Do Not Track&quot; signals, but we continue to review new
              technologies and may adopt a standard once one is created.
            </p>
          </div>

          {/* Updates to This Cookie Policy */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="h3-bold mb-4 text-purple-600">
              Updates to This Cookie Policy
            </h2>
            <p className="p-16-regular">
              We may update this Cookie Policy from time to time in order to
              reflect, for example, changes to the cookies we use or for other
              operational, legal, or regulatory reasons. Please therefore
              revisit this Cookie Policy regularly to stay informed about our
              use of cookies and related technologies.
            </p>
          </div>

          {/* Contact Us */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="h3-bold mb-4 text-purple-600">Contact Us</h2>
            <p className="p-16-regular mb-6">
              If you have any questions about our use of cookies or other
              technologies, please contact us at:
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

export default CookiePolicyPage;
