
import React from 'react';

const ProblemSection: React.FC = () => {
  return (
    <section className="py-20 bg-brand-dark text-white relative overflow-hidden" id="concept">
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <h2 className="font-serif text-3xl md:text-5xl font-bold mb-12">واش كتحس بالملل كيدخل للعلاقة؟</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: 'fa-tv', text: 'كتفكرو شنو ديرو في نهاية الأسبوع من غير التلفزة؟' },
            { icon: 'fa-comments-slash', text: 'كتصعب عليك تبدا حوار عميق وصريح مع الشريك؟' },
            { icon: 'fa-heart-broken', text: 'بديتو كتحسو بلي الشغف لي كان فالبداية بدا كيبرد؟' }
          ].map((item, idx) => (
            <div key={idx} className="p-8 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-all cursor-default">
              <i className={`fas ${item.icon} text-4xl text-brand-red mb-6`}></i>
              <p className="text-lg leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-gradient-to-r from-brand-red to-brand-darkred rounded-3xl shadow-2xl inline-block transform -rotate-1">
          <p className="text-2xl font-bold mb-2">عشق هو الحل اللي كتقلّب عليه!</p>
          <p className="opacity-90 italic">صممناها باش نرجعو الحيوية لكل جلسة بيناتكم.</p>
        </div>
      </div>
      
      {/* Decorative hearts */}
      <div className="absolute top-10 right-10 opacity-10 text-8xl rotate-12"><i className="fas fa-heart"></i></div>
      <div className="absolute bottom-10 left-10 opacity-10 text-8xl -rotate-12"><i className="fas fa-heart"></i></div>
    </section>
  );
};

export default ProblemSection;
