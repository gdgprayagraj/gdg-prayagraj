import { Open_Sans } from "next/font/google";
import "./globals.css";
import { ModeToggle } from "@/components/toggle-theme";
import { MobileNav } from "@/components/MobileNav";
import { ThemeProvider } from "@/components/theme-provider";
import Link from "next/link";
import Image from "next/image";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "GDG Prayagraj",
  description: "Google Developer Group Prayagraj Community Website",
  icons: {
    icon: [
      {
        url: "/favicon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/favicon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
        <link rel="preconnect" href="https://www.youtube.com" />
        <link rel="dns-prefetch" href="https://www.youtube.com" />
      </head>
      <body className={`${openSans.className} bg-gray-50 dark:bg-gray-800`} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {/* Navigation */}
          <nav className="sticky top-3 z-50 bg-gray-50 dark:bg-gray-800">
            <div className="mx-auto max-w-7xl px-4">
              <div className="flex items-center justify-between bg-gray-50 dark:bg-gray-800 rounded-full px-5 sm:px-7 py-2.5 sm:py-3 rainbow-border">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2">
                    <Image
                      src="/gdg-logo-new.svg"
                      alt="GDG Prayagraj Logo"
                      width={480}
                      height={80}
                      className="w-52 sm:w-64"
                    />
                    <span className="hidden sm:inline-flex px-2 py-0.5 bg-[#E5E7EB] dark:bg-gray-700 rounded-full text-sm">
                      Prayagraj
                    </span>
                  </div>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center gap-8">
                  <Link
                    href="/"
                    className="text-sm font-semibold text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white transition-colors"
                  >
                    Home
                  </Link>
                  <a
                    href="https://devfest.gdgprayagraj.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white transition-colors"
                  >
                    Devfest
                  </a>
                  <a
                    href="https://eventphotos.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white transition-colors"
                  >
                    Albums
                  </a>
                  <Link
                    href="/blogs"
                    className="text-sm font-semibold text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white transition-colors"
                  >
                    Blogs
                  </Link>
                  <Link
                    href="/team"
                    className="text-sm font-semibold text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white transition-colors"
                  >
                    Team
                  </Link>
                  <Link
                    href="/faq"
                    className="text-sm font-semibold text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white transition-colors"
                  >
                    FAQ
                  </Link>
                  <ModeToggle />
                </div>

                {/* Mobile Navigation */}
                <MobileNav />
              </div>
            </div>
          </nav>

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
