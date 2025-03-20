'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ModeToggle } from "./toggle-theme";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu when screen size becomes large
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <div className="lg:hidden">
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
        aria-label="Toggle menu"
      >
        <div className="w-5 h-4 flex flex-col justify-between">
          <span className={`block h-0.5 w-full bg-gray-600 dark:bg-gray-300 transform transition-all duration-300 ${
            isOpen ? 'rotate-45 translate-y-[7px]' : ''
          }`} />
          <span className={`block h-0.5 w-full bg-gray-600 dark:bg-gray-300 transform transition-all duration-300 ${
            isOpen ? 'opacity-0' : ''
          }`} />
          <span className={`block h-0.5 w-full bg-gray-600 dark:bg-gray-300 transform transition-all duration-300 ${
            isOpen ? '-rotate-45 -translate-y-[7px]' : ''
          }`} />
        </div>
      </button>

      {/* Full Screen Menu */}
      <div 
        className={`fixed inset-0 bg-white dark:bg-gray-900 z-50 transition-all duration-300 ease-in-out ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'
        }`}
      >
        <div className="container mx-auto px-6 py-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-16">
            <div className="flex items-center gap-3">
              <div className="bg-gray-50 dark:bg-gray-800 p-2 rounded-xl">
                <Image
                  src="/devfest-logo.svg"
                  alt="DevFest Logo"
                  width={28}
                  height={28}
                  className="dark:invert"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-sm text-gray-900 dark:text-white">Google Developer Group</span>
                <span className="text-xs text-gray-500 dark:text-gray-400">Prayagraj</span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
            >
              <svg
                className="w-6 h-6 text-gray-600 dark:text-gray-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col">
            {[
              { href: "/", label: "Home" },
              { href: "/agenda", label: "Agenda" },
              { href: "/speakers", label: "Speakers" },
              { href: "/badge", label: "Badge" },
              { href: "/team", label: "Team" },
              { href: "/faq", label: "FAQ" },
            ].map((link, index) => (
              <Link 
                key={link.href}
                href={link.href} 
                className="group py-4 flex items-center justify-between text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors border-b border-gray-100 dark:border-gray-800"
                onClick={() => setIsOpen(false)}
              >
                <span className="text-xl font-medium">{link.label}</span>
                <svg 
                  className="w-5 h-5 text-gray-400 group-hover:translate-x-1 transition-transform" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
          </nav>

          {/* Theme Toggle */}
          <div className="mt-8 pt-8 border-t border-gray-100 dark:border-gray-800">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600 dark:text-gray-400">Switch theme</span>
              <ModeToggle />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 