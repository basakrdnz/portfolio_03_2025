"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiNodedotjs,
  SiExpress,
  SiLaravel,
  SiTailwindcss,
  SiSass,
  SiBootstrap,
  SiVite,
  SiVercel,
  SiFirebase,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiPrisma,
  SiSupabase,
  SiGit,
  SiGithub,
  SiFigma,
  SiAdobe,
  SiCanva,
  SiWordpress,
  SiJquery,
  SiReactrouter,
  SiDotnet,
  SiSelenium,
  SiChartdotjs,
} from "react-icons/si";
import { FaNpm } from "react-icons/fa";

interface TechBadge {
  name: string;
  icon: React.ReactNode;
  color: string;
  category: string;
}

const techStack: TechBadge[] = [
  // Frontend Core
  { name: "JAVASCRIPT", icon: <SiJavascript />, color: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20", category: "Frontend" },
  { name: "TYPESCRIPT", icon: <SiTypescript />, color: "bg-blue-600/10 text-blue-600 border-blue-600/20", category: "Frontend" },
  
  // Frontend Frameworks
  { name: "REACT", icon: <SiReact />, color: "bg-cyan-500/10 text-cyan-500 border-cyan-500/20", category: "Frontend" },
  { name: "REACT ROUTER", icon: <SiReactrouter />, color: "bg-red-500/10 text-red-500 border-red-500/20", category: "Frontend" },
  { name: "NEXT.JS", icon: <SiNextdotjs />, color: "bg-neutral-800/10 text-neutral-800 dark:text-neutral-200 border-neutral-800/20 dark:border-neutral-200/20", category: "Frontend" },
  { name: "VUE.JS", icon: <SiVuedotjs />, color: "bg-green-500/10 text-green-500 border-green-500/20", category: "Frontend" },
  { name: "VITE", icon: <SiVite />, color: "bg-purple-500/10 text-purple-500 border-purple-500/20", category: "Frontend" },
  
  // Styling
  { name: "TAILWIND CSS", icon: <SiTailwindcss />, color: "bg-sky-500/10 text-sky-500 border-sky-500/20", category: "Styling" },
  { name: "SASS", icon: <SiSass />, color: "bg-pink-500/10 text-pink-500 border-pink-500/20", category: "Styling" },
  { name: "BOOTSTRAP", icon: <SiBootstrap />, color: "bg-purple-600/10 text-purple-600 border-purple-600/20", category: "Styling" },
  
  // Backend
  { name: "NODE.JS", icon: <SiNodedotjs />, color: "bg-green-600/10 text-green-600 border-green-600/20", category: "Backend" },
  { name: "EXPRESS.JS", icon: <SiExpress />, color: "bg-neutral-700/10 text-neutral-700 dark:text-neutral-300 border-neutral-700/20", category: "Backend" },
  { name: "LARAVEL", icon: <SiLaravel />, color: "bg-red-600/10 text-red-600 border-red-600/20", category: "Backend" },
  { name: ".NET", icon: <SiDotnet />, color: "bg-purple-700/10 text-purple-700 border-purple-700/20", category: "Backend" },
  
  // Databases
  { name: "MYSQL", icon: <SiMysql />, color: "bg-blue-600/10 text-blue-600 border-blue-600/20", category: "Database" },
  { name: "POSTGRES", icon: <SiPostgresql />, color: "bg-blue-500/10 text-blue-500 border-blue-500/20", category: "Database" },
  { name: "MONGODB", icon: <SiMongodb />, color: "bg-green-500/10 text-green-500 border-green-500/20", category: "Database" },
  { name: "PRISMA", icon: <SiPrisma />, color: "bg-blue-500/10 text-blue-500 border-blue-500/20", category: "Database" },
  { name: "SUPABASE", icon: <SiSupabase />, color: "bg-green-500/10 text-green-500 border-green-500/20", category: "Database" },
  { name: "SQLITE", icon: <span className="text-lg">🗄️</span>, color: "bg-teal-600/10 text-teal-600 border-teal-600/20", category: "Database" },
  { name: "MICROSOFT SQL SERVER", icon: <span className="text-lg">🗄️</span>, color: "bg-red-600/10 text-red-600 border-red-600/20", category: "Database" },
  
  // Tools & Services
  { name: "VERCEL", icon: <SiVercel />, color: "bg-neutral-900/10 text-neutral-900 dark:text-neutral-100 border-neutral-900/20 dark:border-neutral-100/20", category: "Tools" },
  { name: "FIREBASE", icon: <SiFirebase />, color: "bg-orange-500/10 text-orange-500 border-orange-500/20", category: "Tools" },
  { name: "NPM", icon: <FaNpm />, color: "bg-red-600/10 text-red-600 border-red-600/20", category: "Tools" },
  { name: "CHART.JS", icon: <SiChartdotjs />, color: "bg-pink-500/10 text-pink-500 border-pink-500/20", category: "Tools" },
  { name: "WORDPRESS", icon: <SiWordpress />, color: "bg-blue-500/10 text-blue-500 border-blue-500/20", category: "Tools" },
  { name: "JQUERY", icon: <SiJquery />, color: "bg-blue-600/10 text-blue-600 border-blue-600/20", category: "Tools" },
  
  // Design
  { name: "FIGMA", icon: <SiFigma />, color: "bg-orange-500/10 text-orange-500 border-orange-500/20", category: "Design" },
  { name: "ADOBE", icon: <SiAdobe />, color: "bg-red-600/10 text-red-600 border-red-600/20", category: "Design" },
  { name: "CANVA", icon: <SiCanva />, color: "bg-teal-500/10 text-teal-500 border-teal-500/20", category: "Design" },
  { name: "FRAMER", icon: <span className="text-lg font-bold">F</span>, color: "bg-neutral-900/10 text-neutral-900 dark:text-neutral-100 border-neutral-900/20 dark:border-neutral-100/20", category: "Design" },
  
  // Version Control
  { name: "GITHUB", icon: <SiGithub />, color: "bg-neutral-900/10 text-neutral-900 dark:text-neutral-100 border-neutral-900/20 dark:border-neutral-100/20", category: "Version Control" },
  { name: "GIT", icon: <SiGit />, color: "bg-red-600/10 text-red-600 border-red-600/20", category: "Version Control" },
  
  // Testing
  { name: "SELENIUM", icon: <SiSelenium />, color: "bg-green-600/10 text-green-600 border-green-600/20", category: "Testing" },
];

const categories = [
  "Frontend",
  "Styling",
  "Backend",
  "Database",
  "Tools",
  "Design",
  "Version Control",
  "Testing",
];

const Skills = () => {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  return (
    <section className="pt-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Tech Stack</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I work with to build modern, scalable applications
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Category List - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-48 flex-shrink-0"
          >
            <div className="sticky top-32 space-y-2">
              {categories.map((category) => {
                const categoryTechs = techStack.filter((tech) => tech.category === category);
                if (categoryTechs.length === 0) return null;

                return (
                  <button
                    key={category}
                    onMouseEnter={() => setHoveredCategory(category)}
                    onMouseLeave={() => setHoveredCategory(null)}
                    className="w-full text-left px-4 py-3 rounded-lg transition-all duration-300 hover:bg-primary/10 hover:text-primary border border-transparent hover:border-primary/20"
                  >
                    <span className="font-semibold text-sm">{category}</span>
                  </button>
                );
              })}
            </div>
          </motion.div>

          {/* All Skills - Right Side */}
          <div className="flex-1 min-h-[800px]">
            <div className="flex flex-wrap gap-3">
              {techStack.map((tech, idx) => {
                const isHighlighted = hoveredCategory === tech.category;
                const isDimmed = hoveredCategory !== null && hoveredCategory !== tech.category;

                return (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.02 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className={`group transition-all duration-300 ${
                      isHighlighted
                        ? "opacity-100 scale-110 z-10"
                        : isDimmed
                        ? "opacity-30 scale-95"
                        : "opacity-100"
                    }`}
                  >
                    <div
                      className={`
                        ${tech.color}
                        border rounded-lg p-3 flex flex-col items-center justify-center gap-2
                        transition-all duration-300 cursor-default
                        ${isHighlighted ? "shadow-xl border-opacity-100 ring-2 ring-primary/50" : "hover:shadow-lg hover:border-opacity-50"}
                      `}
                    >
                      <div className="text-2xl">{tech.icon}</div>
                      <span className="text-xs font-medium text-center leading-tight">
                        {tech.name}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
