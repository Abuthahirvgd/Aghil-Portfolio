import React from 'react';
import { motion } from 'framer-motion';
import { FiLayers, FiBriefcase, FiTrendingUp, FiUsers, FiClipboard, FiShield } from 'react-icons/fi';

const Skills = () => {
  const skills = [
    { name: 'Administrative Organization', icon: <FiLayers />, color: 'group-hover:text-cyan-400 group-hover:border-cyan-400/50' },
    { name: 'Department Administration', icon: <FiBriefcase />, color: 'group-hover:text-blue-400 group-hover:border-blue-400/50' },
    { name: 'New Business Opportunities', icon: <FiTrendingUp />, color: 'group-hover:text-purple-400 group-hover:border-purple-400/50' },
    { name: 'Vendor Management', icon: <FiUsers />, color: 'group-hover:text-pink-400 group-hover:border-pink-400/50' },
    { name: 'HR Coordination', icon: <FiClipboard />, color: 'group-hover:text-indigo-400 group-hover:border-indigo-400/50' },
    { name: 'Documentation & Compliance', icon: <FiShield />, color: 'group-hover:text-teal-400 group-hover:border-teal-400/50' },
  ];

  return (
    <section id="skills" className="py-32 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-sm tracking-widest text-cyan-400 uppercase font-semibold mb-3">Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6 text-white">Core Competencies</h3>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg font-light">
            A diverse set of skills honed to optimize organizational efficiency and drive strategic growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`glass-card p-10 group transition-all duration-500 hover:-translate-y-3 cursor-default border border-[rgba(255,255,255,0.05)] ${skill.color} hover:bg-[rgba(255,255,255,0.05)] hover:shadow-2xl hover:shadow-[var(--tw-shadow-color)]`}
              style={{ '--tw-shadow-color': 'rgba(0,0,0,0.5)' }}
            >
              <div className="w-14 h-14 rounded-2xl bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.05)] flex items-center justify-center text-3xl mb-8 text-slate-400 transition-all duration-500 group-hover:scale-110 shadow-inner group-hover:bg-[rgba(255,255,255,0.1)]">
                {skill.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-200 group-hover:text-white transition-colors">{skill.name}</h3>
              <div className="h-1 w-12 bg-[rgba(255,255,255,0.1)] rounded-full overflow-hidden">
                <div className="h-full w-0 bg-current transition-all duration-500 group-hover:w-full" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
