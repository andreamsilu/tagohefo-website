"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const links = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Programs", href: "/programs" },
    { label: "Leadership", href: "/leadership" },
    { label: "Resources", href: "/resources" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Top Bar (Ribbon) */}
      <div className="w-full bg-[#B8865B] text-white py-2 px-4 hidden md:block">
        <div className="mx-auto max-w-[1200px] flex items-center justify-between text-sm font-medium">
          {/* Contact Info */}
          <div className="flex items-center gap-6">
            <a href="mailto:info@tagohefo.org" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
              <FaEnvelope className="text-[16px]" />
              <span>info@tagohefo.org</span>
            </a>
            <a href="tel:+255743330373" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
              <FaPhoneAlt className="text-[16px]" />
              <span>+255 743 330 373</span>
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a href="#" aria-label="Facebook" className="hover:opacity-80 transition-opacity">
              <FaFacebookF className="text-[18px]" />
            </a>
            <a href="#" aria-label="Twitter" className="hover:opacity-80 transition-opacity">
              <FaTwitter className="text-[18px]" />
            </a>
            <a href="#" aria-label="Instagram" className="hover:opacity-80 transition-opacity">
              <FaInstagram className="text-[18px]" />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:opacity-80 transition-opacity">
              <FaLinkedinIn className="text-[18px]" />
            </a>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-50 w-full border-b border-solid border-[#f0f4f4] bg-white/90 backdrop-blur-md px-4 py-3">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3 z-50 relative">
          <div className="text-primary size-8">
            <svg
              aria-hidden="true"
              fill="none"
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                d="M24 18.4228L42 11.475V34.3663C42 34.7796 41.7457 35.1504 41.3601 35.2992L24 42V18.4228Z"
                fill="currentColor"
                fillRule="evenodd"
              ></path>
              <path
                clipRule="evenodd"
                d="M24 8.18819L33.4123 11.574L24 15.2071L14.5877 11.574L24 8.18819ZM9 15.8487L21 20.4805V37.6263L9 32.9945V15.8487ZM27 37.6263V20.4805L39 15.8487V32.9945L27 37.6263ZM25.354 2.29885C24.4788 1.98402 23.5212 1.98402 22.646 2.29885L4.98454 8.65208C3.7939 9.08038 3 10.2097 3 11.475V34.3663C3 36.0196 4.01719 37.5026 5.55962 38.098L22.9197 44.7987C23.6149 45.0671 24.3851 45.0671 25.0803 44.7987L42.4404 38.098C43.9828 37.5026 45 36.0196 45 34.3663V11.475C45 10.2097 44.2061 9.08038 43.0155 8.65208L25.354 2.29885Z"
                fill="currentColor"
                fillRule="evenodd"
              ></path>
            </svg>
          </div>
          <h2 className="text-[#111817] text-xl font-extrabold leading-tight tracking-tight">
            TAGOHEFO
          </h2>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex flex-1 justify-end gap-8">
          <nav className="flex items-center gap-7">
            {links.map((link) => (
              <Link
                key={link.href}
                className={`text-sm font-semibold transition-colors ${
                  pathname === link.href
                    ? "text-primary"
                    : "text-[#111817] hover:text-primary"
                }`}
                href={link.href}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/donate"
            className="flex min-w-[100px] cursor-pointer items-center justify-center rounded-lg h-10 px-5 bg-primary text-[#102220] text-sm font-bold shadow-lg shadow-primary/20 hover:brightness-105 transition-all"
          >
            Donate
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden z-50 p-2 text-[#111817] hover:text-primary transition-colors"
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined text-3xl">
            {isOpen ? "close" : "menu"}
          </span>
        </button>

        {/* Mobile Navigation Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 top-0 z-40 bg-white pt-24 px-4 pb-8 lg:hidden flex flex-col h-screen overflow-y-auto"
            >
              <nav className="flex flex-col gap-6 items-center text-center">
                {links.map((link, idx) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 + 0.1 }}
                    className="w-full"
                  >
                    <Link
                      href={link.href}
                      className={`text-2xl font-bold block py-2 ${
                        pathname === link.href
                          ? "text-primary"
                          : "text-[#111817]"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: links.length * 0.05 + 0.1 }}
                  className="mt-4 w-full max-w-xs"
                >
                  <Link
                    href="/donate"
                    className="flex w-full cursor-pointer items-center justify-center rounded-xl h-14 px-8 bg-primary text-[#102220] text-lg font-bold shadow-lg shadow-primary/20 hover:brightness-105 transition-all"
                  >
                    Donate Now
                  </Link>
                </motion.div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
    </>
  );
}
