import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('March 17, 2026 00:00:00').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 pt-20 overflow-hidden bg-[#050505]">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-900/50 via-[#050505] to-[#050505] z-0"></div>
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 z-0 brightness-100 contrast-150"></div>
      
      {/* Live Registration Indicator */}
      <div className="relative z-10 animate-pulse flex items-center gap-2 mb-8 mt-10 md:mt-0">
        <div className="w-2 h-2 rounded-full bg-red-600 shadow-[0_0_10px_#ff0000]"></div>
        <span className="text-red-500 font-mono text-sm tracking-widest uppercase">Live Registration</span>
      </div>

      {/* Pill Badge */}
      <div className="relative z-10 mb-6">
        <div className="border border-white/20 bg-white/5 backdrop-blur-sm px-6 py-2 rounded-full">
          <span className="text-gray-300 font-mono text-xs md:text-sm tracking-[0.2em] uppercase">
            &lt; National Level Hackathon /&gt;
          </span>
        </div>
      </div>

      {/* Main Title */}
      <h1 className="relative z-10 text-6xl md:text-9xl font-bold font-orbitron tracking-tighter mb-4 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
        HACKNOVA
      </h1>

      {/* Tagline */}
      <div className="relative z-10 flex flex-col items-center mb-12">
         <p className="text-lg md:text-2xl text-neon-blue font-bold tracking-widest uppercase mb-2 drop-shadow-[0_0_5px_rgba(0,240,255,0.5)]">
            12-Hour National Level Hybrid
         </p>
         <p className="text-sm md:text-base text-gray-400 max-w-2xl">
            Enter the Multiverse. Build the Future. Disrupt Reality.
         </p>
      </div>

      {/* Countdown Timer */}
      <div className="relative z-10 grid grid-cols-4 gap-4 md:gap-8 mb-12">
        {[
          { label: 'DAYS', value: timeLeft.days },
          { label: 'HOURS', value: timeLeft.hours },
          { label: 'MINUTES', value: timeLeft.minutes },
          { label: 'SECONDS', value: timeLeft.seconds }
        ].map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="w-16 h-16 md:w-24 md:h-24 border border-white/20 bg-black/40 backdrop-blur-md flex items-center justify-center rounded-sm mb-2 shadow-[0_0_15px_rgba(0,240,255,0.1)]">
              <span className="text-2xl md:text-4xl font-mono text-white font-bold">
                {String(item.value).padStart(2, '0')}
              </span>
            </div>
            <span className="text-[10px] md:text-xs text-gray-500 tracking-widest uppercase">{item.label}</span>
          </div>
        ))}
      </div>

      {/* Info Section */}
      <div className="relative z-10 flex flex-col items-center gap-3 mb-8 bg-white/5 p-6 rounded-xl border border-white/10 backdrop-blur-sm">
        <div className="flex flex-col md:flex-row items-center gap-6 text-gray-300">
            <div className="flex items-center gap-2">
                <span className="text-neon-purple text-xl">🏆</span>
                <span className="font-bold text-lg">Prize Pool: ₹50,000+</span>
            </div>
            <div className="hidden md:block w-px h-6 bg-gray-600"></div>
             <div className="flex items-center gap-2">
                <span className="text-cyber-red text-xl">�</span>
                <span className="font-mono text-lg">17 March 2026</span>
            </div>
        </div>
        
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-700 to-transparent my-1"></div>

        <div className="flex flex-col items-center gap-1 text-sm text-gray-400 font-mono">
            <p className="flex items-center gap-2">
                <span className="text-neon-blue">🏛</span> Shivajirao S. Jondhale College of Engineering
            </p>
            <p className="flex items-center gap-2">
                <span className="text-neon-purple">⚡</span> Organized by Technova Club
            </p>
        </div>
      </div>

       {/* Floating Action Button (already in screenshot, looks like a nice touch to keep/add) */}
       <button className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-orange-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform cursor-pointer">
        <span className="text-black text-2xl font-bold">+</span>
      </button>

    </section>
  );
};

export default Hero;
