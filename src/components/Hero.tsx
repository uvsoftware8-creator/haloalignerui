import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import caseWithAligner from '../assets/case-with-aligner.png';
import heroModel from '../assets/hero-model.jpg';

const Counter = ({ target, suffix = '', duration = 1800 }: { target: number; suffix?: string; duration?: number }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(ease * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration]);
  return <span>{count.toLocaleString()}{suffix}</span>;
};

const benefits = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1A56DB" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C8.5 2 6 4.5 6 7c0 1.5.5 3 1 4.5C8 14 8 17 8 19c0 1.1.9 2 2 2s2-.9 2-2v-2c0-1.1.9-2 2-2s2 .9 2 2v2c0 1.1.9 2 2 2s2-.9 2-2c0-2 0-5 1-7.5.5-1.5 1-3 1-4.5C22 4.5 19.5 2 16 2c-1 0-2 .4-4 .4S13 2 12 2z" />
      </svg>
    ),
    label: 'Straighter', sub: 'Teeth',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1A56DB" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 6h16M4 10h16M4 14h10" />
      </svg>
    ),
    label: 'Improved', sub: 'Bite',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1A56DB" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="4" />
        <path d="M6 20v-2a6 6 0 0 1 12 0v2" />
      </svg>
    ),
    label: 'Enhanced', sub: 'Facial Aesthetics',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1A56DB" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    label: 'Boosted', sub: 'Confidence',
  },
];

