import React from 'react';
import { motion } from 'framer-motion';
import { FiBookOpen } from 'react-icons/fi';

const Education = () => {
  const education = [
    {
      degree: "Bachelor's in Business Administration",
      institution: "Annamalai University",
      status: "Completed"
    },
    {
      degree: "Diploma in Electrical & Electronics Engineering",
      institution: "Government Polytechnic College, Palakkad",
      status: "Completed"
    }
  ];

  return (
    <section id="education" className="py-32 relative z-10">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-sm tracking-widest text-indigo-400 uppercase font-semibold mb-3">Academic Background</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white">Education</h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="glass-card p-10 rounded-[2.5rem] hover:border-indigo-500/40 hover:shadow-[0_0_40px_rgba(99,102,241,0.15)] transition-all duration-500 flex flex-col items-center text-center relative overflow-hidden group"
            >
              {/* Background gradient orb that expands on hover */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-indigo-500/20 rounded-full blur-3xl group-hover:w-64 group-hover:h-64 transition-all duration-700" />
              
              <div className="w-20 h-20 bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.05)] rounded-full flex items-center justify-center text-4xl mb-8 shadow-xl text-indigo-300 z-10 group-hover:scale-110 group-hover:text-white transition-all duration-500">
                <FiBookOpen />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 z-10 text-white">{item.degree}</h3>
              <p className="text-slate-400 mb-8 z-10 font-medium text-lg">{item.institution}</p>
              
              <div className="mt-auto z-10">
                <span className="inline-flex items-center gap-2 px-5 py-2 bg-[rgba(0,0,0,0.3)] border border-[rgba(255,255,255,0.05)] text-slate-300 rounded-full text-xs font-bold tracking-widest uppercase">
                  <span className={`w-2 h-2 rounded-full ${item.status === 'Completed' ? 'bg-green-400' : 'bg-cyan-400 animate-pulse'}`} />
                  {item.status}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
