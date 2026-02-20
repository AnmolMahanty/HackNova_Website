import { motion } from "framer-motion";
import { Calendar, Clock, Flag, CheckCircle, Users, Trophy } from "lucide-react";

const events = [
  {
    date: "11", month: "FEB", year: "2026", time: "12:00 AM IST",
    title: "Registration Opens",
    description: "Portal opens for team registration and idea submission.",
    icon: <Flag />, status: "COMPLETED"
  },
  {
    date: "23", month: "FEB", year: "2026", time: "2:00 PM IST",
    title: "Pre-Hackathon Event",
    description: "Detailed explanation of the Hackathon and the problem statements.",
    icon: <Calendar />, status: "UPCOMING"
  },
  {
    date: "24", month: "FEB", year: "2026", time: "12:00 AM IST",
    title: "Registration Deadline",
    description: "Last date to register your team and submit initial abstracts.",
    icon: <Clock />, status: "ACTIVE"
  },
  {
    date: "28", month: "FEB", year: "2026", time: "12:00 AM IST",
    title: "PPT & Prototype Submission",
    description: "Deadline for submitting detailed presentation and prototype video.",
    icon: <CheckCircle />, status: "UPCOMING"
  },
  {
    date: "07", month: "MAR", year: "2026", time: "12:00 AM IST",
    title: "Shortlist Teams Announcement",
    description: "Top teams selected for the grand finale are announced.",
    icon: <Trophy />, status: "UPCOMING"
  },
  {
    date: "09", month: "MAR", year: "2026", time: "12:00 AM IST",
    title: "Mentor Allocation",
    description: "Industry experts assigned to shortlisted teams for guidance.",
    icon: <Users />, status: "UPCOMING"
  },
  {
    date: "17", month: "MAR", year: "2026", time: "08:00 AM IST",
    title: "Offline Hackathon Day",
    description: "The Grand Finale. In-person coding, building, and pitching.",
    icon: <Calendar />, status: "UPCOMING", highlight: true
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
            data-text="MISSION TIMELINE"
            className="glitch-text text-4xl md:text-6xl font-bold font-orbitron text-white mb-4"
          >
            MISSION <span className="text-neon-blue">TIMELINE</span>
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
                      {/* Status + Date row */}
                      <div className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                        <div className="flex flex-col items-center justify-center w-16 h-16 bg-white/5 rounded-lg border border-white/10 group-hover:border-neon-blue/30 transition-colors shrink-0">
                          <span className="text-xl font-bold text-white">{event.date}</span>
                          <span className="text-xs text-neon-blue font-mono">{event.month}</span>
                        </div>
                        <div className={index % 2 === 0 ? "md:text-right" : ""}>
                          <span className={`text-xs font-mono px-2 py-1 rounded border ${cfg.border} ${cfg.text}`}>
                            {event.status}
                          </span>
                          <div className="text-gray-400 text-xs mt-1 flex items-center gap-1">
                            <Clock size={12} />{event.time}
                          </div>
                        </div>
                      </div>

                      <h3 className="text-xl font-orbitron font-bold text-white mb-2 group-hover:text-neon-blue transition-colors rgb-hover">
                        {event.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{event.description}</p>

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
