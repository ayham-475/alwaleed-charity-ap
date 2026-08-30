import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer dir="rtl" className="bg-[#075e3d] text-white pt-12 pb-6 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto space-y-8">

        {/* الأعمدة الثلاثة الرئيسية */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-right">

          {/* العمود الأول: نبذة عن المؤسسة */}
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-white">
              مؤسسة الوليد للإنسانية
            </h3>
            <p className="text-sm sm:text-base text-white/90 leading-relaxed font-light">
              نسعى لمساعدة المحتاجين وتوفير الدعم اللازم لهم من خلال برامجنا المتنوعة، انطلاقاً من التزامنا الإنساني ومسؤوليتنا الاجتماعية، حيث نعمل على تقديم العون للفئات الأشد احتياجاً عبر مبادرات مدروسة تشمل الدعم المالي، والخدمات الاجتماعية، وبرامج التمكين، بما يسهم في تحسين جودة حياتهم وتحقيق الاستقرار لهم، وذلك وفق آليات واضحة ومعايير معتمدة تضمن العدالة والشفافية والاستدامة في العطاء.
            </p>
          </div>

          {/* العمود الثاني: روابط سريعة */}
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-white">
              روابط سريعة
            </h3>
            <ul className="space-y-2.5 text-sm sm:text-base text-white/90 font-light">
              <li>
                <Link to="/AboutUs" className="hover:text-white hover:underline transition-colors">عن المؤسسة</Link>
              </li>
              <li>
                <Link to="/Programs" className="hover:text-white hover:underline transition-colors">البرامج</Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-white hover:underline transition-colors">الأسئلة الشائعة</Link>
              </li>
              <li>
                <Link to="/PrivacyPolicy" className="hover:text-white hover:underline transition-colors">سياسة الخصوصية</Link>
              </li>
              <li>
                <Link to="/TermsAndConditions" className="hover:text-white hover:underline transition-colors">الشروط والأحكام</Link>
              </li>
            </ul>
          </div>

          {/* العمود الثالث: تواصل معنا */}
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-white">
              تواصل معنا
            </h3>
            <div className="space-y-2.5 text-sm sm:text-base text-white/90 font-light dir-rtl">
              <p>
                <span className="font-semibold text-white">البريد الإلكتروني: </span>
                <a href="mailto:princes.website@alweleed.com" className="font-mono dir-ltr inline-block hover:underline">
                  princes.website@alweleed.com
                </a>
              </p>

              <p>
                <span className="font-semibold text-white">واتساب: </span>
                <a
                  href="https://wa.me/966546082759"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono dir-ltr inline-block hover:underline"
                >
                  966546082759

                </a>
              </p>
              <p>
                <span className="font-semibold text-white">تليجرام: </span>
                <a
                  href="https://t.me/+966546082759"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono dir-ltr inline-block hover:underline"
                >
                  +966546082759
                </a>
              </p>
            </div>
          </div>

        </div>

        {/* الخط الفاصل السفلي وحقوق الحفظ */}
        <div className="border-t border-white/10 pt-6 text-center">
          <p className="text-sm text-white/80 font-light">
            © 2026 مؤسسة الوليد للإنسانية. جميع الحقوق محفوظة.
          </p>
        </div>

      </div>
    </footer>
  );
}