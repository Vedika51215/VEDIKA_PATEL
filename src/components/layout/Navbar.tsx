'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        scrolled ? 'bg-[#0a0a0a]/85 backdrop-blur-md border-[#222] py-4' : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link href="/" className="font-mono text-xl font-bold tracking-widest text-white">
          Vedika<span className="text-[#e50914]">.</span>Patel
        </Link>
        <ul className="hidden md:flex gap-8">
          {['About', 'Skills', 'Projects', 'Certifications', 'Contact'].map((item) => (
            <li key={item}>
              <Link 
                href={`#${item.toLowerCase()}`} 
                className="text-gray-400 text-sm tracking-widest uppercase hover:text-white hover:text-shadow-[0_0_8px_rgba(229,9,20,0.8)] transition-all"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}
