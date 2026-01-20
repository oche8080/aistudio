import React, { useState } from 'react';
import { generateWorkoutPlan } from '../services/geminiService';
import { Sparkles, Loader2, Dumbbell, Timer, Target } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

const AITrainer: React.FC = () => {
  const [goal, setGoal] = useState('');
  const [level, setLevel] = useState('Intermediate');
  const [duration, setDuration] = useState('45 mins');
  const [plan, setPlan] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!goal) return;

    setLoading(true);
    setPlan(null);
    const result = await generateWorkoutPlan({ goal, level, duration });
    setPlan(result);
    setLoading(false);
  };

  return (
    <section id="ai-coach" className="py-24 bg-brand-dark relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-lime/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        {/* Left: Input Form */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-brand-lime text-brand-black rounded-lg">
                <Sparkles size={24} />
            </div>
            <h2 className="text-4xl font-display font-bold uppercase italic text-white">
              AI Performance <span className="text-brand-lime">Coach</span>
            </h2>
          </div>
          
          <p className="text-gray-400 mb-8 text-lg">
            Powered by Google Gemini. Get a custom workout plan instantly tailored to your specific goals and available time.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6 bg-brand-gray p-8 rounded-2xl border border-white/5 shadow-xl">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Your Goal</label>
              <input 
                type="text"
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
                placeholder="e.g. Build explosive leg power, prepare for marathon..."
                className="w-full bg-brand-black border border-white/10 p-4 text-white focus:outline-none focus:border-brand-lime transition-colors rounded-lg"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Level</label>
                <select 
                  value={level}
                  onChange={(e) => setLevel(e.target.value)}
                  className="w-full bg-brand-black border border-white/10 p-4 text-white focus:outline-none focus:border-brand-lime transition-colors rounded-lg appearance-none"
                >
                  <option>Beginner</option>
                  <option>Intermediate</option>
                  <option>Advanced</option>
                  <option>Elite</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Duration</label>
                <select 
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  className="w-full bg-brand-black border border-white/10 p-4 text-white focus:outline-none focus:border-brand-lime transition-colors rounded-lg appearance-none"
                >
                  <option>15 mins</option>
                  <option>30 mins</option>
                  <option>45 mins</option>
                  <option>60 mins</option>
                  <option>90 mins</option>
                </select>
              </div>
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className="w-full bg-white text-brand-black font-bold uppercase tracking-widest py-4 hover:bg-brand-lime transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-2"
            >
              {loading ? <><Loader2 className="animate-spin" /> Generating Plan...</> : 'Generate Workout'}
            </button>
          </form>
        </div>

        {/* Right: Output */}
        <div className="relative min-h-[400px]">
            {plan ? (
                <div className="bg-brand-black border border-white/10 rounded-2xl p-8 max-h-[600px] overflow-y-auto custom-scrollbar shadow-2xl">
                    <div className="flex justify-between items-center mb-6 border-b border-white/10 pb-4">
                        <h3 className="text-2xl font-display font-bold uppercase text-brand-lime italic">Your Plan</h3>
                        <div className="flex gap-4 text-sm text-gray-400">
                            <span className="flex items-center gap-1"><Target size={14}/> {goal}</span>
                            <span className="flex items-center gap-1"><Timer size={14}/> {duration}</span>
                        </div>
                    </div>
                    <div className="prose prose-invert prose-headings:font-display prose-headings:uppercase prose-headings:italic prose-p:text-gray-300 prose-li:text-gray-300 prose-strong:text-brand-lime max-w-none">
                        <ReactMarkdown>{plan}</ReactMarkdown>
                    </div>
                </div>
            ) : (
                <div className="h-full flex flex-col items-center justify-center text-center p-8 border-2 border-dashed border-white/10 rounded-2xl">
                    <Dumbbell className="w-16 h-16 text-white/20 mb-4" />
                    <h3 className="text-xl font-bold text-white/50 uppercase">Ready to Sweat?</h3>
                    <p className="text-gray-500 max-w-xs mt-2">Enter your goals on the left to generate a world-class workout plan instantly.</p>
                </div>
            )}
        </div>
      </div>
    </section>
  );
};

export default AITrainer;
