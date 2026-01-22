
import React from 'react';

const CategoriesSection: React.FC = () => {
  const levels = [
    { name: 'نفوجو شوية', icon: 'fa-laugh-beam', color: 'orange', desc: 'أسئلة خفيفة ومواقف مضحكة باش تهرسو الجليد.' },
    { name: 'كايتشاير', icon: 'fa-heart', color: 'pink', desc: 'التعبير على المشاعر والامتنان، ولحظات زوينة عشتوها بجوج.' },
    { name: 'حنا مفاهمين', icon: 'fa-brain', color: 'blue', desc: 'حوارات جدية على الاحتياجات، والمستقبل، وكيفاش تزيدو تقويو علاقتكم.' },
    { name: 'طلق السخون', icon: 'fa-fire', color: 'red', desc: 'أسئلة جريئة شوية باش تشعلو الفتيلة وتجددو الشغف. (+18)' },
  ];

  return (
    <section id="categories" className="py-20 bg-brand-softbg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl font-bold text-brand-dark mb-4">4 مستويات، تجربة متكاملة</h2>
          <p className="text-xl text-gray-600">كل مستوى كياخدكم لخطوة جديدة من المتعة والتقارب</p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {levels.map((level, idx) => (
            <div key={idx} className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all border-t-8 flex flex-col items-center text-center group" 
                 style={{ borderTopColor: level.color === 'orange' ? '#fb923c' : level.color === 'pink' ? '#ec4899' : level.color === 'blue' ? '#3b82f6' : '#dc2626' }}>
              <div className={`w-20 h-20 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform`}
                   style={{ backgroundColor: `${level.color === 'orange' ? '#ffedd5' : level.color === 'pink' ? '#fce7f3' : level.color === 'blue' ? '#dbeafe' : '#fee2e2'}`,
                           color: level.color === 'orange' ? '#fb923c' : level.color === 'pink' ? '#ec4899' : level.color === 'blue' ? '#3b82f6' : '#dc2626' }}>
                <i className={`fas ${level.icon}`}></i>
              </div>
              <h3 className="text-2xl font-bold text-brand-dark mb-4">{level.name}</h3>
              <p className="text-gray-500 leading-relaxed">{level.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
