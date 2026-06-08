"use client";

import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const quickLinks = [
    { name: "Overview", href: "#overview" },
    { name: "Highlights", href: "#highlights" },
    { name: "Luxury Price", href: "#price" },
    { name: "Amenities", href: "#amenities" },
    { name: "Floor Plan", href: "#floorplan" },
    { name: "Gallery", href: "#gallery" },
    { name: "Location", href: "#location" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms & Conditions", href: "/terms" },
    { name: "Disclaimer", href: "/disclaimer" },
  ];

  return (
    <footer id="footer" className="w-full bg-[#120c07] text-white pt-16 pb-8 border-t border-white/5 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Grid Structure */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-white/5">
          
          {/* COLUMN 1: Brand Profile, Official Logo & Compliance Badge */}
          <div className="lg:col-span-4 space-y-5">
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 select-none group focus:outline-none"
              aria-label="Return to homepage"
            >
              {/* Branded White-Backed Circular Emblem Shield for Maximum Dark Mode Contrast */}
              <div className="relative h-10 w-auto bg-white/95 rounded-xl p-1.5 flex items-center justify-center border border-white/10 transition-transform group-hover:scale-[1.02]">
                <img
                  src="/logo.png"
                  alt="Gaursons Corporate Logo"
                  className="h-full w-auto object-contain"
                />
              </div>

              {/* Permanent Mandatory Regulatory Separation Vector */}
              <div className="h-7 w-px bg-white/20 mx-0.5" />
              
              {/* Mandatory Structural Tag Copy */}
              <div className="flex flex-col text-left">
                <span className="text-[9px] font-black uppercase tracking-wider text-gray-200 leading-none">Authorised</span>
                <span className="text-[9px] font-black uppercase tracking-wider text-gray-200 leading-none">Channel</span>
                <span className="text-[9px] font-black uppercase tracking-wider text-gray-200 leading-none">Partner</span>
              </div>
            </Link>

            <p className="text-xs text-gray-400 leading-relaxed max-w-sm font-medium">
              Transforming expectations into luxury landmarks across the National Capital Region. 
              Delivering high-end architecture, premium construction standards, and spaces designed 
              for exceptional lifestyle living.
            </p>
          </div>

          {/* COLUMN 2: Section Quick IDs Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#dfc7a1]">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-xs font-semibold text-gray-400 hover:text-white transition-colors duration-200 block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: Legal, Disclaimers & Extra Pages */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#dfc7a1]">
              Legal & Policies
            </h4>
            <ul className="space-y-2.5">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-xs font-semibold text-gray-400 hover:text-white transition-colors duration-200 inline-flex items-center gap-1 group"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="h-2.5 w-2.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 4: Real-Time Contact Parameters */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#dfc7a1]">
              Contact Details
            </h4>
            <ul className="space-y-3.5">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="h-4 w-4 text-[#dfc7a1] flex-shrink-0 mt-0.5" />
                <span className="text-xs font-semibold leading-relaxed">
                  Sector 22D, Yamuna Expressway, Greater Noida, UP, India
                </span>
              </li>
              <li>
                <a
                  href="tel:+917906062296"
                  className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
                >
                  <Phone className="h-4 w-4 text-[#dfc7a1] flex-shrink-0" />
                  <span className="text-xs font-semibold">+91 9910374156</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:realtyfmleads@gmail.com"
                  className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
                >
                  <Mail className="h-4 w-4 text-[#dfc7a1] flex-shrink-0" />
                  <span className="text-xs font-semibold truncate">realtyfmleads@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* BOTTOM SECTION: Regulatory RERA Disclosures & Custom Managed Copyright Node */}
        <div className="pt-8 space-y-4 text-center">
          <div className="max-w-3xl mx-auto space-y-1 text-[10px] sm:text-xs font-medium tracking-wide text-gray-500">
            <p>{`Agent RERA Registration No: COMING SOON`}</p>
            <p>{`Project RERA Registration No: UPRERAPRJ622344/11/2025`}</p>
          </div>
          <div className="h-px w-12 bg-white/10 mx-auto" />
          
          {/* Custom Agency Attribution Line with Interlocking Hover Smooth Color Morph */}
          <p className="text-[10px] font-semibold tracking-widest text-gray-500 uppercase">
            {`Copyright © ${new Date().getFullYear()} | Managed By `}
            <a 
              href="https://margauxtech.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#dfc7a1] hover:text-white underline underline-offset-4 transition-colors duration-300 decoration-white/20 hover:decoration-white"
            >
              Margaux Tech
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
}