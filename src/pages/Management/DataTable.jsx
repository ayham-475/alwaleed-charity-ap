import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Eye, CheckCircle, XCircle, Trash2, Filter, ChevronDown, FileText, Loader2 } from 'lucide-react';
import StatusBadge from './StatusBadge';
import { getAllApplications } from '../../services/airtableService';

export default function DataTable({ onApprove, onReject, onDelete }) {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState(null);

  const fetchRequests = async () => {
    try {
      setLoading(true);
      const rawData = await getAllApplications();
      
      const recordsArray = rawData.records ? rawData.records : (Array.isArray(rawData) ? rawData : []);
      
      if (recordsArray.length > 0) {
        const normalizedData = recordsArray.map(record => {
          const f = record.fields || {};
          return {
            recordId: record.id,
            id: f.id || record.id,
            fullName: f.full_name || 'بدون اسم',
            nationalId: f.national_id || '—',
            program: f.program_type || 'عام',
            status: f.Status || f.status || 'قيد المراجعة',
            date: f.created_at ? new Date(f.created_at).toLocaleDateString('ar-EG') : '—',
            ...f
          };
        });

        setRequests(normalizedData);
        setFetchError(null);
      } else {
        setRequests([]);
      }
    } catch (error) {
      console.error('فشل جلب البيانات من Airtable:', error);
      setFetchError('حدث خطأ أثناء الاتصال بقاعدة البيانات: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  const handleApproveAction = async (targetId) => {
    try {
      if (onApprove) await onApprove(targetId);
      await fetchRequests();
    } catch (err) {
      console.error('حدث خطأ أثناء قبول الطلب:', err);
    }
  };

  const handleRejectAction = async (targetId) => {
    try {
      if (onReject) await onReject(targetId);
      await fetchRequests();
    } catch (err) {
      console.error('حدث خطأ أثناء رفض الطلب:', err);
    }
  };

  const handleDeleteAction = async (targetId) => {
    if (!window.confirm('هل أنت تأكد من رغبتك في حذف هذا الطلب؟')) return;
    try {
      if (onDelete) await onDelete(targetId);
      await fetchRequests();
    } catch (err) {
      console.error('حدث خطأ أثناء حذف الطلب:', err);
    }
  };

  if (loading) {
    return (
      <div className="bg-white rounded-2xl p-12 text-center text-gray-500 flex flex-col items-center justify-center gap-3">
        <Loader2 className="w-8 h-8 animate-spin text-[#008752]" />
        <p className="font-bold">جاري تحميل البيانات من قاعدة البيانات...</p>
      </div>
    );
  }

  if (fetchError) {
    return (
      <div className="bg-red-50 text-red-600 rounded-2xl p-6 text-center border border-red-100 font-bold">
        {fetchError}
      </div>
    );
  }

  return (
    <>
      <div className="bg-white rounded-2xl md:rounded-[2rem] shadow-[0_8px_40px_rgba(0,135,82,0.04)] border border-green-50 overflow-hidden flex flex-col">
        {/* الترويسة والفلاتر */}
        <div className="p-4 sm:p-6 md:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-50 bg-white/50 backdrop-blur-xl">
          <div>
            <h3 className="font-extrabold text-lg md:text-xl text-gray-800">أحدث الطلبات</h3>
            <p className="text-xs md:text-sm text-gray-400 mt-1">عرض وتحديث حالات الطلبات المقدمة من المستفيدين</p>
          </div>
          <button className="flex items-center justify-center gap-2 text-xs md:text-sm text-[#008752] bg-[#f0fbf5] px-4 md:px-6 py-2.5 md:py-3 rounded-xl font-bold hover:bg-green-100 transition-colors shadow-sm w-full sm:w-auto">
            <Filter className="w-4 h-4" /> فرز وتصفية <ChevronDown className="w-4 h-4" />
          </button>
        </div>

        {/* 1. عرض البطاقات للهواتف */}
        <div className="block md:hidden divide-y divide-gray-100 max-h-[550px] overflow-y-auto custom-table-scrollbar p-3 space-y-3">
          {requests.map((req, index) => {
            const targetId = String(req.recordId || req.id || index);

            return (
              <div key={targetId} className="bg-gray-50/60 rounded-xl p-4 border border-gray-100 flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-gray-500 bg-white px-2.5 py-1 rounded-md border border-gray-100">
                    #{req.id || '—'}
                  </span>
                  <StatusBadge status={req.status} />
                </div>

                <div className="flex items-start gap-3 my-1">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex-shrink-0 flex items-center justify-center text-[#008752] font-bold text-base">
                    {req.fullName ? req.fullName.charAt(0) : 'م'}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-gray-800 text-sm truncate">{req.fullName}</p>
                    <p className="text-xs text-gray-400 font-mono mt-0.5">{req.nationalId}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="bg-white text-gray-600 px-2 py-0.5 rounded-md font-semibold text-[11px] border border-gray-100">
                        {req.program}
                      </span>
                      <span className="text-gray-400 text-[11px]">
                        {req.date}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-end gap-2 pt-2 border-t border-gray-200/60">
                  <Link 
                    to={`/admin/requests/${targetId}`} 
                    title="التفاصيل"
                    onClick={(e) => e.stopPropagation()}
                    className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-bold text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                  >
                    <Eye className="w-3.5 h-3.5" /> التفاصيل
                  </Link>

                  {(req.status === 'قيد المراجعة' || req.status === 'pending') && (
                    <>
                      <button 
                        onClick={(e) => { e.stopPropagation(); handleApproveAction(targetId); }} 
                        title="قبول" 
                        className="p-2 text-emerald-600 bg-emerald-50 hover:bg-emerald-100 rounded-lg transition-colors"
                      >
                        <CheckCircle className="w-4 h-4" />
                      </button>
                      <button 
                        onClick={(e) => { e.stopPropagation(); handleRejectAction(targetId); }} 
                        title="رفض" 
                        className="p-2 text-red-600 bg-red-50 hover:bg-red-100 rounded-lg transition-colors"
                      >
                        <XCircle className="w-4 h-4" />
                      </button>
                    </>
                  )}

                  <button 
                    onClick={(e) => { e.stopPropagation(); handleDeleteAction(targetId); }} 
                    title="حذف" 
                    className="p-2 text-gray-400 bg-white hover:text-red-600 hover:bg-red-50 rounded-lg border border-gray-200 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* 2. عرض الجدول للشاشات الكبيرة */}
        <div className="hidden md:block max-h-[450px] overflow-y-auto custom-table-scrollbar">
          <table className="w-full text-sm text-right whitespace-nowrap">
            <thead className="bg-[#fcfdfd] border-b border-gray-50 sticky top-0 z-10 backdrop-blur-md">
              <tr>
                <th className="px-8 py-5 text-gray-400 font-bold w-24">رقم الطلب</th>
                <th className="px-8 py-5 text-gray-400 font-bold">المستفيد</th>
                <th className="px-8 py-5 text-gray-400 font-bold">البرنامج</th>
                <th className="px-8 py-5 text-gray-400 font-bold">التاريخ</th>
                <th className="px-8 py-5 text-gray-400 font-bold">الحالة</th>
                <th className="px-8 py-5 text-gray-400 font-bold text-center">إجراءات</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {requests.map((req, index) => {
                const targetId = String(req.recordId || req.id || index);

                return (
                  <tr key={targetId} className="hover:bg-[#f0fbf5]/40 transition-colors">
                    <td className="px-8 py-5 font-bold text-gray-500 font-mono text-xs">
                      #{req.id || '—'}
                    </td>
                    <td className="px-8 py-5">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-[#008752] font-bold text-lg">
                          {req.fullName ? req.fullName.charAt(0) : 'م'}
                        </div>
                        <div>
                          <p className="font-extrabold text-gray-800 text-base">{req.fullName}</p>
                          <p className="text-xs text-gray-400 font-mono mt-0.5">{req.nationalId}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-5">
                      <span className="bg-gray-50 text-gray-600 px-3 py-1.5 rounded-lg font-semibold text-xs border border-gray-100">
                        {req.program}
                      </span>
                    </td>
                    <td className="px-8 py-5 font-medium text-gray-500 text-xs">
                      {req.date}
                    </td>
                    <td className="px-8 py-5">
                      <StatusBadge status={req.status} />
                    </td>
                    <td className="px-8 py-5">
                      <div className="flex items-center justify-center gap-2">
                        <Link 
                          to={`/admin/requests/${targetId}`} 
                          title="تفاصيل الطلب الكاملة" 
                          onClick={(e) => e.stopPropagation()}
                          className="p-2.5 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all inline-flex items-center justify-center"
                        >
                          <Eye className="w-4 h-4" />
                        </Link>

                        {(req.status === 'قيد المراجعة' || req.status === 'pending') && (
                          <>
                            <button 
                              onClick={(e) => { e.stopPropagation(); handleApproveAction(targetId); }} 
                              title="قبول" 
                              className="p-2.5 text-gray-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-xl transition-all"
                            >
                              <CheckCircle className="w-4 h-4" />
                            </button>
                            <button 
                              onClick={(e) => { e.stopPropagation(); handleRejectAction(targetId); }} 
                              title="رفض" 
                              className="p-2.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all"
                            >
                              <XCircle className="w-4 h-4" />
                            </button>
                          </>
                        )}

                        <button 
                          onClick={(e) => { e.stopPropagation(); handleDeleteAction(targetId); }} 
                          title="حذف" 
                          className="p-2.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* حالة لا توجد طلبات */}
        {requests.length === 0 && (
          <div className="px-8 py-16 text-center text-gray-400 font-bold text-lg">
            <div className="flex flex-col items-center gap-3">
              <FileText className="w-12 h-12 text-gray-200" />
              لا توجد طلبات مسجلة في قاعدة البيانات حالياً.
            </div>
          </div>
        )}
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .custom-table-scrollbar::-webkit-scrollbar { width: 5px; height: 5px; }
        .custom-table-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-table-scrollbar::-webkit-scrollbar-thumb { background: #e5e7eb; border-radius: 10px; }
        .custom-table-scrollbar::-webkit-scrollbar-thumb:hover { background: #008752; }
      `}} />
    </>
  );
}