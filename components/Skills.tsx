"use client";

import React from "react";
import { motion } from "framer-motion";

import { FaPhp, FaLaravel, FaDatabase, FaHtml5, FaCss3Alt, FaJs, FaReact, FaVuejs, FaBootstrap } from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiNextdotjs, SiSass } from "react-icons/si";

const skillGroups = [
  {
    category: "Backend",
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
    skills: [
      { name: "Tailwind CSS", level: 90, icon: <SiTailwindcss className="text-sky-400 dark:text-sky-300" /> },
      { name: "SASS", level: 50, icon: <SiSass className="text-pink-500 dark:text-pink-300" /> },
      { name: "Bootstrap", level: 20, icon: <FaBootstrap className="text-purple-600 dark:text-purple-300" /> },
    ],
  },
];

const SkillBar = ({ name, level, icon }: { name: string; level: number; icon?: React.ReactNode }) => {
  return (
    <div className="w-full mb-4">
      <div className="flex justify-between mb-1">
        <span className="flex items-center gap-2 text-sm font-medium text-foreground/90">{icon && <span className="text-base">{icon}</span>} {name}</span>
        <span className="text-sm font-medium text-foreground/50">{level}%</span>
      </div>
      <div className="w-full bg-muted rounded-full h-3">
        <motion.div
          className="bg-gradient-to-r from-primary to-purple-600 h-3 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section className="pt-10">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-16 text-center text-foreground"
        >
          Skills
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {skillGroups.map((group, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.02 }}
              className="bg-card p-6 rounded-xl shadow-lg border border-border"
            >
              <h3 className="text-xl font-bold text-foreground mb-6 border-b pb-2">
                {group.category}
              </h3>
              {group.skills.map((skill, i) => (
                <SkillBar key={i} name={skill.name} level={skill.level} icon={skill.icon} />
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
