"use client";

import { motion } from "framer-motion";
import { Code2, Smartphone, Palette, Database, Shield, Brain } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const services = [
  {
    icon: <Code2 className="h-12 w-12" />,
    title: "Web Development",
    description: "Custom web applications built with modern technologies and best practices.",
    features: ["React/Next.js", "Node.js", "REST APIs", "Database Design"],
  },
  {
    icon: <Smartphone className="h-12 w-12" />,
    title: "Mobile Development",
    description: "Native and cross-platform mobile applications for iOS and Android.",
    features: ["React Native", "Flutter", "Native iOS/Android", "App Store Optimization"],
  },
  {
    icon: <Palette className="h-12 w-12" />,
    title: "UI/UX Design",
    description: "User-centered design solutions that deliver exceptional experiences.",
    features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
  },
  {
    icon: <Database className="h-12 w-12" />,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and DevOps implementation.",
    features: ["AWS/Azure", "Docker", "Kubernetes", "CI/CD"],
  },
  {
    icon: <Shield className="h-12 w-12" />,
    title: "Cybersecurity",
    description: "Comprehensive security solutions to protect your digital assets.",
    features: ["Security Audits", "Penetration Testing", "Compliance", "Training"],
  },
  {
    icon: <Brain className="h-12 w-12" />,
    title: "AI & ML Solutions",
    description: "Intelligent solutions powered by cutting-edge AI technologies.",
    features: ["Machine Learning", "Natural Language Processing", "Computer Vision", "Predictive Analytics"],
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center bg-gradient-to-b from-primary/5 to-background">
        <motion.div 
          className="container px-4 mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to your business needs
          </p>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                  <div className="mb-6 text-primary">{service.icon}</div>
                  <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" asChild>
                    <Link href="/contact">Learn More</Link>
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}