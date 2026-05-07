import React from 'react';
import { FiLinkedin, FiMail, FiPhone } from 'react-icons/fi';
import { FaWhatsapp, FaInstagram, FaFacebookF } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="border-t border-[rgba(255,255,255,0.05)] bg-[#070a12] py-16 relative z-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="text-center md:text-left">
          <a href="#" className="text-3xl font-bold text-white tracking-tighter flex items-center justify-center md:justify-start gap-1">
            <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(0,242,254,0.8)]" />
            Aghil
          </a>
          <p className="text-slate-500 text-sm mt-4 font-light">
            Administrative Officer & Operations Specialist.
          </p>
        </div>

        <div className="flex gap-4">
          <a
            href="tel:+919562239331"
            className="w-12 h-12 rounded-full bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.05)] flex items-center justify-center text-slate-400 hover:text-emerald-400 hover:border-emerald-400/50 transition-all duration-300"
          >
            <FiPhone className="text-xl" />
          </a>
          <a
            href="https://wa.me/919562239331"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.05)] flex items-center justify-center text-slate-400 hover:text-green-400 hover:border-green-400/50 transition-all duration-300"
          >
            <FaWhatsapp className="text-xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/aghil-mohammed-a3b314134/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.05)] flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-400/50 transition-all duration-300"
          >
            <FiLinkedin className="text-xl" />
          </a>
          <a
            href="mailto:aghilmohammed5@gmail.com"
            className="w-12 h-12 rounded-full bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.05)] flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-400/50 transition-all duration-300"
          >
            <FiMail className="text-xl" />
          </a>
          <a
            href="https://www.instagram.com/mhd_aghil_tn/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.05)] flex items-center justify-center text-slate-400 hover:text-pink-400 hover:border-pink-400/50 transition-all duration-300"
          >
            <FaInstagram className="text-xl" />
          </a>
          <a
            href="https://www.facebook.com/mohd.aghil.t.n"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.05)] flex items-center justify-center text-slate-400 hover:text-indigo-400 hover:border-indigo-400/50 transition-all duration-300"
          >
            <FaFacebookF className="text-xl" />
          </a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-16 text-center text-slate-600 text-xs font-semibold tracking-widest uppercase">
        <p>&copy; {new Date().getFullYear()} Aghil Mohammed. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
