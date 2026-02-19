import { motion } from "framer-motion";
import { FileText, Lock, AlertTriangle } from "lucide-react";

const Protocol = () => {
  return (
    // ── SOLID SECTION: blocks global video ──
    <section id="protocol" className="py-24 px-6 relative bg-black/40 overflow-hidden min-h-screen flex flex-col items-center justify-center scanlines">
      {/* Decorative grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(217,70,239,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(217,70,239,0.04)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black to-transparent pointer-events-none z-10" />

      <div className="max-w-6xl w-full relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <AlertTriangle className="text-neon-purple w-6 h-6 flicker" />
            <h2
              data-text="PROTOCOL & DIRECTIVES"
              className="glitch-text text-3xl md:text-5xl font-orbitron text-gray-200 tracking-wide uppercase"
            >
              PROTOCOL <span className="text-neon-purple">&</span> DIRECTIVES
            </h2>
          </motion.div>
          <p className="text-gray-500 font-mono text-xs md:text-sm max-w-2xl mx-auto">
            "Strict adherence to the HackNova protocol is mandatory. <span className="text-cyber-red">Deviants will be pruned.</span>"
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24 max-w-4xl mx-auto">

          {/* Card 1: Mission Rulebook */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-black/60 border border-neon-purple/20 rounded-xl p-8 backdrop-blur-md flex flex-col items-center text-center group hover:border-neon-purple/60 hover:shadow-[0_0_30px_rgba(217,70,239,0.2)] transition-all glitch-card"
          >
            <div className="mb-6 w-16 h-16 rounded-full bg-neon-purple/10 flex items-center justify-center group-hover:shadow-[0_0_20px_rgba(217,70,239,0.4)] transition-all">
              <FileText className="w-8 h-8 text-neon-purple" />
            </div>
            <h3 className="text-xl font-orbitron text-white mb-2 rgb-hover">MISSION RULEBOOK</h3>
            <p className="text-gray-500 text-xs font-mono mb-8">Classified Information. Authorized Personnel Only.</p>
            <button className="px-6 py-3 border border-neon-purple/50 text-neon-purple font-mono text-xs tracking-widest uppercase hover:bg-neon-purple/10 hover:shadow-[0_0_15px_rgba(217,70,239,0.3)] transition-all w-full">
              DOWNLOAD_METADATA
            </button>
          </motion.div>

          {/* Card 2: Problem Statements */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-black/60 border border-white/10 rounded-xl p-8 backdrop-blur-md flex flex-col items-center text-center group hover:border-cyber-red/40 hover:shadow-[0_0_30px_rgba(255,0,60,0.1)] transition-all glitch-card"
          >
            <div className="mb-6 w-16 h-16 rounded-full bg-white/5 flex items-center justify-center">
              <Lock className="w-8 h-8 text-cyber-red" />
            </div>
            <h3 className="text-xl font-orbitron text-white mb-2 rgb-hover">PROBLEM STATEMENTS</h3>
            <p className="text-gray-500 text-xs font-mono mb-8">Timeline Locked. Access Restricted until H-Hour.</p>
            <button className="px-6 py-3 border border-cyber-red/30 text-cyber-red/50 font-mono text-xs tracking-widest uppercase cursor-not-allowed w-full">
              ACCESS_DENIED
            </button>
          </motion.div>
        </div>

        {/* Partners */}
        <div className="text-center">
          <h3 className="text-2xl font-orbitron text-gray-300 mb-2 rgb-hover">OFFICIAL PARTNERS</h3>
          <p className="text-gray-600 text-xs mb-8 font-mono">Powering the innovation of tomorrow.</p>

          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <div className="h-12 flex items-center px-4 border border-white/10 hover:border-neon-purple/50 transition-colors glitch-card">
              <span className="text-3xl font-black text-red-600 font-sans tracking-tighter">V</span>
            </div>
            <div className="h-12 flex items-center px-4 border border-white/10 hover:border-neon-purple/50 transition-colors glitch-card">
              <span className="text-xl font-bold text-yellow-500 font-orbitron">ADAPTS</span>
            </div>
            <div className="h-12 flex items-center gap-1 px-4 border border-white/10 hover:border-neon-purple/50 transition-colors glitch-card">
              <span className="text-xl font-bold text-blue-500 font-serif italic">Civora</span>
              <span className="text-sm text-gray-400">Nexus</span>
            </div>
            <div className="h-12 flex items-center gap-0 px-4 border border-white/10 hover:border-neon-purple/50 transition-colors glitch-card">
              <span className="text-lg font-bold text-purple-500">interview</span>
              <span className="text-lg font-light text-white">buddy</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Protocol;
