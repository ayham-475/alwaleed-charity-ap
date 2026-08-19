import React from 'react';

export default function Footer() {
  return (
    <footer dir="rtl" className="bg-[#075e3d] text-white pt-12 pb-6 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* الأعمدة الثلاثة الرئيسية */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-right">
          
          {/* العمود الأول: نبذة عن المؤسسة */}
          <div className="space-y-3">
            <h3 className="text-base font-bold text-white">
              مؤسسة الوليد للإنسانية
            </h3>
            <p className="text-xs text-white/80 leading-relaxed font-light">
              نسعى لمساعدة المحتاجين وتوفير الدعم اللازم لهم من خلال برامجنا المتنوعة، انطلاقاً من التزامنا الإنساني ومسؤوليتنا الاجتماعية، حيث نعمل على تقديم العون للفئات الأشد احتياجاً عبر مبادرات مدروسة تشمل الدعم المالي، والخدمات الاجتماعية، وبرامج التمكين، بما يسهم في تحسين جودة حياتهم وتحقيق الاستقرار لهم، وذلك وفق آليات واضحة ومعايير معتمدة تضمن العدالة والشفافية والاستدامة في العطاء.
            </p>
          </div>

          {/* العمود الثاني: روابط سريعة */}
          <div className="space-y-3">
            <h3 className="text-base font-bold text-white">
              روابط سريعة
            </h3>
            <ul className="space-y-2 text-xs text-white/80 font-light">
              <li>
                <a href="#about" className="hover:text-white transition-colors">عن المؤسسة</a>
              </li>
              <li>
                <a href="#programs" className="hover:text-white transition-colors">البرامج</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">الأسئلة الشائعة</a>
              </li>
              <li>
                <a href="#privacy" className="hover:text-white transition-colors">سياسة الخصوصية</a>
              </li>
              <li>
                <a href="#terms" className="hover:text-white transition-colors">الشروط والأحكام</a>
              </li>
            </ul>
          </div>

          {/* العمود الثالث: تواصل معنا */}
          <div className="space-y-3">
            <h3 className="text-base font-bold text-white">
              تواصل معنا
            </h3>
            <div className="space-y-2 text-xs text-white/80 font-light dir-rtl">
              <p>
                <span className="font-semibold text-white">البريد الإلكتروني: </span>
                <span className="font-mono dir-ltr inline-block">princes.website@alweleed.com</span>
              </p>
              <p>
                <span className="font-semibold text-white">الهاتف: </span>
                <span className="font-mono dir-ltr inline-block">+966548083615</span>
              </p>
              <p>
                <span className="font-semibold text-white">واتساب: </span>
                <span className="font-mono dir-ltr inline-block">966561995859</span>
              </p>
            </div>
          </div>

        </div>

        {/* الخط الفاصل السفلي وحقوق الحفظ */}
        <div className="border-t border-white/10 pt-6 text-center">
          <p className="text-xs text-white/70 font-light">
            © 2026 مؤسسة الوليد للإنسانية. جميع الحقوق محفوظة.
          </p>
        </div>

      </div>
    </footer>
  );
}