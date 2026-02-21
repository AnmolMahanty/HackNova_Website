import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FileText, Lock, AlertTriangle, Eye, Download, Rocket } from "lucide-react";

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
            <div className="flex gap-4 w-full">
                <a 
                    href="/Rule_Book.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-3 border border-neon-purple/50 text-neon-purple font-mono text-xs tracking-widest uppercase hover:bg-neon-purple/10 hover:shadow-[0_0_15px_rgba(217,70,239,0.3)] transition-all flex items-center justify-center gap-2"
                >
                    <Eye size={16} /> VIEW
                </a>
                <a 
                    href="/Rule_Book.pdf" 
                    download="HackNova_RuleBook.pdf"
                    className="flex-1 px-4 py-3 bg-neon-purple/10 border border-neon-purple/50 text-neon-purple font-mono text-xs tracking-widest uppercase hover:bg-neon-purple/20 hover:shadow-[0_0_15px_rgba(217,70,239,0.3)] transition-all flex items-center justify-center gap-2"
                >
                    <Download size={16} /> DOWNLOAD
                </a>
            </div>
          </motion.div>

          {/* Card 2:PPT & Prototype Submission*/}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-black/60 border border-green-500/20 rounded-xl p-8 backdrop-blur-md flex flex-col items-center text-center group hover:border-green-500/60 hover:shadow-[0_0_30px_rgba(34,197,94,0.2)] transition-all glitch-card"
          >
            <div className="mb-6 w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center group-hover:shadow-[0_0_20px_rgba(34,197,94,0.4)] transition-all">
              <Rocket className="w-8 h-8 text-green-500" />
            </div>
            <h3 className="text-xl font-orbitron text-white mb-2 rgb-hover">PPT & PROTOTYPE SUBMISSION</h3>
            <p className="text-gray-500 text-xs font-mono mb-8">Submission Portal Active. Submit your directives.</p>
            <div className="w-full relative overflow-hidden">
                <Link 
                    to="/submission"
                    className="block px-6 py-3 border border-green-500/50 bg-green-500/10 text-green-500 font-mono text-xs tracking-widest uppercase hover:bg-green-500/20 hover:shadow-[0_0_15px_rgba(34,197,94,0.3)] transition-all w-full font-bold text-center"
                >
                    [ ACCESS_PORTAL ]
                </Link>
            </div>
          </motion.div>
        </div>

        {/* Partners */}
        <div className="text-center">
          <h3 className="text-2xl font-orbitron text-gray-300 mb-2 rgb-hover">OFFICIAL PARTNERS</h3>
          <p className="text-gray-600 text-xs mb-8 font-mono">Powering the innovation of tomorrow.</p>

          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <div className="h-12 flex items-center px-4 border border-white/10 hover:border-neon-purple/50 transition-colors glitch-card">
              <span className="text-3xl font-black text-red-600 font-sans tracking-tighter"></span>
            </div>
            <div className="h-12 flex items-center px-4 border border-white/10 hover:border-neon-purple/50 transition-colors glitch-card">
              <span className="text-xl font-bold text-yellow-500 font-orbitron"></span>
            </div>
            <div className="h-12 flex items-center gap-1 px-4 border border-white/10 hover:border-neon-purple/50 transition-colors glitch-card">
              <span className="text-xl font-bold text-blue-500 font-serif italic"></span>
              <span className="text-sm text-gray-400"></span>
            </div>
            <div className="h-12 flex items-center gap-0 px-4 border border-white/10 hover:border-neon-purple/50 transition-colors glitch-card">
              <span className="text-lg font-bold text-purple-500"></span>
              <span className="text-lg font-light text-white"></span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Protocol;
