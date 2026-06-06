import React from 'react';
import { motion } from 'motion/react';
import { Smile, Clock, UserCheck, ShieldCheck } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const cases = [
  {
    title: 'Case 1: Dental Crowding Correction',
    duration: '6 Months Treatment',
    clinician: 'Dr. Amit Sharma',
    details: 'Resolution of severe crowding in the upper arch and minor rotation in the lower lateral incisors.',
    beforeDesc: 'Heavy dental overlapping, narrow upper arch shape.',
    afterDesc: 'Perfect arch expansion, complete rotation alignment.'
  },
  {
    title: 'Case 2: Diastema (Spacing) Closure',
    duration: '5 Months Treatment',
    clinician: 'Dr. Priya Patel',
    details: 'Closing of 3.5mm midline spacing (diastema) in the upper central incisors and alignment of canine angles.',
    beforeDesc: 'Wide central gap, aesthetic alignment issues.',
    afterDesc: 'Complete gap closure, balanced aesthetic smile line.'
  },
  {
    title: 'Case 3: Deep Overbite Realignment',
    duration: '9 Months Treatment',
    clinician: 'Dr. Rohan Mehta',
    details: 'Correction of deep vertical overlap (overbite) and alignment of anterior teeth.',
    beforeDesc: 'Upper teeth completely covering lower teeth.',
    afterDesc: 'Optimized vertical overlap, normal physiological bite.'
  }
];

export default function BeforeAfterPage() {
  return (
    <div className="min-h-screen bg-[#D5E100] relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute w-[650px] h-[650px] bg-[rgba(255,255,255,0.55)] rounded-full blur-[70px] -top-[180px] -right-[120px] animate-g1 pointer-events-none" />
      <div className="absolute w-[380px] h-[380px] bg-[rgba(184,201,0,0.45)] rounded-full blur-[70px] -bottom-[80px] left-[80px] animate-g2 pointer-events-none" />
      
      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(26,86,219,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(26,86,219,0.07)_1px,transparent_1px)] bg-[length:48px_48px] pointer-events-none" />

      <Navbar />
      
      <main className="relative z-10 pt-28 pb-20 px-6 md:px-15">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="section-tag bg-[rgba(255,255,255,0.55)] border-[rgba(255,255,255,0.65)]">Results Showcase</span>
              <h1 className="section-title text-[clamp(2.4rem,5vw,4.5rem)] mb-6">Real smile transformations,<br/><span className="text-[#3B82F6]">engineered in 3D.</span></h1>
              <p className="section-sub mx-auto max-w-2xl text-[#5B6E99]">Explore the clinical outcomes of doctor-directed aligner treatments. Our CE-certified aligners deliver visible shifts in record time.</p>
            </motion.div>
          </div>

          {/* Cases */}
          <div className="space-y-12 mb-20">
            {cases.map((c, idx) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.1 }}
                className="bg-[rgba(255,255,255,0.85)] border border-[rgba(255,255,255,0.65)] backdrop-blur-xl rounded-[32px] p-8 lg:p-10 shadow-[0_24px_48px_rgba(26,86,219,0.1)]"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  
                  {/* Case Details */}
                  <div className="lg:col-span-5 space-y-4">
                    <h2 className="font-syne text-2xl font-extrabold text-[#1A56DB]">{c.title}</h2>
                    <div className="flex flex-wrap items-center gap-4 text-xs font-bold uppercase tracking-wider text-[#2563EB]">
                      <span className="flex items-center gap-1.5"><Clock size={14} /> {c.duration}</span>
                      <span className="flex items-center gap-1.5"><UserCheck size={14} /> {c.clinician}</span>
                    </div>
                    <p className="text-[#5B6E99] text-sm leading-[1.65] font-medium pt-2">
                      {c.details}
                    </p>
                    <div className="pt-4 border-t border-[rgba(26,86,219,0.1)] flex items-center gap-2 text-xs font-extrabold text-[#1a56db]">
                      <ShieldCheck size={16} /> Clinical Staging Plan Approved
                    </div>
                  </div>

                  {/* Comparative Visual Block */}
                  <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Before Card */}
                    <div className="bg-white border border-[rgba(26,86,219,0.15)] rounded-2xl p-6 flex flex-col justify-between shadow-sm min-h-[160px]">
                      <div>
                        <div className="text-[0.65rem] font-bold text-red-500 bg-red-50 border border-[rgba(239,68,68,0.1)] px-3 py-1 rounded-full uppercase tracking-wider inline-block mb-3.5">
                          Before Treatment
                        </div>
                        <p className="text-[#5B6E99] text-sm font-semibold leading-relaxed">
                          {c.beforeDesc}
                        </p>
                      </div>
                      <div className="text-[2.2rem] font-extrabold opacity-10 font-syne text-[#1A56DB] text-right mt-2">PRE</div>
                    </div>

                    {/* After Card */}
                    <div className="bg-white border border-[rgba(213,225,0,0.4)] rounded-2xl p-6 flex flex-col justify-between shadow-sm min-h-[160px] relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-[80px] h-[80px] bg-[rgba(213,225,0,0.15)] rounded-full blur-[20px] pointer-events-none" />
                      <div>
                        <div className="text-[0.65rem] font-bold text-green-600 bg-green-50 border border-[rgba(22,163,74,0.1)] px-3 py-1 rounded-full uppercase tracking-wider inline-block mb-3.5">
                          After Alignment
                        </div>
                        <p className="text-[#1A56DB] text-sm font-bold leading-relaxed">
                          {c.afterDesc}
                        </p>
                      </div>
                      <div className="flex items-center justify-between mt-2">
                        <Smile size={20} className="text-[#D5E100] stroke-[2.5]" />
                        <div className="text-[2.2rem] font-extrabold opacity-15 font-syne text-[#1A56DB] text-right">POST</div>
                      </div>
                    </div>

                  </div>

                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
