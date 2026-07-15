import React from 'react';
import { motion } from 'motion/react';
import { Target, Shield, Heart, Zap, Award, Users } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function About() {
  return (
    <section id="about" className="min-h-screen bg-[#D5E100] relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute w-[650px] h-[650px] bg-[rgba(255,255,255,0.55)] rounded-full blur-[70px] -top-[180px] -right-[120px] animate-g1 pointer-events-none" />
      <div className="absolute w-[380px] h-[380px] bg-[rgba(184,201,0,0.45)] rounded-full blur-[70px] -bottom-[80px] left-[80px] animate-g2 pointer-events-none" />

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(26,86,219,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(26,86,219,0.07)_1px,transparent_1px)] bg-[length:48px_48px] pointer-events-none" />

      <div className="relative z-10 pt-28 pb-20 px-6 md:px-15">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="section-tag bg-[rgba(255,255,255,0.55)] border-[rgba(255,255,255,0.65)]">About Us</span>
              <h1 className="section-title text-[clamp(2.4rem,5vw,4.5rem)] mb-6">Redefining smiles through<br /><span className="text-[#3B82F6]">precision technology.</span></h1>
              <p className="section-sub mx-auto max-w-2xl text-[#5B6E99]">HALOALIGNER is  engineered to deliver faster, safer, and more accessible orthodontic care.</p>
            </motion.div>
          </div>

          {/* Mission & Vision Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="bg-[rgba(255,255,255,0.85)] border border-[rgba(255,255,255,0.65)] backdrop-blur-xl rounded-[32px] p-10 shadow-[0_24px_48px_rgba(26,86,219,0.1)] flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 bg-[#1A56DB] rounded-2xl flex items-center justify-center text-[#D5E100] mb-6 shadow-[0_8px_20px_rgba(26,86,219,0.15)]">
                  <Target size={26} />
                </div>
                <h2 className="font-syne text-2xl font-extrabold text-[#1A56DB] mb-4">Our Mission</h2>
                <p className="text-[#5B6E99] leading-[1.75] font-medium">
                  To empower orthodontic practitioners with premium, clear aligner manufacturing while giving patients a beautiful, comfortable, and affordable orthodontic solution directed entirely by licensed orthodontists.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="bg-[rgba(255,255,255,0.85)] border border-[rgba(255,255,255,0.65)] backdrop-blur-xl rounded-[32px] p-10 shadow-[0_24px_48px_rgba(26,86,219,0.1)] flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 bg-[#1A56DB] rounded-2xl flex items-center justify-center text-[#D5E100] mb-6 shadow-[0_8px_20px_rgba(26,86,219,0.15)]">
                  <Shield size={26} />
                </div>
                <h2 className="font-syne text-2xl font-extrabold text-[#1A56DB] mb-4">Our Commitment</h2>
                <p className="text-[#5B6E99] leading-[1.75] font-medium">
                  We use high grade bio-compatible polymers engineered to apply gentle & continuous force. Every step is thoroughly simulated in 3D and verified by senior orthodontists before the trays are printed.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Core Values Grid */}
          <div className="mb-20">
            <h2 className="font-syne text-center text-3xl font-extrabold text-[#1A56DB] mb-12">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {[
                { icon: <Zap />, title: "Precision First", desc: "Using advanced 3D scanning and sub-millimeter printing to ensure aligners fit perfectly." },
                { icon: <Users />, title: "Clinic Partnership", desc: "Helping orthodontic practices scale with fully customized white-label clear aligners." },
              ].map((val, idx) => (
                <motion.div
                  key={val.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="bg-[rgba(255,255,255,0.65)] border border-[rgba(255,255,255,0.45)] backdrop-blur-md rounded-2xl p-6.5 text-center flex flex-col items-center hover:bg-white transition-colors"
                >
                  <div className="w-12 h-12 bg-[#1A56DB] rounded-xl flex items-center justify-center text-[#D5E100] mb-4.5">
                    {val.icon}
                  </div>
                  <h3 className="font-syne font-extrabold text-base text-[#1A56DB] mb-2">{val.title}</h3>
                  <p className="text-[#5B6E99] text-xs font-semibold leading-[1.65]">{val.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
