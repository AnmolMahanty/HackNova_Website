import { motion } from "framer-motion";

const Mission = () => {
  return (
    <section id="mission" className="relative py-20 px-4 md:px-8 bg-black/95 text-white overflow-hidden min-h-screen flex flex-col justify-center">
      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Header */}
        <div className="mb-12">
            <h3 className="text-gray-500 font-mono text-xs md:text-sm tracking-widest uppercase mb-2">System Intel</h3>
            <h2 className="text-4xl md:text-6xl font-bold font-orbitron text-white">
                MISSION <span className="text-white">BRIEF</span>
            </h2>
        </div>

        {/* Main Grid: Content + Radar */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            
            {/* Left Column: Text Intel */}
            <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="border border-white/20 bg-white/5 rounded-xl p-8 md:p-12 relative overflow-hidden backdrop-blur-sm"
            >
                {/* Decorative Grid Lines */}
                <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none"></div>

                <h3 className="text-2xl md:text-4xl font-normal mb-8 relative z-10">
                    Initiating HackNova Protocol.
                </h3>

                <div className="space-y-6 font-mono text-gray-400 text-sm md:text-base relative z-10">
                    <p>
                        <span className="text-gray-600">[SYSTEM_LOG]:</span> A convergence of elite developers, designers, and innovators detected at SSJCOE TECHNOVA Node.
                    </p>
                    <div className="pl-4 border-l-2 border-neon-blue/50">
                        <p className="mb-2">Mission: 12-hour sprint</p>
                        <p className="mb-2">Build the future</p>
                        <p className="mb-2">Disrupt the present</p>
                        <p>Survive deployment</p>
                    </div>
                </div>
            </motion.div>

            {/* Right Column: Radar/Scanner Visual */}
            <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="border border-white/20 bg-black relative rounded-xl overflow-hidden min-h-[300px] flex items-center justify-center"
            >
                 <div className="absolute top-4 right-4 text-gray-500">
                    <span className="animate-pulse">⚡</span>
                 </div>
                 
                 {/* Radar Circles */}
                 <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
                    <div className="absolute inset-0 border border-red-900/40 rounded-full"></div>
                    <div className="absolute inset-8 border border-red-900/40 rounded-full"></div>
                    <div className="absolute inset-16 border border-red-900/40 rounded-full"></div>
                    <div className="absolute inset-24 border border-red-900/40 rounded-full bg-red-900/10"></div>
                    
                    {/* Scanning Line */}
                    <div className="absolute w-full h-full animate-[spin_4s_linear_infinite] rounded-full bg-[conic-gradient(from_0deg,transparent_0deg,transparent_270deg,rgba(220,38,38,0.4)_360deg)]"></div>
                    
                    {/* Central Dot */}
                    <div className="w-2 h-2 bg-red-500 rounded-full shadow-[0_0_10px_#ef4444]"></div>
                 </div>

                 <div className="absolute bottom-4 left-4 font-mono text-[10px] text-gray-500">
                    <p>LIVE FEED</p>
                    <p>LOC: SSJCOE_TECHNOVA_NODE</p>
                 </div>
            </motion.div>
        </div>

        {/* Bottom Row: Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
                { label: 'OPERATIVES', value: '400+', icon: '👥' },
                { label: 'BOUNTY', value: '₹50k+', icon: '🏆' },
                { label: 'MENTORS', value: '10', icon: '🛡' }
            ].map((stat, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="border border-white/20 bg-black/40 p-6 flex flex-col items-center justify-center text-center hover:bg-white/5 transition-colors"
                >
                    <div className="text-gray-500 mb-2 text-xs absolute top-2 right-2">○</div>
                    <div className="text-2xl mb-2 text-gray-400">{stat.icon}</div>
                    <div className="text-3xl font-bold text-white mb-1 font-orbitron">{stat.value}</div>
                    <div className="text-[10px] tracking-widest uppercase text-gray-500 font-bold">{stat.label}</div>
                </motion.div>
            ))}
        </div>

      </div>
    </section>
  );
};

export default Mission;
