import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'كيف يمكنني التقديم على طلب مساعدة؟',
      answer: 'يتم التقديم حصريًا عبر الموقع الرسمي من خلال تعبئة نموذج الطلب الإلكتروني وإرفاق المستندات المطلوبة، ثم يتم دراسة الطلب من قبل الإدارة المختصة',
    },
    {
      question: 'ما هي أنواع المساعدات التي تقدمونها؟',
      answer: 'نقدم برامج متنوعة تشمل الدعم المالي، الإسكان التنموي، تمكين المرأة، ودعم الحالات الإنسانية، وفق السياسات والإمكانيات المتاحة.',
    },
    {
      question: 'كم تستغرق مدة دراسة الطلب؟',
      answer: 'تختلف مدة دراسة الطلب بحسب نوع الحالة واكتمال المستندات، ويتم إشعار المتقدم بنتيجة الطلب عبر الموقع الرسمي.',
    },
    {
      question: 'هل يمكن متابعة حالة الطلب؟',
      answer: 'نعم، يمكن متابعة حالة الطلب مباشرة عبر الحساب المسجل في الموقع الرسمي.',
    },
    {
      question: 'هل يتم تحصيل رسوم مقابل التقديم؟',
      answer:'تُوضَّح جميع الإجراءات والمتطلبات عبر الموقع الرسمي بكل شفافية قبل إتمام عملية التقديم.',
    },
    {
      question: 'هل يشترط وجود مستندات رسمية؟',
      answer:'نعم، يشترط تقديم مستندات تثبت الحالة لضمان الشفافية ودقة التقييم.',
    },
    {
      question:'ما هي شروط التقديم على برنامج المساعدات؟',
      answer:`يشترط للتقديم على برامج المساعدات ما يلي:

• أن يكون المتقدم من الفئات المحتاجة ويثبت حالته بالمستندات الرسمية الداعمة.
• تعبئة نموذج الطلب الإلكتروني بشكل كامل وصحيح عبر الموقع الرسمي.
• إرفاق جميع الوثائق المطلوبة لضمان دراسة الطلب بدقة وشفافية.
• الالتزام بصحة البيانات المقدمة، حيث يخضع الطلب للمراجعة والتحقق قبل اعتماده.
• الموافقة على الشروط والأحكام المنظمة لآلية الاستفادة من البرامج.

علمًا بأن استيفاء الشروط لا يعني بالضرورة الموافقة النهائية، إذ يتم تقييم جميع الطلبات وفق المعايير المعتمدة والإمكانيات المتاحة.`,
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section dir="rtl" className="min-h-screen bg-[#f8f8fc] py-20 px-4 sm:px-6 lg:px-8 font-sans text-right">
      {/* زيادة عرض الحاوية لتناسب الحجم الفخم للبطاقات */}
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* العناوين: ضخمة ومريحة للعين */}
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0f172a] tracking-tight">
            الأسئلة الشائعة
          </h1>
          <p className="text-gray-500 text-lg sm:text-xl font-medium">
            إجابات على أكثر الأسئلة شيوعاً
          </p>
        </div>

        {/* قائمة الأسئلة - بطاقات ضخمة ومتباعدة بفخامة */}
        <div className="space-y-5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100/50 overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full py-6 px-8 flex items-center justify-between cursor-pointer focus:outline-hidden select-none gap-6"
                >
                  {/* السؤال: خط كبير وواضح جداً */}
                  <span className="text-lg sm:text-xl font-extrabold text-[#0f172a] text-right leading-snug">
                    {faq.question}
                  </span>

                  {/* السهم: حجم أكبر ليتناسب مع البطاقة */}
                  <ChevronDown
                    className={`w-6 h-6 text-gray-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-[#0d7a53]' : 'rotate-0'
                    }`}
                  />
                </button>

                {/* نص الإجابة: مساحات واسعة وخط مريح للقراءة */}
                {isOpen && (
                  <div className="px-8 pb-7 pt-2 text-gray-600 text-base sm:text-lg leading-relaxed font-medium text-right border-t border-gray-50/50">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}