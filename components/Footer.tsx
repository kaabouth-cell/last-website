
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
          <div className="text-center md:text-right">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
              <div className="bg-brand-red p-2 rounded-full text-white w-12 h-12 flex items-center justify-center font-serif text-2xl font-bold">ع</div>
              <span className="font-serif text-4xl font-black">عـشـق</span>
            </div>
            <p className="text-gray-400 max-w-sm">لعبة ورق مغربية للأزواج، صممت لتقريب القلوب وإشعال شعلة الحب.</p>
          </div>
          <div className="flex gap-6">
            <a href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-red transition-all"><i className="fab fa-instagram text-xl"></i></a>
            <a href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-red transition-all"><i className="fab fa-tiktok text-xl"></i></a>
            <a href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-red transition-all"><i className="fab fa-facebook-f text-xl"></i></a>
          </div>
        </div>

        <div className="border-t border-white/5 pt-12 text-center text-sm text-gray-500">
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <a href="#" className="hover:text-white transition-colors">سياسة الخصوصية</a>
            <a href="#" className="hover:text-white transition-colors">شروط الاستخدام</a>
            <a href="#" className="hover:text-white transition-colors">الشحن والتوصيل</a>
            <a href="#" className="hover:text-white transition-colors">تواصل معنا</a>
          </div>
          <p>© 2024 3ichq Game. جميع الحقوق محفوظة.</p>
          <div className="mt-8 opacity-40 max-w-2xl mx-auto text-[10px] leading-relaxed">
             إخلاء المسؤولية: عشق هي لعبة ترفيهية تهدف لتعزيز التواصل. النتائج قد تختلف حسب رغبة الشريكين في التفاعل. المنتج موجه للبالغين (+18) فقط. جميع الأسعار بالدرهم المغربي.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
