"use client";

import Image from "next/image";
import { useState } from "react";
import { Modal } from "@/components/ui/modal";

const CoreTeam = [
  {
    name: "Ankit Kumar Verma",
    role: "Organizer",
    description:
      "Community and Open source",
    imageUrl: "/core-team/ankit.jpeg",
    color: "bg-blue-500",
    socials: {
      portfolio: "https://bit.ly/ankitone",
      linkedin: "https://www.linkedin.com/in/ankit-kumar-verma-081804160/",
      github: "https://github.com/ankitgdg",
    },
  },
  {
    name: "Hridyesh Gupta",
    role: "Co-Organizer",
    description:
      "Full-stack developer with expertise in Google Cloud and Angular.",
    imageUrl: "/core-team/hridyesh.png",
    color: "bg-red-500",
    socials: {
      portfolio: "https://hridyesh.com",
      linkedin: "https://www.linkedin.com/in/hridyesh-gupta/",
      github: "https://github.com/hridyesh-gupta",
    },
  },
  {
    name: "Agamya Samuel",
    role: "Core Team (Technical)",
    description:
      "Open Source Mentor | Specializes in secure, high-performance systems using DevOps and modern Web Technologies.",
    imageUrl: "/core-team/agamya.png",
    color: "bg-yellow-500",
    socials: {
      portfolio: "https://agamya.dev/",
      linkedin: "https://www.linkedin.com/in/agamyasamuel",
      github: "https://github.com/Agamya-Samuel",
    },
  },
  {
    name: "Aditya Kumar",
    role: "Core Team",
    description:
      "Full Stack Developer, Open Source Contributor, CTO(Volunteer) @English Learners.",
    imageUrl: "/core-team/aditya.jpg",
    color: "bg-purple-500",
    socials: {
      portfolio: "https://adityakumar.store/",
      linkedin: "https://www.linkedin.com/in/aditya0545",
      github: "https://github.com/aditya0545",
    },
    links: {
      englishLearners: "https://englishlearners.eu.org"
    }
  },
  {
    name: "Sarthak Singh",
    role: "Core Team",
    description: "B.Tech CSE (AI & ML) student specializing in Artificial Intelligence, Machine Learning, and Android Development using Flutter and Dart.",
    imageUrl: "/core-team/sarthak.jpeg",
    color: "bg-green-500",
    socials: {
      portfolio: "N/A",
      linkedin: "https://www.linkedin.com/in/sarthak-singh-/",
      github: "https://github.com/SarthakSingh2003",
    },
  },
  {
    name: "Avarti Rastogi",
    role: "Core Team",
    description: "Co-organizer of FlutterFlow Developer Group Prayagraj and WikiClub Tech Contributor and also Core member of GDG Prayagraj.",
    imageUrl: "/core-team/avarti.jpg",
    color: "bg-indigo-500",
    socials: {
      portfolio: "https://avartirastogi.wixsite.com/my-portfolio-2",
      linkedin: "https://www.linkedin.com/in/avarti-rastogi/",
      github: "https://github.com/Avartii",
    },
  },
  {
    name: "Anjali Mishra",
    role: "Core Team",
    description: "Enthusiastic about machine learning with expertise in deep learning, AI, and web development.",
    imageUrl: "/core-team/anjali.jpeg",
    color: "bg-orange-500",
    socials: {
      portfolio: "https://warm-lemon-znl7x7.mystrikingly.com",
      linkedin: "https://www.linkedin.com/in/anjali-mishra-606b94241/",
      github: "https://github.com/Anjali-mish",
    },
  },
  {
    name: "Mohd Shadab",
    role: "Core Team",
    description: "MERN Stack Developer & Machine Learning Practitioner.",
    imageUrl: "/core-team/mohd-sadab.jpg",
    color: "bg-orange-500",
    socials: {
      portfolio: "#",
      linkedin: "#",
      github: "#",
    },
  },
  {
    name: "Anshuman Rai",
    role: "Core Team",
    description: "MERN Stack Developer & Machine Learning Practitioner.",
    imageUrl: "/core-team/anshuman.jpg",
    color: "bg-orange-500",
    socials: {
      portfolio: "#",
      linkedin: "#",
      github: "#",
    },
  },
  {
    name: "Pushpak Tiwari",
    role: "Core Team",
    description: "B.Tech AIML student interested in AI, web technologies and hands-on problem solving through real-world projects.",
    imageUrl: "/core-team/pushpak.jpg",
    color: "bg-orange-500",
    socials: {
      portfolio: "https://www.pushpaktiwari.tech/",
      linkedin: "https://www.linkedin.com/in/pushpaktiwari/",
      github: "https://github.com/pushpaktiwarii",
    },
  }
];

