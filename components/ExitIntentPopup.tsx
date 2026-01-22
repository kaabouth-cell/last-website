
import React from 'react';

interface Props {
  onClose: () => void;
}

const ExitIntentPopup: React.FC<Props> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/80 z-[2000] flex items-center justify-center p-4 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-[3rem] max-w-md w-full p-12 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-brand-red to-brand-darkred"></div>
        <button onClick={onClose} className="absolute top-6 left-6 text-gray-400 hover:text-brand-dark transition-colors"><i className="fas fa-times text-xl"></i></button>
        
        <div className="text-6xl text-brand-red mb-6"><i className="fas fa-heart"></i></div>
        <h3 className="font-serif text-3xl font-bold mb-4 text-brand-dark">لا تمشِ! هاد العرض سري ليك</h3>
        <p className="text-gray-600 mb-8 text-lg">بما أنك مهتم بالعلاقة ديالك، نقدرو ليك خصم حصري دابا!</p>
        
        <div className="bg-brand-softbg p-8 rounded-3xl border-2 border-brand-red border-dashed mb-10">
          <div className="text-4xl font-black text-brand-darkred mb-2">169 DH</div>
          <p className="text-sm font-bold text-brand-red">بـدلاً مـن 199 درهـم</p>
        </div>
        
        <a href="#order" onClick={onClose} className="block w-full bg-brand-red text-white py-5 rounded-2xl font-black text-xl shadow-xl hover:bg-brand-darkred transition-all">
          أحصل على العرض دابا
        </a>
        <button onClick={onClose} className="mt-6 text-gray-400 hover:text-brand-dark text-sm underline">لا شكراً، ما مهتمش</button>
      </div>
    </div>
  );
};

export default ExitIntentPopup;
