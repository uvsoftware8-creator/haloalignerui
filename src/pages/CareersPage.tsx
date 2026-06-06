import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, MapPin, Mail, ArrowUpRight, GraduationCap } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const jobs = [
  {
    title: 'Senior 3D Treatment Planner',
    type: 'Full-time',
    location: 'Mumbai, MH (Hybrid / Remote)',
    req: 'MDS / BDS / Dental Technician with 3+ years experience in CAD/CAM aligner setups.',
    desc: 'Perform dental segmentation, clinical staging, and diagnostic planning using digital dental tools.'
  },
  {
    title: 'Clinical Support Executive',
    type: 'Full-time',
    location: 'Mumbai, MH (In-Office)',
    req: 'BDS / MDS or Allied Health degree. Excellent clinical communication skills.',
    desc: 'Liaise directly with partnering dental clinics, doctors, and orthodontists to review setups and approvals.'
  },
  {
    title: 'Orthodontic Sales Specialist',
    type: 'Full-time',
    location: 'Pune / Mumbai (Field)',
    req: '2+ years experience in dental sales or pharmaceutical sales.',
    desc: 'Grow partner clinic networks, introduce white-label manufacturing workflows to dental labs and private practices.'
  }
];

export default function CareersPage() {
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
              <span className="section-tag bg-[rgba(255,255,255,0.55)] border-[rgba(255,255,255,0.65)]">Join Us</span>
              <h1 className="section-title text-[clamp(2.4rem,5vw,4.5rem)] mb-6">Build the future of<br/><span className="text-[#3B82F6]">digital orthodontics.</span></h1>
              <p className="section-sub mx-auto max-w-2xl text-[#5B6E99]">Work at the intersection of dentistry, 3D technology, and patient care. Grow your skills in a fast-paced clinical tech environment.</p>
            </motion.div>
          </div>

          {/* Job Listings */}
          <div className="space-y-6 mb-20">
            {jobs.map((job, idx) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-[rgba(255,255,255,0.85)] border border-[rgba(255,255,255,0.65)] backdrop-blur-xl rounded-[24px] p-8 shadow-[0_12px_24px_rgba(26,86,219,0.05)] hover:shadow-[0_20px_40px_rgba(26,86,219,0.1)] transition-shadow duration-300 flex flex-col lg:flex-row justify-between lg:items-center gap-6"
              >
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="inline-flex items-center gap-1.5 bg-[#EFF6FF] border border-[rgba(37,99,235,0.1)] text-[#1A56DB] px-3.5 py-1 rounded-full text-[0.7rem] font-bold uppercase tracking-wider">
                      <Briefcase size={12} /> {job.type}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-[#5B6E99] text-xs font-semibold">
                      <MapPin size={13} /> {job.location}
                    </span>
                  </div>
                  <h2 className="font-syne text-xl font-extrabold text-[#1A56DB]">{job.title}</h2>
                  <p className="text-[#5B6E99] text-sm font-medium max-w-2xl">{job.desc}</p>
                  
                  <div className="flex items-start gap-2 pt-2 text-xs font-semibold text-[#8EA0C0]">
                    <GraduationCap size={15} className="shrink-0 text-[#2563EB]" />
                    <span><strong>Required:</strong> {job.req}</span>
                  </div>
                </div>

                <a 
                  href="mailto:mishraom2326@gmail.com?subject=Job Application: Senior 3D Treatment Planner" 
                  className="bg-[#1A56DB] text-[#D5E100] px-6 py-4 rounded-xl font-bold text-sm shadow-[0_4px_12px_rgba(26,86,219,0.2)] transition-all hover:bg-[#2563EB] hover:-translate-y-0.5 inline-flex items-center gap-1.5 self-start lg:self-auto"
                >
                  Apply Now <ArrowUpRight size={16} />
                </a>
              </motion.div>
            ))}
          </div>

          {/* Hiring Contact Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-[rgba(255,255,255,0.85)] border border-[rgba(255,255,255,0.65)] backdrop-blur-xl rounded-[32px] p-10 shadow-[0_24px_48px_rgba(26,86,219,0.1)] text-center max-w-3xl mx-auto"
          >
            <div className="w-16 h-16 bg-[#1A56DB] rounded-2xl flex items-center justify-center text-[#D5E100] mb-6 mx-auto shadow-md">
              <Mail size={28} />
            </div>
            <h2 className="font-syne text-2xl font-extrabold text-[#1A56DB] mb-3">Don't see your role?</h2>
            <p className="text-[#5B6E99] text-sm font-medium mb-6">
              We are always looking for passionate orthodontic technicians, software developers, and clinical managers. Drop your resume in our inbox!
            </p>
            <a 
              href="mailto:mishraom2326@gmail.com" 
              className="text-[#2563EB] font-bold text-lg hover:underline"
            >
              mishraom2326@gmail.com
            </a>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
