
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBadges from './components/TrustBadges';
import ProblemSection from './components/ProblemSection';
import ComparisonSection from './components/ComparisonSection';
import CategoriesSection from './components/CategoriesSection';
import AIQuestionGenerator from './components/AIQuestionGenerator';
import RelationshipStages from './components/RelationshipStages';
import WhatsInside from './components/WhatsInside';
import VideoDemo from './components/VideoDemo';
import SuccessStories from './components/SuccessStories';
import ReviewsSection from './components/ReviewsSection';
import QuizSection from './components/QuizSection';
import OrderForm from './components/OrderForm';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import ExitIntentPopup from './components/ExitIntentPopup';
import FloatingHeartsBackground from './components/FloatingHeartsBackground';

const App: React.FC = () => {
  const [showExitPopup, setShowExitPopup] = useState(false);
  const [hasShownPopup, setHasShownPopup] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY < 50 && !hasShownPopup) {
        setShowExitPopup(true);
        setHasShownPopup(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [hasShownPopup]);

  return (
    <div className="relative min-h-screen selection:bg-brand-red selection:text-white pb-20 md:pb-0 overflow-x-hidden">
      <FloatingHeartsBackground />
      <Navbar />
      <Hero />
      <TrustBadges />
      <ProblemSection />
      <ComparisonSection />
      <CategoriesSection />
      
      {/* Interactive AI Demo Section */}
      <AIQuestionGenerator />

      <RelationshipStages />
      <WhatsInside />
      <VideoDemo />
      <SuccessStories />
      <ReviewsSection />
      <QuizSection />
      <div id="order">
        <OrderForm />
      </div>
      <FAQSection />
      <Footer />
      
      {/* Interactive Floating elements */}
      <FloatingWhatsApp />
      
      {/* Mobile CTA Sticky Bar */}
      <div className="fixed bottom-0 left-0 right-0 md:hidden bg-white/95 backdrop-blur-md p-4 border-t border-brand-red/30 z-[90] shadow-2xl">
        <a href="#order" className="w-full flex items-center justify-center bg-gradient-to-r from-brand-red to-brand-darkred text-white font-bold text-lg py-4 rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform active:scale-95">
          <span className="flex items-center gap-3">
            <i className="fas fa-bolt"></i>
            شري دابا بـ 199 درهم
            <i className="fas fa-arrow-left"></i>
          </span>
        </a>
      </div>

      {showExitPopup && <ExitIntentPopup onClose={() => setShowExitPopup(false)} />}
    </div>
  );
};

export default App;
