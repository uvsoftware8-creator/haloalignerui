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
        <path d="M12 2C8.5 2 6 4.5 6 7c0 1.5.5 3 1 4.5C8 14 8 17 8 19c0 1.1.9 2 2 2s2-.9 2-2v-2c0-1.1.9-2 2-2s2 .9 2 2v2c0 1.1.9 2 2 2s2-.9 2-2c0-2 0-5 1-7.5.5-1.5 1-3 1-4.5C22 4.5 19.5 2 16 2c-1 0-2 .4-4 .4S13 2 12 2z"/>
      </svg>
    ),
    label: 'Straighter', sub: 'Teeth',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1A56DB" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 6h16M4 10h16M4 14h10"/>
      </svg>
    ),
    label: 'Improved', sub: 'Bite',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1A56DB" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="4"/>
        <path d="M6 20v-2a6 6 0 0 1 12 0v2"/>
      </svg>
    ),
    label: 'Enhanced', sub: 'Facial Aesthetics',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1A56DB" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
    label: 'Boosted', sub: 'Confidence',
  },
];

const features = [
  { emoji: '✦', title: 'Invisible Fit', desc: 'Virtually undetectable clear aligners that let you smile confidently.' },
  { emoji: '🚀', title: 'Faster Deliveries', desc: 'Get your custom aligners delivered to your doorstep in record time.' },
  { emoji: '+', title: 'In-Clinic Delivery', desc: 'Prefer a professional hand-off? Opt for in-clinic delivery and dedicated care.' },
  { emoji: '📅', title: 'Customised Plans', desc: 'Reduce the number of trays and treatment duration with a plan tailored to you.' },
];

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-[#D5E100]">

      {/* MAIN HERO */}
      <div className="relative" style={{ paddingTop: '54px', minHeight: '560px' }}>

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
          style={{ left: '33%', right: '27%', top: '54px', bottom: '20px', pointerEvents: 'none' }}
        >
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.88 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
            style={{ position: 'relative', width: '380px', height: '380px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center' }}
          >
            {/* 3D PEDESTAL STAGE */}
            <div
              style={{
                position: 'absolute',
                bottom: '10px',
                width: '320px',
                height: '120px',
                zIndex: 0,
              }}
            >
              {/* Pedestal floor shadow */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '-12px',
                  left: '10%',
                  width: '80%',
                  height: '35px',
                  borderRadius: '50%',
                  background: 'rgba(0, 0, 0, 0.12)',
                  filter: 'blur(8px)',
                  zIndex: 0,
                }}
              />
              
              {/* Pedestal 3D cylinder wall */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '0',
                  left: '0',
                  width: '100%',
                  height: '50px',
                  borderRadius: '0 0 160px 160px / 0 0 25px 25px',
                  background: 'linear-gradient(to bottom, #BFCD00, #A2B000)',
                  boxShadow: 'inset 0 -5px 12px rgba(0, 0, 0, 0.08)',
                  zIndex: 1,
                }}
              />
              
              {/* Pedestal Highlighted Top Face */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '25px',
                  left: '0',
                  width: '100%',
                  height: '50px',
                  borderRadius: '50%',
                  background: '#E2F018',
                  borderBottom: '2px solid #BFCD00',
                  boxShadow: 'inset 0 2px 4px rgba(255, 255, 255, 0.4), 0 3px 6px rgba(0, 0, 0, 0.06)',
                  zIndex: 2,
                }}
              />
            </div>

            {/* Case: positioned to rest on top of the pedestal */}
            <img
              src={caseWithAligner}
              alt="HaloAligner clear aligner in open case"
              style={{
                position: 'relative',
                zIndex: 3,
                width: '82%',
                height: 'auto',
                display: 'block',
                marginBottom: '42px', // offsets it vertically to sit on top of the pedestal
                filter: 'drop-shadow(0 12px 25px rgba(0,0,0,0.15))',
              }}
            />
          </motion.div>
        </div>

        {/* Benefit icons: far right edge, vertically centered */}
        <div className="absolute right-5 top-1/2 -translate-y-1/2 z-20 hidden lg:flex flex-col gap-4">
          {benefits.map((b, i) => (
            <motion.div
              key={b.label}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
              className="flex items-center gap-2"
            >
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 border-2 border-white/80"
                style={{ background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(8px)' }}
              >
                {b.icon}
              </div>
              <div>
                <div style={{ color: '#111', fontWeight: 700, fontSize: '0.82rem', lineHeight: 1.2, textShadow: '0 1px 4px rgba(255,255,255,0.6)' }}>{b.label}</div>
                <div style={{ color: '#333', fontWeight: 500, fontSize: '0.7rem', textShadow: '0 1px 4px rgba(255,255,255,0.6)' }}>{b.sub}</div>
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
            className="text-[#1a3a6e] font-medium leading-relaxed mb-8"
            style={{ fontSize: '0.95rem', maxWidth: '320px' }}
          >
            Orthodontist-directed, custom-made aligners<br />for a straighter smile and better confidence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.26 }}
            className="flex flex-wrap gap-3"
          >
            <a
              href="#cta"
              className="inline-flex items-center gap-2 bg-[#1A56DB] text-white rounded-full font-bold shadow-[0_6px_22px_rgba(26,86,219,0.38)] hover:-translate-y-0.5 hover:bg-[#2563EB] transition-all"
              style={{ padding: '0.75rem 1.5rem', fontSize: '0.85rem' }}
            >
              Book Your Consultation →
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
                style={{ objectPosition: '30% 0%' }} 
              />
              {/* Gradient blend to yellow on the left edge of the photo */}
              <div
                className="absolute inset-y-0 left-0 w-16 pointer-events-none"
                style={{ background: 'linear-gradient(to right, #D5E100, transparent)' }}
              />
            </div>

            {/* Aligner Case + Pedestal on the left half, overlapping the model photo */}
            <div 
              className="absolute left-[5%] bottom-0 flex flex-col items-center justify-end"
              style={{ width: '220px', height: '260px' }}
            >
              {/* 3D Pedestal on Mobile */}
              <div style={{ position: 'absolute', bottom: '10px', width: '200px', height: '60px', zIndex: 0 }}>
                {/* Pedestal floor shadow */}
                <div style={{ position: 'absolute', bottom: '-6px', left: '10%', width: '80%', height: '20px', borderRadius: '50%', background: 'rgba(0, 0, 0, 0.1)', filter: 'blur(5px)' }} />
                
                {/* Pedestal 3D cylinder wall */}
                <div style={{ position: 'absolute', bottom: '0', left: '0', width: '100%', height: '28px', borderRadius: '0 0 100px 100px / 0 0 14px 14px', background: 'linear-gradient(to bottom, #BFCD00, #A2B000)' }} />
                
                {/* Pedestal Highlighted Top Face */}
                <div style={{ position: 'absolute', bottom: '14px', left: '0', width: '100%', height: '28px', borderRadius: '50%', background: '#E2F018', borderBottom: '1px solid #BFCD00' }} />
              </div>

              {/* Aligner Case on Mobile */}
              <img
                src={caseWithAligner}
                alt="HaloAligner clear aligner in open case"
                style={{
                  position: 'relative',
                  zIndex: 1,
                  width: '80%',
                  height: 'auto',
                  display: 'block',
                  marginBottom: '24px', // offsets it to sit on top of the pedestal
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
                className="flex items-center gap-2.5"
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 border border-white/60 shadow-sm"
                  style={{ background: 'rgba(255,255,255,0.45)', backdropFilter: 'blur(4px)' }}
                >
                  {b.icon}
                </div>
                <div>
                  <div style={{ color: '#1A56DB', fontWeight: 800, fontSize: '0.82rem', lineHeight: 1.2 }}>{b.label}</div>
                  <div style={{ color: '#1a3a6e', fontWeight: 600, fontSize: '0.72rem' }}>{b.sub}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* BOTTOM STRIP */}
      <div
        className="relative z-10"
        style={{ borderTop: '1px solid rgba(26,86,219,0.1)', background: 'rgba(240,248,160,0.55)' }}
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
                  className="rounded-2xl p-4 flex flex-col gap-2 border hover:shadow-md transition-shadow"
                  style={{ background: 'rgba(255,255,255,0.72)', borderColor: 'rgba(255,255,255,0.85)' }}
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
              className="rounded-2xl p-5 flex flex-col justify-center"
              style={{
                width: '280px',
                background: '#ffffff',
                boxShadow: '0 4px 20px rgba(26,86,219,0.12)',
                border: '1px solid rgba(26,86,219,0.07)',
              }}
            >
              <div className="grid grid-cols-3 text-center">
                <div className="flex flex-col items-center px-1">
                  <span style={{ fontSize: '1.3rem' }}>😊</span>
                  <div className="font-syne font-extrabold text-[#1A56DB] leading-none mt-1" style={{ fontSize: '1.6rem' }}>
                    <Counter target={100} suffix="+" />
                  </div>
                  <div className="font-bold text-[#1A56DB] mt-1" style={{ fontSize: '0.7rem' }}>Happy Smiles</div>
                  <div className="text-[#9aaac4]" style={{ fontSize: '0.6rem' }}>And counting</div>
                </div>
                <div
                  className="flex flex-col items-center px-1"
                  style={{ borderLeft: '1px solid rgba(26,86,219,0.1)', borderRight: '1px solid rgba(26,86,219,0.1)' }}
                >
                  <span style={{ fontSize: '1.3rem' }}>🏆</span>
                  <div className="font-syne font-extrabold leading-none mt-1" style={{ fontSize: '1.6rem', color: '#c5a800' }}>4.9/5</div>
                  <div className="font-bold text-[#1A56DB] mt-1" style={{ fontSize: '0.7rem' }}>Top Rated</div>
                  <div className="text-[#9aaac4]" style={{ fontSize: '0.6rem' }}>By our patients</div>
                </div>
                <div className="flex flex-col items-center px-1">
                  <span style={{ fontSize: '1.3rem' }}>📊</span>
                  <div className="font-syne font-extrabold text-[#1A56DB] leading-none mt-1" style={{ fontSize: '1.6rem' }}>
                    <Counter target={100} suffix="%" />
                  </div>
                  <div className="font-bold text-[#1A56DB] mt-1" style={{ fontSize: '0.7rem' }}>Orthodontist</div>
                  <div className="text-[#9aaac4]" style={{ fontSize: '0.6rem' }}>Directed</div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
