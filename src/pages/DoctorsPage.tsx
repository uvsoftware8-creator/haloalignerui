import React from 'react';
import { motion } from 'motion/react';
import { Award, CheckCircle, ShieldCheck, Stethoscope } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const doctors = [
  {
    name: 'Dr. Amit Sharma',
    role: 'Chief Clinical Officer',
    specialty: 'MDS - Orthodontics & Dentofacial Orthopedics',
    experience: '12+ Years Experience',
    bio: 'Specializes in advanced clear aligner mechanics and digital treatment setups. Dr. Sharma oversees final plan approvals for all complex cases.',
  },
  {
    name: 'Dr. Priya Patel',
    role: 'Lead Treatment Planner',
    specialty: 'BDS, DDS - Digital Orthodontics Specialist',
    experience: '8+ Years Experience',
    bio: 'Expert in CAD/CAM dental planning and 3D precision alignment simulations. Priya ensures optimal tray sequence intervals for comfortable movement.',
  },
  {
    name: 'Dr. Rohan Mehta',
    role: 'Clinical Support Director',
    specialty: 'MDS - Orthodontist & Implantologist',
    experience: '10+ Years Experience',
    bio: 'Dedicated to doctor communications and clinic integration. Dr. Rohan handles troubleshooting and clinical adjustments during treatment plans.',
  }
];

export default function DoctorsPage() {
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
              <span className="section-tag bg-[rgba(255,255,255,0.55)] border-[rgba(255,255,255,0.65)]">Clinical Board</span>
              <h1 className="section-title text-[clamp(2.4rem,5vw,4.5rem)] mb-6">Expert direction for<br/><span className="text-[#3B82F6]">guaranteed results.</span></h1>
              <p className="section-sub mx-auto max-w-2xl text-[#5B6E99]">Our aligner plans are designed, checked, and approved exclusively by certified orthodontists to ensure safe, effective, and predictable tooth movement.</p>
            </motion.div>
          </div>

          {/* Doctor Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            {doctors.map((doc, idx) => (
              <motion.div
                key={doc.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.1 }}
                className="bg-[rgba(255,255,255,0.85)] border border-[rgba(255,255,255,0.65)] backdrop-blur-xl rounded-[32px] p-8 shadow-[0_24px_48px_rgba(26,86,219,0.1)] hover:-translate-y-1.5 transition-transform duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-16 h-16 bg-[#1A56DB] rounded-full flex items-center justify-center text-[#D5E100] mb-6 shadow-md">
                    <Stethoscope size={28} />
                  </div>
                  <h2 className="font-syne text-2xl font-extrabold text-[#1A56DB] mb-1">{doc.name}</h2>
                  <div className="text-xs font-bold text-[#2563EB] uppercase tracking-wider mb-4">{doc.role}</div>
                  
                  <div className="bg-[#EFF6FF] border border-[rgba(37,99,235,0.1)] rounded-xl p-4.5 mb-6">
                    <div className="text-xs font-bold text-[#1A56DB] flex items-center gap-1.5 mb-1.5">
                      <Award size={14} /> Qualifications
                    </div>
                    <div className="text-xs font-semibold text-[#5B6E99] leading-relaxed">{doc.specialty}</div>
                    <div className="text-[0.68rem] font-bold text-[#8EA0C0] mt-1.5 uppercase tracking-wide">{doc.experience}</div>
                  </div>

                  <p className="text-[#5B6E99] text-[0.88rem] leading-[1.70] font-medium mb-6">
                    {doc.bio}
                  </p>
                </div>
                
                <div className="border-t border-[rgba(26,86,219,0.1)] pt-4 flex items-center gap-2 text-[0.72rem] font-bold text-[#1a56db]">
                  <CheckCircle size={14} className="text-[#1a56db]" /> Licensed Board Certified
                </div>
              </motion.div>
            ))}
          </div>

          {/* Process Quality banner */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-[#1A56DB] rounded-[32px] p-8 lg:p-12 text-center text-white relative overflow-hidden shadow-[0_20px_50px_rgba(26,86,219,0.25)]"
          >
            <div className="absolute -top-[100px] -right-[100px] w-[300px] h-[300px] bg-[rgba(255,255,255,0.06)] rounded-full blur-[40px] pointer-events-none" />
            <div className="flex flex-col items-center max-w-3xl mx-auto">
              <ShieldCheck size={48} className="text-[#D5E100] mb-6 animate-pulse" />
              <h2 className="font-syne text-2xl lg:text-3xl font-extrabold mb-4">100% Doctor-Directed Care</h2>
              <p className="text-[rgba(255,255,255,0.7)] text-sm lg:text-base leading-[1.75] font-medium">
                Unlike completely remote or automated aligner startups, HALOALIGNER mandates a licensed orthodontist review for every single case plan. This eliminates risk of joint damage, bite issues, and root shortening.
              </p>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
