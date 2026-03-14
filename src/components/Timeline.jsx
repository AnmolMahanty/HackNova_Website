import { motion } from "framer-motion";
import { Calendar, Clock, Flag, CheckCircle, Users, Trophy } from "lucide-react";

const events = [
  {
    date: "17", month: "MAR", year: "2026", time: "8:00 AM - 9:15 AM",
    title: "Registration & Check-in",
    description: "Participant verification, ID badge distribution.",
    icon: <Flag />, status: "UPCOMING"
  },
  {
    date: "17", month: "MAR", year: "2026", time: "8:15 AM - 9:30 AM",
    title: "Breakfast & Networking",
    description: "Light breakfast and informal networking among teams.",
    icon: <Users />, status: "UPCOMING"
  },
  {
    date: "17", month: "MAR", year: "2026", time: "9:30 AM - 10:30 AM",
    title: "Inauguration Ceremony",
    description: "Welcome address, introduction of hackathon theme and rules, chief guest address, launch announcement (only Team Leaders will attend).",
    icon: <Flag />, status: "UPCOMING"
  },
  {
    date: "17", month: "MAR", year: "2026", time: "10:30 AM - 1:30 PM",
    title: "Hacking Session – 1",
    description: "Teams will add final touches and provide complete details about their Hackathon Project (with the tasks they have completed ) to the organizers (to be reviewed in-depth by judges before the final presentation).",
    icon: <CheckCircle />, status: "UPCOMING" 
  },
  {
    date: "17", month: "MAR", year: "2026", time: "1:00 PM - 2:30 PM",
    title: "Lunch Break",
    description: "Lunch provided. Participants can continue working on their project.",
    icon: <Clock />, status: "UPCOMING"
  },
  {
    date: "17", month: "MAR", year: "2026", time: "2:30 PM - 3:30 PM",
    title: "Hacking Session – 2",
    description: "Teams will finalize their work and apply the finishing touches to their projects.",
    icon: <CheckCircle />, status: "UPCOMING"
  },
  {
    date: "17", month: "MAR", year: "2026", time: "3:30 PM - 6:00 PM",
    title: "Final Judging Round",
    description: "Each team presents for 5 minutes followed by 3 minutes of Q&A with judges.",
    icon: <Users />, status: "UPCOMING"
  },
  {
    date: "17", month: "MAR", year: "2026", time: "4:30 PM - 5:00 PM",
    title: "Snacks Break",
    description: "Short refreshment break with snacks and beverages.",
    icon: <Clock />, status: "UPCOMING"
  },
  {
    date: "17", month: "MAR", year: "2026", time: "6:15 PM - 7:00 PM",
    title: "Result Announcement & Felicitation",
    description: "Judges' remarks, winner announcement, prize distribution, certificate distribution, vote of thanks, closing group photo.",
    icon: <Trophy />, status: "UPCOMING", highlight: true
  }
];

const statusConfig = {
  COMPLETED: { border: "border-neon-blue",   text: "text-neon-blue",   dot: "bg-neon-blue",   shadow: "shadow-[0_0_10px_rgba(0,240,255,0.8)]" },
  ACTIVE:    { border: "border-neon-purple", text: "text-neon-purple", dot: "bg-neon-purple", shadow: "shadow-[0_0_10px_rgba(217,70,239,0.8)]" },
  UPCOMING:  { border: "border-gray-700",    text: "text-gray-500",    dot: "bg-gray-700",    shadow: "" },
};

const Timeline = () => {
  return (
    // ── VIDEO SECTION: transparent bg so global video shows through ──
    <section className="min-h-screen bg-black/50 py-16 md:py-24 px-6 relative overflow-hidden scanlines border-t border-white/5">
      {/* Neon-blue grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,240,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,240,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />
      {/* Radial glow */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(0,240,255,0.08),transparent_55%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-neon-blue/50 font-mono text-xs tracking-widest uppercase mb-3">// SYNCHRONIZE_WATCHES</p>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            data-text="EVENT FLOW"
            className="glitch-text text-4xl md:text-6xl font-bold font-orbitron text-white mb-4"
          >
            EVENT <span className="text-neon-blue">FLOW</span>
          </motion.h2>
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-16 bg-neon-blue/50" />
            <p className="text-gray-400 font-mono text-sm">Critical milestones ahead.</p>
            <div className="h-px w-16 bg-neon-blue/50" />
          </div>
        </div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Central Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 md:w-px bg-neon-blue/60 shadow-[0_0_15px_rgba(0,240,255,0.5)] md:-translate-x-1/2" />

          <div className="space-y-12">
            {events.map((event, index) => {
              const cfg = statusConfig[event.status];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                  className={`relative flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                >
                  {/* Dot */}
                  <div className={`absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-black border-2 ${cfg.border} z-20 md:-translate-x-1/2 translate-y-6 md:translate-y-0 ${cfg.shadow}`}>
                    <div className={`absolute inset-0 ${cfg.dot} rounded-full opacity-40 animate-ping`} />
                  </div>

                  <div className="hidden md:block w-1/2" />

                  {/* Card */}
                  <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${index % 2 === 0 ? "md:pr-12 text-left md:text-right" : "md:pl-12 text-left"}`}>
                    <div className={`relative bg-black/60 backdrop-blur-sm border p-6 rounded-xl group transition-all glitch-card ${
                      event.highlight
                        ? "border-neon-blue/60 shadow-[0_0_25px_rgba(0,240,255,0.2)]"
                        : "border-white/10 hover:border-neon-blue/40"
                    }`}>
                      {/* Date & Time Row */}
                      <div className={`flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                        {/* Event Date Box */}
                        <div className="flex flex-col items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-white/5 rounded-lg border border-white/10 group-hover:border-neon-blue/30 transition-colors shrink-0">
                          <span className="text-lg sm:text-xl font-bold text-white">{event.date}</span>
                          <span className="text-[10px] sm:text-xs text-neon-blue font-mono">{event.month}</span>
                        </div>
                        
                        {/* Event Time and Status Box */}
                        <div className={`flex flex-col gap-2 ${index % 2 === 0 ? "md:items-end" : "items-start"}`}>
                          {/* Emphasized Time Badge */}
                          <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-neon-blue/10 border border-neon-blue/40 text-neon-blue shadow-[0_0_10px_rgba(0,240,255,0.15)] font-mono font-bold text-sm sm:text-base tracking-wide`}>
                            <Clock size={16} className="text-neon-blue" />
                            {event.time}
                          </div>
                          {/* Status Badge */}
                          <span className={`text-[10px] sm:text-xs font-mono px-2 py-0.5 rounded border ${cfg.border} ${cfg.text}`}>
                            {event.status}
                          </span>
                        </div>
                      </div>

                      {/* Event Title (Properly Named) */}
                      <h3 className={`text-xl md:text-2xl font-orbitron font-bold text-white mb-3 group-hover:text-neon-blue transition-colors rgb-hover ${index % 2 === 0 ? "md:text-right text-left" : "text-left"}`}>
                        {event.title}
                      </h3>
                      {/* Event Description */}
                      <p className={`text-gray-400 text-sm leading-relaxed ${index % 2 === 0 ? "md:text-right text-left" : "text-left"}`}>
                        {event.description}
                      </p>

                      {/* Connector arrow */}
                      <div className={`absolute top-8 hidden md:block w-3 h-3 bg-black/60 border-t border-l border-white/10 rotate-45 group-hover:border-neon-blue/40 transition-colors ${
                        index % 2 === 0 ? "-right-[7px] border-l-0 border-b border-r" : "-left-[7px]"
                      }`} />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
