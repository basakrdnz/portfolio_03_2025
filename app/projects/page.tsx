"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Mail, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";

const projectDetails = [
  {
    id: 4,
    title: "COUNTSIP",
    status: "Coming to App Store",
    techStack: ["Flutter", "Firebase", "Riverpod", "AdMob"],
    projectUrl: "#",
    codeUrl: "#",
    images: ["/projectimg/coutsipportf.png"],
    challenge: "Developing a gamified social platform for tracking drink habits that is engaging, fun, and cloud-synchronized across multiple devices while maintaining App Store compliance",
    solution: "Built a robust Flutter application using Riverpod for clean state management and Firebase for a seamless BaaS experience. Implemented a competitive leaderboard system and real-time social feed",
    keyFeatures: [
      "Gamified point system for drink types",
      "Real-time friend activity tracking",
      "Weekly & Monthly social leaderboards",
      "Cloud-first data synchronization",
      "iOS & Android cross-platform support",
      "AdMob monetization integration"
    ],
    learnings: [
      "Advanced state management with Riverpod",
      "Complex relational data design in Firestore",
      "Cross-platform performance optimization",
      "Store compliance for alcohol-related apps"
    ],
    architecture: "Flutter frontend with Riverpod for reactive state management. Firebase handles Auth, Firestore, and Storage. Designed with a clean, iOS-inspired minimalist UI."
  },
  {
    id: 3,
    title: "AI RERESUME",
    techStack: ["React Router 7", "Puter", "Claude AI"],
    projectUrl: "https://ai-reresume.vercel.app",
    codeUrl: "https://github.com/basakrdnz/ai-reresume",
    images: [
      "/projectimg/reresumecv.png",
      "/projectimg/reresumecv2.png"
    ],
    challenge: "Building a full-stack application without traditional backend infrastructure",
    solution: "Leveraged Puter platform for file management, KV storage, and AI integration, allowing rapid development without server setup",
    keyFeatures: [
      "PDF CV upload and parsing",
      "AI-powered feedback analysis using Claude",
      "ATS compatibility scoring",
      "Category-based evaluation system",
      "PDF report generation client-side"
    ],
    learnings: [
      "React Router 7's full-stack capabilities and server-side rendering",
      "Puter platform for backend-as-a-service",
      "Client-side PDF generation with jsPDF",
      "State management with Zustand for complex workflows",
      "AI integration patterns and prompt engineering"
    ],
    architecture: "Client-side heavy architecture with Puter handling file storage and AI API calls. Zustand manages application state, while React Router 7 handles routing and data loading."
  },
  {
    id: 1,
    title: "CRUMBLE WEBSITE",
    techStack: ["React", "TypeScript", "Vite"],
    projectUrl: "https://www.crumbleofficial.com",
    codeUrl: "https://github.com/basakrdnz/crumble_web_react",
    images: ["/projectimg/crumblecv.png"],
    challenge: "Creating a modern, responsive website for a local business with multiple content sections and achieving top search rankings",
    solution: "Built a performant React SPA with Vite for fast development and optimized builds. Implemented comprehensive SEO strategy including meta tags, structured data, keyword optimization, and performance tuning. Achieved 95+ Lighthouse score and top rankings for target keywords",
    keyFeatures: [
      "Responsive design across all devices",
      "Menu categorization and display",
      "Campaign sections with dynamic content",
      "Instagram integration",
      "Location and contact information",
      "SEO optimization with meta tags and structured data",
      "Keyword targeting for local search",
      "Performance optimization (95+ Lighthouse score)"
    ],
    learnings: [
      "Vite's build optimization and HMR",
      "TypeScript in production React apps",
      "Tailwind CSS utility-first approach",
      "Component composition patterns",
      "Performance optimization techniques",
      "SEO best practices and implementation",
      "Keyword research and optimization strategies",
      "Structured data (Schema.org) markup",
      "Meta tag optimization for search engines",
      "Local SEO techniques for business visibility"
    ],
    architecture: "Single Page Application with component-based architecture. Vite handles bundling and optimization, while React manages component state and rendering. SEO implemented through meta tags, structured data, and semantic HTML structure."
  },
  {
    id: 2,
    title: "NOVA ESKRIM WEBSITE",
    techStack: ["React", "Vite"],
    projectUrl: "https://nova-eskrim-react.vercel.app",
    codeUrl: "https://github.com/basakrdnz/nova_eskrim_react",
    images: ["/projectimg/nova_web_img.png"],
    challenge: "Building an information-rich website for a sports club with dynamic content and scheduling",
    solution: "Developed a modular React application with reusable components for different content types. Focused on clean data structure and easy content management",
    keyFeatures: [
      "Club information and history",
      "Training schedule management",
      "Achievement showcase",
      "Fencing rules and regulations",
      "Live match tracking integration"
    ],
    learnings: [
      "Component reusability and composition",
      "Data structure design for content management",
      "Responsive layout strategies",
      "Performance considerations for content-heavy sites",
      "Iterative development and feature addition"
    ],
    architecture: "Modular React application with component-based content sections. Designed for easy content updates and future feature expansion."
  },
];

