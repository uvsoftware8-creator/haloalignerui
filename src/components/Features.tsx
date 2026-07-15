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

      {/* ---- DESKTOP LAYOUT (lg+) ---- */}
      <div className="hidden lg:grid grid-cols-12 gap-6 items-stretch max-w-7xl mx-auto">
        {/* LEFT COLUMN: Model Image */}
        <div className="col-span-5 flex justify-start items-end z-10">
          <motion.img
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            src={pricingModel}
            alt="Smiling model showing clear aligner results"
            className="absolute left-0 bottom-0 w-[35vw] max-w-[480px] h-full object-cover object-left-bottom mix-blend-multiply"
            style={{ WebkitMaskImage: 'linear-gradient(to right, black 75%, transparent 100%)', maskImage: 'linear-gradient(to right, black 75%, transparent 100%)' }}
          />
        </div>

        {/* RIGHT COLUMN: Text, Cards, Phone Mockup */}
        <div className="col-span-7 w-full z-20">
          <div className="grid grid-cols-12 gap-6 items-center">
            {/* Text and Features Cards */}
            <div className="col-span-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="text-left flex flex-col items-start"
              >
                <span className="section-tag !py-0.5 !px-2 !text-[0.55rem] !mb-1.5">Why Choose Us?</span>
                <h2 className="section-title !text-3.5xl !leading-tight !mb-1 text-left">Advanced aligners<br />Accessible pricing</h2>
                <p className="section-sub !text-[0.82rem] !leading-normal !mb-2 text-left">Everything you need for a perfect smile — without the endless clinic visits or premium price tag.</p>
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
                      <h3 className="font-syne text-[0.85rem] font-extrabold mb-0.5 text-[#1A56DB]">{f.title}</h3>
                      <p className="text-[#5B6E99] text-[0.76rem] leading-normal">{f.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Phone Mockup */}
            <div className="col-span-4 flex items-center justify-center">
              <div className="relative w-[220px] h-[510px]">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                  className="w-full h-full bg-[#B3C6FF] p-[3px] rounded-[38px] shadow-[0_24px_48px_rgba(26,86,219,0.18),0_0_0_5px_rgba(26,86,219,0.05)] relative overflow-hidden animate-[tilt_6s_ease-in-out_infinite]"
                >
                  <div className="w-full h-full bg-[#1A56DB] rounded-[35px] p-[4px] relative overflow-hidden">
                    <div className="w-full h-full bg-[#FFFCE0] rounded-[31px] overflow-hidden flex flex-col relative">
                      <div className="w-[80px] h-[16px] bg-[#1A56DB] rounded-[0_0_12px_12px] mx-auto absolute top-0 left-1/2 -translate-x-1/2 z-20" />

                      {/* Central Portal — full screen */}
                      <div className="flex-1 px-3 pt-8 pb-3 flex flex-col items-center text-center">
                        {/* Blue header bar */}
                        <div className="w-full bg-[#1A56DB] rounded-[10px] py-2 mb-3 flex flex-col items-center">
                          <span className="text-[#FFFF00] font-extrabold text-[0.52rem] tracking-[0.18em]">CENTRAL PORTAL</span>
                          <span className="text-white font-syne font-extrabold text-[0.9rem] tracking-widest leading-none">HALOALIGNER</span>
                        </div>

                        <p className="text-[0.32rem] font-bold text-[#1A56DB] mb-4 opacity-60 uppercase tracking-wider">Smart Aligner Management System</p>

                        <div className="w-full text-left mb-2">
                          <div className="text-[0.42rem] font-bold text-[#1A56DB] mb-0.5 uppercase tracking-wide">Email / Username</div>
                          <div className="bg-white border border-[rgba(26,86,219,0.25)] rounded-[5px] p-1.5 flex items-center gap-1.5 shadow-sm">
                            <span className="text-[0.5rem] opacity-60">✉️</span>
                            <span className="text-[0.5rem] text-[#1A56DB] font-medium">Superadmin</span>
                          </div>
                        </div>

                        <div className="w-full text-left mb-3">
                          <div className="text-[0.42rem] font-bold text-[#1A56DB] mb-0.5 uppercase tracking-wide">Password</div>
                          <div className="bg-white border border-[rgba(26,86,219,0.25)] rounded-[5px] p-1.5 flex items-center gap-1.5 shadow-sm">
                            <span className="text-[0.5rem] opacity-60">🔒</span>
                            <span className="text-[0.5rem] text-[#1A56DB] font-medium flex-1 tracking-widest">••••••••</span>
                            <span className="text-[0.5rem] opacity-60">👁️</span>
                          </div>
                        </div>

                        <button className="w-full bg-[#1A56DB] text-white font-bold text-[0.58rem] py-2 rounded-[5px] mb-2 shadow-[0_3px_8px_rgba(26,86,219,0.3)]">Login to Portal →</button>

                        <div className="flex gap-1.5 w-full">
                          <button className="flex-1 border border-[rgba(26,86,219,0.3)] bg-white/70 text-[#1A56DB] text-[0.38rem] font-bold py-1 rounded-[4px] flex items-center justify-center gap-0.5">🏥 Clinic Reg.</button>
                          <button className="flex-1 border border-[rgba(26,86,219,0.3)] bg-white/70 text-[#1A56DB] text-[0.38rem] font-bold py-1 rounded-[4px]">Forgot Pass?</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

              </div>
            </div>
          </div>

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
              <h3 className="font-syne text-[0.92rem] font-extrabold text-white mb-0.5">100% Orthodontist Directed</h3>
              <p className="text-[rgba(255,255,255,0.7)] text-[0.76rem] leading-normal">Every case reviewed and monitored by licensed orthodontists. Your safety and results are always our first priority.</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ---- MOBILE LAYOUT (below lg) ---- */}
      <div className="lg:hidden">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <span className="section-tag !py-0.5 !px-2.5 !text-[0.5rem] !mb-2">Advanced Aligners</span>
          <h2 className="font-syne font-extrabold text-[#1A56DB] leading-tight mb-2" style={{ fontSize: 'clamp(1.6rem, 7vw, 2.2rem)' }}>
            Precision fit.<br /><span className="text-[#1A56DB]">Confident smile.</span>
          </h2>
          <p className="text-[#5B6E99] text-[0.8rem] leading-relaxed max-w-[260px] mx-auto">
            Smart aligner treatment designed around your smile goals.
          </p>
        </motion.div>

        <div className="relative flex justify-center mb-8" style={{ height: '360px' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative w-[200px] h-[350px] z-10"
          >
            <div className="w-full h-full bg-[#B3C6FF] p-[2.5px] rounded-[30px] shadow-[0_15px_35px_rgba(26,86,219,0.2),0_0_0_3px_rgba(26,86,219,0.08)] relative overflow-hidden">
              <div className="w-full h-full bg-[#1A56DB] rounded-[27px] p-[3px] relative overflow-hidden">
                <div className="w-full h-full bg-[#FFFCE0] rounded-[24px] overflow-hidden flex flex-col relative">
                  <div className="w-[50px] h-[12px] bg-[#1A56DB] rounded-[0_0_8px_8px] mx-auto absolute top-0 left-1/2 -translate-x-1/2 z-20" />

                  {/* Central Portal — full screen */}
                  <div className="flex-1 px-2.5 pt-6 pb-3 flex flex-col items-center text-center">
                    {/* Top blue header bar */}
                    <div className="w-full bg-[#1A56DB] rounded-[8px] py-1.5 mb-3 flex flex-col items-center">
                      <span className="text-[#FFFF00] font-extrabold text-[0.5rem] tracking-[0.15em]">CENTRAL PORTAL</span>
                      <span className="text-white font-syne font-extrabold text-[0.75rem] tracking-widest leading-none">HALOALIGNER</span>
                    </div>

                    <p className="text-[0.3rem] font-bold text-[#1A56DB] mb-3 opacity-70">SMART ALIGNER MANAGEMENT SYSTEM</p>

                    <div className="w-full text-left mb-2">
                      <div className="text-[0.38rem] font-bold text-[#1A56DB] mb-0.5 uppercase tracking-wide">Email / Username</div>
                      <div className="bg-white border border-[rgba(26,86,219,0.25)] rounded-[4px] px-1.5 py-1 flex items-center gap-1 shadow-sm">
                        <span className="text-[0.45rem] opacity-60">✉️</span>
                        <span className="text-[0.45rem] text-[#1A56DB] font-medium">Superadmin</span>
                      </div>
                    </div>

                    <div className="w-full text-left mb-3">
                      <div className="text-[0.38rem] font-bold text-[#1A56DB] mb-0.5 uppercase tracking-wide">Password</div>
                      <div className="bg-white border border-[rgba(26,86,219,0.25)] rounded-[4px] px-1.5 py-1 flex items-center gap-1 shadow-sm">
                        <span className="text-[0.45rem] opacity-60">🔒</span>
                        <span className="text-[0.45rem] text-[#1A56DB] font-medium flex-1 tracking-widest">••••••••</span>
                        <span className="text-[0.45rem] opacity-60">👁️</span>
                      </div>
                    </div>

                    <button className="w-full bg-[#1A56DB] text-white font-bold text-[0.5rem] py-1.5 rounded-[4px] mb-2 shadow-[0_2px_6px_rgba(26,86,219,0.3)]">Login to Portal →</button>

                    <div className="flex gap-1 w-full">
                      <button className="flex-1 border border-[rgba(26,86,219,0.3)] bg-white/60 text-[#1A56DB] text-[0.32rem] font-bold py-0.5 rounded-[3px] flex items-center justify-center gap-0.5">🏥 Clinic Reg.</button>
                      <button className="flex-1 border border-[rgba(26,86,219,0.3)] bg-white/60 text-[#1A56DB] text-[0.32rem] font-bold py-0.5 rounded-[3px]">Forgot Pass?</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="flex flex-col mb-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="flex items-center gap-3 py-3 border-b border-[rgba(26,86,219,0.08)] last:border-0"
            >
              <div className="w-9 h-9 shrink-0 bg-[#D5E100] rounded-[10px] flex items-center justify-center text-base shadow-[0_2px_8px_rgba(213,225,0,0.25)]">
                {f.icon}
              </div>
              <div className="flex-1">
                <h3 className="font-syne text-[0.82rem] font-extrabold text-[#1A56DB] mb-0.5">{f.title}</h3>
                <p className="text-[#5B6E99] text-[0.7rem] leading-normal">{f.desc}</p>
              </div>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1A56DB" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 opacity-40">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative bg-[#1A56DB] rounded-[20px] overflow-hidden flex items-end"
          style={{ minHeight: '170px' }}
        >
          <div
            className="absolute left-[-20px] bottom-[-20px] rounded-full bg-[#D5E100]"
            style={{ width: '180px', height: '180px', opacity: 0.25 }}
          />

          <img
            src={pricingModel}
            alt="Smiling model"
            className="absolute left-0 bottom-0 z-10"
            style={{
              height: '170px',
              width: 'auto',
              objectFit: 'contain',
              objectPosition: 'bottom left',
            }}
          />

          <div className="relative z-20 ml-[42%] pr-4 py-5 flex flex-col gap-3">
            <div className="flex items-start gap-2">
              <div className="w-8 h-8 bg-[#D5E100] rounded-[8px] flex items-center justify-center text-sm shrink-0 mt-0.5">
                👨‍⚕️
              </div>
              <div>
                <h3 className="font-syne text-[0.9rem] font-extrabold text-white leading-tight">100%<br />Orthodontist Directed</h3>
                <p className="text-[rgba(255,255,255,0.75)] text-[0.65rem] leading-normal mt-1">Every case reviewed by licensed orthodontists.</p>
              </div>
            </div>
            <button className="bg-white text-[#1A56DB] font-syne font-extrabold text-[0.7rem] rounded-full px-4 py-1.5 flex items-center gap-1 w-fit">
              Learn More
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#1A56DB" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
