"use client";

import { motion } from "framer-motion";
import { Building2, Users, Trophy, Target, Rocket, Award } from "lucide-react";
import Image from "next/image";

const timeline = [
  {
    year: "2018",
    title: "Company Founded",
    description: "Started with a vision to transform digital landscapes",
    icon: <Building2 className="h-6 w-6" />,
  },
  {
    year: "2019",
    title: "Team Expansion",
    description: "Grew to 25+ talented professionals across multiple disciplines",
    icon: <Users className="h-6 w-6" />,
  },
  {
    year: "2020",
    title: "First Major Success",
    description: "Delivered groundbreaking solutions for Fortune 500 clients",
    icon: <Trophy className="h-6 w-6" />,
  },
  {
    year: "2021",
    title: "Global Reach",
    description: "Expanded operations to serve clients across 15+ countries",
    icon: <Target className="h-6 w-6" />,
  },
  {
    year: "2022",
    title: "Innovation Hub",
    description: "Launched R&D center for emerging technologies",
    icon: <Rocket className="h-6 w-6" />,
  },
  {
    year: "2023",
    title: "Industry Recognition",
    description: "Received multiple awards for technical excellence",
    icon: <Award className="h-6 w-6" />,
  },
];

const stats = [
  { label: "Years Experience", value: "5+" },
  { label: "Team Members", value: "50+" },
  { label: "Projects Completed", value: "200+" },
  { label: "Client Satisfaction", value: "98%" },
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
      <section className="relative h-[60vh] flex items-center justify-center bg-gradient-to-b from-primary/5 to-background overflow-hidden">
        <motion.div 
          className="container px-4 mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our Journey of
            <span className="text-primary block mt-2">Digital Innovation</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Since 2018, we've been at the forefront of digital transformation, 
            helping businesses achieve their technological aspirations.
          </p>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted/50">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24">
        <div className="container px-4 mx-auto">
          <motion.h2 
            className="text-3xl font-bold text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Our Journey
          </motion.h2>
          <div className="relative">
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
                  className={`w-full md:w-5/12 ${
                    index % 2 === 0 ? "md:pr-8" : "md:pl-8"
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 bg-muted/50">
        <div className="container px-4 mx-auto">
          <motion.h2 
            className="text-3xl font-bold text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Our Core Values
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="relative group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="relative h-64 mb-6 overflow-hidden rounded-lg">
                  <Image
                    src={value.image}
                    alt={value.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}