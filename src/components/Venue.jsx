import { motion } from "framer-motion";
import { MapPin, Train, Clock, Navigation } from "lucide-react";

const Venue = () => {
  return (
    <section id="venue" className="py-16 md:py-24 px-6 bg-black/50 min-h-screen border-t border-white/5 relative overflow-hidden scanlines">
      {/* Neon Blue radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,240,255,0.07),transparent_70%)] pointer-events-none" />
      {/* Neon grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,240,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,240,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />
      {/* Purple corner accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[radial-gradient(circle,rgba(217,70,239,0.08),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-neon-blue/60 font-mono text-xs tracking-widest uppercase mb-3">// COORDINATES_LOCKED</p>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            data-text="VENUE INTEL"
            className="glitch-text text-4xl md:text-6xl font-bold font-orbitron text-white mb-4 tracking-wider uppercase"
          >
            VENUE INTEL
          </motion.h2>
          <div className="flex items-center justify-center gap-2 text-gray-400 text-xs md:text-sm font-mono">
            <div className="h-6 w-0.5 bg-neon-blue flicker" />
            <p>Secure location coordinates. Proceed to designated sector.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Left: Map */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="w-full aspect-square md:aspect-[4/3] bg-black/60 rounded-xl border border-neon-blue/30 overflow-hidden relative shadow-2xl group glitch-card"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.12328761184!2d73.1057367!3d19.1979744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be795757569a46b%3A0x864b94d61f571b24!2sShivajirao%20S.%20Jondhale%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                width="100%" height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) contrast(120%)" }}
                allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                className="opacity-80 group-hover:opacity-100 transition-opacity duration-500"
              />
              <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md p-3 rounded border border-neon-blue/30 max-w-xs">
                <h4 className="text-white font-bold text-xs mb-1 font-orbitron">SSJCOE</h4>
                <p className="text-gray-400 text-[10px]">Shivajirao S. Jondhale College of Engineering, Dombivli (E)</p>
              </div>
              {/* Corner accent */}
              <div className="absolute bottom-4 right-4 text-neon-blue/40 font-mono text-[10px]">
                LAT: 19.1979 | LNG: 73.1083
              </div>
            </motion.div>
          </div>

          {/* Right: Info */}
          <div className="space-y-6">

            {/* Location Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-black/60 border border-neon-blue/20 rounded-xl p-8 relative overflow-hidden backdrop-blur-sm glitch-card"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <MapPin size={40} className="text-neon-blue" />
              </div>
              <p className="text-neon-blue/60 font-mono text-[10px] tracking-widest uppercase mb-2">// TARGET_LOCATION</p>
              <h3 className="text-xl font-orbitron text-white mb-4 uppercase rgb-hover">Venue</h3>
              <div className="space-y-2 text-gray-400 text-sm font-mono">
                <p className="text-white font-bold">Shivajirao S. Jondhale College of Engineering</p>
                <p>Sonarpada, Kalyan-Shilphata Road,</p>
                <p>Dombivli (E), Maharashtra 421204</p>
              </div>
            </motion.div>

            {/* Travel Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-black/60 border border-neon-blue/20 rounded-xl p-8 relative backdrop-blur-sm glitch-card"
            >
              <h3 className="flex items-center gap-3 text-xl font-orbitron text-neon-blue mb-6 uppercase">
                <Train size={24} /> TRAVEL PROTOCOL
              </h3>
              <div className="bg-neon-blue/10 border-l-2 border-neon-blue p-4 mb-6">
                <h4 className="text-white font-bold text-sm mb-1">From CSMT / LTT / Thane / Panvel:</h4>
                <p className="text-gray-400 text-xs leading-relaxed">
                  Take a <span className="text-neon-blue">Central Line</span> local train towards Kalyan/Ambernath/Badlapur and disembark at <span className="text-white font-bold">Dombivli Station</span>.
                </p>
              </div>
              <div className="space-y-4 font-mono text-xs text-gray-400">
                {["Exit Dombivli Station (East).", "Take a shared auto/rickshaw to Sonarpada (SSJCOE)."].map((step, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-6 h-6 rounded-full bg-neon-blue/20 border border-neon-blue/40 flex items-center justify-center text-neon-blue shrink-0">{i + 1}</div>
                    <p>{step}</p>
                  </div>
                ))}
              </div>
            </motion.div>


          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-16 text-center"
        >
          <a
            href="https://www.google.com/maps/dir//Shivajirao+S.+Jondhale+College+of+Engineering"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 border border-neon-blue/50 text-neon-blue font-mono text-sm tracking-widest hover:bg-neon-blue/10 hover:shadow-[0_0_20px_rgba(0,240,255,0.2)] transition-all duration-300 rounded"
          >
            <Navigation size={16} />
            GET DIRECTIONS
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Venue;
