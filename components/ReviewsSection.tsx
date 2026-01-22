
import React from 'react';

const ReviewsSection: React.FC = () => {
  const reviews = [
    { name: 'سناء و كريم', city: 'الدار البيضاء', text: 'صراحة مكنتش كنتوقع غاتعجب راجلي حيت هو قليل الهضرة، ولكن ضحكنا وتعاودنا فشي حوايج عمري كنت عارفاهوم عليه.', initials: 'س.ك', color: 'bg-pink-500' },
    { name: 'ياسين و مريم', city: 'مراكش', text: 'خديناها باش ندوزو الويكاند، صدقنا ساهرين بيها الليل كامل. الأسئلة ديال التفاهم واعرين بزاف وكيبدلو النظرة للعلاقة.', initials: 'ي.م', color: 'bg-blue-500' },
    { name: 'عمر و ليلى', city: 'طنجة', text: 'الكاليتي ديال الورق طوب، والباكاجينغ كيحمر الوجه كهدية. عجبات مراتي بزاف وجددات لينا الطاقة فالعلاقة.', initials: 'ع.ل', color: 'bg-teal-500' },
  ];

  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="font-serif text-4xl font-bold mb-16">شنو قالو علينا</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div key={idx} className="bg-brand-softbg p-10 rounded-[2rem] shadow-sm relative group hover:shadow-xl transition-all">
              <div className={`w-16 h-16 rounded-full ${rev.color} text-white flex items-center justify-center text-xl font-bold mx-auto mb-6`}>{rev.initials}</div>
              <p className="text-gray-700 italic leading-relaxed mb-8">"{rev.text}"</p>
              <div className="font-bold text-brand-dark text-lg">{rev.name}</div>
              <div className="text-gray-400 text-sm">{rev.city}</div>
              <div className="flex justify-center text-yellow-400 mt-4">
                {[1,2,3,4,5].map(i => <i key={i} className="fas fa-star"></i>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
