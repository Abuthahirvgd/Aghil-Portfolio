import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const highlights = [
    'Operations Coordination',
    'Compliance Support',
    'Workflow Optimization',
    'Vendor Management',
  ];

  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="glass-card p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row gap-16 items-center group relative overflow-hidden"
        >
          {/* Subtle inner glow on hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-blue-500/0 to-purple-500/0 group-hover:from-cyan-500/5 group-hover:via-blue-500/5 group-hover:to-purple-500/5 transition-colors duration-700" />

          <div className="lg:w-1/2 relative z-10">
            <h2 className="text-sm tracking-widest text-cyan-400 uppercase font-semibold mb-3">Behind the Operations</h2>
            <h3 className="text-3xl md:text-5xl font-bold mb-8 text-white">About Me</h3>
            
            <p className="text-slate-300 leading-relaxed mb-6 text-lg font-light">
              As an Administrative Officer at Carter & Finch, I excel in organizing complex operations
              and ensuring seamless departmental coordination. My expertise lies in turning chaotic
              workflows into streamlined processes.
            </p>
            <p className="text-slate-300 leading-relaxed mb-10 text-lg font-light">
              With a background in Business Administration and Electrical & Electronics Engineering,
              I bring a unique analytical perspective to administrative problem-solving, making sure
              that every operational detail aligns with broader business goals.
            </p>

            <div className="flex flex-wrap gap-3">
              {highlights.map((item, index) => (
                <span
                  key={index}
                  className="px-5 py-2 bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.1)] rounded-full text-sm font-medium text-slate-300 hover:border-cyan-400/50 hover:text-cyan-300 transition-colors cursor-default"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 grid grid-cols-2 gap-6 relative z-10">
            {[
              { stat: '6+', label: 'Years Experience', color: 'from-cyan-400 to-blue-500' },
              { stat: '100%', label: 'Commitment', color: 'from-blue-400 to-indigo-500' },
              { stat: '24/7', label: 'Support', color: 'from-indigo-400 to-purple-500' },
              { stat: '∞', label: 'Efficiency', color: 'from-purple-400 to-pink-500' },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-[rgba(0,0,0,0.2)] p-8 rounded-3xl border border-[rgba(255,255,255,0.03)] flex flex-col items-center justify-center text-center hover-glow relative overflow-hidden"
              >
                <h4 className={`text-5xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r ${item.color}`}>
                  {item.stat}
                </h4>
                <p className="text-sm text-slate-400 font-medium tracking-wide uppercase">{item.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
