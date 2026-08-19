import React, { useState } from 'react';

export default function LeadershipSection() {
  const [activeImage, setActiveImage] = useState(null);

  // مصفوفة البيانات لتجنب تكرار الكود
  const leadersData = [
    {
      id: 1,
      name: 'الأمير الوليد بن طلال آل سعود',
      role: 'رئيس مجلس إدارة مؤسسة الوليد للإنسانية',
      image: 'https://alweleedphilanthopies.com/storage/posts/h3IEi3LnU7GO59YNLPJHxqF6VylULf147xgQorqD.jpg',
      reverse: false, // الصورة على اليمين للنظام RTL
    },
    {
      id: 2,
      name: 'الأمير خالد بن الوليد بن طلال آل سعود',
      role: 'عضو مجلس إدارة مؤسسة الوليد للإنسانية',
      image: 'https://alweleedphilanthopies.com/storage/posts/o6CsP8bACiA5X0ottfdFuFphLV6Snw2XwGZV9NBx.jpg',
      reverse: true, // الصورة على اليسار للنظام RTL
    },
    {
      id: 3,
      name: 'الأميرة ريم بنت الوليد بن طلال آل سعود',
      role: 'عضو مجلس إدارة مؤسسة الوليد للإنسانية',
      image: 'https://alweleedphilanthopies.com/storage/posts/B8Cd6UOzBUDVTQy0huVOpN3VwG2Z2vmZarPNZmTk.png',
      reverse: false, // الصورة على اليمين للنظام RTL
    },
    {
      id: 4,
      name: 'الأميرة لمياء بنت ماجد بن سعود آل سعود',
      role: 'أمين عام مؤسسة الوليد للإنسانية',
      image: 'https://alweleedphilanthopies.com/storage/posts/1ZByyzqJGz0wCxY4bslJf4b9grQeppQdiRbGWOiP.jpg',
      reverse: true, // الصورة على اليسار للنظام RTL
    },
    {
      id: 5,
      name: 'الأستاذ فهد بن نافل',
      role: 'رئيس نادي الهلال',
      image: 'https://alweleedphilanthopies.com/storage/posts/cASxTbYeVGCXt9QpyZOcA3MIZ5sZAvjCcqsIZ0sy.jpg',
      reverse: false, // الصورة على اليمين للنظام RTL
    },
    {
      id: 6,
      name: 'الشيخ الدكتور علي بن عبدالعزيز النشوان',
      role: 'عضو مجلس إدارة مؤسسة الوليد للإنسانية',
      image: 'https://alweleedphilanthopies.com/storage/posts/0b8E3eyMRukPkL7YBqulE3Vb0IJQSHOpR2VCXFLu.jpg',
      reverse: true, // الصورة على اليسار للنظام RTL
    },
  ];

  return (
    <section dir="rtl" className="bg-[#f4f7f6] min-h-screen py-12 px-4 sm:px-6 lg:px-8 font-sans text-right">
      {/* زيادة العرض الأقصى للبطاقات */}
      <div className="max-w-[1400px] mx-auto space-y-10">
        
        {/* التكرار على بيانات القادة */}
        {leadersData.map((leader) => (
          <div
            key={leader.id}
            className={`bg-white rounded-[32px] p-6 sm:p-10 shadow-sm border border-gray-100/80 flex flex-col md:flex-row items-center justify-between gap-8 sm:gap-12 transition-all duration-300 ${
              leader.reverse ? 'md:flex-row-reverse' : ''
            }`}
          >
            {/* قسم الصورة مع تأثير التمدد والتكبير عند الضغط */}
            <div
              className="w-full md:w-1/2 h-72 sm:h-96 rounded-2xl overflow-hidden bg-gray-100 cursor-pointer select-none relative"
              onClick={() => setActiveImage(activeImage === leader.id ? null : leader.id)}
            >
              <img
                src={leader.image}
                alt={leader.name}
                className={`w-full h-full object-cover object-top transition-transform duration-500 ease-out hover:scale-105 active:scale-125 ${
                  activeImage === leader.id ? 'scale-125 z-10 shadow-2xl' : 'scale-100'
                }`}
              />
            </div>

            {/* النصوص */}
            <div className="w-full md:w-1/2 text-center md:text-right space-y-3 px-2">
              <h2 className="text-2xl sm:text-4xl font-black text-gray-900 leading-tight">
                {leader.name}
              </h2>
              <p className="text-xs sm:text-sm text-gray-400 font-medium">
                {leader.role}
              </p>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}