
import React, { useState } from 'react';

const QuizSection: React.FC = () => {
  const [step, setStep] = useState(1);
  const [score, setScore] = useState(0);

  const questions = [
    {
      q: 'عمر العلاقة ديالكم؟',
      options: [
        { text: 'أقل من سنة', points: 3, icon: 'fa-heart' },
        { text: '1-5 سنوات', points: 4, icon: 'fa-ring' },
        { text: 'أكثر من 5 سنوات', points: 5, icon: 'fa-home' }
      ]
    },
    {
      q: 'شنو المشكل اللي كتحسو بيه؟',
      options: [
        { text: 'الملل والروتين', points: 5, icon: 'fa-tired' },
        { text: 'ضعف التواصل', points: 4, icon: 'fa-comment-slash' },
        { text: 'فقدان الشغف', points: 5, icon: 'fa-fire-extinguisher' }
      ]
    }
  ];

  const handleSelect = (points: number) => {
    setScore(score + points);
    if (step < questions.length) {
      setStep(step + 1);
    } else {
      setStep(3); // Result
    }
  };

  return (
    <section className="py-20 bg-gradient-to-r from-blue-50 to-pink-50">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="font-serif text-4xl font-bold mb-4">واش "عشق" مناسبة ليكم؟</h2>
        <p className="text-gray-500 mb-12">جاوب على هاد لأسئلة السريعة باش تعرف</p>
        
        <div className="bg-white rounded-[2rem] shadow-2xl p-12 min-h-[400px] flex flex-col justify-center">
          {step <= questions.length ? (
            <div className="animate-fadeIn">
              <h3 className="text-2xl font-bold mb-10">{questions[step-1].q}</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {questions[step-1].options.map((opt, i) => (
                  <button key={i} onClick={() => handleSelect(opt.points)} 
                          className="p-8 border-2 border-gray-100 rounded-3xl hover:border-brand-red hover:bg-red-50 transition-all flex flex-col items-center group">
                    <i className={`fas ${opt.icon} text-3xl mb-4 text-gray-300 group-hover:text-brand-red transition-colors`}></i>
                    <span className="font-bold">{opt.text}</span>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="animate-scaleIn">
              <div className="w-24 h-24 bg-brand-red rounded-full text-white flex items-center justify-center text-4xl mx-auto mb-6">
                <i className="fas fa-heart"></i>
              </div>
              <h3 className="text-3xl font-bold mb-4 text-brand-dark">نتيجة مبهرة!</h3>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                لعبة "عشق" هي بالضبط اللي كتحتاجو دابا باش {score > 8 ? 'تجددو الشغف وتكسرو الروتين اللي بدا كيسيطر' : 'تقويو هاد الحب وتكتشفو بعضياتكم أكثر قبل ما يدخل لملل'}.
              </p>
              <a href="#order" className="bg-brand-red text-white px-10 py-5 rounded-full font-bold text-xl shadow-xl hover:bg-brand-darkred">أطلبها الآن</a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default QuizSection;
