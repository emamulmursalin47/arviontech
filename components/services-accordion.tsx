"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Code, Layers3, Palette, Database, PlusSquare } from "lucide-react";
import Link from "next/link";

// Define our services data
const services = [
  {
    id: "software-development",
    icon: <Code className="h-6 w-6" />,
    title: "Software Development",
    shortDescription: "Building scalable applications with cutting-edge technology",
  },
  {
    id: "3d-product-animation",
    icon: <Layers3 className="h-6 w-6" />,
    title: "3D Product Animation",
    shortDescription: "Bringing your products to life with stunning 3D animations",
  },
  {
    id: "product-design",
    icon: <Palette className="h-6 w-6" />,
    title: "Product Design (UI/UX Design)",
    shortDescription: "Creating intuitive and engaging user experiences",
  },
  {
    id: "saas-development",
    icon: <PlusSquare className="h-6 w-6" />,
    title: "SaaS Development & SQA",
    shortDescription: "Building reliable and scalable software-as-a-service solutions",
  },
];

export function ServicesAccordion() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex flex-col lg:flex-row items-center justify-between mb-12">
        <div>
          <h4 className="text-[#1887eb] font-medium mb-2">WE ARE BEST AT</h4>
          <h2 className="text-4xl font-bold mb-6">Services</h2>
        </div>
        <div className="max-w-md">
          <p className="text-xl text-right">
            We transform your product into life
          </p>
        </div>
      </div>

      <div className="bg-black/90 rounded-lg overflow-hidden">
        {services.map((service) => (
          <Link
            key={service.id}
            href={`/services/${service.id}`}
            className="block border-b border-gray-800 last:border-0"
            onMouseEnter={() => setHoveredId(service.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <div className="flex items-center justify-between p-5 cursor-pointer">
              <div className="flex items-center space-x-4">
                <div className="bg-[#1887eb]/10 p-2 rounded-full">
                  <div className="text-[#1887eb]">{service.icon}</div>
                </div>
                <h3 className="font-semibold text-lg text-white">{service.title}</h3>
              </div>
              <motion.div
                animate={{ rotate: hoveredId === service.id ? 90 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronRight className="text-[#733cff]" />
              </motion.div>
            </div>

            <AnimatePresence>
              {hoveredId === service.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="p-5 pt-0">
                    <p className="text-gray-300 mb-4">{service.shortDescription}</p>
                    <div className="flex items-center justify-end text-[#1887eb] font-medium">
                      Learn more
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </Link>
        ))}
      </div>
    </div>
  );
} 