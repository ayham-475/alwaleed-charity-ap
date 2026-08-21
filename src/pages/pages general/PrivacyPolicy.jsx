import React from 'react';
import { ArrowLeft, MessageSquare } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen w-full bg-[#036239] flex items-center justify-center p-4 sm:p-8 dir-rtl font-sans relative">
      
      {/* البطاقة الرئيسية - العرض الأوسع والأنسب للقراءة */}
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden my-8">
        
        {/* شريط العنوان العلوي */}
        <div className="bg-[#036239] text-white text-center py-5 px-6 text-2xl sm:text-3xl font-bold tracking-wide border-b border-emerald-800">
          سياسة الخصوصية
        </div>

        {/* محتوى السياسة */}
        <div className="p-8 sm:p-12 text-right space-y-7 text-slate-700">
          
          {/* قسم 1 */}
          <section className="space-y-1.5">
            <h2 className="text-[#036239] font-bold text-xl sm:text-2xl">سياسة الخصوصية</h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              نحن في مؤسسة الوليد للإنسانية نلتزم بحماية خصوصيتك وبياناتك الشخصية. توضح هذه السياسة كيفية جمع واستخدام وحماية المعلومات التي تقدمها لنا.
            </p>
          </section>

          {/* قسم 2 */}
          <section className="space-y-1.5">
            <h2 className="text-[#036239] font-bold text-xl sm:text-2xl">جمع المعلومات</h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              نقوم بجمع المعلومات الشخصية التي تقدمها طوعاً عند التسجيل أو تقديم طلب مساعدة، بما في ذلك الاسم ورقم الهوية والبريد الإلكتروني ورقم الهاتف.
            </p>
          </section>

          {/* قسم 3 */}
          <section className="space-y-1.5">
            <h2 className="text-[#036239] font-bold text-xl sm:text-2xl">استخدام المعلومات</h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              نستخدم المعلومات المجمعة لمعالجة طلبات المساعدة، والتواصل معك بشأن حالة طلبك، وتحسين خدماتنا.
            </p>
          </section>

          {/* قسم 4 */}
          <section className="space-y-1.5">
            <h2 className="text-[#036239] font-bold text-xl sm:text-2xl">حماية البيانات</h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              نتخذ تدابير أمنية صارمة لحماية بياناتك من الوصول غير المصرح به أو الكشف عنها أو تعديلها.
            </p>
          </section>

          {/* قسم 5 */}
          <section className="space-y-1.5">
            <h2 className="text-[#036239] font-bold text-xl sm:text-2xl">مشاركة المعلومات</h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              لن نشارك معلوماتك الشخصية مع أطراف ثالثة إلا بموافقتك الصريحة أو عند الضرورة القانونية.
            </p>
          </section>

          {/* قسم 6 */}
          <section className="space-y-1.5">
            <h2 className="text-[#036239] font-bold text-xl sm:text-2xl">حقوقك</h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              لديك الحق في الوصول إلى بياناتك الشخصية وتصحيحها أو حذفها. للاستفسارات، يرجى التواصل معنا.
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

export default PrivacyPolicy;