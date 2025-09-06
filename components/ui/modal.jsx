"use client";

import * as React from "react";
import { X } from "lucide-react";
import Image from "next/image";

export function Modal({ isOpen, onClose, member }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />
      <div className="relative bg-white dark:bg-[#111827] rounded-lg p-6 max-w-2xl w-full mx-4 shadow-xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
        >
          <X className="h-6 w-6" />
        </button>
        
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-1/3">
            <div className="relative w-full aspect-square rounded-lg overflow-hidden">
              <Image
                src={member.imageUrl}
                alt={member.name}
                fill
                className="object-cover"
              />
            </div>
          </div>
          
          <div className="w-full md:w-2/3">
            <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
              {member.name}
            </h2>
            <p className="text-[#4285F4] dark:text-blue-400 font-medium mb-4">
              {member.role}
            </p>
            <p 
              className="text-gray-600 dark:text-gray-300 mb-6"
              dangerouslySetInnerHTML={{
                __html: member.links?.englishLearners 
                  ? member.description.replace(
                      "English Learners",
                      `<a href="${member.links.englishLearners}" target="_blank" rel="noopener noreferrer" class="text-blue-600 dark:text-blue-400 hover:underline font-medium">English Learners</a>`
                    )
                  : member.description
              }}
            />
            
            {member.socials && (
              <div className="flex gap-4">
                {member.socials.portfolio && member.socials.portfolio !== "#" && (
                  <a
                    href={member.socials.portfolio}
                    target="_blank"
                    rel="noopener noreferrer"
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
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 