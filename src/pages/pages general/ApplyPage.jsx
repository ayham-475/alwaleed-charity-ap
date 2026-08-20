import React, { useState } from 'react';
import { Home, Send, Check } from 'lucide-react';

export default function ApplyPage() {
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [isAgreed, setIsAgreed] = useState(false);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    nationalId: '',
    address: '',
    nationality: '',
    phone: '',
    accountNumber: '',
    bankName: '',
    caseDetails: '',
  });

  const programs = [
    { id: 'housing', name: 'برنامج الإسكان' },
    { id: 'financial', name: 'برنامج الدعم المالي' },
    { id: 'transport', name: 'برنامج دعم وسائل النقل' },
    { id: 'investment', name: 'برنامج تمويل المشاريع ودعم الاستثمارات' },
  ];

  const saudiBanks = [
    'البنك الأهلي السعودي (SNB)',
    'مصرف الراجحي',
    'بنك الرياض',
    'البنك السعودي الأول (SAB)',
    'مصرف الإنماء',
    'البنك العربي الوطني (ANB)',
    'بنك البلاد',
    'البنك السعودي للاستثمار (SAIB)',
    'بنك الجزيرة',
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div dir="rtl" className="min-h-screen bg-white py-10 px-4 font-sans text-right text-white">
      {/* تم التكبير قليلاً من max-w-2xl إلى max-w-3xl */}
      <div className="max-w-3xl mx-auto space-y-6">

        {/* الترويسة */}
        <div className="text-center space-y-2 mb-8">
          <div className="inline-block bg-[#e8f8f0] text-[#008752] text-xs font-bold px-3.5 py-1 rounded-full border border-[#b8ebd3]">
            تقديم طلب جديد
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] tracking-tight">
            نموذج طلب المساعدة
          </h1>
          <p className="text-gray-400 text-xs sm:text-sm font-medium">
            يرجى تعبئة جميع البيانات المطلوبة بدقة لضمان سرعة معالجة طلبك
          </p>
        </div>

        <form onSubmit={(e) => e.preventDefault()} className="space-y-6">

          {/* 1. بطاقة نوع الطلب */}
          <div className="bg-[#008752] rounded-[20px] p-6 sm:p-7 shadow-sm">
            <h2 className="text-sm sm:text-base font-bold mb-5 text-white">نوع الطلب</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {programs.map((prog) => {
                const isSelected = selectedProgram === prog.id;
                return (
                  <button
                    key={prog.id}
                    type="button"
                    onClick={() => setSelectedProgram(prog.id)}
                    className={`relative flex flex-col items-center justify-center p-4 sm:p-5 rounded-xl border transition-all text-center gap-3 min-h-[120px] ${
                      isSelected
                        ? 'bg-[#099b5e] border-2 border-white shadow-md scale-[1.02]' 
                        : 'bg-[#077a4a] hover:bg-[#088752] border-[#0ea063] text-white'
                    }`}
                  >
                    <div className="w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
                      <Home className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-xs sm:text-sm font-bold leading-snug">{prog.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 2. باقي أجزاء النموذج */}
          {selectedProgram && (
            <div className="space-y-6 animate-fadeIn">

              {/* معلومات مقدم الطلب */}
              <div className="bg-[#008752] rounded-[20px] p-6 sm:p-7 shadow-sm space-y-5">
                <h2 className="text-sm sm:text-base font-bold border-b border-white/15 pb-3">معلومات مقدم الطلب</h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-white">الاسم الرباعي <span className="text-red-300">*</span></label>
                    <input
                      type="text"
                      name="fullName"
                      placeholder="الاسم الرباعي"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full bg-[#077a4a] border border-[#0ea063] rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-[#8ce2be]/70 focus:outline-none focus:bg-[#099b5e] focus:border-white transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-white">البريد الإلكتروني <span className="text-red-300">*</span></label>
                    <input
                      type="email"
                      name="email"
                      placeholder="example@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-[#077a4a] border border-[#0ea063] rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-[#8ce2be]/70 focus:outline-none focus:bg-[#099b5e] focus:border-white transition-all text-left"
                      dir="ltr"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-white">رقم الهوية <span className="text-red-300">*</span></label>
                    <input
                      type="text"
                      name="nationalId"
                      placeholder="رقم الهوية الوطنية"
                      value={formData.nationalId}
                      onChange={handleChange}
                      className="w-full bg-[#077a4a] border border-[#0ea063] rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-[#8ce2be]/70 focus:outline-none focus:bg-[#099b5e] focus:border-white transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-white">العنوان <span className="text-red-300">*</span></label>
                    <input
                      type="text"
                      name="address"
                      placeholder="المدينة"
                      value={formData.address}
                      onChange={handleChange}
                      className="w-full bg-[#077a4a] border border-[#0ea063] rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-[#8ce2be]/70 focus:outline-none focus:bg-[#099b5e] focus:border-white transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-white">الجنسية <span className="text-red-300">*</span></label>
                    <input
                      type="text"
                      name="nationality"
                      placeholder="الجنسية"
                      value={formData.nationality}
                      onChange={handleChange}
                      className="w-full bg-[#077a4a] border border-[#0ea063] rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-[#8ce2be]/70 focus:outline-none focus:bg-[#099b5e] focus:border-white transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-white">رقم الجوال <span className="text-red-300">*</span></label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="05xxxxxxx"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-[#077a4a] border border-[#0ea063] rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-[#8ce2be]/70 focus:outline-none focus:bg-[#099b5e] focus:border-white transition-all text-left"
                      dir="ltr"
                    />
                  </div>
                </div>
              </div>

              {/* البيانات البنكية */}
              <div className="bg-[#008752] rounded-[20px] p-6 sm:p-7 shadow-sm space-y-5">
                <h2 className="text-sm sm:text-base font-bold border-b border-white/15 pb-3">البيانات البنكية</h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-white">رقم الحساب <span className="text-red-300">*</span></label>
                    <input
                      type="text"
                      name="accountNumber"
                      placeholder="SA00 0000 0000 0000 0000 0000"
                      value={formData.accountNumber}
                      onChange={handleChange}
                      className="w-full bg-[#077a4a] border border-[#0ea063] rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-[#8ce2be]/70 focus:outline-none focus:bg-[#099b5e] focus:border-white transition-all text-left"
                      dir="ltr"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-white">اسم البنك <span className="text-red-300">*</span></label>
                    <select
                      name="bankName"
                      value={formData.bankName}
                      onChange={handleChange}
                      className="w-full bg-[#077a4a] border border-[#0ea063] rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:bg-[#099b5e] focus:border-white transition-all cursor-pointer"
                    >
                      <option value="" disabled className="text-gray-800 bg-white">اختر البنك</option>
                      {saudiBanks.map((bank) => (
                        <option key={bank} value={bank} className="text-gray-800 bg-white">
                          {bank}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* تفاصيل الطلب */}
              <div className="bg-[#008752] rounded-[20px] p-6 sm:p-7 shadow-sm space-y-4">
                <h2 className="text-sm sm:text-base font-bold border-b border-white/15 pb-3">تفاصيل الطلب</h2>
                
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-white">رسالة مختصرة عن الحالة <span className="text-red-300">*</span></label>
                  <textarea
                    name="caseDetails"
                    rows="3"
                    placeholder="اشرح حالتك بشكل مختصر وواضح..."
                    value={formData.caseDetails}
                    onChange={handleChange}
                    className="w-full bg-[#077a4a] border border-[#0ea063] rounded-lg p-3.5 text-xs sm:text-sm text-white placeholder-[#8ce2be]/70 focus:outline-none focus:bg-[#099b5e] focus:border-white transition-all resize-none"
                  ></textarea>
                </div>
              </div>

              {/* الإقرار والأزرار */}
              <div className="bg-[#008752] rounded-[20px] p-6 sm:p-7 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
                <label className="flex items-center gap-3 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={isAgreed}
                    onChange={(e) => setIsAgreed(e.target.checked)}
                    className="hidden"
                  />
                  <div className={`w-4 h-4 sm:w-5 sm:h-5 rounded border border-white/40 flex items-center justify-center transition-colors ${isAgreed ? 'bg-white text-[#008752]' : 'bg-[#077a4a]'}`}>
                    {isAgreed && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                  </div>
                  <span className="text-xs sm:text-sm font-medium leading-relaxed">
                    أقر بأن جميع المعلومات المقدمة صحيحة ودقيقة، وأوافق على <span className="underline font-bold">الشروط والأحكام</span> و<span className="underline font-bold">سياسة الخصوصية</span>.
                  </span>
                </label>

                <button
                  type="button"
                  className="bg-white hover:bg-emerald-50 text-[#008752] font-bold px-7 py-2.5 rounded-xl text-xs sm:text-sm flex items-center gap-2 transition-all shadow-sm shrink-0 w-full sm:w-auto justify-center"
                >
                  <span>ارسال الطلب</span>
                  <Send className="w-4 h-4 rotate-180" />
                </button>
              </div>

            </div>
          )}

        </form>
      </div>
    </div>
  );
}