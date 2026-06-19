"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation"; // 👈 Imported Next.js App Router Hook
import { Download, X, Loader2 } from "lucide-react";

interface FormDataState {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function Overview() {
  const router = useRouter(); // 👈 Initialized client router container
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // 👈 Added loading state
  const [formData, setFormData] = useState<FormDataState>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const galleryImages = [
    { src: "/aerial.jpeg", alt: "Gaur Chrysalis Aerial View" },
    { src: "/banner2.png", alt: "Luxury Swimming Pool & Deck" },
    { src: "/tower.jpeg", alt: "Premium Tower Architecture" },
    { src: "/sapce.jpeg", alt: "Elegant Living Space Interior" },
  ];

  const highlights = [
    "50+ world-class lifestyle amenities",
    "Spread across 12 acres of prime land",
    "Excellent connectivity to Yamuna Expressway",
    "Spacious layouts with contemporary interiors",
    "Approx. 15 minutes from Jewar International Airport",
    "Lush green landscapes & open spaces",
  ];

  // 🚀 LIVE POST OPERATION UPGRADE
  const handleModalSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: `+91${formData.phone}`,
          message: formData.message || "Brochure requested from Overview Section modal",
          context: "Overview Brochure Download Request",
        }),
      });

      if (response.ok) {
        setIsModalOpen(false); // Close modal overlay window seamlessly
        router.push("/thank-you"); // 🚀 Native App Router redirection to trigger conversions uniformly
      } else {
        alert("Something went wrong. Please try connecting via call or WhatsApp.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Network connectivity issue. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const openFormModal = () => {
    setFormData({ name: "", email: "", phone: "", message: "" });
    setIsModalOpen(true);
  };

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
                green spaces and world-class infrastructure. Spread across approximately 12 acres, this
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

            {/* Integrated Brochure CTA Button Toggled to Modern Form Popup */}
            <div className="pt-4 w-full sm:w-auto">
              <button
                onClick={openFormModal}
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-full bg-[#dfc7a1] px-7 py-3.5 text-xs font-bold uppercase tracking-widest text-gray-950 shadow-md transition-all duration-300 hover:bg-[#ebd5b2] hover:scale-105 active:scale-[0.98]"
              >
                <Download className="h-4 w-4 stroke-[2.5]" />
                Download Brochure
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

      {/* =========================================================================
          UNIFIED BROCHURE MODAL WINDOW (CLEAN HERO MATCHING STRUCTURE)
          ========================================================================= */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-md bg-black/70 transition-opacity duration-300 animate-fade-in">
          <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 flex flex-col p-6 sm:p-8 space-y-6">
            
            {/* Modal Header Panel */}
            <div className="flex items-center justify-between border-b border-gray-100 pb-4">
              <h3 className="text-lg font-bold text-gray-900 tracking-tight">
                Get More Details Enquire Now
              </h3>
              <button 
                onClick={() => setIsModalOpen(false)}
                disabled={isLoading}
                className="p-1 rounded-md text-gray-400 hover:text-gray-900 hover:bg-gray-100 transition-colors focus:outline-none disabled:opacity-50"
                aria-label="Close form window"
              >
                <X className="h-5 w-5 stroke-[2.5]" />
              </button>
            </div>

            <form onSubmit={handleModalSubmit} className="space-y-4">
              {/* Name Input Box */}
              <div className="flex flex-col space-y-1">
                <input
                  type="text"
                  required
                  disabled={isLoading}
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="Enter Name"
                  className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-sm font-medium text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all disabled:bg-gray-50"
                />
              </div>

              {/* Email Input Box */}
              <div className="flex flex-col space-y-1">
                <input
                  type="email"
                  required
                  disabled={isLoading}
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  placeholder="Enter Email"
                  className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-sm font-medium text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all disabled:bg-gray-50"
                />
              </div>

              {/* Contact Phone Input Box with Integrated ISD Extension */}
              <div className="flex flex-col space-y-1">
                <div className="relative flex items-center border border-gray-300 rounded-xl bg-white focus-within:ring-2 focus-within:ring-gray-900 focus-within:border-transparent transition-all">
                  <span className="flex items-center gap-1 text-sm text-gray-500 font-bold pl-4 pr-2 select-none border-r border-gray-200">
                    <span className="inline-block w-4 h-2.5 bg-gradient-to-b from-[#FF9933] via-[#FFFFFF] to-[#128807] rounded-sm opacity-90" />
                    +91
                  </span>
                  <input
                    type="tel"
                    required
                    pattern="[0-9]{10}"
                    disabled={isLoading}
                    value={formData.phone}
                    onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    placeholder="Enter Number"
                    className="w-full bg-transparent px-3 py-3 text-sm font-medium text-gray-900 placeholder-gray-500 focus:outline-none disabled:bg-gray-50"
                  />
                </div>
              </div>

              {/* Action Submit Banner Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-black py-3.5 text-sm font-bold tracking-wide text-white shadow-md hover:bg-gray-900 transition-colors duration-200 mt-2 disabled:bg-gray-700"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <span>Submit Now</span>
                )}
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}