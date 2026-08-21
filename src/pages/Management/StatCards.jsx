import React from 'react';
import { FileText, Clock, CheckCircle2, XCircle } from 'lucide-react';

export default function StatCards({ requests = [] }) {
  // التأكد من أن الحالات تُحسب بدقة سواء كانت بالعربية أو الإنجليزية
  const pendingCount = requests.filter(r => 
    r.status === 'pending' || r.status === 'قيد المراجعة' || r.status === 'قيد الدراسة'
  ).length;

  const approvedCount = requests.filter(r => 
    r.status === 'approved' || r.status === 'مقبول' || r.status === 'تم القبول'
  ).length;

  const rejectedCount = requests.filter(r => 
    r.status === 'rejected' || r.status === 'مرفوض' || r.status === 'تم الرفض'
  ).length;

  const stats = [
    { 
      label: 'إجمالي الطلبات', 
      value: requests.length, 
      type: 'total',
      icon: FileText 
    },
    { 
      label: 'قيد الدراسة', 
      value: pendingCount, 
      type: 'pending',
      icon: Clock 
    },
    { 
      label: 'الطلبات المقبولة', 
      value: approvedCount, 
      type: 'approved',
      icon: CheckCircle2 
    },
    { 
      label: 'الطلبات المرفوضة', 
      value: rejectedCount, 
      type: 'rejected',
      icon: XCircle 
    },
  ];

  const getCardStyle = (type) => {
    switch(type) {
      case 'total': return 'bg-gradient-to-bl from-[#008752] to-[#006e42] text-white shadow-green-600/30';
      default: return 'bg-white text-gray-800 shadow-[0_8px_30px_rgba(0,135,82,0.04)] border border-green-50/50';
    }
  };

  const getIconStyle = (type) => {
    switch(type) {
      case 'total': return 'bg-white/20 text-white';
      case 'pending': return 'bg-amber-50 text-amber-500';
      case 'approved': return 'bg-emerald-50 text-emerald-500';
      case 'rejected': return 'bg-red-50 text-red-500';
      default: return 'bg-gray-50 text-gray-500';
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, i) => {
        const IconComponent = stat.icon;

        return (
          <div key={i} className={`p-6 rounded-3xl shadow-lg transition-transform hover:-translate-y-1 duration-300 ${getCardStyle(stat.type)}`}>
            <div className="flex items-center justify-between">
              <div className="space-y-2">
                <p className={`text-sm font-semibold ${stat.type === 'total' ? 'text-green-100' : 'text-gray-500'}`}>
                  {stat.label}
                </p>
                <h3 className="text-4xl font-black tracking-tight">{stat.value}</h3>
              </div>
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${getIconStyle(stat.type)}`}>
                <IconComponent className="w-7 h-7 stroke-[2]" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}