"use client";

import React, { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight, Expand } from "lucide-react";

interface GalleryItem {
  id: number;
  src: string;
  alt: string;
}

export default function Gallery() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  // Array containing your custom project render images
  const galleryItems: GalleryItem[] = [
    { id: 0, src: "/Screenshot 2026-06-07 170152.png", alt: "Clubhouse and Premium Swimming Pool Complex" },
    { id: 1, src: "/Screenshot 2026-06-07 170200.png", alt: "Private Luxury Balcony Sunset Skyline Experience" },
    { id: 2, src: "/Screenshot 2026-06-07 170214.png", alt: "Iconic Butterfly Architectural Landmark structure" },
    { id: 3, src: "/Screenshot 2026-06-07 170225.png", alt: "Elegant Living and Formal Dining Interior Space" },
    { id: 4, src: "/Screenshot 2026-06-07 170236.png", alt: "Premium Swimming Pool Complex" },
    { id: 5, src: "/banner1.png", alt: "High-Rise Towers Aerial Layout Perspective " },
  ];

  // Global browser event listener handling keypress overrides
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeIdx === null) return;
      if (e.key === "Escape") setActiveIdx(null);
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIdx]);

  const handleNext = () => {
    setActiveIdx((prev) => (prev !== null && prev === galleryItems.length - 1 ? 0 : prev! + 1));
  };

  const handlePrev = () => {
    setActiveIdx((prev) => (prev !== null && prev === 0 ? galleryItems.length - 1 : prev! - 1));
  };

  return (
    <section id="gallery" className="w-full bg-white py-16 md:py-24 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-2 mb-12 md:mb-16">
          <span className="text-xs font-bold text-amber-700 uppercase tracking-[0.25em]">
            A Glimpse of Elegance
          </span>
          <h2 className="text-2xl md:text-4xl font-black tracking-tight text-gray-900">
            Project Gallery
          </h2>
          <p className="text-sm text-gray-500 max-w-xl mx-auto font-medium">
            Explore elegant interiors, expansive open landscapes, and premium lifestyle spaces at Gaur Yamuna City.
          </p>
          <div className="h-0.5 w-12 bg-[#dfc7a1] mx-auto mt-2 rounded-full" />
        </div>

        {/* Modular Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {galleryItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setActiveIdx(idx)}
              className="group bg-white rounded-2xl p-2 border border-gray-100 hover:border-[#dfc7a1]/60 cursor-pointer shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl flex flex-col relative"
            >
              <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden rounded-xl bg-gray-50">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="h-full w-full object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Premium Translucent Hover Matte Overlay Layer */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4">
                  <div className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white transform scale-90 group-hover:scale-100 transition-transform duration-300 border border-white/20 mb-2">
                    <Expand className="h-4 w-4" />
                  </div>
                  <p className="text-white text-[11px] font-bold tracking-wider uppercase text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75 max-w-[85%] truncate">
                    {item.alt}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Overlay Controller Module */}
      {activeIdx !== null && (
        <div 
          className="fixed inset-0 z-50 flex flex-col items-center justify-center p-4 bg-black/95 backdrop-blur-md animate-fade-in"
          onClick={() => setActiveIdx(null)}
        >
          {/* Top Floating Control Row Panel */}
          <div className="absolute top-6 left-0 right-0 px-6 sm:px-10 flex justify-between items-center z-10 text-white">
            <span className="text-[10px] font-bold tracking-widest uppercase text-gray-400 bg-white/5 px-3 py-1.5 rounded-lg backdrop-blur-sm">
              Render Asset {activeIdx + 1} of {galleryItems.length}
            </span>
            <button
              onClick={() => setActiveIdx(null)}
              className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-gray-300 hover:text-white transition-all duration-200"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Core Widescreen Modal Presenter Framework Wrapper */}
          <div 
            className="relative w-full max-w-5xl max-h-[80vh] flex items-center justify-center px-4 sm:px-16"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Prev Image Action Handle */}
            <button
              onClick={(e) => { e.stopPropagation(); handlePrev(); }}
              className="absolute left-2 sm:left-4 z-20 p-2.5 rounded-full bg-black/50 border border-white/10 hover:bg-black/80 text-white transition-all opacity-100 sm:opacity-0 group-hover:opacity-100 sm:hover:scale-105"
            >
              <ChevronLeft className="h-5 w-5 stroke-[2.5]" />
            </button>

            {/* Core Cinematic Image Display Container Layer */}
            <div className="relative aspect-[4/3] sm:aspect-[16/10] w-full overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl bg-black/10 border border-white/5 animate-scale-up">
              <img
                src={galleryItems[activeIdx].src}
                alt={galleryItems[activeIdx].alt}
                className="h-full w-full object-contain object-center select-none"
              />
              {/* Contextual Description Caption bar overlay */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent p-5 sm:p-7 text-center">
                <p className="text-xs sm:text-sm font-semibold tracking-wide text-gray-300 max-w-2xl mx-auto drop-shadow-md">
                  {galleryItems[activeIdx].alt}
                </p>
              </div>
            </div>

            {/* Next Image Action Handle */}
            <button
              onClick={(e) => { e.stopPropagation(); handleNext(); }}
              className="absolute right-2 sm:right-4 z-20 p-2.5 rounded-full bg-black/50 border border-white/10 hover:bg-black/80 text-white transition-all opacity-100 sm:opacity-0 group-hover:opacity-100 sm:hover:scale-105"
            >
              <ChevronRight className="h-5 w-5 stroke-[2.5]" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}