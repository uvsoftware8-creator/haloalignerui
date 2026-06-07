import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/src/lib/utils';
import { ShieldAlert, Award, Sparkles, CheckCircle2, ChevronRight, Package, Box } from 'lucide-react';

export default function Pricing() {
  const [activeTab, setActiveTab] = useState<'bhubaneswar' | 'odisha' | 'rates'>('bhubaneswar');

  const bhubaneswarPackages = [
    {
      title: 'Lite Package',
      subtitle: 'Suitable for mild corrections',
      trays: 'Upto 14 Pairs of Trays',
      refinements: '5 Pairs Refinements Free',
      prices: { ECO: '₹10,000', Plus: '₹16,000', Premium: '₹25,000' },
      color: 'from-green-500 to-emerald-600',
    },
    {
      title: 'Moderate Package',
      subtitle: 'Suitable for medium corrections',
      trays: 'Upto 26 Pairs of Trays',
      refinements: '7 Pairs Refinements Free',
      prices: { ECO: '₹19,500', Plus: '₹29,500', Premium: '₹42,500' },
      color: 'from-blue-500 to-indigo-600',
      featured: true,
    },
    {
      title: 'Complex Package',
      subtitle: 'Suitable for severe corrections',
      trays: 'Unlimited Trays',
      refinements: '10 Pairs Refinements Free',
      prices: { ECO: '₹60,500', Plus: '₹95,000', Premium: '₹1,29,000' },
      color: 'from-purple-500 to-violet-600',
    },
  ];

  const odishaPackages = [
    {
      title: 'Lite Package',
      subtitle: 'Suitable for mild corrections',
      trays: 'Upto 14 Pairs of Trays',
      refinements: '5 Pairs Refinements Free',
      prices: { ECO: '₹16,400', Plus: '₹22,500', Premium: '₹29,000' },
      color: 'from-green-500 to-emerald-600',
    },
    {
      title: 'Moderate Package',
      subtitle: 'Suitable for medium corrections',
      trays: 'Upto 26 Pairs of Trays',
      refinements: '7 Pairs Refinements Free',
      prices: { ECO: '₹29,500', Plus: '₹40,000', Premium: '₹54,000' },
      color: 'from-blue-500 to-indigo-600',
      featured: true,
    },
    {
      title: 'Complex Package',
      subtitle: 'Suitable for severe corrections',
      trays: 'Unlimited Trays',
      refinements: '10 Pairs Refinements Free',
      prices: { ECO: '₹85,000', Plus: '₹1,00,000', Premium: '₹1,45,000' },
      color: 'from-purple-500 to-violet-600',
    },
  ];

  const categoryFeatures = {
    Premium: ['Top Quality & Alignment', 'Crystal Clear Material', 'Maximum Durability', 'Superior Comfort', 'Long-lasting Performance'],
    Plus: ['Medium Quality Alignment', 'Excellent Clarity', 'Reliable Strength', 'Cost-effective Solution'],
    ECO: ['Decent Quality Alignment', 'Budget-friendly Plan', 'Functional & Effective', 'Suitable for Basic Cases']
  };

  return (
    <section id="pricing" className="bg-[#F9FAF0] py-28 px-6 md:px-15 relative overflow-hidden">
      <div className="absolute -top-[300px] -left-[300px] w-[700px] h-[700px] bg-[rgba(213,225,0,0.15)] rounded-full blur-[90px] pointer-events-none" />

      <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-tag bg-[rgba(255,255,255,0.8)] border border-[rgba(26,86,219,0.15)]">Pricing Guide</span>
          <h2 className="section-title">Clear, structured packages</h2>
          <p className="section-sub mx-auto">Select the plan that fits your clinical requirements. Doctor-directed aligners with transparent pricing.</p>
        </motion.div>

        {/* Custom Tab Selector */}
        <div className="flex flex-wrap justify-center gap-2.5 mt-10 bg-[rgba(26,86,219,0.05)] border border-[rgba(26,86,219,0.1)] p-1.5 rounded-2xl max-w-lg mx-auto">
          {[
            { id: 'bhubaneswar', label: 'Bhubaneswar Packages' },
            { id: 'odisha', label: 'Odisha Packages' },
            { id: 'rates', label: 'Per Aligner Rates' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={cn(
                "px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-300",
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
            {activeTab !== 'rates' ? (
              // Packages Grid
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
                {(activeTab === 'bhubaneswar' ? bhubaneswarPackages : odishaPackages).map((pkg) => (
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

                      {/* Tier Pricing Grid */}
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

                    <a
                      href="#contact"
                      className={cn(
                        "block w-full py-4 rounded-xl text-center text-sm font-bold transition-all flex items-center justify-center gap-1.5",
                        pkg.featured
                          ? "bg-[#1A56DB] text-white shadow-[0_8px_20px_rgba(26,86,219,0.25)] hover:bg-[#2563EB] hover:-translate-y-0.5"
                          : "bg-transparent text-[#1A56DB] border-2 border-[rgba(26,86,219,0.15)] hover:border-[#1A56DB]"
                      )}
                    >
                      Choose Plan <ChevronRight size={16} />
                    </a>
                  </div>
                ))}
              </div>
            ) : (
              // Per Aligner / Tray Rates
              <div className="space-y-8">
                {/* Tiers list */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
                  {[
                    { tier: 'Premium', quality: 'Top Quality', prices: { bhubaneswar: '₹800 / Aligner', odisha: '₹1,000 / Tray' }, features: categoryFeatures.Premium, color: 'from-amber-500 to-amber-600', icon: '🏆' },
                    { tier: 'Plus', quality: 'Medium Quality', prices: { bhubaneswar: '₹550 / Aligner', odisha: '₹750 / Tray' }, features: categoryFeatures.Plus, color: 'from-blue-500 to-blue-600', icon: '✨' },
                    { tier: 'ECO', quality: 'Decent Quality', prices: { bhubaneswar: '₹350 / Aligner', odisha: '₹550 / Tray' }, features: categoryFeatures.ECO, color: 'from-gray-400 to-gray-500', icon: '👍' },
                  ].map((item) => (
                    <div key={item.tier} className="bg-white border border-[rgba(26,86,219,0.12)] rounded-[32px] p-8 flex flex-col justify-between hover:shadow-[0_24px_48px_rgba(26,86,219,0.08)] transition-all">
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-[1.8rem]">{item.icon}</span>
                          <span className="text-[0.68rem] font-bold text-[#8EA0C0] uppercase tracking-wider">{item.quality}</span>
                        </div>
                        <h3 className="font-syne text-2xl font-extrabold text-[#1A56DB] mb-5">{item.tier} Aligner</h3>
                        
                        <div className="space-y-2.5 mb-6.5 border-b border-[rgba(26,86,219,0.08)] pb-5">
                          <div className="flex justify-between items-center text-xs">
                            <span className="text-[#5B6E99] font-semibold">Bhubaneswar Rate:</span>
                            <span className="font-syne font-extrabold text-[#1A56DB]">{item.prices.bhubaneswar}</span>
                          </div>
                          <div className="flex justify-between items-center text-xs">
                            <span className="text-[#5B6E99] font-semibold">Odisha Rate:</span>
                            <span className="font-syne font-extrabold text-[#1A56DB]">{item.prices.odisha}</span>
                          </div>
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

                      <a
                        href="#contact"
                        className="block w-full py-3.5 rounded-xl text-center text-xs font-bold transition-all bg-transparent text-[#1A56DB] border-2 border-[rgba(26,86,219,0.15)] hover:border-[#1A56DB] flex items-center justify-center gap-1.5"
                      >
                        Inquire Rates <ChevronRight size={14} />
                      </a>
                    </div>
                  ))}
                </div>

                {/* Add-on Services Section */}
                <div className="bg-white border border-[rgba(26,86,219,0.12)] rounded-[32px] p-8 shadow-[0_12px_30px_rgba(26,86,219,0.03)]">
                  <h3 className="font-syne text-xl font-extrabold text-[#1A56DB] mb-6 flex items-center gap-2">
                    <Package size={22} className="text-[#2563EB]" /> Add-On Services & Special Features
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                      { title: 'Template Tray', desc: 'Precision fabrication and clinical staging support.', prices: { bhubaneswar: '₹500 / Tray', odisha: '₹750 / Tray' } },
                      { title: 'Premium Packaging', desc: 'Hygienic, sealed, and professionally branded case kits.', prices: { bhubaneswar: '₹1,000 / Box', odisha: '₹1,000 / Box' } },
                      { title: 'Halo 4D Aligner', desc: 'Advanced 4D polymer setup (Available in Odisha).', prices: { bhubaneswar: 'N/A', odisha: '₹1,500 / Tray' } },
                    ].map((srv) => (
                      <div key={srv.title} className="bg-[rgba(26,86,219,0.02)] border border-[rgba(26,86,219,0.05)] rounded-2xl p-5 hover:bg-white hover:border-[rgba(26,86,219,0.15)] transition-all">
                        <h4 className="font-syne font-extrabold text-sm text-[#1A56DB] mb-1">{srv.title}</h4>
                        <p className="text-[0.7rem] font-semibold text-[#8EA0C0] mb-4.5">{srv.desc}</p>
                        
                        <div className="space-y-1.5 border-t border-[rgba(26,86,219,0.06)] pt-3 text-[0.72rem] font-bold">
                          <div className="flex justify-between items-center text-[#5B6E99]">
                            <span>Bhubaneswar:</span>
                            <span className="text-[#1A56DB]">{srv.prices.bhubaneswar}</span>
                          </div>
                          <div className="flex justify-between items-center text-[#5B6E99]">
                            <span>Odisha:</span>
                            <span className="text-[#1A56DB]">{srv.prices.odisha}</span>
                          </div>
                        </div>
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
              { icon: '💎', title: 'Precision Fit', desc: 'CE & ISO certified bio-compatible polymer layouts.' },
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
              Now Serving Odisha & Gujarat (Bhubaneswar)
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6">
              <span>Call: <a href="tel:+919777453388" className="text-[#D5E100] underline hover:text-white transition-colors">+91-9777453388</a></span>
              <span>Email: <a href="mailto:info@halodentist.com" className="text-[#D5E100] underline hover:text-white transition-colors">info@halodentist.com</a></span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
