import React from 'react';

export default function AwardNewsPage() {
  return (
    // الحاوية الرئيسية: اتجاه عربي (RTL)، مع خلفية بيضاء
    <div dir="rtl" className="w-full min-h-screen bg-white font-sans flex flex-col pb-12">
      
      {/* 
        حاوية المحتوى الرئيسية: 
        - في الهاتف: flex-col (عمودي: صورة ثم نص)
        - في الكمبيوتر (lg): flex-row (أفقي: صورة يمين، نص يسار) 
      */}
      <div className="w-full max-w-[1536px] mx-auto px-4 md:px-6 pt-6 md:pt-10 flex flex-col lg:flex-row justify-between gap-6 lg:gap-0">
        
        {/* ============================== */}
        {/* 1. قسم الصورة */}
        {/* ============================== */}
        <div className="w-full lg:w-[73%]">
          <img
            src="https://alwaleedphilanthropees.org/wp-content/uploads/2026/03/large_IMG_9185-2.jpg"
            alt="مؤسسة الوليد للإنسانية تتسلم جائزة شايو"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* ============================== */}
        {/* 2. قسم النص (المربع الرمادي) */}
        {/* ============================== */}
        <div className="w-full lg:w-[25%] bg-[#f4f5f7] p-6 lg:p-8 flex flex-col justify-center">
          <h1 className="text-[#0f172a] text-[18px] md:text-[22px] lg:text-[24px] font-bold leading-[1.5] mb-6">
            مؤسسة الوليد للإنسانية تتسلم جائزة شايو 2025 من الاتحاد الأوروبي تقديراً لجهودها في تعزيز حقوق الإنسان بدول مجلس التعاون الخليجي
          </h1>
          
          <p className="text-gray-700 text-[13px] md:text-[14.5px] lg:text-[15px] leading-[1.9] text-right">
            تلقت مؤسسة الوليد للإنسانية، برئاسة صاحب السمو الملكي الأمير الوليد بن طلال آل سعود، جائزة 
            شايو لعام 2025 تقديراً لإسهاماتها في دعم حقوق الإنسان وتعزيز القيم الإنسانية في دول مجلس 
            التعاون الخليجي. ويعكس هذا التكريم جهود المؤسسة المستمرة في ترسيخ مبادئ التفاهم والتعاون، 
            والعمل نحو مجتمع أكثر شمولاً تتوفر فيه الفرص للجميع دون تمييز على...
          </p>
        </div>

      </div>

      {/* ============================== */}
      {/* 3. شريط الأزرار السفلي (الزر الداكن في اليسار ومكتب الشكاوى في المنتصف) */}
      {/* ============================== */}
      <div className="w-full max-w-[1536px] mx-auto px-4 md:px-6 mt-6 flex items-center justify-between">
    
        {/* زر مكتب الشكاوى في المنتصف تماماً */}
        <button className="bg-[#1f7b64] hover:bg-[#165a49] transition-colors text-white text-[16px] md:text-[17px] font-bold px-14 py-3.5 rounded shadow-sm">
          مكتب الشكاوى
        </button>

        {/* عنصر فارغ للموازنة وجعل زر الشكاوى في المنتصف بدقة */}
        <div className="w-10"></div>

      </div>

    </div>
  );
}