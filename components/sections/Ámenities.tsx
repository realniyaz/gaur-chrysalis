"use client";

import React, { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

interface AmenityItem {
  id: number;
  name: string;
  src: string;
}

export default function Amenities() {
  const [activeImageIdx, setActiveImageIdx] = useState<number | null>(null);

  const amenitiesData: AmenityItem[] = [
    { id: 0, name: "Meditation Zone", src: "/1.png" },
    { id: 1, name: "Sculpture Garden", src: "/2.png" },
    { id: 2, name: "Amphitheatre", src: "/3.png" },
    { id: 3, name: "Kids Play Area", src: "/Screenshot 2026-06-07 164037.png" },
    { id: 4, name: "Basketball Court", src: "/Screenshot 2026-06-07 164047.png" },
    { id: 5, name: "Badminton Court", src: "/Screenshot 2026-06-07 164052.png" },
    { id: 6, name: "Cricket Pitch", src: "/Screenshot 2026-06-07 164100.png" },
    { id: 7, name: "Skating Rink", src: "/Screenshot 2026-06-07 164112.png" },
    { id: 8, name: "Reflexology Park", src: "/Screenshot 2026-06-07 164120.png" },
    { id: 9, name: "Swimming Pool", src: "/Screenshot 2026-06-07 164127.png" },
    { id: 10, name: "Gymnasium", src: "/Screenshot 2026-06-07 164131.png" },
    { id: 11, name: "Library", src: "/Screenshot 2026-06-07 164141.png" },
  ];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeImageIdx === null) return;
      if (e.key === "Escape") setActiveImageIdx(null);
      if (e.key === "ArrowRight") handleNextSlide();
      if (e.key === "ArrowLeft") handlePrevSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeImageIdx]);

  const handleNextSlide = () => {
    if (activeImageIdx === null) return;
    setActiveImageIdx((prev) => (prev !== null && prev === amenitiesData.length - 1 ? 0 : prev! + 1));
  };

  const handlePrevSlide = () => {
    if (activeImageIdx === null) return;
    setActiveImageIdx((prev) => (prev !== null && prev === 0 ? amenitiesData.length - 1 : prev! - 1));
  };

  return (
    <section id="amenities" className="w-full bg-[#fafafa] py-24 md:py-32 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16 md:mb-24">
          <span className="text-xs font-bold text-amber-700 uppercase tracking-[0.25em]">
            World-Class Lifestyle
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-gray-900">
            Premium Amenities
          </h2>
          <div className="h-0.5 w-16 bg-[#dfc7a1] mx-auto rounded-full" />
        </div>

        {/* Dynamic Gallery Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
          {amenitiesData.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setActiveImageIdx(idx)}
              className="group bg-white rounded-3xl p-3 shadow-[0_20px_40px_rgba(0,0,0,0.02)] border border-gray-100 hover:border-[#dfc7a1]/60 cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(0,0,0,0.08)] flex flex-col relative"
            >
              {/* Media Container Block */}
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gray-50">
                <img
                  src={item.src}
                  alt={item.name}
                  className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Custom Interactive Hover Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                  <div className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white transform scale-90 group-hover:scale-100 transition-transform duration-300 border border-white/20">
                    <Maximize2 className="h-4 w-4" />
                  </div>
                </div>
              </div>

              {/* Label Layout Panel */}
              <div className="mt-4 mb-1 text-center">
                <div className="bg-gradient-to-r from-[#3a2a1a] to-[#5a4229] text-[#dfc7a1] rounded-xl py-3 px-4 shadow-md transition-all duration-300 group-hover:from-[#dfc7a1] group-hover:to-[#ebd5b2] group-hover:text-gray-950 w-full">
                  <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider truncate">
                    {item.name}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cinematic Lightbox Modal Overlay */}
      {activeImageIdx !== null && (
        <div 
          className="fixed inset-0 z-50 flex flex-col items-center justify-center p-4 bg-black/95 backdrop-blur-md animate-fade-in"
          onClick={() => setActiveImageIdx(null)}
        >
          
          {/* Top Modal Controls Header Block */}
          <div className="absolute top-6 left-0 right-0 px-6 sm:px-10 flex justify-between items-center z-10 text-white">
            <span className="text-xs font-bold tracking-widest uppercase text-gray-400 bg-white/5 px-3 py-1.5 rounded-md backdrop-blur-sm">
              Showcase {activeImageIdx + 1} of {amenitiesData.length}
            </span>
            <button
              onClick={() => setActiveImageIdx(null)}
              className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-gray-300 hover:text-white transition-all duration-200"
              aria-label="Close interactive modal"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Core Content Navigation Window */}
          <div 
            className="relative w-full max-w-5xl max-h-[80vh] flex items-center justify-center px-4 sm:px-16 group"
            onClick={(e) => e.stopPropagation()}
          >
            
            {/* Previous Control Button Switcher */}
            <button
              onClick={(e) => { e.stopPropagation(); handlePrevSlide(); }}
              className="absolute left-2 sm:left-4 z-20 p-3 rounded-full bg-black/50 border border-white/10 hover:bg-black/80 text-white transition-all opacity-100 sm:opacity-0 sm:group-hover:opacity-100"
              aria-label="Previous item"
            >
              <ChevronLeft className="h-6 w-6 stroke-[2.5]" />
            </button>

            {/* Core Image Canvas Shell Container */}
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-3xl shadow-2xl bg-black/20 border border-white/5 animate-scale-up">
              <img
                src={amenitiesData[activeImageIdx].src}
                alt={amenitiesData[activeImageIdx].name}
                className="h-full w-full object-contain object-center select-none"
              />
              
              {/* Bottom Fixed Label Banner Tag */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-6 sm:p-8 text-center">
                <h4 className="text-xl sm:text-3xl font-black uppercase tracking-widest text-[#dfc7a1] drop-shadow-md">
                  {amenitiesData[activeImageIdx].name}
                </h4>
              </div>
            </div>

            {/* Next Control Button Switcher */}
            <button
              onClick={(e) => { e.stopPropagation(); handleNextSlide(); }}
              className="absolute right-2 sm:right-4 z-20 p-3 rounded-full bg-black/50 border border-white/10 hover:bg-black/80 text-white transition-all opacity-100 sm:opacity-0 sm:group-hover:opacity-100"
              aria-label="Next item"
            >
              <ChevronRight className="h-6 w-6 stroke-[2.5]" />
            </button>
          </div>

        </div>
      )}
    </section>
  );
}