const VolunteerTeam = [
  {
    name: "Harsh Kushwaha",
    role: "SHUATS",
    imageUrl: "/volunteers/harsh.jpg",
  },
  {
    name: "Arohi Singh",
    role: "UIT",
    imageUrl: "/volunteers/arohi.jpg",
  },
  {
    name: "Adarsh Kesharwani",
    role: "UIT",
    imageUrl: "/volunteers/adarsh.jpg",
  },
  {
    name: "Sanskar Dubey",
    role: "UU",
    imageUrl: "/volunteers/sanskar.png",
  },
  {
    name: "Shweta Mishra",
    role: "SIET",
    imageUrl: "/volunteers/shweta.jpg",
  },
  {
    name: "Faiz Khan",
    role: "UCER",
    imageUrl: "/volunteers/faiz.jpg",
  },
  {
    name: "Abhishek Ojha",
    role: "SIET",
    imageUrl: "/volunteers/abhishek.jpg",
  },
  {
    name: "Komal Pandey",
    role: "SIET",
    imageUrl: "/volunteers/komal.jpg",
  },
  {
    name: "Ebenezer Rao",
    role: "SHUATS",
    imageUrl: "/volunteers/ebby.jpg",
  },
  {
    name: "Shreya Chaubey",
    role: "JKIAPT",
    imageUrl: "/volunteers/shreya.jpg",
  },
  {
    name: "Purvi Malviya",
    role: "UCER",
    imageUrl: "/volunteers/purvi.jpg",
  },
  {
    name: "Sakshi Rai",
    role: "SHUATS",
    imageUrl: "/volunteers/sakshi.jpg",
  },
  {
    name: "Aditya Kumar Singh",
    role: "UCER",
    imageUrl: "/volunteers/aditya-kumar-singh.jpg",
  },
  {
    name: "Rishabh Kumar",
    role: "SIET",
    imageUrl: "/volunteers/rishabh.jpg",
  },
  {
    name: "Mansi Raghav",
    role: "JKIAPT",
    imageUrl: "/volunteers/mansi.jpg",
  },
  {
    name: "Omendra Singh",
    role: "JKIAPT",
    imageUrl: "/volunteers/omendra.jpg",
  },
  {
    name: "Priyanshu Rai",
    role: "SIET",
    imageUrl: "/volunteers/priyanshu.jpg",
  },
  {
    name: "Reeti Singh",
    role: "UIT",
    imageUrl: "/volunteers/reeti.jpg",
  },
  {
    name: "Shivaansh",
    role: "UIT",
    imageUrl: "/volunteers/shivaansh_uit.jpg",
  },
  {
    name: "Ayushi Srivastava",
    role: "UCER",
    imageUrl: "/volunteers/ayushi.jpg",
  },
  {
    name: "Ayush Tripathi",
    role: "UCER",
    imageUrl: "/volunteers/ayush.jpg",
  },
  {
    name: "Zaid Sayyed",
    role: "United University",
    imageUrl: "/volunteers/zaid.jpg",
  },
  {
    name: "AKASH KUMAR",
    role: "United University",
    imageUrl: "/volunteers/akshay.jpg",
  },
  {
    name: "Priyankar Shukla",
    role: "CMP Degree College",
    imageUrl: "/volunteers/priyankar.png",
  },
  {
    name: "Manvi Kesarwani",
    role: "UIT",
    imageUrl: "/volunteers/manvi.jpg",
  },
  {
    name: "Pushpak Tiwari",
    role: "UCER",
    imageUrl: "/volunteers/pushpak.jpg",
  },
  {
    name: "Shreshth Srivastava",
    role: "United University",
    imageUrl: "/volunteers/shreshth.jpg",
  },
  {
    name: "Muskan Singh",
    role: "UIT",
    imageUrl: "/volunteers/muskan.jpg",
  },
  {
    name: "Sakshi Pandey",
    role: "United University",
    imageUrl: "/volunteers/Sakshi Pandey.jpg",
  },
  {
    name: "Syed Sohrab Haider Rizvi",
    role: "United University",
    imageUrl: "/volunteers/Sohrab Rizvi.jpg",
  },
  {
    name: "Paridhi Singh",
    role: "UCER",
    imageUrl: "/volunteers/Paridhi Singh.jpg",
  },
  {
    name: "Mahin Farooqui",
    role: "United University",
    imageUrl: "/volunteers/Mahin Farooqui.jpg",
  }
];

const AmbassadorTeam = [
  {
    name: "Shivansh Mishra",
    role: "REC Mirzapur",
    imageUrl: "/ambassadors/shivansh.jpg",
  },
  {
    name: "Vishal Maurya",
    role: "Prasad Institute of Technology",
    imageUrl: "/ambassadors/vishal.jpg",
  },
  {
    name: "Aditya singh",
    role: "Greater Noida Institute of Technology",
    imageUrl: "/ambassadors/aditya.jpg",
  },
  {
    name: "Rohan chaurasia",
    role: "REC Mirzapur",
    imageUrl: "/ambassadors/rohan.jpeg",
  },
  {
    name: "Anshuman Dwivedi",
    role: "REC Mirzapur",
    imageUrl: "/ambassadors/anshuman.jpg",
  },
  {
    name: "Prajjwal Srivastava",
    role: "REC Mirzapur",
    imageUrl: "/ambassadors/prajjwal.png",
  }
];

