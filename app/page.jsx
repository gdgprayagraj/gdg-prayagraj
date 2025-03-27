import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gradient-to-b dark:from-[#0B1120] dark:to-[#0A0F1C]">
      {/* Hero Section */}
      <main className="container mx-auto px-4 py-6 sm:py-8 lg:py-12">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold transition-transform hover:scale-[1.02] duration-300 drop-shadow-sm text-gray-900 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-blue-200 dark:via-purple-200 dark:to-pink-200">
              <div className="mb-4">Google Developer<br />Group</div>
              <div className="text-3xl sm:text-4xl lg:text-5xl">Prayagraj</div>
            </h1>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mt-6 mb-6 lg:mb-8 transition-colors duration-300">
              Experience DevFest Prayagraj 2024 - where innovation meets the rich
              heritage of Prayagraj. Join us as we blend cutting-edge technology
              with local culture, bringing the spirit of collaboration, knowledge, and
              growth to the heart of the Sangam city. Let's build the future of AI,
              rooted in values and driven by purpose.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-sm">
              <div className="flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded-lg transition-colors duration-200 hover:drop-shadow-md">
              </div>
              <div className="flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded-lg transition-colors duration-200 hover:drop-shadow-md">
              </div>
            </div>
          </div>
          <div className="relative mt-8 lg:mt-0">
            <Image
              src="https://res.cloudinary.com/startup-grind/image/fetch/c_scale,w_2560/c_crop,h_650,w_2560,y_0.32_mul_h_sub_0.32_mul_650/c_crop,h_650,w_2560/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/https://res.cloudinary.com/startup-grind/image/upload/c_fill%2Cdpr_2.0%2Cf_auto%2Cg_center%2Cq_auto:good/v1/gcs/platform-data-goog/chapter_banners/WhatsApp%2520Image%25202023-02-18%2520at%25206.25.19%2520PM.jpeg"
              alt="GDG Prayagraj Network Banner"
              width={1920}
              height={488}
              className="rounded-lg shadow-xl w-full h-[350px] object-cover hover:shadow-2xl transition-all duration-300 drop-shadow-lg"
              priority
            />
            <div className="absolute -z-10 top-0 right-0 w-48 sm:w-72 h-48 sm:h-72 bg-blue-500/10 rounded-full blur-3xl" />
            <div className="absolute -z-10 bottom-0 left-0 w-48 sm:w-72 h-48 sm:h-72 bg-green-500/10 rounded-full blur-3xl" />
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-8 mt-12 sm:mt-16 lg:mt-24">
          <div className="p-3 sm:p-4 lg:p-6 rounded-lg bg-blue-50 dark:bg-[#111827]/80 dark:backdrop-blur-sm">
            <h3 className="text-xl sm:text-2xl lg:text-4xl font-bold mb-2 text-gray-900 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-blue-200 dark:to-purple-200">7+</h3>
            <p className="text-xs sm:text-sm lg:text-base text-gray-600 dark:text-gray-300">Speakers</p>
          </div>
          <div className="p-3 sm:p-4 lg:p-6 rounded-lg bg-pink-50 dark:bg-[#111827]/80 dark:backdrop-blur-sm">
            <h3 className="text-xl sm:text-2xl lg:text-4xl font-bold mb-2 text-gray-900 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-blue-200 dark:to-purple-200">500+</h3>
            <p className="text-xs sm:text-sm lg:text-base text-gray-600 dark:text-gray-300">Participants</p>
          </div>
          <div className="p-3 sm:p-4 lg:p-6 rounded-lg bg-green-50 dark:bg-[#111827]/80 dark:backdrop-blur-sm">
            <h3 className="text-xl sm:text-2xl lg:text-4xl font-bold mb-2 text-gray-900 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-blue-200 dark:to-purple-200">7+</h3>
            <p className="text-xs sm:text-sm lg:text-base text-gray-600 dark:text-gray-300">Sessions</p>
          </div>
          <div className="p-3 sm:p-4 lg:p-6 rounded-lg bg-yellow-50 dark:bg-[#111827]/80 dark:backdrop-blur-sm">
            <h3 className="text-xl sm:text-2xl lg:text-4xl font-bold mb-2 text-gray-900 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-blue-200 dark:to-purple-200">2+</h3>
            <p className="text-xs sm:text-sm lg:text-base text-gray-600 dark:text-gray-300">Workshops</p>
          </div>
        </div>

        {/* What we do Section */}
        <div className="mt-12 sm:mt-16 lg:mt-32">
          <div className="max-w-3xl">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 lg:mb-6 text-gray-900 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-blue-200 dark:via-purple-200 dark:to-pink-200">
              What we do?
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-8 lg:mb-16">
              Our mission is to equip our community members with practical skills, enabling them to communicate
              their insights and drive innovative solutions effectively.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {/* Cards remain the same */}
            <div className="bg-gray-50 dark:bg-[#111827]/80 dark:backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 hover:shadow-lg transition-shadow">
              <div className="text-gray-600 dark:text-gray-300 mb-4 text-2xl sm:text-3xl">💬</div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-gray-900 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-blue-200 dark:to-purple-200">
                Talks
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                Get updated with the latest news and announcements
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-[#111827]/80 dark:backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 hover:shadow-lg transition-shadow">
              <div className="text-gray-600 dark:text-gray-300 mb-4 text-2xl sm:text-3xl">&lt;/&gt;</div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-gray-900 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-blue-200 dark:to-purple-200">
                Codelabs
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                Get hands-on experience and guidance from the community
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-[#111827]/80 dark:backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 hover:shadow-lg transition-shadow">
              <div className="text-gray-600 dark:text-gray-300 mb-4 text-2xl sm:text-3xl">🎓</div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-gray-900 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-blue-200 dark:to-purple-200">
                Campus Roadshows
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                Share knowledge in different companies & colleges
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-[#111827]/80 dark:backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 hover:shadow-lg transition-shadow">
              <div className="text-gray-600 dark:text-gray-300 mb-4 text-2xl sm:text-3xl">🎉</div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-gray-900 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-blue-200 dark:to-purple-200">
                Live Viewing Parties
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                Share knowledge in different Companies & colleges
              </p>
            </div>
          </div>

          {/* About Section */}
          <div className="mt-12 sm:mt-16 lg:mt-32">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-900 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-blue-200 dark:via-purple-200 dark:to-pink-200">
              About GDG Prayagraj
            </h2>
            <div className="bg-gray-50 dark:bg-[#111827]/80 dark:backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-12">
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
                  className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full hover:opacity-90 transition-all duration-200 shadow-md hover:shadow-lg dark:shadow-lg dark:shadow-blue-500/30 dark:hover:shadow-blue-500/50"
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
          <div className="bg-[#E1F4F7] dark:bg-[#111827]/80 dark:backdrop-blur-sm rounded-2xl sm:rounded-3xl lg:rounded-[32px] p-4 sm:p-6 lg:p-12">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 sm:gap-8">
              <div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-blue-200 dark:via-purple-200 dark:to-pink-200 mb-3 lg:mb-4">
                  Keep in touch with GDG<br />
                  Prayagraj for the latest<br />
                  announcements
                </h2>
                <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-300 mb-4 sm:mb-6">
                  Stake out #GDG Prayagraj for the latest updates and news.
                </p>
                <div className="flex items-center justify-center gap-6">
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white dark:bg-[#1F2937] p-3 rounded-full hover:bg-gray-100 dark:hover:bg-[#374151] transition-all duration-300"
                  >
                    <svg className="w-6 h-6 text-gray-700 dark:text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white dark:bg-[#1F2937] p-3 rounded-full hover:bg-gray-100 dark:hover:bg-[#374151] transition-all duration-300"
                  >
                    <svg className="w-6 h-6 text-gray-700 dark:text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.113.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v4.117c0 .318.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white dark:bg-[#1F2937] p-3 rounded-full hover:bg-gray-100 dark:hover:bg-[#374151] transition-all duration-300"
                  >
                    <svg className="w-6 h-6 text-gray-700 dark:text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-32 h-8 hover:drop-shadow-md transition-all duration-200">
                  <Image
                    src="/gdg-logo-new.svg"
                    alt="GDG Logo"
                    width={120}
                    height={20}
                    className="w-full h-full hover:opacity-90 transition-opacity duration-200"
                  />
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
                  href="/code-of-conduct"
                  className="font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-500 px-3 py-1 rounded-full hover:from-blue-600 hover:to-purple-600 transition-all duration-300 hover:scale-105 dark:shadow-blue-500/30 dark:hover:shadow-blue-500/50"
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
