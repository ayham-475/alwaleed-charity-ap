import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, Newspaper, CheckCircle2 } from 'lucide-react';

export default function NewsSection() {
  const [activeImage, setActiveImage] = useState(null);

  const newsItems = [
    {
      id: 1,
      image: 'https://alweleedphilanthopies.com/storage/news/media/9aCuGOPz8qKEmm9TekZWVtCcQYK6TN2Smcyj1yeb.jpg', // صورة الأميرة ريم
      date: '2026/06/27',
      title: 'طريقة التواصل مع الأميرة ريم بنت الوليد بن طلال',
      description: 'طريقة التواصل مع الأميرة ريم بنت الوليد بن طلال يبحث الكثير من الأشخاص عن طريقة التواصل مع الأمير...',
    },
    {
      id: 2,
      image: 'https://alweleedphilanthopies.com/storage/news/media/VT0v3N9BxjnLglqXLXNWapns9y4y0u5UK25MzD6x.jpg', // صورة الأميرة لمياء
      date: '2026/06/03',
      title: 'طريقة التواصل مع الأميرة لمياء بنت ماجد آل سعود',
      description: 'طريقة التواصل مع الأميرة لمياء بنت ماجد آل سعود يتساءل العديد من الأشخاص عن طريقة التواصل مع صاحب...',
    },
    {
      id: 3,
      image: 'https://alweleedphilanthopies.com/storage/news/media/V9Ts2KxAnqEFudJF0uyEUZRfDVhUCzXveebluQc8.jpg', // صورة السيارات
      badgeOverlay: 'مشروع السيارات الدفعة السابعة',
      date: '2026/06/03',
      title: 'طريقة التواصل مع مؤسسة الوليد للإنسانية',
      description: 'طريقة التواصل مع مؤسسة الوليد للإنسانية إذا كنت تبحث عن طريقة التواصل مع مؤسسة الوليد للإنسانية لـ...',
    },
  ];

  return (
    <section dir="rtl" className="bg-white py-16 px-4 sm:px-6 lg:px-8 text-right font-sans">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* العناوين والترويسة */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-[#e6f4ef] text-[#0d7a53] text-xs font-extrabold">
            <Newspaper className="w-3.5 h-3.5" />
            <span>الأخبار</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900">
            آخر الأخبار والمستجدات
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm font-medium">
            تابع أحدث أخبار مؤسسة الوليد للإنسانية
          </p>
        </div>

        {/* شبكة البطاقات الثلاث */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {newsItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden flex flex-col justify-between hover:shadow-md transition-shadow duration-300"
            >
              <div>
                {/* قسم الصورة مع التوجيه لصفحة التفاصيل عند التقرير */}
                <div className="relative h-56 w-full bg-gray-100 overflow-hidden select-none">
                  <Link to={`/NewsDetails/${item.id}`}>
                    <img
                      src={item.image}
                      alt={item.title}
                      onClick={() => setActiveImage(activeImage === item.id ? null : item.id)}
                      className={`w-full h-full object-cover transition-transform duration-500 ease-out hover:scale-105 active:scale-125 ${
                        activeImage === item.id ? 'scale-125 z-10 shadow-2xl' : 'scale-100'
                      }`}
                    />
                  </Link>
                  
                  {/* الشعار الأخضر المدمج داخل الصورة إن وجد */}
                  {item.badgeOverlay && (
                    <div className="absolute bottom-3 left-3 bg-[#0d7a53] text-white text-[11px] font-bold px-3 py-1.5 rounded-lg shadow-lg flex items-center gap-1 z-20 pointer-events-none">
                      <span>{item.badgeOverlay}</span>
                    </div>
                  )}
                </div>

                {/* المحتوى النصي */}
                <div className="p-6 space-y-3 text-right">
                  {/* التاريخ وأيقونة التوثيق */}
                  <div className="flex items-center justify-end gap-1.5 text-gray-400 text-[11px] font-mono">
                    <span>{item.date}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-black fill-black text-white" />
                  </div>

                  {/* العنوان الرئيسي مرتبط بصفحة التفاصيل */}
                  <Link to={`/NewsDetails/${item.id}`} className="block">
                    <h3 className="text-base font-bold text-gray-900 leading-snug hover:text-[#0d7a53] transition-colors">
                      {item.title}
                    </h3>
                  </Link>

                  {/* النص الفرعي */}
                  <p className="text-xs text-gray-400 leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* زر اقرأ المزيد الداخلي */}
              <div className="px-6 pb-6 pt-2 text-right">
                <Link
                  to={`/NewsDetails/${item.id}`}
                  className="inline-flex items-center gap-1 text-[#0d7a53] text-xs font-bold hover:underline"
                >
                  اقرأ المزيد
                  <ChevronLeft className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* زر عرض جميع الأخبار يوجه لصفحة الأخبار العامة */}
        <div className="flex justify-center pt-6">
          <Link
            to="/News"
            className="inline-flex items-center gap-2 bg-[#0d7a53] hover:bg-[#0a6343] text-white px-8 py-3 rounded-full text-sm font-bold shadow-md transition-all hover:scale-105"
          >
            عرض جميع الأخبار
            <ChevronLeft className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}