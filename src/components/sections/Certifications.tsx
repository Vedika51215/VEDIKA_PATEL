'use client';

import { motion } from 'framer-motion';

const certifications = [
  {
    domain: 'Ethical Hacking',
    year: 'Mar 2026',
    name: 'Ethical Hacking Course',
    issuer: 'Tutedude · TD-VEDI-EH-1600',
    color: 'bg-[#e50914]'
  },
  {
    domain: 'AI & ML',
    year: 'Feb 2026',
    name: 'Artificial Intelligence & Machine Learning',
    issuer: 'Microsoft · FICE (20-hour course)',
    color: 'bg-[#0891b2]'
  },
  {
    domain: 'Azure AI',
    year: 'Apr 2026',
    name: 'Natural Language Processing with Azure AI Services (AI-3003)',
    issuer: 'Microsoft · FICE',
    color: 'bg-[#1d4ed8]'
  },
  {
    domain: 'Azure AI',
    year: 'Apr 2026',
    name: 'Computer Vision Solutions with Azure AI Vision',
    issuer: 'Microsoft · FICE',
    color: 'bg-[#7c3aed]'
  },
  {
    domain: 'Generative AI',
    year: 'Apr 2026',
    name: 'Generative AI Models in Azure Machine Learning',
    issuer: 'Microsoft · FICE',
    color: 'bg-[#0891b2]'
  }
];

export default function Certifications() {
  return (
    <section id="certifications" className="relative z-10 py-32 px-6 md:px-20 border-t border-[#222]">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-[#e50914] font-mono text-sm tracking-[0.2em] uppercase mb-4 flex items-center gap-3">
            <span className="w-8 h-px bg-[#e50914]" /> Credentials
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight stranger-text lowercase">Certifications</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2px] bg-[#222] border border-[#222]">
          {certifications.map((cert, i) => (
            <motion.div 
              key={cert.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#111] p-8 flex flex-col group relative overflow-hidden transition-all duration-300 hover:border-[#e50914]"
            >
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#e50914] transition-all duration-300 group-hover:w-full" />
              
              <div className="flex justify-between items-start mb-6">
                <span className={`font-mono text-[10px] tracking-widest uppercase px-3 py-1 text-white ${cert.color}`}>
                  {cert.domain}
                </span>
                <span className="font-mono text-xs text-gray-500 tracking-widest">
                  {cert.year}
                </span>
              </div>
              
              <h3 className="text-lg font-bold mb-2">{cert.name}</h3>
              <p className="font-mono text-xs text-gray-500 flex-1 mb-6">
                {cert.issuer}
              </p>
              
              <a href="#" className="font-mono text-xs text-[#e50914] tracking-widest uppercase flex items-center gap-2 group-hover:gap-4 transition-all">
                ⬇ Download Certificate
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
