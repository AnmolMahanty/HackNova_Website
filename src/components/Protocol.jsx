import { motion } from "framer-motion";
import { FileText, Lock, AlertTriangle } from "lucide-react";

const Protocol = () => {
  return (
    <section id="protocol" className="py-24 px-6 relative bg-black overflow-hidden min-h-screen flex flex-col items-center justify-center">
      {/* Background with Organic/Hive Texture */}
      <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#050505]"></div>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop')] opacity-20 bg-cover bg-center mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black"></div>
      </div>

      <div className="max-w-6xl w-full relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
            <motion.div 
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="flex items-center justify-center gap-3 mb-4"
            >
                <AlertTriangle className="text-gray-400 w-6 h-6" />
                <h2 className="text-3xl md:text-5xl font-orbitron text-gray-200 tracking-wide uppercase">
                    PROTOCOL & DIRECTIVES
                </h2>
            </motion.div>
            <p className="text-gray-500 font-mono text-xs md:text-sm max-w-2xl mx-auto">
                "Strict adherence to the HackNova protocol is mandatory. Deviants will be pruned."
            </p>
        </div>

        {/* Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24 max-w-4xl mx-auto">
            
            {/* Card 1: Mission Rulebook */}
            <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="bg-black/40 border border-white/10 rounded-xl p-8 backdrop-blur-md flex flex-col items-center text-center group hover:border-white/20 transition-all"
            >
                <div className="mb-6 w-16 h-16 rounded-full bg-white/5 flex items-center justify-center">
                    <FileText className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-orbitron text-white mb-2">MISSION RULEBOOK</h3>
                <p className="text-gray-500 text-xs font-mono mb-8">Classified Information. Authorized Personnel Only.</p>
                <button className="px-6 py-3 border border-neon-green/50 text-neon-green font-mono text-xs tracking-widest uppercase hover:bg-neon-green/10 transition-colors w-full">
                    DOWNLOAD_METADATA
                </button>
            </motion.div>

            {/* Card 2: Problem Statements */}
            <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="bg-black/40 border border-white/10 rounded-xl p-8 backdrop-blur-md flex flex-col items-center text-center group hover:border-white/20 transition-all"
            >
                <div className="mb-6 w-16 h-16 rounded-full bg-white/5 flex items-center justify-center">
                    <Lock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-orbitron text-white mb-2">PROBLEM STATEMENTS</h3>
                <p className="text-gray-500 text-xs font-mono mb-8">Timeline Locked. Access Restricted until H-Hour.</p>
                <button className="px-6 py-3 border border-gray-600 text-gray-500 font-mono text-xs tracking-widest uppercase cursor-not-allowed w-full">
                    ACCESS_DENIED
                </button>
            </motion.div>

        </div>

        {/* Official Partners */}
        <div className="text-center">
            <h3 className="text-2xl font-orbitron text-gray-300 mb-2">OFFICIAL PARTNERS</h3>
            <p className="text-gray-600 text-xs mb-8">Powering the innovation of tomorrow.</p>
            
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 grayscale hover:grayscale-0 transition-all duration-500">
                {/* Partner 1: V (Using generic or text if logo unavailable) */}
                 <div className="h-12 flex items-center">
                    <span className="text-3xl font-black text-red-600 font-sans tracking-tighter">V</span>
                 </div>

                 {/* Partner 2: Adapts */}
                 <div className="h-12 flex items-center">
                    <span className="text-xl font-bold text-yellow-500 font-orbitron">ADAPTS</span>
                 </div>

                 {/* Partner 3: Civora Nexus */}
                 <div className="h-12 flex items-center gap-1">
                    <span className="text-xl font-bold text-blue-500 font-serif italic">Civora</span>
                    <span className="text-sm text-gray-400">Nexus</span>
                 </div>

                 {/* Partner 4: InterviewBuddy */}
                 <div className="h-12 flex items-center bg-white/10 px-2 rounded">
                    <span className="text-lg font-bold text-purple-600">interview</span>
                    <span className="text-lg font-light text-white">buddy</span>
                 </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Protocol;
