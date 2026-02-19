import { motion } from "framer-motion";

const Sponsors = () => {
  return (
    <section id="sponsors" className="py-20 px-6 bg-hack-bg relative">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold font-orbitron mb-16"
        >
          OFFICIAL <span className="text-neon-blue">PARTNERS</span>
        </motion.h2>

        <div className="space-y-12">
          {/* Platinum Tier */}
          <div>
            <h3 className="text-neon-cyan font-mono tracking-widest mb-6">PLATINUM TIER</h3>
            <div className="flex flex-wrap justify-center gap-8">
              {[1, 2].map((i) => (
                <div key={i} className="w-64 h-32 bg-white/5 border border-neon-blue/30 rounded-lg flex items-center justify-center hover:bg-white/10 hover:shadow-[0_0_15px_rgba(0,240,255,0.2)] transition-all">
                  <span className="text-gray-500 font-orbitron">SPONSOR {i}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Gold Tier */}
          <div>
            <h3 className="text-yellow-400 font-mono tracking-widest mb-6">GOLD TIER</h3>
            <div className="flex flex-wrap justify-center gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-48 h-24 bg-white/5 border border-yellow-400/30 rounded-lg flex items-center justify-center hover:bg-white/10 hover:shadow-[0_0_15px_rgba(250,204,21,0.2)] transition-all">
                  <span className="text-gray-500 font-orbitron">SPONSOR {i}</span>
                </div>
              ))}
            </div>
          </div>
          
           {/* Powered By */}
           <div className="mt-20">
             <p className="text-gray-400 text-sm mb-4">POWERED BY</p>
             <div className="inline-block p-6 border border-white/10 rounded-xl bg-gradient-to-b from-gray-900 to-black">
                <span className="text-2xl font-bold font-orbitron tracking-widest text-white">TECHNOVA</span>
             </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
