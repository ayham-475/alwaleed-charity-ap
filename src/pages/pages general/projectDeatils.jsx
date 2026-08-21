import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight, X } from 'lucide-react';

const projectsData = [
 {id: 1,
      image: 'https://alweleedphilanthopies.com/storage/posts/To38LQzpCJWiIWtqISp9UnfoVTI73I0aSahbHjTp.jpg',
      date: '2026/02/23',
      title: 'مؤسسة الوليد للإنسانية تمكّن النساء كسائقات عبر تطبيق كريم وتعزّز النمو الاقتصادي في المملكة العربية السعودية',
      subtitle: 'إيماناً بالدور المحوري للمرأة في المجتمع، نسعى في مؤسسة الوليد للإنسانية لتقديم المبادرات النوعية التي تفتح آفاق التمكين الاقتصادي والاجتماعي وترسخ الاستقلالية المالية.',
      detailsTitle: 'تفاصيل مبادرة التمكين',
      detailsText: 'تتضمن الشراكة توفير مركبات مجهزة ودعم تدريبي كامل للمستفيدات، مما يساهم في إيجاد فرص عمل مستدامة وزيادة مشاركة المرأة في سوق العمل وتنمية المحتوى المحلي.'
    },
    {
      id: 2,
      image: 'https://alweleedphilanthopies.com/storage/posts/aUYEE2JcyTRkv9tdVx3bMUznltXzWThHzZnZdzB8.jpg',
      date: '2026/02/19',
      title: 'نعمل مع شركائنا على تمليك سنوياً: 1000 وحدة سكنية و 1000 سيارة للمستفيدين في المملكة العربية السعودية لتوفير مساكن ملائمة ووسائل تنقل للأسر الأشد حاجة.',
      subtitle: 'أهداف ومدة المشاريع يعتمد مشروع الإسكان التنموي ومشروع السيارات على أهداف محددة تسعى لتحسين مستوى المعيشة للمواطنين.',
      detailsTitle: 'أهداف ومدة المشاريع',
      detailsText: 'يعتمد مشروع الإسكان التنموي ومشروع السيارات على أهداف محددة، تسعى لتحسين مستوى المعيشة للمواطنين، وتقليل تكاليف السكن والتنقل، وزيادة التملك والتمكين. ستستمر هذه المبادرات لمدة خمس سنوات بهدف توفير 10,000 وحدة سكنية و 10,000 سيارة للعائلات الأكثر حاجة.'
    },
    {
      id: 3,
      image: 'https://alweleedphilanthopies.com/storage/posts/2JFjlGLqxcBBU17F2HIFN4kHU12XaPwOIW6I6QYA.jpg',
      topBadge: 'اتفاقية تعاون مع مؤسسة الوليد للإنسانية لتمليك وتنمية 10,000 أسرة',
      date: '2026/02/19',
      title: 'نعمل مع شركائنا على تمليك سنوياً: 1000 وحدة سكنية و 1000 سيارة للمستفيدين في المملكة العربية السعودية لتوفير مساكن ملائمة ووسائل تنقل للأسر الأشد حاجة.',
      subtitle: 'رؤية لتنمية مستدامة استناداً إلى رؤية السعودية 2030 لتمكين الفئات الأكثر استحقاقاً.',
      detailsTitle: 'الرؤية والشراكة الاستراتيجية',
      detailsText: 'تأتي هذه الاتفاقية تعزيزاً للشراكة بين القطاع غير الربحي والقطاعات الحكومية للارتقاء بجودة الحياة وتقديم حلول سكنية وتنقلية متكاملة تضمن العيش الكريم.'
    },
];

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projectsData.find((item) => item.id === parseInt(id, 10));

  if (!project) {
    return (
      <div dir="rtl" className="min-h-screen flex flex-col items-center justify-center p-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">المشروع غير موجود!</h2>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-[#003d26] text-white px-8 py-3 rounded-xl font-bold text-base shadow-md hover:bg-[#002819] transition-all"
        >
          <ChevronRight className="w-5 h-5" />
          <span>العودة للمشاريع</span>
        </Link>
      </div>
    );
  }

  return (
    <section dir="rtl" className="min-h-screen bg-gray-50/50 py-12 px-4 sm:px-6 lg:px-8 font-sans text-right">
      {/* تم تكبير عرض الحاوية من max-w-4xl إلى max-w-5xl */}
      <div className="max-w-5xl mx-auto space-y-8">

        {/* زر العودة العلوي */}
        <div className="flex justify-between items-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-[#003d26] hover:text-[#002618] font-bold text-base transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
            <span>العودة إلى كافة المشاريع</span>
          </Link>
        </div>

        {/* بطاقة عرض التفاصيل */}
        <div className="bg-white rounded-3xl border border-gray-100 shadow-md overflow-hidden">

          {/* صورة المشروع */}
          <div className="w-full h-72 sm:h-[420px] overflow-hidden relative">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* محتوى التفاصيل */}
          <div className="p-8 sm:p-12 space-y-8">
            <div className="text-sm font-mono text-gray-400 font-semibold">
              {project.date}
            </div>

            <h1 className="text-2xl sm:text-4xl font-extrabold text-gray-900 leading-relaxed sm:leading-snug">
              {project.title}
            </h1>

            <div className="pt-6 border-t border-gray-100 space-y-4">
              <h3 className="text-lg sm:text-xl font-bold text-[#003d26]">
                {project.detailsTitle}
              </h3>
              <p className="text-base sm:text-lg text-gray-600 leading-loose">
                {project.detailsText}
              </p>
            </div>

            {/* زر إغلاق التفاصيل المضيء والكبير في أسفل البطاقة */}
            <div className="pt-8 flex justify-center border-t border-gray-50">
              <Link
                to="/"
                className="inline-flex items-center gap-3 bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold px-8 py-3.5 rounded-2xl text-base shadow-sm active:scale-95 transition-all"
              >
                <X className="w-5 h-5 text-gray-600" />
                <span>إغلاق التفاصيل</span>
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}