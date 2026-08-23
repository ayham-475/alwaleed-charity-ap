  import React from 'react';
  import { Link } from 'react-router-dom';
  import { Globe,Send } from 'lucide-react';
  import { ArrowLeft, MessageSquare } from 'lucide-react';
  import HomeProjectsSection from './HomeProjectsSection';
  import AboutSection from './AboutSection';
  import HowItWorksSection from './HowItWorksSection';
  import NewsSection from './NewsSection';
  import FaqSection from './FaqSection';
  import ProgramsSection from './ProgramsSection';

  export default function Home() {
    const telegramUrl = "https://t.me/your_telegram_username";
    return (
      <div className="relative min-h-screen bg-white">

        {/* زر المحادثة العائم باللون الأخضر المميز */}
        <button className="fixed bottom-6 left-6 z-50 w-12 h-12 bg-[#0d7a53] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform cursor-pointer">
          <MessageSquare className="w-6 h-6 fill-current" />
        </button>

        {/* 1. Hero Section بوضوح عالٍ وتدرج شفاف متطابق */}
        <section
          className="relative w-full h-[550px] sm:h-[620px] bg-cover bg-center bg-no-repeat overflow-hidden"
          style={{
            backgroundImage: `url('https://alweleedphilanthopies.com/storage/hero/ECTiEWhTG4I3WWlPvcX20ylG0SIKFQngoOk5dqOe.jpg')`
          }}
        >

          {/* طبقة التدرج الخضراء الشفافة */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d7a53]/80 via-[#0d7a53]/70 to-[#0d7a53]/85 backdrop-contrast-105 flex flex-col items-center justify-center text-center text-white px-4">

            <div className="space-y-5 max-w-4xl mx-auto drop-shadow-md">

              {/* الشارة العليا الشفافة */}
              <div className="inline-block px-6 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-xs sm:text-sm font-semibold text-white border border-white/30 shadow-sm">
                مشاريع الوليد للإنسانية للمساعدات المحتاجين
              </div>

              {/* العنوان الرئيسي العريض */}
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-tight text-white drop-shadow-lg">
                مؤسسة الوليد للإنسانية
              </h1>

              {/* النص الفرعي */}
              <p className="text-lg sm:text-2xl font-light text-white/95 tracking-wide">
                نبني الأمل معاً لمستقبل مشرق
              </p>

              {/* نقطة المزاج التفاعلية فوق الأزرار */}
              <div className="w-1.5 h-6 mx-auto bg-white/60 rounded-full animate-bounce"></div>

              {/* الأزرار الرئيسية */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/ApplyPage"
                  className="w-full sm:w-auto px-9 py-3.5 bg-white text-[#0d7a53] font-extrabold rounded-full flex items-center justify-center gap-2 hover:bg-gray-50 transition-all shadow-xl hover:scale-105 active:scale-95"
                >
                  تقديم طلب
                  <ArrowLeft className="w-5 h-5" />
                </Link>
                <Link
                  to="/TrackOrder"
                  className="w-full sm:w-auto px-9 py-3.5 border-2 border-white/90 text-white font-extrabold rounded-full bg-black/10 backdrop-blur-sm hover:bg-white/20 transition-all shadow-lg hover:scale-105 active:scale-95"
                >
                  متابعة طلبك
                </Link>
              </div>

            <div className="pt-4">
              <a
                href={telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white text-xs sm:text-sm font-medium rounded-full border border-white/25 transition-all hover:scale-105"
              >
                <Send className="w-4 h-4 text-emerald-300" />
                <span>التواصل المباشر عبر التليجرام</span>
              </a>
            </div>

            </div>

          </div>
        </section>

        {/* 2. باقي أجزاء الصفحة */}
        <HomeProjectsSection />
        <AboutSection />
        <HowItWorksSection />
        <NewsSection />
        <FaqSection />
        <ProgramsSection />

      </div>
    );
  }