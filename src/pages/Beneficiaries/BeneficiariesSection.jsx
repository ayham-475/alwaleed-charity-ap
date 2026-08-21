import React, { useState } from 'react';
import { ChevronDown, Loader2 } from 'lucide-react';

export default function BeneficiariesSection() {
  const [selectedBatch, setSelectedBatch] = useState('3');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  // الوضع الافتراضي مغلق بالكامل (null)
  const [openProgram, setOpenProgram] = useState(null);
  
  // حالة محاكاة "الرفرش" وجلب البيانات
  const [isLoading, setIsLoading] = useState(false);

  // قاعدة بيانات كاملة لكل البرامج والدفعات (1، 2، 3)
  const beneficiariesData = {
    housing: {
      title: 'برنامج الإسكان',
      batches: {
        '3': [
          { id: 'kgdfhqeja', name: 'هاجر يحيى سليمان الشهري', city: 'ابها' },
          { id: 'pctfbhmjk', name: 'محمد علي عبدالرحمن عبدالله', city: 'الرياض' },
          { id: 'h5rv8gmrm', name: 'خالد علي يحيى معشي', city: 'جده' },
          { id: 'tmgywp4ro', name: 'عوده سلمان بن عوده المضيبري الرشيدي', city: 'عنيزه' },
          { id: 'wptklmhsd', name: 'نوره محمد تلاب', city: 'الرياض' },
        ],
        '2': [
          { id: 'hs712kqlp', name: 'عبدالله فهد سعد القحطاني', city: 'الدمام' },
          { id: 'm9021jsha', name: 'سارة عبدالعزيز آل سعود', city: 'الرياض' },
          { id: 'pl8921mzs', name: 'فيصل عمر إبراهيم الدوسري', city: 'الخرج' },
        ],
        '1': [
          { id: 'b7612mzaq', name: 'سليمان خالد العتيبي', city: 'مكة المكرمة' },
          { id: 'q10928374', name: 'منى صالح علي الزهراني', city: 'الطائف' },
        ],
      },
    },
    cars: {
      title: 'برنامج السيارات',
      batches: {
        '3': [
          { id: 'car99281a', name: 'عبد الله صالح الشمري', city: 'حائل' },
          { id: 'car88123b', name: 'مريم خليفة المري', city: 'الأحساء' },
          { id: 'car11234c', name: 'يوسف أحمد الغامدي', city: 'الباحة' },
        ],
        '2': [
          { id: 'car55432x', name: 'سعود بدر المطيري', city: 'القصيم' },
          { id: 'car66789y', name: 'نورة خلف العنزي', city: 'تبوك' },
        ],
        '1': [
          { id: 'car00192z', name: 'فهد حسن المالكي', city: 'نجران' },
        ],
      },
    },
    financial: {
      title: 'برنامج مساعدة مالية',
      batches: {
        '3': [
          { id: 'fin77361x', name: 'عمر خالد المطيري', city: 'القصيم' },
          { id: 'fin88291y', name: 'فاطمة محمد العسيري', city: 'محايل عسير' },
        ],
        '2': [
          { id: 'fin33211a', name: 'ماجد سلطان الثبيتي', city: 'جدة' },
          { id: 'fin44901b', name: 'أمل إبراهيم الرشيد', city: 'حفر الباطن' },
        ],
        '1': [
          { id: 'fin11092k', name: 'حسن علي الحارثي', city: 'جازان' },
        ],
      },
    },
  };

  // دالة تغيير الدفعة (تقوم بعمل الرفرش وتغلق البرامج)
  const handleBatchChange = (batch) => {
    setIsDropdownOpen(false);
    
    // إذا اختار نفس الدفعة المفتوحة حالياً، لا تفعل شيء
    if (batch === selectedBatch) return;

    setIsLoading(true); // بدء الرفرش
    setOpenProgram(null); // إغلاق جميع البرامج فوراً كما طلبت

    // محاكاة تأخير الشبكة لجلب البيانات (ثانية واحدة)
    setTimeout(() => {
      setSelectedBatch(batch);
      setIsLoading(false); // إنهاء الرفرش وعرض البيانات
    }, 800); 
  };

  const toggleProgram = (programKey) => {
    setOpenProgram(openProgram === programKey ? null : programKey);
  };

  return (
    <section dir="rtl" className="bg-[#f4f6f8] py-16 px-4 font-sans text-right">
      <div className="max-w-4xl mx-auto">
        
        {/* الكارت الأخضر الرئيسي */}
        <div className="bg-[#008752] text-white rounded-[24px] p-6 sm:p-10 shadow-xl relative overflow-hidden min-h-[400px]">
          
          {/* الخلفيات المنحنية الفاتحة الظاهرة بالصورة */}
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-xl pointer-events-none" />
          <div className="absolute top-1/2 -left-10 w-80 h-80 bg-white/5 rounded-full pointer-events-none" />

          {/* ترويسة المكون والمنسدلة */}
          <div className="text-center space-y-6 relative z-10 mb-8">
            <h2 className="text-2xl sm:text-3xl font-black tracking-wide">
              لائحة المستفيدين
            </h2>

            {/* القائمة المنسدلة لاختيار الدفعة */}
            <div className="relative inline-block w-48 sm:w-56">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full bg-[#006e42] border border-white/40 hover:border-white text-white font-bold py-2 px-4 rounded-lg flex items-center justify-between transition-all"
              >
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                <span>الدفعة {selectedBatch}</span>
              </button>

              {/* عناصر الدفعات وتغيير اللون عند الاختيار */}
              {isDropdownOpen && (
                <div className="absolute top-full right-0 left-0 mt-1 bg-[#006e42] border border-white/30 rounded-lg shadow-xl z-20 overflow-hidden">
                  {['3', '2', '1'].map((batch) => {
                    const isSelected = selectedBatch === batch;
                    return (
                      <button
                        key={batch}
                        onClick={() => handleBatchChange(batch)}
                        className={`w-full text-right px-4 py-2.5 text-sm font-semibold transition-colors duration-200 ${
                          isSelected
                            ? 'bg-[#666666] text-white font-bold'
                            : 'text-white/90 hover:bg-white/10'
                        }`}
                      >
                        الدفعة {batch}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

          {/* عرض حالة التحميل أو قائمة البرامج */}
          <div className="relative z-10">
            {isLoading ? (
              // شاشة التحميل (الرفرش)
              <div className="flex flex-col items-center justify-center py-12 space-y-4 animate-fadeIn">
                <Loader2 className="w-10 h-10 text-white animate-spin" />
                <p className="text-white/80 font-semibold">جاري جلب بيانات الدفعة {selectedBatch}...</p>
              </div>
            ) : (
              // قائمة البرامج (تظهر مغلقة بالكامل بعد التحميل)
              <div className="space-y-2 divide-y divide-white/20 animate-fadeIn">
                {Object.entries(beneficiariesData).map(([key, program]) => {
                  const isOpen = openProgram === key;
                  const list = program.batches[selectedBatch] || [];

                  // إخفاء البرنامج إذا لم تكن هناك بيانات للدفعة المحددة (اختياري)
                  if (list.length === 0) return null;

                  return (
                    <div key={key} className="pt-4 first:pt-0">
                      {/* شريط عنوان البرنامج */}
                      <button
                        onClick={() => toggleProgram(key)}
                        className="w-full flex items-center justify-between py-3 px-2 text-right hover:opacity-90 transition-opacity"
                      >
                        <span className="text-lg sm:text-xl font-bold text-right">{program.title}</span>
                        <ChevronDown className={`w-5 h-5 text-white transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                      </button>

                      {/* جدول البيانات الداخلي */}
                      {isOpen && (
                        <div className="mt-4 bg-white/5 rounded-xl p-4 sm:p-6 transition-all duration-300 animate-fadeIn">
                          <div className="overflow-x-auto">
                            <table className="w-full text-right text-xs sm:text-sm">
                              <thead>
                                <tr className="border-b border-white/20 text-white/80 font-bold">
                                  <th className="pb-3 px-2 text-right">المدينة</th>
                                  <th className="pb-3 px-2 text-center">الاسم</th>
                                  <th className="pb-3 px-2 text-left">رقم الطلب</th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-white/10">
                                {list.map((item, index) => (
                                  <tr key={index} className="hover:bg-white/5 transition-colors">
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