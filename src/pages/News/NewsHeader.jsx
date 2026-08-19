import React from 'react';
import { Newspaper } from 'lucide-react';

export default function NewsHeader() {
  return (
    <header dir="rtl" className="relative overflow-hidden bg-gradient-to-b from-[#edf9f3] via-[#f4fbf7] to-[#ffffff] py-14 px-4 text-center font-sans">
      {/* التأثيرات الخلفية الناعمة */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-48 bg-[#dcfce7]/40 blur-3xl pointer-events-none rounded-full" />

      <div className="relative z-10 max-w-3xl mx-auto space-y-3">
        {/* شارة المركز الإعلامي */}
        <div className="inline-flex items-center gap-1.5 bg-[#e0f2fe]/40 bg-opacity-60 text-[#008752] text-xs font-bold px-3.5 py-1.5 rounded-full border border-[#b2e0ca]/60 shadow-sm backdrop-blur-sm">
          <Newspaper className="w-4 h-4 text-[#008752]" />
          <span>المركز الإعلامي</span>
        </div>

        {/* العنوان الرئيسي */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0f172a] tracking-tight leading-tight">
          الأخبار والمستجدات
        </h1>

        {/* الوصف الفرعي */}
        <p className="text-gray-500 text-xs sm:text-sm font-medium leading-relaxed max-w-2xl mx-auto">
          تابع أحدث تغطياتنا الصحفية، مشاريعنا الإنسانية، وآخر التطورات والقصص الملهمة لمؤسسة الوليد للإنسانية.
        </p>
      </div>
    </header>
  );
}