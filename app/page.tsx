"use client";

import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import Skills from "@/components/Skills";
import Navbar from "@/components/Navbar";
import { navLinks } from "@/data/navLinks";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground relative overflow-x-hidden">
      {/* Mesh Background */}
      <div className="fixed inset-0 mesh-bg pointer-events-none" />

      <Navbar />

      {/* Hero & About Section */}
      <section className="min-h-screen flex items-center relative pt-24 pb-12 md:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Hero Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-left space-y-8"
            >
              <div className="space-y-4">
                <div className="overflow-hidden">
                  <motion.div
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="inline-flex items-center gap-3 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-slate-500 shadow-sm"
                  >
                    <Sparkles className="size-3 text-slate-400" />
                    <span className="text-[10px] font-black uppercase tracking-widest">Product-Driven Developer</span>
                  </motion.div>
                </div>

                <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.1] tracking-tight">
                  Product. Code.<br />
                  <span className="text-slate-800">Test.</span>
                </h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-xl"
                >
                  Building complete digital products; from Flutter apps and frontend architecture
                  to rigorous software testing and idea development.
                </motion.p>
              </div>

              <div className="space-y-6">
                <div className="flex flex-wrap gap-3">
                  {navLinks.map(({ href, Icon }, i) => (
                    <a
                      key={i}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3.5 rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-violet-600 hover:border-violet-300 transition-all shadow-sm"
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/projects"
                    className="inline-flex items-center gap-3 px-10 py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-all hover:-translate-y-0.5 shadow-xl shadow-slate-900/10"
                  >
                    Explore My Work
                    <ArrowRight className="w-5 h-5 px-0" />
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* About Card - Simplified & Stable */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-200 shadow-xl relative overflow-hidden">
                <div className="flex items-start gap-3 md:gap-4 mb-8">
                  <motion.div
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="w-1.5 h-12 md:h-16 bg-slate-900 rounded-full mt-1 origin-top"
                  />
                  <div className="overflow-hidden">
                    <motion.h2
                      initial={{ y: "100%" }}
                      whileInView={{ y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                      className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-none uppercase"
                    >
                      About Me<span className="text-slate-300">.</span>
                    </motion.h2>
                  </div>
                </div>
                <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
                  <p>
                    I'm a product-driven developer based in Ankara, focused on building complete digital products from concept to deployment.
                  </p>
                  <p>
                    My expertise spans Flutter app development, modern frontend architecture with React and Next.js, and rigorous software testing.
                    I don't just write code; I develop ideas into functional, tested products.
                  </p>
                  <p>
                    Looking to collaborate on projects that value end-to-end ownership, clean architecture, and thoughtful product development.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 bg-slate-50/50 border-y border-slate-100 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Skills />
        </div>
      </section>

      {/* Contact Section - Stable Dark Theme */}
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

      {/* Footer */}
      <footer className="py-12 bg-background border-t border-slate-100 text-center">
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} Designed & Built by Basak using Next.js & Tailwind CSS
        </p>
      </footer>
    </main>
  );
}
