"use client";

import { motion } from "framer-motion";

const skills = [
  {
    category: "Development",
    items: ["Flutter", "Dart", "React", "Next.js", "TypeScript", "React Router 7"]
  },
  {
    category: "Cloud & Backend",
    items: ["Firebase", "PostgreSQL", "Supabase", "Puter", "REST APIs", "Node.js"]
  },
  {
    category: "Testing & QA",
    items: ["Selenium", "Unit Testing", "UI Automation", "Appium", "Lighthouse"]
  },
  {
    category: "Design & Growth",
    items: ["Figma", "AdMob", "Google Analytics", "Riverpod", "SEO Optimization"]
  },
];

const Skills = () => {
  return (
    <section className="py-12 md:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24"
        >
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-slate-400">
              <div className="w-12 h-px bg-slate-200" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em]">Expertise</span>
            </div>

            <div className="flex flex-col md:flex-row md:items-end gap-6 md:gap-12">
              <div className="flex items-start gap-4">
                <div className="w-2 h-16 md:h-20 bg-slate-900 rounded-full mt-2" />
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-none uppercase">
                  Skills<span className="text-slate-300">.</span>
                </h2>
              </div>

              <p className="text-lg text-slate-500 max-w-xl leading-relaxed font-medium pb-1">
                A focused selection of technologies I use to build
                <span className="text-slate-900"> high-performance</span>,
                <span className="text-slate-900"> production-ready</span> products.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {skills.map((skillGroup, i) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="space-y-8"
            >
              <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-900" />
                {skillGroup.category}
              </h3>

              <div className="flex flex-col gap-4">
                {skillGroup.items.map((skill) => (
                  <div key={skill} className="flex items-center gap-4 group">
                    <div className="w-1 h-1 rounded-full bg-slate-200 group-hover:bg-slate-900 transition-colors" />
                    <span className="text-base md:text-lg font-bold text-slate-600 group-hover:text-slate-900 transition-colors">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
