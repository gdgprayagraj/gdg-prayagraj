import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <main className="container mx-auto px-4 py-6 sm:py-8 lg:py-12">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold">
              <div className="mb-4">Google Developer<br />Group</div>
              <div className="text-3xl sm:text-4xl lg:text-5xl">Prayagraj</div>
            </h1>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mt-6 mb-6 lg:mb-8">
              Experience DevFest Prayagraj 2024 - where innovation meets the rich
              heritage of Prayagraj. Join us as we blend cutting-edge technology
              with local culture, bringing the spirit of collaboration, knowledge, and
              growth to the heart of the Sangam city. Let's build the future of AI,
              rooted in values and driven by purpose.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-gray-600">📅</span>
                <span>Oct 26, 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-600">📍</span>
                <a href="#" className="text-blue-600 hover:underline">UIET, Prayagraj</a>
              </div>
            </div>
          </div>
          <div className="relative mt-8 lg:mt-0">
            <Image
              src="https://res.cloudinary.com/startup-grind/image/fetch/c_scale,w_2560/c_crop,h_650,w_2560,y_0.32_mul_h_sub_0.32_mul_650/c_crop,h_650,w_2560/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/https://res.cloudinary.com/startup-grind/image/upload/c_fill%2Cdpr_2.0%2Cf_auto%2Cg_center%2Cq_auto:good/v1/gcs/platform-data-goog/chapter_banners/WhatsApp%2520Image%25202023-02-18%2520at%25206.25.19%2520PM.jpeg"
              alt="GDG Prayagraj Network Banner"
              width={1920}
              height={488}
              className="rounded-lg shadow-xl w-full h-[350px] object-cover"
              priority
            />
            <div className="absolute -z-10 top-0 right-0 w-48 sm:w-72 h-48 sm:h-72 bg-blue-500/10 rounded-full blur-3xl" />
            <div className="absolute -z-10 bottom-0 left-0 w-48 sm:w-72 h-48 sm:h-72 bg-green-500/10 rounded-full blur-3xl" />
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-8 mt-12 sm:mt-16 lg:mt-24">
          <div className="p-3 sm:p-4 lg:p-6 rounded-lg bg-blue-50 dark:bg-gray-800">
            <h3 className="text-xl sm:text-2xl lg:text-4xl font-bold mb-2">7+</h3>
            <p className="text-xs sm:text-sm lg:text-base text-gray-600 dark:text-gray-300">Speakers</p>
          </div>
          <div className="p-3 sm:p-4 lg:p-6 rounded-lg bg-pink-50 dark:bg-gray-800">
            <h3 className="text-xl sm:text-2xl lg:text-4xl font-bold mb-2">500+</h3>
            <p className="text-xs sm:text-sm lg:text-base text-gray-600 dark:text-gray-300">Participants</p>
          </div>
          <div className="p-3 sm:p-4 lg:p-6 rounded-lg bg-green-50 dark:bg-gray-800">
            <h3 className="text-xl sm:text-2xl lg:text-4xl font-bold mb-2">7+</h3>
            <p className="text-xs sm:text-sm lg:text-base text-gray-600 dark:text-gray-300">Sessions</p>
          </div>
          <div className="p-3 sm:p-4 lg:p-6 rounded-lg bg-yellow-50 dark:bg-gray-800">
            <h3 className="text-xl sm:text-2xl lg:text-4xl font-bold mb-2">2+</h3>
            <p className="text-xs sm:text-sm lg:text-base text-gray-600 dark:text-gray-300">Workshops</p>
          </div>
        </div>

        {/* What we do Section */}
        <div className="mt-12 sm:mt-16 lg:mt-32">
          <div className="max-w-3xl">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 lg:mb-6">What we do?</h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-8 lg:mb-16">
              Our mission is to equip our community members with practical skills, enabling them to communicate
              their insights and drive innovative solutions effectively.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {/* Cards remain the same */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl sm:rounded-3xl p-4 sm:p-6 hover:shadow-lg transition-shadow">
              <div className="text-gray-600 dark:text-gray-300 mb-4 text-2xl sm:text-3xl">💬</div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Talks</h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                Get updated with the latest news and announcements
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl sm:rounded-3xl p-4 sm:p-6 hover:shadow-lg transition-shadow">
              <div className="text-gray-600 dark:text-gray-300 mb-4 text-2xl sm:text-3xl">&lt;/&gt;</div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Codelabs</h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                Get hands-on experience and guidance from the community
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl sm:rounded-3xl p-4 sm:p-6 hover:shadow-lg transition-shadow">
              <div className="text-gray-600 dark:text-gray-300 mb-4 text-2xl sm:text-3xl">🎓</div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Campus Roadshows</h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                Share knowledge in different companies & colleges
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl sm:rounded-3xl p-4 sm:p-6 hover:shadow-lg transition-shadow">
              <div className="text-gray-600 dark:text-gray-300 mb-4 text-2xl sm:text-3xl">🎉</div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Live Viewing Parties</h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                Share knowledge in different Companies & colleges
              </p>
            </div>
          </div>

          {/* About Section */}
          <div className="mt-12 sm:mt-16 lg:mt-32">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">About GDG Prayagraj</h2>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-12">
              <div className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-300 leading-relaxed space-y-6">
                <p>
                  Google Developers Group Prayagraj (GDG Prayagraj) is for developers who are interested in Google's developer technology; everything from the Android, App Engine, and Google Chrome platforms, to product APIs like the Maps API, YouTube API and Google Calendar API.
                </p>

                <p>
                  We organize CodeLabs, tech talks, hackathons, Extended events, devFests, and study jams.
                </p>

                <p>
                  The group is free to attend and open to all who are interested in discussing and learning more about software development with tools and technologies from Google or the open-source community.
                </p>

                <p>
                  Want to be volunteer fill this form <a href="https://forms.gle/N3w6XxafVVtvWrPbA" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">https://forms.gle/N3w6XxafVVtvWrPbA</a>
                </p>

                <p>
                  Join us on social <a href="https://linktr.ee/gdgprayagraj" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">https://linktr.ee/gdgprayagraj</a>
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-4 mt-6">
                <a
                  href="https://gdg.community.dev/gdg-prayagraj/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full hover:opacity-90 transition-opacity text-sm sm:text-base"
                >
                  Community Page
                  <span className="text-lg sm:text-xl">→</span>
                </a>
                <a
                  href="#"
                  className="text-sm sm:text-base text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Learn more about us
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-12 sm:mt-16 lg:mt-32">
        {/* Keep in touch section */}
        <div className="container mx-auto max-w-7xl px-4">
          <div className="bg-[#E1F4F7] dark:bg-gray-800 rounded-2xl sm:rounded-3xl lg:rounded-[32px] p-4 sm:p-6 lg:p-12">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 sm:gap-8">
              <div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-3 lg:mb-4">
                  Keep in touch with GDG<br />
                  Prayagraj for the latest<br />
                  announcements
                </h2>
                <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-300 mb-4 sm:mb-6">
                  Stake out #GDG Prayagraj for the latest updates and news.
                </p>
                <div className="flex gap-2 sm:gap-3">
                  <a
                    href="https://www.linkedin.com/company/gdg-prayagraj"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white p-1.5 sm:p-2 rounded-md sm:rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/gdgprayagraj"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white p-1.5 sm:p-2 rounded-md sm:rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.youtube.com/@gdgprayagraj"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white p-1.5 sm:p-2 rounded-md sm:rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14">
                  <Image
                    src="/gdg-logo.svg"
                    alt="GDG Logo"
                    width={56}
                    height={56}
                    className="w-full h-full"
                  />
                </div>
                <div className="text-base sm:text-lg lg:text-xl font-medium">
                  Google<br />Developer Groups
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="bg-[#202124] mt-8 lg:mt-16">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="flex flex-col lg:flex-row justify-between items-center py-4 sm:py-6">
              <div className="flex items-center gap-2 mb-4 lg:mb-0 text-center lg:text-left">
                <span className="font-medium text-xs sm:text-sm lg:text-base text-white">GDG Prayagraj</span>
                <a
                  href="https://gdg.community.dev/gdg-prayagraj/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] sm:text-xs lg:text-sm text-gray-400 italic hover:text-gray-300 transition-colors"
                >
                  developed by GDG Prayagraj Team
                </a>
              </div>
              <div className="flex flex-wrap justify-center lg:justify-end gap-3 sm:gap-4 lg:gap-8 text-[10px] sm:text-xs lg:text-sm">
                <a
                  href="https://developers.google.com/community/gdg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  About GDG Program
                </a>
                <a
                  href="https://www.womentechmakers.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  About WTM Program
                </a>
                <a
                  href="/faq"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  FAQ
                </a>
                <a
                  href="https://gdg.community.dev/gdg-prayagraj/code-of-conduct/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Code of conduct
                </a>
                <a
                  href="https://developers.google.com/community-guidelines"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Community Guidelines
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
