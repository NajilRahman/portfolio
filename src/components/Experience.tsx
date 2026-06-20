import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

interface Position {
  company: string;
  role: string;
  location: string;
  period: string;
  highlights: string[];
}

const experienceData: Position[] = [
  {
    company: "Luvid Technologies",
    role: "Junior Software Engineer",
    location: "Kozhikode, Kerala, India",
    period: "Jan. 2025 - Present",
    highlights: [
      "Developed secure, modular RESTful APIs for a multi-tenant ERP and CRM platform using Express.js and TypeScript, reducing duplicate business logic by 40% through shared core engines.",
      "Implemented secure passkey (WebAuthn) passwordless authentication, attribute-based permissions (RBAC/ABAC guards), and an SSO Handoff gateway using JWT code exchange protocols to block session hijacking.",
      "Optimized backend process scalability for a core HRMS platform processing salaries for 150,000+ employees, implementing CPU-aware worker clustering to increase concurrent request throughput by 65%.",
      "Programmed statutory payroll calculations for PF, ESI, overtime, vouchers, and reimbursement heads while ensuring compliance with business rules and government regulations.",
      "Designed and optimized TypeScript-based backend services, MongoDB data models, aggregation pipelines, and Redis caching layers for payroll and employee management modules, reducing database load and improving response performance."
    ]
  },
  {
    company: "Luminar Technolab",
    role: "MERN Stack Intern",
    location: "Kozhikode, Kerala, India",
    period: "May 2024 - Dec. 2024",
    highlights: [
      "Developed and deployed full-stack MERN applications with secure authentication and custom REST APIs.",
      "Optimized MongoDB/MySQL queries and collaborated in Agile teams to deliver production-ready features.",
      "Gained hands-on experience in configuring database indexing and caching to improve query performance in multi-table queries."
    ]
  }
];

export const Experience: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15
      }
    }
  } as const;

  return (
    <section id="experience" className="flex flex-col gap-6 w-full scroll-mt-8">
      <div className="flex flex-col gap-2">
        <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight text-white">
          Professional Experience
        </h2>
        <p className="font-mono text-[11px] text-graphite uppercase tracking-widest">
          Where I've built things & made impacts
        </p>
      </div>

      <motion.div 
        className="flex flex-col gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {experienceData.map((job, idx) => (
          <motion.div 
            key={idx}
            variants={itemVariants}
            className="glass-panel rounded-3xl p-6 md:p-8 flex flex-col gap-4 hover:border-white/15 transition-colors group"
          >
            {/* Header Area */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-gradient-to-br group-hover:from-deep-violet/20 group-hover:to-sapphire/20 transition-all">
                  <Briefcase className="w-5 h-5 text-white/70 group-hover:text-emerald-glow transition-colors" />
                </div>
                <div>
                  <h3 className="font-sans text-lg font-semibold text-white leading-snug group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-emerald-glow group-hover:bg-clip-text transition-all">
                    {job.role}
                  </h3>
                  <span className="font-mono text-sm text-graphite group-hover:text-white/80 transition-colors">
                    {job.company}
                  </span>
                </div>
              </div>
              
              <div className="flex flex-col md:items-end gap-1.5 font-mono text-[11px] text-graphite shrink-0">
                <span className="flex items-center gap-1.5 bg-white/5 px-2.5 py-1 rounded-md border border-white/5 text-white/90">
                  <Calendar className="w-3.5 h-3.5 opacity-60" />
                  {job.period}
                </span>
                <span className="flex items-center gap-1.5 px-1 md:justify-end">
                  <MapPin className="w-3.5 h-3.5 opacity-65" />
                  {job.location}
                </span>
              </div>
            </div>

            {/* Impact Highlights */}
            <ul className="flex flex-col gap-3.5 border-t border-white/5 pt-5 pl-4 list-none relative">
              {/* Vertical accent glow line */}
              <div className="absolute left-0.5 top-5 bottom-0 w-[1px] bg-gradient-to-b from-sapphire to-transparent opacity-60" />
              
              {job.highlights.map((bullet, bIdx) => (
                <li 
                  key={bIdx}
                  className="font-sans text-sm leading-relaxed text-white/80 relative before:absolute before:left-[-15px] before:top-[10px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-white/20 before:group-hover:bg-emerald-glow before:transition-colors"
                >
                  {bullet}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
