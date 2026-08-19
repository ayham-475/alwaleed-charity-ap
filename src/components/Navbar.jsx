import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowLeft } from 'lucide-react';

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
              to="/status"
              className="px-4 sm:px-5 py-2 text-xs sm:text-sm font-bold text-[#0d7a53] bg-white border border-[#0d7a53] hover:bg-[#e6f4ef] rounded-full transition-all whitespace-nowrap"
            >
              تتبع الطلب
            </Link>
            <Link
              to="/apply"
              className="px-4 sm:px-5 py-2 text-xs sm:text-sm font-bold text-white bg-[#0d7a53] hover:bg-[#0a6343] rounded-full transition-all shadow-sm shadow-[#0d7a53]/20 whitespace-nowrap"
            >
              تقديم طلب
            </Link>
          </div>

          {/* 4. زر القائمة المنسدلة للهواتف والتابلت */}
          <div className="xl:hidden flex items-center gap-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-gray-700 hover:text-[#0d7a53] hover:bg-gray-100 focus:outline-none transition-colors"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* 5. الخلفية المظلمة عند فتح قائمة الهواتف */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-xs z-40 xl:hidden transition-opacity"
        />
      )}

      {/* 6. قائمة الهواتف والتابلت المنسدلة والانسيابية */}
      <div
        className={`xl:hidden fixed top-20 right-0 w-full sm:w-80 bg-white border-b sm:border-l border-gray-100 z-50 shadow-xl transition-all duration-300 ease-in-out transform ${
          isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'
        }`}
      >
        <div className="p-5 space-y-4 max-h-[calc(100vh-5rem)] overflow-y-auto">
          {/* روابط النافبار */}
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-bold transition-all ${
                    isActive
                      ? 'bg-[#e6f4ef] text-[#0d7a53]'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-[#0d7a53]'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && <ArrowLeft className="w-4 h-4 text-[#0d7a53]" />}
                </Link>
              );
            })}
          </div>

          {/* أزرار العمليات داخل قائمة الهاتف */}
          <div className="pt-4 border-t border-gray-100 flex flex-col gap-2.5">
            <Link
              to="/apply"
              onClick={() => setIsOpen(false)}
              className="w-full text-center py-2.5 text-sm font-bold text-white bg-[#0d7a53] hover:bg-[#0a6343] rounded-full shadow-md transition-all"
            >
              تقديم طلب
            </Link>
            <Link
              to="/status"
              onClick={() => setIsOpen(false)}
              className="w-full text-center py-2.5 text-sm font-bold text-[#0d7a53] bg-white border border-[#0d7a53] hover:bg-[#e6f4ef] rounded-full transition-all"
            >
              تتبع الطلب
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}