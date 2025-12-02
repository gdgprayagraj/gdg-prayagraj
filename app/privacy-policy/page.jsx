export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-[#0B1120] dark:via-[#181F3A] dark:to-[#0A0F1C] py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-center text-gray-900 dark:text-white drop-shadow-lg">
          Privacy Policy
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 text-lg">
          GDG Prayagraj
        </p>

        {/* Content */}
        <div className="space-y-8">
          {/* Introduction */}
          <section className="bg-white/90 dark:bg-[#181F3A]/80 dark:backdrop-blur-md rounded-xl shadow-lg p-6 sm:p-8">
            <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
              Welcome to GDG Prayagraj ("we," "our," "us")! We are committed to protecting your privacy and ensuring a secure experience while you use our website and participate in our community events. This Privacy Policy explains how we collect, use, share, and protect your personal information.
            </p>
            <p className="text-gray-700 dark:text-gray-200 leading-relaxed mt-4">
              By accessing or using our website and services, you agree to the terms of this Privacy Policy.
            </p>
          </section>

          {/* Section 1: Information We Collect */}
          <section className="bg-white/90 dark:bg-[#181F3A]/80 dark:backdrop-blur-md rounded-xl shadow-lg p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-500 to-pink-500 dark:from-purple-300 dark:via-blue-200 dark:to-pink-300">
              1. Information We Collect
            </h2>
            <p className="text-gray-700 dark:text-gray-200 leading-relaxed mb-4">
              We collect information from you when you interact with our website or attend our events. This may include:
            </p>
            
            <div className="mt-4">
              <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100">
                a. Personal Information
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-200 ml-4">
                <li>Name</li>
                <li>Email Address</li>
                <li>Phone Number</li>
                <li>Job Title</li>
                <li>Company Name</li>
                <li>Social media profile (if linked)</li>
              </ul>
            </div>

            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100">
                b. Automatically Collected Information
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-200 ml-4">
                <li>IP Address</li>
                <li>Browser type and version</li>
                <li>Device type</li>
                <li>Pages you visit on our website</li>
                <li>Date and time of your visit</li>
                <li>Cookies and other tracking technologies</li>
              </ul>
            </div>
          </section>

          {/* Section 2: How We Use Your Information */}
          <section className="bg-white/90 dark:bg-[#181F3A]/80 dark:backdrop-blur-md rounded-xl shadow-lg p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-500 to-pink-500 dark:from-purple-300 dark:via-blue-200 dark:to-pink-300">
              2. How We Use Your Information
            </h2>
            <p className="text-gray-700 dark:text-gray-200 leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-200 ml-4">
              <li>Manage event registrations and communications related to our events.</li>
              <li>Send you updates and announcements about our activities and events.</li>
              <li>Personalize your experience on our website.</li>
              <li>Improve our website and services based on your feedback and interactions.</li>
              <li>Ensure the security and smooth functioning of our website.</li>
              <li>Comply with legal obligations or resolve any disputes.</li>
            </ul>
          </section>

          {/* Section 3: Sharing of Your Information */}
          <section className="bg-white/90 dark:bg-[#181F3A]/80 dark:backdrop-blur-md rounded-xl shadow-lg p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-500 to-pink-500 dark:from-purple-300 dark:via-blue-200 dark:to-pink-300">
              3. Sharing of Your Information
            </h2>
            <p className="text-gray-700 dark:text-gray-200 leading-relaxed mb-4">
              We do not sell or rent your personal information to third parties. However, we may share your information with:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-200 ml-4">
              <li>Event sponsors or partners to facilitate event-related services or promotions.</li>
              <li>Service providers who assist in operating our website, conducting our business, or providing event services (e.g., email marketing platforms, payment processors).</li>
              <li>Legal authorities if required to comply with applicable laws, regulations, or legal processes.</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-200 leading-relaxed mt-4">
              We ensure that any third parties we share your data with adhere to the necessary privacy and security standards.
            </p>
          </section>

          {/* Section 4: Cookies and Tracking Technologies */}
          <section className="bg-white/90 dark:bg-[#181F3A]/80 dark:backdrop-blur-md rounded-xl shadow-lg p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-500 to-pink-500 dark:from-purple-300 dark:via-blue-200 dark:to-pink-300">
              4. Cookies and Tracking Technologies
            </h2>
            <p className="text-gray-700 dark:text-gray-200 leading-relaxed mb-4">
              We use cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, and understand visitor interactions. These technologies help us:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-200 ml-4">
              <li>Remember your preferences.</li>
              <li>Track user behavior on the website for analytics purposes.</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-200 leading-relaxed mt-4">
              You can manage cookie preferences through your browser settings. Disabling cookies may affect your ability to access certain features of our website.
            </p>
          </section>

          {/* Section 5: Your Data Rights */}
          <section className="bg-white/90 dark:bg-[#181F3A]/80 dark:backdrop-blur-md rounded-xl shadow-lg p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-500 to-pink-500 dark:from-purple-300 dark:via-blue-200 dark:to-pink-300">
              5. Your Data Rights
            </h2>
            <p className="text-gray-700 dark:text-gray-200 leading-relaxed mb-4">
              You have the following rights regarding your personal information:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-200 ml-4">
              <li><strong>Access:</strong> You can request access to the personal data we hold about you.</li>
              <li><strong>Correction:</strong> You can request corrections to your personal data if it is inaccurate.</li>
              <li><strong>Deletion:</strong> You can request the deletion of your personal data under certain conditions.</li>
              <li><strong>Opt-out:</strong> You can opt-out of receiving our newsletters or promotional emails at any time by clicking the "unsubscribe" link in the email or contacting us directly.</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-200 leading-relaxed mt-4">
              To exercise these rights, please contact us at{" "}
              <a 
                href="mailto:gdgprayag@gmail.com" 
                className="text-purple-600 dark:text-purple-400 font-semibold underline hover:text-blue-600 dark:hover:text-blue-300 transition-colors duration-200"
              >
                gdgprayag@gmail.com
              </a>.
            </p>
          </section>

          {/* Section 6: Data Security */}
          <section className="bg-white/90 dark:bg-[#181F3A]/80 dark:backdrop-blur-md rounded-xl shadow-lg p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-500 to-pink-500 dark:from-purple-300 dark:via-blue-200 dark:to-pink-300">
              6. Data Security
            </h2>
            <p className="text-gray-700 dark:text-gray-200 leading-relaxed mb-4">
              We prioritize the security of your personal information and take reasonable steps to protect it from unauthorized access, loss, or disclosure. These measures include using secure servers, encryption, and regular website monitoring.
            </p>
            <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
              However, no method of data transmission over the internet or electronic storage is completely secure. While we strive to protect your data, we cannot guarantee absolute security.
            </p>
          </section>

          {/* Section 7: Third-Party Links */}
          <section className="bg-white/90 dark:bg-[#181F3A]/80 dark:backdrop-blur-md rounded-xl shadow-lg p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-500 to-pink-500 dark:from-purple-300 dark:via-blue-200 dark:to-pink-300">
              7. Third-Party Links
            </h2>
            <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
              Our website may contain links to third-party websites, services, or social media platforms. These third-party sites have their own privacy policies, and we are not responsible for their content or practices. We encourage you to review their privacy policies when visiting their sites.
            </p>
          </section>

          {/* Section 8: Children's Privacy */}
          <section className="bg-white/90 dark:bg-[#181F3A]/80 dark:backdrop-blur-md rounded-xl shadow-lg p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-500 to-pink-500 dark:from-purple-300 dark:via-blue-200 dark:to-pink-300">
              8. Children's Privacy
            </h2>
            <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
              Our website and services are not directed at children under the age of 13. We do not knowingly collect personal information from children. If we discover that a child under 13 has provided us with personal information, we will take steps to delete such data. If you believe that a child has provided us with personal information, please contact us immediately.
            </p>
          </section>

          {/* Section 9: Changes to This Privacy Policy */}
          <section className="bg-white/90 dark:bg-[#181F3A]/80 dark:backdrop-blur-md rounded-xl shadow-lg p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-500 to-pink-500 dark:from-purple-300 dark:via-blue-200 dark:to-pink-300">
              9. Changes to This Privacy Policy
            </h2>
            <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
              We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the new Privacy Policy on this page with an updated effective date.
            </p>
          </section>

          {/* Section 10: Contact Us */}
          <section className="bg-white/90 dark:bg-[#181F3A]/80 dark:backdrop-blur-md rounded-xl shadow-lg p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-500 to-pink-500 dark:from-purple-300 dark:via-blue-200 dark:to-pink-300">
              10. Contact Us
            </h2>
            <p className="text-gray-700 dark:text-gray-200 leading-relaxed mb-4">
              If you have any questions or concerns about this Privacy Policy or how we handle your personal information, please contact us at:
            </p>
            <div className="bg-gray-50 dark:bg-[#0B1120]/50 rounded-lg p-4 mt-4">
              <p className="text-gray-800 dark:text-gray-100 font-semibold mb-2">
                Google Developer Group Prayagraj
              </p>
              <p className="text-gray-700 dark:text-gray-200">
                Email:{" "}
                <a 
                  href="mailto:gdgprayag@gmail.com" 
                  className="text-purple-600 dark:text-purple-400 font-semibold underline hover:text-blue-600 dark:hover:text-blue-300 transition-colors duration-200"
                >
                  gdgprayag@gmail.com
                </a>
              </p>
              <p className="text-gray-700 dark:text-gray-200 mt-2">
                Website:{" "}
                <a 
                  href="https://gdgprayagraj.com/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-600 dark:text-purple-400 font-semibold underline hover:text-blue-600 dark:hover:text-blue-300 transition-colors duration-200"
                >
                  gdgprayagraj.com
                </a>
              </p>
            </div>
            <p className="text-gray-700 dark:text-gray-200 leading-relaxed mt-6">
              We are committed to ensuring your privacy and security while being a part of our GDG Prayagraj community.
            </p>
            <p className="text-gray-700 dark:text-gray-200 leading-relaxed mt-4">
              By using our website, you agree to this Privacy Policy. Thank you for trusting GDG Prayagraj with your personal information.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}

