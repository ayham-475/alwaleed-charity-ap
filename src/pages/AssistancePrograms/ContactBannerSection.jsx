import React from 'react';

export default function ContactBannerSection() {
  return (
    <section dir="rtl" className="bg-[#f4f6f8] py-12 px-4 font-sans">
      <div className="max-w-4xl mx-auto">
        <div className="bg-[#008752] text-white rounded-[24px] py-10 px-6 sm:px-12 text-center space-y-6 shadow-lg">
          
          {/* النصوص */}
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-wide">
              لم تجد البرنامج المناسب؟
            </h2>
            <p className="text-white/90 text-sm sm:text-base font-medium">
              تواصل معنا وسنساعدك في إيجاد الحل الأنسب لحالتك بمشيئة الله
            </p>
          </div>

          {/* الأزرار */}
          <div className="flex flex-row-reverse items-center justify-center gap-4 pt-2">
            {/* زر تواصل معنا (أبيض) */}
            <button className="bg-white text-[#008752] font-bold px-7 py-2.5 rounded-xl hover:bg-gray-100 transition-colors shadow-sm text-sm">
              تواصل معنا
            </button>

            {/* زر الأسئلة الشائعة (أخضر داكن) */}
            <button className="bg-[#006e42] hover:bg-[#005e38] text-white font-bold px-7 py-2.5 rounded-xl transition-colors border border-white/10 text-sm">
              الأسئلة الشائعة
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}