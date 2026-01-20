import React from 'react';
import { Trainer } from '../types';

const trainers: Trainer[] = [
    { id: '1', name: 'Jax Hammer', role: 'Head of Strength', image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop' },
    { id: '2', name: 'Elena Bolt', role: 'Sprint Coach', image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop' },
    { id: '3', name: 'Marcus Steel', role: 'Crossfit Pro', image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop' },
];

const Trainers: React.FC = () => {
    return (
        <section id="trainers" className="py-24 bg-brand-dark">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-5xl md:text-7xl font-display font-bold uppercase italic text-white mb-16 text-right">
                    Elite <span className="text-brand-lime">Squad</span>
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {trainers.map((trainer) => (
                        <div key={trainer.id} className="relative group overflow-hidden h-[500px]">
                            <img 
                                src={trainer.image} 
                                alt={trainer.name} 
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent opacity-90" />
                            <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <h3 className="text-3xl font-display font-bold uppercase italic text-white leading-none">{trainer.name}</h3>
                                <p className="text-brand-lime font-bold uppercase tracking-widest text-sm mt-2">{trainer.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Trainers;
