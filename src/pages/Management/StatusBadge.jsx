import React from 'react';

export default function StatusBadge({ status }) {
  if (status === 'مقبول' || status === 'approved') {
    return (
      <span className="bg-emerald-50 text-emerald-700 border border-emerald-200 px-3 py-1 rounded-full text-xs font-bold inline-flex items-center gap-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
        مقبول
      </span>
    );
  }

  if (status === 'مرفوض' || status === 'rejected') {
    return (
      <span className="bg-red-50 text-red-700 border border-red-200 px-3 py-1 rounded-full text-xs font-bold inline-flex items-center gap-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
        مرفوض
      </span>
    );
  }

  return (
    <span className="bg-amber-50 text-amber-700 border border-amber-200 px-3 py-1 rounded-full text-xs font-bold inline-flex items-center gap-1.5">
      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span>
      قيد المراجعة
    </span>
  );
}