import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      role: 'Administrative Officer & Operations',
      company: 'Carter & Finch',
      period: 'Sept 2025 – Present',
      responsibilities: [
        'Overseeing day-to-day office operations and administration.',
        'Managing vendor relations and ensuring compliance.',
        'Streamlining internal workflows for maximum efficiency.',
      ],
    },
    {
      role: 'Administrative Officer',
      company: 'FINJOBS INDIA',
      period: 'June 2024 – May 2025',
      responsibilities: [
        'Provided comprehensive administrative support to the executive team.',
        'Coordinated HR activities and managed employee records.',
        'Assisted in documentation and regulatory compliance.',
      ],
    },
    {
      role: 'Business Development Manager',
      company: 'Midwest College / Atrium School of Design',
      period: 'Jan 2023 - Feb 2024',
      responsibilities: [
        'Managed campus administration and student services.',
        'Organized events and optimized daily scheduling.',
      ],
    },
    {
      role: 'Import and Export Supervisor',
      company: 'Orbit express world wide courier licensed customs House agency Cochin international Airport India',
      period: 'Jan 2020 - Sep 2022',
      responsibilities: [
        'Handled dispatch operations and route planning.',
        'Maintained accurate inventory and delivery records.',
      ],
    },
  ];

  return (
    <section id="experience" className="py-32 relative z-10">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-sm tracking-widest text-purple-400 uppercase font-semibold mb-3">Career Path</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white">Professional Experience</h3>
        </motion.div>

        <div className="relative border-l border-[rgba(255,255,255,0.1)] ml-4 md:ml-8 pl-8 md:pl-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.6, type: "spring", stiffness: 50 }}
              className="mb-16 relative group"
            >
              {/* Animated Timeline Node */}
              <div className="absolute w-5 h-5 bg-[#0b0f19] border-2 border-cyan-400 rounded-full -left-[43px] md:-left-[59px] top-1.5 shadow-[0_0_15px_rgba(0,242,254,0.5)] group-hover:scale-125 group-hover:bg-cyan-400 transition-all duration-300" />
              
              <div className="glass-card p-8 md:p-10 relative overflow-hidden transition-all duration-500 hover:border-cyan-500/30">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-purple-500/10 to-transparent blur-2xl" />
                
                <span className="inline-block px-4 py-1 rounded-full bg-[rgba(255,255,255,0.05)] text-xs font-bold text-cyan-300 mb-4 tracking-wider uppercase border border-[rgba(255,255,255,0.05)]">
                  {exp.period}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold mb-2 text-white group-hover:text-cyan-100 transition-colors">{exp.role}</h3>
                <h4 className="text-purple-300 font-medium mb-6 text-lg">{exp.company}</h4>
                <ul className="space-y-3">
                  {exp.responsibilities.map((req, i) => (
                    <li key={i} className="flex items-start text-slate-400 font-light text-base leading-relaxed">
                      <span className="text-cyan-500 mr-3 mt-1.5 opacity-50 text-xs">◆</span>
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
