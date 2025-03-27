import Image from "next/image";
import Link from "next/link";

const CoreTeam = [
  {
    name: "Ankit Kumar Verma",
    role: "Organizer",
    description: "Leading GDG Prayagraj with a passion for building an inclusive tech community.",
    imageUrl: "/core-team/ankit.jpeg",
    color: "bg-blue-500",
    socials: {
      portfolio: "#",
      linkedin: "#",
      github: "#"
    }
  },
  {
    name: "Hridyesh Gupta",
    role: "Co-Organizer",
    description: "Full-stack developer with expertise in Google Cloud and Angular.",
    imageUrl: "/core-team/hridyesh.png",
    color: "bg-red-500",
    socials: {
      portfolio: "https://hridyesh.com",
      linkedin: "https://www.linkedin.com/in/hridyesh-gupta/",
      github: "https://github.com/hridyesh-gupta"
    }
  },
  {
    name: "Agamya Samuel",
    role: "Core Team",
    description: "Organizing impactful events and fostering collaboration in the community.",
    imageUrl: "/core-team/agamya.jpg",
    color: "bg-yellow-500",
    socials: {
      portfolio: "https://agamya.dev/",
      linkedin: "https://www.linkedin.com/in/agamyasamuel",
      github: "https://github.com/Agamya-Samuel"
    }
  },
  {
    name: "Aditya Kumar",
    role: "Core Team",
    description: "Frontend specialist focusing on responsive and accessible web applications.",
    imageUrl: "/core-team/aditya.jpg",
    color: "bg-purple-500",
    socials: {
      portfolio: "https://adityakumar.store/",
      linkedin: "https://www.linkedin.com/in/aditya0545",
      github: "https://github.com/aditya0545"
    }
  },
  {
    name: "Sarthak Singh",
    role: "Core Team",
    description: "Expert in cloud infrastructure and DevOps practices.",
    imageUrl: "/core-team/sarthak.jpeg",
    color: "bg-green-500",
    socials: {
      portfolio: "#",
      linkedin: "#",
      github: "#"
    }
  },
  {
    name: "Avarti Rastogi",
    role: "Core Team",
    description: "Specializing in Android and cross-platform development.",
    imageUrl: "/core-team/avarti.jpg",
    color: "bg-indigo-500",
    socials: {
      portfolio: "#",
      linkedin: "#",
      github: "#"
    }
  },
  {
    name: "Anjali Mishra",
    role: "Core Team",
    description: "Implementing AI/ML solutions and leading workshops.",
    imageUrl: "/core-team/anjali.jpeg",
    color: "bg-orange-500",
    socials: {
      portfolio: "#",
      linkedin: "#",
      github: "#"
    }
  },
  {
    name: "Gauri Gupta",
    role: "Core Team",
    description: "Creating intuitive and beautiful user experiences.",
    imageUrl: "/core-team/gauri.png",
    color: "bg-pink-500",
    socials: {
      portfolio: "https://x.com/GauriGupta2131",
      linkedin: "https://www.linkedin.com/in/gaurigaupta21",
      github: "https://github.com/GauriGupta21"
    }
  }
];

