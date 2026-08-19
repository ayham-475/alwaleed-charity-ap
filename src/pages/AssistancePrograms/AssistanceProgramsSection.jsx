import React from 'react';
import { ArrowLeft, Check, FileText } from 'lucide-react';

export default function AssistanceProgramsList() {
  // 1. مصفوفة البيانات المحتوية على البرامج الأربعة المستخرجة من الصور
  const programsData = [
    {
      id: 1,
      title: 'برنامج تمويل المشاريع ودعم الاستثمارات',
      description:
        'يهدف برنامج التمويل ودعم المشاريع والاستثمارات إلى تمكين الأفراد ورواد الأعمال من تنفيذ مشاريعهم وتطوير أعمالهم القائمة من خلال توفير حلول تمويلية تسـ...',
      maxSupport: '6,000,000,000',
      features: [
        'تمويل المشاريع الناشئة والقائمة.',
        'دعم التوسع والتطوير للمشاريع الإنتاجية.',
        'المساهمة في تعزيز الاستدامة المالية للمستفيدين.',
        'تمكين رواد الأعمال من تنفيذ أفكارهم الاستثمارية.',
        'دراسة الجدوى الاقتصادية للمشروعات المقدمة.',
        'إجراءات تقديم ومتابعة إلكترونية متكاملة.',
        'إشعارات دورية بحالة الطلب.',
        'تقييم الطلبات وفق معايير التمويل المعتمدة.',
        'متابعة تنفيذ المشروع بعد الاعتماد عند الحاجة.',
        'دعم المبادرات ذات الأثر الاقتصادي والاجتماعي.',
      ],
      requirements: [
        'تقديم فكرة مشروع أو مشروع قائم قابل للتنفيذ.',
        'إرفاق دراسة جدوى أو وصف تفصيلي للمشروع.',
        'الالتزام باستخدام التمويل في الغرض المعتمد.',
        'تقديم بيانات ومستندات صحيحة ومحدثة.',
        'استكمال جميع متطلبات التقديم.',
        'اجتياز مرحلة التقييم الفني والمالي.',
        'الالتزام بضوابط البرنامج وسياسات المؤسسة.',
        'تحتفظ المؤسسة بحق قبول أو رفض أي طلب وفق نتائج التقييم.',
      ],
    },
    {
      id: 2,
      title: 'برنامج الإسكان',
      description:
        'يهدف برنامج الإسكان إلى توفير الدعم السكني للأسر والأفراد المستحقين من خلال المساهمة في شراء أو بناء أو ترميم وتأثيث المنازل، بالإضافة إلى دعم الإيجار...',
      maxSupport: '4,550,000,000',
      features: [
        'دعم شراء المسكن.',
        'دعم بناء المنازل.',
        'ترميم وصيانة المنازل.',
        'تأثيث وتجهيز المنازل.',
        'دعم سداد الإيجار للحالات المستحقة.',
        'توفير حلول سكنية للحالات الإنسانية.',
        'دراسة الطلبات وفق معايير واضحة.',
        'إشعارات إلكترونية بحالة الطلب.',
        'متابعة الطلب حتى إكتمال الإجراءات.',
        'تقديم الدعم بعد اعتماد الطلب.',
      ],
      requirements: [
        'أن يكون مقدم الطلب مستحقاً للدعم.',
        'تعبئة نموذج الطلب كاملاً.',
        'إرفاق جميع المستندات المطلوبة.',
        'صحة البيانات والمعلومات المقدمة.',
        'إثبات الحاجة إلى الدعم السكني.',
        'يجوز للمؤسسة طلب مستندات إضافية عند الحاجة.',
        'تخضع جميع الطلبات للمراجعة والتقييم.',
        'قرار المؤسسة نهائي بعد دراسة الطلب.',
      ],
    },
    {
      id: 3,
      title: 'برنامج الدعم المالي',
      description:
        'يهدف برنامج الدعم المالي والمساعدات الإنسانية إلى تقديم دعم مالي مباشر للحالات الإنسانية والأسر المستحقة، للمساهمة في توفير الاحتياجات الأساسية، والتخ...',
      maxSupport: '2,500,000,000',
      features: [
        'صرف مساعدات مالية مباشرة للمستفيدين المؤهلين.',
        'دعم الحالات الإنسانية الطارئة.',
        'المساهمة في توفير الاحتياجات الأساسية للأسر.',
        'سرعة استقبال ودراسة الطلبات.',
        'إشعارات إلكترونية بمراحل معالجة الطلب.',
        'سرية تامة في معالجة بيانات المستفيدين.',
        'إمكانية تحديث الطلب والمستندات إلكترونياً.',
        'متابعة حالة الطلب حتى صدور القرار النهائي.',
        'اعتماد آلية تقييم عادلة لجميع الطلبات.',
        'تقديم الدعم وفق الأولوية الإنسانية.',
      ],
      requirements: [
        'أن يكون مقدم الطلب من الفئات المستحقة للدعم.',
        'استكمال نموذج الطلب بكافة البيانات المطلوبة.',
        'إرفاق المستندات الداعمة للحالة.',
        'أن تكون المعلومات المقدمة صحيحة وحديثة.',
        'خضوع الطلب للتقييم وفق معايير المؤسسة.',
        'يجوز طلب مستندات إضافية عند الحاجة.',
        'لا يترتب على تقديم الطلب استحقاق تلقائي للدعم.',
        'يلتزم المستفيد بصحة جميع البيانات المقدمة.',
      ],
    },
    {
      id: 4,
      title: 'برنامج دعم وسائل النقل',
      description:
        'يهدف برنامج صرف السيارات إلى توفير وسائل نقل للحالات المستحقة التي تعاني من صعوبات في التنقل، بما يشمل الأسر المحتاجة، وذوي الإعاقة، والحالات الإنساني...',
      maxSupport: '750,000,000',
      features: [
        'توفير سيارات جديدة للمستفيدين المؤهلين.',
        'تسليم المركبة بعد اكتمال إجراءات الاعتماد.',
        'خيارات متعددة تناسب احتياجات المستفيد.',
        'إمكانية تخصيص مركبات لذوي الإعاقة عند الحاجة.',
        'إجراءات إلكترونية لتقديم ومتابعة الطلب.',
        'إشعارات فورية بجميع مراحل دراسة الطلب.',
        'شفافية كاملة في آلية دراسة الطلبات.',
        'تحديث حالة الطلب بشكل مستمر.',
        'تنفيذ إجراءات التسليم بعد استكمال المتطلبات.',
        'خدمة دعم للمستفيدين خلال مراحل البرنامج.',
      ],
      requirements: [
        'أن يكون مقدم الطلب مستحقاً للدعم وفق معايير المؤسسة.',
        'وجود حاجة فعلية للحصول على وسيلة نقل.',
        'تقديم بيانات صحيحة وقابلة للتحقق.',
        'رفع جميع المستندات المطلوبة عند التقديم.',
        'الالتزام بجميع ضوابط وسياسات البرنامج.',
        'الموافقة على التحقق من البيانات عند الحاجة.',
        'عدم وجود معلومات أو مستندات غير صحيحة.',
        'استكمال جميع إجراءات التقديم قبل دراسة الطلب.',
      ],
    },
  ];

  return (
    <section dir="rtl" className="bg-[#f4f6f8] py-16 px-4 font-sans text-right">
      {/* تصغير الحاوية إلى max-w-4xl وجعل الكروت تحت بعضها بالمنتصف */}
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* ترويسة الصفحة */}
        <div className="text-center space-y-2">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#008752]">
            برامج المساعدات
          </h2>
          <p className="text-gray-500 text-sm sm:text-base font-medium">
            نقدم مجموعة متنوعة من برامج المساعدات لتلبية احتياجات المستفيدين المختلفة
          </p>
        </div>

        {/* 2. عمل Loop على البرامج الأربعة */}
        {programsData.map((program) => (
          <div
            key={program.id}
            className="bg-[#008752] rounded-[24px] overflow-hidden shadow-lg text-white grid grid-cols-1 lg:grid-cols-12 min-h-[520px] mx-auto w-full transition-transform duration-300 hover:shadow-xl"
          >
            {/* الجانب الأيمن: المميزات والوصف */}
            <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-5">
                
                {/* مربع الأيقونة */}
                <div className="w-11 h-11 bg-white/90 rounded-xl flex items-center justify-center text-[#008752] shadow-sm">
                  <FileText className="w-5 h-5 stroke-[2.5]" />
                </div>

                {/* العنوان والوصف */}
                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl font-bold leading-snug">
                    {program.title}
                  </h3>
                  <p className="text-white/80 text-xs sm:text-sm font-normal leading-relaxed">
                    {program.description}
                  </p>
                </div>

                {/* المميزات */}
                <div className="space-y-2 pt-1">
                  <h4 className="text-xs font-bold text-white/90 mb-2">المميزات:</h4>
                  <div className="space-y-2">
                    {program.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-white/90">
                        <Check className="w-3.5 h-3.5 text-emerald-300 flex-shrink-0 stroke-[3]" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* زر تقديم الطلب */}
              <div className="pt-4">
                <button className="bg-white text-[#008752] font-bold px-6 py-2.5 rounded-xl hover:bg-gray-100 transition-all flex items-center gap-2 shadow-md text-xs sm:text-sm">
                  <span>تقديم طلب</span>
                  <ArrowLeft className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* الجانب الأيسر: الشروط والمتطلبات باللون الداكن */}
            <div className="lg:col-span-5 bg-[#006e42] p-6 sm:p-8 flex flex-col justify-between border-t lg:border-t-0 lg:border-r border-white/10">
              <div className="space-y-5">
                
                {/* عنوان الشروط */}
                <div className="flex items-center gap-2">
                  <div className="w-1 h-5 bg-emerald-400 rounded-full" />
                  <h3 className="text-lg font-bold">الشروط والمتطلبات</h3>
                </div>

                {/* النقاط */}
                <ul className="space-y-3">
                  {program.requirements.map((req, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-white/85 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 mt-1.5 flex-shrink-0" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* الحد الأقصى للدعم */}
              <div className="pt-6 border-t border-white/15 flex items-center justify-between text-xs sm:text-sm mt-6">
                <span className="text-white/70 font-medium">الحد الأقصى للدعم:</span>
                <span className="font-extrabold text-white text-sm sm:text-base tracking-wide dir-ltr">
                  {program.maxSupport} ر.س
                </span>
              </div>
            </div>

          </div>
        ))}

      </div>
    </section>
  );
}