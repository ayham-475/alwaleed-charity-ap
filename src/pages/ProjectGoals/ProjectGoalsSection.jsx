import React, { useState } from 'react';

export default function ProjectGoalsSection() {
  const [activeImage, setActiveImage] = useState(null);

  // مصفوفة البيانات الكاملة (13 بطاقة مع id فريد لكل عنصر)
  const goalsData = [
    {
      id: 1,
      title: 'الأميرة لمياء بنت ماجد آل سعود',
      description: 'وقعنا انطلاق المرحلة السادسة من برنامج ستره لترميم 1000 مسكن في المحافظات المصرية ونتطلع لأعوام قادمة من العمل مع مؤسسة مصر الخير للوصول لـ 10000 مسكن وآلاف الأسر في جمهورية مصر العربية الشقيقة.',
      image: 'https://alweleedphilanthopies.com/storage/posts/1GRwCKeUTBEDruKVnU8tVir9TMG42VJQfVrCIUBR.jpg',
    },
    {
      id: 2,
      title: 'نسلك طريق التسامح والتقب',
      description: 'نؤمن بإنسانية لا یحدھا عرق ولا دین ولا جنس، وعلى ذلك فإن أعمالنا تعتمد بشكل أساسي على سد الاحتياجات أینما كانت',
      image: 'https://alweleedphilanthopies.com/storage/posts/uV1NxpqV7zvf1j6S4VLA6L7ay5c4Ib5xm4ArJtgM.jpg',
    },
    {
      id: 3,
      title: 'نؤمن بأن تكاتفنا قوة',
      description: 'نحن لا نعمل وحدنا، لأننا نؤمن بالتغییر من خلال قوة الجماعة، فالعمل الإنساني المنفرد مشرف، أما العمل الجماعي فهو كفيل بأن يصنع تأثيراً حقيقياً',
      image: 'https://alweleedphilanthopies.com/storage/posts/N2wU5IbNH3HoSUVCoYW71g1QRfcQUdEkLBLsf6Ak.jpg',
    },
    {
      id: 4,
      title: 'أمين عام مؤسسة الوليد للإنسانية',
      description: `في تقرير المملكة العربية السعودية 2025 الصادر عن مجموعة أكسفورد للأعمال، تحدثتُ عن التحوّل النوعي الإيجابي الذي يشهده القطاع غير الربحي في المملكة.
فالعمل الإنساني اليوم لم يعد يقتصر على الدعم، بل أصبح قائمًا على الاستراتيجية، والشراكات الفاعلة، وقياس الأثر، بما يعزز إسهامه في تحقيق مستهدفات #رؤية_السعودية_2030 وتنمية مستدامة يقودها الإنسان.
In the Saudi Arabia 2025 report by Oxford Business Group, I share reflections on the shifting landscape of the non-profit sector in the Kingdom.
As Saudi Arabia advances toward #SaudiVision2030, philanthropy is evolving into a more strategic, data-driven, and partnership-led force focused not only on giving, but on creating sustainable and measurable impact.`,
      image: 'https://alweleedphilanthopies.com/storage/posts/0pRXor3BhI0HYxbIgR8WEjIOKcfFnutjY4FTMIf6.jpg',
    },
    {
      id: 5,
      title: 'منتدى مسك العالمي',
      description: 'حضور آمين عام مؤسسة الوليد للإنسانية الأميرة لمياء بنت ماجد آل سعود #منتدى_مسك_العالمي، منصة ملهمة تُبرز دور الشباب في صياغة المستقبل. تمكينهم ودعم طموحاتهم هو الطريق نحو غدٍ أكثر إشراقًا.',
      image: 'https://alweleedphilanthopies.com/storage/posts/ksnm277srxH98Ur0m26rEXOCInx0qG0aGhe5S9kW.jpg',
    },
    {
      id: 6,
      title: 'الأميرة لمياء بنت ماجد آل سعود',
      description: 'شراكة إبداعية بين #روتانا_ستوديوز و #جامعة_الأميرة_نورة لإنتاج فيلم يروي حياة الأميرة نورة بنت عبد الرحمن، امرأة صنعت التاريخ وألهمت الرجال.',
      image: 'https://alweleedphilanthopies.com/storage/posts/JEt6jmCPK7dJhxYvxxmvZt4JIkM4nf0lPy5y3GtU.jpg',
    },
    {
      id: 7,
      title: 'في لقطة تعكس التقدير المتبادل والروح الطيبة',
      description: `في لقطة تعكس التقدير المتبادل والروح الطيبة، اجتمع الأمير الوليد بن طلال، رجل الأعمال والمستثمر السعودي البارز، مع الفنانة الإماراتية الكبيرة أحلام، الملقبة بـ "الملكة" في عالم الغناء العربي. هذه الصورة، التي نُشرت عبر منصات التواصل الاجتماعي، أثارت إعجاباً كبيراً وتفاعلاً واسعاً من قبل الجمهور.

#الملكة_أحلام #الوليد_بن_طلال #لقاء_القمة #روتانا #أحلام_الشامسي`,
      image: 'https://alweleedphilanthopies.com/storage/posts/357DIJROyEhC1fRQX1iEYt0tDOCnECEyybp7sgHk.jpg',
    },
    {
      id: 8,
      title: '#مؤتمر_المرأة_والسلام_والأمن',
      description: `الأميرة لمياء بنت ماجد آل سعود.
سعدت בגلسات الحوار البناء على هامش #مؤتمر_المرأة_والسلام_والأمن مع رئيسة الاتحاد النسائي العام معالي نورة السويدي، ورئيسة كوسوفو السابقة السيدة عاطفة يحيى آغا، والمديرة التنفيذية لهيئة الأمم المتحدة للمرأة السيدة سيما بحوث.`,
      image: 'https://alweleedphilanthopies.com/storage/posts/UVZbzDdl5uRH8OwfJ3jRIIMgz5FDlX4uGekyVByF.jpg',
    },
    {
      id: 9,
      title: 'المبادرات الإنسانية للأميرة ريم بنت الوليد بن طلال',
      description: `دور الأميرة ريم في العمل الخيري:
الأميرة ريم بنت الوليد بن طلال تشرف على العديد من المبادرات الإنسانية والخيرية التي تهدف إلى خدمة المجتمع، دعم الفئات المحتاجة، وتمكين المرأة والشباب.

المشاريع الإنسانية والخيرية:
تركز المبادرات على دعم برامج الإسكان، المشاريع الصغيرة، والمبادرات التطوعية التي تشجع الشباب والمجتمع المدني على المشاركة في العمل الخيري.

طرق التواصل:
يمكن للراغبين بالتواصل زيارة صفحة الموقع الرسمي لمؤسسة الوليد للإنسانية لتقديم طلباتهم.`,
      image: 'https://alweleedphilanthopies.com/storage/posts/tY073BB48sp7xQ4lL3JL7TaZsBfDZCj5rRZpCLMU.jpg',
    },
    {
      id: 10,
      title: 'تسليم الوحدات السكنية والسيارات',
      description: `شاركت أميننا العام، صاحبة السمو الملكي الأميرة لمياء بنت ماجد آل سعود، في حفل «أثر العطاء» برعاية معالي وزير البلديات والإسكان، حيث أعلنت عن مساهمتنا بتقديم 100 سيارة ضمن مبادرة #أثر_العطاء التابعة لمؤسسة «سكن»، بهدف تعزيز تنقّل المستفيدين ورفع جودة حياتهم.
#معًا_من_أجل_الإنسان #نسمو_لتنمو`,
      image: 'https://alweleedphilanthopies.com/storage/posts/za1BYeDJqYUDaNUOJGa8T0JCXdJGXCfcf6ltvD2g.jpg',
    },
    {
      id: 11,
      title: 'المشاريع المجتمعية والتنموية لمؤسسة الوليد للإنسانية',
      description: `دعم المجتمع عبر المشاريع الخيرية:
مؤسسة الوليد للإنسانية تهدف إلى تحسين مستوى المعيشة للأسر المحتاجة، دعم المشاريع الصغيرة، وتمويل برامج التعليم والصحة.

أهمية العمل التطوعي:
تعمل المبادرات على نشر ثقافة العطاء والعمل التطوعي، وتشجيع المجتمع المدني على المشاركة في المشاريع الإنسانية والخيرية.`,
      image: 'https://alweleedphilanthopies.com/storage/posts/GZLsE7gdY6yKHGU9rwMw3XYUbSVbDUm5A0S8wRWL.jpg',
    },
    {
      id: 12,
      title: 'من هو الأمير الوليد بن طلال ودوره في العمل الإنساني',
      description: `الأمير الوليد بن طلال يعد من أبرز الشخصيات التي ساهمت بشكل كبير في دعم العمل الإنساني والخيري على مستوى العالم.
من خلال مكتب الوليد للمبادرات الإنسانية، يتم تقديم الدعم للأسر المحتاجة، تعزيز برامج الإسكان، دعم التعليم والصحة، وتمكين المشاريع المجتمعية الصغيرة التي تساهم في تحسين جودة الحياة.`,
      image: 'https://alweleedphilanthopies.com/storage/posts/IyBA3YsNBvGQ2xanK9DNzK2Mgv4LEfbtOLwegIJA.jpg',
    },
    {
      id: 13,
      title: 'مكتب الوليد بن طلال',
      description: 'يحرص مكتب الأمير الوليد بن طلال على دعم المبادرات الإنسانية والخيرية التي تهدف إلى خدمة المجتمع وتعزيز روح التعاون والتكافل الاجتماعي. تشمل هذه المبادرات دعم المشاريع المجتمعية، تقديم الدعم للأسر المحتاجة، وتشجيع العمل التطوعي.',
      image: 'https://alweleedphilanthopies.com/storage/posts/fimigSQBkhaWxns5c2rtgbPUNY0Vd2NYtPeAxXqq.jpg',
    },
  ];

  return (
    <section dir="rtl" className="bg-[#f8faf9] py-16 px-4 sm:px-6 lg:px-8 font-sans text-right">
      <div className="max-w-[1536px] mx-auto space-y-12">
        
        {/* الترويسة الرئيسية */}
        <div className="text-center space-y-3">
          <div className="inline-block relative">
            <h2 className="text-3xl sm:text-5xl font-black text-[#1a2e26] tracking-tight">
              أهداف مشاريعنا
            </h2>
            <div className="h-1.5 bg-[#0d7a53] w-20 mx-auto mt-3 rounded-full" />
          </div>
          <p className="text-sm sm:text-base text-gray-500 font-medium pt-1 max-w-2xl mx-auto">
            نسعى لتحقيق تأثير مستدام من خلال مشاريع مدروسة تلامس حياة الناس.
          </p>
        </div>

        {/* قائمة البطاقات الـ 13 */}
        <div className="space-y-10">
          {goalsData.map((goal, index) => {
            // الترقيم الآلي (01, 02, 03, ... 13)
            const cardNumber = String(index + 1).padStart(2, '0');
            // التبديل التلقائي لاتجاه الصورة بين اليمين واليسار
            const isReverse = index % 2 !== 0;

            return (
              <div
                key={goal.id}
                className={`bg-white rounded-[32px] p-6 sm:p-10 shadow-sm border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-8 sm:gap-12 transition-all duration-300 ${
                  isReverse ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* قسم الصورة مع الحركة والتمدد عند النقر */}
                <div
                  className="w-full md:w-1/2 h-64 sm:h-80 rounded-2xl overflow-hidden bg-gray-100 cursor-pointer select-none relative shadow-sm"
                  onClick={() => setActiveImage(activeImage === goal.id ? null : goal.id)}
                >
                  <img
                    src={goal.image}
                    alt={goal.title}
                    className={`w-full h-full object-cover object-top transition-transform duration-500 ease-out hover:scale-105 active:scale-125 ${
                      activeImage === goal.id ? 'scale-125 z-10 shadow-2xl' : 'scale-100'
                    }`}
                  />
                </div>

                {/* قسم النصوص والترقيم */}
                <div className="w-full md:w-1/2 space-y-6 text-right relative px-2">
                  
                  {/* الخط الفاصل الفاتح مع إزاحة الرقم إلى بداية الخط (اليمين) */}
                  <div className="relative pt-6">
                    <div className="border-t border-gray-100 w-full absolute top-0 right-0" />
                    <span className="absolute -top-5 right-2 bg-white px-3 text-4xl sm:text-5xl font-black text-gray-200/80 select-none">
                      {cardNumber}
                    </span>
                  </div>

                  {/* العنوان والوصف مع الحفاظ على الأسطر الجديدة */}
                  <div className="space-y-3 pt-2">
                    <h3 className="text-2xl sm:text-3xl font-black text-gray-900 leading-tight">
                      {goal.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-normal whitespace-pre-line">
                      {goal.description}
                    </p>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}