"use client";

import React, { useState, useEffect } from "react";
import { MapPin } from "lucide-react";

interface FormDataState {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function Hero() {
  // Array of images from your public folder for the cinematic background carousel
  const backgroundImages = [ 
    "/banner1.png",  // Add your additional render images here
    "/banner2.png"
  ];

  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [formData, setFormData] = useState<FormDataState>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // Smooth background cinematic rotation effect
  useEffect(() => {
    if (backgroundImages.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentImgIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 7000); // Transitions every 7 seconds

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Enquiry Submitted: ", formData);
  };

  return (
    <section 
      id="home" 
      className="relative min-h-[calc(100vh-80px)] w-full flex items-center justify-center overflow-hidden bg-[#0a0a0a] py-12 md:py-20"
    >
      
      {/* Cinematic Background Wrapper with Image Crossfading */}
      <div className="absolute inset-0 z-0">
        {backgroundImages.map((src, index) => (
          <div
            key={src}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1500 ease-in-out ${
              index === currentImgIndex ? "opacity-100 z-10 animate-pulse-slow" : "opacity-0 z-0"
            }`}
            style={{ backgroundImage: `url('${src}')` }}
          />
        ))}
        {/* Layered premium ambient shadow shielding for ultimate readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/80 z-20 md:bg-gradient-to-b md:from-black/60 md:via-black/20 md:to-black/70" />
      </div>

      {/* Main Container Layout */}
      <div className="relative z-30 mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Side: Property Value Proposition Copy */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-5 text-white">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight drop-shadow-md">
            Gaur Chrysalis
          </h1>
          
          <div className="inline-flex items-center gap-1.5 text-sm sm:text-base md:text-lg font-medium text-gray-200 drop-shadow-sm">
            <MapPin className="h-4 w-4 text-[#dfc7a1] flex-shrink-0 fill-[#dfc7a1]/20" />
            <span>At Sector 22D, Yamuna Expressway, Greater Noida</span>
          </div>

          <div className="inline-block bg-amber-50/10 border border-amber-200/20 px-4 py-2 rounded">
            <p className="text-sm sm:text-base font-bold text-[#dfc7a1] tracking-wide uppercase">
              3 & 4 BHK Ultra Luxury Apartments
            </p>
          </div>

          {/* Quick Features Checklist */}
          <div className="space-y-3.5 pt-2 max-w-lg w-full">
            {[
              "10.5 Acres Of Land",
              "Premium Connectivity",
              "Avail Best Offers & Discounts*",
              "50+ World-Class Amenities"
            ].map((feature, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <span className="text-[#dfc7a1] font-extrabold tracking-tighter text-sm">≫</span>
                <p className="text-sm sm:text-base font-medium text-gray-100 tracking-wide drop-shadow-sm">{feature}</p>
              </div>
            ))}
          </div>

          {/* Pricing Tag */}
          <div className="pt-4">
            <div className="bg-[#dfc7a1] px-6 py-3.5 rounded shadow-xl inline-flex items-center justify-center transform hover:scale-[1.01] transition-transform">
              <span className="text-lg sm:text-xl font-extrabold text-gray-900 tracking-wide">
                ₹ Starts From: 8,499/- Sq.Ft.*
              </span>
            </div>
          </div>
        </div>

        {/* Right Side: Glassmorphism Enquiry Form Container */}
        <div className="lg:col-span-5 w-full max-w-md mx-auto lg:mx-0">
          <div className="backdrop-blur-xl bg-black/40 border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl flex flex-col space-y-6">
            <div className="text-center">
              <h3 className="text-lg font-bold uppercase tracking-wider text-white">
                Quick Enquiry!
              </h3>
              <div className="h-0.5 w-12 bg-[#dfc7a1] mx-auto mt-2 rounded-full" />
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name Input */}
              <div className="relative group">
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="Name"
                  className="w-full bg-transparent border-b border-gray-400 py-2.5 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-[#dfc7a1] transition-colors duration-300"
                />
              </div>

              {/* Email Input */}
              <div className="relative group">
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  placeholder="Email Address"
                  className="w-full bg-transparent border-b border-gray-400 py-2.5 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-[#dfc7a1] transition-colors duration-300"
                />
              </div>

              {/* Contact Number Input */}
              <div className="relative flex items-center border-b border-gray-400 focus-within:border-[#dfc7a1] transition-colors duration-300">
                <div className="flex items-center gap-1.5 pr-2 text-sm text-gray-300 py-2.5 select-none font-medium">
                  <span className="inline-block w-4 h-3 bg-gradient-to-b from-[#FF9933] via-[#FFFFFF] to-[#128807] rounded-sm opacity-90" />
                  <span>+91</span>
                </div>
                <input
                  type="tel"
                  required
                  pattern="[0-9]{10}"
                  value={formData.phone}
                  onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                  placeholder="Contact Number"
                  className="w-full bg-transparent py-2.5 text-sm text-white placeholder-gray-400 focus:outline-none"
                />
              </div>

              {/* Message Textarea */}
              <div className="relative group">
                <textarea
                  rows={2}
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  placeholder="Message"
                  className="w-full bg-transparent border-b border-gray-400 py-2.5 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-[#dfc7a1] resize-none transition-colors duration-300"
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full rounded-full bg-[#dfc7a1] py-3.5 text-sm font-bold uppercase tracking-wider text-gray-900 shadow-lg transition-all duration-300 hover:bg-[#d1b48c] hover:scale-[1.01] active:scale-[0.99] mt-2"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Carousel Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImgIndex(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              index === currentImgIndex ? "bg-white scale-110" : "bg-white/40 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}