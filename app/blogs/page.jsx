import Link from "next/link";

export default function Blogs() {
  const blogs = [
    {
      title: "Getting Started with Flutter Development",
      description: "A comprehensive guide to begin your journey with Flutter and build beautiful cross-platform applications.",
      icon: "📱",
      readTime: "5 min read",
      url: "https://medium.com/gdg-prayagraj/getting-started-with-flutter-development",
      category: "Mobile Development"
    },
    {
      title: "Mastering Google Cloud Platform",
      description: "Deep dive into GCP services and learn how to build scalable cloud solutions with best practices and real-world examples.",
      icon: "☁️",
      readTime: "7 min read",
      url: "https://medium.com/gdg-prayagraj/mastering-google-cloud-platform",
      category: "Cloud Computing"
    },
    {
      title: "Web Development Best Practices",
      description: "Essential tips and tricks for modern web development using the latest technologies and frameworks.",
      icon: "💻",
      readTime: "6 min read",
      url: "https://medium.com/gdg-prayagraj/web-development-best-practices",
      category: "Web Development"
    },
    {
      title: "Introduction to Machine Learning with TensorFlow",
      description: "Learn the basics of machine learning and how to implement models using TensorFlow.",
      icon: "🤖",
      readTime: "8 min read",
      url: "https://medium.com/gdg-prayagraj/intro-to-ml-tensorflow",
      category: "Machine Learning"
    },
    {
      title: "Firebase Authentication Deep Dive",
      description: "Implement secure user authentication in your applications using Firebase Auth.",
      icon: "🔐",
      readTime: "6 min read",
      url: "https://medium.com/gdg-prayagraj/firebase-auth-deep-dive",
      category: "Security"
    },
    {
      title: "Building with Angular and Material Design",
      description: "Create modern web applications using Angular framework and Material Design components.",
      icon: "🎨",
      readTime: "7 min read",
      url: "https://medium.com/gdg-prayagraj/angular-material-design",
      category: "Web Development"
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
            GDG Prayagraj Blog
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Explore our latest articles, tutorials, and insights from the GDG Prayagraj community.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <a
              key={blog.title}
              href={blog.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-br from-white to-gray-50 dark:from-[#111827]/80 dark:to-[#1F2937]/80 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border border-transparent hover:border-blue-100 dark:hover:border-blue-900"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 p-3 rounded-xl">
                  <div className="text-2xl transform group-hover:scale-110 transition-transform duration-300">
                    {blog.icon}
                  </div>
                </div>
                <span className="text-xs font-medium text-blue-600 dark:text-blue-400 px-3 py-1 bg-blue-50 dark:bg-blue-900/30 rounded-full">
                  {blog.category}
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-blue-200 dark:to-purple-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {blog.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-6 line-clamp-3">
                {blog.description}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-blue-600 dark:text-blue-400 font-medium">
                  Read Article
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                <span className="text-xs text-gray-500 dark:text-gray-400">{blog.readTime}</span>
              </div>
            </a>
          ))}
        </div>
      </main>
    </div>
  );
} 