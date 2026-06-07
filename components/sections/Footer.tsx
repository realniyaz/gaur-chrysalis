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
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms & Conditions", href: "/terms" },
    { name: "Disclaimer", href: "/disclaimer" },
  ];

  return (
    <footer className="w-full bg-[#120c07] text-white pt-16 pb-8 border-t border-white/5 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Grid Structure */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-white/5">
          
          {/* COLUMN 1: Brand Profile & Custom Logo Slot (span 4) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex flex-col">
              {/* Placeholder for your custom asset logo image */}
              <span className="font-black text-2xl tracking-tighter text-white">GAURS</span>
              <span className="text-[9px] uppercase tracking-widest text-[#dfc7a1] font-medium tracking-[0.2em] -mt-0.5">
                your own world
              </span>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed max-w-sm font-medium">
              Transforming expectations into luxury landmarks across the National Capital Region. 
              Delivering high-end architecture, premium construction standards, and spaces designed 
              for exceptional lifestyle living.
            </p>
          </div>

          {/* COLUMN 2: Section Quick IDs Links (span 2) */}
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

          {/* COLUMN 3: Legal, Disclaimers & Extra Pages (span 3) */}
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

          {/* COLUMN 4: Real-Time Contact Parameters (span 3) */}
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
                  href="tel:+911234567890"
                  className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
                >
                  <Phone className="h-4 w-4 text-[#dfc7a1] flex-shrink-0" />
                  <span className="text-xs font-semibold">+91 7906062296</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:sales@gaurprojects.com"
                  className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
                >
                  <Mail className="h-4 w-4 text-[#dfc7a1] flex-shrink-0" />
                  <span className="text-xs font-semibold truncate">sales@gaurprojects.com</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* BOTTOM SECTION: Regulatory RERA Disclosures & Clean Copyright Node */}
        <div className="pt-8 space-y-4 text-center">
          <div className="max-w-3xl mx-auto space-y-1 text-[10px] sm:text-xs font-medium tracking-wide text-gray-500">
            <p>{`Agent RERA Registration No: PRM/KA/RERA/1251/310/AG/231020/004186`}</p>
            <p>{`Project RERA Registration No: UPRERAPRJ622344/11/2025`}</p>
          </div>
          <div className="h-px w-12 bg-white/10 mx-auto" />
          <p className="text-[10px] font-semibold tracking-widest text-gray-600 uppercase">
            {`Copyright © ${new Date().getFullYear()} | Privacy Policy & Disclaimer`}
          </p>
        </div>

      </div>
    </footer>
  );
}