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
  X,
  Menu,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Skills from "@/components/Skills";
import FloatingImages from "@/components/FloatingImages";
import { exerciseProjects, realWorldProjects } from "@/data/projects";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Autoplay, Pagination } from "swiper/modules";
import { navLinks } from "@/data/navLinks";

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-background text-foreground overflow-hidden">


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

          {/* Desktop */}
          <div className="hidden md:flex gap-4 items-center">
            {navLinks.map(({ href, Icon }, i) => (
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
                {theme === "dark" ? (
                  <Sun className="size-6" />
                ) : (
                  <Moon className="size-6" />
                )}
              </button>
            )}
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2 rounded hover:bg-muted transition-colors"
            onClick={() => setMenuOpen(true)}
          >
            <Menu className="size-6" />
          </button>
        </div>

        {/* Mobile Drawer */}
        {menuOpen && (
          <div className="fixed top-0 right-0 w-48 h-full bg-background shadow-lg p-6 flex flex-col gap-4 items-end md:hidden z-50">
            <button
              onClick={() => setMenuOpen(false)}
              className="mb-4 p-2 rounded-full hover:bg-muted"
            >
              <X className="size-6" />
            </button>

            {navLinks.map(({ href, Icon }, i) => (
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
          </div>
        )}
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
              Front-end developer passionate about creating beautiful and functional web experiences.
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
              I'm a front-end developer based in Ankara, recently graduated but
              deeply committed to continuous learning and experimentation. I
              believe that in today’s world, lack of knowledge isn’t the issue —
              it's the unwillingness to grow.
              <br />
              <br />
              I thrive on exploring new technologies, turning ideas into
              elegant, accessible interfaces, and adapting quickly to unfamiliar
              challenges. What I may not know today, I’m confident I can learn —
              and apply — tomorrow.
              <br />
              <br />
              Currently, I’m expanding my skill set towards full-stack
              development, aiming to build seamless, end-to-end digital
              experiences that combine function with creativity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* skills */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <Skills />
        </div>
      </section>

      {/* real world projects */}
      <section id="real-world-projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-accent">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Real World Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A collection of my real-world applications, showcasing my skills in
              building functional and visually appealing web solutions.
            </p>
          </motion.div>

          {realWorldProjects.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {realWorldProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  <div className="bg-card/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-border/50 hover:border-border h-full flex flex-col">
                   

                    {/* Project Image */}
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {/* Hover Overlay with Links */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="flex gap-4">
                          <a
                            href={project.projectUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-white font-medium hover:bg-white/30 transition-colors border border-white/30"
                          >
                            Live Demo
                          </a>
                          <a
                            href={project.codeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-white font-medium hover:bg-white/30 transition-colors border border-white/30"
                          >
                            View Code
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Project Content */}
                    <div className="p-8 flex-1 flex flex-col">
                      <div className="mb-4 flex-1">
                        <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        {project.description && (
                          <p className="text-muted-foreground leading-relaxed">
                            {project.description}
                          </p>
                        )}
                      </div>

                      {/* Project Stats */}
                      <div className="flex items-center justify-between pt-4 border-t border-border/50 mt-auto">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                          <span>Active Project</span>
                        </div>
                        <div className="flex gap-3">
                          <a
                            href={project.projectUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:text-primary/80 transition-colors text-sm font-medium"
                          >
                            Demo →
                          </a>
                          <a
                            href={project.codeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:text-primary/80 transition-colors text-sm font-medium"
                          >
                            Code →
                          </a>
                        </div>
                      </div>
                    </div>
                                           {/* Tech Stack Strip */}
                                           {project.techStack && project.techStack.length > 0 && (
                      <div className="relative h-5 bg-gradient-to-r from-black to-purple-500 overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-between px-4">
                          <div className="flex animate-scroll-left group-hover:animate-scroll-left-paused">
                            {project.techStack.map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="px-4 py-1 text-white text-sm font-medium whitespace-nowrap"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                          <div className="flex animate-scroll-left group-hover:animate-scroll-left-paused" style={{ animationDelay: '5s' }}>
                            {project.techStack.map((tech, techIndex) => (
                              <span
                                key={`duplicate-${techIndex}`}
                                className="px-4 py-1 text-white text-sm font-medium whitespace-nowrap"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center py-16"
            >
              <div className="max-w-md mx-auto">
                <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">More Projects Coming Soon</h3>
                <p className="text-muted-foreground">
                  I'm working on some exciting real-world applications. Stay tuned!
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* exercise projects */}
      <section id="exercise-projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Exercise Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Learning-focused projects that demonstrate fundamental concepts and skills
            </p>
          </motion.div>

          <Swiper
            spaceBetween={20}
            centeredSlides={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            grabCursor={true}
            loop={true}
            pagination={{
              el: ".exercise-pagination",
              clickable: true,
              bulletClass: "custom-line",
              bulletActiveClass: "custom-line-active",
            }}
            modules={[Autoplay, Pagination]}
            className="w-full mySwiper"
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 1.2 },
              768: { slidesPerView: 1.5 },
              1024: { slidesPerView: 1.8 },
              1280: { slidesPerView: 2.2 },
            }}
          >
            {exerciseProjects.map((project) => (
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
                          className="px-3 py-1.5 bg-primary/10 text-primary rounded-lg text-sm font-medium border border-primary/20 hover:bg-primary/20 transition-colors"
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
          <div className="exercise-pagination flex justify-center mt-8" />
        </div>
      </section>

      {/* contact */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
          <p className="text-lg mb-8 text-muted-foreground">
            I'm currently looking for new opportunities. Whether you have a
            question or just want to say hi, I'll try my best to get back to
            you!
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
