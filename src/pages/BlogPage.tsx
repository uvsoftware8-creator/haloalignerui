import React from 'react';
import { motion } from 'motion/react';
import { Calendar, User, Clock, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const posts = [
  {
    category: 'Science',
    title: 'How Clear Aligners Actually Move Your Teeth: The Science Explained',
    excerpt: 'Explore the biomechanics behind digital orthodontics—how micro-pressure triggers bone remodeling to safely guide teeth to their ideal slots.',
    author: 'Dr. Amit Sharma',
    date: 'June 01, 2026',
    readTime: '6 min read'
  },
  {
    category: 'Technology',
    title: 'Impressions vs. Intraoral Scans: Why Precision in Planning Matters',
    excerpt: 'Intraoral 3D scanning eliminates messy molds and yields a sub-millimeter accurate dental layout. Here is how scanning impacts alignment success.',
    author: 'Dr. Priya Patel',
    date: 'May 28, 2026',
    readTime: '4 min read'
  }
];

export default function BlogPage() {
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
              <span className="section-tag bg-[rgba(255,255,255,0.55)] border-[rgba(255,255,255,0.65)]">Smile Hub</span>
              <h1 className="section-title text-[clamp(2.4rem,5vw,4.5rem)] mb-6">Insights, guides &<br/><span className="text-[#3B82F6]">orthodontic tips.</span></h1>
              <p className="section-sub mx-auto max-w-2xl text-[#5B6E99]">Stay updated with the latest clinical advice, scientific breakthroughs, and dental hygiene tips curated directly by our board of orthodontists.</p>
            </motion.div>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, idx) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.1 }}
                className="bg-[rgba(255,255,255,0.85)] border border-[rgba(255,255,255,0.65)] backdrop-blur-xl rounded-[32px] p-8 shadow-[0_24px_48px_rgba(26,86,219,0.1)] flex flex-col justify-between group hover:-translate-y-1.5 transition-transform duration-300"
              >
                <div>
                  <div className="inline-block bg-[#EFF6FF] border border-[rgba(37,99,235,0.1)] text-[#1A56DB] px-3.5 py-1.5 rounded-full text-[0.7rem] font-bold uppercase tracking-wider mb-6">
                    {post.category}
                  </div>
                  <h2 className="font-syne text-xl font-extrabold text-[#1A56DB] mb-4 group-hover:text-blue-700 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-[#5B6E99] text-sm leading-[1.65] font-medium mb-6">
                    {post.excerpt}
                  </p>
                </div>

                <div>
                  <div className="border-t border-[rgba(26,86,219,0.1)] pt-5 flex items-center justify-between text-[0.72rem] text-[#8EA0C0] font-semibold mb-6">
                    <span className="flex items-center gap-1.5"><User size={13} /> {post.author}</span>
                    <span className="flex items-center gap-1.5"><Calendar size={13} /> {post.date}</span>
                    <span className="flex items-center gap-1.5"><Clock size={13} /> {post.readTime}</span>
                  </div>

                  <a 
                    href="#" 
                    onClick={(e) => e.preventDefault()}
                    className="inline-flex items-center gap-2 text-[#1A56DB] font-bold text-sm hover:underline"
                  >
                    Read Full Article <ArrowRight size={16} />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
