import React, { useState, useRef } from 'react';
import { Home, Send, Check, Loader2 } from 'lucide-react';
import { submitApplication } from '../../services/airtableService'; // استدعاء دالة الإرسال

export default function ApplyPage() {
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [isAgreed, setIsAgreed] = useState(false);
  const [loading, setLoading] = useState(false);
  
  // مرجع (Ref) للنزول التلقائي للسكرول
  const formSectionRef = useRef(null);

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

  // دالة اختيار البرنامج مع التمرير السلس
  const handleProgramSelect = (progId) => {
    setSelectedProgram(progId);
    // نستخدم setTimeout لضمان أن المكونات تم رسمها في الـ DOM قبل التمرير
    setTimeout(() => {
      if (formSectionRef.current) {
        formSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 150);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // تطبيق القيود المباشرة أثناء الكتابة
    if (name === 'nationalId' || name === 'phone') {
      // السماح بالأرقام فقط
      const onlyNums = value.replace(/[^0-9]/g, '');
      setFormData((prev) => ({ ...prev, [name]: onlyNums }));
      return;
    }

    if (name === 'accountNumber') {
      // إزالة المسافات وتحويل الحروف إلى Capital للآيبان
      const formattedAccount = value.replace(/\s/g, '').toUpperCase();
      setFormData((prev) => ({ ...prev, [name]: formattedAccount }));
      return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // دالة التعامل مع إرسال النموذج
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedProgram) {
      alert('يرجى اختيار نوع البرنامج');
      return;
    }

    if (!isAgreed) {
      alert('يرجى الموافقة على الشروط والأحكام أولاً');
      return;
    }

    setLoading(true);

    try {
      // الحصول على اسم البرنامج المحدد
      const programObj = programs.find((p) => p.id === selectedProgram);

      // تجهيز الحقول للارسال الى Airtable
      const payload = {
        programType: programObj ? programObj.name : '',
        fullName: formData.fullName,
        email: formData.email,
        nationalId: formData.nationalId,
        address: formData.address,
        nationality: formData.nationality,
        phoneNumber: formData.phone,
        accountNumber: formData.accountNumber,
        bankName: formData.bankName,
        message: formData.caseDetails,
        termsAccepted: isAgreed,
      };

      await submitApplication(payload);

      alert('تم إرسال طلبك بنجاح!');

      // إعادة تصفير البيانات بعد الإرسال
      setFormData({
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
      setSelectedProgram(null);
      setIsAgreed(false);
      window.scrollTo({ top: 0, behavior: 'smooth' }); // العودة للأعلى بعد الإرسال
    } catch (error) {
      console.error('Error submitting application:', error);
      alert('حدث خطأ أثناء إرسال الطلب: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div dir="rtl" className="min-h-screen bg-white py-12 px-4 sm:px-6 font-sans text-right text-white">
      <div className="max-w-4xl mx-auto space-y-8">

        {/* الترويسة */}
        <div className="text-center space-y-3 mb-10">
          <div className="inline-block bg-[#e8f8f0] text-[#008752] text-sm font-bold px-4 py-1.5 rounded-full border border-[#b8ebd3]">
            تقديم طلب جديد
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] tracking-tight">
            نموذج طلب المساعدة
          </h1>
          <p className="text-gray-500 text-sm sm:text-base font-medium">
            يرجى تعبئة جميع البيانات المطلوبة بدقة لضمان سرعة معالجة طلبك
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">

          {/* 1. بطاقة نوع الطلب */}
          <div className="bg-[#008752] rounded-[24px] p-7 sm:p-9 shadow-md">
            <h2 className="text-base sm:text-lg font-bold mb-6 text-white">نوع الطلب</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {programs.map((prog) => {
                const isSelected = selectedProgram === prog.id;
                return (
                  <button
                    key={prog.id}
                    type="button"
                    onClick={() => handleProgramSelect(prog.id)}
                    className={`relative flex flex-col items-center justify-center p-5 sm:p-6 rounded-2xl border transition-all text-center gap-3.5 min-h-[140px] cursor-pointer ${
                      isSelected
                        ? 'bg-[#099b5e] border-2 border-white shadow-lg scale-[1.02]' 
                        : 'bg-[#077a4a] hover:bg-[#088752] border-[#0ea063] text-white'
                    }`}
                  >
                    <div className="w-11 h-11 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
                      <Home className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-sm sm:text-base font-bold leading-snug">{prog.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 2. باقي أجزاء النموذج */}
          {selectedProgram && (
            <div ref={formSectionRef} className="space-y-8 animate-fadeIn scroll-mt-6">

              {/* معلومات مقدم الطلب */}
              <div className="bg-[#008752] rounded-[24px] p-7 sm:p-9 shadow-md space-y-6">
                <h2 className="text-base sm:text-lg font-bold border-b border-white/15 pb-3.5">معلومات مقدم الطلب</h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-white">الاسم الرباعي <span className="text-red-300">*</span></label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      minLength={10}
                      title="يرجى كتابة الاسم الرباعي بشكل صحيح"
                      placeholder="الاسم الرباعي"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full bg-[#077a4a] border border-[#0ea063] rounded-xl px-4 py-3 text-sm sm:text-base text-white placeholder-[#8ce2be]/70 focus:outline-none focus:bg-[#099b5e] focus:border-white transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-white">البريد الإلكتروني <span className="text-red-300">*</span></label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="example@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-[#077a4a] border border-[#0ea063] rounded-xl px-4 py-3 text-sm sm:text-base text-white placeholder-[#8ce2be]/70 focus:outline-none focus:bg-[#099b5e] focus:border-white transition-all text-left"
                      dir="ltr"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-white">رقم الهوية <span className="text-red-300">*</span></label>
                    <input
                      type="text"
                      name="nationalId"
                      required
                      maxLength={10}
                      minLength={10}
                      pattern="\d{10}"
                      title="رقم الهوية يجب أن يتكون من 10 أرقام"
                      placeholder="رقم الهوية الوطنية (10 أرقام)"
                      value={formData.nationalId}
                      onChange={handleChange}
                      className="w-full bg-[#077a4a] border border-[#0ea063] rounded-xl px-4 py-3 text-sm sm:text-base text-white placeholder-[#8ce2be]/70 focus:outline-none focus:bg-[#099b5e] focus:border-white transition-all text-left"
                      dir="ltr"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-white">العنوان <span className="text-red-300">*</span></label>
                    <input
                      type="text"
                      name="address"
                      required
                      placeholder="المدينة"
                      value={formData.address}
                      onChange={handleChange}
                      className="w-full bg-[#077a4a] border border-[#0ea063] rounded-xl px-4 py-3 text-sm sm:text-base text-white placeholder-[#8ce2be]/70 focus:outline-none focus:bg-[#099b5e] focus:border-white transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-white">الجنسية <span className="text-red-300">*</span></label>
                    <input
                      type="text"
                      name="nationality"
                      required
                      placeholder="الجنسية"
                      value={formData.nationality}
                      onChange={handleChange}
                      className="w-full bg-[#077a4a] border border-[#0ea063] rounded-xl px-4 py-3 text-sm sm:text-base text-white placeholder-[#8ce2be]/70 focus:outline-none focus:bg-[#099b5e] focus:border-white transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-white">رقم الجوال <span className="text-red-300">*</span></label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      maxLength={10}
                      pattern="^05\d{8}$"
                      title="رقم الجوال يجب أن يبدأ بـ 05 ويتكون من 10 أرقام"
                      placeholder="05XXXXXXXX"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-[#077a4a] border border-[#0ea063] rounded-xl px-4 py-3 text-sm sm:text-base text-white placeholder-[#8ce2be]/70 focus:outline-none focus:bg-[#099b5e] focus:border-white transition-all text-left"
                      dir="ltr"
                    />
                  </div>
                </div>
              </div>

              {/* البيانات البنكية */}
              <div className="bg-[#008752] rounded-[24px] p-7 sm:p-9 shadow-md space-y-6">
                <h2 className="text-base sm:text-lg font-bold border-b border-white/15 pb-3.5">البيانات البنكية</h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-white">رقم الحساب الآيبان (IBAN) <span className="text-red-300">*</span></label>
                    <input
                      type="text"
                      name="accountNumber"
                      required
                      maxLength={24}
                      pattern="^SA[A-Z0-9]{22}$"
                      title="يجب أن يبدأ بـ SA يليه 22 خانة (أرقام وحروف)"
                      placeholder="SA0000000000000000000000"
                      value={formData.accountNumber}
                      onChange={handleChange}
                      className="w-full bg-[#077a4a] border border-[#0ea063] rounded-xl px-4 py-3 text-sm sm:text-base text-white placeholder-[#8ce2be]/70 focus:outline-none focus:bg-[#099b5e] focus:border-white transition-all text-left"
                      dir="ltr"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-white">اسم البنك <span className="text-red-300">*</span></label>
                    <select
                      name="bankName"
                      required
                      value={formData.bankName}
                      onChange={handleChange}
                      className="w-full bg-[#077a4a] border border-[#0ea063] rounded-xl px-4 py-3 text-sm sm:text-base text-white focus:outline-none focus:bg-[#099b5e] focus:border-white transition-all cursor-pointer"
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
              <div className="bg-[#008752] rounded-[24px] p-7 sm:p-9 shadow-md space-y-5">
                <h2 className="text-base sm:text-lg font-bold border-b border-white/15 pb-3.5">تفاصيل الطلب</h2>
                
                <div className="space-y-2">
                  <label className="text-sm font-bold text-white">رسالة مختصرة عن الحالة <span className="text-red-300">*</span></label>
                  <textarea
                    name="caseDetails"
                    rows="4"
                    required
                    minLength={20}
                    title="يرجى توضيح الحالة بكلمات واضحة لا تقل عن 20 حرف"
                    placeholder="اشرح حالتك بشكل مختصر وواضح..."
                    value={formData.caseDetails}
                    onChange={handleChange}
                    className="w-full bg-[#077a4a] border border-[#0ea063] rounded-xl p-4 text-sm sm:text-base text-white placeholder-[#8ce2be]/70 focus:outline-none focus:bg-[#099b5e] focus:border-white transition-all resize-none"
                  ></textarea>
                </div>
              </div>

              {/* الإقرار والأزرار */}
              <div className="bg-[#008752] rounded-[24px] p-7 sm:p-9 shadow-md flex flex-col sm:flex-row items-center justify-between gap-6">
                <label className="flex items-center gap-3.5 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={isAgreed}
                    onChange={(e) => setIsAgreed(e.target.checked)}
                    className="hidden"
                  />
                  <div className={`w-5 h-5 sm:w-6 sm:h-6 rounded-md border border-white/50 flex items-center justify-center transition-colors shrink-0 ${isAgreed ? 'bg-white text-[#008752]' : 'bg-[#077a4a]'}`}>
                    {isAgreed && <Check className="w-4 h-4 stroke-[3]" />}
                  </div>
                  <span className="text-sm sm:text-base font-medium leading-relaxed">
                    أقر بأن جميع المعلومات المقدمة صحيحة ودقيقة، وأوافق على <span className="underline font-bold">الشروط والأحكام</span> و<span className="underline font-bold">سياسة الخصوصية</span>.
                  </span>
                </label>

                <button
                  type="submit"
                  disabled={loading}
                  className="bg-white hover:bg-emerald-50 text-[#008752] font-bold px-8 py-3.5 rounded-xl text-sm sm:text-base flex items-center gap-2.5 transition-all shadow-md shrink-0 w-full sm:w-auto justify-center disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
                >
                  {loading ? (
                    <>
                      <span>جاري الإرسال...</span>
                      <Loader2 className="w-5 h-5 animate-spin" />
                    </>
                  ) : (
                    <>
                      <span>ارسال الطلب</span>
                      <Send className="w-5 h-5 rotate-180" />
                    </>
                  )}
                </button>
              </div>

            </div>
          )}

        </form>
      </div>
    </div>
  );
}