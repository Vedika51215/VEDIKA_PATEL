'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="relative z-10 py-32 px-6 md:px-20 border-t border-[#222]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-[#e50914] font-mono text-sm tracking-[0.2em] uppercase mb-4 flex items-center gap-3">
            <span className="w-8 h-px bg-[#e50914]" /> About Me
          </div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8">
            Building at the <br />
            <span className="text-[#e50914] italic">intersection</span><br />
            of security & code.
          </h2>
          
          <div className="flex gap-10 mt-12">
            <div className="border-l-2 border-[#e50914] pl-4">
              <div className="font-mono text-4xl text-white font-bold">3+</div>
              <div className="text-xs text-gray-500 uppercase tracking-widest mt-2">Projects Built</div>
            </div>
            <div className="border-l-2 border-[#e50914] pl-4">
              <div className="font-mono text-4xl text-white font-bold">6+</div>
              <div className="text-xs text-gray-500 uppercase tracking-widest mt-2">Skills Learned</div>
            </div>
            <div className="border-l-2 border-[#e50914] pl-4">
              <div className="font-mono text-4xl text-white font-bold">∞</div>
              <div className="text-xs text-gray-500 uppercase tracking-widest mt-2">Curiosity</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-gray-400 text-lg leading-relaxed space-y-6"
        >
          <p>
            I'm Vedika Patel, a Computer Engineering student with a deep interest in
            Cyber Security and modern web development. I believe in building systems
            that are both powerful and secure.
          </p>
          <p>
            Currently exploring networking fundamentals, ethical hacking tools like
            Nmap and Wireshark, and crafting web experiences with clean code. Every day
            I'm pushing the boundaries of what I know.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
