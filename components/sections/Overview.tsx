"use client";

import React from "react";
import { Download } from "lucide-react";

export default function Overview() {
  // Array of your 4 custom public images for the grid gallery
  const galleryImages = [
    { src: "/aerial.jpeg", alt: "Gaur Chrysalis Aerial View" },
    { src: "/banner2.png", alt: "Luxury Swimming Pool & Deck" },
    { src: "/tower.jpeg", alt: "Premium Tower Architecture" },
    { src: "/sapce.jpeg", alt: "Elegant Living Space Interior" },
  ];

  const highlights = [
    "50+ world-class lifestyle amenities",
    "Spread across 10.5 acres of prime land",
    "Excellent connectivity to Yamuna Expressway",
    "Spacious layouts with contemporary interiors",
    "Approx. 15 minutes from Jewar International Airport",
    "Lush green landscapes & open spaces",
  ];

  return (
    <section id="overview" className="w-full bg-white py-16 md:py-24 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Content Side */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            <div className="space-y-2">
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">
                Gaur Chrysalis
              </h2>
              <p className="text-sm md:text-base font-semibold uppercase tracking-wider text-amber-700">
                At Sector 22D, Yamuna Expressway, Greater Noida
              </p>
            </div>

            <div className="text-gray-600 text-sm md:text-base leading-relaxed space-y-4 font-normal text-justify">
              <p>
                Located in the rapidly growing Sector 22D along the Yamuna Expressway, Gaur Yamuna
                City offers thoughtfully designed 3 & 4 BHK luxury residences surrounded by expansive
                green spaces and world-class infrastructure. Spread across approximately 10.5 acres, this
                premium development features modern high-rise towers, elegant architecture, and over
                50 lifestyle amenities crafted for contemporary family living.
              </p>
              <p>
                Strategically positioned just minutes away from Film City and Jewar International Airport, the project ensures
                seamless connectivity and exceptional future growth potential. Combining smart township
                planning with premium lifestyle features, this landmark address is set to become a new
                benchmark for luxury living on the Yamuna Expressway.
              </p>
            </div>

            {/* Structured Vector Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full pt-2">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-start gap-2.5 group">
                  <span className="text-amber-600 font-bold text-base mt-0.5 select-none transition-transform group-hover:translate-x-0.5">
                    ✓
                  </span>
                  <span className="text-sm font-semibold text-gray-800 tracking-wide">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Brochure CTA Button */}
            <div className="pt-4 w-full sm:w-auto">
              <button
                onClick={() => console.log("Downloading Brochure...")}
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-full bg-[#dfc7a1] px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-gray-900 shadow-md transition-all duration-300 hover:bg-[#d1b48c] hover:scale-[1.01] active:scale-[0.99]"
              >
                <Download className="h-4 w-4 stroke-[2.5]" />
                Brochure
              </button>
            </div>
          </div>

          {/* Right Gallery Grid Side */}
          <div className="lg:col-span-5 w-full">
            <div className="grid grid-cols-2 gap-3 p-2 bg-gradient-to-tr from-amber-50/40 to-transparent border border-gray-100 rounded-3xl shadow-sm">
              {galleryImages.map((img, index) => (
                <div
                  key={index}
                  className={`relative overflow-hidden rounded-2xl bg-gray-100 shadow-sm group aspect-[4/3] ${
                    index === 0 ? "rounded-tl-[2rem]" : ""
                  } ${index === 1 ? "rounded-tr-[2rem]" : ""} ${
                    index === 2 ? "rounded-bl-[2rem]" : ""
                  } ${index === 3 ? "rounded-br-[2rem]" : ""}`}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}