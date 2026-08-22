import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Loader2 } from 'lucide-react';

export default function BeneficiariesSection() {
  // الدفعة الافتراضية
  const [selectedBatch, setSelectedBatch] = useState('3');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  // حالة البرنامج المفتوح
  const [openProgram, setOpenProgram] = useState(null);
  
  // حالة التحميل (الرفرش) عند تبديل الدفعة
  const [isLoading, setIsLoading] = useState(false);

  const dropdownRef = useRef(null);

  // إغلاق المنسدلة عند النقر خارجها
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // قاعدة بيانات كاملة بأسماء وبيانات مختلفة كلياً لكل دفعة
  const beneficiariesData = {
    housing: {
      title: 'برنامج الإسكان',
      batches: {
        '3': [
          { id: 'SA-HS-9821', name: 'هاجر يحيى سليمان الشهري', city: 'أبها' },
          { id: 'SA-HS-4102', name: 'محمد علي عبدالرحمن عبدالله', city: 'الرياض' },
          { id: 'SA-HS-7734', name: 'خالد علي يحيى معشي', city: 'جدة' },
          { id: 'SA-HS-1190', name: 'عوده سلمان المضيبري الرشيدي', city: 'عنيزة' },
          { id: 'SA-HS-6623', name: 'نوره محمد تلاب القحطاني', city: 'الرياض' },
        ],
        '2': [
          { id: 'SA-HS-5541', name: 'عبدالله فهد سعد القحطاني', city: 'الدمام' },
          { id: 'SA-HS-8829', name: 'سارة عبدالعزيز التميمي', city: 'الخرج' },
          { id: 'SA-HS-3320', name: 'فيصل عمر إبراهيم الدوسري', city: 'الرياض' },
          { id: 'SA-HS-6119', name: 'ماجد إبراهيم السبيعي', city: 'رماح' },
        ],
        '1': [
          { id: 'SA-HS-1011', name: 'سليمان خالد العتيبي', city: 'مكة المكرمة' },
          { id: 'SA-HS-2044', name: 'منى صالح علي الزهراني', city: 'الباحة' },
          { id: 'SA-HS-7890', name: 'وليد منصور الشريف', city: 'ينبع' },
        ],
      },
    },
    cars: {
      title: 'برنامج السيارات',
      batches: {
        '3': [
          { id: 'SA-CR-3301', name: 'عبد الله صالح الشمري', city: 'حائل' },
          { id: 'SA-CR-8892', name: 'مريم خليفة المري', city: 'الأحساء' },
          { id: 'SA-CR-5510', name: 'يوسف أحمد الغامدي', city: 'الباحة' },
        ],
        '2': [
          { id: 'SA-CR-7721', name: 'سعود بدر الحربي', city: 'المدينة المنورة' },
          { id: 'SA-CR-1193', name: 'نورة خلف العنزي', city: 'تبوك' },
          { id: 'SA-CR-4409', name: 'إبراهيم خليل الصالحي', city: 'سكاكا' },
        ],
        '1': [
          { id: 'SA-CR-9002', name: 'فهد حسن المالكي', city: 'نجران' },
          { id: 'SA-CR-3415', name: 'ريم مبارك الشهراني', city: 'خميس مشيط' },
          { id: 'SA-CR-6781', name: 'بدر حمدان البلوي', city: 'الوجه' },
        ],
      },
    },
    financial: {
      title: 'برنامج مساعدة مالية',
      batches: {
        '3': [
          { id: 'SA-FN-9014', name: 'عمر خالد المطيري', city: 'بريدة' },
          { id: 'SA-FN-7231', name: 'فاطمة محمد العسيري', city: 'محايل عسير' },
          { id: 'SA-FN-4482', name: 'تركي ناصر الدوسري', city: 'وادي الدواسر' },
        ],
        '2': [
          { id: 'SA-FN-2291', name: 'ماجد سلطان الثبيتي', city: 'الطائف' },
          { id: 'SA-FN-6673', name: 'أمل إبراهيم الرشيد', city: 'حفر الباطن' },
          { id: 'SA-FN-1045', name: 'صالح محمد الهاجري', city: 'الجبيل' },
        ],
        '1': [
          { id: 'SA-FN-8812', name: 'حسن علي الحارثي', city: 'جازان' },
          { id: 'SA-FN-4501', name: 'هدى راشد الفراج', city: 'الزلفي' },
          { id: 'SA-FN-3390', name: 'ريان سامي الغامدي', city: 'بلجرشي' },
        ],
      },
    },
  };

  // دالة اختيار الدفعة: تحدث الخانة فوراً، وتبدأ إعادة التحميل لجلب البيانات
  const handleBatchSelect = (batch) => {
    setIsDropdownOpen(false);
    
    // إذا كانت نفس الدفعة، لا داعي لإعادة التحميل
    if (batch === selectedBatch) return;

    setSelectedBatch(batch); // تحديث الخانة فوراً
    setIsLoading(true);       // بدء إعادة التحميل
    setOpenProgram(null);     // إغلاق البرامج أثناء التحميل

    // محاكاة جلب البيانات من السيرفر للدفعة الجديدة
    setTimeout(() => {
      setIsLoading(false);    // انتهاء التحميل وعرض بيانات الدفعة المختارة
    }, 600);
  };

  // فتح وإغلاق البرنامج
  const toggleProgram = (key) => {
    setOpenProgram((prev) => (prev === key ? null : key));
  };

  return (
    <section dir="rtl" className="bg-[#f0f2f5] min-h-screen py-16 px-4 flex justify-center items-start font-sans">
      <div className="w-full max-w-3xl">
        
        {/* الكرت الأخضر الرئيسي */}
        <div className="bg-[#007a40] text-white rounded-2xl shadow-xl relative overflow-hidden">
          
          {/* القوس المنحني الفاتح في الخلفية */}
          <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[120%] h-[320px] bg-white/[0.07] rounded-t-[100%] pointer-events-none" />

          {/* الترويسة والمنسدلة */}
          <div className="pt-8 pb-6 px-8 text-center relative z-10">
            <h2 className="text-2xl sm:text-[28px] font-bold tracking-normal mb-5 text-white">
              لائحة المستفيدين
            </h2>

            {/* خانة اختيار الدفعة */}
            <div className="relative inline-block w-52 sm:w-56" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full bg-[#004f28] hover:bg-[#004523] text-white py-2 px-4 rounded-lg flex items-center justify-between transition-colors shadow-inner text-sm font-semibold border border-white/10"
              >
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                <span>الدفعة {selectedBatch}</span>
              </button>

              {/* عناصر القائمة المنسدلة */}
              {isDropdownOpen && (
                <div className="absolute top-full right-0 left-0 mt-1 bg-[#004724] border border-white/15 rounded-lg shadow-2xl z-30 overflow-hidden">
                  {['3', '2', '1'].map((batch) => {
                    const isCurrent = selectedBatch === batch;
                    return (
                      <button
                        key={batch}
                        type="button"
                        onClick={() => handleBatchSelect(batch)}
                        className={`w-full text-right px-4 py-2.5 text-sm font-semibold transition-colors flex items-center justify-between ${
                          isCurrent
                            ? 'bg-[#555555] text-white font-bold'
                            : 'text-white/90 hover:bg-white/10'
                        }`}
                      >
                        <span>الدفعة {batch}</span>
                        {isCurrent && <span className="text-[11px] bg-white/20 px-1.5 py-0.5 rounded">مفعلة</span>}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

          {/* خط فاصل أسفل الترويسة */}
          <div className="border-t border-white/15" />

          {/* محتوى البرامج أو شاشة الرفرش والتحميل */}
          <div className="relative z-10">
            {isLoading ? (
              // شاشة إعادة التحميل
              <div className="flex flex-col items-center justify-center py-14 space-y-3">
                <Loader2 className="w-8 h-8 text-white animate-spin" />
                <p className="text-white/80 text-sm font-medium">جاري جلب بيانات الدفعة {selectedBatch}...</p>
              </div>
            ) : (
              // قائمة البرامج بعد انتهاء التحميل
              <div className="divide-y divide-white/15">
                {Object.entries(beneficiariesData).map(([key, program]) => {
                  const isOpen = openProgram === key;
                  const list = program.batches[selectedBatch] || [];

                  return (
                    <div key={key}>
                      {/* صف البرنامج */}
                      <button
                        type="button"
                        onClick={() => toggleProgram(key)}
                        className="w-full flex items-center justify-between px-8 py-5 text-right hover:bg-white/[0.03] transition-colors"
                      >
                        <ChevronDown className={`w-5 h-5 text-white/90 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                        <span className="text-base sm:text-lg font-bold text-white">
                          {program.title}
                        </span>
                      </button>

                      {/* جدول المستفيدين الخاص بالدفعة المختارة */}
                      {isOpen && (
                        <div className="px-8 pb-6 pt-1">
                          <div className="overflow-x-auto bg-black/15 rounded-xl p-4 border border-white/10">
                            <table className="w-full text-right text-xs sm:text-sm">
                              <thead>
                                <tr className="border-b border-white/20 text-white/75 font-semibold">
                                  <th className="pb-3 px-2 text-right">المدينة</th>
                                  <th className="pb-3 px-2 text-center">الاسم</th>
                                  <th className="pb-3 px-2 text-left">رقم الطلب</th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-white/10">
                                {list.map((item) => (
                                  <tr key={item.id} className="hover:bg-white/5 transition-colors">
                                    <td className="py-3 px-2 text-right text-white/90">{item.city}</td>
                                    <td className="py-3 px-2 text-center font-bold text-white">{item.name}</td>
                                    <td className="py-3 px-2 text-left font-mono text-white/80">{item.id}</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}