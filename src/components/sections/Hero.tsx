'use client';

import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative z-10 flex min-h-screen items-center justify-between px-6 md:px-20 py-20 gap-10 flex-col md:flex-row">
      <div className="flex-1 max-w-2xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3 text-red-600 font-mono text-sm tracking-[0.2em] uppercase mb-6"
        >
          <Terminal size={16} /> Cyber Security & Dev
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, filter: 'blur(10px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold leading-none tracking-tighter uppercase stranger-text mb-6"
        >
          Vedika <br/>
          <span className="text-white -webkit-text-stroke-0 text-shadow-none font-sans tracking-tight">Patel</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-gray-400 text-lg max-w-md leading-relaxed mb-10"
        >
          I engineer secure digital environments and hunt vulnerabilities in the upside down of the web.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex gap-4"
        >
          <a href="#projects" className="px-8 py-3 bg-[#e50914] text-white font-mono uppercase text-sm font-bold tracking-widest hover:bg-red-700 hover:shadow-[0_0_20px_rgba(229,9,20,0.6)] transition-all rounded">
            Enter Lab
          </a>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="flex-1 w-full max-w-sm relative"
        style={{ perspective: 1000 }}
      >
        <div className="relative w-full aspect-[3/4] border-2 border-[#e50914] rounded-lg animate-[float_6s_ease-in-out_infinite] flex items-center justify-center overflow-hidden bg-black/50 backdrop-blur-sm shadow-[0_0_20px_rgba(230,51,41,0.5),inset_0_0_30px_rgba(230,51,41,0.3)]">
          <Image 
            src="/profile.jpeg" 
            alt="Vedika Patel" 
            fill 
            className="object-cover object-[center_20%] grayscale contrast-125 hover:grayscale-0 transition-all duration-700 opacity-80"
          />
          
          {/* Noise Overlay */}
          <div className="absolute inset-0 z-20 opacity-30 mix-blend-overlay bg-[url('data:image/svg+xml;utf8,<svg_viewBox=%220_0_200_200%22_xmlns=%22http://www.w3.org/2000/svg%22><filter_id=%22noiseFilter%22><feTurbulence_type=%22fractalNoise%22_baseFrequency=%220.65%22_numOctaves=%223%22_stitchTiles=%22stitch%22/></filter><rect_width=%22100%25%22_height=%22100%25%22_filter=%22url(%23noiseFilter)%22/></svg>')] bg-repeat pointer-events-none" />
        </div>
      </motion.div>
    </section>
  );
}