const features = [
  { emoji: '✨', title: 'Invisible Fit', desc: 'Virtually undetectable clear aligners that let you smile confidently.' },
  { emoji: '🚀', title: 'Faster Deliveries', desc: 'Get your custom aligners delivered to your doorstep in record time.' },
  { emoji: '🩺', title: 'In-Clinic Delivery', desc: 'Prefer a professional hand-off? Opt for in-clinic delivery and dedicated care.' },
  { emoji: '📅', title: 'Customised Plans', desc: 'Reduce the number of trays and treatment duration with a plan tailored to you.' },
];

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-[#D5E100]">

      {/* MAIN HERO */}
      <div className="relative flex flex-col justify-between" style={{ paddingTop: '54px', minHeight: '640px' }}>

        {/* Model photo fills right ~63% — starts below navbar */}
        <div className="absolute bottom-0 right-0 hidden lg:block" style={{ left: '37%', top: '54px' }}>
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            src={heroModel}
            alt="Happy HaloAligner patient"
            className="w-full h-full object-cover"
            style={{ objectPosition: '45% 0%' }}
          />
          {/* Left gradient blend into yellow — wider since case overlaps */}
          <div
            className="absolute inset-y-0 left-0 pointer-events-none"
            style={{ width: '220px', background: 'linear-gradient(to right, #D5E100 0%, #D5E100 15%, rgba(213,225,0,0.7) 50%, transparent 100%)' }}
          />
          {/* Bottom gradient blend */}
          <div
            className="absolute inset-x-0 bottom-0 pointer-events-none h-24"
            style={{ background: 'linear-gradient(to top, #D5E100, transparent)' }}
          />
        </div>

        {/* Aligner case + stage: centered between text and model */}
        <div
          className="absolute hidden lg:flex items-center justify-center"
          style={{ left: '36%', right: '22%', top: '54px', bottom: '20px', pointerEvents: 'none' }}
        >
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.88 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}
          >
            {/* Case with aligner image */}
            <img
              src={caseWithAligner}
              alt="HaloAligner open case with aligner"
              style={{
                zIndex: 3,
                width: '280px',
                height: 'auto',
                display: 'block',
                filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.14))',
                position: 'relative',
              }}
            />

            {/* 3D PEDESTAL directly below the case */}
            <div style={{ position: 'relative', width: '240px', height: '68px', marginTop: '-55px', zIndex: 2 }}>
              {/* Pedestal Top Face (ellipse) */}
              <div
                style={{
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  width: '100%',
                  height: '36px',
                  borderRadius: '50%',
                  background: 'radial-gradient(ellipse at 38% 35%, #F2FF40, #D5E100)',
                  borderBottom: '2px solid #B8C800',
                  boxShadow: 'inset 0 3px 6px rgba(255,255,255,0.65), 0 2px 6px rgba(0,0,0,0.08)',
                  zIndex: 2,
                }}
              />
              {/* Pedestal cylinder wall */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '0',
                  left: '0',
                  width: '100%',
                  height: '48px',
                  borderRadius: '0 0 130px 130px / 0 0 20px 20px',
                  background: 'linear-gradient(to bottom, #C8D900, #9EA800)',
                  boxShadow: 'inset 0 -4px 10px rgba(0,0,0,0.12)',
                  zIndex: 1,
                }}
              />
              {/* Floor shadow */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '-8px',
                  left: '8%',
                  width: '84%',
                  height: '22px',
                  borderRadius: '50%',
                  background: 'rgba(0,0,0,0.14)',
                  filter: 'blur(7px)',
                  zIndex: 0,
                }}
              />
            </div>
          </motion.div>
        </div>

        {/* Benefit icons: far right edge, vertically centered */}
        <div className="absolute right-5 top-1/2 -translate-y-1/2 z-20 hidden lg:flex flex-col gap-5">
          {benefits.map((b, i) => (
            <motion.div
              key={b.label}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
              whileHover={{ x: -5, scale: 1.05 }}
              className="flex items-center gap-3.5 cursor-default"
            >
              <div
                className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0 bg-white border border-[rgba(26,86,219,0.1)] shadow-[0_4px_10px_rgba(0,0,0,0.06)]"
              >
                {b.icon}
              </div>
              <div className="flex flex-col">
                <span className="text-[#1A56DB] font-extrabold text-[0.8rem] leading-[1.1]">{b.label}</span>
                <span className="text-[#1a3a6e] font-extrabold text-[0.8rem] leading-[1.1]">{b.sub}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* LEFT: Text content */}
        <div
          className="relative z-10 flex flex-col justify-center px-6 md:px-10 lg:px-14 py-10 w-full lg:max-w-[44%]"
        >
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="inline-flex items-center bg-white border text-[#1A56DB] rounded-full font-extrabold uppercase w-fit shadow-sm mb-6"
            style={{ padding: '0.38rem 1rem', fontSize: '0.7rem', letterSpacing: '2px', borderColor: 'rgba(26,86,219,0.2)' }}
          >
            The Future of Orthodontics
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="font-syne font-extrabold text-[#1A56DB] mb-5"
            style={{ fontSize: 'clamp(2.8rem, 5vw, 4.8rem)', lineHeight: 1.0, letterSpacing: '-2.5px' }}
          >
            Clear Aligner<br />
            <span style={{ color: '#ffffff' }}>Treatment</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18 }}
            className="text-[#1a3a6e] font-medium leading-relaxed mb-8 text-left"
            style={{ fontSize: '0.95rem', maxWidth: '450px' }}
          >
            Orthodontist-directed, custom-made aligners for a straighter smile and better confidence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.26 }}
            className="flex flex-wrap gap-3"
          >
            <a
              href="https://haloaligner-smart-dental-aligner-po.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#1A56DB] text-white rounded-full font-bold shadow-[0_6px_22px_rgba(26,86,219,0.38)] hover:-translate-y-0.5 hover:bg-[#2563EB] transition-all"
              style={{ padding: '0.75rem 1.5rem', fontSize: '0.85rem' }}
            >
              Book Your Order →
            </a>
            <a
              href="#how"
              className="inline-flex items-center gap-2 rounded-full font-bold border transition-all hover:-translate-y-0.5"
              style={{
                padding: '0.75rem 1.3rem',
                fontSize: '0.85rem',
                background: 'rgba(255,255,255,0.45)',
                borderColor: 'rgba(255,255,255,0.75)',
                color: '#1A56DB',
                backdropFilter: 'blur(6px)',
              }}
            >
              <span
                className="w-5 h-5 rounded-full flex items-center justify-center"
                style={{ background: 'rgba(26,86,219,0.12)', fontSize: '9px' }}
              >
                ▶
              </span>
              How It Works
            </a>
          </motion.div>

          {/* Mobile: Case + Model side-by-side / overlapping, exactly like desktop */}
          <div className="lg:hidden relative w-full h-[320px] mt-6 overflow-hidden">
            {/* Model photo on the right half */}
            <div className="absolute right-0 top-0 bottom-0 w-[65%]">
              <img
                src={heroModel}
                alt="Happy HaloAligner patient"
                className="w-full h-full object-cover"
                style={{ objectPosition: '50% 0%' }}
              />
              {/* Gradient blend to yellow on the left edge of the photo */}
              <div
                className="absolute inset-y-0 left-0 w-16 pointer-events-none"
                style={{ background: 'linear-gradient(to right, #D5E100, transparent)' }}
              />
            </div>

            {/* Aligner Case + Pedestal on the left half, overlapping the model photo */}
            <div
              className="absolute left-[2%] bottom-[-10px] flex flex-col items-center justify-end"
              style={{ width: '240px', height: '290px' }}
            >
              {/* 3D Pedestal on Mobile */}
              <div style={{ position: 'absolute', bottom: '10px', width: '220px', height: '70px', zIndex: 0 }}>
                {/* Pedestal floor shadow */}
                <div style={{ position: 'absolute', bottom: '-8px', left: '10%', width: '80%', height: '24px', borderRadius: '50%', background: 'rgba(0, 0, 0, 0.12)', filter: 'blur(6px)' }} />

                {/* Pedestal 3D cylinder wall */}
                <div style={{ position: 'absolute', bottom: '0', left: '0', width: '100%', height: '32px', borderRadius: '0 0 110px 110px / 0 0 16px 16px', background: 'linear-gradient(to bottom, #C8D900, #A0B000)' }} />

                {/* Pedestal Highlighted Top Face */}
                <div style={{ position: 'absolute', bottom: '16px', left: '0', width: '100%', height: '32px', borderRadius: '50%', background: 'radial-gradient(ellipse at 35% 35%, #F0FF30, #D5E100)', borderBottom: '1px solid #B8C800', boxShadow: 'inset 0 2px 4px rgba(255,255,255,0.6)' }} />
              </div>

              {/* Case with Aligner on Mobile */}
              <img
                src={caseWithAligner}
                alt="HaloAligner open case with aligner"
                style={{
                  position: 'relative',
                  zIndex: 1,
                  width: '88%',
                  height: 'auto',
                  display: 'block',
                  marginBottom: '8px',
                  filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.12))',
                }}
              />
            </div>

            {/* Bottom fade to page bg */}
            <div className="absolute inset-x-0 bottom-0 h-12 pointer-events-none" style={{ background: 'linear-gradient(to top, #D5E100, transparent)' }} />
          </div>

          {/* Mobile Benefit Icons */}
          <div className="lg:hidden grid grid-cols-2 gap-4 mt-8 px-1">
            {benefits.map((b, i) => (
              <motion.div
                key={b.label}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                whileHover={{ y: -3, scale: 1.05 }}
                className="flex items-center gap-2.5 cursor-default"
              >
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 bg-white border border-[rgba(26,86,219,0.1)] shadow-[0_2px_5px_rgba(0,0,0,0.05)]"
                >
                  {b.icon}
                </div>
                <div className="flex flex-col">
                  <span className="text-[#1A56DB] font-extrabold text-[0.74rem] leading-tight">{b.label}</span>
                  <span className="text-[#1a3a6e] font-extrabold text-[0.74rem] leading-tight">{b.sub}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* BOTTOM STRIP */}
        <div
          className="relative z-10 w-full mt-auto"
          style={{ background: 'transparent' }}
        >
          <div className="px-6 md:px-10 lg:px-14 py-5">
            <div className="flex flex-col lg:flex-row gap-3 items-stretch">

              {/* 4 Feature cards */}
              <div className="flex-1 grid grid-cols-2 sm:grid-cols-4 gap-3">
                {features.map((f, i) => (
                  <motion.div
                    key={f.title}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + i * 0.07 }}
                    whileHover={{ y: -5, scale: 1.02, boxShadow: '0 12px 24px rgba(26,86,219,0.12)' }}
                    whileTap={{ scale: 0.98 }}
                    className="rounded-2xl p-4 flex flex-col gap-2 border cursor-pointer transition-colors hover:bg-white"
                    style={{ background: 'rgba(255,255,255,0.85)', borderColor: 'rgba(255,255,255,0.95)' }}
                  >
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-[#1A56DB] text-lg"
                      style={{ background: '#D5E100', border: '2px solid rgba(26,86,219,0.15)' }}
                    >
                      {f.emoji}
                    </div>
                    <div className="font-bold text-[#1A56DB] leading-snug" style={{ fontSize: '0.8rem' }}>{f.title}</div>
                    <div className="text-[#5B6E99] leading-relaxed" style={{ fontSize: '0.7rem' }}>{f.desc}</div>
                  </motion.div>
                ))}
              </div>

              {/* Stats card */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.72 }}
                whileHover={{ y: -4, scale: 1.01, boxShadow: '0 16px 40px rgba(26,86,219,0.18)' }}
                className="rounded-2xl p-5 flex flex-col justify-center w-full lg:w-[460px] cursor-pointer"
                style={{
                  maxWidth: '460px',
                  background: '#ffffff',
                  boxShadow: '0 10px 30px rgba(26,86,219,0.12)',
                  border: '1px solid rgba(26,86,219,0.07)',
                }}
              >
                <div className="grid grid-cols-3 text-center">
                  <div className="flex flex-col items-center px-1">
                    <div className="w-8 h-8 rounded-full bg-[#D5E100] flex items-center justify-center text-sm shrink-0 mb-1.5 shadow-[0_2px_6px_rgba(213,225,0,0.2)]">
                      😊
                    </div>
                    <div className="font-syne font-extrabold text-[#1A56DB] leading-none" style={{ fontSize: '1.6rem' }}>
                      <Counter target={100} suffix="+" />
                    </div>
                    <div className="font-bold text-[#1A56DB] mt-1" style={{ fontSize: '0.7rem', lineHeight: 1.2 }}>Happy Smiles</div>
                    <div className="text-[#9aaac4]" style={{ fontSize: '0.6rem' }}>And counting</div>
                  </div>
                  <div className="flex flex-col items-center px-1">
                    <div className="w-8 h-8 rounded-full bg-[#D5E100] flex items-center justify-center text-sm shrink-0 mb-1.5 shadow-[0_2px_6px_rgba(213,225,0,0.2)]">
                      🏆
                    </div>
                    <div className="font-syne font-extrabold leading-none" style={{ fontSize: '1.6rem', color: '#c5a800' }}>4.9/5</div>
                    <div className="font-bold text-[#1A56DB] mt-1" style={{ fontSize: '0.7rem', lineHeight: 1.2 }}>Top Rated</div>
                    <div className="text-[#9aaac4]" style={{ fontSize: '0.6rem' }}>By our patients</div>
                  </div>
                  <div className="flex flex-col items-center px-1">
                    <div className="w-8 h-8 rounded-full bg-[#D5E100] flex items-center justify-center text-sm shrink-0 mb-1.5 shadow-[0_2px_6px_rgba(213,225,0,0.2)]">
                      📊
                    </div>
                    <div className="font-syne font-extrabold text-[#1A56DB] leading-none" style={{ fontSize: '1.6rem' }}>
                      <Counter target={100} suffix="%" />
                    </div>
                    <div className="font-bold text-[#1A56DB] mt-1" style={{ fontSize: '0.7rem', lineHeight: 1.2 }}>Orthodontist Directed</div>
                    <div className="text-[#9aaac4]" style={{ fontSize: '0.6rem' }}>Your safety is our priority</div>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
