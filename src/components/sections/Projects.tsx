'use client';

import { motion } from 'framer-motion';

const projects = [
  {
    title: 'NGO Management System',
    description: 'A full-stack platform to help NGOs manage volunteers, donations, and operational records efficiently — built with real-world impact in mind.',
    tags: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'Cyber Security Lab',
    description: 'Hands-on exploration of networking security: Nmap scanning, Wireshark packet analysis, and web vulnerability fundamentals in a safe lab environment.',
    tags: ['Nmap', 'Wireshark', 'Python'],
  },
  {
    title: 'Portfolio',
    description: 'A cinematic, retro-futuristic personal portfolio showcasing my skills, projects, and design sensibility — built with Next.js & Three.js.',
    tags: ['Next.js', 'React', 'Three.js'],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative z-10 py-32 px-6 md:px-20 border-t border-[#222]">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-between items-end mb-16"
        >
          <div>
            <div className="text-[#e50914] font-mono text-sm tracking-[0.2em] uppercase mb-4 flex items-center gap-3">
              <span className="w-8 h-px bg-[#e50914]" /> Work
            </div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight stranger-text lowercase">Selected Projects</h2>
          </div>
          <div className="font-mono text-sm text-gray-500 hidden md:block">03 Projects</div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[2px] bg-[#222] border border-[#222]">
          {projects.map((project, i) => (
            <motion.div 
              key={project.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-[#111] p-10 flex flex-col group relative overflow-hidden transition-all duration-300 hover:border-[#e50914]"
            >
              <div className="absolute left-0 top-0 w-1 h-0 bg-[#e50914] transition-all duration-300 group-hover:h-full" />
              
              <div className="font-mono text-xs text-[#e50914] tracking-widest mb-6">
                0{i + 1} / 03
              </div>
              <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed flex-1">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-8">
                {project.tags.map(tag => (
                  <span key={tag} className="font-mono text-[10px] tracking-widest uppercase px-3 py-1 border border-[#333] text-gray-400">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