export default function TeamPage() {
  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gradient-to-b dark:from-[#0B1120] dark:to-[#0A0F1C]">
      {/* Hero Section */}
      <div className="bg-[#4285F4] dark:bg-gradient-to-r dark:from-blue-600 dark:to-purple-600">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-white dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-blue-200 dark:to-purple-200">
              Meet Our Team
            </h1>
            <p className="text-base sm:text-lg text-white dark:text-gray-200 opacity-90">
              Our team of passionate volunteers who work together to build and
              foster the developer community in Prayagraj.
            </p>
          </div>
        </div>
      </div>

      {/* Core Team Section */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-8 text-center text-gray-800 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-blue-200 dark:via-purple-200 dark:to-pink-200">
          Core Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {CoreTeam.map((member, index) => (
            <div
              key={index}
              onClick={() => setSelectedMember(member)}
              className="bg-white dark:bg-[#111827]/80 dark:backdrop-blur-sm rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 dark:shadow-[#4285F4]/5 dark:hover:shadow-[#4285F4]/10 cursor-pointer"
            >
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
                  <h3 className="text-xl font-bold mb-1 text-gray-800 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-blue-200 dark:to-purple-200">
                    {member.name}
                  </h3>
                  <p className="text-[#4285F4] dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-[#4285F4] dark:to-blue-400 font-medium text-sm mb-2">
                    {member.role}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    {member.description}
                  </p>
                  <div className="flex justify-center items-center space-x-8">
                    {member.socials.portfolio && member.socials.portfolio !== "#" && (
                      <a
                        href={member.socials.portfolio}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="bg-white dark:bg-[#1F2937] p-2.5 rounded-full hover:bg-gray-100 dark:hover:bg-[#374151] transition-all duration-300 hover:scale-110 dark:shadow-lg dark:shadow-blue-500/20 dark:hover:shadow-blue-500/30"
                      >
                        <svg
                          className="w-5 h-5 text-gray-700 dark:text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                        </svg>
                      </a>
                    )}
                    {member.socials.linkedin && member.socials.linkedin !== "#" && (
                      <a
                        href={member.socials.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="bg-white dark:bg-[#1F2937] p-2.5 rounded-full hover:bg-gray-100 dark:hover:bg-[#374151] transition-all duration-300 hover:scale-110 dark:shadow-lg dark:shadow-blue-500/20 dark:hover:shadow-blue-500/30"
                      >
                        <svg
                          className="w-5 h-5 text-gray-700 dark:text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </a>
                    )}
                    {member.socials.github && member.socials.github !== "#" && (
                      <a
                        href={member.socials.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="bg-white dark:bg-[#1F2937] p-2.5 rounded-full hover:bg-gray-100 dark:hover:bg-[#374151] transition-all duration-300 hover:scale-110 dark:shadow-lg dark:shadow-blue-500/20 dark:hover:shadow-blue-500/30"
                      >
                        <svg
                          className="w-5 h-5 text-gray-700 dark:text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Volunteer Team Section */}
      <div className="container mx-auto px-4 pb-12">
        <h2 className="text-2xl font-bold mb-8 text-center text-gray-800 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-blue-200 dark:via-purple-200 dark:to-pink-200">
          Volunteers
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
          {VolunteerTeam.map((volunteer, index) => (
            <div
              key={index}
              onClick={() => setSelectedMember(volunteer)}
              className="bg-white dark:bg-[#111827]/80 dark:backdrop-blur-sm rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              {volunteer.imageUrl && (
                <Image
                  src={volunteer.imageUrl}
                  alt={volunteer.name}
                  width={120}
                  height={120}
                  className="w-24 h-24 mx-auto mb-4 rounded-lg object-cover"
                  quality={80}
                />
              )}
              <h3 className="font-medium text-base mb-2 text-gray-800 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-blue-200 dark:to-purple-200">
                {volunteer.name}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {volunteer.role}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Ambassador Team Section */}
      <div className="container mx-auto px-4 pb-12 border-t border-gray-200 dark:border-gray-800">
        <h2 className="text-2xl font-bold my-8 text-center text-gray-800 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-blue-200 dark:via-purple-200 dark:to-pink-200">
          Ambassadors
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
          {AmbassadorTeam.map((ambassador, index) => (
            <div
              key={index}
              onClick={() => setSelectedMember(ambassador)}
              className="bg-white dark:bg-[#111827]/80 dark:backdrop-blur-sm rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              {ambassador.imageUrl && (
                <Image
                  src={ambassador.imageUrl}
                  alt={ambassador.name}
                  width={120}
                  height={120}
                  className="w-24 h-24 mx-auto mb-4 rounded-lg object-cover"
                  quality={80}
                />
              )}
              <h3 className="font-medium text-base mb-2 text-gray-800 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-blue-200 dark:to-purple-200">
                {ambassador.name}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {ambassador.role}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <Modal
        isOpen={selectedMember !== null}
        onClose={() => setSelectedMember(null)}
        member={selectedMember}
      />
    </main>
  );
}
