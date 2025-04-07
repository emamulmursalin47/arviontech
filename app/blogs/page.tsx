"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bell, ArrowRight } from "lucide-react";

export default function BlogsPage() {
  return (
    <main className="container mx-auto px-4 py-16 min-h-[80vh] flex flex-col items-center justify-center">
      {/* Coming Soon Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto"
      >
        {/* Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
          className="mx-auto mb-8 bg-gradient-to-r from-blue-500 to-purple-600 w-24 h-24 rounded-full flex items-center justify-center"
        >
          <Bell className="h-12 w-12 text-white" />
        </motion.div>
        
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          Our Blog is Coming Soon
        </h1>
        
        {/* Description */}
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
          We&lsquo;re working hard to bring you insightful articles, industry news, and tech guides. 
          Stay tuned for updates on the latest trends in software development, design, and technology.
        </p>
        
        {/* Newsletter signup */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700 mb-12">
          <h3 className="text-xl font-semibold mb-4">Get notified when we launch</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Subscribe to our newsletter and be the first to read our blog posts.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <Input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full sm:w-2/3"
            />
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 w-full sm:w-auto group">
              Notify Me <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
        
        {/* Topics preview */}
        <div className="text-left">
          <h3 className="text-xl font-semibold mb-4 text-center">Topics we&apos;ll cover</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-w-2xl mx-auto">
            {[
              "Web Development", 
              "UX/UI Design", 
              "Cloud Architecture", 
              "AI & Machine Learning", 
              "DevOps", 
              "Product Management"
            ].map((topic, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + (index * 0.1) }}
                className="bg-gray-100 dark:bg-gray-700 rounded-lg px-4 py-3 text-center"
              >
                {topic}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </main>
  );
}