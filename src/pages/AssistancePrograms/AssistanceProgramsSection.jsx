import React from 'react';
import { ArrowLeft, Check, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AssistanceProgramsList() {
  const programsData = [
    {
      id: 1,
      title: 'برنامج تمويل المشاريع ودعم الاستثمارات',
      description: 'يهدف برنامج التمويل ودعم المشاريع والاستثمارات إلى تمكين الأفراد ورواد الأعمال من تنفيذ مشاريعهم وتطوير أعمالهم القائمة من خلال توفير حلول تمويلية تسـ...',
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
      description: 'يهدف برنامج الإسكان إلى توفير الدعم السكني للأسر والأفراد المستحقين من خلال المساهمة في شراء أو بناء أو ترميم وتأثيث المنازل، بالإضافة إلى دعم الإيجار...',
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
      description: 'يهدف برنامج الدعم المالي والمساعدات الإنسانية إلى تقديم دعم مالي مباشر للحالات الإنسانية والأسر المستحقة، للمساهمة في توفير الاحتياجات الأساسية، والتخ...',
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
      description: 'يهدف برنامج صرف السيارات إلى توفير وسائل نقل للحالات المستحقة التي تعاني من صعوبات في التنقل، بما يشمل الأسر المحتاجة، وذوي الإعاقة، والحالات الإنساني...',
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
    <section dir="rtl" className="bg-[#f4f6f8] py-20 px-4 sm:px-6 lg:px-8 font-sans text-right">
      {/* الحاوية متوازنة max-w-5xl لتعطي مساحة مناسبة دون مبالغة */}
      <div className="max-w-5xl mx-auto space-y-16">
        
        {/* ترويسة الصفحة */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#008752] tracking-tight">
            برامج المساعدات
          </h2>
          <p className="text-gray-500 text-base sm:text-lg md:text-xl font-medium max-w-2xl mx-auto">
            نقدم مجموعة متنوعة من برامج المساعدات لتلبية احتياجات المستفيدين المختلفة بجودة وكفاءة عالية
          </p>
        </div>

        {/* عرض البطاقات */}
        <div className="space-y-12">
          {programsData.map((program) => (
            <div
              key={program.id}
              className="bg-[#008752] rounded-[28px] overflow-hidden shadow-xl text-white grid grid-cols-1 lg:grid-cols-12 min-h-[550px] w-full transition-all duration-300 hover:shadow-2xl"
            >
              {/* الجانب الأيمن: المميزات والوصف */}
              <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-8">
                <div className="space-y-6">
                  
                  {/* مربع الأيقونة */}
                  <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-[#008752] shadow-sm">
                    <FileText className="w-6 h-6 stroke-[2.5]" />
                  </div>

                  {/* العنوان والوصف */}
                  <div className="space-y-3">
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold leading-tight">
                      {program.title}
                    </h3>
                    <p className="text-white/90 text-sm sm:text-base font-normal leading-relaxed">
                      {program.description}
                    </p>
                  </div>

                  {/* المميزات */}
                  <div className="space-y-3 pt-2">
                    <h4 className="text-base sm:text-lg font-bold text-white mb-3">أهم المميزات:</h4>
                    <div className="space-y-3">
                      {program.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-sm sm:text-base text-white/95">
                          <Check className="w-5 h-5 text-emerald-300 flex-shrink-0 stroke-[3] mt-0.5" />
                          <span className="leading-relaxed">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* زر تقديم الطلب */}
                <div className="pt-6">
                  <Link to="/ApplyPage">
                  <button className="bg-white text-[#008752] font-bold px-8 py-3.5 rounded-xl hover:bg-gray-50 transition-all flex items-center justify-center gap-2.5 shadow-md text-base sm:text-lg w-full sm:w-auto">
                    <span>تقديم طلب الآن</span>
                    <ArrowLeft className="w-5 h-5" />
                  </button>
                  </Link>
                </div>
              </div>

              {/* الجانب الأيسر: الشروط والمتطلبات */}
              <div className="lg:col-span-5 bg-[#006e42] p-6 sm:p-8 lg:p-10 flex flex-col justify-between border-t lg:border-t-0 lg:border-r border-white/10">
                <div className="space-y-6">
                  
                  {/* عنوان الشروط */}
                  <div className="flex items-center gap-2.5">
                    <div className="w-1.5 h-6 bg-emerald-400 rounded-full" />
                    <h3 className="text-lg sm:text-xl font-extrabold">الشروط والمتطلبات</h3>
                  </div>

                  {/* النقاط */}
                  <ul className="space-y-4 pt-1">
                    {program.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-sm sm:text-base text-white/90 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 mt-2 flex-shrink-0 shadow-[0_0_6px_rgba(110,231,183,0.8)]" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* الحد الأقصى للدعم */}
                <div className="pt-8 border-t border-white/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mt-8">
                  <span className="text-white/80 font-bold text-base sm:text-lg">الحد الأقصى للدعم:</span>
                  <span className="font-black text-white text-xl sm:text-2xl lg:text-3xl tracking-wider dir-ltr">
                    {program.maxSupport} <span className="text-base lg:text-lg font-bold ml-1">ر.س</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}