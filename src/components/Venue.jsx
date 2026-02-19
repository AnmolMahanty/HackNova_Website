import { motion } from "framer-motion";
import { MapPin, Navigation, Clock, AlertTriangle, Train, Phone, MessageSquare, Mail } from "lucide-react";

const Venue = () => {
  return (
    <section id="venue" className="py-24 px-6 bg-black min-h-screen border-t border-white/5 relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,165,0,0.05),transparent_70%)]"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold font-orbitron text-orange-500 mb-4 tracking-wider uppercase drop-shadow-[0_0_10px_rgba(255,165,0,0.5)]"
          >
            VENUE INTEL
          </motion.h2>
          <div className="flex items-center justify-center gap-2 text-gray-400 text-xs md:text-sm font-mono">
            <div className="h-8 w-1 bg-orange-500"></div>
            <p>Secure location coordinates for HackWithMumbai 2.0. Proceed to designated sector.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left Column: Map & Action */}
          <div className="space-y-6">
            
            {/* Map Container */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="w-full aspect-square md:aspect-[4/3] bg-[#111] rounded-xl border border-white/10 overflow-hidden relative shadow-2xl group"
            >
                {/* Embed Google Maps */}
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.459701732644!2d73.0558193149028!3d19.043513987106403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c23a2a3e6c0b%3A0x6c6e7529402506e8!2sBharati%20Vidyapeeth%20Deemed%20to%20be%20University%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1677685324562!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) contrast(120%)" }} // Dark mode map hack
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                ></iframe>
                
                {/* Overlay UI */}
                <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md p-4 rounded border border-white/10 max-w-xs">
                    <h4 className="text-white font-bold text-sm mb-1">Bharati Vidyapeeth (Deemed to be)...</h4>
                    <p className="text-gray-400 text-xs">Sector 7, Belpada, Kharghar, Navi Mumbai...</p>
                    <div className="text-orange-500 text-xs mt-2 font-mono">4.3 ★★★★★ (149 reviews)</div>
                </div>
            </motion.div>

            {/* Directions Button */}
            <motion.a 
                href="https://maps.google.com" // Replace with actual link
                target="_blank"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="block w-full py-4 bg-orange-600 hover:bg-orange-500 text-black font-bold font-orbitron text-center rounded-lg shadow-[0_0_20px_rgba(234,88,12,0.4)] transition-all flex items-center justify-center gap-2"
            >
                <Navigation size={20} />
                GET DIRECTIONS
            </motion.a>
            
            <p className="text-center text-gray-500 font-mono text-xs">
                *Interactive Map: Scroll to zoom.
            </p>

          </div>

          {/* Right Column: Info Cards */}
          <div className="space-y-6">
            
            {/* Target Location Card */}
            <motion.div 
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               className="bg-[#0c0c0c] border border-white/10 rounded-xl p-8 relative overflow-hidden"
            >
                <div className="absolute top-0 right-0 p-4 opacity-20">
                    <MapPin size={40} className="text-orange-500" />
                </div>
                <h3 className="text-xl font-orbitron text-white mb-4 uppercase">Target Location</h3>
                <div className="space-y-2 text-gray-400 text-sm">
                    <p className="text-white font-bold">Bharati Vidyapeeth (Deemed to be) University</p>
                    <p>Department of Engineering and Technology,</p>
                    <p>Navi Mumbai</p>
                </div>
            </motion.div>

            {/* Travel Protocol Card */}
            <motion.div 
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ delay: 0.1 }}
               className="bg-[#0c0c0c] border border-white/10 rounded-xl p-8 relative"
            >
                <h3 className="flex items-center gap-3 text-xl font-orbitron text-orange-500 mb-6 uppercase">
                    <Train size={24} /> TRAVEL PROTOCOL
                </h3>
                
                <div className="bg-orange-500/10 border-l-2 border-orange-500 p-4 mb-6">
                    <h4 className="text-white font-bold text-sm mb-1">From CSMT / LTT / Thane / Panvel:</h4>
                    <p className="text-gray-400 text-xs leading-relaxed">
                        Take a <span className="text-orange-400">Harbour Line</span> local train towards Panvel and disembark at <span className="text-white font-bold">Kharghar Station</span>.
                    </p>
                </div>

                <div className="space-y-4 font-mono text-xs text-gray-400">
                    <div className="flex items-center gap-4">
                        <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-white shrink-0">1</div>
                        <p>Exit Kharghar Station.</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-white shrink-0">2</div>
                        <p>The campus (BVDU DET) is a <span className="text-white font-bold">5-minute walk</span>.</p>
                    </div>
                </div>
            </motion.div>

            {/* Entry Timeline */}
            <motion.div 
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ delay: 0.2 }}
               className="bg-[#0c0c0c] border border-orange-500/30 rounded-xl p-6 flex items-center gap-6"
            >
                <div className="p-3 rounded-full bg-orange-500/20 text-orange-500">
                    <Clock size={24} />
                </div>
                <div>
                    <h3 className="text-lg font-orbitron text-white uppercase mb-1">ENTRY TIMELINE</h3>
                    <p className="text-gray-400 text-xs">
                        Gates open: <span className="text-orange-400 font-bold">7th Feb, 10:00 AM</span>. <br/>
                        Review your travel plans to arrive on schedule.
                    </p>
                </div>
            </motion.div>

             {/* Official Partners (Travel) */}
             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.3 }}
               className="bg-[#0c0c0c] border border-white/10 rounded-xl p-8 text-center"
            >
                <h3 className="text-orange-500 font-orbitron mb-6 uppercase tracking-widest text-sm">OFFICIAL PARTNERS</h3>
                
                <div className="inline-block p-4 border border-white/10 rounded-lg bg-white/5 mb-4">
                     {/* Placeholder Logo for Vaygo Travels - Big 'V' */}
                     <div className="w-20 h-20 bg-red-800 rounded flex items-center justify-center relative overflow-hidden group">
                         <span className="text-6xl font-black text-yellow-400 italic z-10">V</span>
                         <div className="text-[8px] absolute bottom-2 text-white/80 font-mono w-full text-center">Vaygo Travels</div>
                     </div>
                </div>
                
                <p className="text-gray-400 text-xs font-mono mb-6">Travel Partner: <span className="text-white font-bold">Vaygo Travels</span></p>

                <div className="flex justify-center gap-6">
                    <button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-all">
                        <Mail size={16} />
                    </button>
                    <button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-all">
                        <Phone size={16} />
                    </button>
                     <button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-all">
                        <MessageSquare size={16} />
                    </button>
                </div>

            </motion.div>

          </div>
        </div>

        <div className="mt-20 text-center">
            <p className="text-gray-600 font-mono text-xs">
                // If navigation systems fail, contact the Organizing Team immediately.
            </p>
        </div>

      </div>
    </section>
  );
};

export default Venue;
