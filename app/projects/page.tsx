"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Mail, Sparkles, X, Maximize2, Zap, ZoomIn, ZoomOut, Move, RotateCcw } from "lucide-react";
import Navbar from "@/components/Navbar";

const projectDetails = [
  {
    id: 4,
    title: "COUNTSIP",
    status: "Beta Testing",
    techStack: ["Flutter 3.x", "Dart 3.x", "Riverpod 3", "Firebase", "AdMob", "Google Maps", "fl_charts"],
    projectUrl: "#",
    codeUrl: "#",
    testFlightUrl: "https://testflight.apple.com/join/bS5bDBHX",
    images: ["/projectimg/countsip1.png", "/projectimg/countsip2.png"],
    diagrams: [
      { url: "/projectimg/Architecture%20Diagram.png", label: "Architecture Overview" },
      { url: "/projectimg/CountSip%20Data%20Model.png", label: "NoSQL Data Model" },
      { url: "/projectimg/Drink%20Tracker%20App%20Architecture.png", label: "Full App Schema" }
    ],
    challenge: "Developing a non-clinical, social-first drink tracking app that occupies the gap between medical tools and reckless games. Challenges included real-time fuzzy search optimization, complex BAC estimation using the Watson Formula, and ensuring strict App Store compliance for alcohol-related social content.",
    solution: "Architected a high-performance Flutter application leveraging Riverpod for state management and Firebase as a unified BaaS. Implemented a custom Alcohol Point System (APS) to gamify the experience, fuzzy search with Levenshtein similarity for discoverability, and a robust social graph.",
    keyFeatures: [
      "Smart Fuzzy Search (Levenshtein similarity)",
      "Watson Formula BAC Estimation algorithm",
      "Gamified APS (Alcohol Point System) scoring",
      "Social Feed with 'Şerefe' (Cheers) reactions",
      "Memory Archive with photo & venue tagging",
      "12+ Achievement Badges (Milestone system)",
      "Cross-platform Sync with Firebase serverless",
      "Privacy-first social graph & blocking controls"
    ],
    learnings: [
      "Advanced state management with Riverpod 3",
      "Optimizing complex UI with 150ms search debounce",
      "Implementing biometrics-aware medical formulas",
      "Relational data architecture in Firestore NoSQL",
      "iOS App Store compliance & App Check security"
    ],
    architecture: "Enterprise-grade Flutter architecture using Riverpod for reactive state management. Dedicated layers for data repositories (Firebase), business logic, and UI. Integrated Google Maps for venue tagging and fl_charts for personalized health analytics."
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
    solution: "Built a performant React SPA with Vite for fast development and optimized builds. Implemented comprehensive SEO strategy including meta tags, structured data, keyword optimization, and performance tuning.",
    keyFeatures: [
      "Responsive design across all devices",
      "Menu categorization and display",
      "Campaign sections with dynamic content",
      "Instagram integration",
      "Location and contact information",
      "SEO optimization with structured data",
      "Performance optimization (95+ Lighthouse score)"
    ],
    learnings: [
      "Vite's build optimization and HMR",
      "TypeScript in production React apps",
      "Tailwind CSS utility-first approach",
      "SEO best practices and implementation",
      "Structured data (Schema.org) markup",
      "Local SEO techniques for business visibility"
    ],
    architecture: "Single Page Application with component-based architecture. Vite handles bundling and optimization, while React manages component state and rendering."
  },
  {
    id: 2,
    title: "NOVA ESKRIM WEBSITE",
    techStack: ["React", "Vite"],
    projectUrl: "https://www.novaeskrim.com",
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
      "Performance considerations for content-heavy sites"
    ],
    architecture: "Modular React application with component-based content sections. Designed for easy content updates and future feature expansion."
  },
];

