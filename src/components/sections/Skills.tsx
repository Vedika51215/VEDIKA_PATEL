'use client';

import { motion } from 'framer-motion';

const skills = [
  { name: 'HTML', icon: '🌐', level: 90 },
  { name: 'CSS', icon: '🎨', level: 85 },
  { name: 'JavaScript', icon: '⚡', level: 70 },
  { name: 'Cyber Security', icon: '🔐', level: 75 },
  { name: 'Networking', icon: '🌍', level: 80 },
  { name: 'Python', icon: '🐍', level: 65 },
];

export default function Skills() {
  return (
    <section id="skills" className="relative z-10 py-32 px-6 md:px-20 border-t border-[#222]">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-[#e50914] font-mono text-sm tracking-[0.2em] uppercase mb-4 flex items-center gap-3">
            <span className="w-8 h-px bg-[#e50914]" /> Expertise
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight stranger-text lowercase">Skills & Tools</h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-[1px] bg-[#222] border border-[#222]">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#111] p-8 flex flex-col items-center justify-center gap-4 hover:bg-[#e50914] group transition-colors duration-300 cursor-default"
            >
              <div className="text-4xl mb-2">{skill.icon}</div>
              <div className="font-mono text-sm tracking-widest uppercase font-bold text-center group-hover:text-white transition-colors">
                {skill.name}
              </div>
              <div className="w-full h-1 bg-[#222] mt-4 overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                  className="h-full bg-[#e50914] group-hover:bg-white"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
