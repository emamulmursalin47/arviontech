"use client";

import { motion } from "framer-motion";
import { Building2, Users, Trophy, Target, Rocket, Award } from "lucide-react";
import Image from "next/image";

const timeline = [
  {
    year: "2025",
    title: "Company Founded",
    description: "Started with a vision to transform digital landscapes",
    icon: <Building2 className="h-5 w-5 md:h-6 md:w-6" />,
  },
  {
    year: "2025 Q3",
    title: "Initial Product Launch",
    description: "Release of our first flagship product to the market",
    icon: <Rocket className="h-5 w-5 md:h-6 md:w-6" />,
  },
  {
    year: "2025 Q4",
    title: "Partnership Program",
    description: "Establish strategic partnerships with industry leaders",
    icon: <Users className="h-5 w-5 md:h-6 md:w-6" />,
  },
  {
    year: "2026 Q1",
    title: "Market Expansion",
    description: "Broaden our reach to new customer segments and regions",
    icon: <Target className="h-5 w-5 md:h-6 md:w-6" />,
  },
  {
    year: "2026 Q3",
    title: "Innovation Hub",
    description: "Launch R&D center for emerging technologies",
    icon: <Rocket className="h-5 w-5 md:h-6 md:w-6" />,
  },
  {
    year: "2026 Q4",
    title: "Industry Recognition",
    description: "Aiming for recognition through innovation and excellence",
    icon: <Award className="h-5 w-5 md:h-6 md:w-6" />,
  },
];

const stats = [
  { label: "Founding Team", value: "5+" },
  { label: "Years Experience", value: "3+" },
  { label: "Tech Stack", value: "10+" },
  { label: "Commitment", value: "100%" },
];
const values = [
  {
    title: "Innovation First",
    description: "Pushing boundaries with cutting-edge solutions",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
  {
    title: "Client Success",
    description: "Your growth is our primary measure of success",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
  {
    title: "Quality Driven",
    description: "Maintaining the highest standards in every project",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] sm:h-[60vh] flex items-center justify-center bg-gradient-to-b from-primary/5 to-background overflow-hidden px-4">
        <motion.div 
          className="container mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
            Our Vision for
            <span className="text-primary block mt-1 md:mt-2">Digital Innovation</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-xs sm:max-w-lg md:max-w-2xl mx-auto">
            Founded in 2025, we&apos;re a new force in digital transformation, 
            committed to helping businesses achieve their technological aspirations.
          </p>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-muted/50">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center p-3 sm:p-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-1 md:mb-2">{stat.value}</div>
                <div className="text-sm sm:text-base text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 mx-auto">
          <motion.h2 
            className="text-2xl sm:text-3xl font-bold text-center mb-10 md:mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Our Roadmap
          </motion.h2>
          
          {/* Mobile Timeline (Vertical) */}
          <div className="md:hidden relative">
            <div className="absolute left-4 top-0 h-full w-0.5 bg-border"></div>
            
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                className="relative flex mb-8 pl-12"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="absolute left-0 flex items-center justify-center w-8 h-8 bg-primary/10 rounded-full">
                  <div className="scale-75">{item.icon}</div>
                </div>
                <div className="bg-card p-4 rounded-lg shadow-md w-full">
                  <h3 className="text-base font-semibold mb-1">{item.year}</h3>
                  <h4 className="text-lg font-medium mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Desktop Timeline (Alternating) */}
          <div className="hidden md:block relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border" />
            
            {/* Timeline Items */}
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div
                  className={`w-5/12 ${
                    index % 2 === 0 ? "pr-8" : "pl-8"
                  }`}
                >
                  <div className="bg-card p-6 rounded-lg shadow-lg">
                    <div className="flex items-center mb-4">
                      <div className="p-2 bg-primary/10 rounded-full mr-4">
                        {item.icon}
                      </div>
                      <h3 className="text-xl font-semibold">{item.year}</h3>
                    </div>
                    <h4 className="text-lg font-medium mb-2">{item.title}</h4>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container px-4 mx-auto">
          <motion.h2 
            className="text-2xl sm:text-3xl font-bold text-center mb-10 md:mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Our Core Values
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="relative group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="relative h-48 sm:h-56 md:h-64 mb-4 md:mb-6 overflow-hidden rounded-lg">
                  <Image
                    src={value.image}
                    alt={value.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-1 md:mb-2">{value.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}