import React from 'react';

interface MarqueeProps {
  text: string;
  direction?: 'left' | 'right';
}

const MarqueeText: React.FC<MarqueeProps> = ({ text, direction = 'left' }) => {
  return (
    <div className="relative flex overflow-hidden py-12 bg-brand-dark border-y border-white/5">
      <div className={`py-4 animate-marquee whitespace-nowrap flex gap-12 ${direction === 'right' ? 'animate-marquee-reverse' : ''}`}>
        {[...Array(4)].map((_, i) => (
            <span key={i} className="text-8xl md:text-9xl font-display font-bold uppercase italic text-transparent stroke-text opacity-20 hover:opacity-100 transition-opacity duration-500 cursor-default">
              {text}
            </span>
        ))}
      </div>
      <style>{`
        .stroke-text {
          -webkit-text-stroke: 2px #fff;
        }
        @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-100%); }
        }
        @keyframes marquee-reverse {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(0); }
        }
        .animate-marquee {
            animation: marquee 40s linear infinite;
        }
         .animate-marquee-reverse {
            animation: marquee-reverse 40s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default MarqueeText;
