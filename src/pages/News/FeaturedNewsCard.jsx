import React from 'react';
import { Share2, ChevronLeft, CheckCircle2 } from 'lucide-react';

export default function FeaturedNewsCard() {
  const newsData = {
    badge: 'خبر مميز',
    date: '2026/06/27',
    publisher: 'مكتب الوليد بن طلال',
    publisherLogo: 'https://alweleedphilanthopies.com/storage/posts/IyBA3YsNBvGQ2xanK9DNzK2Mgv4LEfbtOLwegIJA.jpg',
    title: 'طريقة التواصل مع الأميرة ريم بنت الوليد بن طلال',
    description:
      'طريقة التواصل مع الأميرة ريم بنت الوليد بن طلال يبحث الكثير من الأشخاص عن طريقة التواصل مع الأميرة ريم بنت الوليد بن طلال، سواء للاستفسار عن المبادرات الإنسانية أو لمعرفة وسائل التواصل المتاحة، ولهذا قمنا بتوفير هذه الصفحة لتسهيل الوصول...',
    image: 'https://alweleedphilanthopies.com/storage/posts/tY073BB48sp7xQ4lL3JL7TaZsBfDZCj5rRZpCLMU.jpg',
  };

  return (
    <section dir="rtl" className="bg-[#f8fafc] py-8 px-4 font-sans text-right">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-[24px] shadow-sm border border-gray-100 overflow-hidden grid grid-cols-1 md:grid-cols-12 min-h-[260px]">
          
          {/* الجانب الأيمن: الصورة والشارة */}
          <div className="md:col-span-5 relative h-52 md:h-auto bg-gray-100 overflow-hidden">
            {/* شارة خبر مميز */}
            <div className="absolute top-4 right-4 z-10 bg-[#008752] text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
              {newsData.badge}
            </div>

            {/* صورة الخبر */}
            <img
              src={newsData.image}
              alt={newsData.title}
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* الجانب الأيسر: المحتوى والنصوص */}
          <div className="md:col-span-7 p-6 sm:p-7 flex flex-col justify-between space-y-4">
            
            <div className="space-y-3">
              {/* الترويسة العلمية (التاريخ والناشر) */}
              <div className="flex items-center justify-between text-xs text-gray-400">
                <span>{newsData.date}</span>

                <div className="flex items-center gap-1.5">
                  <span className="font-bold text-gray-800">{newsData.publisher}</span>
                  <CheckCircle2 className="w-4 h-4 text-black fill-black text-white" />
                  <img
                    src={newsData.publisherLogo}
                    alt={newsData.publisher}
                    className="w-5 h-5 rounded-full object-cover border border-gray-200"
                  />
                </div>
              </div>

              {/* عنوان الخبر */}
              <h3 className="text-xl sm:text-2xl font-bold text-[#008752] leading-snug">
                {newsData.title}
              </h3>

              {/* تفاصيل الخبر */}
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed line-clamp-3">
                {newsData.description}
              </p>
            </div>

            {/* الأزرار (أقرأ الخبر كاملاً + زر المشاركة) */}
            <div className="flex items-center gap-3 pt-2">
              <button className="bg-[#008752] hover:bg-[#006e42] text-white font-bold px-5 py-2 rounded-xl text-xs sm:text-sm flex items-center gap-2 transition-colors shadow-sm">
                <span>اقرأ الخبر كاملاً</span>
                <ChevronLeft className="w-4 h-4" />
              </button>

              <button className="bg-gray-50 hover:bg-gray-100 text-gray-500 p-2.5 rounded-xl border border-gray-100 transition-colors">
                <Share2 className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}