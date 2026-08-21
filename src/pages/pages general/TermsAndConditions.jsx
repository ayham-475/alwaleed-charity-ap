import React from 'react';
import { ArrowLeft, MessageSquare } from 'lucide-react';

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen w-full bg-[#036239] flex items-center justify-center p-4 sm:p-8 dir-rtl font-sans relative">
      
      {/* البطاقة الرئيسية - تم تكبير الحد الأقصى للعرض ليكون أوسع وأوضح */}
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden my-8">
        
        {/* شريط العنوان العلوي - خط أكبر وأوضح */}
        <div className="bg-[#036239] text-white text-center py-5 px-6 text-2xl sm:text-3xl font-bold tracking-wide border-b border-emerald-800">
          الشروط والأحكام
        </div>

        {/* محتوى الشروط والأحكام - تم زيادة الهوامش والخطوط */}
        <div className="p-8 sm:p-12 text-right space-y-7 text-slate-700">
          
          {/* قسم 1 */}
          <section className="space-y-1.5">
            <h2 className="text-[#036239] font-bold text-xl sm:text-2xl">الشروط والأحكام</h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              مرحباً بك في موقع مؤسسة الوليد للإنسانية. باستخدامك لهذا الموقع، فإنك توافق على الالتزام بالشروط والأحكام التالية.
            </p>
          </section>

          {/* قسم 2 */}
          <section className="space-y-1.5">
            <h2 className="text-[#036239] font-bold text-xl sm:text-2xl">استخدام الموقع</h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              يجب استخدام هذا الموقع للأغراض المشروعة فقط. يُحظر استخدام الموقع بأي طريقة قد تضر بالموقع أو تعطله أو تؤثر على استخدام الآخرين له.
            </p>
          </section>

          {/* قسم 3 */}
          <section className="space-y-1.5">
            <h2 className="text-[#036239] font-bold text-xl sm:text-2xl">تقديم الطلبات</h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              عند تقديم طلب مساعدة، يجب تقديم معلومات دقيقة وصحيحة. أي معلومات كاذبة أو مضللة قد تؤدي إلى رفض الطلب واتخاذ الإجراءات القانونية المناسبة.
            </p>
          </section>

          {/* قسم 4 */}
          <section className="space-y-1.5">
            <h2 className="text-[#036239] font-bold text-xl sm:text-2xl">الملكية الفكرية</h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              جميع المحتويات الموجودة على هذا الموقع، بما في ذلك النصوص والصور والشعارات، هي ملك لمؤسسة الوليد للإنسانية ومحمية بموجب قوانين حقوق النشر.
            </p>
          </section>

          {/* قسم 5 */}
          <section className="space-y-1.5">
            <h2 className="text-[#036239] font-bold text-xl sm:text-2xl">إخلاء المسؤولية</h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              نسعى لتقديم معلومات دقيقة ومحدثة، لكننا لا نضمن دقة أو اكتمال المعلومات المقدمة على الموقع.
            </p>
          </section>

          {/* قسم 6 */}
          <section className="space-y-1.5">
            <h2 className="text-[#036239] font-bold text-xl sm:text-2xl">التعديلات</h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              نحتفظ بالحق في تعديل هذه الشروط والأحكام في أي وقت. يُنصح بمراجعة هذه الصفحة بانتظام.
            </p>
          </section>

          {/* قسم 7 */}
          <section className="space-y-1.5">
            <h2 className="text-[#036239] font-bold text-xl sm:text-2xl">الاتصال</h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              للاستفسارات حول هذه الشروط، يرجى التواصل معنا عبر البريد الإلكتروني أو الهاتف.
            </p>
          </section>

          {/* زر العودة للرئيسية */}
          <div className="pt-6 flex justify-center">
            <a
              href="/"
              className="inline-flex items-center justify-center gap-2 bg-[#036239] hover:bg-[#024a2b] text-white font-bold py-3 px-10 rounded-full text-base sm:text-lg transition-all duration-200 shadow-md active:scale-95"
            >
              <ArrowLeft size={18} />
              <span>العودة للرئيسية</span>
            </a>
          </div>

        </div>
      </div>

      {/* زر المحادثة العائم في الأسفل */}
      <button 
        className="fixed bottom-6 left-6 bg-[#036239] hover:bg-[#024a2b] text-white p-4 rounded-full shadow-xl border border-white/20 transition-all duration-200 active:scale-90"
        aria-label="Chat"
      >
        <MessageSquare size={22} />
      </button>

    </div>
  );
};

export default TermsAndConditions;