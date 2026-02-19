import { motion } from "framer-motion";
import { Calendar, Clock, Flag, CheckCircle, Users, Trophy } from "lucide-react";

const Timeline = () => {
  const events = [
    {
      date: "11",
      month: "FEB",
      year: "2026",
      time: "12:00 AM IST",
      title: "Registration Opens",
      description: "Portal opens for team registration and idea submission.",
      icon: <Flag />,
      status: "COMPLETED"
    },
    {
      date: "23",
      month: "FEB",
      year: "2026",
      time: "2:00 PM IST",
      title: "Pre-Hackathon Event",
      description: "Detailed explanation of the Hackathon and the problem statements.",
      icon: <Calendar />,
      status: "UPCOMING"
    },
    {
      date: "24",
      month: "FEB",
      year: "2026",
      time: "12:00 AM IST",
      title: "Registration Deadline",
      description: "Last date to register your team and submit initial abstracts.",
      icon: <Clock />,
      status: "ACTIVE"
    },
    {
      date: "28",
      month: "FEB",
      year: "2026",
      time: "12:00 AM IST",
      title: "PPT & Prototype Submission",
      description: "Deadline for submitting detailed presentation and prototype video.",
      icon: <CheckCircle />,
      status: "UPCOMING"
    },
    {
      date: "07",
      month: "MAR",
      year: "2026",
      time: "12:00 AM IST",
      title: "Shortlist Announcement",
      description: "Top teams selected for the grand finale are announced.",
      icon: <Trophy />,
      status: "UPCOMING"
    },
    {
      date: "09",
      month: "MAR",
      year: "2026",
      time: "12:00 AM IST",
      title: "Mentor Allocation",
      description: "Industry experts assigned to shortlisted teams for guidance.",
      icon: <Users />,
      status: "UPCOMING"
    },
    {
      date: "17",
      month: "MAR",
      year: "2026",
      time: "08:00 AM IST",
      title: "Offline Hackathon Day",
      description: "The Grand Finale. In-person coding, building, and pitching.",
      icon: <Calendar />,
      status: "UPCOMING",
      highlight: true
    }
  ];

  return (
    <section className="min-h-screen bg-black py-24 px-6 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(0,240,255,0.1),transparent_50%)]"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-20">
                <motion.h2 
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-6xl font-bold font-orbitron text-white mb-4"
                >
                    MISSION <span className="text-neon-blue">TIMELINE</span>
                </motion.h2>
                <div className="flex items-center justify-center gap-2">
                    <div className="h-1 w-12 bg-neon-blue"></div>
                    <p className="text-gray-400 font-mono text-sm">Synchronize your watches. Critical milestones ahead.</p>
                    <div className="h-1 w-12 bg-neon-blue"></div>
                </div>
            </div>

            <div className="relative max-w-5xl mx-auto">
                {/* Central Line */}
                <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 md:w-1 bg-neon-blue shadow-[0_0_15px_rgba(0,240,255,0.6)] md:-translate-x-1/2"></div>

                <div className="space-y-12">
                    {events.map((event, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className={`relative flex flex-col md:flex-row items-center gap-8 ${
                                index % 2 === 0 ? "md:flex-row-reverse" : ""
                            }`}
                        >
                            {/* Dot on Line */}
                            <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-black border-2 border-neon-blue z-20 md:-translate-x-1/2 translate-y-6 md:translate-y-0 shadow-[0_0_10px_rgba(0,240,255,0.8)]">
                                <div className="absolute inset-0 bg-neon-blue rounded-full opacity-50 animate-ping"></div>
                            </div>
                            
                            {/* Empty Half for Desktop Alignment */}
                            <div className="hidden md:block w-1/2"></div>

                            {/* Content Card */}
                            <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${index % 2 === 0 ? "md:pr-12 text-left md:text-right" : "md:pl-12 text-left"}`}>
                                <div className={`relative bg-[#0c0c0c] border border-white/10 p-6 rounded-xl hover:border-neon-blue/50 transition-colors group ${event.highlight ? "border-neon-blue shadow-[0_0_20px_rgba(0,240,255,0.1)]" : ""}`}>
                                    
                                    {/* Date Display (Mobile: Top, Desktop: Side based on alignment) */}
                                    <div className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                                        <div className="flex flex-col items-center justify-center w-16 h-16 bg-white/5 rounded-lg border border-white/10 group-hover:bg-white/10 transition-colors">
                                            <span className="text-xl font-bold text-white">{event.date}</span>
                                            <span className="text-xs text-neon-blue font-mono">{event.month}</span>
                                        </div>
                                        <div className={`${index % 2 === 0 ? "md:text-right" : ""}`}>
                                            <span className={`text-xs font-mono px-2 py-1 rounded border ${
                                                event.status === "COMPLETED" ? "border-green-500 text-green-500" :
                                                event.status === "ACTIVE" ? "border-yellow-500 text-yellow-500" :
                                                "border-gray-600 text-gray-500"
                                            }`}>
                                                {event.status}
                                            </span>
                                            <div className="text-gray-400 text-xs mt-1 flex items-center gap-1">
                                                <Clock size={12}/> {event.time}
                                            </div>
                                        </div>
                                    </div>

                                    <h3 className={`text-xl font-orbitron font-bold text-white mb-2 group-hover:text-neon-blue transition-colors`}>
                                        {event.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        {event.description}
                                    </p>
                                    
                                    {/* Arrow connecting to line */}
                                    <div className={`absolute top-8 hidden md:block w-3 h-3 bg-[#0c0c0c] border-t border-l border-white/10 rotate-45 group-hover:border-neon-blue/50 transition-colors ${
                                        index % 2 === 0 ? "-right-[7px] border-l-0 border-b border-r" : "-left-[7px]"
                                    }`}></div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    </section>
  );
};

export default Timeline;
