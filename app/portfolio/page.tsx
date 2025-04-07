"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// Define TypeScript interfaces for our data
interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-featured online store with user authentication and payment integration.",
    image: "/api/placeholder/400/300",
    technologies: ["React", "Next.js", "Stripe", "Tailwind CSS"],
    link: "/portfolio/e-commerce"
  },
  {
    id: 2,
    title: "Mobile Banking App",
    description: "Secure and intuitive banking application with real-time transaction tracking.",
    image: "/api/placeholder/400/300",
    technologies: ["React Native", "Firebase", "Redux", "Node.js"],
    link: "/portfolio/banking-app"
  },
  {
    id: 3,
    title: "Healthcare Management System",
    description: "Comprehensive solution for patient records, scheduling, and telehealth services.",
    image: "/api/placeholder/400/300",
    technologies: ["Angular", "MongoDB", "Express", "Socket.io"],
    link: "/portfolio/healthcare"
  },
  {
    id: 4,
    title: "Real Estate Listing Platform",
    description: "Property search and management system with interactive maps and virtual tours.",
    image: "/api/placeholder/400/300",
    technologies: ["Vue.js", "Django", "PostgreSQL", "Mapbox"],
    link: "/portfolio/real-estate"
  }
];

interface ProjectCardProps {
  project: Project;
  index: number;
  onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, onClick }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: false, margin: "-100px 0px" });

  return (
    <motion.div
      ref={cardRef}
      onClick={onClick}
      className="cursor-pointer relative w-full bg-slate-50 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-gray-200"
      initial={{ scale: 0.8, opacity: 0.5 }}
      animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0.5 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="relative h-56 overflow-hidden">
        <Image 
          src={project.image} 
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-800">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, idx) => (
            <span 
              key={idx} 
              className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="text-blue-600 text-sm underline hover:text-blue-800">Click to view more</div>
      </div>
    </motion.div>
  );
};

export function PortfolioSection(): JSX.Element {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = "auto";
  };

  return (
    <section id="portfolio" className="py-20 relative z-10 bg-white" ref={containerRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Our Portfolio
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Explore our latest projects and see how we&apos;ve helped businesses transform their digital presence and achieve their goals.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index}
              onClick={() => openModal(project)}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center px-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-white max-w-3xl w-full rounded-2xl p-6 relative text-gray-800 shadow-lg"
            >
              <button
                onClick={closeModal}
                className="absolute top-3 right-4 text-gray-600 text-2xl hover:text-red-600 transition"
              >
                &times;
              </button>

              <h3 className="text-2xl font-bold mb-2">{selectedProject.title}</h3>
              <p className="text-gray-600 mb-4">{selectedProject.description}</p>

              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                width={600}
                height={350}
                className="rounded-lg mb-4 object-cover w-full"
              />

              <div className="flex flex-wrap gap-2 mb-4">
                {selectedProject.technologies.map((tech, idx) => (
                  <span 
                    key={idx} 
                    className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <Link href={selectedProject.link}>
                <button className="bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-700 hover:to-purple-800 text-white px-4 py-2 rounded-lg transition-all duration-300 font-medium">
                  Visit Live Project
                </button>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default PortfolioSection;