import Image from "next/image";
import Link from "next/link";
import YoutubeEmbed from "@/components/YoutubeEmbed";
import CounterAnimation from "@/components/CounterAnimation";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gradient-to-b dark:from-[#0B1120] dark:to-[#0A0F1C]">
      {/* Main container with consistent max-width and padding */}
      <main className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start">
          <div className="flex flex-col space-y-8">
            <div className="relative">
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold transition-transform hover:scale-[1.02] duration-300 drop-shadow-sm">
                <div className="mb-2 animate-rainbow">
                  Google Developer
                  <br />
                  Group
                </div>
                <div className="text-3xl sm:text-4xl lg:text-5xl mt-4 pb-8 animate-rainbow">Prayagraj</div>
              </h1>
            </div>
            <div className="relative">
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 transition-colors duration-300">
              In the heart of Prayagraj, where the sacred rivers Ganga, Yamuna, and Saraswati converge, we celebrate the fusion of ideas, innovation, and technology. Just as these waters bring life to the city, our community fosters growth, collaboration, and knowledge-sharing among developers.
              </p>

            </div>
            <div className="flex flex-wrap items-center gap-4 text-sm">
              <div className="flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded-lg transition-colors duration-200 hover:drop-shadow-md"></div>
              <div className="flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded-lg transition-colors duration-200 hover:drop-shadow-md"></div>
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
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-8 mt-12 sm:mt-16">
          <div className="p-3 sm:p-4 lg:p-6 rounded-lg bg-blue-50 dark:bg-[#111827]/80 dark:backdrop-blur-sm">
            <h3 className="text-xl sm:text-2xl lg:text-4xl font-bold mb-2 text-gray-900 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-blue-200 dark:to-purple-200">
              <CounterAnimation 
                target={20} 
                suffix="+" 
                duration={2000}
                className="text-xl sm:text-2xl lg:text-4xl font-bold text-gray-900 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-blue-200 dark:to-purple-200"
              />
            </h3>
            <p className="text-xs sm:text-sm lg:text-base text-gray-600 dark:text-gray-300">Speakers</p>
          </div>
          <div className="p-3 sm:p-4 lg:p-6 rounded-lg bg-pink-50 dark:bg-[#111827]/80 dark:backdrop-blur-sm">
            <h3 className="text-xl sm:text-2xl lg:text-4xl font-bold mb-2 text-gray-900 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-blue-200 dark:to-purple-200">
              <CounterAnimation 
                target={13} 
                suffix="+" 
                duration={2000}
                className="text-xl sm:text-2xl lg:text-4xl font-bold text-gray-900 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-blue-200 dark:to-purple-200"
              />
            </h3>
            <p className="text-xs sm:text-sm lg:text-base text-gray-600 dark:text-gray-300">Sessions</p>
          </div>
          <div className="p-3 sm:p-4 lg:p-6 rounded-lg bg-green-50 dark:bg-[#111827]/80 dark:backdrop-blur-sm">
            <h3 className="text-xl sm:text-2xl lg:text-4xl font-bold mb-2 text-gray-900 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-blue-200 dark:to-purple-200">
              <CounterAnimation 
                target={2000} 
                suffix="+" 
                duration={2500}
                className="text-xl sm:text-2xl lg:text-4xl font-bold text-gray-900 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-blue-200 dark:to-purple-200"
              />
            </h3>
            <p className="text-xs sm:text-sm lg:text-base text-gray-600 dark:text-gray-300">Participants</p>
          </div>
          <div className="p-3 sm:p-4 lg:p-6 rounded-lg bg-yellow-50 dark:bg-[#111827]/80 dark:backdrop-blur-sm">
            <h3 className="text-xl sm:text-2xl lg:text-4xl font-bold mb-2 text-gray-900 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-blue-200 dark:to-purple-200">
              <CounterAnimation 
                target={5} 
                suffix="+" 
                duration={1500}
                className="text-xl sm:text-2xl lg:text-4xl font-bold text-gray-900 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-blue-200 dark:to-purple-200"
              />
            </h3>
            <p className="text-xs sm:text-sm lg:text-base text-gray-600 dark:text-gray-300">Workshops</p>
          </div>
        </div>

        {/* What we do Section */}
        <div className="mt-12 sm:mt-16">
          <div className="max-w-3xl">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 lg:mb-6 text-gray-900 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-blue-200 dark:via-purple-200 dark:to-pink-200">
              What we do?
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-8">
              Our mission is to equip our community members with practical skills, enabling them to communicate their
              insights and drive innovative solutions effectively.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {/* Talks */}
            <div className="group relative overflow-hidden rounded-xl bg-white dark:bg-[#111827]/80">
              <div className="relative h-[200px] overflow-hidden">
                <Image
                  src="/what-we-do/img1.jpg"
                  alt="Talks"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 right-0">
                  <Image
                    src="/icons/icon1.png"
                    alt="Event icon"
                    width={64}
                    height={64}
                    className="w-16 h-16"
                  />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#1a73e8] dark:text-[#4285f4] mb-2">Talks</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Grow your knowledge through online and in-person developer events.
                </p>
                <a
                  href="https://developers.google.com/events"
                  className="inline-flex items-center px-6 py-2 bg-[#1a73e8] hover:bg-[#1557b0] text-white rounded-full transition-all duration-300"
                >
                  View Talks
                </a>
              </div>
            </div>

            {/* Codelabs */}
            <div className="group relative overflow-hidden rounded-xl bg-white dark:bg-[#111827]/80">
              <div className="relative h-[200px] overflow-hidden">
                <Image
                  src="/what-we-do/img2.jpg"
                  alt="Improve technical skills"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 right-0">
                  <Image
                    src="/icons/icon2.png"
                    alt="Skills icon"
                    width={64}
                    height={64}
                    className="w-16 h-16"
                  />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#1a73e8] dark:text-[#4285f4] mb-2">Codelabs</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Keep up with Google technology. Sharpen skills and master new ones.
                </p>
                <a
                  href="https://developers.google.com/learn"
                  className="inline-flex items-center px-6 py-2 bg-[#1a73e8] hover:bg-[#1557b0] text-white rounded-full transition-all duration-300"
                >
                  Start learning
                </a>
              </div>
            </div>

            {/* Join a community */}
            <div className="group relative overflow-hidden rounded-xl bg-white dark:bg-[#111827]/80">
              <div className="relative h-[200px] overflow-hidden">
                <Image
                  src="/what-we-do/img3.jpg"
                  alt="Join a community"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 right-0">
                  <Image
                    src="/icons/icon3.png"
                    alt="Community icon"
                    width={64}
                    height={64}
                    className="w-16 h-16"
                  />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#1a73e8] dark:text-[#4285f4] mb-2">Join a community</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Meet a diverse network, no matter where you are on your developer journey.
                </p>
                <a
                  href="https://bento.me/gdgp"
                  className="inline-flex items-center px-6 py-2 bg-[#1a73e8] hover:bg-[#1557b0] text-white rounded-full transition-all duration-300"
                >
                  Explore communities
                </a>
              </div>
            </div>

            {/* Learning and resources */}
            <div className="group relative overflow-hidden rounded-xl bg-white dark:bg-[#111827]/80">
              <div className="relative h-[200px] overflow-hidden">
                <Image
                  src="/what-we-do/img4.jpg"
                  alt="Learning and resources"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 right-0">
                  <Image
                    src="/icons/icon4.png"
                    alt="Resources icon"
                    width={64}
                    height={64}
                    className="w-16 h-16"
                  />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#1a73e8] dark:text-[#4285f4] mb-2">Learning and resources</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Access learning materials and developer resources.
                </p>
                <a
                  href="/resources"
                  className="inline-flex items-center px-6 py-2 bg-[#1a73e8] hover:bg-[#1557b0] text-white rounded-full transition-all duration-300"
                >
                  Explore resources
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Developer Tools Section */}
        <div className="mt-12 sm:mt-16">
          <div className="max-w-3xl">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 lg:mb-6 text-gray-900 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-blue-200 dark:via-purple-200 dark:to-pink-200">
              Start Building Today
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-8">
              Explore Google's developer tools and start building amazing applications with the latest technologies.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 lg:mt-16">
            <a
              href="https://developer.android.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white dark:bg-[#111827]/80 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-800"
            >
              <div className="flex flex-col items-center text-center">
                <img
                  src="https://developers.google.com/static/site-assets/images/products/android-logo.png"
                  alt="Android"
                  className="w-16 h-16 mb-4"
                />
                <h3 className="text-base font-medium text-gray-900 dark:text-white">Android</h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                  Modern tools to help you build experiences that people love across every Android device.
                </p>
              </div>
            </a>

            <a
              href="https://cloud.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white dark:bg-[#111827]/80 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-800"
            >
              <div className="flex flex-col items-center text-center">
                <img
                  src="https://www.gstatic.com/images/branding/product/2x/google_cloud_64dp.png"
                  alt="Google Cloud"
                  className="w-16 h-16 mb-4"
                />
                <h3 className="text-base font-medium text-gray-900 dark:text-white">Google Cloud</h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                  New customers get $300 in free credits to deploy a dynamic website, launch a VM, build a three-tier
                  web app, and more.
                </p>
              </div>
            </a>

            <a
              href="https://ai.google.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white dark:bg-[#111827]/80 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-800"
            >
              <div className="flex flex-col items-center text-center">
                <img
                  src="https://developers.google.com/static/focus/images/ai-studio-icon.png"
                  alt="Google AI Studio"
                  className="w-16 h-16 mb-4"
                />
                <h3 className="text-base font-medium text-gray-900 dark:text-white">Google AI Studio</h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                  Build generative AI applications quickly with Gemini in Google AI Studio.
                </p>
              </div>
            </a>

            <a
              href="https://ai.google.dev/docs"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white dark:bg-[#111827]/80 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-800"
            >
              <div className="flex flex-col items-center text-center">
                <img
                  src="https://developers.google.com/static/focus/images/gemini-icon.png"
                  alt="Gemini API"
                  className="w-16 h-16 mb-4"
                />
                <h3 className="text-base font-medium text-gray-900 dark:text-white">Gemini API</h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                  Build and deploy production ready generative AI experiences, enhanced by Gemini models. Get started
                  for free!
                </p>
              </div>
            </a>

            <a
              href="https://chromeos.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white dark:bg-[#111827]/80 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-800"
            >
              <div className="flex flex-col items-center text-center">
                <img
                  src="https://developers.google.com/static/homepage-assets/images/chromeos-logo.svg"
                  alt="Chrome OS"
                  className="w-16 h-16 mb-4"
                />
                <h3 className="text-base font-medium text-gray-900 dark:text-white">Chrome OS</h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                  Modern tools and features that help you build high-quality web experiences.
                </p>
              </div>
            </a>

            <a
              href="https://play.google.com/console"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white dark:bg-[#111827]/80 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-800"
            >
              <div className="flex flex-col items-center text-center">
                <img
                  src="https://www.gstatic.com/images/branding/product/2x/play_prism_64dp.png"
                  alt="Google Play"
                  className="w-16 h-16 mb-4"
                />
                <h3 className="text-base font-medium text-gray-900 dark:text-white">Google Play</h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                  Grow your business, improve app quality, engage your audience, and earn revenue.
                </p>
              </div>
            </a>

            <a
              href="https://firebase.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white dark:bg-[#111827]/80 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-800"
            >
              <div className="flex flex-col items-center text-center">
                <img
                  src="https://www.gstatic.com/devrel-devsite/prod/v7b55e5943f9ab80a0423ff6653c19f56a0e5266641f85a6a76aee662b0157d18/firebase/images/icon.svg"
                  alt="Firebase"
                  className="w-16 h-16 mb-4"
                />
                <h3 className="text-base font-medium text-gray-900 dark:text-white">Firebase</h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                  Build, improve, and grow your app with Firebase.
                </p>
              </div>
            </a>

            <a
              href="https://tensorflow.org"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white dark:bg-[#111827]/80 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-800"
            >
              <div className="flex flex-col items-center text-center">
                <img
                  src="https://developers.google.com/static/site-assets/images/products/tensorflow-logo-196.png"
                  alt="TensorFlow"
                  className="w-16 h-16 mb-4"
                />
                <h3 className="text-base font-medium text-gray-900 dark:text-white">TensorFlow</h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                  An end-to-end platform for machine learning.
                </p>
              </div>
            </a>
          </div>

          <div className="flex justify-center mt-12">
            <Link
              href="/tools"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:opacity-95 transition-all duration-300 shadow-md hover:shadow-xl dark:shadow-blue-500/30 dark:hover:shadow-blue-500/50 transform hover:-translate-y-0.5"
            >
              <span className="text-base font-medium">View All Tools</span>
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>

        {/* About GDG Prayagraj section */}
        <div className="mt-12 sm:mt-16">
          <div className="max-w-3xl mb-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 text-gray-900 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-blue-200 dark:via-purple-200 dark:to-pink-200">
              About GDG Prayagraj
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
              Get Involved! Become a Volunteer with Google Developer Group Prayagraj (GDG)
            </p>
          </div>

          <div className="bg-gray-50/50 dark:bg-[#111827]/30 rounded-3xl p-6">
            <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
              {/* Left side: Text + Button */}
              <div className="order-2 lg:order-1">
                <div className="space-y-4">
                  <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
                  Google Developer Group Prayagraj (GDG Prayagraj) is a vibrant community for developers passionate about Google's technologies—from Android, App Engine, and Google Chrome to powerful APIs like Maps, YouTube, and Google Calendar.
                  </p>

                  <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
                    Looking for a way to connect with the tech world beyond! Join your Google Developer Group Prayagraj (GDG) as a volunteer! GDGs are communities for developers interested in Google's technologies, and they thrive with the help of passionate volunteers like you.
                  </p>
                  <div>
                    <a
                      href="https://docs.google.com/forms/d/e/1FAIpQLSdQk87g7fElElcZFZZKRWlP-i0k9gFCxRuFjvwAgObZndO75A/viewform"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-[#1a73e8] hover:bg-[#1557b0] text-white rounded-lg transition-all duration-300 text-sm font-medium"
                    >
                      Show Interest | For Volunteering
                    </a>
                  </div>
                </div>
              </div>

              {/* Right side: Video */}
              <div className="order-1 lg:order-2">
                <div className="relative">
                  <div className="absolute -inset-3 border-4 border-[#34A853] rounded-3xl transform rotate-1"></div>
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-white dark:bg-gray-800 shadow-2xl">
                    <YoutubeEmbed videoId="31A3MloRD8w" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Blogs Section */}
        <div className="mt-12 sm:mt-16">
          <div className="max-w-3xl">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 lg:mb-6 text-gray-900 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-blue-200 dark:via-purple-200 dark:to-pink-200">
              Posted Blogs
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-8">
              Explore our latest articles, tutorials, and insights from the GDG Prayagraj community.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-8 lg:mt-16">

            {/* Automating Tasks with Gemini 2.0 and Vertex AI */}
            <a
              href="https://medium.com/@info2ankitkumarverma/automating-tasks-with-gemini-2-0-and-vertex-ai-1f9d77cc825b"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-br from-white to-gray-50 dark:from-[#111827]/80 dark:to-[#1F2937]/80 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border border-transparent hover:border-blue-100 dark:hover:border-blue-900"
            >
              <div className="relative w-full h-48 mb-6 rounded-xl overflow-hidden">
                <Image
                  src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*df1exJizz-AL3SB4dHFPog.png"
                  alt="WikiClub Tech India Journey"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 p-3 rounded-xl">
                  <div className="text-2xl transform group-hover:scale-110 transition-transform duration-300">📝</div>
                </div>
                <span className="text-xs font-medium text-blue-600 dark:text-blue-400 px-3 py-1 bg-blue-50 dark:bg-blue-900/30 rounded-full">
                  Community
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-blue-200 dark:to-purple-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              Automating Tasks with Gemini 2.0 and Vertex AI
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-6 line-clamp-3">
              This blog will walk you through practical ways to leverage these technologies for task automation, with real-world examples and easy-to-follow steps.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-blue-600 dark:text-blue-400 font-medium">
                  Read Article
                  <svg
                    className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                <span className="text-xs text-gray-500 dark:text-gray-400">8 min read</span>
              </div>
            </a>

            {/* My First DevFest: A Volunteer's Experience */}  
            <a
              href="https://medium.com/@adityakumar2019.ak/my-first-devfest-a-volunteers-experience-at-devfest-2023-prayagraj-232035102743"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-br from-white to-gray-50 dark:from-[#111827]/80 dark:to-[#1F2937]/80 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border border-transparent hover:border-blue-100 dark:hover:border-blue-900"
            >
              <div className="relative w-full h-48 mb-6 rounded-xl overflow-hidden">
                <Image
                  src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*-aYw7sGJfxM0x3XWN57M0g.png"
                  alt="DevFest 2023 Experience"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 p-3 rounded-xl">
                  <div className="text-2xl transform group-hover:scale-110 transition-transform duration-300">🎯</div>
                </div>
                <span className="text-xs font-medium text-blue-600 dark:text-blue-400 px-3 py-1 bg-blue-50 dark:bg-blue-900/30 rounded-full">
                  Event Experience
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-blue-200 dark:to-purple-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                My First DevFest: A Volunteer's Experience
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-6 line-clamp-3">
                Personal insights and experiences from volunteering at DevFest 2023 Prayagraj.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-blue-600 dark:text-blue-400 font-medium">
                  Read Article
                  <svg
                    className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                <span className="text-xs text-gray-500 dark:text-gray-400">6 min read</span>
              </div>
            </a>

            {/* Unmasking Fakes with Machine Learning — Kaggle Community Olympiad */}
            <a
              href="https://medium.com/@mohdshadabunited/unmasking-fakes-with-machine-learning-kaggle-community-olympiad-420a604aff91"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-br from-white to-gray-50 dark:from-[#111827]/80 dark:to-[#1F2937]/80 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border border-transparent hover:border-blue-100 dark:hover:border-blue-900"
            >
              <div className="relative w-full h-48 mb-6 rounded-xl overflow-hidden">
                <Image
                  src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*0snMbElyy2Ieo4Wy9OF2rg.png"
                  alt="Unmasking Fakes with Machine Learning — Kaggle Community Olympiad"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 p-3 rounded-xl">
                  <div className="text-2xl transform group-hover:scale-110 transition-transform duration-300">🤖</div>
                </div>
                <span className="text-xs font-medium text-blue-600 dark:text-blue-400 px-3 py-1 bg-blue-50 dark:bg-blue-900/30 rounded-full">
                  Machine Learning
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-blue-200 dark:to-purple-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                Unmasking Fakes with Machine Learning — Kaggle Community Olympiad
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-6 line-clamp-3">
                Building a machine learning model that classifies political statements as true or false?...
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-blue-600 dark:text-blue-400 font-medium">
                  Read Article
                  <svg
                    className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                <span className="text-xs text-gray-500 dark:text-gray-400">4 min read</span>
              </div>
            </a>
            {/*End Here*/}

          </div>

          <div className="flex justify-center mt-12">
            <Link
              href="/blogs"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:opacity-95 transition-all duration-300 shadow-md hover:shadow-xl dark:shadow-blue-500/30 dark:hover:shadow-blue-500/50 transform hover:-translate-y-0.5"
            >
              <span className="text-base font-medium">View All Articles</span>
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Past Events Section */}
        <div className="mt-12 sm:mt-16">
          <div className="max-w-3xl">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 lg:mb-6 text-gray-900 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-blue-200 dark:via-purple-200 dark:to-pink-200">
              Past Events
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-8">
              Explore our previous events and join us in upcoming ones to be part of the vibrant GDG Prayagraj
              community.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            <div className="group flex flex-col items-center text-center">
              <div className="relative w-32 h-32 sm:w-44 sm:h-44 rounded-full overflow-hidden mb-3 bg-white dark:bg-[#111827]/80 hover:shadow-lg transition-all duration-300">
                <Image
                  src="https://res.cloudinary.com/startup-grind/image/upload/c_fill,w_500,h_500,g_center/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/events/BWAI25-EventThumb-01_k2vs7Fr.png"
                  alt="Build With AI 2025"
                  width={400}
                  height={400}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col items-center">
                <span className="text-xs text-gray-500 dark:text-gray-400 mb-1">26 Mar 2025</span>
                <span className="px-2 py-0.5 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full mb-2">
                  Workshop / Study Group
                </span>
                <h3 className="text-sm font-semibold mb-1 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  Build With AI- Prayagraj
                </h3>
                <p className="text-xs text-gray-600 dark:text-gray-300">GDG Prayagraj</p>
              </div>
            </div>

            <div className="group flex flex-col items-center text-center">
              <div className="relative w-32 h-32 sm:w-44 sm:h-44 rounded-full overflow-hidden mb-3 bg-white dark:bg-[#111827]/80 hover:shadow-lg transition-all duration-300">
                <Image
                  src="https://res.cloudinary.com/startup-grind/image/upload/c_fill,w_500,h_500,g_center/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/events/Copy%20of%20DF24-Organizer-badge_uFOn2iL.png"
                  alt="DevFest 2024"
                  width={400}
                  height={400}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col items-center">
                <span className="text-xs text-gray-500 dark:text-gray-400 mb-1">26 Oct 2024</span>
                <span className="px-2 py-0.5 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full mb-2">
                  External Ticketing
                </span>
                <h3 className="text-sm font-semibold mb-1 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  Devfest Prayagraj 2024
                </h3>
                <p className="text-xs text-gray-600 dark:text-gray-300">GDG Prayagraj</p>
              </div>
            </div>

            <div className="group flex flex-col items-center text-center">
              <div className="relative w-32 h-32 sm:w-44 sm:h-44 rounded-full overflow-hidden mb-3 bg-white dark:bg-[#111827]/80 hover:shadow-lg transition-all duration-300">
                <Image
                  src="https://res.cloudinary.com/startup-grind/image/upload/c_fill,w_500,h_500,g_center/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/events/Copy%20of%20IO%20extended%202024%20Bevy%20thumbnail%20with%20editable%20location_bsNVpeV.png"
                  alt="Google I/O Extended"
                  width={400}
                  height={400}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col items-center">
                <span className="text-xs text-gray-500 dark:text-gray-400 mb-1">29 Jun 2024</span>
                <span className="px-2 py-0.5 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full mb-2">
                  Speaker Session / Tech Talk
                </span>
                <h3 className="text-sm font-semibold mb-1 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  Google I/O Extended Prayagraj
                </h3>
                <p className="text-xs text-gray-600 dark:text-gray-300">GDG Prayagraj</p>
              </div>
            </div>

            <div className="group flex flex-col items-center text-center">
              <div className="relative w-32 h-32 sm:w-44 sm:h-44 rounded-full overflow-hidden mb-3 bg-white dark:bg-[#111827]/80 hover:shadow-lg transition-all duration-300">
                <Image
                  src="https://res.cloudinary.com/startup-grind/image/upload/c_fill,w_500,h_500,g_center/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/events/GDG24-BwAI-Bevy-EventThumb-Blue%20%282%29_flFteli.png"
                  alt="Build with AI - Startup Show"
                  width={400}
                  height={400}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col items-center">
                <span className="text-xs text-gray-500 dark:text-gray-400 mb-1">8 May 2024</span>
                <span className="px-2 py-0.5 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full mb-2">
                  Hackathon
                </span>
                <h3 className="text-sm font-semibold mb-1 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  Build with AI - Startup Show
                </h3>
                <p className="text-xs text-gray-600 dark:text-gray-300">GDG Prayagraj</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <Link
              href="/events"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:opacity-95 transition-all duration-300 shadow-md hover:shadow-xl dark:shadow-blue-500/30 dark:hover:shadow-blue-500/50 transform hover:-translate-y-0.5"
            >
              <span className="text-base font-medium">View All Events</span>
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>

        {/* About Section */}
        <div className="mt-12 sm:mt-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-900 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-blue-200 dark:via-purple-200 dark:to-pink-200">
            About GDG Prayagraj
          </h2>
          <div className="bg-gray-50 dark:bg-[#111827]/80 dark:backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-12">
            <div className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-300 leading-relaxed space-y-6">
              <p>
                Google Developers Group Prayagraj (GDG Prayagraj) is for developers who are interested in Google's
                developer technology; everything from the Android, App Engine, and Google Chrome platforms, to product
                APIs like the Maps API, YouTube API and Google Calendar API.
              </p>

              <p>We organize CodeLabs, tech talks, hackathons, Extended events, devFests, and study jams.</p>

              <p>
                The group is free to attend and open to all who are interested in discussing and learning more about
                software development with tools and technologies from Google or the open-source community.
              </p>

              <p>
                Want to be volunteer fill this form{" "}
                <a
                  href="https://forms.gle/N3w6XxafVVtvWrPbA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  https://forms.gle/N3w6XxafVVtvWrPbA
                </a>
              </p>

              <p>
                Join us on social{" "}
                <a
                  href="https://linktr.ee/gdgprayagraj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  https://linktr.ee/gdgprayagraj
                </a>
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
              <a href="#" className="text-sm sm:text-base text-blue-600 dark:text-blue-400 hover:underline">
                Learn more about us
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-12 sm:mt-16">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-[#E1F4F7] dark:bg-[#111827]/80 dark:backdrop-blur-sm rounded-2xl sm:rounded-3xl lg:rounded-[32px] p-4 sm:p-6 lg:p-8">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 sm:gap-8 mb-8">
              <div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-blue-200 dark:via-purple-200 dark:to-pink-200 mb-3 lg:mb-4">
                  Follow Us on Social Media
                </h2>
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

            {/* Social Media Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {/* YouTube */}
              <div className="bg-white dark:bg-[#1F2937] rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex flex-col items-center text-center gap-4">
                  <svg className="w-8 h-8 text-red-600" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Subscribe on YouTube</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Subscribe to join a community of creative developers and learn the latest in Google technology.</p>
                  <a href="https://www.youtube.com/@gdgprayagraj" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium">Learn more</a>
                </div>
              </div>

              {/* Instagram */}
              <div className="bg-white dark:bg-[#1F2937] rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex flex-col items-center text-center gap-4">
                  <svg className="w-8 h-8 text-pink-600" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Follow on Instagram</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Follow and discover developer resources, community events, and inspirational stories.</p>
                  <a href="https://www.instagram.com/gdgprayagraj" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium">Learn more</a>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="bg-white dark:bg-[#1F2937] rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex flex-col items-center text-center gap-4">
                  <svg className="w-8 h-8 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Join on LinkedIn</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Join a community of creative developers and learn how to use the latest in technology.</p>
                  <a href="https://www.linkedin.com/company/gdg-prayagraj" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium">Learn more</a>
                </div>
              </div>

              {/* Email Subscription */}
              <div className="bg-white dark:bg-[#1F2937] rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex flex-col items-center text-center gap-4">
                  <svg className="w-8 h-8 text-gray-600 dark:text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Subscribe to Newsletter</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Subscribe to Google for Developers news. Your information will be used in accordance with Google's privacy policy.</p>
                  <a href="https://gdg.community.dev/gdg-prayagraj/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium">Subscribe</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#202124] mt-8">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
                <a href="/privacy-policy" className="text-gray-300 hover:text-white transition-colors">
                  Privacy Policy
                </a>
                <a href="/faq" className="text-gray-300 hover:text-white transition-colors">
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
