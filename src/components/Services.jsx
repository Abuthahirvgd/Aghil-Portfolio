import React from 'react';
import { motion } from 'framer-motion';
import { FiCheckCircle } from 'react-icons/fi';

const Services = () => {
  const services = [
    { title: 'Office Administration', desc: 'Comprehensive oversight of daily office operations to ensure a productive environment.' },
    { title: 'Operations Management', desc: 'Designing and implementing efficient operational strategies aligned with business goals.' },
    { title: 'Vendor Coordination', desc: 'Managing external partnerships, negotiating contracts, and ensuring quality service delivery.' },
    { title: 'HR Support', desc: 'Assisting with recruitment, onboarding, employee relations, and maintaining personnel records.' },
    { title: 'Process Optimization', desc: 'Analyzing existing workflows and implementing tech-driven solutions to boost productivity.' },
  ];

  return (
    <section id="services" className="py-32 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="max-w-2xl mx-auto">
            <h2 className="text-sm tracking-widest text-pink-400 uppercase font-semibold mb-3">Value Proposition</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-6 text-white">What I Do</h3>
            <p className="text-slate-400 text-lg font-light">
              Delivering operational excellence through tailored administrative solutions.
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative p-1 rounded-3xl overflow-hidden"
            >
              {/* Animated glowing border effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[rgba(255,255,255,0.1)] to-transparent group-hover:from-pink-500/50 group-hover:to-cyan-500/50 transition-colors duration-500" />
              
              <div className="relative h-full bg-[#0b0f19] m-[1px] p-10 rounded-[23px] transition-all duration-500 group-hover:bg-[#111726]">
                <div className="text-pink-400 mb-8 transform group-hover:scale-125 transition-transform duration-500 origin-left">
                  <FiCheckCircle className="text-4xl drop-shadow-[0_0_10px_rgba(244,114,182,0.5)]" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
                <p className="text-slate-400 font-light leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