const Volunteers = [
  {
    name: "Anshuman Rai",
    role: "United University",
    imageUrl: "/volunteers/anshuman.jpg"
  },
  {
    name: "Harsh Kushwaha",
    role: "SHUATS",
    imageUrl: "/volunteers/harsh.jpg"
  },
  {
    name: "Arohi Singh",
    role: "UIT",
    imageUrl: "/volunteers/arohi.jpg"
  },
  {
    name: "Adarsh Kesharwani",
    role: "UIT",
    imageUrl: "/volunteers/adarsh.jpg"
  },
  {
    name: "Sanskar Dubey",
    role: "United University",
    imageUrl: "/volunteers/sanskar.jpg"
  },
  {
    name: "Shweta Mishra",
    role: "SIET",
    imageUrl: "/volunteers/shweta.jpg"
  },
  {
    name: "Faiz Khan",
    role: "UIT",
    imageUrl: "/volunteers/faiz.jpg"
  },
  {
    name: "Abhishek Ojha",
    role: "SIET",
    imageUrl: "/volunteers/abhishek.jpg"
  },
  {
    name: "Komal Pandey",
    role: "SIET",
    imageUrl: "/volunteers/komal.jpg"
  },
  {
    name: "Reeti Singh",
    role: "UIT",
    imageUrl: "/volunteers/reeti.jpg"
  },
  {
    name: "Ebenezer Rao",
    role: "SHUATS",
    imageUrl: "/volunteers/ebenezer.jpg"
  },
  {
    name: "Harshit Kowsik",
    role: "SIET",
    imageUrl: "/volunteers/harshit.jpg"
  },
  {
    name: "Anushka Singh",
    role: "SIET",
    imageUrl: "/volunteers/anushka.jpg"
  },
  {
    name: "Purvi Malviya",
    role: "UCER",
    imageUrl: "/volunteers/purvi.jpg"
  },
  {
    name: "Saumya Pratap Singh",
    role: "UCER",
    imageUrl: "/volunteers/saumya.jpg"
  }
];

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gradient-to-b dark:from-[#0B1120] dark:to-[#0A0F1C]">
      {/* Hero Section */}
      <div className="bg-[#4285F4] dark:bg-gradient-to-r dark:from-blue-600 dark:to-purple-600">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-white dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-blue-200 dark:to-purple-200">Meet Our Team</h1>
            <p className="text-base sm:text-lg text-white dark:text-gray-200 opacity-90">
              Our team of passionate volunteers who work together to build and foster the developer community in Prayagraj.
            </p>
          </div>
        </div>
      </div>

      {/* Core Team Section */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-8 text-center text-gray-800 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-blue-200 dark:via-purple-200 dark:to-pink-200">Core Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {CoreTeam.map((member, index) => (
            <div key={index} className="bg-white dark:bg-[#111827]/80 dark:backdrop-blur-sm rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 dark:shadow-[#4285F4]/5 dark:hover:shadow-[#4285F4]/10">
              <div className="flex flex-col items-center">
                <div className="w-48 h-48 mb-4 relative rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800 ring-2 ring-transparent dark:hover:ring-[#4285F4]/30 transition-all duration-300">
                  <Image
                    src={member.imageUrl}
                    alt={member.name}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-1 text-gray-800 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-blue-200 dark:to-purple-200">{member.name}</h3>
                  <p className="text-[#4285F4] dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-[#4285F4] dark:to-blue-400 font-medium text-sm mb-2">{member.role}</p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{member.description}</p>
                  <div className="flex justify-center items-center space-x-8">
                    <a href={member.socials.portfolio} target="_blank" rel="noopener noreferrer" className="bg-white dark:bg-[#1F2937] p-2.5 rounded-full hover:bg-gray-100 dark:hover:bg-[#374151] transition-all duration-300 hover:scale-110 dark:shadow-lg dark:shadow-blue-500/20 dark:hover:shadow-blue-500/30">
                      <svg className="w-5 h-5 text-gray-700 dark:text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                      </svg>
                    </a>
                    <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" className="bg-white dark:bg-[#1F2937] p-2.5 rounded-full hover:bg-gray-100 dark:hover:bg-[#374151] transition-all duration-300 hover:scale-110 dark:shadow-lg dark:shadow-blue-500/20 dark:hover:shadow-blue-500/30">
                      <svg className="w-5 h-5 text-gray-700 dark:text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                    <a href={member.socials.github} target="_blank" rel="noopener noreferrer" className="bg-white dark:bg-[#1F2937] p-2.5 rounded-full hover:bg-gray-100 dark:hover:bg-[#374151] transition-all duration-300 hover:scale-110 dark:shadow-lg dark:shadow-blue-500/20 dark:hover:shadow-blue-500/30">
                      <svg className="w-5 h-5 text-gray-700 dark:text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Volunteers Section */}
      <div className="container mx-auto px-4 pb-12">
        <h2 className="text-2xl font-bold mb-8 text-center text-gray-800 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-blue-200 dark:via-purple-200 dark:to-pink-200">Volunteers</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
          {Volunteers.map((volunteer, index) => (
            <div key={index} className="bg-white dark:bg-[#111827]/80 dark:backdrop-blur-sm rounded-lg p-4 text-center shadow hover:shadow-md transition-shadow">
              <div className="w-16 h-16 mx-auto mb-3">
                <div className="w-full h-full rounded-full bg-gray-200 dark:bg-[#1E293B] flex items-center justify-center">
                  <span className="text-gray-600 dark:text-gray-300 text-lg font-medium">
                    {volunteer.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
              </div>
              <h3 className="font-medium text-sm mb-1 text-gray-800 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-blue-200 dark:to-purple-200">{volunteer.name}</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">{volunteer.role}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}