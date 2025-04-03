"use client";

import { motion } from "framer-motion";
import {
  ArrowDownToLine,
  Github,
  Linkedin,
  Mail,
  Moon,
  Sun,
  Terminal,
  BookOpen,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Skills from "@/components/Skills";
import FloatingImages from "@/components/FloatingImages";
import { projects } from "@/data/projects";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Autoplay } from "swiper/modules";
import type { AutoplayOptions } from "swiper/types";

const autoplayOptions: AutoplayOptions = {
  delay: 3000,
  disableOnInteraction: false,
};

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

  return (
    <main className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* custom cursor */}
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

      {/* navbar */}
      <nav className="fixed w-full z-40 bg-background/80 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <a
            href="#top"
            className="text-2xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent"
          >
            basak.dev
          </a>

          <div className="flex gap-4 items-center">
            {[
              { href: "https://github.com/basakrdnz", Icon: Github },
              { href: "https://www.linkedin.com/in/basakkaradeniz/", Icon: Linkedin },
              { href: "https://medium.com/@basak.karadeniz0", Icon: BookOpen },
              { href: "mailto:basak.karadeniz0@gmail.com", Icon: Mail },
              { href: "#projects", Icon: Terminal },
            ].map(({ href, Icon }, i) => (
              <a
                key={i}
                href={href}
                target={href.startsWith("http") ? "_blank" : "_self"}
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-muted transition-colors"
              >
                <Icon className="size-6" />
              </a>
            ))}

            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-full hover:bg-muted transition-colors"
              >
                {theme === "dark" ? <Sun className="size-6" /> : <Moon className="size-6" />}
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* hero */}
      <section className="h-screen flex items-center justify-center relative">
        <div
          className="absolute inset-0 bg-grid-pattern opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(to right, #4a4a4a 1px, transparent 1px), linear-gradient(to bottom, #4a4a4a 1px, transparent 1px)",
            backgroundSize: "4rem 4rem",
          }}
        />

        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Experimental Developer
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Crafting digital experiences by exploring and blending creativity with technical skills.
            </p>
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

      {/* about */}
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
              I'm a front-end developer based in Ankara, recently graduated but deeply committed to continuous learning and experimentation. I believe that in today’s world, lack of knowledge isn’t the issue — it's the unwillingness to grow.
              <br /><br />
              I thrive on exploring new technologies, turning ideas into elegant, accessible interfaces, and adapting quickly to unfamiliar challenges. What I may not know today, I’m confident I can learn — and apply — tomorrow.
              <br /><br />
              Currently, I’m expanding my skill set towards full-stack development, aiming to build seamless, end-to-end digital experiences that combine function with creativity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* skills */}
      <section className="py-20 bg-secondary">
        <Skills />
      </section>

      {/* projects */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-accent">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Featured Projects
          </h2>

          <Swiper
            slidesPerView={1.8}
            spaceBetween={50}
            centeredSlides={true}
            autoplay={autoplayOptions}
            grabCursor={true}
            loop={true}
            modules={[Autoplay]}
            className="mySwiper"
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id}>
                <div className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <div className="relative w-full h-64 group sm:h-72 md:h-80 lg:h-[22rem] xl:h-[24rem]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
                    />
                    <img
                      src={project.hoverImage}
                      alt={`${project.title} hover`}
                      className="w-full h-full object-cover absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    />
                  </div>

                  <div className="p-6">
                    <h3 className="font-bold text-xl mb-2">{project.title}</h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.techStack.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-accent rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <a
                        href={project.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        GitHub
                      </a>
                      <a
                        href={project.projectUrl}
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

      {/* contact */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
          <p className="text-lg mb-8 text-muted-foreground">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          <a
            href="mailto:basak.karadeniz0@gmail.com"
            className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
          >
            Say Hello!
          </a>
        </div>
      </section>

      {/* footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t">
        <div className="max-w-7xl mx-auto text-center text-sm text-muted-foreground">
          <p>Designed & Built with ❤️ using Next.js & Tailwind CSS</p>
        </div>
      </footer>
    </main>
  );
}