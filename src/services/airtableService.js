const AIRTABLE_TOKEN = import.meta.env.VITE_AIRTABLE_API_TOKEN;
const BASE_ID = import.meta.env.VITE_AIRTABLE_BASE_ID;
const TABLE_NAME = import.meta.env.VITE_AIRTABLE_TABLE_NAME || 'Applications';

// التحقق من وجود البيانات الأساسية قبل تنفيذه للطلبات
if (!AIRTABLE_TOKEN || !BASE_ID) {
  console.error("Airtable Configuration Missing: Check your .env or Vercel Environment Variables.");
}
const BASE_URL = `https://api.airtable.com/v0/${BASE_ID}/${TABLE_NAME}`;

const headers = {
  Authorization: `Bearer ${TOKEN}`,
  'Content-Type': 'application/json',
};

// 1. إرسال طلب جديد
export const submitApplication = async (formData) => {
  const response = await fetch(BASE_URL, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      fields: {
        program_type: formData.programType,
        full_name: formData.fullName,
        email: formData.email,
        national_id: formData.nationalId,
        address: formData.address,
        nationality: formData.nationality,
        phone_number: formData.phoneNumber,
        account_number: formData.accountNumber,
        bank_name: formData.bankName,
        message: formData.message,
        terms_accepted: formData.termsAccepted,
        Status: 'قيد المراجعة',
      },
    }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    console.error('Airtable Error Detail:', errorData);
    throw new Error(errorData.error?.message || 'حدث خطأ أثناء إرسال الطلب');
  }

  return await response.json();
};

// 2. تحديث حالة الطلب
// 3. حذف طلب من Airtable


export const updateApplicationStatus = async (recordId, newStatus) => {
  const response = await fetch(`${BASE_URL}/${recordId}`, {
    method: 'PATCH',
    headers,
    body: JSON.stringify({
      fields: {
        Status: newStatus,
      },
    }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error?.message || 'حدث خطأ أثناء تحديث حالة الطلب');
  }

  return await response.json();
};
export const deleteApplication = async (recordId) => {
  const response = await fetch(`${BASE_URL}/${recordId}`, {
    method: 'DELETE',
    headers,
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error?.message || 'حدث خطأ أثناء حذف الطلب');
  }

  return await response.json();
};

// 4. جلب جميع الطلبات وتحويل البيانات بالشكل المناسب للجدول
export const getAllApplications = async () => {
  const response = await fetch(BASE_URL, {
    method: 'GET',
    headers,
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error?.message || 'حدث خطأ أثناء جلب البيانات');
  }

  const data = await response.json();

  return data.records.map((record) => {
    const f = record.fields || {};
    return {
      recordId: record.id,
      id: f.id || record.id.slice(-4),
      fullName: f.full_name || f.fullName || f.Name || f['الاسم الكامل'] || 'بدون اسم',
      nationalId: f.national_id || f.nationalId || f['رقم الهوية'] || '—',
      program: f.program_type || f.programType || f.program || f['البرنامج'] || '—',
      date: record.createdTime 
        ? new Date(record.createdTime).toLocaleDateString('ar-SA', { day: 'numeric', month: 'long', year: 'numeric' })
        : '—',
      status: f.Status || f.status || 'قيد المراجعة',
    };
  });
};