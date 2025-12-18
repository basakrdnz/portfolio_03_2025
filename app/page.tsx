"use client";

import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Terminal,
  BookOpen,
  ArrowRight,
} from "lucide-react";
import Skills from "@/components/Skills";
import FloatingImages from "@/components/FloatingImages";
import Navbar from "@/components/Navbar";
import { navLinks } from "@/data/navLinks";
import Link from "next/link";

export default function Home() {

  return (
    <main className="min-h-screen bg-background text-foreground overflow-hidden">


      <FloatingImages />

      <Navbar />

      {/* hero & about */}
      <section className="min-h-screen flex items-center relative py-20">
        {/* Subtle background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-600/5"></div>
        
        {/* Grid pattern */}
        <div
          className="absolute inset-0 bg-grid-pattern opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
            backgroundSize: "4rem 4rem",
          }}
        />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* hero */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-center lg:text-left space-y-5"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="inline-block px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium"
              >
                Front-end Developer
              </motion.div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                  Experimental
                </span>
                <br />
                <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                  Developer
                </span>
              </h1>
              
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl"
              >
                Crafting beautiful, functional web experiences with modern technologies and creative solutions.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-wrap gap-4 justify-center lg:justify-start pt-6"
              >
                {navLinks.map(({ href, Icon }, i) => (
                  <a
                    key={i}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-card/50 backdrop-blur-sm border border-border/50 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 hover:scale-110"
                  >
                    <Icon className="size-5" />
                  </a>
                ))}
              </motion.div>
            </motion.div>

            {/* about */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center lg:text-left space-y-6"
            >
              <div className="inline-block">
                <h2 className="text-3xl md:text-4xl font-bold mb-2">About Me</h2>
                <div className="h-1 w-20 bg-gradient-to-r from-primary to-purple-600 rounded-full"></div>
              </div>
              
              <div className="text-base md:text-lg text-muted-foreground space-y-4 leading-relaxed">
                <p>
                  I'm a front-end developer based in Ankara, passionate about creating modern, user-focused web interfaces. Currently working on strengthening my software testing skills while building scalable front-end solutions.
                </p>
                <p>
                  I'm always learning new technologies and best practices. Whether it's advanced front-end patterns, testing methodologies, or UI/UX optimization, I'm eager to explore and apply what I learn.
                </p>
                <p>
                  Looking to collaborate on projects that prioritize clean architecture and accessibility. Always open to discussing frontend development, CSS strategies, and efficient workflows.
                </p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="pt-4"
              >
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
                >
                  View Projects
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* skills */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Skills />
        </div>
      </section>



      {/* contact */}
      <section id="contact" className="py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
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
      <footer className="py-8 border-t">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center text-sm text-muted-foreground">
          <p>Designed & Built with ❤️ using Next.js & Tailwind CSS</p>
        </div>
      </footer>
    </main>
  );
}
