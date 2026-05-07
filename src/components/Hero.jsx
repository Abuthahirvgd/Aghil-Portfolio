import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiDownload } from 'react-icons/fi';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center relative z-10"
      >
        <motion.div variants={itemVariants} className="relative w-36 h-36 md:w-48 md:h-48 mb-10 group">
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-400 to-purple-500 blur-xl opacity-50 group-hover:opacity-80 group-hover:scale-110 transition-all duration-700" />
          <img
            src="/aghil.png"
            alt="Aghil Mohammed"
            className=" w-full h-full object-cover border-4 border-[rgba(255,255,255,0.2)] relative z-10 filter grayscale hover:grayscale-0 transition-all duration-700"
          />
        </motion.div>

        <motion.div variants={itemVariants} className="mb-6 flex items-center gap-3 bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] px-5 py-2 rounded-full backdrop-blur-sm">
          <div className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.8)] animate-pulse" />
          <h2 className="text-slate-300  text-[8px] md:text-[10px] tracking-widest uppercase">
            Administrative Officer & Operations
          </h2>
        </motion.div>

        <motion.h1 variants={itemVariants} className="text-xl md:text-xl lg:text-xl font-bold mb-8 leading-[1.1] tracking-tight text-white">
          Hello I'm<br />
          <span className="text-2xl md:text-3xl lg:text-4xl text-gradient">Aghil Mohammed.</span>
        </motion.h1>

        <motion.p variants={itemVariants} className="text-slate-400 text-sm md:text-lg max-w-xl mb-12 font-light leading-relaxed">
          Transforming chaotic workflows into seamless operational masterpieces from Kerala, India.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
          <a
            href="#contact"
            className="group flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-full font-medium hover:scale-105 transition-transform duration-300"
          >
            Start a Conversation 
            <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="/Profile.pdf"
            download="Aghil Mohammed Resume.pdf"
            className="flex items-center justify-center gap-2 px-8 py-4 rounded-full font-medium border border-[rgba(255,255,255,0.1)] text-white hover:bg-[rgba(255,255,255,0.05)] transition-colors duration-300 backdrop-blur-md"
          >
            <FiDownload /> View Resume
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
