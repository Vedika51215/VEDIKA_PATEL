'use client';

import { useState, useRef, useEffect, KeyboardEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal } from 'lucide-react';

interface HistoryItem {
  command: string;
  output: string | React.ReactNode;
}

export default function TerminalSection() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<HistoryItem[]>([
    {
      command: 'system-init',
      output: (
        <div className="text-gray-400 space-y-2">
          <p className="text-red-500 font-bold font-mono tracking-wider">
            [!] SECURE SHELL INITIALIZED - LAB ACCESS LEVEL: GUEST
          </p>
          <p>Welcome to Vedika Patel&apos;s Cyber Security &amp; Dev Lab.</p>
          <p className="text-xs">
            Type <span className="text-red-400 font-bold">help</span> to view available terminal commands.
          </p>
        </div>
      )
    }
  ]);
  const [isScanning, setIsScanning] = useState(false);
  const terminalEndRef = useRef<HTMLDivElement>(null);

  // Auto scroll to bottom of terminal
  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = async (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    let reply: string | React.ReactNode = '';

    if (!trimmedCmd) return;

    if (trimmedCmd === 'help') {
      reply = (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-1 text-gray-300 font-mono text-sm max-w-xl">
          <div><span className="text-red-500 font-bold">help</span></div>
          <div className="text-gray-500">Show available terminal commands</div>
          <div><span className="text-red-500 font-bold">about</span></div>
          <div className="text-gray-500">Display professional biography</div>
          <div><span className="text-red-500 font-bold">skills</span></div>
          <div className="text-gray-500">List technical skills &amp; experience levels</div>
          <div><span className="text-red-500 font-bold">nmap</span></div>
          <div className="text-gray-500">Simulate network vulnerability scan of this lab</div>
          <div><span className="text-red-500 font-bold">certificates</span></div>
          <div className="text-gray-500">Show active Microsoft &amp; Hacking credentials</div>
          <div><span className="text-red-500 font-bold">contact</span></div>
          <div className="text-gray-500">Get direct contact links</div>
          <div><span className="text-red-500 font-bold">clear</span></div>
          <div className="text-gray-500">Clear terminal screen output history</div>
        </div>
      );
    } else if (trimmedCmd === 'clear') {
      setHistory([]);
      setInput('');
      return;
    } else if (trimmedCmd === 'about') {
      reply = (
        <div className="text-gray-300 space-y-2 leading-relaxed">
          <p>
            <span className="text-white font-bold">Name:</span> Vedika Patel
          </p>
          <p>
            <span className="text-white font-bold">Role:</span> Computer Engineering Student, Cyber Security Analyst &amp; Web Developer
          </p>
          <p>
            <span className="text-white font-bold">Profile:</span> Passionate about building secure digital environments, auditing systems, and creating clean, premium web applications. Active explorer of Wireshark network captures, Nmap port scanning, and web vulnerability vectors.
          </p>
        </div>
      );
    } else if (trimmedCmd === 'skills') {
      reply = (
        <div className="space-y-2 font-mono text-sm">
          <p className="text-red-400 font-bold">CORE EXPERTISE REPORT:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 max-w-md">
            <div className="flex justify-between">
              <span className="text-gray-300">HTML / CSS</span>
              <span className="text-red-500">90%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300">Networking (TCP/IP)</span>
              <span className="text-red-500">80%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300">JavaScript / React</span>
              <span className="text-red-500">70%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300">Cyber Security</span>
              <span className="text-red-500">75%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300">Python Scripting</span>
              <span className="text-red-500">65%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300">Ethical Hacking</span>
              <span className="text-red-500">70%</span>
            </div>
          </div>
        </div>
      );
    } else if (trimmedCmd === 'certificates') {
      reply = (
        <div className="space-y-3 text-gray-300">
          <p className="text-red-400 font-bold">VERIFIED CREDENTIALS database:</p>
          <div className="space-y-1">
            <p className="font-bold text-white">1. Ethical Hacking Course Certificate</p>
            <p className="text-xs text-gray-500">Issuer: Tutedude · License ID: TD-VEDI-EH-1600 · Mar 2026</p>
          </div>
          <div className="space-y-1">
            <p className="font-bold text-white">2. Artificial Intelligence &amp; Machine Learning Course</p>
            <p className="text-xs text-gray-500">Issuer: Microsoft · FICE (20-hour curriculum) · Feb 2026</p>
          </div>
          <div className="space-y-1">
            <p className="font-bold text-white">3. NLP Solutions with Azure AI Services (AI-3003)</p>
            <p className="text-xs text-gray-500">Issuer: Microsoft · FICE · Apr 2026</p>
          </div>
          <div className="space-y-1">
            <p className="font-bold text-white">4. Computer Vision Solutions with Azure AI Vision</p>
            <p className="text-xs text-gray-500">Issuer: Microsoft · FICE · Apr 2026</p>
          </div>
        </div>
      );
    } else if (trimmedCmd === 'contact') {
      reply = (
        <div className="space-y-1 font-mono text-sm">
          <p className="text-gray-300">
            <span className="text-red-500 font-bold">Email:</span>{' '}
            <a href="mailto:vedikapatel540@gmail.com" className="hover:underline text-white">
              vedikapatel540@gmail.com
            </a>
          </p>
          <p className="text-gray-300">
            <span className="text-red-500 font-bold">LinkedIn:</span>{' '}
            <a
              href="https://www.linkedin.com/in/vedika-patel-1193a330b/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-white"
            >
              linkedin.com/in/vedika-patel
            </a>
          </p>
          <p className="text-gray-300">
            <span className="text-red-500 font-bold">GitHub:</span>{' '}
            <a
              href="https://github.com/Vedika51215"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-white"
            >
              github.com/Vedika51215
            </a>
          </p>
        </div>
      );
    } else if (trimmedCmd === 'nmap') {
      setIsScanning(true);
      setHistory(prev => [...prev, { command: cmd, output: <span className="text-yellow-500 animate-pulse">Running simulated network port scan on localhost...</span> }]);
      setInput('');

      // Simulate network scan output with timing
      setTimeout(() => {
        setHistory(prev => {
          // Remove the loader and add the scan result
          const newHist = prev.slice(0, -1);
          return [
            ...newHist,
            {
              command: cmd,
              output: (
                <div className="text-green-500 font-mono text-xs md:text-sm leading-relaxed space-y-1 select-none">
                  <p>Starting Nmap 7.92 ( https://nmap.org ) at {new Date().toISOString().split('T')[0]}</p>
                  <p>Nmap scan report for vedika.patel-lab.local (127.0.0.1)</p>
                  <p>Host is up (0.00041s latency).</p>
                  <p>Not shown: 994 closed tcp ports (conn-refused)</p>
                  <p className="text-yellow-500 border-b border-green-800 pb-1 mt-2">
                    PORT     STATE SERVICE       VERSION
                  </p>
                  <p className="mt-1">
                    22/tcp   <span className="text-white font-bold">open</span>  ssh           OpenSSH 8.9p1 (Ethical Hacking Lab)
                  </p>
                  <p>
                    80/tcp   <span className="text-white font-bold">open</span>  http          Apache httpd 2.4 (HTML5/CSS3/JS Web Dev)
                  </p>
                  <p>
                    443/tcp  <span className="text-white font-bold">open</span>  ssl/https     Next.js 16 / React 19 Client Suite
                  </p>
                  <p>
                    1433/tcp <span className="text-white font-bold">open</span>  ms-sql-s      Microsoft SQL Server (NGO Mgmt Database)
                  </p>
                  <p>
                    8080/tcp <span className="text-white font-bold">open</span>  http-proxy    Python 3.10 (Automation &amp; Auditing tools)
                  </p>
                  <p className="border-t border-green-800 pt-1 mt-2">
                    Nmap done: 1 IP address (1 host up) scanned in 1.45 seconds
                  </p>
                  <p className="text-red-500 font-bold text-xs mt-2">[!] SCAN COMPLETE. 0 VULNERABILITIES DETECTED.</p>
                </div>
              )
            }
          ];
        });
        setIsScanning(false);
      }, 1500);
      return;
    } else {
      reply = `command not found: ${trimmedCmd}. Type 'help' to see valid operations.`;
    }

    setHistory(prev => [...prev, { command: cmd, output: reply }]);
    setInput('');
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !isScanning) {
      handleCommand(input);
    }
  };

  return (
    <section id="lab" className="relative z-10 py-32 px-6 md:px-20 border-t border-[#222]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <div className="text-[#e50914] font-mono text-sm tracking-[0.2em] uppercase mb-4 flex items-center gap-3">
              <span className="w-8 h-px bg-[#e50914]" /> Cyber Lab
            </div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight stranger-text lowercase">
              Interactive Terminal
            </h2>
          </div>
          <p className="text-gray-500 font-mono text-xs md:text-sm mt-4 md:mt-0 max-w-sm leading-relaxed">
            Run diagnostic tools and audit host configurations in a mock Upside Down environment.
          </p>
        </div>

        {/* Terminal Window */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-4xl mx-auto rounded-lg overflow-hidden border border-[#222] bg-[#070707] shadow-2xl relative"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-4 py-3 bg-[#111] border-b border-[#222]">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
            </div>
            <div className="flex items-center gap-2 font-mono text-[11px] tracking-wider text-gray-500 uppercase select-none">
              <Terminal size={12} className="text-[#e50914]" />
              vedika@cyber-lab:~
            </div>
            <div className="w-12" /> {/* spacer */}
          </div>

          {/* Body Terminal Area */}
          <div className="p-6 md:p-8 min-h-[380px] max-h-[500px] overflow-y-auto font-mono text-sm text-gray-400 space-y-4 select-text scrollbar-thin scrollbar-thumb-[#222]">
            <AnimatePresence initial={false}>
              {history.map((item, idx) => (
                <div key={idx} className="space-y-1">
                  {item.command !== 'system-init' && (
                    <div className="flex items-center gap-2 text-white font-bold select-none">
                      <span className="text-[#e50914]">&gt;</span>
                      <span>{item.command}</span>
                    </div>
                  )}
                  <div className="pl-4 pb-2 text-gray-300 font-mono leading-relaxed whitespace-pre-wrap">
                    {item.output}
                  </div>
                </div>
              ))}
            </AnimatePresence>

            {/* Input Row */}
            {!isScanning && (
              <div className="flex items-center gap-2 pt-1 select-none">
                <span className="text-[#e50914] font-bold animate-[pulse_1.5s_infinite]">&gt;</span>
                <input
                  type="text"
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="flex-1 bg-transparent border-none outline-none text-white font-mono text-sm caret-[#e50914] w-full p-0 m-0"
                  placeholder="type a command..."
                  autoComplete="off"
                  autoCorrect="off"
                  autoCapitalize="off"
                  spellCheck={false}
                />
              </div>
            )}
            <div ref={terminalEndRef} />
          </div>

          {/* CRT scanline scan bar inside the terminal */}
          <div className="absolute inset-0 z-10 pointer-events-none opacity-5 bg-gradient-to-b from-transparent via-red-600/10 to-transparent bg-[length:100%_4px] animate-[pulse_2s_infinite]" />
        </motion.div>
      </div>
    </section>
  );
}
