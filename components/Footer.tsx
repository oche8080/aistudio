import React from 'react';
import { Dumbbell, Instagram, Twitter, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-black border-t border-white/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
            <div>
                <div className="flex items-center gap-2 mb-6">
                    <Dumbbell className="h-6 w-6 text-brand-lime" />
                    <span className="text-xl font-display font-bold tracking-tighter text-white uppercase italic">
                        Gym<span className="text-brand-lime">Junkies</span>
                    </span>
                </div>
                <p className="text-gray-400 max-w-sm">
                    Forged in sweat. Driven by results. The premier destination for those who refuse to settle for average.
                </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-12 text-sm uppercase font-bold tracking-wider text-gray-400">
                <div className="flex flex-col gap-4">
                    <span className="text-white mb-2">Explore</span>
                    <a href="#" className="hover:text-brand-lime">Classes</a>
                    <a href="#" className="hover:text-brand-lime">Trainers</a>
                    <a href="#" className="hover:text-brand-lime">Membership</a>
                </div>
                <div className="flex flex-col gap-4">
                    <span className="text-white mb-2">Company</span>
                    <a href="#" className="hover:text-brand-lime">About</a>
                    <a href="#" className="hover:text-brand-lime">Careers</a>
                    <a href="#" className="hover:text-brand-lime">Contact</a>
                </div>
                <div className="flex flex-col gap-4">
                    <span className="text-white mb-2">Legal</span>
                    <a href="#" className="hover:text-brand-lime">Privacy</a>
                    <a href="#" className="hover:text-brand-lime">Terms</a>
                </div>
            </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5">
            <p className="text-gray-600 text-sm">© 2024 GymJunkies Inc. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
                <Instagram className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
                <Twitter className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
                <Facebook className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
