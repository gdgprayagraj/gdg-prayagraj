import Image from "next/image";
import Link from "next/link";

export default function Blogs() {
  const blogs = [
    {
      title: "Automating Tasks with Gemini 2.0 and Vertex AI",
      author: "Ankit Kumar Verma",
      date: "Mar 20, 2024",
      readTime: "8 min read",
      category: "Machine Learning",
      description: "This blog will walk you through practical ways to leverage these technologies for task automation, with real-world examples and easy-to-follow steps.",
      link: "https://medium.com/@info2ankitkumarverma/automating-tasks-with-gemini-2-0-and-vertex-ai-1f9d77cc825b",
      image: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*df1exJizz-AL3SB4dHFPog.png"
    },
    {
      title: "My First DevFest: A Volunteer's Experience",
      author: "Aditya Kumar",
      date: "Dec 25, 2023",
      readTime: "6 min read",
      category: "Event Experience",
      description: "Personal insights and experiences from volunteering at DevFest 2023 Prayagraj.",
      link: "https://medium.com/@adityakumar2019.ak/my-first-devfest-a-volunteers-experience-at-devfest-2023-prayagraj-232035102743",
      image: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*-aYw7sGJfxM0x3XWN57M0g.png"
    },
    {
      title: "Unmasking Fakes with Machine Learning — Kaggle Community Olympiad",
      author: "Mohd Shadab",
      date: "May 29, 2025",
      readTime: "4 min read",
      category: "Community",
      description: "Building a machine learning model that classifies political statements as true or false?...",
      link: "https://medium.com/@mohdshadabunited/unmasking-fakes-with-machine-learning-kaggle-community-olympiad-420a604aff91",
      image: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*0snMbElyy2Ieo4Wy9OF2rg.png"
    },
    {
      title: "From Firebase to Funny Poses: My Day at the Build with AI Event",
      author: "Mohd Shadab",
      date: "May 27, 2025",
      readTime: "4 min read",
      category: "Firebase",
      description: "Last Month, I had the pleasure of attending the “Build with AI” event organized by GDG Prayagraj, and honestly?...",
      link: "https://dev.to/mohd_shadab_dev/from-firebase-to-funny-poses-my-day-at-the-build-with-ai-event-3nik",
      image: "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F2dl4xhl7vsxex8ygldu1.jpg"
    },
    {
      title: "Getting Started with TensorFlow",
      author: "Ankit Kumar Verma",
      date: "Feb 28, 2024",
      readTime: "10 min read",
      category: "Machine Learning",
      description: "A comprehensive guide for beginners to start their journey with TensorFlow.",
      link: "https://medium.com/@info2ankitkumarverma/getting-started-with-tensorflow-a-guide-for-beginners-591287bfeb52",
      image: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*o1GSEkkWQfRQvL5NLgwZOg.png"
    },
    {
      title: "Navigating the OSS: A Mentor's Journey Through the Road to Wiki Program",
      author: "Agamya Samuel",
      date: "Mar 15, 2024",
      readTime: "10 min read",
      category: "Community",
      description: "How It All Began This summer wasn't like the typical ones where majority students would travel to hill stations...",
      link: "https://blog.agamya.dev/",
      image: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,w_500,h_500,g_center/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/events/BWAI25-EventThumb-01_k2vs7Fr.png"
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {blogs.map((blog, index) => (
            <a
              key={index}
              href={blog.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-br from-white to-gray-50 dark:from-[#111827]/80 dark:to-[#1F2937]/80 rounded-xl p-4 hover:shadow-xl transition-all duration-300 border border-transparent hover:border-blue-100 dark:hover:border-blue-900"
            >
              <div className="relative w-full aspect-square mb-4 rounded-lg overflow-hidden">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex items-center gap-2 mb-3">
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 p-2 rounded-lg">
                  <div className="text-xl transform group-hover:scale-110 transition-transform duration-300">
                    {blog.category === "Machine Learning" ? "🤖" : 
                     blog.category === "Event Experience" ? "🎯" :
                     blog.category === "Community" ? "📝" : "💡"}
                  </div>
                </div>
                <span className="text-xs font-medium text-blue-600 dark:text-blue-400 px-2 py-1 bg-blue-50 dark:bg-blue-900/30 rounded-full">
                  {blog.category}
                </span>
              </div>
              <h3 className="text-base font-semibold mb-2 text-gray-900 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-blue-200 dark:to-purple-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                {blog.title}
              </h3>
              <p className="text-xs text-gray-600 dark:text-gray-300 mb-3 line-clamp-2">
                {blog.description}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-xs text-blue-600 dark:text-blue-400 font-medium">
                  Read Article
                  <svg
                    className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                <span className="text-xs text-gray-500 dark:text-gray-400">{blog.readTime}</span>
              </div>
            </a>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <a
            href="https://medium.com/@gdgprayag"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:opacity-95 transition-all duration-300 shadow-md hover:shadow-xl dark:shadow-blue-500/30 dark:hover:shadow-blue-500/50 transform hover:-translate-y-0.5"
          >
            <span className="text-base font-medium">Follow Us on Medium</span>
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </main>
    </div>
  );
} 