const ImageModal = ({ isOpen, onClose, imageUrl, label }: { isOpen: boolean, onClose: () => void, imageUrl: string, label: string }) => {
  const [scale, setScale] = React.useState(1);
  const [offset, setOffset] = React.useState({ x: 0, y: 0 });

  React.useEffect(() => {
    if (isOpen) {
      setScale(1);
      setOffset({ x: 0, y: 0 });
    }
  }, [isOpen, imageUrl]);

  const handleZoom = (delta: number) => {
    setScale(prev => Math.min(Math.max(prev + delta, 0.5), 10));
  };

  const handleWheel = (e: React.WheelEvent) => {
    if (e.deltaY < 0) handleZoom(0.2);
    else handleZoom(-0.2);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           exit={{ opacity: 0 }}
           style={{ zIndex: 100000 }}
           onWheel={handleWheel}
           className="fixed inset-0 bg-black flex items-center justify-center overflow-hidden touch-none"
        >
          {/* Top Bar with Info & Controls */}
          <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black/80 to-transparent z-[100002] flex items-center justify-between px-6 md:px-12">
            <div className="flex flex-col gap-1">
              <h4 className="text-white text-xs font-black uppercase tracking-[0.3em]">{label}</h4>
              <div className="flex items-center gap-3 text-[9px] text-white/40 font-bold">
                 <Move className="w-3 h-3" /> DRAG TO PAN • SCROLL TO ZOOM
              </div>
            </div>

            <div className="flex items-center gap-2 md:gap-4">
              <div className="flex items-center gap-1 bg-white/10 rounded-full border border-white/10 p-1">
                <button onClick={(e) => { e.stopPropagation(); handleZoom(-0.5); }} className="p-3 text-white/50 hover:text-white"><ZoomOut className="w-5 h-5" /></button>
                <button onClick={(e) => { e.stopPropagation(); setScale(1); setOffset({ x: 0, y: 0 }); }} className="px-4 font-black text-[10px] text-white min-w-[60px]">{Math.round(scale * 100)}%</button>
                <button onClick={(e) => { e.stopPropagation(); handleZoom(0.5); }} className="p-3 text-white/50 hover:text-white"><ZoomIn className="w-5 h-5" /></button>
              </div>
              <button onClick={onClose} className="p-4 bg-white text-black rounded-full hover:bg-slate-200 transition-all"><X className="w-6 h-6" /></button>
            </div>
          </div>

          <div 
            className="w-full h-full flex items-center justify-center cursor-move"
            onClick={(e) => { if(e.target === e.currentTarget) onClose(); }}
            onDoubleClick={() => { setScale(1); setOffset({ x: 0, y: 0 }); }}
          >
            <motion.div
              drag
              dragMomentum={false}
              style={{ x: offset.x, y: offset.y, scale }}
              onDragEnd={(_, info) => {
                setOffset(prev => ({ 
                  x: prev.x + info.offset.x, 
                  y: prev.y + info.offset.y 
                }));
              }}
              className="relative"
            >
              <img src={imageUrl} alt={label} draggable={false} className="max-w-[90vw] max-h-[85vh] object-contain shadow-2xl rounded-sm ring-1 ring-white/10" />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const ProjectCard = ({ project, index, isLast }: { project: any, index: number, isLast: boolean }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const [selectedImage, setSelectedImage] = React.useState<{ url: string, label: string } | null>(null);

  React.useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [selectedImage]);

  return (
    <>
      <ImageModal isOpen={!!selectedImage} onClose={() => setSelectedImage(null)} imageUrl={selectedImage?.url || ""} label={selectedImage?.label || ""} />
      
      <motion.article
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="w-full"
      >
        <div className="space-y-6 mb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 text-left">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">{project.title}</h2>
                {project.status && (
                  <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-[10px] font-black uppercase tracking-widest border border-amber-200 animate-pulse">
                    {project.status}
                  </span>
                )}
              </div>
              <div className="flex flex-wrap gap-2 text-left">
                {project.techStack.map((tech: string) => (
                  <span key={tech} className="px-4 py-1.5 bg-white text-slate-600 rounded-full text-xs font-bold border border-slate-200 shadow-sm cursor-default hover:bg-slate-50 hover:border-slate-400 transition-colors">{tech}</span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-2 md:gap-4">
              {project.testFlightUrl && (
                <a href={project.testFlightUrl} target="_blank" rel="noopener noreferrer" className="flex-1 inline-flex items-center justify-center gap-3 px-8 py-4 bg-slate-100 border border-slate-200 text-slate-900 rounded-2xl font-bold shadow-sm hover:bg-white hover:border-slate-900 transition-all hover:-translate-y-1 text-sm md:text-base whitespace-nowrap"><Zap className="w-5 h-5 fill-slate-900" />Try on TestFlight</a>
              )}
              {project.projectUrl !== "#" && (
                <a href={project.projectUrl} target="_blank" rel="noopener noreferrer" className="flex-1 inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-xl md:rounded-2xl font-bold hover:bg-slate-800 transition-all hover:-translate-y-1 text-sm md:text-base"><ExternalLink className="w-5 h-5" />Live Site</a>
              )}
              {project.codeUrl !== "#" && (
                <a href={project.codeUrl} target="_blank" rel="noopener noreferrer" className="flex-1 inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-900 border-2 border-slate-200 rounded-xl md:rounded-2xl font-bold hover:bg-slate-50 hover:border-slate-900 transition-all hover:-translate-y-1 shadow-md text-sm md:text-base"><Github className="w-5 h-5" />Source Code</a>
              )}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start text-left">
          <div className="lg:col-span-12 xl:col-span-7 space-y-12">
            <div className="space-y-8">
              {project.images.map((img: string, imgIndex: number) => (
                <div key={imgIndex} className="rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-white relative group cursor-zoom-in" onClick={() => setSelectedImage({ url: img, label: `${project.title} Screenshot` })}>
                  <img src={img} alt="Screenshot" className="w-full h-auto" />
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="p-4 bg-white/90 backdrop-blur-md rounded-full shadow-2xl"><Maximize2 className="w-6 h-6 text-slate-900" /></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <section className="space-y-4">
                <h3 className="text-xl font-bold text-slate-900 flex items-center gap-3">
                  <div className="w-1.5 h-6 bg-slate-400 rounded-full" />Challenge
                </h3>
                <p className="text-slate-600 text-lg leading-relaxed">{project.challenge}</p>
              </section>
              <section className="space-y-4">
                <h3 className="text-xl font-bold text-slate-900 flex items-center gap-3">
                  <div className="w-1.5 h-6 bg-slate-400 rounded-full" />Learnings
                </h3>
                <div className="space-y-2">
                  {project.learnings.map((l: string, i: number) => (
                    <div key={i} className="flex gap-2 text-slate-500 text-sm font-semibold">
                      <span className="text-slate-300">→</span>{l}
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>

          <div className="lg:col-span-12 xl:col-span-5 space-y-12 h-full">
            <div className={`${isExpanded ? 'block' : 'hidden md:block'} space-y-12`}>
               <section className="space-y-4">
                 <h3 className="text-xl font-bold text-slate-900 flex items-center gap-3">
                   <div className="w-1.5 h-6 bg-slate-900 rounded-full" />The Solution
                 </h3>
                 <p className="text-slate-600 text-lg md:text-xl leading-relaxed font-medium">{project.solution}</p>
               </section>

               <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm hover:border-slate-900 transition-all duration-300">
                 <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                   <div className="w-1.5 h-6 bg-slate-400 rounded-full" />Key Features
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

               {project.diagrams && (
                 <div className="p-8 md:p-10 rounded-[2.5rem] bg-[#0f172a] text-white space-y-8 shadow-[0_30px_60px_rgba(15,23,42,0.4)] border border-slate-800 relative overflow-hidden">
                   {/* Blueprint Grid Pattern */}
                   <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
                   
                   <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
                     <div className="space-y-1">
                       <h3 className="text-sm font-black uppercase tracking-[0.3em] text-blue-100">Engineering Blueprints</h3>
                       <div className="flex items-center gap-2 text-[10px] text-blue-300/60 font-bold uppercase tracking-widest">
                         <Sparkles className="w-3 h-3" /> Technical Schematics
                       </div>
                     </div>
                   </div>

                   <div className="relative z-10 grid grid-cols-1 gap-3">
                     {project.diagrams.map((diagram: any, idx: number) => (
                       <button
                         key={idx}
                         onClick={() => setSelectedImage({ url: diagram.url, label: diagram.label })}
                         className="group flex items-center gap-5 p-4 bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/10 rounded-2xl transition-all text-left"
                       >
                         <div className="w-20 h-14 md:w-24 md:h-16 bg-slate-900/50 rounded-xl overflow-hidden border border-white/10 shrink-0 relative">
                           <img src={diagram.url} alt="" className="w-full h-full object-cover opacity-40 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110" />
                           <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
                             <Maximize2 className="w-4 h-4 text-white" />
                           </div>
                         </div>
                         <div className="flex-1">
                           <p className="text-[11px] md:text-sm font-black uppercase tracking-widest text-white mb-1">{diagram.label}</p>
                           <p className="text-[9px] font-bold text-blue-300/40 uppercase tracking-tighter">Click to inspect architecture</p>
                         </div>
                         <Maximize2 className="w-5 h-5 text-white/10 group-hover:text-white transition-colors hidden md:block" />
                       </button>
                     ))}
                   </div>
                 </div>
               )}

               <div className="pt-6 border-t border-slate-100">
                 <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3 italic">Architectural Insight</h3>
                 <p className="text-slate-500 text-[11px] leading-relaxed italic">{project.architecture}</p>
               </div>
            </div>

            <button onClick={() => setIsExpanded(!isExpanded)} className="md:hidden w-full mt-6 py-4 bg-slate-50 text-slate-900 rounded-2xl font-bold border border-slate-400 flex items-center justify-center gap-2">
              {isExpanded ? "Show Less" : "Read Full Story"}
              <span className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>↓</span>
            </button>
          </div>
        </div>
        {!isLast && <div className="py-24" />}
      </motion.article>
    </>
  );
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <section className="pt-40 pb-24 relative overflow-hidden text-left">
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
            <div className="flex items-center gap-3 text-slate-400">
              <div className="w-12 h-px bg-slate-200" />
              <span className="text-[11px] font-black uppercase tracking-widest">Work Gallery</span>
            </div>
            <div className="flex flex-col md:flex-row md:items-end gap-12">
              <div className="flex gap-4">
                <div className="w-2 h-24 bg-slate-900 rounded-full mt-2" />
                <h1 className="text-6xl font-black text-slate-900 uppercase tracking-tighter">Projects<span className="text-slate-300">.</span></h1>
              </div>
              <p className="text-xl text-slate-500 max-w-xl font-medium">Focusing on <span className="text-slate-900 font-bold">product readiness</span> and technical excellence across cross-platform mobile and web ecosystems.</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="pb-32">
        <div className="max-w-7xl mx-auto px-8">
          {projectDetails.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} isLast={i === projectDetails.length - 1} />
          ))}
        </div>
      </section>

      <section id="contact" className="py-32 bg-slate-900 text-left">
        <div className="max-w-7xl mx-auto px-8 relative overflow-hidden">
          <div className="space-y-12 relative z-10">
            <div className="flex items-start gap-4">
              <div className="w-2 h-24 bg-white rounded-full mt-2" />
              <h2 className="text-6xl font-black text-white">Contact<span className="text-slate-400">.</span></h2>
            </div>
            <a href="mailto:basak.karadeniz0@gmail.com" className="inline-flex items-center gap-4 px-12 py-6 bg-white text-black rounded-2xl font-black text-2xl hover:bg-slate-50 transition-all hover:-translate-y-1">
              <Mail className="w-6 h-6" /> Send Email
            </a>
          </div>
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2" />
        </div>
      </section>

      <footer className="py-12 border-t border-slate-100 text-center text-slate-500 text-sm">
        © {new Date().getFullYear()} Designed & Built by Basak using Next.js & Tailwind CSS
      </footer>
    </main>
  );
}
