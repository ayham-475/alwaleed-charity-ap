import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import StatCards from "./StatCards";
import DataTable from "./DataTable";
import { Search, Bell, Menu } from 'lucide-react';

import { getAllApplications,updateApplicationStatus, deleteApplication } from '../../services/airtableService';
export default function Admin() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  // 1. مصفوفة فارغة في البداية
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  // 2. دالة جلب البيانات الحقيقية من Airtable
  const fetchRequests = async () => {
    try {
      setLoading(true);
      const data = await getAllApplications();
      setRequests(data);
    } catch (error) {
      console.error('فشل جلب البيانات من Airtable:', error);
      alert('حدث خطأ أثناء الاتصال بقاعدة البيانات: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  // 3. دوال التحكم بالطلبات وتحديثها في Airtable
  const handleApprove = async (recordId) => {
    try {
      await updateApplicationStatus(recordId, 'مقبول');
      setRequests(prev => prev.map(r => ((r.recordId || r.id) === recordId ? { ...r, status: 'مقبول' } : r)));
    } catch (error) {
      alert('حدث خطأ أثناء قبول الطلب: ' + error.message);
    }
  };

  const handleReject = async (recordId) => {
    try {
      await updateApplicationStatus(recordId, 'مرفوض');
      setRequests(prev => prev.map(r => ((r.recordId || r.id) === recordId ? { ...r, status: 'مرفوض' } : r)));
    } catch (error) {
      alert('حدث خطأ أثناء رفض الطلب: ' + error.message);
    }
  };

  const handleDelete = async (recordId) => {
    if (window.confirm('هل أنت متأكد من حذف هذا الطلب بشكل نهائي من قاعدة البيانات؟')) {
      try {
        await deleteApplication(recordId);
        setRequests(prev => prev.filter(r => (r.recordId || r.id) !== recordId));
      } catch (error) {
        alert('حدث خطأ أثناء حذف الطلب: ' + error.message);
      }
    }
  };

  // تصفية الطلبات بحسب البحث
  const filteredRequests = requests.filter((req) => {
    const term = searchTerm.toLowerCase();
    const name = (req.fullName || '').toLowerCase();
    const id = (req.nationalId || '').toString();
    const prog = (req.program || '').toLowerCase();
    return name.includes(term) || id.includes(term) || prog.includes(term);
  });

  return (
    <div dir="rtl" className="h-screen flex bg-[#f5fcf8] font-sans text-right overflow-hidden selection:bg-green-200">
      
      {/* القائمة الجانبية */}
    

      {/* مساحة العمل الرئيسية */}
      <main className="flex-1 flex flex-col h-full w-full overflow-hidden relative">
        
        {/* الترويسة العلوية */}
        <header className="h-24 px-6 lg:px-10 flex items-center justify-between bg-white/60 backdrop-blur-2xl border-b border-green-50/50 z-30 shrink-0">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsSidebarOpen(true)} 
              className="lg:hidden p-2.5 bg-white shadow-sm rounded-xl text-gray-600 hover:text-[#008752]"
            >
              <Menu className="w-6 h-6" />
            </button>
            <div className="hidden md:block">
              <h2 className="text-xl font-extrabold text-gray-800">مرحباً بعودتك، مدير النظام 👋</h2>
              <p className="text-sm text-gray-400 mt-0.5">إليك ملخص سريع لما يحدث اليوم.</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative hidden sm:block w-72">
              <input 
                type="text" 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="ابحث عن مستفيد..." 
                className="w-full bg-white border border-green-50 text-sm font-semibold rounded-2xl py-3 pr-12 pl-4 focus:ring-4 focus:ring-[#008752]/10 focus:border-[#008752] outline-none transition-all shadow-sm"
              />
              <Search className="w-5 h-5 text-gray-300 absolute right-4 top-3" />
            </div>

            <button className="w-12 h-12 bg-white border border-green-50 rounded-2xl flex items-center justify-center text-gray-400 hover:text-[#008752] transition-colors relative shadow-sm">
              <Bell className="w-5 h-5" />
              <span className="absolute top-3 right-3 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
            </button>

            <div className="flex items-center gap-3 pl-2 border-r border-gray-100 mr-2">
              <div className="hidden lg:block text-left mr-2">
                <p className="text-sm font-bold text-gray-800"> </p>
                <p className="text-xs text-gray-400 font-medium">مدير النظام</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-2xl border-2 border-white shadow-md overflow-hidden flex items-center justify-center">
                <span className="font-black text-[#008752]">أ</span>
              </div>
            </div>
          </div>
        </header>

        {/* عرض المحتوى */}
        <div className="flex-1 overflow-y-auto p-6 lg:p-10 space-y-10 custom-scrollbar pb-24">
          {loading ? (
            <div className="flex flex-col items-center justify-center py-20 text-gray-400 font-bold">
              <div className="w-10 h-10 border-4 border-[#008752] border-t-transparent rounded-full animate-spin mb-4"></div>
              جاري جلب البيانات من Airtable...
            </div>
          ) : (
            <>
              <StatCards requests={requests} />
              <DataTable 
                requests={filteredRequests} 
                onApprove={handleApprove} 
                onReject={handleReject} 
                onDelete={handleDelete}
              />
            </>
          )}
        </div>
      </main>
      
      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar { width: 6px; height: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #d1fae5; border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #008752; }
      `}} />
    </div>
  );
}