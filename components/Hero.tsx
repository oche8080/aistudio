import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-brand-black">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop" 
          alt="Gym Background" 
          className="w-full h-full object-cover opacity-40 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-brand-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-brand-lime font-bold tracking-widest uppercase text-sm md:text-base mb-4">
            Est. 2024 • Kyiv • London • New York
          </h2>
          <h1 className="font-display font-bold text-6xl md:text-9xl uppercase italic leading-[0.85] text-white mb-6">
            Redefine <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Your Limits</span>
          </h1>
          <p className="font-sans text-gray-300 max-w-xl mx-auto mb-10 text-lg">
            Join the movement. High-performance equipment, elite coaching, and a community that never quits.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
             <button className="group relative px-8 py-4 bg-brand-lime text-brand-black font-bold uppercase tracking-wider overflow-hidden">
                <span className="relative z-10 flex items-center gap-2">
                  Start Free Trial <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out" />
             </button>
             <button className="px-8 py-4 border border-white/20 text-white font-bold uppercase tracking-wider hover:bg-white/10 transition-colors">
                View Schedule
             </button>
          </div>
        </motion.div>
      </div>

      {/* Scrolling Ticker at Bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden bg-brand-lime py-3">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(10)].map((_, i) => (
            <span key={i} className="text-brand-black font-display font-bold text-2xl uppercase mx-8 italic">
              Strength • Cardio • Resilience • Community • Power •
            </span>
          ))}
        </div>
      </div>
      
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
