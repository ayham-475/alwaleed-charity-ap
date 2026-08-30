import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'الرئيسية', path: '/' },
    { name: 'عن المؤسسة', path: '/AboutUs' },
    { name: 'أهدافنا', path: '/ProjectGoals' },
    { name: 'مشاريعنا', path: '/Projects' },
    { name: 'المستفيدين', path: '/Beneficiaries' },
    { name: 'البرامج', path: '/Programs' },
    { name: 'أخبارنا', path: '/News' },
    { name: 'الطلبات', path: '/Admin' },
  ];

  return (
    <header dir="rtl" className="w-full bg-white border-b border-gray-100 sticky top-0 z-50 font-sans">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* 1. الجانب الأيمن: الشعار والنص */}
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <div className="w-11 h-11 sm:w-12 sm:h-12 bg-[#0d7a53] rounded-full flex items-center justify-center p-1 shadow-sm shrink-0">
              <div className="w-full h-full rounded-full border border-white/30 flex items-center justify-center text-white font-extrabold text-xs sm:text-sm tracking-tight">
                مؤسسة
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-base sm:text-lg font-black text-gray-900 leading-tight">
                مؤسسة الوليد للإنسانية
              </span>
              <span className="text-[10px] sm:text-[11px] text-[#0d7a53] font-bold tracking-wider -mt-0.5">
                للإنسانية
              </span>
            </div>
          </Link>

          {/* 2. الوسط: القائمة للشاشات الكبيرة (Desktop Menu) */}
          <nav className="hidden xl:flex items-center gap-1.5 lg:gap-3">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-xs lg:text-sm font-semibold transition-all px-3 py-2 rounded-full whitespace-nowrap ${
                    isActive
                      ? 'bg-[#e6f4ef] text-[#0d7a53] font-bold shadow-sm'
                      : 'text-gray-600 hover:text-[#0d7a53] hover:bg-gray-50'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* 3. الجانب الأيسر: الأزرار للشاشات المتوسطة والكبيرة */}
          <div className="hidden md:flex items-center gap-2 sm:gap-3 shrink-0">
            <Link
              to="/TrackOrder"
              className="px-4 sm:px-5 py-2 text-xs sm:text-sm font-bold text-[#0d7a53] bg-white border border-[#0d7a53] hover:bg-[#e6f4ef] rounded-full transition-all whitespace-nowrap"
            >
              تتبع الطلب
            </Link>
            <Link
              to="/ApplyPage"
              className="px-4 sm:px-5 py-2 text-xs sm:text-sm font-bold text-white bg-[#0d7a53] hover:bg-[#0a6343] rounded-full transition-all shadow-sm shadow-[#0d7a53]/20 whitespace-nowrap"
            >
              تقديم طلب
            </Link>
          </div>

          {/* 4. زر فتح القائمة للهواتف والتابلت */}
          <div className="xl:hidden flex items-center gap-2">
            <button
              onClick={() => setIsOpen(true)}
              className="p-2 rounded-xl text-gray-700 hover:text-[#0d7a53] hover:bg-gray-100 focus:outline-none transition-colors"
              aria-label="Toggle Menu"
            >
              <Menu className="w-7 h-7" />
            </button>
          </div>

        </div>
      </div>

      {/* 5. القائمة المنسدلة المدمجة للهواتف والتابلت */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* خلفية معتمة ناعمة */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/25 backdrop-blur-[2px] z-50 xl:hidden"
            />

            {/* القائمة المنزلقة بارتفاع مدمج محدد */}
            <motion.div
              initial={{ y: '-100%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: '-100%', opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-0 inset-x-0 w-full bg-white z-[60] shadow-xl xl:hidden rounded-b-[24px] overflow-hidden max-h-[85vh] flex flex-col"
            >
              {/* هيدر القائمة: أيقونة المؤسسة في اليمين وزر الإغلاق في اليسار */}
              <div className="flex items-center justify-between px-5 py-3 border-b border-gray-100">
                
                {/* 1. أيقونة المؤسسة (تظهر أقصى اليمين) */}
                <div className="w-9 h-9 bg-[#0d7a53] rounded-xl flex items-center justify-center p-0.5 shadow-sm">
                  <div className="w-full h-full rounded-lg border border-white/30 flex items-center justify-center text-white font-extrabold text-[10px]">
                    مؤسسة
                  </div>
                </div>

                {/* 2. زر الإغلاق (يظهر أقصى اليسار) */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-9 h-9 rounded-xl bg-[#f2f8f5] flex items-center justify-center text-[#0d7a53] hover:bg-[#e6f4ef] transition-all"
                  aria-label="إغلاق القائمة"
                >
                  <X className="w-5 h-5 stroke-[2.5]" />
                </button>

              </div>

              {/* محتوى القائمة المدمج */}
              <div className="p-4 space-y-4 overflow-y-auto">
                <div className="flex flex-col space-y-1 text-right">
                  {navLinks.map((link) => {
                    const isActive = location.pathname === link.path;
                    return (
                      <Link
                        key={link.name}
                        to={link.path}
                        onClick={() => setIsOpen(false)}
                        className={`block py-2.5 px-3.5 rounded-xl text-sm transition-all ${
                          isActive
                            ? 'bg-[#e8f6f0] text-[#0d7a53] font-bold'
                            : 'text-gray-700 hover:text-[#0d7a53] font-semibold hover:bg-gray-50'
                        }`}
                      >
                        {link.name}
                      </Link>
                    );
                  })}
                </div>

                {/* الأزرار بنمط محاذي وأنيق */}
                <div className="pt-2 border-t border-gray-50 flex flex-col gap-2">
                  <Link
                    to="/ApplyPage"
                    onClick={() => setIsOpen(false)}
                    className="w-full text-center py-2.5 text-sm font-bold text-white bg-[#0d7a53] hover:bg-[#0a6343] rounded-xl shadow-sm transition-all"
                  >
                    تقديم طلب
                  </Link>
                  <Link
                    to="/TrackOrder"
                    onClick={() => setIsOpen(false)}
                    className="w-full text-center py-2.5 text-sm font-bold text-[#0d7a53] bg-white border border-[#0d7a53] hover:bg-[#e6f4ef] rounded-xl transition-all"
                  >
                    تتبع الطلب
                  </Link>
                 
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}