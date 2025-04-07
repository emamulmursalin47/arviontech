"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code2, Cpu, Globe2, LineChart, Shield, Play, ArrowUpRight, Star } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const services = [
  {
    icon: <Code2 className="h-8 w-8" />,
    title: "Web & Mobile App Development",
    description: "Building scalable applications with cutting-edge technology"
  },
  {
    icon: <Globe2 className="h-8 w-8" />,
    title: "UI/UX & Product Design",
    description: "Creating intuitive and engaging user experiences"
  },
  {
    icon: <Cpu className="h-8 w-8" />,
    title: "Custom Software Solutions",
    description: "Tailored solutions for your unique business needs"
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Data Scrapping & Automation",
    description: "Powerful tools to extract data and automate workflows"
  },
  {
    icon: <LineChart className="h-8 w-8" />,
    title: "E-commerce Platforms",
    description: "Custom online stores optimized for sales and conversions"
  },
  {
    icon: <ArrowRight className="h-8 w-8" />,
    title: "Business Automation",
    description: "Streamlining operations to increase efficiency and productivity"
  }
];

// Floating animation variants
const floatingAnimation = {
  initial: { y: 0 },
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      repeatType: "reverse" as const,
      ease: "easeInOut"
    }
  }
};

const spinAnimation = {
  initial: { rotate: 0 },
  animate: {
    rotate: 360,
    transition: {
      duration: 15,
      repeat: Infinity,
      ease: "linear"
    }
  }
};

