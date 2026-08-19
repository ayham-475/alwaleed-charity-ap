import React from 'react';
import { Share2, ChevronLeft, CheckCircle2 } from 'lucide-react';

export default function NewsGrid() {
  const articles = [
    {
      id: 1,
      date: '2026/05/03',
      publisher: 'مكتب الوليد بن...',
      publisherLogo: 'https://alweleedphilanthopies.com/storage/posts/IyBA3YsNBvGQ2xanK9DNzK2Mgv4LEfbtOLwegIJA.jpg',
      title: 'التقديم على برامج ومبادرات مؤسسة الوليد للإنسانية',
      description: 'التقديم على برامج ومبادرات مؤسسة الوليد للإنسانية تواصل مؤسسة الوليد للإنسانية جهودها في دعم الفئات الأكثر احتياجًا م...',
      image: 'https://alweleedphilanthopies.com/storage/news/media/VT0v3N9BxjnLglqXLXNWapns9y4y0u5UK25MzD6x.jpg',
    },
    {
      id: 2,
      date: '2026/05/03',
      publisher: 'مكتب الوليد بن...',
      publisherLogo: 'https://alweleedphilanthopies.com/storage/posts/IyBA3YsNBvGQ2xanK9DNzK2Mgv4LEfbtOLwegIJA.jpg',
      title: 'الأستاذة لبنى الناهض',
      description: 'الأستاذة لبنى الناهض تتولى الأستاذة لبنى الناهض منصب مدير الإعلام والعلاقات العامة في مؤسسة الوليد للإنسانية، حيث تسه...',
      image: 'https://alweleedphilanthopies.com/storage/news/media/V9Ts2KxAnqEFudJF0uyEUZRfDVhUCzXveebluQc8.jpg',
    },
    {
      id: 3,
      date: '2026/04/22',
      publisher: 'مكتب الوليد بن...',
      publisherLogo: 'https://alweleedphilanthopies.com/storage/posts/IyBA3YsNBvGQ2xanK9DNzK2Mgv4LEfbtOLwegIJA.jpg',
      title:' الاستعلام عن حالة الطلب ومتابعة الإجراءات',
      description: 'بعد إرسال طلبك إلى مؤسسة الوليد للإنسانية يمكنك متابعة حالة الطلب باستخدام رقم الطلب الخاص بك. ويعمل فريق خدمة المستفيدي...',
      image: 'https://alweleedphilanthopies.com/storage/news/media/lDgJhqnsydZd38AjKoNufjdQetIedJxVF9iXto7T.jpg',
    },
    {
      id: 3,
      date: '2026/04/22',
      publisher: 'مكتب الوليد بن...',
      publisherLogo: 'https://alweleedphilanthopies.com/storage/posts/IyBA3YsNBvGQ2xanK9DNzK2Mgv4LEfbtOLwegIJA.jpg',
      title:' الاستعلام عن حالة الطلب ومتابعة الإجراءات',
      description: 'بعد إرسال طلبك إلى مؤسسة الوليد للإنسانية يمكنك متابعة حالة الطلب باستخدام رقم الطلب الخاص بك. ويعمل فريق خدمة المستفيدي...',
      image: 'https://alweleedphilanthopies.com/storage/news/media/CSMlf9y9NGFoddbQHCpAOGrA0m5bcECATydtDDmC.jpg',
    },
    {
      id: 3,
      date: '2026/04/22',
      publisher: 'مكتب الوليد بن...',
      publisherLogo: 'https://alweleedphilanthopies.com/storage/posts/IyBA3YsNBvGQ2xanK9DNzK2Mgv4LEfbtOLwegIJA.jpg',
      title:' الاستعلام عن حالة الطلب ومتابعة الإجراءات',
      description: 'بعد إرسال طلبك إلى مؤسسة الوليد للإنسانية يمكنك متابعة حالة الطلب باستخدام رقم الطلب الخاص بك. ويعمل فريق خدمة المستفيدي...',
      image: 'https://alweleedphilanthopies.com/storage/news/media/JZ6sXOR1FrkBLrj5yxeEuwhZbyK4qf8yRPzQ6H7D.jpg',
    },
    {
      id: 3,
      date: '2026/04/22',
      publisher: 'مكتب الوليد بن...',
      publisherLogo: 'https://alweleedphilanthopies.com/storage/posts/IyBA3YsNBvGQ2xanK9DNzK2Mgv4LEfbtOLwegIJA.jpg',
      title:' الاستعلام عن حالة الطلب ومتابعة الإجراءات',
      description: 'بعد إرسال طلبك إلى مؤسسة الوليد للإنسانية يمكنك متابعة حالة الطلب باستخدام رقم الطلب الخاص بك. ويعمل فريق خدمة المستفيدي...',
      image: '',
    },
    
    {
      id: 3,
      date: '2026/04/22',
      publisher: 'مكتب الوليد بن...',
      publisherLogo: 'https://alweleedphilanthopies.com/storage/posts/IyBA3YsNBvGQ2xanK9DNzK2Mgv4LEfbtOLwegIJA.jpg',
      title:' الاستعلام عن حالة الطلب ومتابعة الإجراءات',
      description: 'بعد إرسال طلبك إلى مؤسسة الوليد للإنسانية يمكنك متابعة حالة الطلب باستخدام رقم الطلب الخاص بك. ويعمل فريق خدمة المستفيدي...',
      image: 'https://alweleedphilanthopies.com/storage/news/media/pSXP03aYG7oEeuv7koBLry3dIuBNlMnONJhwEt8M.jpg',
    },
    {
      id: 3,
      date: '2026/04/22',
      publisher: 'مكتب الوليد بن...',
      publisherLogo: 'https://alweleedphilanthopies.com/storage/posts/IyBA3YsNBvGQ2xanK9DNzK2Mgv4LEfbtOLwegIJA.jpg',
      title:' الاستعلام عن حالة الطلب ومتابعة الإجراءات',
      description: 'بعد إرسال طلبك إلى مؤسسة الوليد للإنسانية يمكنك متابعة حالة الطلب باستخدام رقم الطلب الخاص بك. ويعمل فريق خدمة المستفيدي...',
      image: 'https://alweleedphilanthopies.com/storage/news/media/QuL3LkX9wV4bvvJTcgsDPzFxERz9nrOWo0E98dmJ.jpg',
    },
    {
      id: 3,
      date: '2026/04/22',
      publisher: 'مكتب الوليد بن...',
      publisherLogo: 'https://alweleedphilanthopies.com/storage/posts/IyBA3YsNBvGQ2xanK9DNzK2Mgv4LEfbtOLwegIJA.jpg',
      title:' الاستعلام عن حالة الطلب ومتابعة الإجراءات',
      description: 'بعد إرسال طلبك إلى مؤسسة الوليد للإنسانية يمكنك متابعة حالة الطلب باستخدام رقم الطلب الخاص بك. ويعمل فريق خدمة المستفيدي...',
      image: 'https://alweleedphilanthopies.com/storage/news/media/ET70XbW2LUKQvTPckG2abbCx3ooi5UIA8IGDGtZm.png',
    },
    
  ];

  return (
    <section dir="rtl" className="bg-[#f8fafc] py-8 px-4 font-sans text-right">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-[20px] shadow-sm border border-gray-100 overflow-hidden flex flex-col justify-between hover:shadow-md transition-shadow duration-300"
            >
              {/* قسم الصورة العلوي */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-gray-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* محتوى البطاقة */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  {/* معلومات الناشر والتاريخ */}
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <span>{item.date}</span>

                    <div className="flex items-center gap-1.5">
                      <span className="font-bold text-gray-800">{item.publisher}</span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-black fill-black text-white" />
                      <img
                        src={item.publisherLogo}
                        alt={item.publisher}
                        className="w-5 h-5 rounded-full object-cover border border-gray-200"
                      />
                    </div>
                  </div>

                  {/* عنوان الخبر */}
                  <h3 className="text-base font-bold text-gray-900 leading-snug line-clamp-2 hover:text-[#008752] transition-colors cursor-pointer">
                    {item.title}
                  </h3>

                  {/* وصف الخبر */}
                  <p className="text-gray-400 text-xs leading-relaxed line-clamp-3">
                    {item.description}
                  </p>
                </div>

                {/* أسفل البطاقة: رابط اقرأ المزيد وزر المشاركة */}
                <div className="flex items-center justify-between pt-3 border-t border-gray-50">
                  <button className="text-[#008752] hover:text-[#006e42] font-bold text-xs flex items-center gap-1 transition-colors">
                    <span>اقرأ المزيد</span>
                    <ChevronLeft className="w-4 h-4" />
                  </button>

                  <button className="bg-gray-50 hover:bg-gray-100 text-gray-400 p-2 rounded-xl border border-gray-100 transition-colors">
                    <Share2 className="w-3.5 h-3.5" />
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