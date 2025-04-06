"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code2, Cpu, Globe2, LineChart, Shield } from "lucide-react";
import Link from "next/link";
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
    title: "Web & Mobile Development",
    description: "Building scalable applications with cutting-edge technology"
  },
  {
    icon: <Globe2 className="h-8 w-8" />,
    title: "UI/UX Design",
    description: "Creating intuitive and engaging user experiences"
  },
  {
    icon: <Cpu className="h-8 w-8" />,
    title: "Custom Software",
    description: "Tailored solutions for your unique business needs"
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Cybersecurity",
    description: "Protecting your digital assets with advanced security"
  },
  {
    icon: <LineChart className="h-8 w-8" />,
    title: "AI & ML Solutions",
    description: "Leveraging data for intelligent decision making"
  }
];

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-primary/5 to-background">
        <div className="container px-4 mx-auto text-center">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6"
            {...fadeIn}
          >
            Building Digital
            <span className="text-primary block mt-2">Excellence</span>
          </motion.h1>
          <motion.p 
            className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            We transform ideas into powerful digital solutions, helping businesses thrive in the modern world.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Button size="lg" className="mr-4">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg">
              View Our Work
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-muted/50">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
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
              >
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <div className="mb-4 text-primary">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container px-4 mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
              Let's collaborate to bring your vision to life with our expertise in digital solutions.
            </p>
            <Button
              variant="secondary"
              size="lg"
              asChild
            >
              <Link href="/contact">
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}