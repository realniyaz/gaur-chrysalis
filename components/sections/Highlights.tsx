"use client";

import React from "react";

export default function Highlights() {
  // Pulling exact data points from your authorized project reference sheet
  const highlightItems = [
    "Spread over 10.5 acres of prime land",
    "Features 10 modern residential towers",
    "Over 50 lifestyle-focused amenities",
    "Located just 12 minutes from Film City",
    "Only 15 minutes to Jewar International Airport",
    "Smart township planning & premium connectivity",
    "A new benchmark in luxury apartments in Sector 22D",
    "Spacious Gaur flats in Sector 22D – 3 & 4 BHK options",
  ];

  return (
    <section id="highlights" className="w-full bg-[#f4f2ee] py-16 md:py-24 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-2 mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#4a3621]">
            Project Highlights
          </h2>
          <p className="text-sm md:text-base font-semibold uppercase tracking-wider text-gray-600">
            At Sector 22D, Yamuna Expressway, Greater Noida
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14 items-center">
          
          {/* Left Media Asset Side */}
          <div className="lg:col-span-6 w-full group">
            <div className="relative overflow-hidden rounded-[2rem] border-2 border-[#dfc7a1]/40 p-2 bg-white shadow-xl transition-all duration-500 hover:shadow-2xl">
              <div className="relative overflow-hidden rounded-[1.75rem] aspect-[4/3] w-full bg-gray-100">
                <img
                  src="/banner1.png" // Put your custom public folder image name here
                  alt="Gaur Chrysalis Luxury Lifestyle Amenities"
                  className="h-full w-full object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-[1.03]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Right Checklist Items Side */}
          <div className="lg:col-span-6 w-full flex flex-col justify-center">
            <div className="divide-y divide-gray-300/80">
              {highlightItems.map((item, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-4 py-4 first:pt-0 last:pb-0 group transition-colors duration-200"
                >
                  {/* Premium Micro-Styled Custom Double Checkmark */}
                  <div className="flex items-center tracking-tighter text-[#1c1c1c] font-black text-sm select-none flex-shrink-0">
                    <span className="transform group-hover:translate-x-0.5 transition-transform duration-200">✓</span>
                    <span className="transform -ml-1.5 group-hover:translate-x-1 transition-transform duration-200 text-amber-700">✓</span>
                  </div>
                  
                  {/* Highlight Copy */}
                  <span className="text-sm sm:text-base font-semibold text-gray-800 tracking-wide leading-tight">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}