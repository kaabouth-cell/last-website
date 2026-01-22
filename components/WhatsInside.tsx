
import React from 'react';

const WhatsInside: React.FC = () => {
  return (
    <section className="py-20 bg-brand-softbg overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-16">
        <div className="md:w-1/2">
          <img src="https://picsum.photos/600/600?romantic=2" alt="Product Pack" className="rounded-3xl shadow-2xl border-4 border-white" />
        </div>
        <div className="md:w-1/2">
          <h2 className="font-serif text-4xl font-bold mb-8">شنو غادي يوصلكم فالباكية؟</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 bg-red-100 text-brand-red rounded-xl flex items-center justify-center text-xl shrink-0"><i className="fas fa-layer-group"></i></div>
              <div>
                <h4 className="font-bold text-xl mb-1">200 كارطة متنوعة</h4>
                <p className="text-gray-500">مقسومة لـ 4 مستويات متدرجة، كافية لعشرات الليالي.</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm flex items-start gap-4 border-2 border-brand-red/20">
              <div className="w-12 h-12 bg-red-600 text-white rounded-xl flex items-center justify-center text-xl shrink-0"><i className="fas fa-gift"></i></div>
              <div>
                <h4 className="font-bold text-xl mb-1 text-brand-red">هدية خاصة: كوبونات الحب</h4>
                <p className="text-gray-500">مجموعة من الكوبونات الهزلية والرومانسية تقدر تقدمها لشريك حياتك.</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 bg-red-100 text-brand-red rounded-xl flex items-center justify-center text-xl shrink-0"><i className="fas fa-gem"></i></div>
              <div>
                <h4 className="font-bold text-xl mb-1">طباعة فاخرة (Premium)</h4>
                <p className="text-gray-500">ورق سميك مقاوم للتمزق، بألوان مريحة وتصميم مغربي عصري.</p>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <a href="#order" className="inline-block bg-brand-red text-white px-10 py-5 rounded-full font-bold text-xl shadow-lg hover:shadow-2xl transition-all">شري النسخة الأصلية دابا</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsInside;
