import { motion } from "framer-motion";

const Sponsors = () => {
  return (
    <section id="sponsors" className="py-16 md:py-24 px-6 bg-black/50 relative overflow-hidden scanlines">
      {/* Dual glow – blue + purple */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(0,240,255,0.07),transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(217,70,239,0.07),transparent_60%)] pointer-events-none" />
      {/* Neon grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,240,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,240,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 text-center">

        {/* Header */}
        <p className="text-neon-blue/60 font-mono text-xs tracking-widest uppercase mb-3">// OFFICIAL_BACKERS</p>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          data-text="OFFICIAL PARTNERS"
          className="glitch-text text-4xl md:text-6xl font-bold font-orbitron text-white mb-16 tracking-wider uppercase"
        >
          OFFICIAL <span className="text-neon-blue">PARTNERS</span>
        </motion.h2>

        <div className="space-y-14">
          {/* Platinum Tier */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h3 className="text-neon-blue font-mono tracking-[0.3em] text-xs uppercase mb-6 flex items-center justify-center gap-3">
              <span className="h-px w-12 bg-neon-blue/40" />
              PLATINUM TIER
              <span className="h-px w-12 bg-neon-blue/40" />
            </h3>
            <div className="flex flex-wrap justify-center gap-8">
              {[1, 2].map((i) => (
                <div key={i} className="w-64 h-32 bg-black/60 border border-neon-blue/30 rounded-xl flex items-center justify-center hover:bg-neon-blue/5 hover:shadow-[0_0_20px_rgba(0,240,255,0.15)] hover:border-neon-blue/60 transition-all duration-300 backdrop-blur-sm group">
                  <span className="text-gray-500 font-orbitron text-sm group-hover:text-neon-blue transition-colors">SPONSOR {i}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Gold Tier */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-neon-purple font-mono tracking-[0.3em] text-xs uppercase mb-6 flex items-center justify-center gap-3">
              <span className="h-px w-12 bg-neon-purple/40" />
              GOLD TIER
              <span className="h-px w-12 bg-neon-purple/40" />
            </h3>
            <div className="flex flex-wrap justify-center gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-48 h-24 bg-black/60 border border-neon-purple/30 rounded-xl flex items-center justify-center hover:bg-neon-purple/5 hover:shadow-[0_0_20px_rgba(217,70,239,0.15)] hover:border-neon-purple/60 transition-all duration-300 backdrop-blur-sm group">
                  <span className="text-gray-500 font-orbitron text-sm group-hover:text-neon-purple transition-colors">SPONSOR {i}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Powered By */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-10"
          >
            <p className="text-gray-500 text-xs font-mono tracking-widest mb-4 uppercase">POWERED BY</p>
            <div className="inline-block p-6 border border-neon-blue/20 rounded-xl bg-black/60 backdrop-blur-sm hover:shadow-[0_0_30px_rgba(0,240,255,0.1)] hover:border-neon-blue/50 transition-all duration-300">
              <span className="text-2xl font-bold font-orbitron tracking-widest text-white">
                TECH<span className="text-neon-blue">NOVA</span>
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
