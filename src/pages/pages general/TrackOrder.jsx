import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function TrackOrder() {
  const [nationalId, setNationalId] = useState('');
  const [orderNumber, setOrderNumber] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching:', { nationalId, orderNumber });
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

      {/* 2. الحاوية الرئيسية (تستخدم flex-col للتحكم بالترتيب حسب حجم الشاشة) */}
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col space-y-12 sm:space-y-16">
        
        {/* قسم رسالة الوليد: يظهر أولاً في الجوال (order-1) وثانياً في الشاشات الكبيرة (sm:order-2) */}
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

        {/* قسم النموذج: يظهر ثانياً في الجوال (order-2) وأولاً في الشاشات الكبيرة (sm:order-1) */}
        <div className="order-2 sm:order-1 flex flex-col items-end w-full">
          <div className="w-full sm:w-[480px]">
            
            <h2 className="text-center text-2xl font-bold text-[#008752] mb-6">
              متابعة الطلب
            </h2>

            <form onSubmit={handleSearch} className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="رقم الهوية"
                  value={nationalId}
                  onChange={(e) => setNationalId(e.target.value)}
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
                className="w-full bg-[#008752] hover:bg-[#007346] text-white font-bold py-3.5 rounded-none text-base transition-colors shadow-sm"
              >
                استعلام عن الطلب
              </button>
            </form>

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