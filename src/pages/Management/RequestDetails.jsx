import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  ArrowRight, CheckCircle2, XCircle, Building2, User, 
  CreditCard, FileText, Mail, Phone, MapPin, Globe, Hash, AlertCircle 
} from 'lucide-react';
import StatusBadge from './StatusBadge';

import { getAllApplications,updateApplicationStatus } from '../../services/airtableService';
export default function RequestDetails({ requests = [], onUpdateStatus }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const [localRequests, setLocalRequests] = useState(requests);
  const [loading, setLoading] = useState(true);

  // جلب الطلبات إن لم تكن متوفرة في الـ Props
  useEffect(() => {
    let isMounted = true;

    async function fetchData() {
      if (requests && requests.length > 0) {
        setLocalRequests(requests);
        setLoading(false);
      } else {
        try {
          setLoading(true);
          const data = await getAllApplications();
          if (isMounted) {
            setLocalRequests(data || []);
          }
        } catch (error) {
          console.error('خطأ في جلب تفاصيل الطلب:', error);
        } finally {
          if (isMounted) setLoading(false);
        }
      }
    }

    fetchData();

    return () => { isMounted = false; };
  }, [requests, id]);

  // 1. أثناء الجلب لا نعرض صفحة "غير موجود" أبداً لتفادي الاختفاء السريع
  if (loading) {
    return (
      <div className="flex-1 bg-[#f5fcf8] min-h-screen flex items-center justify-center p-6 text-right" dir="rtl">
        <div className="text-center space-y-3">
          <div className="w-10 h-10 border-4 border-[#008752] border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="text-gray-600 font-bold text-sm">جاري تحميل بيانات الطلب...</p>
        </div>
      </div>
    );
  }

  // 2. البحث عن الطلب بمُعرّف Airtable الأصلي (recordId) أو المعرّف المحلي (id)
  const request = localRequests.find(r => 
    String(r.recordId) === String(id) || 
    String(r.id) === String(id)
  );

  // 3. في حال عدم وجود الطلب نهائياً بعد انتهاء التحميل
  if (!request) {
    return (
      <div className="flex-1 bg-[#f5fcf8] min-h-screen flex flex-col items-center justify-center p-6 text-right" dir="rtl">
        <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-green-50 text-center space-y-4 max-w-md w-full">
          <AlertCircle className="w-12 h-12 text-red-500 mx-auto" />
          <h2 className="text-xl font-extrabold text-gray-800">الطلب غير موجود</h2>
          <p className="text-sm text-gray-400">عذراً، لم نتمكن من العثور على الطلب بالرقم ({id}).</p>
          <button 
            onClick={() => navigate('/admin')}
            className="w-full bg-[#008752] text-white font-bold py-3 rounded-xl hover:bg-[#006e42] transition-colors"
          >
            العودة للوحة التحكم
          </button>
        </div>
      </div>
    );
  }

  return <RequestDetailsView request={request} onUpdateStatus={onUpdateStatus} navigate={navigate} />;
}

