"use client";

import React, { useState, useEffect, useRef } from "react";
import { Phone, Bot, X, Send, ChevronRight } from "lucide-react";

interface Message {
  sender: "user" | "bot";
  text: string;
}

export default function FloatingActions() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "bot",
      text: "Welcome to Gaurs AI Assistant. Select an option below or type a query to explore Gaur Chrysalis instantly.",
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const chatEndRef = useRef<HTMLDivElement>(null);

  const phoneNumber = "+917906062296";
  const whatsappNumber = "917906062296";
  const whatsappMessage = encodeURIComponent(
    "Hi, I am interested in Gaur Chrysalis. Please share the pricing sheet and availability status."
  );

  // Auto-scroll to the bottom of the chat on new messages
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isChatOpen]);

  // Comprehensive project knowledge base mapped out explicitly
  const projectKnowledge: Record<string, string> = {
    overview: "Gaur Chrysalis is a ultra-luxury residential enclave situated at Sector 22D, Yamuna Expressway. It features masterfully ventilated 3 & 4 BHK apartments with premium specifications and smart township layouts.",
    pricing: "Our pricing structure starts at an exclusive rate of ₹ 8,499/- Sq.Ft.* for spacious 3 BHK models (Super Area: 1800 Sq. Ft.). Exact pricing metrics for 4 BHK model layouts are available directly on executive request.",
    location: "The project boasts exceptional connectivity matrices: located just 12 minutes from the upcoming Film City and a swift 15 minutes away from the Jewar International Airport, sitting right in the center of upcoming retail zones.",
    amenities: "Residents gain access to over 50 world-class amenities, including a luxury Swimming Pool complex, state-of-the-art Gymnasium, Meditation Zone, Amphitheatre, Reflexology Park, and a curated Sculpture Garden.",
    booking: "Pre-launch bookings are officially open with limited inventory benefits. You can lock in priority allocation slots by using the 'Call Now' floating dialer or sharing your contact metrics through our form panel.",
  };

  const handleOptionSelect = (key: string, label: string) => {
    // Append user selection
    const userMsg: Message = { sender: "user", text: label };
    // Fetch corresponding system answer mapping
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

    // Simple robust keyword routing match framework
    if (query.includes("price") || query.includes("cost") || query.includes("rate") || query.includes("bhk")) {
      botResponseText = projectKnowledge.pricing;
    } else if (query.includes("where") || query.includes("location") || query.includes("map") || query.includes("sector")) {
      botResponseText = projectKnowledge.location;
    } else if (query.includes("amenit") || query.includes("pool") || query.includes("gym")) {
      botResponseText = projectKnowledge.amenities;
    } else if (query.includes("size") || query.includes("plan") || query.includes("area") || query.includes("layout")) {
      botResponseText = "Our 3 BHK variants span a super area of 1800 Sq. Ft. The grand 4 BHK layout specifications can be unlocked via phone confirmation. Tap 'Call Now' to speak with an executive.";
    }

    setMessages((prev) => [...prev, userMsg, { sender: "bot", text: botResponseText }]);
    setInputValue("");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 pointer-events-none select-none">
      
      {/* =========================================================================
          INTERACTIVE AI SECOND BRAIN CONTEXT PANEL CARD WINDOW 
          ========================================================================= */}
      {isChatOpen && (
        <div className="pointer-events-auto w-[340px] sm:w-[380px] h-[480px] bg-white rounded-3xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.3)] border border-gray-100 flex flex-col overflow-hidden animate-scale-up mb-2">
          
          {/* Header Panel Navigation Row */}
          <div className="p-4 flex items-center justify-between text-[#dfc7a1]" style={{ backgroundColor: "#261a0f" }}>
            <div className="flex items-center gap-2.5">
              <div className="p-2 bg-white/10 rounded-xl border border-white/10">
                <Bot className="h-4 w-4 text-[#dfc7a1]" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-black uppercase tracking-widest">Gaurs AI Smart Bot</span>
                <span className="text-[9px] text-emerald-400 font-bold flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 inline-block animate-pulse" />
                  Online & Informed
                </span>
              </div>
            </div>
            <button 
              onClick={() => setIsChatOpen(false)}
              className="p-1.5 rounded-lg hover:bg-white/10 transition-colors text-gray-400 hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Interactive Dynamic Scroll Content Stream */}
          <div className="flex-grow p-4 overflow-y-auto bg-[#fafafa] space-y-3.5 scrollbar-thin">
            {messages.map((msg, index) => (
              <div key={index} className={`flex w-full ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-xs font-medium leading-relaxed shadow-sm border ${
                  msg.sender === "user" 
                    ? "bg-[#5a4229] text-white border-[#46331f]" 
                    : "bg-white text-gray-800 border-gray-100"
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>

          {/* Shortcut Quick Option Select Chips Array */}
          <div className="p-3 bg-white border-t border-gray-50 flex flex-wrap gap-1.5 justify-center">
            <button onClick={() => handleOptionSelect("overview", "Project Overview")} className="px-2.5 py-1.5 bg-gray-50 hover:bg-[#dfc7a1]/20 border border-gray-100 rounded-lg text-[10px] font-bold uppercase tracking-wider text-gray-700 transition-colors">
              🏢 Overview
            </button>
            <button onClick={() => handleOptionSelect("pricing", "Pricing Models")} className="px-2.5 py-1.5 bg-gray-50 hover:bg-[#dfc7a1]/20 border border-gray-100 rounded-lg text-[10px] font-bold uppercase tracking-wider text-gray-700 transition-colors">
              💰 Price Sheet
            </button>
            <button onClick={() => handleOptionSelect("location", "Location Hub")} className="px-2.5 py-1.5 bg-gray-50 hover:bg-[#dfc7a1]/20 border border-gray-100 rounded-lg text-[10px] font-bold uppercase tracking-wider text-gray-700 transition-colors">
              📍 Location
            </button>
            <button onClick={() => handleOptionSelect("amenities", "Amenities List")} className="px-2.5 py-1.5 bg-gray-50 hover:bg-[#dfc7a1]/20 border border-gray-100 rounded-lg text-[10px] font-bold uppercase tracking-wider text-gray-700 transition-colors">
              🌳 Amenities
            </button>
            <button onClick={() => handleOptionSelect("booking", "How to Book")} className="px-2.5 py-1.5 bg-gray-50 hover:bg-[#dfc7a1]/20 border border-gray-100 rounded-lg text-[10px] font-bold uppercase tracking-wider text-gray-700 transition-colors">
              ⚡ Secure Unit
            </button>
          </div>

          {/* Bottom Typing Input Field Form Sheet */}
          <form onSubmit={handleCustomSubmit} className="p-3 bg-white border-t border-gray-100 flex gap-2 items-center">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask about layouts, pricing, airport..."
              className="flex-grow bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 text-xs font-semibold text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#5a4229] transition-colors"
            />
            <button 
              type="submit" 
              className="p-2 rounded-xl bg-[#5a4229] hover:bg-[#46331f] text-[#dfc7a1] transition-colors shadow-sm"
            >
              <Send className="h-3.5 w-3.5" />
            </button>
          </form>
        </div>
      )}

      {/* =========================================================================
          PRIMARY FAB VERTICAL STACK CONTROL BUTTONS 
          ========================================================================= */}
      <div className="flex flex-col gap-2.5 items-end">
        
        {/* ACTION A: PRE-CONFIGURED INTELLIGENT AI CONTEXT TOGGLER */}
        <button
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="pointer-events-auto h-12 w-12 rounded-full flex items-center justify-center text-white bg-gradient-to-r from-indigo-600 to-blue-600 shadow-[0_10px_25px_rgba(79,70,229,0.3)] hover:shadow-[0_12px_30px_rgba(79,70,229,0.4)] border border-white/10 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 active:scale-95 group relative"
          title="Open AI Second Brain"
        >
          {/* Pulsing notify ring that stays hidden when chat opens */}
          {!isChatOpen && <span className="absolute inset-0 rounded-full bg-indigo-600/30 animate-ping opacity-75 pointer-events-none" />}
          
          {isChatOpen ? <X className="h-5 w-5 stroke-[2.5]" /> : <Bot className="h-5 w-5 stroke-[2.5]" />}
          
          <span className="absolute right-14 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1.5 rounded-lg opacity-0 pointer-events-none transition-opacity duration-300 group-hover:opacity-100 shadow-md whitespace-nowrap">
            AI Assistant
          </span>
        </button>

        {/* ACTION B: HIGH-CONVERSION PHONE CALL DIALER */}
        <a
          href={`tel:${phoneNumber}`}
          className="pointer-events-auto h-12 w-12 rounded-full flex items-center justify-center text-[#dfc7a1] shadow-[0_10px_25px_rgba(74,54,33,0.3)] hover:shadow-[0_12px_30px_rgba(74,54,33,0.4)] border border-white/10 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 active:scale-95 group relative"
          style={{
            backgroundColor: "#4a3621",
            backgroundImage: "linear-gradient(135deg, #3a2a1a, #5a4229)",
          }}
          title="Call Representative"
        >
          <Phone className="h-4 w-4 stroke-[2.5]" />
          <span className="absolute right-14 top-1/2 -translate-y-1/2 bg-gray-900 text-[#dfc7a1] text-[10px] font-bold uppercase tracking-wider px-2.5 py-1.5 rounded-lg opacity-0 pointer-events-none transition-opacity duration-300 group-hover:opacity-100 shadow-md whitespace-nowrap">
            Call Representative
          </span>
        </a>

        {/* ACTION C: PREMIUM INTEGRATED WHATSAPP LINK */}
        <a
          href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="pointer-events-auto h-12 w-12 rounded-full flex items-center justify-center text-white bg-[#25D366] shadow-[0_10px_25px_rgba(37,211,102,0.3)] hover:shadow-[0_12px_30px_rgba(37,211,102,0.4)] border border-white/10 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 active:scale-95 group relative"
          title="Chat on WhatsApp"
        >
          <span className="absolute top-0 right-0 h-2.5 w-2.5 bg-red-500 rounded-full border border-white" />
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75 0 1.884.533 3.642 1.46 5.137L2.43 21.43a.75.75 0 0 0 .944.945l4.3-1.28a9.716 9.716 0 0 0 4.325 1.03c5.385 0 9.75-4.365 9.75-9.75s-4.365-9.75-9.75-9.75Zm0 1.5a8.25 8.25 0 0 0-4.102 15.385.75.75 0 0 1-.365.657l-2.844.846.845-2.843a.75.75 0 0 1 .15-.27A8.216 8.216 0 0 0 4.5 12a8.25 8.25 0 0 0 8.25-8.25Zm3.904 10.662c-.225-.112-1.331-.657-1.538-.732-.206-.075-.356-.112-.506.112-.15.225-.581.732-.712.882-.132.15-.263.169-.488.056-.225-.113-.95-.35-1.81-1.118-.67-.597-1.121-1.334-1.253-1.56-.13-.225-.014-.347.098-.459.1-.1.225-.263.338-.394.112-.131.15-.225.225-.375.075-.15.037-.282-.019-.394-.056-.113-.506-1.219-.694-1.669-.183-.441-.369-.381-.506-.381-.132 0-.282-.019-.432-.019s-.394.056-.6.281c-.206.225-.788.77-0.788 1.877s.807 2.176.919 2.326c.113.15 1.588 2.425 3.847 3.4a12.83 12.83 0 0 0 1.284.475c.54.172 1.03.148 1.419.09.434-.064 1.332-.544 1.519-1.069.188-.525.188-.975.132-1.069-.056-.094-.207-.15-.432-.263Z" clipRule="evenodd" /></svg>
          <span className="absolute right-14 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1.5 rounded-lg opacity-0 pointer-events-none transition-opacity duration-300 group-hover:opacity-100 shadow-md whitespace-nowrap">
            WhatsApp
          </span>
        </a>

      </div>
    </div>
  );
}