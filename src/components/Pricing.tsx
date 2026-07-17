import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/src/lib/utils';
import { ShieldCheck, Award, Sparkles, CheckCircle2, ChevronRight, Package, Box, Stethoscope, BadgeAlert } from 'lucide-react';
import { label, section } from 'motion/react-client';
import thailandImage from '../assets/thailand.png';

export default function Pricing() {
  const [activeTab, setActiveTab] = useState<'pan_india_pkg' | 'pan_india_rates' | 'bonus_package'>('pan_india_pkg');

  const panIndiaPackages = [
    {
      title: 'LITE PACKAGE',
      subtitle: 'Suitable for mild corrections',
      trays: 'Upto 14 Pairs of Trays',
      refinements: '5 Pairs Refinements Free',
      prices: { Premium: '₹ 29,000', Plus: '₹ 22,500', ECO: '₹ 16,400' },
      color: 'from-green-500 to-emerald-600',
    },
    {
      title: 'MODERATE PACKAGE',
      subtitle: 'Suitable for medium corrections',
      trays: 'Upto 26 Pairs of Trays',
      refinements: '7 Pairs Refinements Free',
      prices: { Premium: '₹ 54,000', Plus: '₹ 40,000', ECO: '₹ 29,500' },
      color: 'from-blue-500 to-indigo-600',
      featured: true,
    },
    {
      title: 'COMPLEX PACKAGE',
      subtitle: 'Suitable for severe corrections',
      trays: 'Unlimited Trays',
      refinements: '10 Pairs Refinements Free',
      prices: { Premium: '₹ 1,45,000', Plus: '₹ 1,00,000', ECO: '₹ 85,000' },
      color: 'from-purple-500 to-violet-600',
    },
  ];

  const otherPackages = [
    {
      title: 'LITE PACKAGE',
      subtitle: 'Suitable for mild corrections',
      trays: 'Upto 14 Pairs Trays',
      refinements: '5 Pairs Refinements Free',
      prices: { Premium: '₹ 25,000', Plus: '₹ 16,000', ECO: '₹ 10,000' },
      color: 'from-green-500 to-emerald-600',
    },
    {
      title: 'MODERATE PACKAGE',
      subtitle: 'Suitable for medium corrections',
      trays: 'Upto 26 Pairs Trays',
      refinements: '7 Pairs Refinements Free',
      prices: { Premium: '₹ 42,500', Plus: '₹ 29,500', ECO: '₹ 19,500' },
      color: 'from-blue-500 to-indigo-600',
      featured: true,
    },
    {
      title: 'COMPLEX PACKAGE',
      subtitle: 'Suitable for severe corrections',
      trays: 'Unlimited Trays',
      refinements: '10 Pairs Refinements Free',
      prices: { Premium: '₹ 1,29,000', Plus: '₹ 95,000', ECO: '₹ 60,500' },
      color: 'from-purple-500 to-violet-600',
    },
  ];

  return (
    <section id="pricing" className="bg-[#F9FAF0] py-28 px-6 md:px-15 relative overflow-hidden">
      <div className="absolute -top-[300px] -left-[300px] w-[700px] h-[700px] bg-[rgba(213,225,0,0.15)] rounded-full blur-[90px] pointer-events-none" />

      <div className="text-center max-w-4xl mx-auto mb-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-tag bg-[rgba(255,255,255,0.8)] border border-[rgba(26,86,219,0.15)]">Pricing Guide</span>
          <h2 className="section-title">Clear, structured packages</h2>
          <p className="section-sub mx-auto">Select the plan that fits your clinical requirements. Orthodontist-directed aligners with transparent pricing.</p>
        </motion.div>

        {/* Tab Selector */}
        <div className="flex flex-wrap justify-center gap-2 mt-10 bg-[rgba(26,86,219,0.05)] border border-[rgba(26,86,219,0.1)] p-1.5 rounded-2xl max-w-3xl mx-auto">
          {[
            { id: 'pan_india_pkg', label: 'Pan India Packages' },
            { id: 'pan_india_rates', label: 'Pan India Per-Tray' },
            { id: 'bonus_package', label: 'Bonus Package' }
            // { id: 'other_pkg', label: 'Other Packages' },
            // { id: 'other_cats', label: 'Other Categories' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={cn(
                "px-4.5 py-2.5 rounded-xl font-bold text-[0.68rem] uppercase tracking-wider transition-all duration-300",
                activeTab === tab.id
                  ? "bg-[#1A56DB] text-[#D5E100] shadow-[0_4px_12px_rgba(26,86,219,0.25)]"
                  : "text-[#1A56DB] hover:bg-[rgba(26,86,219,0.08)]"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
          >
            {/* PAN INDIA PACKAGES */}
            {activeTab === 'pan_india_pkg' && (
              <div className="space-y-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
                  {panIndiaPackages.map((pkg) => (
                    <div
                      key={pkg.title}
                      className={cn(
                        "bg-white border border-[rgba(26,86,219,0.12)] rounded-[32px] p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_48px_rgba(26,86,219,0.08)] relative",
                        pkg.featured && "border-[#1A56DB] shadow-[0_24px_50px_rgba(26,86,219,0.15)] bg-gradient-to-b from-white to-[rgba(26,86,219,0.01)]"
                      )}
                    >
                      {pkg.featured && (
                        <div className="absolute top-[-13px] left-1/2 -translate-x-1/2 bg-[#1A56DB] text-[#D5E100] text-[0.65rem] font-black tracking-[1.5px] uppercase px-4 py-1.5 rounded-full shadow-md whitespace-nowrap">
                          Most Demanded
                        </div>
                      )}
                      <div>
                        <h3 className="font-syne text-2xl font-extrabold text-[#1A56DB] mb-1">{pkg.title}</h3>
                        <p className="text-[#8EA0C0] text-[0.78rem] font-bold uppercase tracking-wider mb-6">{pkg.subtitle}</p>

                        <div className="bg-[#EFF6FF] border border-[rgba(37,99,235,0.08)] rounded-2xl p-4.5 mb-6.5">
                          <div className="flex items-center gap-2 text-xs font-bold text-[#1A56DB] mb-2">
                            <CheckCircle2 size={15} /> {pkg.trays}
                          </div>
                          <div className="flex items-center gap-2 text-xs font-semibold text-[#5B6E99]">
                            <Sparkles size={15} className="text-[#2563EB]" /> {pkg.refinements}
                          </div>
                        </div>

                        <div className="space-y-3 mb-8">
                          <div className="text-[0.72rem] font-bold text-[#8EA0C0] uppercase tracking-wider mb-2">Pricing Tiers</div>
                          {Object.entries(pkg.prices).map(([tier, price]) => (
                            <div key={tier} className="flex items-center justify-between bg-[rgba(26,86,219,0.02)] border border-[rgba(26,86,219,0.06)] rounded-xl p-3.5 hover:bg-white hover:border-[#1A56DB] transition-all">
                              <span className="text-xs font-bold text-[#1A56DB] flex items-center gap-1.5">
                                <span className={cn(
                                  "w-2.5 h-2.5 rounded-full",
                                  tier === 'Premium' ? 'bg-amber-500' : tier === 'Plus' ? 'bg-blue-500' : 'bg-gray-400'
                                )} />
                                {tier}
                              </span>
                              <span className="font-syne text-lg font-extrabold text-[#1a56db]">{price}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <a href="#contact" className="block w-full py-4 rounded-xl text-center text-sm font-bold transition-all bg-[#1A56DB] text-white shadow-[0_8px_20px_rgba(26,86,219,0.25)] hover:bg-[#2563EB] hover:-translate-y-0.5 flex items-center justify-center gap-1.5">
                        Choose Plan <ChevronRight size={16} />
                      </a>
                    </div>
                  ))}
                </div>

                {/* Pan India Packages Special Features */}
                <div className="bg-white border border-[rgba(26,86,219,0.12)] rounded-[32px] p-8">
                  <h3 className="font-syne text-base font-extrabold text-[#1A56DB] mb-6 uppercase tracking-wider text-center">Special Features</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                    {[
                      { title: 'Precision Fit & Superior Clarity', desc: 'Medical-grade aligners ensuring maximum optical transparency and anatomical matching.' },
                      { title: 'Fast Turnaround Time', desc: 'Direct setup approval and swift tray printing in clinical labs.' },
                      { title: 'Timely Delivery', desc: 'Safe shipping straight to dental clinics with robust protective casing.' }
                    ].map((srv) => (
                      <div key={srv.title} className="bg-[rgba(26,86,219,0.02)] border border-[rgba(26,86,219,0.05)] rounded-2xl p-5">
                        <h4 className="font-syne font-extrabold text-sm text-[#1A56DB] mb-2">{srv.title}</h4>
                        <p className="text-[0.78rem] font-medium text-[#5B6E99] leading-relaxed">{srv.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* PAN INDIA PER-TRAY RATES */}
            {activeTab === 'pan_india_rates' && (
              <div className="space-y-8">
                <div className="flex flex-wrap justify-center gap-6">
                  {[
                    { name: 'HALO ALIGNER PREMIUM', price: '₹ 1,000', desc: 'Premium quality structure per tray.' },
                    { name: 'HALO ALIGNER PLUS', price: '₹ 750', desc: 'Medium quality strength per tray.' },
                    { name: 'HALO ALIGNER ECO', price: '₹ 550', desc: 'Decent quality basic alignment per tray.' },
                    { name: '4D HALOALIGNER', price: '₹ 1,500', desc: 'Advanced 4D polymer setup per tray.' },
                    { name: '4D NAM', price: '₹ 900/-', desc: 'Advanced 4D Nasoalveolar Molding per tray.' },
                    { name: 'TEMPLATE', price: '₹ 750', desc: 'Setup template tray for aligner placement.' },
                    { name: 'PACKAGING', price: '₹ 1,000', desc: 'Hygienic sealed packaging box kit.' },
                  ].map((rate) => (
                    <div key={rate.name} className="bg-white border border-[rgba(26,86,219,0.12)] rounded-[24px] p-6 hover:shadow-[0_12px_24px_rgba(26,86,219,0.05)] transition-all flex flex-col justify-between min-h-[160px] w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
                      <div>
                        <h4 className="font-syne font-extrabold text-sm text-[#1A56DB] mb-1.5">{rate.name}</h4>
                        <p className="text-xs font-semibold text-[#8EA0C0]">{rate.desc}</p>
                      </div>
                      <div className="flex justify-between items-center mt-4 pt-3 border-t border-[rgba(26,86,219,0.06)]">
                        <span className="text-xs font-bold text-[#5B6E99] uppercase tracking-wider">Per Tray</span>
                        <span className="font-syne text-xl font-black text-[#1A56DB]">{rate.price}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Pan India Rates Special Features */}
                <div className="bg-white border border-[rgba(26,86,219,0.12)] rounded-[32px] p-8">
                  <h3 className="font-syne text-base font-extrabold text-[#1A56DB] mb-6 uppercase tracking-wider text-center">Special Features</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                    {[
                      { title: 'Precision Engineering & Perfect Fit', desc: 'Sub-millimeter thermoformed margins matching clinical structures.' },
                      { title: 'High Clarity & Superior Comfort', desc: 'Invisible layouts designed for pleasant day-to-day dental wear.' },
                      { title: 'Hygienic Packaging & Timely Delivery', desc: 'Sterilized boxing systems shipped on time directly to practices.' }
                    ].map((srv) => (
                      <div key={srv.title} className="bg-[rgba(26,86,219,0.02)] border border-[rgba(26,86,219,0.05)] rounded-2xl p-5">
                        <h4 className="font-syne font-extrabold text-sm text-[#1A56DB] mb-2">{srv.title}</h4>
                        <p className="text-[0.78rem] font-medium text-[#5B6E99] leading-relaxed">{srv.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
            {activeTab === 'pan_india_rates' && (
              <div className="space-y-12">
                {/* Content for Pan India Rates */}
              </div>
            )}

            {/* BONUS PACKAGE */}
            {activeTab === 'bonus_package' && (
              <div className="relative w-full max-w-5xl mx-auto rounded-[32px] overflow-hidden shadow-[0_24px_50px_rgba(26,86,219,0.15)] flex flex-col md:flex-row min-h-[400px] lg:min-h-[480px] border border-[rgba(26,86,219,0.12)]">
                {/* Background Image */}
                <img 
                  src={thailandImage} 
                  alt="Thailand Tour" 
                  className="absolute inset-0 w-full h-full object-cover object-right transition-transform duration-1000 hover:scale-105" 
                />
                
                {/* White Gradient Overlay (fades from left to right) */}
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent w-full md:w-[70%]" />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent md:hidden" />
                
                {/* Content */}
                <div className="relative z-10 w-full md:w-[55%] p-10 lg:p-14 flex flex-col items-start justify-center text-left">
                  <div className="bg-[#1A56DB] text-[#D5E100] px-5 py-2 rounded-full font-bold text-xs tracking-[1.5px] uppercase mb-6 shadow-md inline-flex items-center gap-2">
                    <Award size={16} /> Exclusive Bonus Offer
                  </div>
                  
                  <h3 className="font-syne text-4xl lg:text-[3.5rem] font-extrabold text-[#1A56DB] mb-6 leading-[1.1]">
                    Thailand Tour<br />
                    <span className="relative inline-block mt-2">
                      Package
                      <span className="absolute -bottom-2 left-0 w-full h-1.5 bg-[#D5E100]"></span>
                    </span>
                  </h3>
                  
                  <p className="text-[#5B6E99] font-semibold text-lg lg:text-xl leading-relaxed max-w-md mb-8">
                    Every 10th case of a complex package, you can get a <br className="hidden lg:block" />
                    <span className="relative inline-block text-[#1A56DB] font-extrabold">
                      Thailand tour package
                      <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-[#D5E100]"></span>
                    </span> free.
                  </p>
                  
                  <a href="https://haloaligner-smart-dental-aligner-po.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-center text-sm font-bold transition-all bg-[#1A56DB] text-white shadow-[0_8px_25px_rgba(26,86,219,0.3)] hover:bg-[#2563EB] hover:-translate-y-0.5">
                    Claim Your Bonus <ChevronRight size={18} />
                  </a>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Global Features Banner */}
        <div className="mt-16 bg-[#1A56DB] rounded-[32px] p-8 lg:p-10 text-white relative overflow-hidden shadow-[0_24px_50px_rgba(26,86,219,0.2)]">
          <div className="absolute -top-[100px] -right-[100px] w-[300px] h-[300px] bg-[rgba(255,255,255,0.05)] rounded-full blur-[40px] pointer-events-none" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center sm:text-left relative z-10">
            {[
              { icon: '💎', title: 'Precision Fit', desc: 'Bio-compatible polymer layouts.' },
              { icon: '⚡', title: 'Fast Turnaround', desc: 'Direct manufacturing ensures record delivery times.' },
              { icon: '📅', title: 'Timely Delivery', desc: 'Optimized logistics directly to your clinic address.' },
              { icon: '📦', title: 'Hygienic Seal', desc: 'Hermetically sealed clinical grade kit packaging.' }
            ].map((feat) => (
              <div key={feat.title} className="flex flex-col items-center sm:items-start">
                <span className="text-[2rem] mb-3">{feat.icon}</span>
                <h4 className="font-syne font-extrabold text-sm mb-1 text-[#D5E100]">{feat.title}</h4>
                <p className="text-[rgba(255,255,255,0.6)] text-[0.72rem] font-medium leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-8 border-t border-[rgba(255,255,255,0.1)] flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-bold relative z-10 text-[rgba(255,255,255,0.85)]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-ping" />
              Now Serving Pan India & others.
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6">
              <span>Call: <a href="tel:09827274882" className="text-[#D5E100] underline hover:text-white transition-colors">09827274882</a></span>
              <span>Email: <a href="mailto:customercare@haloaligner.com" className="text-[#D5E100] underline hover:text-white transition-colors">customercare@haloaligner.com</a></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
