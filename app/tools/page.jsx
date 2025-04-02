import Link from "next/link";

export default function Tools() {
  const tools = [
    {
      name: "Android",
      description: "Modern tools to help you build experiences that people love across every Android device.",
      icon: "https://developers.google.com/static/site-assets/images/products/android-logo.png",
      url: "https://developer.android.com"
    },
    {
      name: "Google Cloud",
      description: "New customers get $300 in free credits to deploy a dynamic website, launch a VM, build a three-tier web app, and more.",
      icon: "https://www.gstatic.com/images/branding/product/2x/google_cloud_64dp.png",
      url: "https://cloud.google.com"
    },
    {
      name: "Google AI Studio",
      description: "Build generative AI applications quickly with Gemini in Google AI Studio.",
      icon: "https://developers.google.com/static/focus/images/ai-studio-icon.png",
      url: "https://ai.google.dev/"
    },
    {
      name: "Gemini API",
      description: "Build and deploy production ready generative AI experiences, enhanced by Gemini models. Get started for free!",
      icon: "https://developers.google.com/static/focus/images/gemini-icon.png",
      url: "https://ai.google.dev/docs"
    },
    {
      name: "Gemini Code Assist",
      description: "Gemini 2.0 in your IDE, with code-aware chat and completion.",
      icon: "https://developers.google.com/static/focus/images/gemini-icon.png",
      url: "https://ai.google.dev/code"
    },
    {
      name: "Chrome OS",
      description: "Modern tools and features that help you build high-quality web experiences.",
      icon: "https://developers.google.com/static/homepage-assets/images/chromeos-logo.svg",
      url: "https://chromeos.dev"
    },
    {
      name: "Google Play",
      description: "Grow your business, improve app quality, engage your audience, and earn revenue.",
      icon: "https://www.gstatic.com/images/branding/product/2x/play_prism_64dp.png",
      url: "https://play.google.com/console"
    },
    {
      name: "Firebase",
      description: "Build, improve, and grow your app with Firebase.",
      icon: "https://www.gstatic.com/devrel-devsite/prod/v7b55e5943f9ab80a0423ff6653c19f56a0e5266641f85a6a76aee662b0157d18/firebase/images/icon.svg",
      url: "https://firebase.google.com"
    },
    {
      name: "TensorFlow",
      description: "An end-to-end platform for machine learning.",
      icon: "https://developers.google.com/static/site-assets/images/products/tensorflow-logo-196.png",
      url: "https://tensorflow.org"
    },
    {
      name: "Flutter",
      description: "Build beautiful native apps from a single codebase.",
      icon: "https://www.gstatic.com/images/branding/product/2x/flutter_64dp.png",
      url: "https://flutter.dev"
    },
    {
      name: "Kaggle",
      description: "A platform to share machine learning notebooks and participate in competitions.",
      icon: "https://developers.google.com/static/focus/images/kaggle.svg",
      url: "https://www.kaggle.com"
    },
    {
      name: "Angular",
      description: "The modern web developer's platform.",
      icon: "https://developers.google.com/static/homepage-assets/images/angular_gradient.png",
      url: "https://angular.io"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gradient-to-b dark:from-[#0B1120] dark:to-[#0A0F1C]">
      <main className="container mx-auto px-4 py-8 sm:py-12 lg:py-16">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-4 mb-6">
            <Link
              href="/"
              className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
            >
              ← Back to Home
            </Link>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-blue-200 dark:via-purple-200 dark:to-pink-200">
            Google Developer Tools
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Explore the complete collection of Google's developer tools and platforms. Build amazing applications with cutting-edge technologies.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {tools.map((tool) => (
            <a
              key={tool.name}
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white dark:bg-[#111827]/80 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-800"
            >
              <div className="flex flex-col items-center text-center">
                <img src={tool.icon} alt={tool.name} className="w-16 h-16 mb-4" />
                <h3 className="text-base font-medium text-gray-900 dark:text-white">
                  {tool.name}
                </h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                  {tool.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </main>
    </div>
  );
} 