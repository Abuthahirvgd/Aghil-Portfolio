import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = formData;
    if (!name.trim() || !email.trim() || !message.trim()) {
      return;
    }

    const text = `Hello, I'm ${name}.
Email: ${email}

${message}`;

    const phoneNumber = '919562239331';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="py-32 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/3"
          >
            <h2 className="text-sm tracking-widest text-cyan-400 uppercase font-semibold mb-3">Get in Touch</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-8 text-white">Let's Connect</h3>
            <p className="text-slate-400 mb-16 text-lg font-light leading-relaxed">
              Whether you have a question, an opportunity, or just want to say hi, I'll try my best to get back to you!
            </p>

            <div className="space-y-10">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-[rgba(255,255,255,0.03)] rounded-2xl flex items-center justify-center border border-[rgba(255,255,255,0.05)] text-cyan-400 group-hover:bg-cyan-500/10 group-hover:border-cyan-500/30 transition-all duration-300">
                  <FiPhone className="text-2xl" />
                </div>
                <div>
                  <h4 className="text-xs text-slate-500 uppercase tracking-widest mb-1 font-semibold">Phone</h4>
                  <a href="tel:+919562239331" className="text-xl font-medium text-white hover:text-cyan-400 transition-colors">
                    +91 9562239331
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-[rgba(255,255,255,0.03)] rounded-2xl flex items-center justify-center border border-[rgba(255,255,255,0.05)] text-blue-400 group-hover:bg-blue-500/10 group-hover:border-blue-500/30 transition-all duration-300">
                  <FiMail className="text-2xl" />
                </div>
                <div>
                  <h4 className="text-xs text-slate-500 uppercase tracking-widest mb-1 font-semibold">Email</h4>
                  <a href="mailto:aghilmohammed5@gmail.com" className="text-xl font-medium text-white hover:text-blue-400 transition-colors break-all">
                    aghilmohammed5@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-[rgba(255,255,255,0.03)] rounded-2xl flex items-center justify-center border border-[rgba(255,255,255,0.05)] text-purple-400 group-hover:bg-purple-500/10 group-hover:border-purple-500/30 transition-all duration-300">
                  <FiMapPin className="text-2xl" />
                </div>
                <div>
                  <h4 className="text-xs text-slate-500 uppercase tracking-widest mb-1 font-semibold">Location</h4>
                  <p className="text-xl font-medium text-white">Kerala, India</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-2/3 glass-card p-10 md:p-14 relative"
          >
            {/* Form Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px] pointer-events-none" />
            
            <form className="space-y-8 relative z-10" onSubmit={handleWhatsAppSubmit}>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label htmlFor="name" className="text-xs font-semibold uppercase tracking-widest text-slate-400">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-[rgba(0,0,0,0.3)] border border-[rgba(255,255,255,0.1)] rounded-xl px-5 py-4 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all font-light"
                  />
                </div>
                <div className="space-y-3">
                  <label htmlFor="email" className="text-xs font-semibold uppercase tracking-widest text-slate-400">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-[rgba(0,0,0,0.3)] border border-[rgba(255,255,255,0.1)] rounded-xl px-5 py-4 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all font-light"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label htmlFor="message" className="text-xs font-semibold uppercase tracking-widest text-slate-400">Message</label>
                <textarea
                  id="message"
                  rows="5"
                  placeholder="How can I help you?"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full bg-[rgba(0,0,0,0.3)] border border-[rgba(255,255,255,0.1)] rounded-xl px-5 py-4 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all resize-none font-light"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium py-5 rounded-xl hover:shadow-[0_0_30px_rgba(0,242,254,0.3)] transition-all duration-300"
              >
                Send Message <FiSend />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
