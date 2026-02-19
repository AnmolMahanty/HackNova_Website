import { motion } from "framer-motion";
import { Linkedin, MessageCircle } from "lucide-react";

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

        <div className="flex flex-wrap justify-center gap-8">
          {[
            { name: "Samad Kazi", contact: "8108369366" },
            { name: "Anmol Mahanty", contact: "9029916542" },
            { name: "Yash Mohite", contact: "9967053816" }
          ].map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-[#0a0f1f] border border-gray-800 p-8 rounded-xl text-center group hover:border-neon-purple/50 transition-colors w-full sm:w-80"
            >
              <h3 className="text-2xl font-bold font-orbitron text-white group-hover:text-neon-purple transition-colors mb-2">
                {member.name}
              </h3>
              <p className="text-neon-blue text-sm mb-6 uppercase tracking-widest">Organizer</p>
              
              <a 
                href={`https://wa.me/91${member.contact.replace(/\s/g, '')}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-400 hover:text-green-400 transition-colors border border-white/10 px-4 py-2 rounded-full hover:border-green-400/50 bg-white/5"
              >
                <MessageCircle size={18} />
                <span className="font-mono text-sm">{member.contact}</span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Organizers;
