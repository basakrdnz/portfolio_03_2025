"use client";

import { useEffect, useState } from "react";

export default function FloatingImages() {
  const [currentImage, setCurrentImage] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      if (scrollPosition < windowHeight) {
        setCurrentImage(1);
      } else if (scrollPosition < windowHeight * 2) {
        setCurrentImage(2);
      } else {
        setCurrentImage(3);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed bottom-0 right-0 z-50 w-28 h-28 md:w-36 md:h-36 lg:w-44 lg:h-44 pointer-events-none">
      {/* Glassmorphism Circle Background */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-slate-200/30 to-slate-300/20 backdrop-blur-sm border border-slate-300/30 shadow-xl" />

      <div className={`absolute bottom-0 right-0 w-full h-full transition-all duration-700 ease-out transform ${currentImage === 1 ? "translate-y-0 opacity-100 scale-100" : "translate-y-12 opacity-0 scale-95"}`}>
        <img
          src="/memoji1.png"
          alt="Memoji 1"
          className="w-full h-full object-contain object-bottom drop-shadow-2xl relative z-10"
        />
      </div>
      <div className={`absolute bottom-0 right-0 w-full h-full transition-all duration-700 ease-out transform ${currentImage === 2 ? "translate-y-0 opacity-100 scale-100" : "translate-y-12 opacity-0 scale-95"}`}>
        <img
          src="/memoji2.png"
          alt="Memoji 2"
          className="w-full h-full object-contain object-bottom drop-shadow-2xl relative z-10"
        />
      </div>
      <div className={`absolute bottom-0 right-0 w-full h-full transition-all duration-700 ease-out transform ${currentImage === 3 ? "translate-y-0 opacity-100 scale-100" : "translate-y-12 opacity-0 scale-95"}`}>
        <img
          src="/memoji3.png"
          alt="Memoji 3"
          className="w-full h-full object-contain object-bottom drop-shadow-2xl relative z-10"
        />
      </div>
    </div>
  );
}