"use client";

import React, { useState, useEffect, useRef } from "react";
import { X, Send, CheckCircle2 } from "lucide-react";

interface Message {
  sender: "user" | "bot";
  text: string;
}

interface FormDataState {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function FloatingActions() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isStickyModalOpen, setIsStickyModalOpen] = useState(false);
  const [isStickySubmitted, setIsStickySubmitted] = useState(false);
  
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "bot",
      text: "Welcome to Gaurs AI Assistant. Select an option below or type a query to explore Gaur Chrysalis instantly.",
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const chatEndRef = useRef<HTMLDivElement>(null);

  const [stickyFormData, setStickyFormData] = useState<FormDataState>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const phoneNumber = "+919910374156";
  const whatsappNumber = "9170420 80055";
  const whatsappMessage = encodeURIComponent(
    "Hi, I am interested in Gaur Chrysalis. Please share the pricing sheet and availability status."
  );

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isChatOpen]);

  const projectKnowledge: Record<string, string> = {
    overview: "Gaur Chrysalis is an ultra-luxury residential enclave situated at Sector 22D, Yamuna Expressway. It features masterfully ventilated 3 & 4 BHK apartments with premium specifications and smart township layouts.",
    pricing: "Our pricing structure starts at an exclusive rate of ₹ 8,499/- Sq.Ft.* for spacious 3 BHK models (Super Area: 1625 Sq. Ft.). Exact pricing metrics for 4 BHK model ((Super Area: 1960 Sq. Ft.)).",
    location: "The project boasts exceptional connectivity matrices: located just 12 minutes from the upcoming Film City and a swift 15 minutes away from the Jewar International Airport, sitting right in the center of upcoming retail zones.",
    amenities: "Residents gain access to over 50 world-class amenities, including a luxury Swimming Pool complex, state-of-the-art Gymnasium, Meditation Zone, Amphitheatre, Reflexology Park, and a curated Sculpture Garden.",
    booking: "Pre-launch bookings are officially open with limited inventory benefits. You can lock in priority allocation slots by using the 'Call Now' floating dialer or sharing your contact metrics through our form panel.",
  };

  const handleOptionSelect = (key: string, label: string) => {
    const userMsg: Message = { sender: "user", text: label };
    const botAnswer: Message = {
      sender: "bot",
      text: projectKnowledge[key] || "I am currently processing details. Please connect directly with our relationship manager using the Call action panel.",
    };
    setMessages((prev) => [...prev, userMsg, botAnswer]);
  };

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const query = inputValue.toLowerCase();
    const userMsg: Message = { sender: "user", text: inputValue };
    
    let botResponseText = "Thank you for your query. To get immediate verified documentation, layout blueprints, or customized configurations for that specific requirement, please tap the 'Call Now' option below to speak directly with our site executive.";

    if (query.includes("price") || query.includes("cost") || query.includes("rate") || query.includes("bhk")) {
      botResponseText = projectKnowledge.pricing;
    } else if (query.includes("where") || query.includes("location") || query.includes("map") || query.includes("sector")) {
      botResponseText = projectKnowledge.location;
    } else if (query.includes("amenit") || query.includes("pool") || query.includes("gym")) {
      botResponseText = projectKnowledge.amenities;
    } else if (query.includes("size") || query.includes("plan") || query.includes("area") || query.includes("layout")) {
      botResponseText = "Our 3 BHK variants span a super area of 1625 Sq. Ft. The grand 4 BHK layout specifications can be unlocked via phone confirmation. Tap 'Call Now' to speak with an executive.";
    }

    setMessages((prev) => [...prev, userMsg, { sender: "bot", text: botResponseText }]);
    setInputValue("");
  };

  const handleStickyFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsStickySubmitted(true);
  };

  const openStickyModal = () => {
    setIsStickySubmitted(false);
    setStickyFormData({ name: "", email: "", phone: "", message: "" });
    setIsStickyModalOpen(true);
  };

  return (
    <>
      {/* =========================================================================
          UNIVERSAL AI CHAT WINDOW CONTAINER (Shared beautifully across viewports)
          ========================================================================= */}
      {isChatOpen && (
        <div className="fixed bottom-20 right-4 sm:right-6 z-50 pointer-events-auto w-[calc(100vw-32px)] sm:w-[380px] h-[460px] bg-white rounded-3xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.3)] border border-gray-100 flex flex-col overflow-hidden animate-scale-up select-none">
          <div className="p-4 flex items-center justify-between text-[#dfc7a1]" style={{ backgroundColor: "#261a0f" }}>
            <div className="flex items-center gap-2.5">
              <div className="p-2 bg-white/10 rounded-xl border border-white/10">
                <svg className="h-4 w-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21M6.75 6.75h10.5a2.25 2.25 0 0 1 2.25 2.25v6.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 15.5v-6.5a2.25 2.25 0 0 1 2.25-2.25Z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-black uppercase tracking-widest">Gaurs AI Smart Bot</span>
                <span className="text-[9px] text-emerald-400 font-bold flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 inline-block animate-pulse" /> Online
                </span>
              </div>
            </div>
            <button onClick={() => setIsChatOpen(false)} className="p-1.5 rounded-lg hover:bg-white/10 text-gray-400 hover:text-white"><X className="h-4 w-4" /></button>
          </div>

          <div className="flex-grow p-4 overflow-y-auto bg-[#fafafa] space-y-3.5 scrollbar-thin">
            {messages.map((msg, index) => (
              <div key={index} className={`flex w-full ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-xs font-medium leading-relaxed shadow-sm border ${msg.sender === "user" ? "bg-[#5a4229] text-white border-[#46331f]" : "bg-white text-gray-800 border-gray-100"}`}>{msg.text}</div>
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>

          <div className="p-2.5 bg-white border-t border-gray-50 flex flex-wrap gap-1.5 justify-center">
            <button onClick={() => handleOptionSelect("overview", "Project Overview")} className="px-2 py-1 bg-gray-50 hover:bg-[#dfc7a1]/20 border border-gray-100 rounded-lg text-[9px] font-bold uppercase tracking-wider text-gray-700">🏢 Overview</button>
            <button onClick={() => handleOptionSelect("pricing", "Pricing Models")} className="px-2 py-1 bg-gray-50 hover:bg-[#dfc7a1]/20 border border-gray-100 rounded-lg text-[9px] font-bold uppercase tracking-wider text-gray-700">💰 Price Sheet</button>
            <button onClick={() => handleOptionSelect("location", "Location Hub")} className="px-2 py-1 bg-gray-50 hover:bg-[#dfc7a1]/20 border border-gray-100 rounded-lg text-[9px] font-bold uppercase tracking-wider text-gray-700">📍 Location</button>
            <button onClick={() => handleOptionSelect("amenities", "Amenities List")} className="px-2 py-1 bg-gray-50 hover:bg-[#dfc7a1]/20 border border-gray-100 rounded-lg text-[9px] font-bold uppercase tracking-wider text-gray-700">🌳 Amenities</button>
          </div>

          <form onSubmit={handleCustomSubmit} className="p-3 bg-white border-t border-gray-100 flex gap-2 items-center">
            <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Ask about layouts, pricing..." className="flex-grow bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 text-xs font-semibold text-gray-900 placeholder-gray-400 focus:outline-none" />
            <button type="submit" className="p-2 rounded-xl bg-[#5a4229] text-[#dfc7a1] shadow-sm"><Send className="h-3.5 w-3.5" /></button>
          </form>
        </div>
      )}

      {/* =========================================================================
          DESKTOP ACTIONS STACK VIEW (hidden lg:flex)
          ========================================================================= */}
      <div className="hidden lg:flex fixed bottom-6 right-6 z-50 flex-col items-end gap-3 pointer-events-none select-none">
        {/* Bot Trigger */}
        <button onClick={() => setIsChatOpen(!isChatOpen)} className="pointer-events-auto h-12 w-12 rounded-full flex items-center justify-center text-white bg-gradient-to-r from-indigo-600 to-blue-600 shadow-lg border border-white/10 transition-transform active:scale-95">
          {isChatOpen ? <X className="h-5 w-5" /> : <svg className="h-5 w-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21M6.75 6.75h10.5a2.25 2.25 0 0 1 2.25 2.25v6.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 15.5v-6.5a2.25 2.25 0 0 1 2.25-2.25Z" /></svg>}
        </button>
        {/* Dialer Trigger */}
        <a href={`tel:${phoneNumber}`} className="pointer-events-auto h-12 w-12 rounded-full flex items-center justify-center text-[#dfc7a1] shadow-lg border border-white/10" style={{ backgroundColor: "#4a3621", backgroundImage: "linear-gradient(135deg, #3a2a1a, #5a4229)" }}>
          <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" /></svg>
        </a>
        {/* WhatsApp Link Asset */}
        <a href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer" className="pointer-events-auto h-12 w-12 rounded-full flex items-center justify-center bg-[#25D366] shadow-lg border border-white/10">
          <img src="/wh.png" alt="WhatsApp" className="h-6 w-6 object-contain" />
        </a>
      </div>

      {/* =========================================================================
          MOBILE VIEW COHESIVE SYSTEM LAYER (block lg:hidden)
          ========================================================================= */}
      {/* 1. Dedicated Floating AI Bot Toggler Bubble for Mobile Viewports */}
      <div className="fixed bottom-18 right-4 z-40 block lg:hidden pointer-events-none">
        <button
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="pointer-events-auto h-11 w-11 rounded-full flex items-center justify-center text-white bg-gradient-to-r from-indigo-600 to-blue-600 shadow-md border border-white/10 active:scale-95 transition-transform"
        >
          {isChatOpen ? <X className="h-4 w-4" /> : <svg className="h-4.5 w-4.5 fill-none stroke-current stroke-2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21M6.75 6.75h10.5a2.25 2.25 0 0 1 2.25 2.25v6.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 15.5v-6.5a2.25 2.25 0 0 1 2.25-2.25Z" /></svg>}
        </button>
      </div>

      {/* 2. Permanent Bottom Sticky Operational Nav Strip Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 lg:hidden flex h-14 w-full text-center shadow-lg select-none">
        {/* PANEL A: CALL NOW LINK */}
        <a
          href={`tel:${phoneNumber}`}
          className="w-[35%] flex items-center justify-center gap-2 font-bold uppercase tracking-wider text-xs text-gray-900 border-r border-gray-100"
          style={{
            backgroundColor: "#dfc7a1",
            backgroundImage: "linear-gradient(to bottom, #ebd5b2, #dfc7a1)",
          }}
        >
          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" /></svg>
          <span>Call</span>
        </a>

        {/* PANEL B: MODAL FORM SHEET ENQUIRE ACTION */}
        <button
          onClick={openStickyModal}
          className="w-[35%] flex items-center justify-center gap-2 font-bold uppercase tracking-wider text-xs text-gray-900 border-r border-gray-100"
          style={{
            backgroundColor: "#dfc7a1",
            backgroundImage: "linear-gradient(to bottom, #ebd5b2, #dfc7a1)",
          }}
        >
          <svg className="w-3.5 h-3.5 fill-none stroke-current stroke-2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" /></svg>
          <span>Enquire</span>
        </button>

        {/* PANEL C: WHATSAPP DIRECT PATHWAY ROW */}
        <a
          href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-[30%] flex items-center justify-center gap-1.5 font-bold tracking-wide text-xs text-white"
          style={{ backgroundColor: "#25D366" }}
        >
          <img src="/wh.png" alt="WhatsApp" className="w-4.5 h-4.5 object-contain" />
          <span>WhatsApp</span>
        </a>
      </div>

      {/* =========================================================================
          UNIFIED MOBILE DROPDOWN STICKY FORM MODAL PANEL OVERLAY
          ========================================================================= */}
      {isStickyModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-md bg-black/70 transition-opacity duration-300 animate-fade-in">
          <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 flex flex-col p-6 sm:p-8 space-y-6">
            
            <div className="flex items-center justify-between border-b border-gray-100 pb-4">
              <h3 className="text-lg font-bold text-gray-900 tracking-tight">Get More Details Enquire Now</h3>
              <button onClick={() => setIsStickyModalOpen(false)} className="p-1 rounded-md text-gray-400 hover:text-gray-900 hover:bg-gray-100"><X className="h-5 w-5 stroke-[2.5]" /></button>
            </div>

            {!isStickySubmitted ? (
              <form onSubmit={handleStickyFormSubmit} className="space-y-4">
                <input type="text" required placeholder="Enter Name" value={stickyFormData.name} onChange={(e) => setStickyFormData(prev => ({ ...prev, name: e.target.value }))} className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-sm font-medium text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-900 transition-all" />
                <input type="email" required placeholder="Enter Email" value={stickyFormData.email} onChange={(e) => setStickyFormData(prev => ({ ...prev, email: e.target.value }))} className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-sm font-medium text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-900 transition-all" />
                <div className="relative flex items-center border border-gray-300 rounded-xl bg-white focus-within:ring-2 focus-within:ring-gray-900 transition-all">
                  <span className="flex items-center gap-1 text-sm text-gray-500 font-bold pl-4 pr-2 select-none border-r border-gray-200">
                    <span className="inline-block w-4 h-2.5 bg-gradient-to-b from-[#FF9933] via-[#FFFFFF] to-[#128807] rounded-sm opacity-90" /> +91
                  </span>
                  <input type="tel" required pattern="[0-9]{10}" placeholder="Enter Number" value={stickyFormData.phone} onChange={(e) => setStickyFormData(prev => ({ ...prev, phone: e.target.value }))} className="w-full bg-transparent px-3 py-3 text-sm font-medium text-gray-900 placeholder-gray-500 focus:outline-none" />
                </div>
                <button type="submit" className="w-full rounded-xl bg-black py-3.5 text-sm font-bold tracking-wide text-white hover:bg-gray-900 transition-colors mt-2">Submit Now</button>
              </form>
            ) : (
              <div className="flex flex-col items-center justify-center text-center py-10 space-y-4 animate-scale-up">
                <div className="h-16 w-16 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 border border-emerald-100 shadow-sm"><CheckCircle2 className="h-8 w-8 stroke-[2.5]" /></div>
                <div className="space-y-1.5">
                  <h3 className="text-lg font-bold text-gray-900 tracking-tight">Enquiry Received</h3>
                  <p className="text-xs text-gray-500 max-w-xs leading-relaxed font-medium">Thank you. Your details have been submitted successfully. A relationship manager will contact you shortly with direct project pricing documentation.</p>
                </div>
                <button onClick={() => setIsStickyModalOpen(false)} className="mt-2 w-full rounded-xl bg-gray-950 py-3 text-xs font-bold uppercase tracking-widest text-white shadow-sm hover:bg-gray-900 transition-colors">Dismiss Window</button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}