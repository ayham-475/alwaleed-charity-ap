import React from 'react';
import { ArrowLeft } from 'lucide-react';

export default function FaqSection() {
  return (
    <section dir="rtl" className="bg-white py-20 px-4 sm:px-6 lg:px-8 text-center font-sans">
      <div className="max-w-3xl mx-auto space-y-6">
        
        {/* الشارة العلوية - الأسئلة الشائعة */}
        <div className="inline-block px-5 py-1.5 rounded-full bg-[#e6f4ef] text-[#0d7a53] text-xs font-bold tracking-wide">
          الأسئلة الشائعة
        </div>

        {/* العنوان الرئيسي */}
        <h2 className="text-3xl sm:text-5xl font-black text-gray-900 tracking-tight">
          هل لديك أسئلة؟
        </h2>

        {/* النص الفرعي التوضيحي */}
        <p className="text-sm sm:text-base text-gray-400 font-normal leading-relaxed max-w-xl mx-auto">
          ابحث في أكثر الأسئلة شيوعاً حول برامج المساعدات وإجراءات التقديم
        </p>

        {/* زر عرض جميع الأسئلة */}
        <div className="pt-4 flex justify-center">
          <a
            href="/faq"
            className="inline-flex items-center gap-2.5 bg-[#0d7a53] hover:bg-[#0a6343] text-white px-8 py-3.5 rounded-2xl text-sm font-bold shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105 active:scale-95"
          >
            <ArrowLeft className="w-4 h-4 stroke-[2.5]" />
            <span>عرض جميع الأسئلة</span>
          </a>
        </div>

      </div>
    </section>
  );
}