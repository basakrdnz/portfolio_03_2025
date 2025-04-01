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
    <div className="fixed bottom-8 right-8 z-50 w-52 h-52">
      <img
        src="/memoji1.png"
        alt="Floating image 1"
        className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-500 ${
          currentImage === 1 ? "opacity-100" : "opacity-0"
        }`}
      />
      <img
        src="/memoji2.png"
        alt="Floating image 2"
        className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-500 ${
          currentImage === 2 ? "opacity-100" : "opacity-0"
        }`}
      />
      <img
        src="/memoji3.png"
        alt="Floating image 3"
        className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-500 ${
          currentImage === 3 ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}