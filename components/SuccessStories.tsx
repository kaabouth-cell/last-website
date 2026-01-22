
import React from 'react';

const SuccessStories: React.FC = () => {
  return (
    <section className="py-20 bg-brand-softbg">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="font-serif text-4xl font-bold text-center mb-16">قصص نجاح مع "عشق"</h2>
        <div className="bg-white rounded-[3rem] shadow-xl overflow-hidden flex flex-col md:flex-row">
          <div className="md:w-2/5 p-12 bg-gradient-to-br from-brand-red to-brand-darkred text-white flex flex-col justify-center">
            <i className="fas fa-quote-right text-5xl mb-6 opacity-30"></i>
            <p className="text-2xl font-bold italic mb-8 leading-relaxed">
              "كنا على حافة الانفصال. الملل سيطر على حياتنا... لعبة عشق كانت آخر محاولة، والصراحة كانت معجزة!"
            </p>
            <div>
              <div className="font-bold text-xl">خديجة ويونس</div>
              <div className="opacity-80">8 سنوات زواج • مراكش</div>
            </div>
          </div>
          <div className="md:w-3/5 p-12 flex flex-col justify-center">
            <h3 className="text-3xl font-bold mb-6 text-brand-dark">كيف أنقذت "عشق" زواجنا</h3>
            <p className="text-gray-600 leading-relaxed text-lg mb-8">
              "كنا كنتناقشو غير على لولاد والفلوس والخدمة. فاش شرينا اللعبة، تفكرنا علاش تزوجنا فالبداية. ضحكنا وبكينا وفتحنا قلوبنا لبعضياتنا بطريقة ما كناش كنتوقعوها. اللعبة خلاتنا نرجعو نتشاوفو كأننا عاد عرفنا بعضياتنا."
            </p>
            <div className="flex gap-4">
              <div className="bg-green-50 px-6 py-4 rounded-2xl border border-green-100 flex-1 text-center">
                <div className="text-green-600 font-black text-2xl">100%</div>
                <div className="text-sm text-gray-500">تحسن فالتواصل</div>
              </div>
              <div className="bg-brand-softbg px-6 py-4 rounded-2xl border border-red-50 flex-1 text-center">
                <div className="text-brand-red font-black text-2xl">2h+</div>
                <div className="text-sm text-gray-500">وقت اللعب فاليوم</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
