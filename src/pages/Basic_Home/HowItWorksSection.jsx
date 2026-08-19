import React from 'react';

export default function HowItWorksSection() {
  return (
    <section dir="rtl" className="relative bg-[#0d7a53] text-white py-20 px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
      
      {/* الدائرة الزخرفية الشفافة على اليمين */}
      <div className="absolute top-1/2 -right-16 -translate-y-1/2 w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-white/5 pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 space-y-6">
        
        {/* الشارة العلوية الشفافة */}
        <div className="inline-block px-6 py-1.5 rounded-full bg-white/10 text-white text-xs sm:text-sm font-semibold border border-white/15">
          كيف يعمل النظام
        </div>

        {/* العنوان الرئيسي العريض */}
        <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
          خطوات تقديم طلب المساعدة
        </h2>

        {/* الفقرة النصية الشارحة */}
        <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-3xl mx-auto font-normal">
          نظام بسيط وشفاف صُمِّم خصيصًا لتسهيل عملية التقديم ومتابعة الطلبات، حيث يتيح للمستفيدين تقديم طلباتهم بسهولة ويسر، ومتابعة حالتها في كل مرحلة بوضوح، وفق إجراءات منظمة ومعايير واضحة، بما يضمن سرعة الإنجاز، ودقة المعالجة، وتحقيق أعلى مستويات النزاهة والموثوقية في تقديم الخدمات.
        </p>

        {/* الخط الفاصل السفلي الخفيف */}
        <div className="pt-10">
          <div className="w-full max-w-5xl mx-auto h-[1px] bg-white/15" />
        </div>

      </div>
    </section>
  );
}