"use client";

import { motion } from "framer-motion";
import { ArrowDownToLine, Github, Linkedin, Mail, Moon, Sun, Terminal, BookOpen } from "lucide-react";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import Skills from "@/components/Skills";
import ProjectCarousel from "@/components/ProjectCarousel";
import FloatingImages from "@/components/FloatingImages";
import { projects } from "@/data/projects";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Autoplay } from "swiper/modules";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);
    return () => window.removeEventListener("mousemove", mouseMove);
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      transition: {
        type: "spring",
        mass: 0.6,
      },
    },
    text: {
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      height: 150,
      width: 150,
      backgroundColor: "var(--cursor-color)",
      mixBlendMode: "difference" as const,
      transition: {
        type: "spring",
        mass: 0.6,
      },
    },
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    console.log({
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    });
    toast.success("Message sent successfully!");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <main className="min-h-screen bg-background text-foreground overflow-hidden">
      <motion.div
        className="cursor"
        variants={variants}
        animate={cursorVariant}
        style={{
          position: "fixed",
          zIndex: 50,
          pointerEvents: "none",
          height: 32,
          width: 32,
          backgroundColor: "white",
          borderRadius: "50%",
          mixBlendMode: "difference",
        }}
      />

      <FloatingImages />

      {/* Navigation */}
      <nav className="fixed w-full z-40 bg-background/80 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex gap-4">
            <a 
              href="https://github.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-primary transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://linkedin.com/in/yourusername" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-primary transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="https://medium.com/@yourusername" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-primary transition-colors"
            >
              <BookOpen className="w-6 h-6" />
            </a>
            <a 
              href="mailto:your@email.com" 
              className="hover:text-primary transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
            <a 
              href="#projects" 
              className="hover:text-primary transition-colors"
            >
              <Terminal className="w-6 h-6" />
            </a>
          </div>
          {mounted && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="hover:bg-transparent"
            >
              {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </Button>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center relative">
        <div 
          className="absolute inset-0 bg-grid-pattern opacity-5"
          style={{
            backgroundImage: "linear-gradient(to right, #4a4a4a 1px, transparent 1px), linear-gradient(to bottom, #4a4a4a 1px, transparent 1px)",
            backgroundSize: "4rem 4rem"
          }}
        />
        
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              Junior Developer
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Crafting digital experiences by exploring and blending creativity with technical skills.            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <ArrowDownToLine className="animate-bounce w-8 h-8" />
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-8">About Me</h2>
            <p className="text-xl text-muted-foreground mb-6">
            Based in Ankara, I'm a junior front-end developer passionate about crafting accessible, engaging web apps that users truly enjoy. My experience includes building dynamic interfaces, ensuring accessibility, and integrating RESTful APIs. I'm always eager to blend creativity with clean, minimal code to deliver memorable user experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-16 text-center"
          >
            Skills
          </motion.h2>
          <Skills />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-accent">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>

        <Swiper
           slidesPerView={1.8} // Ana slide'ın sol ve sağında diğer projeler görünsün
           spaceBetween={50}
           centeredSlides={true} // Ortalamayı aktif et
          autoplay={{
            delay: 3000, // 3 saniyede bir otomatik geçiş
            disableOnInteraction: false, // Kullanıcı müdahale etse bile autoplay devam eder
          }}
          grabCursor={true} // Mouse ile sürükleme desteği
          loop={true} // Sonsuz döngü
          modules={[Autoplay]}
          className="mySwiper"
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <div className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="px-3 py-1 bg-accent rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-primary hover:underline"
                    >
                      GitHub
                    </a>
                    <a 
                      href={project.liveDemo} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-primary hover:underline"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>

      {/* Contact Section */}
            <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
          <p className="text-lg mb-8 text-muted-foreground">
            I'm currently looking for new opportunities. Whether you have a
            question or just want to say hi, I'll try my best to get back to
            you!
          </p>
          <a
            href="mailto:your.email@example.com"
            className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
          >
            Say Hello
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t">
        <div className="max-w-7xl mx-auto text-center text-sm text-muted-foreground">
          <p>Designed & Built with ❤️ using Next.js & Tailwind CSS</p>
        </div>
      </footer>
    </main>
  );
}