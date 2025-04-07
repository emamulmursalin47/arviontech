"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Facebook, Github, Linkedin,  } from "lucide-react";
import { Button } from "@/components/ui/button";

const team = [
  {
    name: "Md. Hasan Ali Khan",
    role: "CEO & Founder",
    image: "https://res.cloudinary.com/dufs2ywc7/image/upload/v1744021914/Blue_Simple_Business_Professional_LinkedIn_Profile_Picture_1_xrad48.png",
    bio: "Years of experience in tech leadership and innovation",
    social: {
      twitter: "https://www.facebook.com/mdhasan.alikhan.794",
      linkedin: "https://www.linkedin.com/in/md-hasan-ali-khan/",
      github: "https://github.com/hasanali112",
    },
  },
  {
    name: "Md. Emamul Mursalin",
    role: "Managing Director & Co-Founder",
    image: "https://res.cloudinary.com/dufs2ywc7/image/upload/v1742190919/Blue_Simple_Business_Professional_LinkedIn_Profile_Picture_2_xsxngn.png",
    bio: "Solution architecture Specialist with a passion for scalable solutions",
    social: {
      twitter: "https://www.facebook.com/profile.php?id=61574964023996",
      linkedin: "https://www.linkedin.com/in/mdemamulmursalin/",
      github: "https://github.com/emamulmursalin47",
    },
  },
  {
    name: "Arfaz Ahmed",
    role: "Lead Developer & Co-Founder",
    image: "https://res.cloudinary.com/dufs2ywc7/image/upload/v1744022350/1718215980116_c7h410.jpg",
    bio: "Full-stack architect with a passion for scalable solutions",
    social: {
      twitter: "https://www.facebook.com/arfaz.ahamed.546967",
      linkedin: "https://www.linkedin.com/in/arfaz-ahamed/",
      github: "https://github.com/Arfaz31",
    },
  },
  {
    name: "Esmot Ara",
    role: "Frontend Developer",
    image: "https://res.cloudinary.com/dufs2ywc7/image/upload/v1744022654/WhatsApp_Image_2025-04-07_at_16.39.25_85c81d04_rlrphp.jpg",
    bio: "Expert in frontend technologies like Next.js and Testing practices",
    social: {
      twitter: "https://bd.linkedin.com/in/esmot-ara-199215207",
      linkedin: "https://bd.linkedin.com/in/esmot-ara-199215207",
      github: "https://github.com/esmotara-codec",
    }
  },
  {
    name: "Ikram Ico",
    role: "Mobile App Developer",
    image: "https://res.cloudinary.com/dufs2ywc7/image/upload/v1744023084/475132276_1278792753387624_69342621772972035_n_dak2gv.jpg",
    bio: "Specialized in Flutter App Development and compliance",
    social: {
      twitter: "#",
      linkedin: "https://www.linkedin.com/in/ikram-ico-a301321b3/",
      github: "#",
    },
  },
  // {
  //   name: "James Wilson",
  //   role: "Security Expert",
  //   image: "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  //   bio: "Specialized in cybersecurity and compliance",
  //   social: {
  //     twitter: "#",
  //     linkedin: "#",
  //     github: "#",
  //   },
  // },
];

export default function TeamPage() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Meet Our Team
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Talented professionals dedicated to delivering excellence
          </p>

          
        </motion.div>
        
      </section>

      {/* Team Grid */}
      <section className="py-24">
      <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden group">
                  <div className="relative h-80">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                    <p className="text-primary font-medium mb-2">{member.role}</p>
                    <p className="text-muted-foreground mb-4">{member.bio}</p>
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="icon">
                        <Facebook className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Linkedin className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Github className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}