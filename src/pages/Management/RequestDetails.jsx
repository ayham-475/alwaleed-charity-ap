import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  ArrowRight, CheckCircle2, XCircle, Building2, User, 
  CreditCard, FileText, Mail, Phone, MapPin, Globe, Hash, AlertCircle, CheckSquare 
} from 'lucide-react';
import StatusBadge from './StatusBadge';
import { getAllApplications, updateApplicationStatus } from '../../services/airtableService';

export default function RequestDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [request, setRequest] = useState(null);
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState(null);

  const [rejectionReason, setRejectionReason] = useState('');
  const [showRejectInput, setShowRejectInput] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
console.log("id ",id)
  useEffect(() => {
    const fetchRequests = async () => {
      if (!id) return;
      
      try {
        setLoading(true);
        setFetchError(null);
        
        const rawData = await getAllApplications();
        console.log("البيانات القادمة من Airtable:", rawData);
        
        // 1. استخراج المصفوفة سواء كانت مخفية داخل records أو جاءت كمصفوفة مباشرة
        const recordsArray = rawData.records ? rawData.records : (Array.isArray(rawData) ? rawData : []);
        
        if (recordsArray.length > 0) {
          
          // 2. أهم خطوة: دمج الحقول (fields) مع الآيدي الخارجي لـ Airtable
          const normalizedData = recordsArray.map(record => ({
            recordId: record.id,     // المعرف الخاص بـ Airtable (مثل rec8hN...) يفيدنا عند التحديث
            ...record.fields         // فك جميع الحقول (full_name, id, Status...) لتكون متاحة مباشرة
          }));

          // 3. البحث في البيانات المدمجة
          // نبحث إما بالآيدي الرقمي (id) أو بآيدي أيرتيبل (recordId)
          const foundRequest = normalizedData.find(item => 
            String(item.id) === String(id) || String(item.recordId) === String(id)
          );

          if (foundRequest) {
            setRequest(foundRequest);
          } else {
            setFetchError('لم يتم العثور على الطلب المطلوب في قاعدة البيانات.');
          }
        } else {
          setFetchError('قاعدة البيانات فارغة أو لم يتم جلب أي طلبات.');
        }
      } catch (error) {
        console.error('فشل جلب البيانات من Airtable:', error);
        setFetchError('حدث خطأ أثناء الاتصال بقاعدة البيانات: ' + error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRequests();
  }, [id]);

  const formatDate = (isoDate) => {
    if (!isoDate) return '—';
    try {
      const date = new Date(isoDate);
      return date.toLocaleDateString('ar-SA', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    } catch (e) {
      return isoDate;
    }
  };

  // الإجراءات يجب أن تتم باستخدام recordId (مثال: rec8hN...) وليس الرقم 8
  const handleApprove = async () => {
    try {
      setIsUpdating(true);
      await updateApplicationStatus(request.recordId, 'مقبول');
      alert('تم قبول الطلب بنجاح!');
      navigate('/admin');
    } catch (error) {
      alert('حدث خطأ أثناء التحديث: ' + error.message);
    } finally {
      setIsUpdating(false);
    }
  };

  const handleRejectSubmit = async () => {
    if (!rejectionReason.trim()) {
      alert('لطفاً اكتب سبب الرفض.');
      return;
    }
    try {
      setIsUpdating(true);
      await updateApplicationStatus(request.recordId, 'مرفوض');
      alert('تم إرسال الرفض بنجاح!');
      navigate('/admin');
    } catch (error) {
      alert('حدث خطأ أثناء التحديث: ' + error.message);
    } finally {
      setIsUpdating(false);
    }
  };

  if (loading) {
    return (
      <div className="flex-1 bg-[#f5fcf8] min-h-screen flex items-center justify-center p-6 text-right" dir="rtl">
        <div className="text-center space-y-3">
          <div className="w-10 h-10 border-4 border-[#008752] border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="text-gray-600 font-bold text-sm">جاري جلب تفاصيل الطلب من قاعدة البيانات...</p>
        </div>
      </div>
    );
  }

  if (fetchError || !request) {
    return (
      <div className="flex-1 bg-[#f5fcf8] min-h-screen flex flex-col items-center justify-center p-6 text-right" dir="rtl">
        <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-red-100 text-center space-y-4 max-w-md w-full">
          <AlertCircle className="w-12 h-12 text-red-500 mx-auto" />
          <h2 className="text-xl font-extrabold text-gray-800">تنبيه</h2>
          <p className="text-sm text-gray-500">{fetchError || 'الطلب غير موجود.'}</p>
          <button 
            onClick={() => navigate('/admin')}
            className="w-full bg-[#008752] text-white font-bold py-3 rounded-xl hover:bg-[#006e42] transition-colors cursor-pointer"
          >
            العودة للوحة التحكم
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 bg-[#f5fcf8] min-h-screen overflow-y-auto p-6 lg:p-10 font-sans text-right" dir="rtl">
      
      <div className="max-w-5xl mx-auto flex items-center justify-between pb-8 border-b border-green-100 mb-8">
        <button 
          onClick={() => navigate('/admin')}
          className="flex items-center gap-2 text-gray-600 hover:text-[#008752] bg-white px-5 py-2.5 rounded-2xl shadow-sm border border-green-50 font-bold transition-all cursor-pointer"
        >
          <ArrowRight className="w-5 h-5" /> العودة للوحة التحكم
        </button>

        <div className="flex items-center gap-3">
          <span className="text-gray-400 text-sm font-bold">حالة الطلب:</span>
          <StatusBadge status={request.Status || request.status} />
        </div>
      </div>

      <div className="max-w-5xl mx-auto space-y-8">
        
        <div className="bg-gradient-to-br from-[#008752] to-[#006e42] text-white p-8 rounded-[2.5rem] shadow-xl flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <span className="bg-white/20 text-white px-3.5 py-1 rounded-xl text-xs font-mono font-bold" dir="ltr">
                #{request.id}
              </span>
              <span className="text-green-100 text-sm font-medium">
                التاريخ: {formatDate(request.created_at || request.createdTime)}
              </span>
            </div>
            <h1 className="text-3xl font-black">{request.full_name || request.fullName}</h1>
          </div>

          <div className="bg-white/15 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/15">
            <p className="text-xs text-green-100 font-bold mb-1">البرنامج المطلوب</p>
            <p className="text-lg font-extrabold text-white">{request.program_type || request.program}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="bg-white p-8 rounded-[2rem] border border-green-50 space-y-6 shadow-sm">
            <div className="flex items-center gap-3 border-b border-gray-50 pb-4">
              <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center text-[#008752]">
                <User className="w-5 h-5" />
              </div>
              <h3 className="font-extrabold text-lg text-gray-800">بيانات المستفيد</h3>
            </div>

            <div className="space-y-4 text-sm">
              <div className="flex items-center justify-between py-2 border-b border-gray-50">
                <span className="text-gray-400 font-medium flex items-center gap-2"><User className="w-4 h-4" /> الاسم الرباعي:</span>
                <span className="text-gray-800 font-extrabold">{request.full_name || request.fullName}</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-gray-50">
                <span className="text-gray-400 font-medium flex items-center gap-2"><Mail className="w-4 h-4" /> البريد الإلكتروني:</span>
                <span className="text-gray-800 font-mono font-bold" dir="ltr">{request.email || '—'}</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-gray-50">
                <span className="text-gray-400 font-medium flex items-center gap-2"><Hash className="w-4 h-4" /> رقم الهوية:</span>
                <span className="text-gray-800 font-mono font-bold" dir="ltr">{request.national_id || request.nationalId}</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-gray-50">
                <span className="text-gray-400 font-medium flex items-center gap-2"><Phone className="w-4 h-4" /> رقم الجوال:</span>
                <span className="text-gray-800 font-mono font-bold" dir="ltr">{request.phone_number || request.phoneNumber || '—'}</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-gray-50">
                <span className="text-gray-400 font-medium flex items-center gap-2"><Globe className="w-4 h-4" /> الجنسية / الجنس:</span>
                <span className="text-gray-800 font-bold">{request.nationality || '—'}</span>
              </div>
              <div className="flex items-center justify-between py-2">
                <span className="text-gray-400 font-medium flex items-center gap-2"><MapPin className="w-4 h-4" /> العنوان / المدينة:</span>
                <span className="text-gray-800 font-bold">{request.address || '—'}</span>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-8 rounded-[2rem] border border-green-50 space-y-6 shadow-sm">
              <div className="flex items-center gap-3 border-b border-gray-50 pb-4">
                <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center text-[#008752]">
                  <CreditCard className="w-5 h-5" />
                </div>
                <h3 className="font-extrabold text-lg text-gray-800">البيانات البنكية</h3>
              </div>

              <div className="space-y-4 text-sm">
                <div className="flex items-center justify-between py-2 border-b border-gray-50">
                  <span className="text-gray-400 font-medium flex items-center gap-2"><Building2 className="w-4 h-4" /> اسم البنك:</span>
                  <span className="text-gray-800 font-extrabold">{request.bank_name || request.bankName || '—'}</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-gray-400 font-medium flex items-center gap-2"><CreditCard className="w-4 h-4" /> رقم الحساب / الآيبان:</span>
                  <span className="text-gray-800 font-mono font-bold text-xs bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100" dir="ltr">
                    {request.account_number || request.accountNumber || '—'}
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-[2rem] border border-green-50 space-y-3 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-green-50 flex items-center justify-center text-[#008752]">
                  <CheckSquare className="w-4 h-4" />
                </div>
                <span className="text-sm font-bold text-gray-700">الإقرار بالشروط والأحكام:</span>
              </div>
              <div className="text-sm font-semibold text-gray-600 bg-[#f5fcf8] px-4 py-3 rounded-xl border border-green-50 flex items-center justify-between">
                <span>الموافقة على الشروط وسياسة الخصوصية:</span>
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${(request.terms_accepted || request.termsAccepted) ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-600'}`}>
                  {(request.terms_accepted || request.termsAccepted) ? 'تمت الموافقة' : 'غير موافق / غير متوفر'}
                </span>
              </div>
            </div>
          </div>

        </div>

        <div className="bg-white p-8 rounded-[2rem] border border-green-50 space-y-4 shadow-sm">
          <div className="flex items-center gap-3 border-b border-gray-50 pb-4">
            <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center text-[#008752]">
              <FileText className="w-5 h-5" />
            </div>
            <h3 className="font-extrabold text-lg text-gray-800">رسالة الحالة والمبررات</h3>
          </div>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed bg-[#f5fcf8] p-5 rounded-2xl border border-green-50 whitespace-pre-wrap">
            {request.message || request.details || 'لا توجد رسالة أو مبررات إضافية مسجلة.'}
          </p>
        </div>

        <div className="bg-white p-8 rounded-[2rem] border border-green-50 space-y-6 shadow-sm">
          <h3 className="font-extrabold text-xl text-gray-800">اتخاذ إجراء</h3>

          {!showRejectInput ? (
            <div className="flex flex-wrap items-center gap-4">
              <button 
                onClick={handleApprove}
                disabled={isUpdating || (request.Status || request.status) === 'مقبول'}
                className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-8 py-4 rounded-2xl shadow-lg transition-all text-base disabled:opacity-50 cursor-pointer"
              >
                <CheckCircle2 className="w-5 h-5" /> {isUpdating ? 'جاري التحديث...' : 'قبول الطلب'}
              </button>

              <button 
                onClick={() => setShowRejectInput(true)}
                disabled={isUpdating || (request.Status || request.status) === 'مرفوض'}
                className="flex items-center gap-2 bg-red-50 hover:bg-red-100 text-red-600 font-bold px-8 py-4 rounded-2xl transition-all text-base border border-red-200 disabled:opacity-50 cursor-pointer"
              >
                <XCircle className="w-5 h-5" /> رفض الطلب
              </button>
            </div>
          ) : (
            <div className="space-y-4 bg-red-50/50 p-6 rounded-2xl border border-red-100">
              <label className="block text-sm font-bold text-red-800">سبب الرفض:</label>
              <textarea 
                rows="3"
                value={rejectionReason}
                onChange={(e) => setRejectionReason(e.target.value)}
                placeholder="يرجى توضيح سبب الرفض لإرساله للمستفيد..."
                className="w-full bg-white border border-red-200 rounded-xl p-4 text-sm outline-none focus:border-red-500 resize-none"
              />
              <div className="flex items-center justify-end gap-3">
                <button 
                  onClick={() => setShowRejectInput(false)}
                  disabled={isUpdating}
                  className="px-5 py-2.5 bg-white border border-gray-200 text-gray-600 font-bold rounded-xl text-sm cursor-pointer hover:bg-gray-50"
                >
                  إلغاء
                </button>
                <button 
                  onClick={handleRejectSubmit}
                  disabled={isUpdating}
                  className="px-6 py-2.5 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl text-sm shadow-md disabled:opacity-50 cursor-pointer"
                >
                  {isUpdating ? 'جاري الإرسال...' : 'تأكيد الرفض'}
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}