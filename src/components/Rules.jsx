import { motion } from "framer-motion";
import { Terminal } from "lucide-react";

const Rules = () => {
  const rules = [
    "Teams must consist of 2 to 4 members.",
    "All projects must be built from scratch during the hackathon.",
    "Plagiarism of any kind will lead to immediate disqualification.",
    "Respect all participants, mentors, and organizers.",
    "Follow the event timeline strictly; no extensions.",
    "Decisions made by the judges are final and binding."
  ];

  return (
    <section id="rules" className="py-20 px-6 bg-black flex justify-center">
      <div className="max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-[#0c0c0c] border border-gray-800 rounded-lg shadow-2xl overflow-hidden font-mono"
        >
          {/* Terminal Header */}
          <div className="bg-[#1a1a1a] px-4 py-2 border-b border-gray-800 flex items-center gap-4">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="text-gray-400 text-xs flex items-center gap-2">
              <Terminal size={12} />
              protocol_directives.sh
            </div>
          </div>

          {/* Terminal Body */}
          <div className="p-6 md:p-10 text-gray-300 space-y-4">
            <div className="text-neon-blue mb-6">
              $ ./view_protocols --all
            </div>

            {rules.map((rule, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                className="flex gap-3"
              >
                <span className="text-neon-purple shrink-0">{`>`}</span>
                <span>
                  <span className="text-gray-500 mr-2">[{String(index + 1).padStart(2, '0')}]</span>
                  {rule}
                </span>
              </motion.div>
            ))}

             <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="mt-6 text-neon-blue animate-pulse"
              >
                $ _
              </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Rules;
