import React, { useState } from 'react';
import { Share2, ChevronLeft, CheckCircle2, Link2, Copy, Check, X, Smartphone, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FeaturedNewsCard() {
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const newsData = {
    id: 1,
    badge: 'خبر مميز',
    date: '2026/06/27',
    publisher: 'مكتب الوليد بن طلال',
    publisherLogo: 'https://alweleedphilanthopies.com/storage/posts/IyBA3YsNBvGQ2xanK9DNzK2Mgv4LEfbtOLwegIJA.jpg',
    title: 'طريقة التواصل مع الأميرة ريم بنت الوليد بن طلال',
    description:
      'طريقة التواصل مع الأميرة ريم بنت الوليد بن طلال يبحث الكثير من الأشخاص عن طريقة التواصل مع الأميرة ريم بنت الوليد بن طلال، سواء للاستفسار عن المبادرات الإنسانية أو لمعرفة وسائل التواصل المتاحة، ولهذا قمنا بتوفير هذه الصفحة لتسهيل الوصول...',
    image: 'https://alweleedphilanthopies.com/storage/posts/tY073BB48sp7xQ4lL3JL7TaZsBfDZCj5rRZpCLMU.jpg',
  };

  // رابط وقيم المشاركة
  const shareUrl = typeof window !== 'undefined' ? `${window.location.origin}/NewsDetails/${newsData.id}` : `https://alweleedphilanthopies.com/NewsDetails/${newsData.id}`;
  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedTitle = encodeURIComponent(newsData.title);

  // دالة نسخ الرابط
  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // خيارات المنصات مع روابط التشغيل المباشرة
  const socialPlatforms = [
    {
      name: 'OneNote',
      subText: 'OneNote for Windows 10',
      icon: (
        <div className="w-10 h-10 rounded-lg bg-[#7719aa] flex items-center justify-center text-white font-bold text-lg shadow-sm">
          N
        </div>
      ),
      action: () => window.open(`https://onenote.com`, '_blank'),
    },
    {
      name: 'Phone Link',
      subText: 'Phone Link',
      icon: (
        <div className="w-10 h-10 rounded-lg bg-[#0078d4] flex items-center justify-center text-white shadow-sm">
          <Smartphone className="w-6 h-6" />
        </div>
      ),
      action: () => {
        if (navigator.share) {
          navigator.share({ title: newsData.title, url: shareUrl }).catch(() => {});
        } else {
          handleCopyLink();
        }
      },
    },
    {
      name: 'Facebook',
      subText: 'Facebook',
      icon: (
        <div className="w-10 h-10 rounded-lg bg-[#1877f2] flex items-center justify-center text-white shadow-sm">
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
        </div>
      ),
      action: () => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`, '_blank'),
    },
    {
      name: 'Twitter',
      subText: 'Twitter',
      icon: (
        <div className="w-10 h-10 rounded-lg bg-black flex items-center justify-center text-white shadow-sm">
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
        </div>
      ),
      action: () => window.open(`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`, '_blank'),
    },
    {
      name: 'WhatsApp',
      subText: 'WhatsApp',
      icon: (
        <div className="w-10 h-10 rounded-lg bg-[#25D366] flex items-center justify-center text-white shadow-sm">
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
          </svg>
        </div>
      ),
      action: () => window.open(`https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`, '_blank'),
    },
    {
      name: 'Gmail',
      subText: 'Gmail',
      icon: (
        <div className="w-10 h-10 rounded-lg bg-white border border-gray-200 flex items-center justify-center shadow-sm">
          <svg className="w-6 h-6" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
          </svg>
        </div>
      ),
      action: () => window.open(`mailto:?subject=${encodedTitle}&body=${encodedUrl}`, '_blank'),
    },
    {
      name: 'LinkedIn',
      subText: 'LinkedIn',
      icon: (
        <div className="w-10 h-10 rounded-lg bg-[#0A66C2] flex items-center justify-center text-white shadow-sm">
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.84a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z"/>
          </svg>
        </div>
      ),
      action: () => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`, '_blank'),
    },
  ];

  return (
    <section dir="rtl" className="bg-[#f8fafc] py-8 px-4 font-sans text-right relative">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-[24px] shadow-sm border border-gray-100 overflow-hidden grid grid-cols-1 md:grid-cols-12 min-h-[260px]">
          
          {/* الجانب الأيمن: الصورة والشارة */}
          <div className="md:col-span-5 relative h-52 md:h-auto bg-gray-100 overflow-hidden">
            <div className="absolute top-4 right-4 z-10 bg-[#008752] text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
              {newsData.badge}
            </div>
            <img
              src={newsData.image}
              alt={newsData.title}
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* الجانب الأيسر: المحتوى والنصوص */}
          <div className="md:col-span-7 p-6 sm:p-7 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs text-gray-400">
                <span>{newsData.date}</span>

                <div className="flex items-center gap-1.5">
                  <span className="font-bold text-gray-800">{newsData.publisher}</span>
                  <CheckCircle2 className="w-4 h-4 text-black fill-black text-white" />
                  <img
                    src={newsData.publisherLogo}
                    alt={newsData.publisher}
                    className="w-5 h-5 rounded-full object-cover border border-gray-200"
                  />
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[#008752] leading-snug">
                {newsData.title}
              </h3>

              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed line-clamp-3">
                {newsData.description}
              </p>
            </div>

            {/* الأزرار */}
            <div className="flex items-center gap-3 pt-2">
              <Link to={`/NewsDetails/${newsData.id}`}>
                <button className="bg-[#008752] hover:bg-[#006e42] text-white font-bold px-5 py-2 rounded-xl text-xs sm:text-sm flex items-center gap-2 transition-colors shadow-sm">
                  <span>اقرأ الخبر كاملاً</span>
                  <ChevronLeft className="w-4 h-4" />
                </button>
              </Link>

              {/* زر تفعيل شاشة المشاركة */}
              <button
                onClick={() => setIsShareOpen(true)}
                className="bg-gray-50 hover:bg-gray-100 text-gray-500 p-2.5 rounded-xl border border-gray-100 transition-colors cursor-pointer active:scale-95"
                title="مشاركة"
              >
                <Share2 className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>
      </div>

      {/* نافذة شاشة المشاركة المطابقة للصورة */}
      {isShareOpen && (
        <div dir="ltr" className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/30 backdrop-blur-sm animate-fadeIn">
          
          {/* الخلفية الشفافة للإغلاق عند النقر خارجاً */}
          <div className="absolute inset-0" onClick={() => setIsShareOpen(false)} />

          {/* الكارت الشفاف الفخم (Windows Acrylic Share Modal) */}
          <div className="relative w-full max-w-[340px] bg-white/85 backdrop-blur-2xl rounded-2xl shadow-2xl border border-white/60 overflow-hidden text-gray-800 z-10 flex flex-col">
            
            {/* الهيدر والإغلاق */}
            <div className="p-4 pb-2 flex items-center justify-between border-b border-gray-200/50">
              <span className="w-6" /> {/* موازن */}
              <h3 className="text-base font-semibold text-gray-900 tracking-tight">Share</h3>
              <button
                onClick={() => setIsShareOpen(false)}
                className="p-1 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-200/50 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* صندوق الرابط والنسخ */}
            <div className="p-4 border-b border-gray-200/50">
              <div className="bg-gray-100/80 border border-gray-200 rounded-xl p-2.5 flex items-center justify-between gap-2 shadow-inner">
                <div className="flex items-center gap-2 overflow-hidden text-left dir-ltr">
                  <Link2 className="w-5 h-5 text-gray-500 shrink-0" />
                  <div className="truncate">
                    <p className="text-xs font-semibold text-gray-800 truncate">alweleedphilanthopies.com</p>
                    <p className="text-[11px] text-gray-400 truncate">{shareUrl}</p>
                  </div>
                </div>

                <button
                  onClick={handleCopyLink}
                  className="p-2 bg-gray-300/60 hover:bg-gray-300 rounded-lg text-gray-700 transition-all shrink-0 active:scale-95"
                  title="Copy link"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* قسم جهازي (My Phone) */}
            <div className="p-4 border-b border-gray-200/50">
              <button
                onClick={() => socialPlatforms[1].action()}
                className="flex flex-col items-center gap-1.5 group cursor-pointer"
              >
                <div className="w-12 h-14 bg-gradient-to-b from-[#0091ff] to-[#0060df] rounded-lg flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
                  <Smartphone className="w-7 h-7" />
                </div>
                <span className="text-xs font-medium text-gray-700">My Phone</span>
              </button>
            </div>

            {/* شبكة المنصات والتطبيقات */}
            <div className="p-4 grid grid-cols-4 gap-y-5 gap-x-2 justify-items-center max-h-[220px] overflow-y-auto">
              {socialPlatforms.map((platform, idx) => (
                <button
                  key={idx}
                  onClick={platform.action}
                  className="flex flex-col items-center gap-1.5 w-full text-center group cursor-pointer"
                >
                  <div className="group-hover:scale-110 transition-transform">
                    {platform.icon}
                  </div>
                  <span className="text-[10px] font-medium text-gray-700 leading-tight line-clamp-2 max-w-[68px]">
                    {platform.subText}
                  </span>
                </button>
              ))}
            </div>

            {/* الفوتر - متجر التطبيقات */}
            <div className="p-3 bg-gray-50/80 border-t border-gray-200/50 flex items-center justify-center">
              <button
                onClick={() => window.open('https://apps.microsoft.com', '_blank')}
                className="flex items-center gap-2 text-xs text-[#0067b8] font-medium hover:underline cursor-pointer"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Get apps in Store</span>
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}