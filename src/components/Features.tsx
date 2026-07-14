import React from 'react';
import { motion } from 'motion/react';
import pricingModel from '../assets/pricing-model.png';

const features = [
  { icon: '✨', title: 'Invisible Fit', desc: 'Virtually undetectable clear aligners that allows your patient to smile confidently throughout your treatment.' },
  { icon: '🚀', title: 'Faster Deliveries', desc: 'Get your customized aligners delivered to your doorstep in record time with our optimized logistics.' },
  { icon: '🏥', title: 'Confidentiality', desc: 'Confidential and encrypted data to ensure your clinical data safety' },
  { icon: '🛠️', title: 'Customised Plans', desc: 'Reduce the number of trays and treatment duration with a plan fully tailored to your specific goals.' },
];

export default function Features() {
  return (
    <section id="features" className="bg-[#F9FAF0] py-12 md:py-16 px-6 md:px-15 relative overflow-hidden">
      <div className="absolute -top-[200px] -right-[200px] w-[600px] h-[600px] bg-[rgba(213,225,0,0.22)] rounded-full blur-[80px] pointer-events-none" />
      <div className="grid grid-cols-12 gap-8 lg:gap-6 items-stretch max-w-7xl mx-auto">
        {/* LEFT COLUMN: Model Image */}
        <div className="col-span-12 lg:col-span-5 flex justify-start items-end z-10 relative lg:static h-[320px] sm:h-[420px] lg:h-auto">
          <motion.img
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            src={pricingModel}
            alt="Smiling model showing clear aligner results"
<<<<<<< HEAD
            className="absolute -left-6 bottom-0 w-[45vw] h-full object-cover object-left-bottom rounded-[24px] lg:rounded-none lg:-left-15 lg:bottom-0 lg:w-[42vw] lg:max-w-[480px] lg:h-full mix-blend-multiply"
            style={{ WebkitMaskImage: 'linear-gradient(to right, black 75%, transparent 100%)', maskImage: 'linear-gradient(to right, black 75%, transparent 100%)' }}
          />
        </div>

        {/* RIGHT COLUMN: Text, Cards, Phone Mockup */}
        <div className="col-span-12 lg:col-span-7 w-full z-20 mt-2 lg:mt-0 lg:-ml-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Text and Features Cards */}
            <div className="lg:col-span-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="text-left flex flex-col items-start"
              >
                <span className="section-tag !py-0.5 !px-2 !text-[0.55rem] !mb-1.5">Why Choose Us?</span>
                <h2 className="section-title !text-xl lg:!text-3.5xl !leading-tight !mb-1 text-left">Advanced aligners<br />Accessible pricing</h2>
                <p className="section-sub !text-[0.75rem] lg:!text-[0.82rem] !leading-normal !mb-2 text-left">Everything you need for a perfect smile — without the endless clinic visits or premium price tag.</p>
              </motion.div>

              <div className="flex flex-col gap-3 mt-4">
                {features.map((f, i) => (
                  <motion.div
                    key={f.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: i * 0.05 }}
                    className="flex items-start gap-2.5 border-b border-[rgba(26,86,219,0.08)] pb-3 last:border-0"
                  >
                    <div className="w-6.5 h-6.5 shrink-0 bg-[#D5E100] rounded-md flex items-center justify-center text-xs shadow-[0_2px_6px_rgba(213,225,0,0.2)]">
                      {f.icon}
                    </div>
                    <div>
                      <h3 className="font-syne text-[0.78rem] lg:text-[0.85rem] font-extrabold mb-0.5 text-[#1A56DB]">{f.title}</h3>
                      <p className="text-[#5B6E99] text-[0.7rem] lg:text-[0.76rem] leading-normal">{f.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Phone Mockup on the right */}
            <div className="hidden lg:flex lg:col-span-4 items-center justify-center pt-6 lg:pt-0">
              <div className="relative w-[220px] h-[440px]">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                  className="w-full h-full bg-[#1A56DB] rounded-[32px] shadow-[0_24px_48px_rgba(26,86,219,0.18),0_0_0_5px_rgba(26,86,219,0.05)] relative overflow-hidden animate-[tilt_6s_ease-in-out_infinite]"
                >
                  <div className="absolute inset-[5px] bg-[#E6F200] rounded-[26px] overflow-hidden">
                    <div className="w-[70px] h-[18px] bg-[#1A56DB] rounded-[0_0_11px_11px] mx-auto" />
                    <div className="p-4 px-3">
                      <div className="font-syne font-extrabold text-[0.78rem] text-[#1A56DB] mb-3">My Smile Progress 📊</div>
                      {[
                        { label: 'Upper Alignment', width: '78%' },
                        { label: 'Lower Alignment', width: '65%' },
                        { label: 'Spacing Correction', width: '90%' },
                      ].map((row) => (
                        <div key={row.label} className="bg-[rgba(255,255,255,0.65)] rounded-[10px] p-[8px_10px] mb-2.5">
                          <div className="text-[0.62rem] font-bold text-[#1A56DB] mb-1">{row.label}</div>
                          <div className="h-1.5 bg-[rgba(26,86,219,0.15)] rounded-[2px] overflow-hidden">
                            <div className="h-full bg-[#1A56DB] rounded-[2px] " style={{ width: row.width }} />
                          </div>
                        </div>
                      ))}
                      <div className="bg-[#1A56DB] rounded-[10px] p-[8px_12px] mt-3 flex items-center gap-1.5">
                        <span className="text-[#D5E100] font-bold text-[0.74rem]">🦷 Aligner #8 Active</span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Badges around phone - visible on all screens with responsive offsets */}
                <div className="absolute bg-white rounded-[9px] p-[6px_8px] shadow-[0_6px_18px_rgba(26,86,219,0.08)] text-[0.52rem] font-bold text-[#1A56DB] whitespace-nowrap flex items-center gap-[4px] left-[-50px] xl:left-[-72px] top-[16%] animate-flt scale-[1.0] sm:scale-110 z-30">
                  <span className="text-xs">🏆</span>
                  <div>
                    <div className="font-extrabold text-[0.56rem]">Top Rated</div>
                    <div className="text-[0.5rem] text-[#5B6E99]">4.9 / 5.0 stars</div>
                  </div>
                </div>
                <div className="absolute bg-white rounded-[9px] p-[6px_8px] shadow-[0_6px_18px_rgba(26,86,219,0.08)] text-[0.52rem] font-bold text-[#1A56DB] whitespace-nowrap flex items-center gap-[4px] right-[-40px] xl:right-[-62px] top-[44%] animate-flt [animation-delay:1.5s] scale-[1.0] sm:scale-110 z-30">
                  <span className="text-xs">📱</span>
                  <div>
                    <div className="font-extrabold text-[0.56rem]">Virtual Check-ins</div>
                    <div className="text-[0.5rem] text-[#5B6E99]">Remote monitoring</div>
                  </div>
                </div>
                <div className="absolute bg-white rounded-[9px] p-[6px_8px] shadow-[0_6px_18px_rgba(26,86,219,0.08)] text-[0.52rem] font-bold text-[#1A56DB] whitespace-nowrap flex items-center gap-[4px] left-[-40px] xl:left-[-58px] bottom-[16%] animate-flt [animation-delay:1s] scale-[1.0] sm:scale-110 z-30">
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
            className="mt-3.5 bg-[#1A56DB] rounded-[16px] p-3.5 flex flex-row items-center gap-3.5 text-left"
          >
            <div className="w-7 h-7 bg-[#D5E100] rounded-md flex items-center justify-center text-sm shrink-0 shadow-[0_2px_6px_rgba(213,225,0,0.2)]">
              👨‍⚕️
            </div>
            <div>
              <h3 className="font-syne text-[0.78rem] lg:text-[0.92rem] font-extrabold text-white mb-0.5">100% Orthodontist Directed</h3>
              <p className="text-[rgba(255,255,255,0.7)] text-[0.66rem] lg:text-[0.76rem] leading-normal">Every case reviewed and monitored by licensed orthodontists. Your safety and results are always our first priority.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
