"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ChevronRight, 
  Users, 
  Code, 
  Star, 
  Briefcase, 
  Clock, 
  MapPin, 
  ArrowUpRight,
  Search
} from "lucide-react";

// Sample job listings data
//@ts-ignore
const jobListings = [
 
 
  
 
];

// Company values data
const companyValues = [
  {
    title: "Innovation",
    description: "We embrace new technologies and approaches, constantly pushing the boundaries of what's possible.",
    icon: <Star className="h-12 w-12 text-blue-500" />
  },
  {
    title: "Collaboration",
    description: "We believe in the power of teamwork and create an environment where diverse perspectives thrive.",
    icon: <Users className="h-12 w-12 text-blue-500" />
  },
  {
    title: "Excellence",
    description: "We take pride in our work and are committed to delivering the highest quality solutions for our clients.",
    icon: <Code className="h-12 w-12 text-blue-500" />
  }
];

// Benefits data
const benefits = [
  "Competitive salary and equity packages",
  "Flexible work arrangements (remote, hybrid)",
  "Comprehensive health, dental, and vision insurance",
  "Generous paid time off and parental leave",
  "Professional development budget",
  "Regular team retreats and social events",
  "Home office setup stipend",
  "401(k) matching program"
];

export default function CareerPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [jobFilter, setJobFilter] = useState("all");
  
  // Filter jobs based on search term and department filter
  //@ts-ignore
  const filteredJobs = jobListings.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          job.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          job.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesDepartment = jobFilter === "all" ? true : job.department.toLowerCase() === jobFilter.toLowerCase();
    
    return matchesSearch && matchesDepartment;
  });

  return (
    <main className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-purple-600/90 z-10"></div>
          <Image
            src="https://res.cloudinary.com/dufs2ywc7/image/upload/v1743935527/career-hero_fxapct.jpg"
            alt="Team collaboration"
            width={1200}
            height={400}
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute inset-0 z-20 flex flex-col justify-center px-8 md:px-16">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Join Our Team</h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mb-8">
              At Arvion Tech, we&apos;re building the future of software solutions. Join our talented team and work on challenging projects that make a difference.
            </p>
            <Button className="bg-white text-blue-600 hover:bg-white/90 w-fit group">
              View Open Positions <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Our Values Section */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Our Values</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            These core principles guide everything we do at Arvion Tech.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {companyValues.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow"
            >
              <div className="mb-6">{value.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="mb-16 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 md:p-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-4">Why Work With Us</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              We believe in taking care of our team members and providing an environment where you can thrive professionally and personally.
            </p>
            
            <ul className="space-y-3">
              {benefits.map((benefit, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-start"
                >
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mr-3 mt-0.5">
                    <svg className="h-4 w-4 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 dark:text-gray-200">{benefit}</span>
                </motion.li>
              ))}
            </ul>
          </div>
          
          <div className="relative">
            <Image
              src="https://res.cloudinary.com/dufs2ywc7/image/upload/v1743935527/team-culture_sxdvct.jpg"
              alt="Team culture"
              width={500}
              height={500}
              className="rounded-xl h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Open Positions</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Find your next career opportunity at Arvion Tech and join our growing team.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row items-center gap-4 mb-8">
          <div className="relative w-full md:w-1/3">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              type="text"
              placeholder="Search positions..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <Tabs defaultValue="all" className="w-full md:w-auto" onValueChange={setJobFilter}>
            <TabsList>
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="Engineering">Engineering</TabsTrigger>
              <TabsTrigger value="Design">Design</TabsTrigger>
              <TabsTrigger value="Product">Product</TabsTrigger>
              <TabsTrigger value="Infrastructure">Infrastructure</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Job Listings */}
        <div className="space-y-4">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all group"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold group-hover:text-blue-600 transition-colors">{job.title}</h3>
                    <div className="flex flex-wrap items-center gap-3 mt-2">
                      <span className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                        <Briefcase className="h-4 w-4 mr-1" /> {job.department}
                      </span>
                      <span className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                        <Clock className="h-4 w-4 mr-1" /> {job.type}
                      </span>
                      <span className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                        <MapPin className="h-4 w-4 mr-1" /> {job.location}
                      </span>
                    </div>
                  </div>
                  <Button variant="outline" className="mt-4 md:mt-0 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20 group-hover:border-blue-200 dark:group-hover:border-blue-800 transition-all">
                    Apply Now <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4">{job.description}</p>
                
                <div className="border-t border-gray-100 dark:border-gray-700 pt-4 mt-4">
                  <h4 className="font-medium mb-2">Key Requirements:</h4>
                  <ul className="space-y-1">
                    {job.requirements.map(() => (
                        //@ts-ignore
                      <li key={index} className="text-sm text-gray-600 dark:text-gray-300 flex items-start">
                        <ChevronRight className="h-4 w-4 text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                        
                       
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-gray-500 dark:text-gray-400">No positions match your search criteria.</p>
              <Button 
                variant="link" 
                onClick={() => {
                  setSearchTerm("");
                  setJobFilter("all");
                }}
              >
                Clear filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Don&apos;t See The Right Fit?</h2>
        <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
          We&apos;re always looking for talented individuals to join our team. Send us your resume, and we&apos;ll keep it on file for future opportunities.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button className="bg-white text-blue-600 hover:bg-white/90">
            Send Your Resume
          </Button>
          <Button variant="outline" className="text-white border-white hover:bg-white/10">
            Contact Recruiting
          </Button>
        </div>
      </section>
    </main>
  );
}