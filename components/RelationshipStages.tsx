
import React from 'react';

const RelationshipStages: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="font-serif text-4xl font-bold text-center text-brand-dark mb-4">"عشق" تناسب كل مراحل العلاقة</h2>
        <p className="text-gray-500 text-center mb-16 text-lg">مهما كان عمر علاقتكم، غادي تلقاو فيها حلاوتكم</p>
        
        <div className="grid md:grid-cols-3 gap-12">
          {[
            { title: 'للمخطوبين', icon: 'fa-ring', items: ['التعرف على بعض أكثر قبل الزواج', 'فتح مواضيع مهمة للمستقبل', 'بناء أساس قوي للعلاقة'] },
            { title: 'للمتزوجين الجدد', icon: 'fa-heart', items: ['تجاوز صعوبات التكيف الأولى', 'إبقاء شعلة الحب مشتعلة', 'تجنب الوقوع في الروتين'] },
            { title: 'للأزواج القدامى', icon: 'fa-home', items: ['إعادة اكتشاف بعضياتكم', 'تجديد الطاقة والشغف', 'تعميق التواصل بعد سنوات'] }
          ].map((stage, idx) => (
            <div key={idx} className="bg-white p-8 rounded-3xl border-2 border-brand-red/10 shadow-lg hover:border-brand-red transition-all group">
              <div className="w-16 h-16 bg-brand-softbg text-brand-red rounded-full flex items-center justify-center text-2xl mx-auto mb-6 group-hover:bg-brand-red group-hover:text-white transition-all">
                <i className={`fas ${stage.icon}`}></i>
              </div>
              <h3 className="text-2xl font-bold text-center mb-6">{stage.title}</h3>
              <ul className="space-y-4">
                {stage.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-brand-red mt-1"></i>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelationshipStages;
