
import React from 'react';

const ComparisonSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="font-serif text-4xl font-bold text-center text-brand-dark mb-16">الفرق قبل وبعد "عشق"</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-red-50 p-8 rounded-3xl border-2 border-red-100">
            <div className="flex items-center mb-6 gap-4">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-600">
                <i className="fas fa-frown text-xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-red-800">قبل عشق</h3>
            </div>
            <ul className="space-y-4 text-red-900/80">
              <li className="flex items-center gap-3"><i className="fas fa-times"></i> روتين يومي ممل بين الخدمة والدار</li>
              <li className="flex items-center gap-3"><i className="fas fa-times"></i> هضرة سطحية غير على الدراري والمصاريف</li>
              <li className="flex items-center gap-3"><i className="fas fa-times"></i> كل واحد شاد التيليفون ديالو فليل</li>
              <li className="flex items-center gap-3"><i className="fas fa-times"></i> صعوبة فالتعبير على المشاعر والاحتياجات</li>
            </ul>
          </div>

          <div className="bg-green-50 p-8 rounded-3xl border-2 border-green-100">
            <div className="flex items-center mb-6 gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                <i className="fas fa-grin-hearts text-xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-green-800">بعد عشق</h3>
            </div>
            <ul className="space-y-4 text-green-900/80">
              <li className="flex items-center gap-3"><i className="fas fa-check"></i> ليالي عامرة بالضحك والصراحة</li>
              <li className="flex items-center gap-3"><i className="fas fa-check"></i> اكتشاف جوانب جديدة فشريك حياتك</li>
              <li className="flex items-center gap-3"><i className="fas fa-check"></i> تواصل حقيقي كيقوي العلاقة والثقة</li>
              <li className="flex items-center gap-3"><i className="fas fa-check"></i> تجديد الشعلة الرومانسية بيناتكم</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
