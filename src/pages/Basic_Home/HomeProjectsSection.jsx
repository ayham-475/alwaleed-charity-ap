import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

export default function ProjectsSection() {
  const projects = [
    {
      id: 1,
      image: 'https://alweleedphilanthopies.com/storage/posts/To38LQzpCJWiIWtqISp9UnfoVTI73I0aSahbHjTp.jpg',
      date: '2026/02/23',
      title: 'مؤسسة الوليد للإنسانية تمكّن النساء كسائقات عبر تطبيق كريم وتعزّز النمو الاقتصادي في المملكة العربية السعودية',
      subtitle: 'إيماناً بالدور المحوري للمرأة في المجتمع، نسعى في مؤسسة الوليد للإنسانية لتقديم المبادرات النوعية التي تفتح آفاق التمكين الاقتصادي والاجتماعي وترسخ الاستقلالية المالية.',
      detailsTitle: 'تفاصيل مبادرة التمكين',
      detailsText: 'تتضمن الشراكة توفير مركبات مجهزة ودعم تدريبي كامل للمستفيدات، مما يساهم في إيجاد فرص عمل مستدامة وزيادة مشاركة المرأة في سوق العمل وتنمية المحتوى المحلي.'
    },
    {
      id: 2,
      image: 'https://alweleedphilanthopies.com/storage/posts/aUYEE2JcyTRkv9tdVx3bMUznltXzWThHzZnZdzB8.jpg',
      date: '2026/02/19',
      title: 'نعمل مع شركائنا على تمليك سنوياً: 1000 وحدة سكنية و 1000 سيارة للمستفيدين في المملكة العربية السعودية لتوفير مساكن ملائمة ووسائل تنقل للأسر الأشد حاجة.',
      subtitle: 'أهداف ومدة المشاريع يعتمد مشروع الإسكان التنموي ومشروع السيارات على أهداف محددة تسعى لتحسين مستوى المعيشة للمواطنين.',
      detailsTitle: 'أهداف ومدة المشاريع',
      detailsText: 'يعتمد مشروع الإسكان التنموي ومشروع السيارات على أهداف محددة، تسعى لتحسين مستوى المعيشة للمواطنين، وتقليل تكاليف السكن والتنقل، وزيادة التملك والتمكين. ستستمر هذه المبادرات لمدة خمس سنوات بهدف توفير 10,000 وحدة سكنية و 10,000 سيارة للعائلات الأكثر حاجة.'
    },
    {
      id: 3,
      image: 'https://alweleedphilanthopies.com/storage/posts/2JFjlGLqxcBBU17F2HIFN4kHU12XaPwOIW6I6QYA.jpg',
      topBadge: 'اتفاقية تعاون مع مؤسسة الوليد للإنسانية لتمليك وتنمية 10,000 أسرة',
      date: '2026/02/19',
      title: 'نعمل مع شركائنا على تمليك سنوياً: 1000 وحدة سكنية و 1000 سيارة للمستفيدين في المملكة العربية السعودية لتوفير مساكن ملائمة ووسائل تنقل للأسر الأشد حاجة.',
      subtitle: 'رؤية لتنمية مستدامة استناداً إلى رؤية السعودية 2030 لتمكين الفئات الأكثر استحقاقاً.',
      detailsTitle: 'الرؤية والشراكة الاستراتيجية',
      detailsText: 'تأتي هذه الاتفاقية تعزيزاً للشراكة بين القطاع غير الربحي والقطاعات الحكومية للارتقاء بجودة الحياة وتقديم حلول سكنية وتنقلية متكاملة تضمن العيش الكريم.'
    },
  ];

  return (
    <section dir="rtl" className="bg-[#f8f9fa] py-20 px-4 sm:px-8 lg:px-12 font-sans text-right">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* الترويسة الرئيسية */}
        <div className="text-center space-y-4">
          <div className="inline-block px-6 py-2 rounded-full bg-[#e6f4ef] text-[#0d7a53] text-base font-extrabold shadow-sm">
            مشاريعنا
          </div>
          
          <h2 className="text-4xl sm:text-6xl font-black text-[#0d7a53] tracking-tight">
            مشاريع مؤسسة الوليد للإنسانية
          </h2>
          
          <p className="text-base sm:text-xl text-gray-600 font-medium max-w-3xl mx-auto">
            نستعرض لكم أحدث المشاريع والمبادرات التي نقوم بها لخدمة المجتمع
          </p>
        </div>

        {/* شبكة البطاقات العريضة والفخمة */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-stretch">
          {projects.map((item) => (
            <div
              key={item.id}
              className="rounded-3xl overflow-hidden flex flex-col bg-[#0d7a53] text-white shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border border-gray-100"
            >
              {/* قسم الصورة العلوي */}
              <div className="relative h-72 sm:h-80 w-full bg-white overflow-hidden">
                {item.topBadge && (
                  <div className="absolute top-0 inset-x-0 z-10 bg-white/95 text-gray-800 text-xs sm:text-sm font-bold py-2.5 px-4 text-center backdrop-blur-md border-b border-gray-200/50 shadow-sm">
                    {item.topBadge}
                  </div>
                )}

                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out hover:scale-105"
                />
              </div>

              {/* المحتوى الأخضر المكبر */}
              <div className="p-8 sm:p-10 flex-1 flex flex-col justify-between space-y-8">
                
                <div className="space-y-5">
                  <div className="text-left text-xs sm:text-sm font-mono text-white/80 font-bold">
                    {item.date}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-white leading-snug sm:leading-relaxed">
                    {item.title}
                  </h3>

                  <p className="text-sm sm:text-base text-white/85 font-normal leading-relaxed">
                    {item.subtitle}
                  </p>
                </div>

                {/* التحويل إلى صفحة تفاصيل المشروع باستخدام Link */}
                <div className="pt-6 flex justify-center">
                  <Link
                    to={`/ProjectDetails/${item.id}`}
                    state={{ project: item }}
                    className="w-full sm:w-auto px-10 py-3.5 bg-white hover:bg-gray-100 text-[#0d7a53] font-black text-sm sm:text-base rounded-full inline-flex items-center justify-center gap-3 shadow-xl active:scale-95 transition-all duration-200 group"
                  >
                    <span>التفاصيل الكاملة</span>
                    <ChevronLeft className="w-5 h-5 stroke-[3] group-hover:-translate-x-1 transition-transform" />
                  </Link>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}