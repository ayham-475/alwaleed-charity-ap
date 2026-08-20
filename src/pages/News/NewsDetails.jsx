import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ChevronRight, Share2, CheckCircle2, Check } from 'lucide-react';

export const newsData = [
  {
    id: 1,
    publisher: "مكتب الوليد بن طلال",
    date: "2026/06/03",
    title: "طريقة التواصل مع الأميرة لمياء بنت ماجد آل سعود",
    image: "https://alweleedphilanthopies.com/storage/news/media/VT0v3N9BxjnLglqXLXNWapns9y4y0u5UK25MzD6x.jpg",
    content: "طريقة التواصل مع الأميرة لمياء بنت ماجد آل سعود يتساءل العديد من الأشخاص عن طريقة التواصل مع صاحبة السمو الملكي الأميرة لمياء بنت ماجد آل سعود فيما يتعلق بالمبادرات الإنسانية والمجتمعية والبرامج التنموية التي تهدف إلى خدمة المجتمع وتعزيز العمل الإنساني. 📱 رقم التواصل: +966547780436 يرجى توضيح موضوع الاستفسار أو الطلب عند التواصل لضمان سرعة المتابعة وتقديم المعلومات المطلوبة بالشكل المناسب. نسأل الله التوفيق للجميع وأن يبارك في الجهود الإنسانية الهادفة إلى خدمة المجتمع.",
  },
  {
    id: 2,
    publisher: "مكتب الوليد بن طلال",
    date: "2026/06/27",
    title: "طريقة التواصل مع الأميرة ريم بنت الوليد بن طلال",
    image: "https://alweleedphilanthopies.com/storage/news/media/lDgJhqnsydZd38AjKoNufjdQetIedJxVF9iXto7T.jpg",
    content: "طريقة التواصل مع الأميرة ريم بنت الوليد بن طلال يبحث الكثير من الأشخاص عن طريقة التواصل مع الأميرة ريم بنت الوليد بن طلال، سواء للاستفسار عن المبادرات الإنسانية أو لمعرفة وسائل التواصل المتاحة. ولهذا قمنا بتوفير هذه الصفحة لتسهيل الوصول إلى معلومات التواصل في مكان واحد. إذا كنت تبحث عن رقم التواصل مع الأميرة ريم بنت الوليد بن طلال أو ترغب في معرفة طريقة التواصل عبر واتساب، فيمكنك استخدام وسيلة التواصل الموضحة أدناه. رقم التواصل 📱 +966561995859 متى يمكن استخدام رقم التواصل؟ يمكن استخدام وسيلة التواصل للاستفسارات العامة المتعلقة بالمبادرات الإنسانية، والخدمات، وآلية التواصل، وغيرها من الموضوعات ذات الصلة. أكثر الأسئلة شيوعًا كيف أتواصل مع الأميرة ريم بنت الوليد بن طلال؟ يمكن التواصل من خلال رقم واتساب الموضح في هذه الصفحة. هل يوجد رقم واتساب للتواصل؟ نعم، رقم التواصل هو: +966561995859 ما هي أسرع طريقة للتواصل؟ يُعد التواصل عبر واتساب من أسرع وسائل إرسال الاستفسارات ومتابعة الردود. كلمات مفتاحية مرتبطة بالموضوع - طريقة التواصل مع الأميرة ريم بنت الوليد بن طلال. - رقم الأميرة ريم بنت الوليد. - رقم واتساب الأميرة ريم بنت الوليد. - كيفية التواصل مع الأميرة ريم بنت الوليد. - التواصل مع الأميرة ريم بنت الوليد. - واتساب الأميرة ريم بنت الوليد. - التواصل مع مؤسسة الوليد للإنسانية. - رقم التواصل مع مؤسسة الوليد للإنسانية. تم تحديث هذه الصفحة باستمرار لتوفير معلومات التواصل بشكل واضح وسهل الوصول إليها، بما يساعد الزوار في العثور على الإجابات التي يبحثون عنها بسرعة."
  },
  {
    id: 3,
    publisher: "مكتب الوليد بن طلال",
    date: "2026/06/03",
    title: "طريقة التواصل مع مؤسسة الوليد للإنسانية",
    image: "https://alweleedphilanthopies.com/storage/news/media/V9Ts2KxAnqEFudJF0uyEUZRfDVhUCzXveebluQc8.jpg",
    content: "طريقة التواصل مع مؤسسة الوليد للإنسانية إذا كنت تبحث عن طريقة التواصل مع مؤسسة الوليد للإنسانية للاستفسار عن المبادرات الإنسانية أو البرامج التنموية أو الخدمات المقدمة للمستفيدين، فيمكنك التواصل مباشرة عبر الرقم المخصص لاستقبال الاستفسارات والطلبات. 📱 رقم التواصل: +966561995859 يتم من خلال قنوات التواصل استقبال الاستفسارات المتعلقة بالمبادرات الإنسانية وبرامج الدعم والتنمية المجتمعية، إضافة إلى الرد على الأسئلة المتعلقة بالخدمات المتاحة وآلية الاستفادة منها. نتمنى للجميع التوفيق، ونسعد بخدمتكم والإجابة على استفساراتكم."
  },
  {
    id: 4,
    publisher: "مكتب الوليد بن طلال",
    date: "2026/04/22",
    title: "مؤسسة الوليد للإنسانية ودورها في دعم المبادرات الإنسانية والتنموية",
    image: "https://alweleedphilanthopies.com/storage/news/media/lDgJhqnsydZd38AjKoNufjdQetIedJxVF9iXto7T.jpg",
    content: "تُعد مؤسسة الوليد للإنسانية من الجهات المعروفة في مجال العمل الإنساني والتنمية المجتمعية، حيث تسعى إلى دعم المبادرات التي تساهم في تحسين جودة الحياة وتعزيز فرص التنمية المستدامة. ويبحث الكثير من الأشخاص عن معلومات حول برامج المؤسسة ومبادراتها الإنسانية، بالإضافة إلى طرق التواصل والاستفسار عن الخدمات والمشاريع المجتمعية المختلفة. ويأتي العمل الإنساني كأحد أهم الوسائل التي تساهم في بناء مجتمعات أكثر استقرارًا، من خلال دعم المبادرات التنموية والتعليمية والاجتماعية التي تهدف إلى تحقيق أثر إيجابي ومستدام. إن تعزيز التكافل الاجتماعي ودعم المبادرات المجتمعية يمثلان عنصرين أساسيين في تحقيق التنمية وبناء مستقبل أفضل للأفراد والمجتمعات."
  }
];

