import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MarqueeText from './components/MarqueeText';
import Classes from './components/Classes';
import Trainers from './components/Trainers';
import AITrainer from './components/AITrainer';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-black text-white selection:bg-brand-lime selection:text-brand-black">
      <Navbar />
      <Hero />
      <MarqueeText text="Push Your Limits •" />
      <Classes />
      <MarqueeText text="No Pain No Gain •" direction="right" />
      <AITrainer />
      <Trainers />
      
      {/* Membership CTA Section */}
      <section id="membership" className="py-24 bg-brand-lime text-brand-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-6xl md:text-8xl font-display font-bold uppercase italic mb-8 leading-none">
                Start Your <br/> Journey
            </h2>
            <p className="text-xl font-medium mb-10 max-w-2xl mx-auto opacity-80">
                Join 1,000+ members who have transformed their lives. 
                First class is always free. No commitment required.
            </p>
            <button className="bg-brand-black text-white px-12 py-5 text-xl font-bold uppercase tracking-wider hover:bg-white hover:text-brand-black transition-colors">
                Get Your Pass
            </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default App;
