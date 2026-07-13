import React from 'react';
import { motion } from 'motion/react';
import pricingModel from '../assets/pricing-model.png';

const features = [
  { icon: '✨', title: 'Invisible Fit', desc: 'Virtually undetectable clear aligners that allow you to smile confidently throughout your treatment.' },
  { icon: '🚀', title: 'Faster Deliveries', desc: 'Get your custom aligners delivered to your doorstep in record time with our optimized logistics.' },
  { icon: '🏥', title: 'In-Clinic Delivery', desc: 'Prefer a professional hand-off? Opt for in-clinic delivery and dedicated local doctor guidance.' },
  { icon: '🛠️', title: 'Customised Plans', desc: 'Reduce the number of trays and treatment duration with a plan fully tailored to your specific goals.' },
];

export default function Features() {
  return (
    <section id="features" className="bg-[#F9FAF0] py-12 md:py-16 px-6 md:px-15 relative overflow-hidden">
      <div className="absolute -top-[200px] -right-[200px] w-[600px] h-[600px] bg-[rgba(213,225,0,0.22)] rounded-full blur-[80px] pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-stretch max-w-7xl mx-auto">
        {/* LEFT COLUMN: Lady Model Portrait Card */}
        <div className="lg:col-span-6 flex justify-start items-stretch h-full z-10 self-stretch min-h-[250px] h-[280px] lg:h-auto lg:min-h-none">
          <div className="relative w-full h-full bg-gradient-to-b from-[rgba(213,225,0,0.18)] to-[rgba(213,225,0,0.03)] border border-[rgba(26,86,219,0.08)] rounded-[32px] overflow-hidden shadow-[0_16px_32px_rgba(26,86,219,0.03)] flex items-end justify-center">
            <div 
              className="w-full h-full"
              style={{ transform: 'scale(1.85) translateX(-25%)', transformOrigin: 'bottom' }}
            >
              <motion.img
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                src={pricingModel}
                alt="Smiling model showing clear aligner results"
                className="w-full h-full object-contain object-bottom"
              />
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Text, Cards, Phone Mockup */}
        <div className="lg:col-span-6 w-full z-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            {/* Text and Features Cards */}
            <div className="md:col-span-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <span className="section-tag !py-1 !px-2.5 !text-[0.62rem] !mb-2">Why Choose Us?</span>
                <h2 className="section-title !text-2xl lg:!text-3.5xl !leading-tight !mb-1.5">Advanced aligners<br />Accessible pricing</h2>
                <p className="section-sub !text-[0.82rem] !leading-normal !mb-3">Everything you need for a perfect smile — without the endless clinic visits or premium price tag.</p>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-4">
                {features.map((f, i) => (
                  <motion.div
                    key={f.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: i * 0.05 }}
                    className="bg-[rgba(255,255,255,0.45)] border border-[rgba(255,255,255,0.65)] backdrop-blur-xl rounded-[16px] p-4.5 transition-all hover:shadow-[0_15px_30px_rgba(26,86,219,0.05)]"
                  >
                    <div className="w-8 h-8 bg-[#D5E100] rounded-lg flex items-center justify-center text-base mb-2.5 shadow-[0_3px_8px_rgba(213,225,0,0.25)]">
                      {f.icon}
                    </div>
                    <h3 className="font-syne text-[0.82rem] font-extrabold mb-1 text-[#1A56DB]">{f.title}</h3>
                    <p className="text-[#5B6E99] text-[0.74rem] leading-[1.5]">{f.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Phone Mockup on the right */}
            <div className="md:col-span-4 flex items-center justify-center pt-6 md:pt-0">
              <div className="relative w-[180px] h-[360px]">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                  className="w-full h-full bg-[#1A56DB] rounded-[24px] shadow-[0_24px_48px_rgba(26,86,219,0.18),0_0_0_5px_rgba(26,86,219,0.05)] relative overflow-hidden animate-[tilt_6s_ease-in-out_infinite]"
                >
                  <div className="absolute inset-[4px] bg-[#E6F200] rounded-[20px] overflow-hidden">
                    <div className="w-[58px] h-[15px] bg-[#1A56DB] rounded-[0_0_9px_9px] mx-auto" />
                    <div className="p-3 px-2">
                      <div className="font-syne font-extrabold text-[0.64rem] text-[#1A56DB] mb-2">My Smile Progress 📊</div>
                      {[
                        { label: 'Upper Alignment', width: '78%' },
                        { label: 'Lower Alignment', width: '65%' },
                        { label: 'Spacing Correction', width: '90%' },
                      ].map((row) => (
                        <div key={row.label} className="bg-[rgba(255,255,255,0.65)] rounded-[8px] p-[6px_8px] mb-1.5">
                          <div className="text-[0.52rem] font-bold text-[#1A56DB] mb-0.5">{row.label}</div>
                          <div className="h-1 bg-[rgba(26,86,219,0.15)] rounded-[1px] overflow-hidden">
                            <div className="h-full bg-[#1A56DB] rounded-[1px] " style={{ width: row.width }} />
                          </div>
                        </div>
                      ))}
                      <div className="bg-[#1A56DB] rounded-[8px] p-[7px_9px] mt-2 flex items-center gap-1">
                        <span className="text-[#D5E100] font-bold text-[0.62rem]">🦷 Aligner #8 Active</span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Badges around phone - visible on all screens with responsive offsets */}
                <div className="absolute bg-white rounded-[9px] p-[6px_8px] shadow-[0_6px_18px_rgba(26,86,219,0.08)] text-[0.52rem] font-bold text-[#1A56DB] whitespace-nowrap flex items-center gap-[4px] left-[-42px] xl:left-[-64px] top-[16%] animate-flt scale-[0.88] sm:scale-100 z-30">
                  <span className="text-xs">🏆</span>
                  <div>
                    <div className="font-extrabold text-[0.56rem]">Top Rated</div>
                    <div className="text-[0.5rem] text-[#5B6E99]">4.9 / 5.0 stars</div>
                  </div>
                </div>
                <div className="absolute bg-white rounded-[9px] p-[6px_8px] shadow-[0_6px_18px_rgba(26,86,219,0.08)] text-[0.52rem] font-bold text-[#1A56DB] whitespace-nowrap flex items-center gap-[4px] right-[-32px] xl:right-[-54px] top-[44%] animate-flt [animation-delay:1.5s] scale-[0.88] sm:scale-100 z-30">
                  <span className="text-xs">📱</span>
                  <div>
                    <div className="font-extrabold text-[0.56rem]">Virtual Check-ins</div>
                    <div className="text-[0.5rem] text-[#5B6E99]">Remote monitoring</div>
                  </div>
                </div>
                <div className="absolute bg-white rounded-[9px] p-[6px_8px] shadow-[0_6px_18px_rgba(26,86,219,0.08)] text-[0.52rem] font-bold text-[#1A56DB] whitespace-nowrap flex items-center gap-[4px] left-[-30px] xl:left-[-48px] bottom-[16%] animate-flt [animation-delay:1s] scale-[0.88] sm:scale-100 z-30">
                  <span className="text-xs">📍</span>
                  <div>
                    <div className="font-extrabold text-[0.56rem]">Week 8 of 20</div>
                    <div className="text-[0.5rem] text-[#5B6E99]">On track!</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 100% Orthodontist Directed Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-4 bg-[#1A56DB] rounded-[16px] p-4.5 flex flex-col sm:flex-row items-start sm:items-center gap-4"
          >
            <div className="w-8 h-8 bg-[#D5E100] rounded-lg flex items-center justify-center text-base shrink-0 shadow-[0_3px_8px_rgba(213,225,0,0.25)]">
              👨‍⚕️
            </div>
            <div>
              <h3 className="font-syne text-[0.92rem] font-extrabold text-white mb-0.5">100% Orthodontist Directed</h3>
              <p className="text-[rgba(255,255,255,0.7)] text-[0.76rem] leading-[1.5]">Every case reviewed and monitored by licensed orthodontists. Your safety and results are always our first priority.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
