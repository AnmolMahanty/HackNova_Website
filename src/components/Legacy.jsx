import { motion } from "framer-motion";

const Legacy = () => {
  const achievements = [
    {
      title: "SIH 2024 Winners",
      desc: "Championed the Smart India Hackathon with an AI-driven healthcare solution.",
      stat: "1st Place",
    },
    {
      title: "National Participation",
      desc: "Consistently ranking in top tiers across various national level hackathons.",
      stat: "50+ Events",
    },
    {
      title: "Innovation Hub",
      desc: "Incubated over 10+ student startups through Technova's mentorship.",
      stat: "10+ Startups",
    },
  ];

  return (
    <section id="legacy" className="py-20 px-6 bg-hack-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-neon-purple/10 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-neon-blue/10 rounded-full blur-[100px]"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
           initial={{ opacity: 0, x: -50 }}
           whileInView={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.6 }}
           className="mb-16 text-center md:text-left"
        >
          <h2 className="text-4xl md:text-6xl font-bold font-orbitron mb-4">
            LEGACY & <span className="text-neon-purple">IMPACT</span>
          </h2>
          <p className="text-gray-400 max-w-2xl">
            Technova Club has a history of dominance and innovation. We don't just participate; we set the standard.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="relative p-8 border border-white/10 bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <h3 className="text-5xl font-black font-orbitron text-white/10 absolute top-4 right-4 group-hover:text-white/20 transition-colors">
                {String(index + 1).padStart(2, '0')}
              </h3>

              <div className="relative z-10">
                <span className="inline-block px-3 py-1 bg-neon-purple/20 text-neon-purple text-xs font-bold tracking-wider rounded-full mb-4 border border-neon-purple/30">
                  ACHIEVEMENT
                </span>
                <h4 className="text-2xl font-bold font-orbitron text-white mb-2 group-hover:text-neon-cyan transition-colors">
                  {item.title}
                </h4>
                <p className="text-gray-400 text-sm mb-6">
                  {item.desc}
                </p>
                <div className="text-3xl font-bold text-white text-glow">
                  {item.stat}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Legacy;
