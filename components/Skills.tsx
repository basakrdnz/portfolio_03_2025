"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

interface SkillCardProps {
  skillName: string;
  percentage: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ skillName, percentage }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="skill mb-6 md:max-w-4xl"
    >
      <h3 className="font-bold text-xl md:text-2xl mb-2">{skillName}</h3>
      <div className="w-full bg-secondary rounded-full h-3">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="bg-primary h-2.5 rounded-full"
        ></motion.div>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const [showMore, setShowMore] = useState(false);

  const skills = [
    { skillName: "HTML", percentage: 100 },
    { skillName: "CSS", percentage: 90 },
    { skillName: "JavaScript", percentage: 70 },
    { skillName: "React", percentage: 75 },
    { skillName: "Sass", percentage: 70 },
    { skillName: "Tailwind", percentage: 90 },
    { skillName: "Next.js", percentage: 70 },
    { skillName: "ASP.Net MVC", percentage: 60 },
    { skillName: "RestFull API", percentage: 50 },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4">
      <div className="grid flex-wrap gap-6">
        {skills.slice(0, showMore ? skills.length : 4).map((skill, index) => (
          <SkillCard
            key={index}
            skillName={skill.skillName}
            percentage={skill.percentage}
          />
        ))}
      </div>

      <div className="text-center mt-8">
        <button
          onClick={() => setShowMore(!showMore)}
          className="bg-primary text-primary-foreground font-medium px-6 py-2 rounded-full hover:opacity-90 transition duration-300"
        >
          {showMore ? "Show Less" : "Show More"}
        </button>
      </div>
    </div>
  );
};

export default Skills;