/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight, Code2, Cpu, Globe2, LineChart, Shield, Play, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import TeamPage from "./team/page";
import ServicesPage from "./services/page";
import PortfolioSection from "./portfolio/page";
import { useEffect, useRef } from "react";
import AboutPage from "./about/page";

// Type definitions for service items
interface ServiceItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const services: ServiceItem[] = [
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

// New line animation for buttons
const lineAnimation = {
  hidden: { width: 0 },
  visible: { 
    width: "100%", 
    transition: { 
      duration: 0.5,
      ease: "easeInOut"
    }
  }
};

export default function Home() {
  // Mouse position values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Spring physics for smoother movement
  const springConfig = { damping: 25, stiffness: 120 };
  const mouseXSpring = useSpring(mouseX, springConfig);
  const mouseYSpring = useSpring(mouseY, springConfig);
  
  // Scroll parallax
  const { scrollY } = useScroll();
  const heroRef = useRef<HTMLElement>(null);
  
  // Transform values for parallax elements
  const bracketX = useTransform(mouseXSpring, [0, typeof window !== 'undefined' ? window.innerWidth : 1000], [-15, 15]);
  const bracketY = useTransform(mouseYSpring, [0, typeof window !== 'undefined' ? window.innerHeight : 800], [-10, 10]);
  const bracketScrollY = useTransform(scrollY, [0, 500], [0, -100]);
  
  const lightningX = useTransform(mouseXSpring, [0, typeof window !== 'undefined' ? window.innerWidth : 1000], [10, -10]);
  const lightningY = useTransform(mouseYSpring, [0, typeof window !== 'undefined' ? window.innerHeight : 800], [5, -5]);
  const lightningScrollY = useTransform(scrollY, [0, 500], [0, -70]);
  
  const htmlTagX = useTransform(mouseXSpring, [0, typeof window !== 'undefined' ? window.innerWidth : 1000], [-20, 20]);
  const htmlTagY = useTransform(mouseYSpring, [0, typeof window !== 'undefined' ? window.innerHeight : 800], [-15, 15]);
  const htmlTagScrollY = useTransform(scrollY, [0, 500], [0, -120]);
  
  // Update mouse position
  const handleMouseMove = (e: MouseEvent) => {
    const { clientX, clientY } = e;
    mouseX.set(clientX);
    mouseY.set(clientY);
  };
  
  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-tr from-[#0552b9]/25 via-[#1887eb]/10 to-[#733cff]/30 overflow-hidden"
      >
        {/* Bracket icon with parallax */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 0.5, x: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute left-[10%] top-1/3 opacity-10 md:opacity-50 scale-40 sm:scale-50 md:scale-100"
          style={{ 
            x: bracketX,
            y: bracketY,
            translateY: bracketScrollY
          }}
        >
          <svg width="100" height="120" viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M30 20L10 60L30 100" stroke="#1887eb" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M70 20L90 60L70 100" stroke="#733cff" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.div>
        
        {/* Lightning bolt decoration with parallax */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute right-[5%] bottom-1/4 opacity-10 md:opacity-100 scale-40 sm:scale-50 md:scale-100"
          style={{ 
            x: lightningX,
            y: lightningY,
            translateY: lightningScrollY
          }}
        >
          <svg width="120" height="150" viewBox="0 0 120 150" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M60 10L15 90H55L40 140L105 55H60L75 10Z" fill="#0552b9" fillOpacity="0.2"/>
          </svg>
        </motion.div>

        {/* HTML Tag Animation with parallax */}
        <motion.div
          variants={floatingAnimation}
          initial="initial"
          animate="animate"
          className="absolute right-[15%] bottom-[25%] opacity-10 md:opacity-25 scale-50 sm:scale-75 md:scale-100"
          style={{ 
            x: htmlTagX,
            y: htmlTagY,
            translateY: htmlTagScrollY
          }}
        >
          <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 16L18 12L13 8" stroke="#733cff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M6 8L11 12L6 16" stroke="#733cff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.div>

        {/* Background particles with parallax */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(15)].map((_, i) => {
            const size = Math.random() * 10 + 4;
            const leftPos = Math.random() * 100;
            const topPos = Math.random() * 100;
            const delay = Math.random() * 2;
            const duration = Math.random() * 4 + 3;
            const xTransform = useTransform(mouseXSpring, [0, typeof window !== 'undefined' ? window.innerWidth : 1000], [-20, 20]);
            const yTransform = useTransform(mouseYSpring, [0, typeof window !== 'undefined' ? window.innerHeight : 800], [-15, 15]);
            const scrollYTransform = useTransform(scrollY, [0, 800], [0, -150 * (Math.random() + 0.5)]);
            
            return (
              <motion.div 
                key={i}
                className="absolute rounded-full bg-gradient-to-r from-[#1887eb]/20 to-[#733cff]/20"
                style={{
                  width: `${size}px`,
                  height: `${size}px`,
                  left: `${leftPos}%`,
                  top: `${topPos}%`,
                  x: xTransform,
                  y: yTransform,
                  translateY: scrollYTransform,
                }}
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: [0.1, 0.3, 0.1],
                  scale: [1, 1.2, 1],
                  transition: {
                    duration,
                    delay,
                    repeat: Infinity,
                    repeatType: "reverse" as const,
                  }
                }}
              />
            );
          })}
        </div>

        <div className="container px-4 mx-auto text-center z-10 mt-20">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-center"
            >
              <h2 className="text-3xl md:text-5xl font-medium bg-gradient-to-r from-[#0552b9] to-[#1887eb] bg-clip-text text-transparent mb-2">We develop</h2>
              <div className="flex items-center justify-center">
                <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-[#1887eb] to-[#733cff] bg-clip-text text-transparent mb-10">
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
                {services.map((service, index) => (
                  <motion.span 
                    key={index}
                    className="text-lg text-gray-700 flex items-center"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    style={{
                      y: useTransform(scrollY, [0, 300], [0, -20 + index * 5])
                    }}
                  >
                    <span className="text-xl bg-gradient-to-r from-[#1887eb] to-[#733cff] bg-clip-text text-transparent mr-1">🔹</span>
                    {service.title}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap justify-center gap-4 mb-20"
              style={{
                y: useTransform(scrollY, [0, 300], [0, -30])
              }}
            >
              {/* Enhanced Portfolio Button with line animation */}
              <motion.div
                className="relative group"
                whileHover="visible"
              >
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="text-[#733cff] border-2 border-[#733cff] hover:bg-[#733cff]/10 relative z-10 overflow-hidden transition-all duration-300"
                  asChild
                >
                  <Link href="/portfolio">
                    <motion.span
                      className="flex items-center relative z-10"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span>Our Portfolio</span>
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </motion.span>
                  </Link>
                </Button>
                <motion.div 
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#1887eb] to-[#733cff]"
                  variants={lineAnimation}
                  initial="hidden"
                  whileHover="visible"
                />
              </motion.div>
              
              {/* Enhanced Schedule Call Button with line animation */}
              <motion.div 
                className="relative group"
                whileHover="visible"
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-[#1887eb] to-[#733cff] text-white hover:shadow-lg hover:shadow-[#733cff]/30 transition-all duration-300 relative z-10"
                  asChild
                >
                  <Link href="/contact">
                    <motion.span
                      className="flex items-center relative z-10"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Schedule a call
                      <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </motion.span>
                  </Link>
                </Button>
                <motion.div 
                  className="absolute bottom-0 left-0 h-1 bg-white"
                  variants={lineAnimation}
                  initial="hidden"
                  whileHover="visible"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* 3D tilt effect for the hero section */}
        <motion.div 
          className="absolute inset-0 pointer-events-none"
          style={{
            rotateX: useTransform(mouseYSpring, [0, typeof window !== 'undefined' ? window.innerHeight : 800], [2, -2]),
            rotateY: useTransform(mouseXSpring, [0, typeof window !== 'undefined' ? window.innerWidth : 1000], [-2, 2]),
            perspective: 1000
          }}
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-background/50"></div>
      </section>
      
      {/* Apply scroll parallax to other sections */}
      <motion.div
        style={{
          translateY: useTransform(scrollY, [0, 200], [0, 0]),
          opacity: useTransform(scrollY, [0, 300, 600], [0, 1, 1])
        }}
      >
        <ServicesPage/>
      </motion.div>
      <AboutPage/>
      <motion.div
        style={{
          translateY: useTransform(scrollY, [300, 600], [100, 0]),
          opacity: useTransform(scrollY, [300, 600, 900], [0, 1, 1])
        }}
      >
        <TeamPage/>
        
      </motion.div>
      
      {/* Services Section */}
      <section className="py-24 relative overflow-hidden">
        <motion.div
          style={{
            translateY: useTransform(scrollY, [600, 900], [100, 0]),
            opacity: useTransform(scrollY, [600, 900, 1200], [0, 1, 1])
          }}
        >
        
        </motion.div>
      </section>
      <PortfolioSection/>
      
      {/* CTA Section with parallax and improved animations */}
      <section className="py-24 relative text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0552b9] via-[#1887eb] to-[#733cff]"></div>
        <motion.div 
          className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjJnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIwOS0xLjc5MS00LTQtNHMtNCAxLjc5MS00IDQgMS43OTEgNCA0IDQgNC0xLjc5MSA0LTR6bTAtOGMwLTIuMjA5LTEuNzkxLTQtNC00cy00IDEuNzkxLTQgNCAxLjc5MSA0IDQgNCA0LTEuNzkxIDQtNHptLTggNGMwLTIuMjA5LTEuNzkxLTQtNC00cy00IDEuNzkxLTQgNCAxLjc5MSA0IDQgNCA0LTEuNzkxIDQtNHptOCAwYzAtMi4yMDktMS43OTEtNC00LTRzLTQgMS43OTEtNCA0IDEuNzkxIDQgNCA0IDQtMS43OTEgNC00em0wLThjMC0yLjIwOS0xLjc5MS00LTQtNHMtNCAxLjc5MS00IDQgMS43OTEgNCA0IDQgNC0xLjc5MSA0LTR6bS04IDRjMC0yLjIwOS0xLjc5MS00LTQtNHMtNCAxLjc5MS00IDQgMS43OTEgNCA0IDQgNC0xLjc5MSA0LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] bg-center"
          style={{ 
            x: useTransform(mouseXSpring, [0, typeof window !== 'undefined' ? window.innerWidth : 1000], [-10, 10]),
            y: useTransform(mouseYSpring, [0, typeof window !== 'undefined' ? window.innerHeight : 800], [-10, 10])
          }}
        ></motion.div>
        
        <div className="container px-4 mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-4 text-white">Ready to Transform Your Business?</h2>
           
            <motion.div 
              className="bg-white p-8 mt-20 max-w-md mx-auto rounded-xl shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              style={{
                y: useTransform(scrollY, [1400, 1800], [50, -30])
              }}
            >
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-[#0552b9] to-[#733cff] bg-clip-text text-transparent">Contact us Quickly!</h3>
              <p className="text-gray-600 mb-6">With a simple step you will be connected with our trained customer support manager.</p>
              <div className="flex flex-col sm:flex-row items-center gap-2">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="px-4 py-3 border border-gray-300 rounded-lg sm:rounded-l-lg sm:rounded-r-none flex-1 focus:outline-none focus:ring-2 focus:ring-[#1887eb] w-full" 
                />
                <motion.button 
                  className="relative bg-gradient-to-r from-[#0552b9] to-[#733cff] hover:from-[#0552b9] hover:to-[#5223bb] text-white px-6 py-3 rounded-lg sm:rounded-l-none sm:rounded-r-lg transition-all duration-300 w-full sm:w-auto overflow-hidden group"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10 flex items-center justify-center">
                    Submit
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                  <motion.div 
                    className="absolute bottom-0 left-0 h-full w-0 bg-gradient-to-r from-[#733cff] to-[#0552b9]"
                    initial={{ width: "0%" }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              </div>
              <div className="mt-4 text-right">
                <a href="mailto:hello@arviontech.com" className="text-[#1887eb] hover:text-[#733cff] flex items-center justify-end gap-1 font-medium group">
                  arviontech@gmail.com
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className="transition-transform group-hover:translate-x-1">
                    <path d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
                    <path d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
                  </svg>
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}