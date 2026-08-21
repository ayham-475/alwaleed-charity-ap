import React from 'react';
import { Link } from 'react-router-dom';
import { Eye, CheckCircle, XCircle, Trash2, Filter, ChevronDown, FileText } from 'lucide-react';
import StatusBadge from './StatusBadge';

export default function DataTable({ requests = [], onApprove, onReject, onDelete }) {
  return (
    <>
      <div className="bg-white rounded-[2rem] shadow-[0_8px_40px_rgba(0,135,82,0.04)] border border-green-50 overflow-hidden flex flex-col">
        {/* الترويسة والفلاتر */}
        <div className="p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-50 bg-white/50 backdrop-blur-xl">
          <div>
            <h3 className="font-extrabold text-xl text-gray-800">أحدث الطلبات</h3>
            <p className="text-sm text-gray-400 mt-1">عرض وتحديث حالات الطلبات المقدمة من المستفيدين</p>
          </div>
          <button className="flex items-center justify-center gap-2 text-sm text-[#008752] bg-[#f0fbf5] px-6 py-3 rounded-xl font-bold hover:bg-green-100 transition-colors shadow-sm">
            <Filter className="w-4 h-4" /> فرز وتصفية <ChevronDown className="w-4 h-4" />
          </button>
        </div>

        {/* حاوية الجدول */}
        <div className="max-h-[450px] overflow-y-auto custom-table-scrollbar">
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
                // نضمن دائماً وجود targetId معرف وسلسلي (String) لمنع الـ undefined
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
                          <p className="font-extrabold text-gray-800 text-base">{req.fullName || 'بدون اسم'}</p>
                          <p className="text-xs text-gray-400 font-mono mt-0.5">{req.nationalId || '—'}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-5">
                      <span className="bg-gray-50 text-gray-600 px-3 py-1.5 rounded-lg font-semibold text-xs border border-gray-100">
                        {req.program || 'عام'}
                      </span>
                    </td>
                    <td className="px-8 py-5 font-medium text-gray-500 text-xs">
                      {req.date || '—'}
                    </td>
                    <td className="px-8 py-5">
                      <StatusBadge status={req.status} />
                    </td>
                    <td className="px-8 py-5">
                      <div className="flex items-center justify-center gap-2">
                        {/* زر المعاينة والتفاصيل */}
                        <Link 
                          to={`/admin/requests/${targetId}`} 
                          title="تفاصيل الطلب الكاملة" 
                          onClick={(e) => e.stopPropagation()}
                          className="p-2.5 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all inline-flex items-center justify-center"
                        >
                          <Eye className="w-4 h-4" />
                        </Link>

                        {/* أزرار الإجراءات السريعة */}
                        {(req.status === 'قيد المراجعة' || req.status === 'pending') && (
                          <>
                            <button 
                              onClick={(e) => { e.stopPropagation(); onApprove && onApprove(targetId); }} 
                              title="قبول" 
                              className="p-2.5 text-gray-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-xl transition-all"
                            >
                              <CheckCircle className="w-4 h-4" />
                            </button>
                            <button 
                              onClick={(e) => { e.stopPropagation(); onReject && onReject(targetId); }} 
                              title="رفض" 
                              className="p-2.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all"
                            >
                              <XCircle className="w-4 h-4" />
                            </button>
                          </>
                        )}

                        {/* زر الحذف */}
                        <button 
                          onClick={(e) => { e.stopPropagation(); onDelete && onDelete(targetId); }} 
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

              {requests.length === 0 && (
                <tr>
                  <td colSpan="6" className="px-8 py-16 text-center text-gray-400 font-bold text-lg">
                    <div className="flex flex-col items-center gap-3">
                      <FileText className="w-12 h-12 text-gray-200" />
                      لا توجد طلبات مسجلة في قاعدة البيانات حالياً.
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
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