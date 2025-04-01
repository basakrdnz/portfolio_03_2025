"use client";

import { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  imageUrl: string;
  hoverImageUrl: string;
  techStack: string[];
  projectUrl: string;
  codeUrl: string;
}

const ProjectCard = ({ title, imageUrl, hoverImageUrl, techStack, projectUrl, codeUrl }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-card rounded-lg overflow-hidden shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-video">
        <img
          src={isHovered ? hoverImageUrl : imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-all duration-500"
        />
        <div className="absolute inset-0 bg-black/60 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="flex gap-4">
            <a
              href={projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
            >
              <ExternalLink className="w-6 h-6 text-white" />
            </a>
            <a
              href={codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
            >
              <Github className="w-6 h-6 text-white" />
            </a>
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-lg font-bold mb-3">{title}</h3>
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-secondary rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;