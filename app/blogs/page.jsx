import Link from "next/link";

export default function Blogs() {
  const blogs = [
    {
      title: "Navigating the OSS: A Mentor's Journey Through the Road to Wiki Program",
      author: "Agamya Samuel",
      date: "Mar 15, 2024",
      readTime: "10 min read",
      category: "Community",
      description: "How It All Began This summer wasn't like the typical ones where majority students would travel to hill stations...",
      link: "https://blog.agamya.dev/"
    },
    {
      title: "Prayagraj's Tech Revolution Unleashed: DevFest 2023 - A Groundbreaking Debut",
      author: "GDG Prayagraj",
      date: "Dec 20, 2023",
      readTime: "8 min read",
      category: "Event",
      description: "A comprehensive overview of DevFest 2023 Prayagraj, highlighting the community's first major tech conference...",
      link: "https://medium.com/@gdgprayag/prayagrajs-tech-revolution-unleashed-devfest-2023-a-groundbreaking-debut-d89be7b88547"
    },
    {
      title: "DevFest Prayagraj 2024: A Celebration of Tech, Community & Innovation",
      author: "Mohd Shadab",
      date: "Mar 10, 2024",
      readTime: "7 min read",
      category: "Event",
      description: "An inside look at the upcoming DevFest 2024, exploring the planned sessions, workshops, and community activities...",
      link: "https://medium.com/@mohdshadabunited/devfest-prayagraj-2024-a-celebration-of-tech-community-innovation-12150cf9c5a3"
    },
    {
      title: "Getting Started with TensorFlow: A Guide for Beginners",
      author: "Ankit Kumar Verma",
      date: "Feb 28, 2024",
      readTime: "12 min read",
      category: "Technical",
      description: "A comprehensive guide for beginners to start their journey with TensorFlow, covering basic concepts and practical examples...",
      link: "https://medium.com/@info2ankitkumarverma/getting-started-with-tensorflow-a-guide-for-beginners-591287bfeb52"
    },
    {
      title: "My First DevFest: A Volunteer's Experience at DevFest 2023 Prayagraj",
      author: "Aditya Kumar",
      date: "Dec 25, 2023",
      readTime: "6 min read",
      category: "Experience",
      description: "Personal insights and experiences from volunteering at DevFest 2023 Prayagraj, sharing the journey and learnings...",
      link: "https://medium.com/@adityakumar2019.ak/my-first-devfest-a-volunteers-experience-at-devfest-2023-prayagraj-232035102743"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gradient-to-b dark:from-[#0B1120] dark:to-[#0A0F1C]">
      <main className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        {/* Header */}
        <div className="max-w-3xl mb-8 lg:mb-12">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 lg:mb-4 text-gray-900 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-blue-200 dark:via-purple-200 dark:to-pink-200">
            Posted Blogs
          </h1>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
            Explore our latest articles, tutorials, and insights from the GDG Prayagraj community. 
            Learn from experiences, technical guides, and community stories.
          </p>
        </div>

        {/* Blogs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {blogs.map((blog, index) => (
            <a
              key={index}
              href={blog.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white dark:bg-[#111827]/80 rounded-xl p-4 sm:p-5 hover:shadow-lg transition-all duration-300 border border-transparent hover:border-blue-100 dark:hover:border-blue-900"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 p-2 rounded-lg">
                  <div className="text-xl transform group-hover:scale-110 transition-transform duration-300">
                    {blog.category === "Technical" ? "🤖" : 
                     blog.category === "Event" ? "🎯" :
                     blog.category === "Experience" ? "💡" : "📝"}
                  </div>
                </div>
                <span className="text-xs font-medium text-blue-600 dark:text-blue-400 px-2 py-0.5 bg-blue-50 dark:bg-blue-900/30 rounded-full">
                  {blog.category}
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-semibold mb-2 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                {blog.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                {blog.description}
              </p>
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="text-gray-600 dark:text-gray-400">{blog.author}</span>
                  <span className="text-gray-400 dark:text-gray-500">•</span>
                  <span className="text-gray-500 dark:text-gray-400">{blog.date}</span>
                </div>
                <span className="text-gray-500 dark:text-gray-400">{blog.readTime}</span>
              </div>
            </a>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-8 sm:mt-12 text-center">
          <a
            href="https://medium.com/@gdgprayag"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm rounded-lg hover:opacity-95 transition-all duration-300 shadow-md hover:shadow-lg dark:shadow-blue-500/30 dark:hover:shadow-blue-500/50 transform hover:-translate-y-0.5"
          >
            <span className="font-medium">Follow Us on Medium</span>
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </main>
    </div>
  );
} 