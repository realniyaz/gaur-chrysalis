"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // 👈 Imported Next.js App Router Hook
import { MapPin, Download, X } from "lucide-react";

interface FormDataState {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function Hero() {
  const router = useRouter(); // 👈 Initialized client router container
  const backgroundImages = [
    "/1banner.jpg",
    "/2banner.jpg",
    "/3banner.jpg"
  ];

  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [isInlineLoading, setIsInlineLoading] = useState(false);
  const [isBrochureModalOpen, setIsBrochureModalOpen] = useState(false);
  const [isBrochureLoading, setIsBrochureLoading] = useState(false);

  const [inlineFormData, setInlineFormData] = useState<FormDataState>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [brochureFormData, setBrochureFormData] = useState<FormDataState>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    if (backgroundImages.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentImgIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  // Handle Desktop Sidebar & Mobile Inline form submissions
  const handleInlineSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsInlineLoading(true);

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: inlineFormData.name,
          email: inlineFormData.email,
          phone: `+91${inlineFormData.phone}`,
          message: inlineFormData.message || "No custom message provided.",
          context: "Hero Quick Enquiry Form",
        }),
      });

      if (response.ok) {
        // 🚀 Native Router Push Redirect replaces local state handles completely
        router.push("/thank-you");
      } else {
        alert("Something went wrong. Please try connecting via call or WhatsApp.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Network connectivity issue. Please try again.");
    } finally {
      setIsInlineLoading(false);
    }
  };

  // Handle Pop-up Brochure form submissions
  const handleBrochureSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsBrochureLoading(true);

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: brochureFormData.name,
          email: brochureFormData.email,
          phone: `+91${brochureFormData.phone}`,
          message: brochureFormData.message || "Brochure asset request payload",
          context: "Hero Brochure Download Modal Request",
        }),
      });

      if (response.ok) {
        setIsBrochureModalOpen(false); // Close operational overlay container frame
        router.push("/thank-you");    // 🚀 Execute redirect to the script page layout
      } else {
        alert("Something went wrong. Please try connecting via call or WhatsApp.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Network connectivity issue. Please try again.");
    } finally {
      setIsBrochureLoading(false);
    }
  };

  const openBrochureModal = () => {
    setBrochureFormData({ name: "", email: "", phone: "", message: "" });
    setIsBrochureModalOpen(true);
  };

  return (
    <section id="home" className="w-full bg-[#0a0a0a] overflow-hidden flex flex-col relative">
      
      {/* =========================================================================
          DESKTOP VIEW: ORIGINAL LOOK UNTOUCHED & PERSISTED (lg:flex)
          ========================================================================= */}
      <div className="hidden lg:flex relative w-full min-h-[calc(100vh-80px)] items-center justify-center py-20 z-0">
        <div className="absolute inset-0 z-0">
          {backgroundImages.map((src, index) => (
            <div
              key={src}
              className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1500 ease-in-out ${
                index === currentImgIndex ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
              style={{ backgroundImage: `url('${src}')` }}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/80 z-20" />
        </div>

        <div className="relative z-30 mx-auto max-w-7xl w-full px-8 grid grid-cols-12 gap-12 items-center">
          <div className="col-span-7 flex flex-col items-start space-y-5 text-white">
            <h1 className="text-6xl font-extrabold tracking-tight drop-shadow-md">Gaur Chrysalis</h1>
            <div className="inline-flex items-center gap-1.5 text-lg font-medium text-gray-200 drop-shadow-sm">
              <MapPin className="h-4 w-4 text-[#dfc7a1] flex-shrink-0 fill-[#dfc7a1]/20" />
              <span>At Sector 22D, Yamuna Expressway, Greater Noida</span>
            </div>
            <div className="inline-block bg-amber-50/10 border border-amber-200/20 px-4 py-2 rounded">
              <p className="text-base font-bold text-[#dfc7a1] tracking-wide uppercase">3 & 4 BHK Ultra Luxury Apartments</p>
            </div>
            <div className="space-y-3.5 pt-2 max-w-lg w-full">
              {["Total Land Parcel 12 Acre", "No. of Towers: 7 Towers", "Grand Clubhouse spread over 75,000 sq.ft.", "50+ World-Class Amenities"].map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <span className="text-[#dfc7a1] font-extrabold text-sm">≫</span>
                  <p className="text-base font-medium text-gray-100 tracking-wide drop-shadow-sm">{feature}</p>
                </div>
              ))}
            </div>
            <div className="pt-4 flex items-center gap-4">
              <div className="bg-[#dfc7a1] px-6 py-3.5 rounded shadow-xl inline-flex items-center justify-center">
                <span className="text-lg font-extrabold text-gray-900 tracking-wide">₹ Starts From: 8,499/- Sq.Ft.*</span>
              </div>
              <button onClick={openBrochureModal} className="inline-flex items-center gap-2 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 px-5 py-3.5 text-xs font-bold uppercase tracking-widest text-white hover:bg-white/20 transition-all">
                <Download className="h-4 w-4" /> Download Brochure
              </button>
            </div>
          </div>

          <div className="col-span-5 w-full max-w-md ml-auto">
            <div className="backdrop-blur-xl bg-black/40 border border-white/10 rounded-2xl p-8 shadow-2xl flex flex-col space-y-6">
              <div className="text-center"><h3 className="text-lg font-bold uppercase tracking-wider text-white">Quick Enquiry!</h3><div className="h-0.5 w-12 bg-[#dfc7a1] mx-auto mt-2 rounded-full" /></div>
              <form onSubmit={handleInlineSubmit} className="space-y-5">
                <input type="text" required placeholder="Name" value={inlineFormData.name} onChange={(e) => setInlineFormData(prev => ({ ...prev, name: e.target.value }))} className="w-full bg-transparent border-b border-gray-400 py-2.5 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-[#dfc7a1]" />
                <input type="email" required placeholder="Email Address" value={inlineFormData.email} onChange={(e) => setInlineFormData(prev => ({ ...prev, email: e.target.value }))} className="w-full bg-transparent border-b border-gray-400 py-2.5 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-[#dfc7a1]" />
                <div className="flex items-center border-b border-gray-400 focus-within:border-[#dfc7a1] text-white"><span className="text-sm text-gray-300 pr-1.5 select-none">+91</span><input type="tel" required pattern="[0-9]{10}" placeholder="Contact Number" value={inlineFormData.phone} onChange={(e) => setInlineFormData(prev => ({ ...prev, phone: e.target.value }))} className="w-full bg-transparent py-2.5 text-sm focus:outline-none" /></div>
                <textarea rows={2} placeholder="Message" value={inlineFormData.message} onChange={(e) => setInlineFormData(prev => ({ ...prev, message: e.target.value }))} className="w-full bg-transparent border-b border-gray-400 py-2.5 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-[#dfc7a1] resize-none" />
                <button type="submit" disabled={isInlineLoading} className="w-full rounded-full bg-[#dfc7a1] py-3.5 text-sm font-bold uppercase text-gray-900 shadow-lg hover:bg-[#d1b48c] transition-all disabled:opacity-50">
                  {isInlineLoading ? "Sending..." : "Submit"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          MOBILE VIEW: SPECIFICALLY RE-ORDERED PORTRAIT STACK (block lg:hidden)
          ========================================================================= */}
      <div className="block lg:hidden w-full bg-white flex flex-col z-0">
        
        {/* MOBILE PART 1: Top Sliding Cinematic Media Block */}
        <div className="relative w-full h-[40vh] min-h-[300px] bg-[#0a0a0a]">
          {backgroundImages.map((src, index) => (
            <div
              key={src}
              className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
                index === currentImgIndex ? "opacity-100" : "opacity-0"
              }`}
              style={{ backgroundImage: `url('${src}')` }}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-black/40 z-20" />
          
          {/* Mobile Center-Aligned Price Badge */}
          <div className="absolute bottom-4 left-0 right-0 z-30 flex justify-center px-4">
            <span className="bg-[#4a3621] text-[#dfc7a1] text-[11px] font-black uppercase tracking-widest px-4 py-2 rounded-xl shadow-md border border-[#dfc7a1]/20 text-center">
              ₹ Starts From: 8,499/- Sq.Ft.*
            </span>
          </div>
        </div>

        {/* MOBILE PART 2: About Project Copy Block & Download Trigger */}
        <div className="px-4 pt-6 pb-2 space-y-4 text-center max-w-xl mx-auto w-full">
          <div className="space-y-1.5">
            <h2 className="text-3xl font-black tracking-tight text-gray-950">Gaur Chrysalis</h2>
            <p className="text-xs font-bold text-amber-700 uppercase tracking-widest bg-amber-50 px-3 py-1 rounded-md inline-block">
              3 & 4 BHK Luxury Apartments
            </p>
          </div>
          
          <div className="inline-flex items-center gap-1 text-xs font-bold text-gray-500">
            <MapPin className="h-3.5 w-3.5 text-amber-700 flex-shrink-0" />
            <span>At Sector 22D, Yamuna Expressway</span>
          </div>

          <div className="pt-1">
            <button
              onClick={openBrochureModal}
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#4a3621] to-[#5a4229] px-6 py-4 text-xs font-bold uppercase tracking-widest text-[#dfc7a1] shadow-md transition-transform active:scale-[0.98]"
            >
              <Download className="h-4 w-4 stroke-[2.5]" />
              Download Brochure
            </button>
          </div>
        </div>

        {/* MOBILE PART 3: Quick Enquiry Card Component Block */}
        <div className="px-4 pb-8 pt-4 w-full max-w-md mx-auto">
          <div className="bg-gray-50/70 border border-gray-100 rounded-3xl p-6 shadow-sm flex flex-col space-y-5">
            <div className="text-center">
              <h3 className="text-xs font-bold uppercase tracking-widest text-gray-900">Quick Enquiry!</h3>
              <div className="h-0.5 w-10 bg-amber-700 mx-auto mt-1.5 rounded-full" />
            </div>

            <form onSubmit={handleInlineSubmit} className="space-y-4">
              <input type="text" required placeholder="Name" value={inlineFormData.name} onChange={(e) => setInlineFormData(prev => ({ ...prev, name: e.target.value }))} className="w-full bg-transparent border-b border-gray-200 py-2.5 text-xs font-semibold text-gray-900 focus:outline-none focus:border-amber-700" />
              <input type="email" required placeholder="Email Address" value={inlineFormData.email} onChange={(e) => setInlineFormData(prev => ({ ...prev, email: e.target.value }))} className="w-full bg-transparent border-b border-gray-200 py-2.5 text-xs font-semibold text-gray-900 focus:outline-none focus:border-amber-700" />
              <div className="flex items-center border-b border-gray-200 focus-within:border-amber-700"><span className="text-xs text-gray-400 font-bold pr-1.5 select-none">+91</span><input type="tel" required pattern="[0-9]{10}" placeholder="Contact Number" value={inlineFormData.phone} onChange={(e) => setInlineFormData(prev => ({ ...prev, phone: e.target.value }))} className="w-full bg-transparent py-2.5 text-xs font-semibold text-gray-900 focus:outline-none" /></div>
              <textarea rows={1} placeholder="Message" value={inlineFormData.message} onChange={(e) => setInlineFormData(prev => ({ ...prev, message: e.target.value }))} className="w-full bg-transparent border-b border-gray-200 py-2.5 text-xs font-semibold text-gray-900 focus:outline-none focus:border-amber-700 resize-none" />
              <button type="submit" disabled={isInlineLoading} className="w-full rounded-xl bg-gradient-to-r from-[#3a2a1a] to-[#5a4229] py-3.5 text-xs font-bold uppercase tracking-widest text-[#dfc7a1] shadow-md mt-1 disabled:opacity-50">
                {isInlineLoading ? "Sending..." : "Submit Form"}
              </button>
            </form>
          </div>
        </div>

      </div>

      {/* =========================================================================
          BROCHURE MODAL WINDOW (CLEAN COMPACT DESIGN MATRICES)
          ========================================================================= */}
      {isBrochureModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-md bg-black/70 transition-opacity duration-300 animate-fade-in">
          <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 flex flex-col p-6 sm:p-8 space-y-6">
            
            <div className="flex items-center justify-between border-b border-gray-100 pb-4">
              <h3 className="text-lg font-bold text-gray-900 tracking-tight">
                Get More Details Enquire Now
              </h3>
              <button 
                onClick={() => setIsBrochureModalOpen(false)}
                className="p-1 rounded-md text-gray-400 hover:text-gray-900 hover:bg-gray-100 transition-colors focus:outline-none"
                aria-label="Close form window"
              >
                <X className="h-5 w-5 stroke-[2.5]" />
              </button>
            </div>

            <form onSubmit={handleBrochureSubmit} className="space-y-4">
              <div className="flex flex-col space-y-1">
                <input
                  type="text"
                  required
                  value={brochureFormData.name}
                  onChange={(e) => setBrochureFormData(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="Enter Name"
                  className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-sm font-medium text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                />
              </div>

              <div className="flex flex-col space-y-1">
                <input
                  type="email"
                  required
                  value={brochureFormData.email}
                  onChange={(e) => setBrochureFormData(prev => ({ ...prev, email: e.target.value }))}
                  placeholder="Enter Email"
                  className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-sm font-medium text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                />
              </div>

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
                    value={brochureFormData.phone}
                    onChange={(e) => setBrochureFormData(prev => ({ ...prev, phone: e.target.value }))}
                    placeholder="Enter Number"
                    className="w-full bg-transparent px-3 py-3 text-sm font-medium text-gray-900 placeholder-gray-500 focus:outline-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isBrochureLoading}
                className="w-full rounded-xl bg-black py-3.5 text-sm font-bold tracking-wide text-white shadow-md hover:bg-gray-900 transition-colors duration-200 mt-2 disabled:opacity-50"
              >
                {isBrochureLoading ? "Sending..." : "Submit Now"}
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}