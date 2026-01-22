
import React from 'react';

const FloatingHeartsBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {[...Array(8)].map((_, i) => (
        <div key={i} className={`absolute opacity-[0.05] text-brand-red animate-float`}
             style={{
               left: `${Math.random() * 100}%`,
               top: `${Math.random() * 100}%`,
               fontSize: `${Math.random() * 100 + 50}px`,
               animationDelay: `${Math.random() * 5}s`,
               animationDuration: `${Math.random() * 10 + 5}s`
             }}>
          <i className="fas fa-heart"></i>
        </div>
      ))}
    </div>
  );
};

export default FloatingHeartsBackground;
