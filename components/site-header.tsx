"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";

const leftNavigation = [
  { name: "Career", href: "/career" },
  { name: "Blogs", href: "/blogs" },
  { name: "About Us", href: "/about" },
];

const rightNavigation = [
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact Us", href: "/contact" },
];

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="w-full bg-gradient-to-tr from-[#0552b9]/25 via-[#1887eb]/20 to-[#733cff]/50 backdrop-blur-lg border-b sticky top-0 z-50 border-[#1887eb]/10">
      <nav className="container mx-auto px-4 flex items-center justify-between h-20">
        {/* Left Navigation - Desktop */}
        <div className="hidden md:flex items-center space-x-8">
          {leftNavigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-white ${
                pathname === item.href
                  ? "text-black"
                  : "text-black/80"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Logo - Centered */}
        <div className="flex items-center justify-center md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
          <Link href="/" className="flex items-center">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center"
            >
              <Image 
                src="https://res.cloudinary.com/dufs2ywc7/image/upload/v1743935527/Arvion_Logo3_agwqox.png"
                alt="Arvion Tech Logo"
                width={150}
                height={80}
                className="rounded-sm"
              />
            </motion.div>
          </Link>
        </div>

        {/* Right Navigation - Desktop */}
        <div className="hidden md:flex items-center space-x-8">
          {rightNavigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-white ${
                pathname === item.href
                  ? "text-black"
                  : "text-black/80"
              }`}
            >
              {item.name}
            </Link>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden">
          <ThemeToggle />
          <Button
            variant="ghost"
            className="ml-2 text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-gradient-to-tr from-[#0552b9]/25 via-[#1887eb]/10 to-[#733cff]/30 backdrop-blur-sm border-b border-[#1887eb]/10 z-50">
            <div className="space-y-1 px-4 py-4">
              {[...leftNavigation, ...rightNavigation].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-2 text-base font-medium rounded-md ${
                    pathname === item.href
                      ? "text-black bg-white/10"
                      : "text-black/80 hover:text-black hover:bg-white/5"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}