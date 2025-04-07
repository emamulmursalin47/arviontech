'use client'
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Instagram, Linkedin, ArrowRight } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-muted/50 border-t border-[#1887eb]/10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <Image 
                src="https://res.cloudinary.com/dufs2ywc7/image/upload/v1743935527/Arvion_Logo3_agwqox.png"
                alt="Arvion Tech Logo"
                width={100}
                height={50}
                className="rounded-sm"
              />
            </div>
            <p className="text-muted-foreground">
              Building digital excellence through innovative solutions and cutting-edge technology.
            </p>

            <div className="flex space-x-4">
  <Button variant="ghost" size="icon" asChild>
    <motion.a
      href="https://facebook.com/yourpage"
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1, color: "#1877F2" }}
      whileTap={{ scale: 0.95 }}
    >
      <Facebook className="h-5 w-5" />
    </motion.a>
  </Button>
  
  <Button variant="ghost" size="icon" asChild>
    <motion.a
      href="https://twitter.com/yourhandle"
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1, color: "#1DA1F2" }}
      whileTap={{ scale: 0.95 }}
    >
      <Twitter className="h-5 w-5" />
    </motion.a>
  </Button>
  
  <Button variant="ghost" size="icon" asChild>
    <motion.a
      href="https://instagram.com/yourprofile"
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1, color: "#E1306C" }}
      whileTap={{ scale: 0.95 }}
    >
      <Instagram className="h-5 w-5" />
    </motion.a>
  </Button>
  
  <Button variant="ghost" size="icon" asChild>
    <motion.a
      href="https://linkedin.com/company/yourcompany"
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1, color: "#0077B5" }}
      whileTap={{ scale: 0.95 }}
    >
      <Linkedin className="h-5 w-5" />
    </motion.a>
  </Button>
</div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["About", "Services", "Team", "Projects", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="text-muted-foreground hover:text-[#1887eb] transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              {[
                "Web & Mobile App Development",
                "UI/UX & Product Design",
                "Data Scrapping & Automation",
                "E-commerce Platforms",
                "Business Automation",
                "Custom Software Solutions",
              ].map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-muted-foreground hover:text-[#1887eb] transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-4">Newsletter</h3>
            <p className="text-muted-foreground mb-4">
              Subscribe to our newsletter for updates and insights.
            </p>
            <div className="flex space-x-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="max-w-[200px]"
              />
              <Button>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} Arvion Tech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}