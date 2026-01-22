
import React from 'react';

const TrustBadges: React.FC = () => {
  const stats = [
    { label: 'أزواج سعداء', value: '500+', icon: 'fa-users' },
    { label: 'تقييم ممتاز', value: '4.9/5', icon: 'fa-star' },
    { label: 'توصيل سريع', value: '48h', icon: 'fa-shipping-fast' },
    { label: 'دفع عند الاستلام', value: 'COD', icon: 'fa-shield-alt' },
  ];

  return (
    <section className="py-12 bg-white/50 backdrop-blur-sm border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-xl bg-brand-softbg flex items-center justify-center text-brand-red text-2xl mb-3">
                <i className={`fas ${stat.icon}`}></i>
              </div>
              <div className="text-2xl font-black text-brand-dark">{stat.value}</div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
