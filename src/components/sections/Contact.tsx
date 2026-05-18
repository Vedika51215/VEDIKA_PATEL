'use client';

import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="relative z-10 py-32 px-6 md:px-20 border-t border-[#222]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-[#e50914] font-mono text-sm tracking-[0.2em] uppercase mb-4 flex items-center gap-3">
            <span className="w-8 h-px bg-[#e50914]" /> Contact
          </div>
          <h2 className="text-5xl md:text-7xl font-bold leading-none tracking-tighter">
            Let's<br />work<br />
            <span className="text-[#e50914] italic">together.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col border-t border-[#222]"
        >
          <a href="mailto:vedikapatel540@gmail.com" className="flex justify-between items-center py-6 border-b border-[#222] group hover:text-[#e50914] transition-colors">
            <div>
              <div className="font-mono text-[10px] tracking-widest text-gray-500 uppercase mb-2">Email</div>
              <div className="text-xl font-bold">vedikapatel540@gmail.com</div>
            </div>
            <div className="text-2xl transform group-hover:translate-x-2 transition-transform">↗</div>
          </a>
          
          <a href="https://www.linkedin.com/in/vedika-patel-1193a330b/" target="_blank" rel="noopener noreferrer" className="flex justify-between items-center py-6 border-b border-[#222] group hover:text-[#e50914] transition-colors">
            <div>
              <div className="font-mono text-[10px] tracking-widest text-gray-500 uppercase mb-2">LinkedIn</div>
              <div className="text-xl font-bold">linkedin.com/in/vedika-patel</div>
            </div>
            <div className="text-2xl transform group-hover:translate-x-2 transition-transform">↗</div>
          </a>
          
          <a href="https://github.com/Vedika51215" target="_blank" rel="noopener noreferrer" className="flex justify-between items-center py-6 border-b border-[#222] group hover:text-[#e50914] transition-colors">
            <div>
              <div className="font-mono text-[10px] tracking-widest text-gray-500 uppercase mb-2">GitHub</div>
              <div className="text-xl font-bold">github.com/Vedika51215</div>
            </div>
            <div className="text-2xl transform group-hover:translate-x-2 transition-transform">↗</div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
