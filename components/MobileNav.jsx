'use client';

import { useState } from "react";
import Link from "next/link";
import { ModeToggle } from "./toggle-theme";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-gray-600 dark:text-gray-300"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 w-48 py-2 mt-2 bg-white dark:bg-[#111827] rounded-lg shadow-xl">
          <Link
            href="/"
            className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#1E293B]"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/agenda"
            className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#1E293B]"
            onClick={() => setIsOpen(false)}
          >
            Agenda
          </Link>
          <Link
            href="/speakers"
            className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#1E293B]"
            onClick={() => setIsOpen(false)}
          >
            Speakers
          </Link>
          <Link
            href="/badge"
            className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#1E293B]"
            onClick={() => setIsOpen(false)}
          >
            Badge
          </Link>
          <Link
            href="/team"
            className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#1E293B]"
            onClick={() => setIsOpen(false)}
          >
            Team
          </Link>
          <Link
            href="/faq"
            className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#1E293B]"
            onClick={() => setIsOpen(false)}
          >
            FAQ
          </Link>
          <Link
            href="/privacy-policy"
            className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#1E293B]"
            onClick={() => setIsOpen(false)}
          >
            Privacy Policy
          </Link>
          <div className="px-4 py-2">
            <ModeToggle />
          </div>
        </div>
      )}
    </div>
  );
} 