const ProjectCard = ({ project, index, isLast }: { project: any, index: number, isLast: boolean }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="max-w-6xl mx-auto"
    >
      {/* 1. Project Header - Full Width Top */}
      <div className="space-y-6 mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight">
                {project.title}
              </h2>
              {project.status && (
                <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-[11px] font-black uppercase tracking-widest border border-amber-400 shadow-sm animate-pulse">
                  {project.status}
                </span>
              )}
            </div>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech: string) => (
                <span
                  key={tech}
                  className="px-4 py-1.5 bg-white text-slate-600 rounded-full text-xs font-bold border border-slate-400 shadow-sm hover:border-slate-900 hover:bg-slate-50/80 transition-all duration-300 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-row gap-2 md:gap-4">
            {project.projectUrl !== "#" && (
              <a
                href={project.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-3 md:px-8 md:py-4 bg-slate-900 text-white rounded-xl md:rounded-2xl font-bold shadow-2xl hover:bg-slate-800 transition-all hover:-translate-y-1 text-[11px] md:text-base whitespace-nowrap"
              >
                <ExternalLink className="w-3 h-3 md:w-5 md:h-5" />
                Live Site
              </a>
            )}
            {project.codeUrl !== "#" && (
              <a
                href={project.codeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-3 md:px-8 md:py-4 bg-white text-slate-900 border-2 border-slate-200 rounded-xl md:rounded-2xl font-bold hover:bg-slate-50 hover:border-slate-900 transition-all hover:-translate-y-1 shadow-md text-[11px] md:text-base whitespace-nowrap"
              >
                <Github className="w-3 h-3 md:w-5 md:h-5" />
                Source Code
              </a>
            )}
            {project.projectUrl === "#" && project.codeUrl === "#" && (
              <div className="px-6 py-3 bg-slate-50 text-slate-400 rounded-xl font-bold border border-slate-400 flex items-center gap-2 cursor-default text-[11px] md:text-sm shadow-xl shadow-slate-200/60 hover:bg-white hover:text-slate-900 hover:border-slate-900 transition-all duration-300 group">
                <Sparkles className="w-4 h-4 group-hover:scale-110 transition-transform" />
                In Development
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 2. Project Body Grid - Distributing Details into 2 Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">

        {/* Left Column (span 7): Visuals + Challenge + Learnings */}
        <div className="lg:col-span-7 space-y-12">
          <div className="space-y-6">
            {project.images.map((img: string, imgIndex: number) => (
              <motion.div
                key={imgIndex}
                whileHover={{ scale: 1.01 }}
                className="rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-white"
              >
                <img
                  src={img}
                  alt={`${project.title} screenshot ${imgIndex + 1}`}
                  className="w-full h-auto object-cover"
                />
              </motion.div>
            ))}
          </div>

          {/* This part visible on mobile always - Now side by side on small screens too */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 pt-6">
            <section className="space-y-3">
              <h3 className="text-lg md:text-2xl font-bold text-slate-900 flex items-center gap-2 md:gap-3">
                <div className="w-1 md:w-1.5 h-6 md:h-8 bg-slate-300 rounded-full" />
                Challenge
              </h3>
              <p className="text-slate-600 text-[11px] md:text-lg leading-relaxed">{project.challenge}</p>
            </section>

            {/* Always visible on both mobile and desktop */}
            <section className="space-y-3">
              <h3 className="text-sm md:text-lg font-bold text-slate-900 flex items-center gap-2 md:gap-3">
                <div className="w-0.5 md:w-1 h-5 md:h-6 bg-slate-300 rounded-full" />
                Learnings
              </h3>
              <div className="grid grid-cols-1 gap-2">
                {project.learnings.map((learning: string, idx: number) => (
                  <div key={idx} className="flex items-start gap-2 text-slate-500 text-[10px] md:text-sm font-semibold leading-tight">
                    <span className="text-slate-300 mt-0.5">→</span>
                    {learning}
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>

        {/* Right Column (span 5): Solution + Features */}
        <div className="lg:col-span-5 relative">
          <div className={`${isExpanded ? 'block' : 'hidden lg:block'} space-y-12`}>
            {/* Removed redundant Key Learnings from here */}
            <section className="space-y-4">
              <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                <div className="w-1.5 h-8 bg-slate-900 rounded-full" />
                The Solution
              </h3>
              <p className="text-slate-600 text-base md:text-xl leading-relaxed font-medium">{project.solution}</p>
            </section>

            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-400 shadow-sm hover:border-slate-900 transition-all duration-300">
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <div className="w-1.5 h-6 bg-slate-400 rounded-full" />
                Key Features
              </h3>
              <ul className="space-y-4">
                {project.keyFeatures.map((feature: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-4 text-slate-600 font-medium">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6 border-t border-slate-100">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Architectural Approach</h3>
              <p className="text-slate-500 text-xs leading-relaxed italic">{project.architecture}</p>
            </div>
          </div>

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="lg:hidden w-full mt-6 py-4 bg-slate-50 text-slate-900 rounded-2xl font-bold border border-slate-400 flex items-center justify-center gap-2 hover:bg-white hover:border-slate-900 transition-all shadow-xl shadow-slate-200/60"
          >
            {isExpanded ? "Show Less" : "Read Full Story"}
            <span className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>↓</span>
          </button>
        </div>
      </div>

      {!isLast && (
        <div className="py-20" />
      )}
    </motion.article>
  );
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      <section className="pt-40 pb-24 relative overflow-hidden">
        {/* Decorative Background Element */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-slate-100/50 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-0"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-slate-400">
                <div className="w-12 h-px bg-slate-200" />
                <span className="text-[11px] font-black uppercase tracking-[0.3em]">Work Gallery</span>
              </div>

              <div className="flex flex-col md:flex-row md:items-end gap-6 md:gap-12">
                <div className="flex items-start gap-4">
                  {/* Vertical Bar with entrance animation */}
                  <motion.div
                    initial={{ scaleY: 0, opacity: 0 }}
                    animate={{ scaleY: 1, opacity: 1 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="w-2 h-16 md:h-24 bg-slate-900 rounded-full mt-2 origin-top"
                  />

                  {/* Title with "Emerging from behind" mask effect */}
                  <div className="overflow-hidden">
                    <motion.h1
                      initial={{ y: "100%" }}
                      animate={{ y: 0 }}
                      transition={{
                        duration: 1,
                        ease: [0.16, 1, 0.3, 1],
                        delay: 0.1
                      }}
                      className="text-6xl md:text-8xl font-black text-slate-900 tracking-tight leading-none uppercase"
                    >
                      PROJECTS<span className="text-slate-300">.</span>
                    </motion.h1>
                  </div>
                </div>

                <p className="text-xl text-slate-500 max-w-xl leading-relaxed font-medium pb-1">
                  From initial <span className="text-slate-900 font-bold">concept</span> to rigorous testing; a collection of
                  <span className="text-slate-900 font-bold"> complete digital products</span> built with a
                  <span className="text-slate-900 font-bold"> product-driven mindset</span>.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="pt-20 pb-12 md:pt-32 md:pb-20 relative overflow-hidden bg-slate-50/50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="space-y-0">
            {projectDetails.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                isLast={index === projectDetails.length - 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section - Sync with Main Page */}
      <section id="contact" className="py-32 bg-slate-900 relative overflow-hidden text-left">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-slate-500">
                <div className="w-12 h-px bg-slate-700" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em]">Collaboration</span>
              </div>

              <div className="flex flex-col md:flex-row md:items-end gap-6 md:gap-12">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-16 md:h-24 bg-white rounded-full mt-2" />
                  <h2 className="text-6xl md:text-8xl font-black text-white tracking-tight leading-none">
                    CONTACT<span className="text-slate-400">.</span>
                  </h2>
                </div>

                <p className="text-xl text-slate-400 max-w-xl leading-relaxed font-medium pb-1">
                  I'm currently open to <span className="text-white">new opportunities</span> and
                  interesting projects. Drop me a line and let's
                  <span className="text-white"> discuss</span> how I can help.
                </p>
              </div>
            </div>
          </motion.div>

          <div className="pt-8">
            <a
              href="mailto:basak.karadeniz0@gmail.com"
              className="inline-flex items-center gap-3 px-10 py-5 bg-white text-slate-900 rounded-2xl font-black text-xl hover:bg-slate-50 transition-all hover:-translate-y-1 shadow-2xl"
            >
              <Mail className="w-6 h-6" />
              Send an Email
            </a>
          </div>
        </div>

        {/* Subtle Decorative Background */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-slate-500 rounded-full blur-[120px]" />
        </div>
      </section>

      {/* Footer - Sync with Main Page */}
      <footer className="py-12 bg-background border-t border-slate-100 text-center relative z-10">
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} Designed & Built by Basak using Next.js & Tailwind CSS
        </p>
      </footer>
    </main>
  );
}
