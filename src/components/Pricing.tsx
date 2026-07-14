import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/src/lib/utils';
import { ShieldCheck, Award, Sparkles, CheckCircle2, ChevronRight, Package, Box, Stethoscope, BadgeAlert } from 'lucide-react';

export default function Pricing() {
  const [activeTab, setActiveTab] = useState<'pan_india_pkg' | 'pan_india_rates' | 'other_pkg' | 'other_cats'>('pan_india_pkg');

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
            { id: 'other_pkg', label: 'Other Packages' },
            { id: 'other_cats', label: 'Other Categories' },
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

            {/* OTHER PACKAGES */}
            {activeTab === 'other_pkg' && (
              <div className="space-y-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
                  {otherPackages.map((pkg) => (
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

                {/* Other Packages Footer Features */}
                <div className="bg-white border border-[rgba(26,86,219,0.12)] rounded-[32px] p-8">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
                    {[
                      { icon: '💎', title: 'Premium Quality Material', desc: 'Engineered with FDA-approved medical-grade dental polymers.' },
                      { icon: '⚙️', title: 'Advanced Technology', desc: 'Computerized orthodontic CAD staging animations.' },
                      { icon: '✨', title: 'Precise Finishing', desc: 'Laser-trimmed and hand-polished tray margins.' },
                      { icon: '📅', title: 'Timely Delivery', desc: 'Predictable logistics schedules for clinic partners.' }
                    ].map((feat) => (
                      <div key={feat.title} className="flex flex-col items-center">
                        <span className="text-[1.8rem] mb-2">{feat.icon}</span>
                        <h4 className="font-syne font-extrabold text-xs text-[#1A56DB] mb-1">{feat.title}</h4>
                        <p className="text-[0.72rem] text-[#5B6E99] leading-relaxed font-semibold">{feat.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* OTHER ALIGNER CATEGORIES */}
            {activeTab === 'other_cats' && (
              <div className="space-y-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
                  {[
                    {
                      tier: 'ALIGNER PREMIUM',
                      subtitle: 'Top Quality',
                      price: '₹ 800',
                      features: ['Crystal Clear Material', 'Maximum Durability', 'Superior Comfort', 'Long-lasting Performance'],
                      icon: '🏆',
                    },
                    {
                      tier: 'ALIGNER PLUS',
                      subtitle: 'Medium Quality',
                      price: '₹ 550',
                      features: ['Excellent Clarity', 'Reliable Strength', 'Cost-effective Solution'],
                      icon: '✨',
                    },
                    {
                      tier: 'ALIGNER ECO',
                      subtitle: 'Decent Quality',
                      price: '₹ 350',
                      features: ['Budget-friendly', 'Functional & Effective', 'Suitable for Basic Cases'],
                      icon: '👍',
                    },
                  ].map((item) => (
                    <div key={item.tier} className="bg-white border border-[rgba(26,86,219,0.12)] rounded-[32px] p-8 flex flex-col justify-between hover:shadow-[0_24px_48px_rgba(26,86,219,0.08)] transition-all">
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-[1.8rem]">{item.icon}</span>
                          <span className="text-[0.68rem] font-bold text-[#8EA0C0] uppercase tracking-wider">{item.subtitle}</span>
                        </div>
                        <h3 className="font-syne text-xl font-extrabold text-[#1A56DB] mb-1">{item.tier}</h3>

                        <div className="bg-[#EFF6FF] border border-[rgba(37,99,235,0.08)] rounded-xl p-4.5 mb-6.5 text-center">
                          <div className="text-[0.62rem] font-bold text-[#5B6E99] uppercase tracking-wider mb-1">Per Aligner</div>
                          <div className="font-syne text-2xl font-black text-[#1A56DB]">{item.price}</div>
                        </div>

                        <ul className="list-none text-left mb-8 flex flex-col gap-2.5">
                          {item.features.map((f) => (
                            <li key={f} className="flex items-start gap-2.5 text-xs font-semibold text-[#5B6E99]">
                              <span className="w-4 h-4 bg-[#DBEAFE] text-[#1A56DB] shrink-0 rounded-full flex items-center justify-center text-[0.55rem] font-black mt-0.5">✓</span>
                              {f}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <a href="#contact" className="block w-full py-3.5 rounded-xl text-center text-xs font-bold transition-all bg-transparent text-[#1A56DB] border-2 border-[rgba(26,86,219,0.15)] hover:border-[#1A56DB] flex items-center justify-center gap-1.5">
                        Inquire Category <ChevronRight size={14} />
                      </a>
                    </div>
                  ))}
                </div>

                {/* Add-on Services Other */}
                <div className="bg-white border border-[rgba(26,86,219,0.12)] rounded-[32px] p-8 shadow-[0_12px_30px_rgba(26,86,219,0.03)]">
                  <h3 className="font-syne text-base font-extrabold text-[#1A56DB] mb-6 uppercase tracking-wider">Add-On Services</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      { title: 'Template Tray', desc: 'Precision Fabrication Support', price: '₹ 500 per tray' },
                      { title: 'Premium Packaging', desc: 'Hygienic, Sealed & Professional box kit setup.', price: '₹ 1,000' }
                    ].map((srv) => (
                      <div key={srv.title} className="bg-[rgba(26,86,219,0.02)] border border-[rgba(26,86,219,0.05)] rounded-2xl p-5 flex justify-between items-center">
                        <div>
                          <h4 className="font-syne font-extrabold text-sm text-[#1A56DB] mb-1">{srv.title}</h4>
                          <p className="text-[0.7rem] font-semibold text-[#8EA0C0]">{srv.desc}</p>
                        </div>
                        <span className="font-syne text-base font-extrabold text-[#1A56DB] ml-4 shrink-0">{srv.price}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Why Choose Other Flyer info */}
                <div className="bg-white border border-[rgba(26,86,219,0.12)] rounded-[32px] p-8">
                  <h3 className="font-syne text-base font-extrabold text-[#1A56DB] mb-6 uppercase tracking-wider text-center">Why HALO DENTIST PRIVATE LIMITED?</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 text-center">
                    {[
                      { title: 'Advanced Thermoforming', desc: 'Using digital thermoforming machinery for absolute accuracy.' },
                      { title: 'Consistent Finishing', desc: 'Strict edge polishing routines to avoid mouth irritation.' },
                      { title: 'Strict Quality Control', desc: 'Multi-point validation of individual aligner stages.' },
                      { title: 'Timely Delivery', desc: 'Fast, secure shipping to keep treatment milestones on track.' },
                      { title: 'Professional Case Handling', desc: 'Direct planning oversight and expert clinical support.' }
                    ].map((feat) => (
                      <div key={feat.title} className="flex flex-col items-center">
                        <h4 className="font-syne font-extrabold text-xs text-[#1A56DB] mb-2">{feat.title}</h4>
                        <p className="text-[0.7rem] text-[#5B6E99] font-semibold leading-relaxed">{feat.desc}</p>
                      </div>
                    ))}
                  </div>
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
