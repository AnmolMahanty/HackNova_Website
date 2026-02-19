import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

const Organizers = () => {
  const team = [
    { name: "Admin One", role: "Lead Organizer" },
    { name: "Admin Two", role: "Tech Lead" },
    { name: "Admin Three", role: "Operations" },
    { name: "Admin Four", role: "Marketing" },
  ];

  return (
    <section id="team" className="py-20 px-6 bg-black relative border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-orbitron mb-4">
            COMMAND <span className="text-neon-purple">CENTER</span>
          </h2>
          <p className="text-gray-400">Shivajirao S. Jondhale College of Engineering</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-[#0a0f1f] border border-gray-800 p-6 rounded-xl text-center group hover:border-neon-purple/50 transition-colors"
            >
              <div className="w-24 h-24 mx-auto bg-gray-800 rounded-full mb-4 overflow-hidden group-hover:ring-2 ring-neon-purple transition-all">
                  <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900"></div>
              </div>
              <h3 className="text-xl font-bold font-orbitron text-white group-hover:text-neon-purple transition-colors">
                {member.name}
              </h3>
              <p className="text-neon-blue text-sm mb-4">{member.role}</p>
              
              <a href="#" className="inline-block text-gray-500 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Organizers;
