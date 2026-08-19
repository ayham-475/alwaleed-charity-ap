import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function ProjectsSection() {
  const [activeImage, setActiveImage] = useState(null);

  const projects = [
    {
      id: 1,
      image: 'https://alweleedphilanthopies.com/storage/posts/To38LQzpCJWiIWtqISp9UnfoVTI73I0aSahbHjTp.jpg',
      date: '2026/02/23',
      title: 'مؤسسة الوليد للإنسانية تمكّن النساء كسائقات عبر تطبيق كريم وتعزّز النمو الاقتصادي في المملكة العربية السعودية',
      subtitle: 'إيماناً بالدور المحوري للمرأة في المجتمع، نسعى مؤس...',
    },
    {
      id: 2,
      image: 'https://alweleedphilanthopies.com/storage/posts/aUYEE2JcyTRkv9tdVx3bMUznltXzWThHzZnZdzB8.jpg',
      date: '2026/02/19',
      title: 'نعمل مع شركائنا على تمليك سنوياً: 1000 وحدة سكنية و 1000 سيارة للمستفيدين في المملكة العربية السعودية لتوفير مساكن ملائمة ووسائل تنقل للأسر الأشد حاجة.',
      subtitle: 'أهداف ومدة المشاريع يعتمد مشروع الإسكان التنموي...',
    },
    {
      id: 3,
      image: 'https://alweleedphilanthopies.com/storage/posts/2JFjlGLqxcBBU17F2HIFN4kHU12XaPwOIW6I6QYA.jpg',
      topBadge: 'اتفاقية تعاون مع مؤسسة الوليد للإنسانية لتمليك وتنمية 10,000 أسرة',
      date: '2026/02/19',
      title: 'نعمل مع شركائنا على تمليك سنوياً: 1000 وحدة سكنية و 1000 سيارة للمستفيدين في المملكة العربية السعودية لتوفير مساكن ملائمة ووسائل تنقل للأسر الأشد حاجة.',
      subtitle: 'رؤية لتنمية مستدامة استناداً إلى رؤية السعودية 2030...',
    },
  ];

  return (
    <section dir="rtl" className="bg-white py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* الترويسة والعناوين العلوية */}
        <div className="text-center space-y-3">
          <div className="inline-block px-4 py-1 rounded-full bg-[#e6f4ef] text-[#0d7a53] text-xs font-bold">
            مشاريعنا
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-black text-[#0d7a53] tracking-tight">
            مشاريع مؤسسة الوليد للإنسانية
          </h2>
          
          <p className="text-xs sm:text-sm text-gray-400 font-normal">
            نستعرض لكم أحدث المشاريع والمبادرات التي نقوم بها لخدمة المجتمع
          </p>
        </div>

        {/* شبكة البطاقات الطويلة */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          {projects.map((item) => (
            <div
              key={item.id}
              className="rounded-3xl overflow-hidden flex flex-col bg-[#0d7a53] text-white shadow-sm h-[580px] border border-gray-100"
            >
              {/* النصف العلوي: الصورة الكبيرة ذات الانحناء الشفاف والتمدد */}
              <div 
                className="relative h-[250px] w-full bg-white overflow-hidden cursor-pointer select-none"
                onClick={() => setActiveImage(activeImage === item.id ? null : item.id)}
              >
                {/* الشريط العلوي للكرت الأول إن وجد */}
                {item.topBadge && (
                  <div className="absolute top-0 inset-x-0 z-10 bg-white/90 text-gray-700 text-[10px] font-bold py-1.5 px-3 text-center backdrop-blur-sm border-b border-gray-100">
                    {item.topBadge}
                  </div>
                )}

                <img
                  src={item.image}
                  alt={item.title}
                  className={`w-full h-full object-cover object-center transition-transform duration-500 ease-out hover:scale-105 active:scale-125 ${
                    activeImage === item.id ? 'scale-125 z-20 shadow-2xl' : 'scale-100'
                  }`}
                />
              </div>

              {/* النصف السفلي الأخضر الطويل */}
              <div className="p-6 flex-1 flex flex-col justify-between text-right">
                
                <div className="space-y-3">
                  {/* التاريخ في اليسار */}
                  <div className="text-left text-[11px] text-white/70 font-mono">
                    {item.date}
                  </div>

                  {/* العنوان الرئيسي العريض */}
                  <h3 className="text-sm sm:text-base font-bold text-white leading-relaxed">
                    {item.title}
                  </h3>

                  {/* النص الوصفي الفرعي */}
                  <p className="text-xs text-white/70 font-light leading-relaxed">
                    {item.subtitle}
                  </p>
                </div>

                {/* زر اقرأ المزيد البيضاوي الممركز بالأسفل */}
                <div className="pt-4 pb-1 flex justify-center">
                  <button className="px-8 py-2.5 bg-white text-[#0d7a53] font-bold text-xs rounded-full inline-flex items-center gap-2 shadow-md hover:bg-gray-100 active:scale-95 transition-all">
                    <span>اقرأ المزيد</span>
                    <ChevronDown className="w-4 h-4 stroke-[2.5]" />
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}   