
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center gap-12">
        <div className="md:w-1/2 text-center md:text-right">
          <span className="inline-block py-2 px-4 rounded-full bg-gradient-to-r from-brand-red to-brand-darkred text-white text-sm font-bold mb-6 animate-pulse">
            🎁 أحسن هدية للزوجين في المغرب
          </span>
          <h1 className="font-serif text-5xl md:text-7xl font-black text-brand-dark leading-tight mb-6">
            <span className="text-brand-red">عـشـق</span>
            <br />
            <span className="text-3xl md:text-5xl font-bold text-brand-darkred">اللعبة لي كاتقرّب القلوب</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
            أكثر من مجرد لعبة ورق... هي فرصة باش تكسروا الروتين، تعاودو تكتشفو بعضياتكم، وتعيشو لحظات دافية وحميمية ما كتنساش.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a href="#order" className="bg-gradient-to-r from-brand-red to-brand-darkred text-white px-8 py-4 rounded-full text-lg font-bold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 text-center">
              شري دابا - 199 درهم
            </a>
            <a href="#concept" className="bg-white text-brand-red border-2 border-brand-red px-8 py-4 rounded-full text-lg font-bold hover:bg-brand-softbg transition-all duration-300 text-center">
              شوف التفاصيل
            </a>
          </div>
          <div className="mt-8 flex items-center justify-center md:justify-start gap-3">
             <div className="flex -space-x-2 space-x-reverse">
                {[1,2,3,4].map(i => (
                  <img key={i} src={`https://picsum.photos/40/40?random=${i}`} className="w-10 h-10 rounded-full border-2 border-white" alt="User" />
                ))}
             </div>
             <p className="text-sm text-gray-500">انضم لأكثر من <span className="font-bold text-brand-red">500+</span> زوج سعيد</p>
          </div>
        </div>

        <div className="md:w-1/2 relative">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform rotate-2 hover:rotate-0 transition-all duration-500">
            <img src="https://picsum.photos/800/600?romantic=1" alt="3ichq Game" className="w-full h-auto object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-8">
              <p className="text-white text-xl font-bold">اللعبة الكاملة + كوبونات الحب مجاناً</p>
            </div>
          </div>
          <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl animate-bounce hidden md:block">
            <div className="flex text-yellow-500 mb-1">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <p className="font-bold text-brand-dark">أحسن شراء درتو هاد العام!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
