"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Phone, Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Overview", href: "#overview" },
    { name: "Highlights", href: "#highlights" },
    { name: "Price", href: "#price" },
    { name: "Amenities", href: "#amenities" },
    { name: "Floor Plan", href: "#floorplan" },
    { name: "Gallery", href: "#gallery" },
    { name: "Location", href: "#location" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 shadow-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          
          {/* Brand/Logo Area (Linked to Home) */}
          <Link 
            href="/"
            className="flex items-center gap-2 sm:gap-3 select-none group focus:outline-none flex-shrink-0"
            aria-label="Return to homepage"
          >
            {/* Integrated Official Logo Image Asset */}
            <div className="relative h-10 sm:h-12 w-auto flex items-center">
              <img
                src="/logo.png"
                alt="Gaursons Official Logo"
                className="h-full w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </div>

            {/* Permanent Mandatory Regulatory Authorised Channel Partner Separation Line */}
            <div className="h-8 w-px bg-gray-200 mx-0.5 sm:mx-1 block" />
            
            {/* Regulatory Brand Label Tag */}
            <div className="flex flex-col text-left">
              <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-wider text-gray-800 leading-none">Authorised</span>
              <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-wider text-gray-800 leading-none">Channel</span>
              <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-wider text-gray-800 leading-none">Partner</span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xs font-bold text-gray-700 uppercase tracking-wider transition-colors duration-300 hover:text-amber-700 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-amber-700 hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Phone Button */}
          <div className="hidden sm:block">
            <a
              href="tel:+919910374156"
              className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-xs font-bold uppercase tracking-widest text-[#dfc7a1] shadow-lg transition-all duration-300 transform hover:scale-[1.03] active:scale-[0.98]"
              style={{
                backgroundColor: "#4a3621",
                backgroundImage: "linear-gradient(to right, #3a2a1a, #5a4229)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundImage = "none";
                e.currentTarget.style.backgroundColor = "#dfc7a1";
                e.currentTarget.style.color = "#1c1c1c";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundImage = "linear-gradient(to right, #3a2a1a, #5a4229)";
                e.currentTarget.style.color = "#dfc7a1";
              }}
            >
              <Phone className="h-3.5 w-3.5 fill-current stroke-[2.5]" />
              <span>Call Now</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-xl p-2.5 text-gray-800 hover:bg-gray-50 border border-gray-100 transition-colors"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar Dropdown */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 pt-3 pb-8 space-y-1 shadow-inner max-h-[85vh] overflow-y-auto">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-bold uppercase tracking-wider text-gray-800 hover:bg-gray-50 hover:text-amber-700 transition-all group"
            >
              <span>{link.name}</span>
              <ArrowUpRight className="h-4 w-4 text-gray-300 group-hover:text-amber-700 transition-colors" />
            </Link>
          ))}
          <div className="pt-6 px-4 sm:hidden">
            <a
              href="tel:+919910374156"
              className="flex w-full items-center justify-center gap-2 rounded-xl py-4 text-xs font-bold uppercase tracking-widest text-[#dfc7a1] shadow-md active:scale-[0.98] transition-transform"
              style={{ backgroundColor: "#4a3621" }}
            >
              <Phone className="h-4 w-4 fill-current" />
              Call Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}