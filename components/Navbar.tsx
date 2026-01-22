
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/98 shadow-lg py-2' : 'bg-white/90 backdrop-blur-md py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="bg-brand-red p-2 rounded-full text-white w-10 h-10 flex items-center justify-center font-serif text-xl font-bold">ع</div>
            <span className="font-serif text-3xl font-extrabold text-brand-darkred">عـشـق</span>
          </div>
          
          <div className="hidden md:flex space-x-8 space-x-reverse items-center">
            <a href="#concept" className="text-brand-dark hover:text-brand-red transition-all duration-300 font-medium relative group">
              علاش عشق؟
              <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-brand-red transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#categories" className="text-brand-dark hover:text-brand-red transition-all duration-300 font-medium relative group">
              أقسام اللعبة
              <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-brand-red transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#reviews" className="text-brand-dark hover:text-brand-red transition-all duration-300 font-medium relative group">
              آراء الأزواج
              <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-brand-red transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#order" className="bg-brand-red text-white px-6 py-3 rounded-full font-bold hover:bg-brand-darkred transition-all duration-300 shadow-lg transform hover:scale-105">
              شري دابا
            </a>
          </div>
          
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-brand-dark hover:text-brand-red p-2">
            <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden absolute w-full bg-white shadow-2xl transition-all duration-300 overflow-hidden ${mobileMenuOpen ? 'max-h-96 border-t' : 'max-h-0'}`}>
        <div className="px-4 py-6 space-y-4">
          <a href="#concept" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-lg font-medium text-brand-dark">علاش عشق؟</a>
          <a href="#categories" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-lg font-medium text-brand-dark">أقسام اللعبة</a>
          <a href="#reviews" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-lg font-medium text-brand-dark">آراء الأزواج</a>
          <a href="#order" onClick={() => setMobileMenuOpen(false)} className="block py-4 text-center bg-brand-red text-white rounded-lg font-bold">شري دابا</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
