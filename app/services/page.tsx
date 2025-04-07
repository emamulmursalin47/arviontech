"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ServicesAccordion } from "@/components/services-accordion";
import { X } from "lucide-react";

// Service modal component
const ServiceModal = ({ isOpen, onClose, service }) => {
  if (!service) return null;
  
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white dark:bg-gray-900 rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <div className="absolute top-4 right-4">
                  <button 
                    onClick={onClose}
                    className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>
                
                <div className="p-6 sm:p-8">
                  <div className="w-24 h-24 rounded-lg overflow-hidden mb-6">
                    <img 
                      src={service.imageUrl} 
                      alt={service.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <h3 className="text-2xl sm:text-3xl font-bold mb-4">{service.title}</h3>
                  
                  <div className="space-y-6">
                    <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
                    
                    <div>
                      <h4 className="font-semibold text-lg mb-3">Key Features</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <div className="mt-1 text-[#1887eb]">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
                              </svg>
                            </div>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <motion.button
                      className="bg-gradient-to-r from-[#0552b9] to-[#733cff] hover:from-[#0552b9] hover:to-[#5223bb] text-white py-3 px-6 rounded-lg font-medium transition-all shadow-lg hover:shadow-xl w-full sm:w-auto"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Request a Quote
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default function ServicesPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  
  // Updated service data with all requested services and placeholder images
  const serviceData = [
    {
      title: "Web Development",
      description: "We build modern, responsive, and performant websites and web applications tailored to your business needs.",
      imageUrl: "/api/placeholder/400/320",
      features: [
        "Responsive design for all devices",
        "Performance optimization",
        "SEO-friendly architecture",
        "User experience focus",
        "Content management systems",
        "E-commerce solutions"
      ]
    },
    {
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that provide seamless user experiences across all devices.",
      imageUrl: "/api/placeholder/400/320",
      features: [
        "Native iOS and Android development",
        "Cross-platform solutions",
        "UI/UX design for mobile",
        "Performance optimization",
        "Push notifications",
        "Offline functionality"
      ]
    },
    {
      title: "UI/UX & Product Design",
      description: "User-centered design solutions that create intuitive, engaging interfaces and exceptional user experiences.",
      imageUrl: "/api/placeholder/400/320",
      features: [
        "User research and personas",
        "Wireframing and prototyping",
        "Interaction design",
        "Visual design systems",
        "Usability testing",
        "Design implementation"
      ]
    },
    {
      title: "Data Scraping & Automation",
      description: "Powerful data extraction and process automation solutions to streamline your business operations.",
      imageUrl: "/api/placeholder/400/320",
      features: [
        "Web scraping solutions",
        "Data extraction APIs",
        "Workflow automation",
        "Data cleaning and transformation",
        "Scheduled data collection",
        "Custom reporting systems"
      ]
    },
    {
      title: "E-commerce Platforms",
      description: "End-to-end e-commerce solutions from storefront design to payment processing and inventory management.",
      imageUrl: "/api/placeholder/400/320",
      features: [
        "Custom e-commerce development",
        "Shopping cart integration",
        "Payment gateway setup",
        "Inventory management systems",
        "Order fulfillment workflows",
        "Customer relationship management"
      ]
    },
    {
      title: "Business Automation",
      description: "Streamline operations and increase efficiency with custom business process automation solutions.",
      imageUrl: "/api/placeholder/400/320",
      features: [
        "Business process analysis",
        "Workflow optimization",
        "Custom automation tools",
        "Integration with existing systems",
        "Productivity tracking",
        "ROI measurement"
      ]
    },
    {
      title: "Custom Software Solutions",
      description: "Bespoke software applications designed to address your unique business challenges and requirements.",
      imageUrl: "/api/placeholder/400/320",
      features: [
        "Requirement analysis",
        "Custom architecture design",
        "Enterprise-grade development",
        "Quality assurance testing",
        "Deployment and maintenance",
        "Continuous improvement"
      ]
    },
    {
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and solutions to help your business grow and adapt to changing demands.",
      imageUrl: "/api/placeholder/400/320",
      features: [
        "Cloud migration strategies",
        "AWS, Azure, and Google Cloud expertise",
        "Serverless architecture",
        "Microservices implementation",
        "Containerization with Docker and Kubernetes",
        "24/7 monitoring and support"
      ]
    }
  ];

  const openServiceModal = (service) => {
    setSelectedService(service);
    setModalOpen(true);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 flex items-center justify-center bg-gradient-to-tr from-[#0552b9]/25 via-[#1887eb]/10 to-[#733cff]/30 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -inset-[10px] bg-grid-white/5 [mask-image:linear-gradient(to_bottom,transparent,white,transparent)]"></div>
        </div>
        
        <motion.div 
          className="container px-4 mx-auto text-center relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#0552b9] to-[#733cff]">
              Our Services
            </h1>
          </motion.div>
          
          <motion.p 
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Comprehensive digital solutions tailored to your business needs
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8"
          >
            <motion.button
              className="bg-gradient-to-r from-[#0552b9] to-[#733cff] text-white px-8 py-3 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Services
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Services Section */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our comprehensive range of digital services designed to help your business thrive
            </p>
          </motion.div>
          
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {serviceData.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all hover:shadow-xl"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={service.imageUrl} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-5">
                    {service.description}
                  </p>
                  <motion.button
                    onClick={() => openServiceModal(service)}
                    className="text-[#1887eb] hover:text-[#733cff] font-medium flex items-center gap-1"
                    whileHover={{ x: 3 }}
                  >
                    Learn More
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Accordion Section */}
      
      
      {/* Contact CTA */}
      <section className="py-24 relative text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0552b9] via-[#1887eb] to-[#733cff]"></div>
        <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIwOS0xLjc5MS00LTQtNHMtNCAxLjc5MS00IDQgMS43OTEgNCA0IDQgNC0xLjc5MSA0LTR6bTAtOGMwLTIuMjA5LTEuNzkxLTQtNC00cy00IDEuNzkxLTQgNCAxLjc5MSA0IDQgNCA0LTEuNzkxIDQtNHptLTggNGMwLTIuMjA5LTEuNzkxLTQtNC00cy00IDEuNzkxLTQgNCAxLjc5MSA0IDQgNCA0LTEuNzkxIDQtNHptOCAwYzAtMi4yMDktMS43OTEtNC00LTRzLTQgMS43OTEtNCA0IDEuNzkxIDQgNCA0IDQtMS43OTEgNC00em0wLThjMC0yLjIwOS0xLjc5MS00LTQtNHMtNCAxLjc5MS00IDQgMS43OTEgNCA0IDQgNC0xLjc5MSA0LTR6bS04IDRjMC0yLjIwOS0xLjc5MS00LTQtNHMtNCAxLjc5MS00IDQgMS43OTEgNCA0IDQgNC0xLjc5MSA0LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] bg-center"></div>
        <div className="container px-4 mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-white/90 max-w-2xl mx-auto mb-8">
              Contact us today to discuss how our services can help your business grow and thrive in the digital economy.
            </p>
            <motion.div 
              className="bg-white p-8 max-w-md mx-auto rounded-xl shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Contact us Quickly!</h3>
              <p className="text-gray-600 mb-6">With a simple step you will be connected with our trained customer support manager.</p>
              <div className="flex flex-col sm:flex-row items-center gap-2">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="px-4 py-3 border border-gray-300 rounded-lg sm:rounded-l-lg sm:rounded-r-none flex-1 focus:outline-none focus:ring-2 focus:ring-[#1887eb] w-full" 
                />
                <motion.button 
                  className="bg-gradient-to-r from-[#0552b9] to-[#733cff] hover:from-[#0552b9] hover:to-[#5223bb] text-white px-6 py-3 rounded-lg sm:rounded-l-none sm:rounded-r-lg transition-colors duration-300 w-full sm:w-auto"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Submit
                </motion.button>
              </div>
              <div className="mt-4 text-right">
                <a href="mailto:hello@arviontech.com" className="text-[#1887eb] hover:text-[#733cff] flex items-center justify-end gap-1 font-medium group">
                  hello@arviontech.com
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
      
      {/* Service Modal */}
      <ServiceModal 
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        service={selectedService}
      />
    </div>
  );
}