import React from 'react';
import { ClassItem } from '../types';

const classes: ClassItem[] = [
  { id: '1', title: 'Inferno HIIT', time: '06:00 AM', trainer: 'Alex S.', category: 'HIIT' },
  { id: '2', title: 'Iron Pump', time: '07:30 AM', trainer: 'Marcus', category: 'Strength' },
  { id: '3', title: 'Urban Flow', time: '09:00 AM', trainer: 'Sarah', category: 'Mobility' },
  { id: '4', title: 'Box & Burn', time: '05:00 PM', trainer: 'Mike', category: 'Cardio' },
  { id: '5', title: 'Powerlifting', time: '06:30 PM', trainer: 'David', category: 'Strength' },
  { id: '6', title: 'Night Run', time: '08:00 PM', trainer: 'Group', category: 'Cardio' },
];

const Classes: React.FC = () => {
  return (
    <section id="classes" className="py-24 bg-brand-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
                <h2 className="text-5xl md:text-7xl font-display font-bold uppercase italic text-white mb-2">
                    Daily <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-lime to-white">Grind</span>
                </h2>
                <p className="text-gray-400 max-w-md">Expert-led classes designed to push your limits. Book your spot in the app.</p>
            </div>
            <button className="px-8 py-3 border border-brand-lime text-brand-lime uppercase font-bold tracking-wider hover:bg-brand-lime hover:text-brand-black transition-colors">
                Full Schedule
            </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {classes.map((item) => (
                <div key={item.id} className="group relative bg-brand-gray border border-white/5 p-8 hover:border-brand-lime/50 transition-colors duration-300">
                    <div className="absolute top-4 right-4 text-xs font-bold uppercase tracking-widest text-brand-lime px-2 py-1 bg-brand-lime/10 rounded">
                        {item.category}
                    </div>
                    <div className="mb-8 mt-2">
                        <h3 className="text-3xl font-display font-bold uppercase italic text-white group-hover:text-brand-lime transition-colors">
                            {item.title}
                        </h3>
                    </div>
                    <div className="flex justify-between items-center text-sm font-semibold uppercase tracking-wider text-gray-400 border-t border-white/10 pt-4">
                        <span>{item.time}</span>
                        <span className="text-white">{item.trainer}</span>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Classes;
