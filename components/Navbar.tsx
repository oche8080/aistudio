import React, { useState, useEffect } from 'react';
import { Menu, X, Dumbbell } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Classes', href: '#classes' },
    { name: 'Trainers', href: '#trainers' },
    { name: 'AI Coach', href: '#ai-coach' },
    { name: 'Membership', href: '#membership' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-brand-black/90 backdrop-blur-md py-4 border-b border-white/10' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2 group cursor-pointer" onClick={() => window.scrollTo(0,0)}>
          <Dumbbell className="h-8 w-8 text-brand-lime group-hover:rotate-12 transition-transform" />
          <span className="text-2xl font-display font-bold tracking-tighter text-white uppercase italic">
            Gym<span className="text-brand-lime">Junkies</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-semibold uppercase tracking-widest text-gray-300 hover:text-brand-lime transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button className="bg-brand-lime text-brand-black px-6 py-2 font-bold uppercase tracking-wider hover:bg-white transition-colors">
            Join Now
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-brand-black border-t border-white/10 p-6 flex flex-col gap-4 shadow-2xl">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-lg font-display font-bold uppercase text-white hover:text-brand-lime"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <button className="w-full bg-brand-lime text-brand-black py-3 font-bold uppercase tracking-wider">
            Join Now
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
