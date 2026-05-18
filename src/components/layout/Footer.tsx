'use client';

export default function Footer() {
  return (
    <footer className="relative z-10 py-6 px-6 md:px-20 border-t border-[#222] bg-[#050505] flex flex-col md:flex-row justify-between items-center gap-4">
      <div className="font-mono text-xs text-gray-500 tracking-widest">
        © 2026 Vedika Patel
      </div>
      <div className="font-mono text-[10px] text-gray-600 uppercase tracking-[0.3em]">
        Designed & built with <span className="text-[#e50914]">♥</span>
      </div>
    </footer>
  );
}
