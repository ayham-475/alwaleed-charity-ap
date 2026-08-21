import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Loader2, CheckCircle2, Clock, XCircle, FileText, ArrowRight } from 'lucide-react';

// استدعاء المتغيرات من ملف الـ .env
const AIRTABLE_BASE_ID = import.meta.env.VITE_AIRTABLE_BASE_ID;
// قم بالتغيير هنا إلى VITE_AIRTABLE_TOKEN
const AIRTABLE_PAT = import.meta.env.VITE_AIRTABLE_TOKEN || import.meta.env.VITE_AIRTABLE_PAT;
const AIRTABLE_TABLE_NAME = import.meta.env.VITE_AIRTABLE_TABLE_NAME || 'Applications';
export default function TrackOrder() {
  const [national_id, setnational_id] = useState('');
  const [orderNumber, setOrderNumber] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [result, setResult] = useState(null);

  const navigate = useNavigate();

  const handleSearch = async (e) => {
    e.preventDefault();
    
    if (!national_id.trim() || !orderNumber.trim()) {
      setError('يرجى إدخال رقم الهوية ورقم الطلب معاً.');
      return;
    }

    if (!AIRTABLE_BASE_ID || !AIRTABLE_PAT) {
      setError('إعدادات الاتصال بقاعدة البيانات غير مكتملة.');
      return;
    }

    setLoading(true);
    setError('');
    setResult(null);

    try {
      const cleannational_id = national_id.trim();
      const cleanOrderNum = orderNumber.trim().replace('#', '');
      
      // صيغة البحث في Airtable (تأكد من مطابقة أسماء الحقول داخل Airtable)
      const filterFormula = `AND({national_id} = '${cleannational_id}', OR({id} = '${cleanOrderNum}', RECORD_ID() = '${cleanOrderNum}'))`; 
      const url = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${encodeURIComponent(AIRTABLE_TABLE_NAME)}?filterByFormula=${encodeURIComponent(filterFormula)}`;

      const response = await fetch(url, {
        headers: {
          Authorization: `Bearer ${AIRTABLE_PAT}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        const errData = await response.json().catch(() => ({}));
        console.error('Airtable API Error:', errData);
        throw new Error('حدث خطأ في الاستجابة من قاعدة البيانات.');
      }

      const data = await response.json();

      if (data.records && data.records.length > 0) {
        const record = data.records[0];
        setResult({
          id: record.fields.id || record.id,
          fullName: record.fields.fullName || 'غير مدون',
          program: record.fields.program || 'عام',
          status: record.fields.status || 'قيد المراجعة',
          date: record.fields.date || new Date(record.createdTime).toLocaleDateString('ar-SA'),
          notes: record.fields.notes || ''
        });
      } else {
        setError('لم يتم العثور على طلب مطابق للبيانات المدخلة. تحقق من صحة الأرقام.');
      }
    } catch (err) {
      console.error('Error fetching order:', err);
      setError('تعذر الاستعلام عن الطلب حالياً، يرجى المحاولة لاحقاً.');
    } finally {
      setLoading(false);
    }
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'approved':
      case 'مقبول':
      case 'تم القبول':
        return (
          <div className="flex items-center gap-2 text-emerald-600 bg-emerald-50 px-4 py-2 rounded-xl font-bold">
            <CheckCircle2 className="w-5 h-5" />
            <span>تم قبول الطلب</span>
          </div>
        );
      case 'rejected':
      case 'مرفوض':
      case 'تم الرفض':
        return (
          <div className="flex items-center gap-2 text-red-600 bg-red-50 px-4 py-2 rounded-xl font-bold">
            <XCircle className="w-5 h-5" />
            <span>تم رفض الطلب</span>
          </div>
        );
      default:
        return (
          <div className="flex items-center gap-2 text-amber-600 bg-amber-50 px-4 py-2 rounded-xl font-bold">
            <Clock className="w-5 h-5 animate-pulse" />
            <span>طلبك قيد الدراسة والمراجعة</span>
          </div>
        );
    }
  };

  return (
    <div dir="rtl" className="min-h-screen bg-[#f8f9fa] font-sans text-right">
      
      {/* 1. البانر العلوي */}
      <div className="bg-[#8f9f93] py-16 px-4 text-center text-[#004d30]">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-wide mb-2">
          #آمين_لحياة_أفضل
        </h1>
        <p className="text-sm sm:text-base font-semibold text-[#003d26]">
          بلا حدود.. نؤمن بالإنسانية
        </p>
      </div>

      {/* 2. الحاوية الرئيسية */}
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col space-y-12 sm:space-y-16">
        
        {/* قسم رسالة الوليد */}
        <div className="order-1 sm:order-2 flex flex-col items-start w-full pt-4">
          <div className="w-full sm:w-[540px] text-right space-y-3">
            <h3 className="text-2xl font-bold text-[#008752]">
              رسالة من الوليد
            </h3>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-normal">
              عرفاناً بالجميل وإبتغاء وجه الله تعالى والدار الآخرة، يسعدني الإعلان عن بدء إستكمال مشروعي مؤسسة الوليد للإنسانية لترفير 10.000 مسكن والتابع لمشروع الإسكان التنموي، وتوفير 10.000 سيارة ليكون ناتج عدد المستفيدين 100.000 مواطن ومواطنة سعوديين خلال 10 سنوات. فمن خلال حديثي هذا أود أن أشارككم أسباب إهتمامي بتلك المشاريع تحديداً.
            </p>
            <div>
              <a
                href="#read-more"
                className="inline-block text-[#008752] font-bold text-sm hover:underline mt-1"
              >
                إقرأ المزيد
              </a>
            </div>
          </div>
        </div>

        {/* قسم النموذج والنتائج */}
        <div className="order-2 sm:order-1 flex flex-col items-end w-full">
          <div className="w-full sm:w-[480px]">
            
            <h2 className="text-center text-2xl font-bold text-[#008752] mb-6">
              متابعة الطلب
            </h2>

            {!result ? (
              <form onSubmit={handleSearch} className="space-y-4">
                {error && (
                  <div className="p-3 bg-red-50 border border-red-200 text-red-600 rounded-lg text-sm font-semibold">
                    {error}
                  </div>
                )}

                <div>
                  <input
                    type="text"
                    placeholder="رقم الهوية"
                    value={national_id}
                    onChange={(e) => setnational_id(e.target.value)}
                    className="w-full bg-white border border-gray-300 rounded-none px-4 py-3 text-base text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#008752] transition-colors text-right shadow-sm"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    placeholder="رقم الطلب"
                    value={orderNumber}
                    onChange={(e) => setOrderNumber(e.target.value)}
                    className="w-full bg-white border border-gray-300 rounded-none px-4 py-3 text-base text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#008752] transition-colors text-right shadow-sm"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#008752] hover:bg-[#007346] text-white font-bold py-3.5 rounded-none text-base transition-colors shadow-sm flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>جاري البحث...</span>
                    </>
                  ) : (
                    <>
                      <Search className="w-5 h-5" />
                      <span>استعلام عن الطلب</span>
                    </>
                  )}
                </button>
              </form>
            ) : (
              /* بطاقة نتيجة الاستعلام */
              <div className="bg-white p-6 border border-gray-200 shadow-md space-y-6 animate-fadeIn">
                <div className="border-b border-gray-100 pb-4 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[#008752]">
                    <FileText className="w-5 h-5" />
                    <span className="font-bold text-lg">تفاصيل الطلب #{result.id}</span>
                  </div>
                  {getStatusBadge(result.status)}
                </div>

                <div className="space-y-3 text-sm text-gray-700">
                  <div className="flex justify-between py-1 border-b border-gray-50">
                    <span className="text-gray-400 font-semibold">صاحب الطلب:</span>
                    <span className="font-bold">{result.fullName}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-gray-50">
                    <span className="text-gray-400 font-semibold">نوع البرنامج:</span>
                    <span className="font-bold">{result.program}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-gray-50">
                    <span className="text-gray-400 font-semibold">تاريخ تقديم الطلب:</span>
                    <span className="font-bold font-mono">{result.date}</span>
                  </div>
                </div>

                <button
                  onClick={() => setResult(null)}
                  className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold py-2.5 text-sm transition-colors flex items-center justify-center gap-2"
                >
                  <ArrowRight className="w-4 h-4" />
                  <span>بحث عن طلب آخر</span>
                </button>
              </div>
            )}

            <div className="mt-5 space-y-4 text-center">
              <p className="text-sm font-semibold text-[#008752]">
                لا يوجد لديك طلب؟ قم بإنشاء طلب
              </p>

              <button
                type="button"
                onClick={() => navigate('/ApplyPage')}
                className="w-full bg-[#008752] hover:bg-[#007346] text-white font-bold py-3.5 rounded-none text-base transition-colors shadow-sm"
              >
                تسجيل جديد
              </button>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}