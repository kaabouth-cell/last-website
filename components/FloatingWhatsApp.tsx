
import React from 'react';

const FloatingWhatsApp: React.FC = () => {
  return (
    <div className="fixed bottom-24 md:bottom-10 right-10 z-[100]">
      <a href="https://wa.me/212600000000?text=Salam!%20Bghit%20ncomondi%20Lgame%203ichq%20❤️" 
         target="_blank" 
         rel="noopener noreferrer"
         className="relative flex items-center justify-center w-16 h-16 bg-[#25D366] text-white rounded-full shadow-2xl hover:scale-110 transition-transform animate-heart-beat">
        <i className="fab fa-whatsapp text-3xl"></i>
        <div className="absolute -top-1 -left-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white animate-pulse"></div>
      </a>
    </div>
  );
};

export default FloatingWhatsApp;
