import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, ChevronDown, X, SendHorizontal } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LiveChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isChatStarted, setIsChatStarted] = useState(false);
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const messagesEndRef = useRef(null);

  // التمرير التلقائي للأسفل
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen && isChatStarted) {
      scrollToBottom();
    }
  }, [messages, isOpen, isChatStarted]);

  // الانتقال من النموذج إلى المحادثة
  const handleStartChat = (e) => {
    e.preventDefault();
    if (!fullName.trim() || !phone.trim()) {
      alert('يرجى إدخال جميع البيانات للبدء');
      return;
    }

    const currentTime = new Date().toLocaleTimeString('ar-SA', { hour: '2-digit', minute: '2-digit' });
    setMessages([
      {
        id: 1,
        sender: 'support',
        text: `أهلاً بك يا ${fullName}! 👋 كيف يمكننا مساعدتك اليوم؟`,
        time: currentTime
      }
    ]);
    setIsChatStarted(true);
  };

  // إرسال رسالة في المحادثة
  const handleSendMessage = (e) => {
    e?.preventDefault();
    if (!inputText.trim()) return;

    const currentTime = new Date().toLocaleTimeString('ar-SA', { hour: '2-digit', minute: '2-digit' });

    const userMsg = {
      id: Date.now(),
      sender: 'user',
      text: inputText,
      time: currentTime
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText('');

    // رد تلقائي محاكاة
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: 'support',
          text: 'شكراً لتواصلك معنا! سيتواصل معك أحد ممثلي خدمة العملاء قريباً.',
          time: new Date().toLocaleTimeString('ar-SA', { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    }, 1000);
  };

  return (
    <div dir="rtl" className="fixed bottom-6 left-6 z-50 font-sans text-right">
      
      {/* نافذة المحادثة المثبتة باليسار */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* خلفية معتمة للجوال والتابلت */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/20 lg:hidden z-40 backdrop-blur-[1px]"
            />

            <motion.div
              key="chat-window"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 15, scale: 0.95 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="fixed inset-x-4 bottom-24 top-auto max-w-[360px] mx-auto lg:absolute lg:inset-auto lg:bottom-20 lg:left-0 lg:mx-0 w-full lg:w-[360px] z-50 origin-bottom-left"
            >
              <div className="w-full bg-white rounded-[26px] shadow-2xl overflow-hidden border border-gray-100 flex flex-col h-[520px]">
                
                {/* 1. الهيدر الأخضر الموحد */}
                <div className="bg-[#005a36] text-white px-5 py-4 flex items-center justify-between shadow-sm select-none shrink-0">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="w-8 h-8 rounded-full hover:bg-white/10 flex items-center justify-center text-white/90 hover:text-white transition-all"
                  >
                    <ChevronDown className="w-6 h-6" />
                  </button>

                  <div className="flex items-center gap-3">
                    <div className="text-right leading-tight">
                      <h4 className="text-base font-bold text-white tracking-tight">الدعم المباشر</h4>
                      <p className="text-[11px] text-emerald-100/80 font-normal mt-0.5">آخر ظهور: غير متاح</p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center border border-white/20 shadow-inner">
                      <MessageSquare className="w-5 h-5 fill-current text-white" />
                    </div>
                  </div>
                </div>

                {/* 2. محتوى النافذة (يتغير حسب حالة المحادثة) */}
                {!isChatStarted ? (
                  /* واجهة إدخال البيانات الأولى */
                  <div className="p-6 flex-1 flex flex-col items-center text-center justify-center bg-white">
                    <div className="w-20 h-20 rounded-full bg-[#e8f8f0] flex items-center justify-center mb-4 shadow-sm border border-[#b8ebd3]/40">
                      <MessageSquare className="w-10 h-10 text-[#008752] stroke-[1.5]" />
                    </div>

                    <h3 className="text-lg font-extrabold text-gray-900 mb-1.5 flex items-center gap-1.5">
                      مرحباً بك! <span className="text-xl">👋</span>
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-500 leading-relaxed mb-6 max-w-[260px] font-medium">
                      يرجى إدخال بياناتك لبدء المحادثة التفاعلية مع فريق الدعم الفني.
                    </p>

                    <form onSubmit={handleStartChat} className="w-full space-y-3.5">
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

                      <button
                        type="submit"
                        className="w-full bg-[#008752] hover:bg-[#007346] text-white font-bold py-3.5 rounded-2xl text-sm transition-all shadow-md hover:shadow-lg active:scale-98 mt-2"
                      >
                        بدء المحادثة
                      </button>
                    </form>
                  </div>
                ) : (
                  /* واجهة المحادثة المباشرة */
                  <>
                    <div className="flex-1 bg-[#ede8e1] p-4 overflow-y-auto space-y-3 relative flex flex-col">
                      <div className="self-center my-1">
                        <span className="bg-[#e1f3fb] text-gray-700 text-xs px-3.5 py-1 rounded-full shadow-sm font-medium">
                          الآن
                        </span>
                      </div>

                      {messages.map((msg) => (
                        <div
                          key={msg.id}
                          className={`flex flex-col max-w-[82%] ${
                            msg.sender === 'user' ? 'self-start items-start' : 'self-end items-end'
                          }`}
                        >
                          <div
                            className={`px-4 py-2.5 rounded-2xl text-sm leading-relaxed shadow-sm ${
                              msg.sender === 'user'
                                ? 'bg-[#005a36] text-white rounded-br-none'
                                : 'bg-white text-gray-800 rounded-bl-none border border-gray-100'
                            }`}
                          >
                            <p>{msg.text}</p>
                            <span
                              className={`text-[10px] block mt-1 text-left ${
                                msg.sender === 'user' ? 'text-emerald-200' : 'text-gray-400'
                              }`}
                            >
                              {msg.time}
                            </span>
                          </div>
                        </div>
                      ))}
                      <div ref={messagesEndRef} />
                    </div>

                    <form
                      onSubmit={handleSendMessage}
                      className="bg-[#f0f2f5] p-3 border-t border-gray-200 flex items-center gap-2 shrink-0"
                    >
                      <button
                        type="submit"
                        className="w-11 h-11 bg-[#005a36] hover:bg-[#00482b] text-white rounded-full flex items-center justify-center transition-all shadow-md active:scale-95 shrink-0"
                      >
                        <SendHorizontal className="w-5 h-5 rotate-180" />
                      </button>

                      <input
                        type="text"
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                        placeholder="اكتب رسالة..."
                        className="flex-1 bg-white border-none rounded-full px-5 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#005a36]/20 shadow-sm text-right"
                      />
                    </form>
                  </>
                )}

              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* الزر العائم الرئيسي */}
      <motion.button
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-50 w-16 h-16 bg-[#005a36] hover:bg-[#00482b] text-white rounded-full flex items-center justify-center shadow-2xl border-2 border-white/20 transition-colors"
        aria-label="زر الدعم المباشر"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close-btn"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-7 h-7 stroke-[2.5]" />
            </motion.div>
          ) : (
            <motion.div
              key="chat-btn"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageSquare className="w-7 h-7 fill-current" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

    </div>
  );
}