export default function NewsDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);

  const currentNews = newsData.find((item) => String(item.id) === String(id)) || newsData[0];

  if (!currentNews) {
    return (
      <div dir="rtl" className="min-h-screen bg-[#f8faf9] flex flex-col items-center justify-center p-4">
        <h2 className="text-base font-bold text-gray-800 mb-4">الخبر غير موجود</h2>
        <button
          onClick={() => navigate('/NewsDetails/1')}
          className="px-6 py-2 bg-[#0d7a53] text-white rounded-full font-bold text-xs"
        >
          العودة للأخبار
        </button>
      </div>
    );
  }

  const relatedNews = newsData.filter((item) => String(item.id) !== String(currentNews.id));

  const handleShare = (e) => {
    e?.preventDefault();
    if (navigator.share) {
      navigator.share({
        title: currentNews.title,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div dir="rtl" className="min-h-screen bg-[#f8faf9] py-8 px-4 font-sans text-right">
      {/* الحاوية المركزية بعرض مدمج max-w-xl لظهور البطاقات في المنتصف بأبعاد متناسقة */}
      <div className="max-w-xl mx-auto space-y-6">
        
        {/* 1. زر العودة للأخبار العلوي */}
        <div className="flex justify-start">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-1 text-xs font-extrabold text-[#0d7a53] hover:text-[#0a6343] transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
            <span>العودة للأخبار</span>
          </button>
        </div>

        {/* 2. بطاقة تفاصيل الخبر الرئيسية */}
        <div className="bg-white rounded-[20px] p-5 sm:p-6 shadow-sm border border-gray-100 space-y-5">
          
          {/* هيدر الناشر، التوثيق، والتاريخ */}
          <div className="flex items-center justify-between">
            <button 
              onClick={handleShare}
              className="p-2 text-gray-400 hover:text-[#0d7a53] hover:bg-gray-50 rounded-full transition-all relative"
              title="مشاركة الخبر"
              aria-label="مشاركة الخبر"
            >
              {copied ? <Check className="w-4 h-4 text-[#0d7a53]" /> : <Share2 className="w-4 h-4" />}
            </button>

            <div className="flex items-center gap-2.5">
              <div className="text-right">
                <div className="flex items-center justify-end gap-1">
                  <span className="font-extrabold text-xs sm:text-sm text-gray-900">
                    {currentNews.publisher}
                  </span>
                  <CheckCircle2 
                    className="w-3.5 h-3.5 text-blue-500 fill-blue-500/10 cursor-pointer" 
                    title="حساب موثق"
                  />
                </div>
                <span className="text-[10px] text-gray-400 font-medium">{currentNews.date}</span>
              </div>

              <Link 
                to="/NewsDetails/1" 
                className="w-9 h-9 bg-[#0d7a53] rounded-full flex items-center justify-center p-0.5 shadow-xs shrink-0 hover:opacity-90 transition-opacity"
                title="صفحة الناشر"
              >
                <div className="w-full h-full rounded-full border border-white/30 flex items-center justify-center text-white font-black text-[9px]">
                  مؤسسة
                </div>
              </Link>
            </div>
          </div>

          {/* صورة الخبر الرئيسية بحجم متناسب */}
          <div className="w-full h-56 sm:h-64 rounded-[16px] overflow-hidden bg-gray-100 border border-gray-50">
            <img
              src={currentNews.image}
              alt={currentNews.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* عنوان الخبر */}
          <h1 className="text-base sm:text-lg font-extrabold text-gray-900 leading-snug">
            {currentNews.title}
          </h1>

          {/* محتوى الخبر */}
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-medium whitespace-pre-line">
            {currentNews.content}
          </p>

          {/* زر مشاركة الخبر السفلي */}
          <div className="pt-1">
            <button
              onClick={handleShare}
              className="w-full py-2.5 px-4 border border-[#0d7a53] text-[#0d7a53] hover:bg-[#0d7a53] hover:text-white rounded-full font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-2xs"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>{copied ? 'تم نسخ الرابط!' : 'مشاركة هذا الخبر'}</span>
            </button>
          </div>

        </div>

        {/* 3. قسم أخبار ذات صلة - بطاقات مصغرة ومتمركزة */}
        <div className="space-y-3 pt-2">
          <h3 className="text-xs font-extrabold text-gray-900">
            أخبار ذات صلة
          </h3>

          <div className="space-y-2.5">
            {relatedNews.map((item) => (
              <Link
                key={item.id}
                to={`/NewsDetails/${item.id}`}
                className="bg-white rounded-[16px] p-3 flex items-center justify-between border border-gray-100 hover:shadow-md hover:border-[#0d7a53]/30 transition-all group"
              >
                <div className="text-right flex-1 pl-3">
                  <h4 className="text-xs font-bold text-gray-900 group-hover:text-[#0d7a53] transition-colors leading-snug mb-1 line-clamp-2">
                    {item.title}
                  </h4>
                  <span className="text-[10px] text-gray-400 font-medium">
                    {item.date}
                  </span>
                </div>

                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden shrink-0 bg-gray-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}