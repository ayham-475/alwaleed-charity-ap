import React, { useState } from 'react';
import { MessageSquare, ChevronDown, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LiveChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');

  const handleStartChat = (e) => {
    e.preventDefault();
    if (!fullName || !phone) {
      alert('يرجى إدخال جميع البيانات للبدء');
      return;
    }
    console.log('Chat Started:', { fullName, phone });
  };

  return (
    /* حاوية مثبتة تماماً أسفل يسار الشاشة */
    <div dir="rtl" className="fixed bottom-6 left-6 z-50 font-sans text-right">
      
      {/* 1. نافذة المحادثة (تتمركز في منتصف الشاشة للهاتف والتابلت وتظهر فوق الزر للشاشات الكبيرة) */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* خلفية معتمة خفيفة تظهر فقط في الجوال والتابلت لتثبيت التركيز بالمنتصف */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/20 lg:hidden z-40 backdrop-blur-[1px]"
            />

            <motion.div
              key="chat-window"
              initial={{ opacity: 0, y: 20, scale: 0.92, rotate: -1 }}
              animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, y: 15, scale: 0.94, rotate: -1 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="fixed inset-x-4 bottom-24 top-auto max-w-[360px] mx-auto lg:absolute lg:inset-auto lg:bottom-20 lg:left-0 lg:mx-0 z-50 origin-bottom lg:origin-bottom-left"
            >
              {/* كارت المحادثة الرئيسي الفخم */}
              <div className="w-full bg-white rounded-[28px] shadow-[0_20px_50px_rgba(0,0,0,0.15)] overflow-hidden border border-gray-100 backdrop-blur-md">
                
                {/* الهيدر الأخضر الفخم */}
                <div className="bg-gradient-to-r from-[#005a36] to-[#008752] text-white p-5 flex items-center justify-between border-b border-white/10">
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center border border-white/20 shadow-inner">
                      <MessageSquare className="w-5 h-5 fill-current text-white" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold leading-tight tracking-wide">الدعم المباشر</h4>
                      <p className="text-xs text-emerald-100/80 font-medium mt-0.5">آخر ظهور: غير متاح</p>
                    </div>
                  </div>

                  <button
                    onClick={() => setIsOpen(false)}
                    className="w-8 h-8 rounded-full hover:bg-white/10 flex items-center justify-center text-white/80 hover:text-white transition-all"
                  >
                    <ChevronDown className="w-6 h-6" />
                  </button>
                </div>

                {/* محتوى النموذج الداخلي */}
                <div className="p-7 flex flex-col items-center text-center">
                  
                  {/* أيكونة الترحيب */}
                  <div className="w-20 h-20 rounded-full bg-[#e8f8f0] flex items-center justify-center mb-4 shadow-sm border border-[#b8ebd3]/40">
                    <MessageSquare className="w-10 h-10 text-[#008752] stroke-[1.5]" />
                  </div>

                  {/* النص الترحيبي */}
                  <h3 className="text-lg font-extrabold text-gray-900 mb-1.5 flex items-center gap-1.5">
                    مرحباً بك! <span className="text-xl">👋</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed mb-6 max-w-[260px] font-medium">
                    يرجى إدخال بياناتك لبدء المحادثة التفاعلية مع فريق الدعم الفني.
                  </p>

                  {/* النموذج */}
                  <form onSubmit={handleStartChat} className="w-full space-y-4">
                    <div>
                      <input
                        type="text"
                        placeholder="الاسم الكريم"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full bg-[#f8faf9] border border-gray-200/80 rounded-2xl px-4 py-3.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#008752] focus:bg-white focus:ring-4 focus:ring-[#008752]/10 transition-all text-right shadow-inner"
                      />
                    </div>

                    <div>
                      <input
                        type="tel"
                        placeholder="رقم الجوال"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-[#f8faf9] border border-gray-200/80 rounded-2xl px-4 py-3.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#008752] focus:bg-white focus:ring-4 focus:ring-[#008752]/10 transition-all text-right shadow-inner"
                        dir="rtl"
                      />
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.015 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="w-full bg-[#008752] hover:bg-[#007346] text-white font-bold py-3.5 rounded-2xl text-sm transition-all shadow-md hover:shadow-lg mt-2"
                    >
                      بدء المحادثة
                    </motion.button>
                  </form>

                </div>

              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* 2. الزر العائم الموحد والثابت تماماً في نقطته */}
      <motion.button
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-50 w-16 h-16 bg-[#008752] hover:bg-[#007346] text-white rounded-full flex items-center justify-center shadow-xl border-2 border-white/20 transition-colors"
        aria-label="زر الدعم المباشر"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close-btn"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
            >
              <X className="w-7 h-7 stroke-[2.5]" />
            </motion.div>
          ) : (
            <motion.div
              key="chat-btn"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
            >
              <MessageSquare className="w-7 h-7 fill-current" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

    </div>
  );
}