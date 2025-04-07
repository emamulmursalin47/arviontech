import { notFound } from "next/navigation";
import ServiceDetailClient from "./service-detail-client";

// Service details data
const serviceDetails = {
  "software-development": {
    title: "Software Development",
    description: "Cutting-edge software solutions tailored to your business needs",
    longDescription: "Our software development team specializes in building custom applications that solve complex business problems. Using modern frameworks and best practices, we deliver scalable, maintainable, and secure software solutions.",
    features: [
      "Custom web application development",
      "Mobile app development",
      "API design and development",
      "Database design and optimization",
      "Cloud integration and deployment",
      "Maintenance and support",
    ],
    benefits: [
      "Improved business efficiency",
      "Enhanced customer experience",
      "Reduced operational costs",
      "Scalable solutions that grow with your business",
      "Competitive advantage through technology",
    ],
    process: [
      "Requirements gathering and analysis",
      "Solution architecture and design",
      "Development and testing",
      "Deployment and integration",
      "Maintenance and support",
    ],
    technologies: ["React", "Next.js", "Node.js", "Python", "Django", "AWS", "Docker"],
  },
  "3d-product-animation": {
    title: "3D Product Animation",
    description: "Bring your products to life with stunning 3D animations",
    longDescription: "Our 3D animation service creates visually stunning representations of your products, allowing customers to see every detail and feature in action before making a purchase decision.",
    features: [
      "High-quality 3D product modeling",
      "Realistic texturing and lighting",
      "Dynamic animation sequences",
      "Product demonstration videos",
      "Interactive 3D product viewers",
      "AR/VR product experiences",
    ],
    benefits: [
      "Increased product understanding and engagement",
      "Enhanced marketing materials",
      "Higher conversion rates",
      "Reduced product returns",
      "Stand out from competition with premium visuals",
    ],
    process: [
      "Product analysis and reference gathering",
      "3D modeling and texturing",
      "Animation and lighting setup",
      "Rendering and post-production",
      "Integration with marketing materials",
    ],
    technologies: ["Blender", "Cinema 4D", "Maya", "ZBrush", "After Effects", "Unity", "Unreal Engine"],
  },
  "product-design": {
    title: "Product Design (UI/UX Design)",
    description: "Create intuitive and engaging user experiences",
    longDescription: "Our UI/UX design services focus on creating intuitive, visually appealing, and highly functional interfaces that resonate with users and drive engagement. We combine aesthetics with usability to create products that users love.",
    features: [
      "User research and persona development",
      "User journey mapping",
      "Wireframing and prototyping",
      "Visual design and branding",
      "Usability testing",
      "Design system creation",
    ],
    benefits: [
      "Increased user satisfaction and retention",
      "Reduced development costs through early problem identification",
      "Consistent user experience across platforms",
      "Improved conversion rates",
      "Reduced training and support needs",
    ],
    process: [
      "Discovery and research",
      "Information architecture and user flows",
      "Wireframing and low-fidelity prototyping",
      "Visual design and high-fidelity prototyping",
      "User testing and iteration",
      "Handoff to development",
    ],
    technologies: ["Figma", "Adobe XD", "Sketch", "InVision", "Zeplin", "Principle", "Maze"],
  },
  "saas-development": {
    title: "SaaS Development & SQA",
    description: "Build reliable and scalable software-as-a-service solutions",
    longDescription: "We specialize in developing robust Software-as-a-Service (SaaS) applications with rigorous Software Quality Assurance (SQA) practices that ensure reliability, security, and user satisfaction.",
    features: [
      "Multi-tenant architecture design",
      "Subscription and payment integration",
      "User management and authentication",
      "Comprehensive testing and quality assurance",
      "Performance optimization",
      "Security hardening and compliance",
    ],
    benefits: [
      "Recurring revenue model",
      "Scalable customer acquisition",
      "Lower customer acquisition costs",
      "Predictable revenue streams",
      "Data-driven product improvements",
    ],
    process: [
      "Market research and competitor analysis",
      "MVP definition and feature prioritization",
      "Architecture and infrastructure planning",
      "Agile development with continuous testing",
      "Launch and user onboarding",
      "Continuous improvement and feature expansion",
    ],
    technologies: ["Cloud platforms (AWS, Azure, GCP)", "Kubernetes", "Docker", "CI/CD tools", "Automated testing frameworks", "Security scanning tools", "Monitoring solutions"],
  },
};

// Generate static params for all services
export function generateStaticParams() {
  return Object.keys(serviceDetails).map((serviceId) => ({
    serviceId,
  }));
}

export default function ServiceDetail({ params }: { params: { serviceId: string } }) {
  const { serviceId } = params;
  
  // Check if service exists
  if (!serviceDetails[serviceId as keyof typeof serviceDetails]) {
    notFound();
  }
  
  const service = serviceDetails[serviceId as keyof typeof serviceDetails];

  return <ServiceDetailClient service={service} />;
}