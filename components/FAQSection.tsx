
import React, { useState } from 'react';

const FAQSection: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  const faqs = [
    { q: 'لمن موجهة هاد اللعبة؟', a: 'لأي زوجين (مخطوبين أو مزوجين) بغاو يهرسو الروتين ويدوزو وقت زوين ومختلف. مناسبة للحبايب الجدد وللأزواج لي عايشين مع بعض من سنوات.' },
    { q: 'واش توصيل مستور؟', a: 'أكيد! كنحترمو الخصوصية، الباكاجينغ كيكون مسدود ومامكتوبش عليه تفاصيل الداخل. ماكينش أي علامة تشير للمحتويات.' },
    { q: 'كيفاش كتتلعب؟', a: 'ساهلة بزاف! خلطو الورق، وكل مرة واحد يجبد ورقة ويجاوب بصراحة. تقدرو تختارو المستوى لي بغيتو تلعبو بيه على حساب الجو.' },
    { q: 'شحال كياخد التوصيل؟', a: 'التوصيل كياخد عادةً بين 24 حتى 48 ساعة للمدن الكبرى، ومن 2 لـ 4 أيام لباقي المدن المغربية.' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="font-serif text-4xl font-bold text-center mb-16">أسئلة كايطرحوها الناس</h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-gray-100 rounded-3xl overflow-hidden shadow-sm">
              <button onClick={() => setActiveIdx(activeIdx === idx ? null : idx)} 
                      className="w-full px-8 py-6 text-right flex justify-between items-center bg-gray-50 hover:bg-brand-softbg transition-colors">
                <span className="font-bold text-xl">{faq.q}</span>
                <i className={`fas fa-chevron-down transition-transform duration-300 ${activeIdx === idx ? 'rotate-180' : ''}`}></i>
              </button>
              <div className={`transition-all duration-300 overflow-hidden ${activeIdx === idx ? 'max-h-96' : 'max-h-0'}`}>
                <div className="px-8 py-6 bg-white text-gray-600 leading-relaxed text-lg">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