const pulseAnimation = {
  initial: { scale: 1, opacity: 0.7 },
  animate: {
    scale: [1, 1.05, 1],
    opacity: [0.7, 0.9, 0.7],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-tr from-[#0552b9]/25 via-[#1887eb]/10 to-[#733cff]/30">
        {/* Bracket icon */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 0.5, x: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute left-[10%] top-1/3 opacity-10 md:opacity-50 scale-40 sm:scale-50 md:scale-100"
        >
          <svg width="100" height="120" viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M30 20L10 60L30 100" stroke="#1887eb" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M70 20L90 60L70 100" stroke="#733cff" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.div>
        
        {/* Lightning bolt decoration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute right-[5%] bottom-1/4 opacity-10 md:opacity-100 scale-40 sm:scale-50 md:scale-100"
        >
          <svg width="120" height="150" viewBox="0 0 120 150" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M60 10L15 90H55L40 140L105 55H60L75 10Z" fill="#0552b9" fillOpacity="0.2"/>
          </svg>
        </motion.div>

        {/* HTML Tag Animation */}
        <motion.div
          variants={floatingAnimation}
          initial="initial"
          animate="animate"
          className="absolute right-[15%] bottom-[25%] opacity-10 md:opacity-25 scale-50 sm:scale-75 md:scale-100"
          style={{ animationDelay: "1.5s" }}
        >
          <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 16L18 12L13 8" stroke="#733cff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M6 8L11 12L6 16" stroke="#733cff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.div>

        <div className="container px-4 mx-auto text-center z-10 mt-20">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-center"
            >
              <h2 className="text-3xl md:text-5xl font-medium text-gray-700 mb-2">We develop</h2>
              <div className="flex items-center justify-center">
                <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-10">
                  Impactful Products
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                    className="inline-block ml-2"
                  >
                    <Play className="h-10 w-10 fill-[#733cff] text-[#733cff]" />
                  </motion.span>
                </h1>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap items-center justify-center gap-2 mb-12"
            >
              <div className="hidden md:flex flex-wrap justify-center gap-x-2 gap-y-1 max-w-2xl">
                <span className="text-lg text-gray-700 flex items-center">
                  <span className="text-xl text-[#1887eb] mr-1">🔹</span>
                  Web & Mobile App Development
                </span>
                <span className="text-lg text-gray-700 flex items-center">
                  <span className="text-xl text-[#1887eb] mr-1">🔹</span>
                  UI/UX & Product Design
                </span>
                <span className="text-lg text-gray-700 flex items-center">
                  <span className="text-xl text-[#1887eb] mr-1">🔹</span>
                  Data Scrapping & Automation
                </span>
                <span className="text-lg text-gray-700 flex items-center">
                  <span className="text-xl text-[#1887eb] mr-1">🔹</span>
                  E-commerce Platforms
                </span>
                <span className="text-lg text-gray-700 flex items-center">
                  <span className="text-xl text-[#1887eb] mr-1">🔹</span>
                  Business Automation
                </span>
                <span className="text-lg text-gray-700 flex items-center">
                  <span className="text-xl text-[#1887eb] mr-1">🔹</span>
                  Custom Software Solutions
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap justify-center gap-4 mb-20"
            >
              <Button 
                variant="outline" 
                size="lg" 
                className="text-[#733cff] border-[#733cff] hover:bg-[#733cff]/10"
              >
                Portfolios
              </Button>
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#1887eb] to-[#733cff] text-white hover:shadow-md hover:shadow-[#733cff]/20 transition-all duration-300"
              >
                Schedule a call
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
            
            {/* Ratings Section */}
            {/* <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap items-center justify-center gap-8 mt-auto"
            >
              <div className="flex flex-col items-center">
                <div className="text-xs uppercase text-gray-500 mb-1">REVIEWED ON</div>
                <div className="font-bold text-gray-800 text-lg">Clutch</div>
                <div className="flex text-[#1887eb] mt-1">
                  <Star className="h-4 w-4 fill-[#1887eb]" />
                  <Star className="h-4 w-4 fill-[#1887eb]" />
                  <Star className="h-4 w-4 fill-[#1887eb]" />
                  <Star className="h-4 w-4 fill-[#1887eb]" />
                  <Star className="h-4 w-4 fill-[#1887eb]" />
                  <span className="ml-1 text-sm font-medium">5.0</span>
                </div>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="text-xs uppercase text-gray-500 mb-1">REVIEWED ON</div>
                <div className="font-bold text-gray-800 text-lg">Trustpilot</div>
                <div className="flex text-[#733cff] mt-1">
                  <Star className="h-4 w-4 fill-[#733cff]" />
                  <Star className="h-4 w-4 fill-[#733cff]" />
                  <Star className="h-4 w-4 fill-[#733cff]" />
                  <Star className="h-4 w-4 fill-[#733cff]" />
                  <Star className="h-4 w-4 fill-white" stroke="#733cff" strokeWidth="1" />
                  <span className="ml-1 text-sm font-medium">4.5</span>
                </div>
              </div>
              
              <div className="flex flex-col items-center">
                <Image 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png" 
                  alt="Google Logo"
                  width={20} 
                  height={20}
                  className="mb-1"
                />
                <div className="flex text-yellow-500">
                  <Star className="h-4 w-4 fill-yellow-500" />
                  <Star className="h-4 w-4 fill-yellow-500" />
                  <Star className="h-4 w-4 fill-yellow-500" />
                  <Star className="h-4 w-4 fill-yellow-500" />
                  <Star className="h-4 w-4 fill-white" stroke="yellow" strokeWidth="1" />
                </div>
              </div>
            </motion.div> */}
          </div>
        </div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-background/50"></div>
      </section>

      {/* Services Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#733cff]/10 via-background to-[#0552b9]/10 pointer-events-none"></div>
        <div className="container px-4 mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4 text-[#733cff]">Our Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive digital solutions tailored to your needs
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <Card className="p-6 hover:shadow-lg transition-all duration-300 border-[#733cff]/20 group-hover:border-[#733cff]/50 group-hover:shadow-[#733cff]/5 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1887eb]/5 to-[#733cff]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  <div className="relative z-10">
                    <div className="mb-4 text-[#1887eb] group-hover:text-[#733cff] transition-colors duration-300">{service.icon}</div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-[#1887eb] transition-colors duration-300">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0552b9] via-[#1887eb] to-[#733cff]"></div>
        <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIwOS0xLjc5MS00LTQtNHMtNCAxLjc5MS00IDQgMS43OTEgNCA0IDQgNC0xLjc5MSA0LTR6bTAtOGMwLTIuMjA5LTEuNzkxLTQtNC00cy00IDEuNzkxLTQgNCAxLjc5MSA0IDQgNCA0LTEuNzkxIDQtNHptLTggNGMwLTIuMjA5LTEuNzkxLTQtNC00cy00IDEuNzkxLTQgNCAxLjc5MSA0IDQgNCA0LTEuNzkxIDQtNHptOCAwYzAtMi4yMDktMS43OTEtNC00LTRzLTQgMS43OTEtNCA0IDEuNzkxIDQgNCA0IDQtMS43OTEgNC00em0wLThjMC0yLjIwOS0xLjc5MS00LTQtNHMtNCAxLjc5MS00IDQgMS43OTEgNCA0IDQgNC0xLjc5MSA0LTR6bS04IDRjMC0yLjIwOS0xLjc5MS00LTQtNHMtNCAxLjc5MS00IDQgMS43OTEgNCA0IDQgNC0xLjc5MSA0LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] bg-center"></div>
        <div className="container px-4 mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-white/90 max-w-2xl mx-auto mb-8">
              Let's collaborate to bring your vision to life with our expertise in digital solutions.
            </p>
            <Button
              variant="outline"
              size="lg"
              className="bg-white text-[#1887eb] hover:bg-[#733cff]/10 hover:text-white border-white hover:border-white transition-all duration-300 relative overflow-hidden group"
              asChild
            >
              <Link href="/contact" className="relative z-10 flex items-center">
                <span className="absolute inset-0 bg-gradient-to-r from-[#1887eb] to-[#733cff] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                  Start Your Project
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}