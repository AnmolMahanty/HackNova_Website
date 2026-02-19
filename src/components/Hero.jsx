import { useState, useEffect, useRef } from 'react';

// ── Glitch title cycle ──
const CYCLE = [
  { text: 'HACKNOVA', hold: 2800 },
  { text: 'H4CKN0V4', hold: 2200  },
  { text: 'HACKNOVA', hold: 1200 },
  { text: 'H4CKN0V4', hold: 1600 },
  { text: 'H@CKN0V∆', hold: 2400  },
  { text: 'HACKNOVA', hold: 1000  },
  { text: 'H@CKN0V∆', hold: 1800  },
  { text: 'HACKNOVA', hold: 3000  },
];

function useGlitchCycle() {
  const [display, setDisplay] = useState('HACKNOVA');
  const phase = useRef(0);
  useEffect(() => {
    let id;
    function tick() {
      const p = CYCLE[phase.current % CYCLE.length];
      setDisplay(p.text);
      phase.current++;
      id = setTimeout(tick, p.hold);
    }
    id = setTimeout(tick, CYCLE[0].hold);
    return () => clearTimeout(id);
  }, []);
  return display;
}

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const titleText = useGlitchCycle();

  useEffect(() => {
    const targetDate = new Date('March 17, 2026 00:00:00').getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else clearInterval(interval);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    // ── VIDEO SECTION: transparent bg so global video shows through ──
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 pt-28 overflow-hidden bg-transparent">

      {/* Bottom fade to next solid section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-black pointer-events-none z-10" />

      {/* Top Header Bar */}
      <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-center px-4 py-3 md:px-6 md:py-4 backdrop-blur-sm border-b border-white/10">
        <div className="flex flex-row items-center text-left gap-3 md:gap-4">
          <img src="/college_logo.png" alt="SSJCOE" className="h-12 md:h-20 w-auto object-contain" />
          <div className="flex flex-col leading-tight">
            <p className="text-gray-400 text-[9px] md:text-xs tracking-wide italic">Samarth Samaj's</p>
            <p className="text-white text-xs md:text-base font-bold tracking-wide leading-snug w-auto">SHIVAJIRAO S. JONDHALE COLLEGE OF ENGINEERING</p>
            <p className="text-gray-500 text-[9px] md:text-xs italic">(Affiliated to University of Mumbai)</p>
          </div>
        </div>
      </div>


     
      {/* CENTRE — Technova Club logo + Name + PRESENTS */}
      <div className="flex flex-col items-center gap-2 mb-4">
        <div className="flex flex-row items-center gap-2 md:gap-3">
          <img src="/Club_logo.png" alt="Technova Club" className="h-10 md:h-16 w-auto object-contain hover:scale-105 transition-transform duration-300" />
          <div className="flex flex-col items-start justify-center leading-none text-left">
            <h2 className="text-white text-lg md:text-2xl font-black font-orbitron tracking-wide drop-shadow-md">TECHNOVA</h2>
            <h3 className="text-neon-blue text-[10px] md:text-base font-bold font-orbitron tracking-[0.3em] ml-0.5">CLUB</h3>
          </div>
        </div>
        <p className="text-white/80 text-[10px] md:text-xs font-bold tracking-[0.6em] uppercase font-mono mt-1">PRESENTS</p>
      </div>

      

      {/* ── GLITCH MAIN TITLE ── */}
      <h1
        data-text={titleText}
        className="hero-glitch relative z-10 text-5xl sm:text-7xl md:text-9xl font-bold font-orbitron tracking-tighter mb-4 text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.4)] select-none px-2 w-full max-w-full overflow-hidden"
      >
        {titleText}
      </h1>

      {/* Tagline pill */}
      <div className="relative z-10 mb-10">
        <div className="border border-white/20 bg-black/40 backdrop-blur-sm px-6 py-2 rounded-full glitch-card">
          <span className="text-gray-300 font-mono text-xs md:text-sm tracking-[0.2em] uppercase">
            &lt; 12-Hour National Level Hybrid Hackathon /&gt;
          </span>
        </div>
      </div>

      {/* Countdown Timer */}
      <div className="relative z-10 grid grid-cols-4 gap-4 md:gap-8 mb-12">
        {[
          { label: 'DAYS', value: timeLeft.days },
          { label: 'HRS', value: timeLeft.hours },
          { label: 'MINS', value: timeLeft.minutes },
          { label: 'SECS', value: timeLeft.seconds }
        ].map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="w-16 h-16 md:w-28 md:h-28 border border-neon-blue/40 bg-black/60 backdrop-blur-md flex items-center justify-center rounded-sm mb-2 shadow-[0_0_20px_rgba(0,240,255,0.2)] glitch-card">
              <span className="text-2xl md:text-5xl font-mono text-neon-blue font-bold">
                {String(item.value).padStart(2, '0')}
              </span>
            </div>
            <span className="text-[10px] md:text-xs text-gray-500 tracking-widest uppercase font-mono">{item.label}</span>
          </div>
        ))}
      </div>

      {/* Info Bar — reference style */}
      <div className="relative z-10 flex flex-col items-center gap-3 mb-8 text-center">

        {/* Main title line */}
        <h2 className="text-2xl md:text-3xl font-bold font-orbitron tracking-wide">
          <span className="text-neon-blue">12 HOUR </span>
          <span className="text-white">HACKATHON PROTOCOL</span>
        </h2>

        {/* Location | Date row */}
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-gray-400 font-mono text-[10px] md:text-sm tracking-widest">
          <span className="flex items-center gap-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 text-neon-blue shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            SSJCOE, DOMBIVLI (E)
          </span>
          <span className="hidden md:inline text-white/20">|</span>
          <span className="flex items-center gap-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 text-neon-blue shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            17TH MAR 2026
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