function RequestDetailsView({ request, onUpdateStatus, navigate }) {
  const [rejectionReason, setRejectionReason] = useState(request.rejectionReason || '');
  const [showRejectInput, setShowRejectInput] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);

  const targetRecordId = request.recordId || request.id;

  const handleApprove = async () => {
    try {
      setIsUpdating(true);
      await updateApplicationStatus(targetRecordId, 'مقبول');
      if (onUpdateStatus) onUpdateStatus(targetRecordId, 'مقبول', '');
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
      await updateApplicationStatus(targetRecordId, 'مرفوض');
      if (onUpdateStatus) onUpdateStatus(targetRecordId, 'مرفوض', rejectionReason);
      alert('تم إرسال الرفض بنجاح!');
      navigate('/admin');
    } catch (error) {
      alert('حدث خطأ أثناء التحديث: ' + error.message);
    } finally {
      setIsUpdating(false);
    }
  };

  return (
    <div className="flex-1 bg-[#f5fcf8] min-h-screen overflow-y-auto p-6 lg:p-10 font-sans text-right" dir="rtl">
      
      {/* شريط التنقل العلوي */}
      <div className="max-w-5xl mx-auto flex items-center justify-between pb-8 border-b border-green-100 mb-8">
        <button 
          onClick={() => navigate('/admin')}
          className="flex items-center gap-2 text-gray-600 hover:text-[#008752] bg-white px-5 py-2.5 rounded-2xl shadow-sm border border-green-50 font-bold transition-all"
        >
          <ArrowRight className="w-5 h-5" /> العودة للوحة التحكم
        </button>

        <div className="flex items-center gap-3">
          <span className="text-gray-400 text-sm font-bold">حالة الطلب:</span>
          <StatusBadge status={request.status} />
        </div>
      </div>

      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* الترويسة الرئيسية */}
        <div className="bg-gradient-to-br from-[#008752] to-[#006e42] text-white p-8 rounded-[2.5rem] shadow-xl flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <span className="bg-white/20 text-white px-3.5 py-1 rounded-xl text-xs font-mono font-bold">
                طلب #{request.id}
              </span>
              <span className="text-green-100 text-sm font-medium">التاريخ: {request.date || '—'}</span>
            </div>
            <h1 className="text-3xl font-black">{request.fullName || 'بدون اسم'}</h1>
          </div>

          <div className="bg-white/10 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/10">
            <p className="text-xs text-green-100 font-bold mb-1">البرنامج المطلوب</p>
            <p className="text-lg font-extrabold text-white">{request.program || 'غير محدد'}</p>
          </div>
        </div>

        {/* التفاصيل والمعلومات */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="bg-white p-8 rounded-[2rem] border border-green-50 space-y-6">
            <div className="flex items-center gap-3 border-b border-gray-50 pb-4">
              <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center text-[#008752]">
                <User className="w-5 h-5" />
              </div>
              <h3 className="font-extrabold text-lg text-gray-800">بيانات المستفيد</h3>
            </div>

            <div className="space-y-4 text-sm">
              <div className="flex items-center justify-between py-2 border-b border-gray-50">
                <span className="text-gray-400 font-medium flex items-center gap-2"><User className="w-4 h-4" /> الاسم:</span>
                <span className="text-gray-800 font-extrabold">{request.fullName || '—'}</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-gray-50">
                <span className="text-gray-400 font-medium flex items-center gap-2"><Mail className="w-4 h-4" /> البريد:</span>
                <span className="text-gray-800 font-mono font-bold">{request.email || '—'}</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-gray-50">
                <span className="text-gray-400 font-medium flex items-center gap-2"><Hash className="w-4 h-4" /> رقم الهوية:</span>
                <span className="text-gray-800 font-mono font-bold">{request.nationalId || '—'}</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-gray-50">
                <span className="text-gray-400 font-medium flex items-center gap-2"><Phone className="w-4 h-4" /> الجوال:</span>
                <span className="text-gray-800 font-mono font-bold">{request.phone || request.phoneNumber || '—'}</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-gray-50">
                <span className="text-gray-400 font-medium flex items-center gap-2"><Globe className="w-4 h-4" /> الجنسية:</span>
                <span className="text-gray-800 font-bold">{request.nationality || '—'}</span>
              </div>
              <div className="flex items-center justify-between py-2">
                <span className="text-gray-400 font-medium flex items-center gap-2"><MapPin className="w-4 h-4" /> العنوان:</span>
                <span className="text-gray-800 font-bold">{request.address || '—'}</span>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-8 rounded-[2rem] border border-green-50 space-y-6">
              <div className="flex items-center gap-3 border-b border-gray-50 pb-4">
                <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center text-[#008752]">
                  <CreditCard className="w-5 h-5" />
                </div>
                <h3 className="font-extrabold text-lg text-gray-800">الحساب البنكي</h3>
              </div>

              <div className="space-y-4 text-sm">
                <div className="flex items-center justify-between py-2 border-b border-gray-50">
                  <span className="text-gray-400 font-medium flex items-center gap-2"><Building2 className="w-4 h-4" /> البنك:</span>
                  <span className="text-gray-800 font-extrabold">{request.bankName || '—'}</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-gray-400 font-medium flex items-center gap-2"><CreditCard className="w-4 h-4" /> الآيبان:</span>
                  <span className="text-gray-800 font-mono font-bold text-xs bg-gray-50 px-3 py-1 rounded-lg border border-gray-100">{request.accountNumber || '—'}</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-[2rem] border border-green-50 space-y-4">
              <div className="flex items-center gap-3 border-b border-gray-50 pb-4">
                <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center text-[#008752]">
                  <FileText className="w-5 h-5" />
                </div>
                <h3 className="font-extrabold text-lg text-gray-800">المبررات والتفاصيل</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed bg-[#f5fcf8] p-4 rounded-2xl border border-green-50">
                {request.details || request.message || 'لا توجد تفاصيل إضافية.'}
              </p>
            </div>
          </div>

        </div>

        {/* أزرار الإجراءات */}
        <div className="bg-white p-8 rounded-[2rem] border border-green-50 space-y-6">
          <h3 className="font-extrabold text-xl text-gray-800">اتخاذ إجراء</h3>

          {!showRejectInput ? (
            <div className="flex flex-wrap items-center gap-4">
              <button 
                onClick={handleApprove}
                disabled={isUpdating}
                className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-8 py-4 rounded-2xl shadow-lg transition-all text-base disabled:opacity-50"
              >
                <CheckCircle2 className="w-5 h-5" /> {isUpdating ? 'جاري التحديث...' : 'قبول الطلب'}
              </button>

              <button 
                onClick={() => setShowRejectInput(true)}
                disabled={isUpdating}
                className="flex items-center gap-2 bg-red-50 hover:bg-red-100 text-red-600 font-bold px-8 py-4 rounded-2xl transition-all text-base border border-red-200 disabled:opacity-50"
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
                placeholder="يرجى توضيح سبب الرفض..."
                className="w-full bg-white border border-red-200 rounded-xl p-4 text-sm outline-none focus:border-red-500"
              />
              <div className="flex items-center justify-end gap-3">
                <button 
                  onClick={() => setShowRejectInput(false)}
                  disabled={isUpdating}
                  className="px-5 py-2.5 bg-white border border-gray-200 text-gray-600 font-bold rounded-xl text-sm"
                >
                  إلغاء
                </button>
                <button 
                  onClick={handleRejectSubmit}
                  disabled={isUpdating}
                  className="px-6 py-2.5 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl text-sm shadow-md disabled:opacity-50"
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