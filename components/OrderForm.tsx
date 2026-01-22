
import React, { useState, useEffect } from 'react';

const OrderForm: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', city: '' });
  const [loading, setLoading] = useState(false);
  const [countdown, setCountdown] = useState({ hours: 2, minutes: 45, seconds: 30 });

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prev => {
        let { hours, minutes, seconds } = prev;
        if (seconds > 0) seconds--;
        else if (minutes > 0) { minutes--; seconds = 59; }
        else if (hours > 0) { hours--; minutes = 59; seconds = 59; }
        return { hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call and redirect to WhatsApp
    const message = `سلا عليكم! بغيت نطلب لعبة عشق ❤️%0A%0A👤 الإسم: ${formData.name}%0A📱 الهاتف: ${formData.phone}%0A📍 المدينة: ${formData.city}%0A%0A🛒 العرض: Pack Complet (199 DH)`;
    const whatsappUrl = `https://wa.me/212600000000?text=${message}`;

    setTimeout(() => {
      window.location.href = whatsappUrl;
      setLoading(false);
    }, 1000);
  };

  return (
    <section className="py-20 bg-brand-softbg" id="order">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-brand-dark rounded-[3rem] shadow-2xl overflow-hidden flex flex-col md:flex-row">
          
          <div className="md:w-1/2 p-12 text-white flex flex-col justify-center">
            <h3 className="text-4xl font-serif font-black mb-4">العرض المحدود</h3>
            <p className="text-xl opacity-80 mb-8">النسخة الأصلية + كوبونات الحب + شحن سريع</p>
            
            <div className="flex items-baseline gap-4 mb-10">
              <span className="text-6xl font-black text-brand-red">199 DH</span>
              <span className="text-3xl line-through opacity-40">249 DH</span>
            </div>

            <div className="bg-white/5 border border-white/10 p-6 rounded-3xl mb-8">
              <p className="text-center text-sm opacity-60 mb-3">يسهتي العرض خلال:</p>
              <div className="flex justify-center gap-4">
                <div className="text-center">
                  <div className="bg-brand-red w-16 py-2 rounded-xl text-2xl font-black">{countdown.hours.toString().padStart(2, '0')}</div>
                  <div className="text-[10px] uppercase mt-1 opacity-60">ساعة</div>
                </div>
                <div className="text-center">
                  <div className="bg-brand-red w-16 py-2 rounded-xl text-2xl font-black">{countdown.minutes.toString().padStart(2, '0')}</div>
                  <div className="text-[10px] uppercase mt-1 opacity-60">دقيقة</div>
                </div>
                <div className="text-center">
                  <div className="bg-brand-red w-16 py-2 rounded-xl text-2xl font-black">{countdown.seconds.toString().padStart(2, '0')}</div>
                  <div className="text-[10px] uppercase mt-1 opacity-60">ثانية</div>
                </div>
              </div>
            </div>

            <ul className="space-y-4">
              <li className="flex items-center gap-3"><i className="fas fa-check-circle text-brand-red"></i> توصيل مستور لجميع المدن</li>
              <li className="flex items-center gap-3"><i className="fas fa-check-circle text-brand-red"></i> الدفع عند الاستلام (COD)</li>
              <li className="flex items-center gap-3"><i className="fas fa-check-circle text-brand-red"></i> ضمان الرضا أو استرجاع المال</li>
            </ul>
          </div>

          <div className="md:w-1/2 p-12 bg-white">
            <h4 className="text-3xl font-bold text-brand-dark mb-2">طلب اللعبة دابا</h4>
            <p className="text-gray-500 mb-8">عمر المعلومات ديالك، وغادي نتاصلو بك نأكدو الطلبية.</p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">الاسم الكامل</label>
                <input required type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})}
                       className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-brand-red outline-none transition-all" placeholder="أدخل اسمك" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">رقم الهاتف</label>
                <input required type="tel" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})}
                       className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-brand-red outline-none transition-all" placeholder="06XXXXXXXX" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">المدينة</label>
                <input required type="text" value={formData.city} onChange={e => setFormData({...formData, city: e.target.value})}
                       className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-brand-red outline-none transition-all" placeholder="المدينة ديالك" />
              </div>
              
              <button disabled={loading} className={`w-full py-5 rounded-2xl font-black text-xl shadow-xl transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3 ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-brand-red hover:bg-brand-darkred text-white'}`}>
                {loading ? 'جاري الإرسال...' : 'تأكيد الطلب الآن'}
                <i className="fas fa-bolt"></i>
              </button>
              
              <p className="text-center text-xs text-gray-400 mt-6">
                <i className="fas fa-lock mr-1"></i> معلوماتك الشخصية مشفرة ومحمية 100%
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderForm;
