import React from 'react';
import { motion } from 'motion/react';
import beforeAfter1 from '../assets/before-after-1.png';
import beforeAfter2 from '../assets/before-after-2.png';
import beforeAfter3 from '../assets/before-after-3.png';
import alignerTray from '../assets/aligner-tray.png';

export default function BeforeAfterSection() {
  return (
    <section className="bg-[#F9FAF0] py-10 px-6 md:px-10 lg:px-14 relative overflow-hidden select-none">

      {/* ---- ROW 1: Real Transformations + 3 Sliders + Smile Progress Card ---- */}
      <div className="max-w-7xl mx-auto grid grid-cols-12 gap-4 lg:gap-6 items-stretch mb-6">

        {/* Left Column: Heading and description (Centered vertically since the See More button is removed) */}
        <div className="col-span-12 lg:col-span-3 flex flex-col justify-center items-start text-left mb-4 lg:mb-0">
          <h2 className="font-syne font-extrabold text-[#1A56DB] leading-[1.1] tracking-tight mb-2 text-base sm:text-lg lg:text-xl">
            Real Transformations.<br />
            <span className="text-[#D5E100]" style={{ textShadow: '-1px -1px 0 #1A56DB, 1px -1px 0 #1A56DB, -1px 1px 0 #1A56DB, 1px 1px 0 #1A56DB' }}>Real Confidence.</span>
          </h2>
          <p className="text-[#5B6E99] font-semibold text-[0.7rem] sm:text-[0.75rem] leading-snug max-w-[220px]">
            See how our custom aligners transform smiles and lives.
          </p>
        </div>

        {/* Middle Column: 3 Before-After sliders (Always side-by-side in one row with same height, dynamically sized via percentages to fit container width without overflowing) */}
        <div className="col-span-12 lg:col-span-6 flex justify-center items-center w-full mb-4 lg:mb-0">
          <div className="flex flex-row justify-between items-center gap-1.5 sm:gap-3 w-full">

            {/* Card 1 */}
            <div
              className="rounded-xl overflow-hidden border border-white/80 shadow-sm select-none bg-gray-50 group hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
              style={{ width: '34.1%', aspectRatio: '203/105' }}
            >
              <img
                src={beforeAfter1}
                alt="Before and after crowded teeth correction"
                className="w-full h-full object-cover pointer-events-none"
              />
            </div>

            {/* Card 2 */}
            <div
              className="rounded-xl overflow-hidden border border-white/80 shadow-sm select-none bg-gray-50 group hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
              style={{ width: '30.9%', aspectRatio: '184/105' }}
            >
              <img
                src={beforeAfter2}
                alt="Before and after spacing closure"
                className="w-full h-full object-cover pointer-events-none"
              />
            </div>

            {/* Card 3 (Clean crop without blue card overlap) */}
            <div
              className="rounded-xl overflow-hidden border border-white/80 shadow-sm select-none bg-gray-50 group hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
              style={{ width: '30.5%', aspectRatio: '182/105' }}
            >
              <img
                src={beforeAfter3}
                alt="Before and after overbite realignment"
                className="w-full h-full object-cover pointer-events-none"
              />
            </div>

          </div>
        </div>

        {/* Right Column: Track Your Smile Progress Card (Same height as teeth cards row on desktop) */}
        <div className="col-span-12 lg:col-span-3">
          <div className="bg-[#0B2545] rounded-2xl p-4 h-full flex flex-col justify-between relative overflow-hidden shadow-md border border-white/10 group min-h-[110px]">
            {/* Background Aligner Tray Graphic */}
            <img
              src={alignerTray}
              alt="Clear aligner graphic"
              className="absolute -right-6 top-1/2 -translate-y-1/2 w-[110px] opacity-40 mix-blend-screen pointer-events-none group-hover:scale-105 transition-transform duration-700 rotate-[20deg]"
            />

            <div className="relative z-10 pr-12 text-left">
              <h3 className="font-syne font-extrabold text-white text-[0.8rem] sm:text-[0.85rem] leading-[1.2] mb-1.5">
                Track Your<br />Smile Progress
              </h3>
              <p className="text-white/60 text-[0.58rem] sm:text-[0.62rem] font-medium leading-tight">
                With virtual check-ins and real-time updates.
              </p>
            </div>

            <div className="relative z-10 text-left mt-3">
              <a
                href="#cta"
                className="inline-flex items-center justify-center gap-1 bg-[#D5E100] text-[#0B2545] rounded-full font-bold hover:bg-[#c5a800] transition-colors text-[0.6rem] uppercase tracking-wider px-2.5 py-1.5 shadow-sm"
              >
                Learn More
                <span className="font-extrabold">&rarr;</span>
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* ---- ROW 2: 4 Details strip + Yellow CTA Card ---- */}
      <div className="max-w-7xl mx-auto grid grid-cols-12 gap-4 lg:gap-6 items-stretch">

        {/* Left Column: 4 Feature highlights */}
        <div className="col-span-12 lg:col-span-9 flex items-center bg-white border border-white shadow-[0_4px_25px_rgba(0,0,0,0.015)] rounded-2xl p-4 lg:p-5">
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">

            {/* Item 1 */}
            <div className="flex gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#F9FAF0] border border-[rgba(26,86,219,0.08)] shadow-sm flex items-center justify-center flex-shrink-0">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1A56DB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="m9 11 2 2 4-4" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-[#1A56DB] text-xs mb-0.5 leading-snug">Advanced Technology</h4>
                <p className="text-[#5B6E99] text-[0.58rem] sm:text-[0.62rem] font-medium leading-tight">Precision. Comfort. Results.</p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#F9FAF0] border border-[rgba(26,86,219,0.08)] shadow-sm flex items-center justify-center flex-shrink-0">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1A56DB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                  <path d="m16 11 2 2 4-4" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-[#1A56DB] text-xs mb-0.5 leading-snug">Expert Orthodontists</h4>
                <p className="text-[#5B6E99] text-[0.58rem] sm:text-[0.62rem] font-medium leading-tight">Specialized care every step.</p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#F9FAF0] border border-[rgba(26,86,219,0.08)] shadow-sm flex items-center justify-center flex-shrink-0">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1A56DB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-[#1A56DB] text-xs mb-0.5 leading-snug">Personalized Care</h4>
                <p className="text-[#5B6E99] text-[0.58rem] sm:text-[0.62rem] font-medium leading-tight">Plans tailored to your smile.</p>
              </div>
            </div>

            {/* Item 4 */}
            <div className="flex gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#F9FAF0] border border-[rgba(26,86,219,0.08)] shadow-sm flex items-center justify-center flex-shrink-0">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1A56DB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-[#1A56DB] text-xs mb-0.5 leading-snug">Safe & Reliable</h4>
                <p className="text-[#5B6E99] text-[0.58rem] sm:text-[0.62rem] font-medium leading-tight">Clinically proven. Secure.</p>
              </div>
            </div>

          </div>
        </div>

        {/* Right Column: Yellow CTA Card (Same height as details strip card on desktop) */}
        <div className="col-span-12 lg:col-span-3">
          <div className="bg-[#D5E100] rounded-2xl p-4 h-full flex flex-col justify-between relative overflow-hidden shadow-md border border-white/20 group min-h-[90px]">
            {/* Background Aligner Tray Graphic */}
            <img
              src={alignerTray}
              alt="Clear aligner graphic"
              className="absolute -right-6 top-1/2 -translate-y-1/2 w-[120px] opacity-35 mix-blend-multiply pointer-events-none group-hover:scale-105 transition-transform duration-700 rotate-[35deg]"
            />

            <div className="relative z-10 pr-12 text-left">
              <h3 className="font-syne font-extrabold text-[#1A56DB] text-[0.8rem] sm:text-[0.85rem] leading-[1.2] mb-1.5">
                Ready to Transform<br />Your Smile?
              </h3>
              <p className="text-[#1a3a6e] text-[0.58rem] sm:text-[0.62rem] font-semibold leading-tight">
                <a href='https://haloaligner-smart-dental-aligner-po.vercel.app/' target="_blank" rel="noopener noreferrer" className='text-[#1a3a6e] text-[0.58rem] sm:text-[0.62rem] font-semibold leading-tight hover:underline'>Book Your Order today !!</a>
              </p>
            </div>

            <div className="relative z-10 text-left mt-3">
              <a
                href="https://haloaligner-smart-dental-aligner-po.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1 bg-[#1A56DB] text-white rounded-full font-bold hover:bg-[#2563EB] transition-colors text-[0.6rem] uppercase tracking-wider px-2.5 py-1.5 shadow-sm cursor-pointer"
              >
                Login/Signup
                <span className="font-extrabold">&rarr;</span>
              </a>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
}
