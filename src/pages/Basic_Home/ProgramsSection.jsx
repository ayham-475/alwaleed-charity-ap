import React, { useState } from 'react';

export default function ProgramsSection() {
  const [activeImage, setActiveImage] = useState(null);

  const programs = [
    {
      id: 1,
      image: 'https://alweleedphilanthopies.com/storage/programs/oqDsG599S1WekY0pVYtfZD2L2yinW0r8dCdLPGo7.jpg',
      status: 'مستمر',
      title: 'برنامج الإسكان',
      description: 'يهدف برنامج الإسكان إلى توفير الدعم السكني للأسر والأفراد المستحقين من خلال المس...',
      category: 'تنمية المجتمعات',
      expiryDate: '2030/01/31',
    },
    {
      id: 2,
      image: 'https://alweleedphilanthopies.com/storage/programs/UJMrmjmNMHclVipEEOk1claa0Grs4QWbLNJgWHTs.jpg',
      status: 'مستمر',
      title: 'برنامج الدعم المالي',
      description: 'يهدف برنامج الدعم المالي والمساعدات الإنسانية إلى تقديم دعم مالي مباشر للحالات ا...',
      category: 'تنمية المجتمعات',
      expiryDate: '2030/01/30',
    },
    {
      id: 3,
      image: 'https://alweleedphilanthopies.com/storage/programs/oJWfhsxsbyNJLu2uzEKiKZOn5DO8Vzmj1GGfjdbJ.jpg',
      status: 'مستمر',
      title: 'برنامج دعم وسائل النقل',
      description: 'يهدف برنامج صرف السيارات إلى توفير وسائل نقل للحالات المستحقة التي تعاني من صعوب...',
      category: 'تنمية المجتمعات',
      expiryDate: '2030/01/31',
    },
    {
      id: 3,
      image: 'https://alweleedphilanthopies.com/storage/programs/qyWnfE2OGje9avMLjLXmAHO4F8iT5Ouaa4taOdAy.jpg',
      status: 'مستمر',
      title: 'برنامج دعم وسائل النقل',
      description: 'يهدف برنامج صرف السيارات إلى توفير وسائل نقل للحالات المستحقة التي تعاني من صعوب...',
      category: 'تنمية المجتمعات',
      expiryDate: '2030/01/31',
    },
  ];

  return (
    /* تم تغيير الخلفية هنا لتكون بدرجة الرمادي الناعم المطابقة للقطة الشاشة bg-[#f8faf9] */
    <section  dir="rtl" className="bg-[#f8faf9] py-16 px-4 sm:px-6 lg:px-8 text-right font-sans transition-colors">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* الترويسة والعناوين المطابقة للقطة الشاشة حرفياً */}
        <div className="text-center space-y-3 max-w-5xl mx-auto">
          <div className="inline-block px-4 py-1 rounded-full bg-[#e6f4ef] text-[#0d7a53] text-xs font-bold">
            برامجنا
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-black text-[#0d7a53] tracking-tight">
            أنواع المساعدات المتاحة
          </h2>
          
          {/* النص النصي المطابق للصورة تماماً */}
          <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-normal text-center max-w-4xl mx-auto">
            تقدم مجموعة متنوعة من برامج المساعدات لتلبية احتياجات المستفيدين المختلفة، وذلك من خلال مبادرات إنسانية وتنموية مدروسة، تُصمم وفق معايير واضحة وآليات معتمدة، وتهدف إلى دعم الفئات الأكثر احتياجاً، وتحسين ظروفهم المعيشية، وتمكينهم من الاعتماد على أنفسهم، بما يحقق الاستقرار الاجتماعي ويعزز مبادئ العدالة والشفافية والاستدامة في تقديم الدعم.
          </p>
        </div>

        {/* شبكة البطاقات الثلاث */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          {programs.map((item) => (
            <div
              key={item.id}
              className="rounded-3xl border border-gray-200/60 shadow-sm overflow-hidden flex flex-col bg-[#0d7a53] text-white transition-all duration-300 hover:shadow-2xl"
            >
              {/* حاوية الصورة مع تأثير التمدد والتفاعل عند الضغط */}
              <div 
                className="relative h-80 w-full bg-white overflow-hidden cursor-pointer select-none"
                onClick={() => setActiveImage(activeImage === item.id ? null : item.id)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className={`w-full h-full object-cover object-center transition-transform duration-500 ease-out hover:scale-105 active:scale-125 ${
                    activeImage === item.id ? 'scale-125 z-10 shadow-2xl' : 'scale-100'
                  }`}
                />
              </div>

              {/* الجزء السفلي الأخضر */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                
                <div className="space-y-4">
                  {/* شارة مستمر العلوية */}
                  <div className="flex justify-start">
                    <span className="px-3 py-0.5 rounded-full bg-white/20 text-white text-[10px] font-medium backdrop-blur-sm">
                      {item.status}
                    </span>
                  </div>

                  {/* عنوان البرنامج */}
                  <h3 className="text-xl font-bold text-white text-center sm:text-right">
                    {item.title}
                  </h3>

                  {/* النص الوصفي */}
                  <p className="text-xs text-white/80 leading-relaxed text-center sm:text-right font-light">
                    {item.description}
                  </p>
                </div>

                {/* الصف السفلي: التصنيف والتاريخ والزر */}
                <div className="space-y-4 pt-2">
                  <div className="flex items-center justify-between text-[11px] text-white/70 font-mono">
                    <span>ينتهي في: {item.expiryDate}</span>
                    <span>{item.category}</span>
                  </div>

                  {/* زر تقديم طلب الأبيض البيضاوي */}
                  <div className="pt-1">
                    <button className="w-full py-3 bg-white text-[#0d7a53] font-bold text-sm rounded-full flex items-center justify-center shadow-md hover:bg-gray-100 active:scale-95 transition-all">
                      تقديم طلب
                    </button>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}