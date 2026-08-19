import React from 'react';
import { ArrowLeft, Check } from 'lucide-react';

export default function AboutSection() {
  const values = [
    {
      id: 1,
      title: 'الشفافية',
      description: 'نلتزم بأعلى معايير الشفافية في جميع عملياتنا وتقاريرنا المالية',
      isGreen: true,
      badgePos: 'top-right-rounded',
    },
    {
      id: 2,
      title: 'العدالة',
      description: 'ضمان وصول المساعدات لمستحقيها بناءً على معايير دقيقة',
      isGreen: false,
      badgePos: 'standard',
    },
    {
      id: 3,
      title: 'الكرامة',
      description: 'حفظ كرامة المستفيدين وخصوصيتهم هي أولويتنا القصوى',
      isGreen: true,
      badgePos: 'standard',
    },
    {
      id: 4,
      title: 'التميز',
      description: 'السعي المستمر لتحسين جودة المساعدات وتوسيع نطاق الأثر',
      isGreen: false,
      badgePos: 'standard',
    },
  ];

  return (
    <section dir="rtl" className="bg-white py-12 px-4 sm:px-6 lg:px-8 text-right font-sans overflow-hidden">
      
      {/* 1. زر مشاهدة جميع المشاريع العلوي */}
      <div className="flex justify-center mb-16">
        <a
          href="#projects"
          className="inline-flex items-center gap-2 bg-[#0d7a53] hover:bg-[#0a6343] text-white px-8 py-3 rounded-full text-sm font-bold shadow-md transition-transform hover:scale-105"
        >
          مشاهدة جميع المشاريع
          <ArrowLeft className="w-4 h-4" />
        </a>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* 2. قسم كروت القيم (الشبكة على اليسار في الشاشات الكبيرة) */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5 order-2 lg:order-1">
          
          {/* كرت 1: الشفافية (أخضر مع زاوية منحنية مميزة) */}
          <div className="bg-[#0d7a53] text-white p-7 rounded-[2.5rem] rounded-tr-[4rem] flex flex-col justify-between space-y-8 relative shadow-lg">
            <div className="flex justify-end">
              <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-white">
                <Check className="w-6 h-6 stroke-[3]" />
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">الشفافية</h3>
              <p className="text-xs text-white/90 leading-relaxed font-light">
                نلتزم بأعلى معايير الشفافية في جميع عملياتنا وتقاريرنا المالية
              </p>
            </div>
          </div>

          {/* كرت 2: العدالة (أبيض) */}
          <div className="bg-white text-gray-800 p-7 rounded-[2.5rem] flex flex-col justify-between space-y-8 relative shadow-md border border-gray-100">
            <div className="flex justify-end">
              <div className="w-10 h-10 bg-[#e6f4ef] rounded-xl flex items-center justify-center text-[#0d7a53]">
                <Check className="w-6 h-6 stroke-[3]" />
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-extrabold text-gray-900">العدالة</h3>
              <p className="text-xs text-gray-500 leading-relaxed font-medium">
                ضمان وصول المساعدات لمستحقيها بناءً على معايير دقيقة
              </p>
            </div>
          </div>

          {/* كرت 3: الكرامة (أخضر) */}
          <div className="bg-[#0d7a53] text-white p-7 rounded-[2.5rem] flex flex-col justify-between space-y-8 relative shadow-lg">
            <div className="flex justify-end">
              <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-white">
                <Check className="w-6 h-6 stroke-[3]" />
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">الكرامة</h3>
              <p className="text-xs text-white/90 leading-relaxed font-light">
                حفظ كرامة المستفيدين وخصوصيتهم هي أولويتنا القصوى
              </p>
            </div>
          </div>

          {/* كرت 4: التميز (أبيض) */}
          <div className="bg-white text-gray-800 p-7 rounded-[2.5rem] flex flex-col justify-between space-y-8 relative shadow-md border border-gray-100">
            <div className="flex justify-end">
              <div className="w-10 h-10 bg-[#e6f4ef] rounded-xl flex items-center justify-center text-[#0d7a53]">
                <Check className="w-6 h-6 stroke-[3]" />
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-extrabold text-gray-900">التميز</h3>
              <p className="text-xs text-gray-500 leading-relaxed font-medium">
                السعي المستمر لتحسين جودة المساعدات وتوسيع نطاق الأثر
              </p>
            </div>
          </div>

        </div>

        {/* 3. قسم رسالة الأمير الوليد بن طلال (على اليمين) */}
        <div className="lg:col-span-5 space-y-6 order-1 lg:order-2">
          
          <div className="space-y-3">
            <span className="inline-block px-4 py-1 rounded-full bg-[#e6f4ef] text-[#0d7a53] text-xs font-bold">
              عن المؤسسة
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight">
              رسالة من صاحب السمو الملكي الأمير الوليد بن طلال
            </h2>
          </div>

          {/* صندوق اقتباس الرسالة الأخضر */}
          <div className="bg-[#0d7a53] text-white p-8 rounded-[2.5rem] relative overflow-hidden shadow-xl space-y-6">
            
            {/* أيقونة اقتباس خلفية شفافة */}
            <div className="absolute top-4 right-6 text-white/10 text-7xl font-serif select-none pointer-events-none">
              “
            </div>

            {/* نص الاقتباس */}
            <p className="text-base sm:text-lg font-medium leading-relaxed relative z-10 pt-2">
              "نحن نؤمن بأن العطاء هو جوهر الإنسانية، وأن العمل الخيري هو السبيل لبناء مجتمعات قوية ومتابطة. نسعى دائماً للوصول إلى كل محتاج ومد يد العون له بكرامة واحترام."
            </p>

            {/* خط فاصل سفلي */}
            <div className="w-full h-[1px] bg-white/20"></div>

            {/* تفاصيل التوقيع وحرف W */}
            <div className="flex items-center justify-between pt-1">
              <div>
                <h4 className="text-base font-bold text-white">الوليد بن طلال</h4>
                <p className="text-xs text-white/70 font-light">رئيس مجلس الأمناء</p>
              </div>

              {/* دائرة حرف W الشفافة المطابقة تماماً */}
              <div className="w-12 h-12 rounded-full border border-white/40 bg-white/10 flex items-center justify-center text-white font-bold text-lg shadow-inner">
                W
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}