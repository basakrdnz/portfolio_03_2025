"use client";

import React from "react";
import { motion } from "framer-motion";

import { FaPhp, FaLaravel, FaDatabase, FaHtml5, FaCss3Alt, FaJs, FaReact, FaVuejs, FaBootstrap } from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiNextdotjs, SiSass } from "react-icons/si";

const skillGroups = [
  {
    category: "Backend",
    description: "Server-side technologies and databases",
    color: "from-red-500 to-orange-500",
    skills: [
      { name: "PHP", level: 20, icon: <FaPhp className="text-blue-700 dark:text-blue-300" /> },
      { name: "Laravel", level: 35, icon: <FaLaravel className="text-red-600 dark:text-red-400" /> },
      { name: "MySQL", level: 45, icon: <FaDatabase className="text-emerald-600 dark:text-emerald-400" /> },
      { name: "API Development", level: 35, icon: <span className='text-sm'>🛠️</span> },
      { name: "Microsoft SQL Server", level: 45, icon: <span className='text-sm'>🗄️</span> },
    ],
  },
  {
    category: "Frontend",
    description: "Client-side technologies and frameworks",
    color: "from-blue-500 to-cyan-500",
    skills: [
      { name: "HTML", level: 95, icon: <FaHtml5 className="text-orange-600 dark:text-orange-300" /> },
      { name: "CSS", level: 90, icon: <FaCss3Alt className="text-blue-600 dark:text-blue-300" /> },
      { name: "JavaScript", level: 75, icon: <FaJs className="text-yellow-500 dark:text-yellow-300" /> },
      { name: "TypeScript", level: 65, icon: <SiTypescript className="text-blue-500 dark:text-blue-300" /> },
      { name: "React", level: 80, icon: <FaReact className="text-cyan-500 dark:text-cyan-300" /> },
      { name: "Vue.js", level: 30, icon: <FaVuejs className="text-green-500 dark:text-green-300" /> },
      { name: "Next.js", level: 80, icon: <SiNextdotjs className="text-neutral-800 dark:text-white" /> },
      { name: "Shadcn", level: 70, icon: <span className='text-sm'>🧩</span> },
      { name: "JQuery", level: 50, icon: <span className='text-sm'>📜</span> },
    ],
  },
  {
    category: "Styling",
    description: "Design systems and styling frameworks",
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "Tailwind CSS", level: 90, icon: <SiTailwindcss className="text-sky-400 dark:text-sky-300" /> },
      { name: "SASS", level: 50, icon: <SiSass className="text-pink-500 dark:text-pink-300" /> },
      { name: "Bootstrap", level: 20, icon: <FaBootstrap className="text-purple-600 dark:text-purple-300" /> },
    ],
  },
];

const SkillBar = ({ name, level, icon }: { name: string; level: number; icon?: React.ReactNode }) => {
  return (
    <div className="w-full mb-6">
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center gap-3">
          {icon && <span className="text-lg">{icon}</span>}
          <span className="text-sm font-medium text-foreground/90">{name}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-16 h-2 bg-muted rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-primary to-purple-600 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: `${level}%` }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            />
          </div>
          <span className="text-xs font-bold text-foreground/60 min-w-[2rem]">{level}%</span>
        </div>
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section className="pt-10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            Skills & Technologies
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise across different domains
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillGroups.map((group, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.3, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl"
                   style={{ background: `linear-gradient(135deg, ${group.color.split(' ')[1]}, ${group.color.split(' ')[3]})` }} />
              
              <div className="relative bg-card/50 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-border/50 hover:border-border transition-all duration-300 h-full">
                <div className="mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br mb-4 flex items-center justify-center"
                       style={{ background: `linear-gradient(135deg, ${group.color.split(' ')[1]}, ${group.color.split(' ')[3]})` }}>
                    <span className="text-white font-bold text-lg">{group.category.charAt(0)}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {group.category}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {group.description}
                  </p>
                </div>
                
                <div className="space-y-1">
                  {group.skills.map((skill, i) => (
                    <SkillBar key={i} name={skill.name} level={skill.level} icon={skill.icon} />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
