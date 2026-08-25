import React, { useState, useEffect, useRef } from 'react';
// مكون العداد المتصاعد عند التمرير
const AnimatedCounter = ({ target, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const increment = target / (duration / 16); 
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, target, duration]);

  return (
    <span ref={counterRef}>
      {count.toLocaleString()}
    </span>
  );
};
// مكون العد التلقائي للأرقام عند التمرير
function Counter({ end, duration = 2000, prefix = "+" }) {
  const [count, setCount] = useState(1);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let start = 1;
    const startTime = performance.now();

    const updateCount = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const currentVal = Math.floor(start + progress * (end - start));
      setCount(currentVal);

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(updateCount);
  }, [isVisible, end, duration]);

  return (
    <span ref={ref}>
      {prefix}{count.toLocaleString()}
    </span>
  );
}

export default function AboutSection() {
  return (
    // الحاوية الرئيسية للقسم: اتجاه عربي (RTL) وخلفية مطابقة للصورة
    <section dir="rtl" className="bg-[#f4f5f5] min-h-[60vh] flex flex-col items-center justify-center py-16 px-6 font-sans">
      
      {/* الحاوية الداخلية (التصميم الأول كما هو بدون أي تغيير) */}
      <div className="max-w-6xl w-full mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 mb-16">
        
        {/* ============================== */}
        {/* 1. قسم الصورة / الشعار الدائري */}
        {/* ============================== */}
        <div className="w-full md:w-[35%] flex justify-center md:justify-start order-1 md:order-2">
          <div className="w-[260px] h-[260px] sm:w-[300px] sm:h-[300px] rounded-full overflow-hidden shadow-sm flex items-center justify-center bg-white">
            <img
              src="https://alwaleedhumanitariansociety.com/wp-content/uploads/2026/02/images.jpeg"
              alt="شعار مؤسسة الوليد للإنسانية"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* ============================== */}
        {/* 2. قسم النصوص وزر التسجيل */}
        {/* ============================== */}
        <div className="w-full md:w-[58%] flex flex-col items-start text-right order-2 md:order-1">
          
          {/* العنوان التمهيدي الصغير */}
          <p className="text-gray-700 text-[15px] sm:text-[17px] font-medium mb-3">
            من نحن في مؤسسة الوليد للإنسانية
          </p>
          
          {/* النصوص الرئيسية العريضة */}
          <div className="text-[#111827] text-[19px] sm:text-[23px] md:text-[26px] font-extrabold leading-[1.6] mb-8 space-y-2">
            <p>
              نحن مؤسسة إنسانية تهدف إلى دعم المحتاجين في جميع انحاء العالم 
              خلال تقديم مساعدات مالية، برامج إسكان، وخدمات إنسانية
              متكاملة.
            </p>
            <p>
              نعمل على تسهيل وصول الدعم إلى مستحقيه عبر نظام تسجيل
              إلكتروني سريع وآمن.
            </p>
          </div>
          
          {/* زر التسجيل */}
          <div className="w-full flex justify-end">
            <button className="bg-[#0b5f1f] hover:bg-[#084918] transition-colors text-white font-bold text-[16px] px-12 py-3 rounded-full cursor-pointer shadow-sm">
              تسجيل
            </button>
          </div>

        </div>

      </div>

      {/* ============================== */}
      {/* 3. قسم الإحصائيات المضاف من الصورة مع خاصية العد التلقائي */}
      {/* ============================== */}
<section className="bg-[#f2f2f0] py-16 px-4 md:px-12 font-sans" dir="rtl">
      {/* تم عكس التوزيع ليكون النص يميناً والبطاقات يساراً */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* القسم الأيسر: بطاقات الإحصائيات (مصغرة العرض ومضبوطة تماماً كالصورة) */}
        <div className="lg:col-span-5 flex flex-col gap-6 items-end">
          
          {/* البطاقة الأولى */}
          <div className="border border-[#3b6d32] bg-[#f7f7f5] p-6 rounded-sm shadow-sm w-full max-w-sm h-64 flex flex-col justify-between relative">
            <div className="text-left">
              <span className="text-4xl md:text-5xl font-bold text-[#0b1b3d]">
                +<AnimatedCounter target={99} />
              </span>
            </div>
            <div className="text-right">
              <span className="text-sm text-[#4a4a4a]">مستفيدي الإسكان</span>
            </div>
            {/* شريط التحريك السفلي المشابه للصورة إذا رغبت بوجوده */}
            <div className="w-full bg-gray-400 h-1.5 rounded-full mt-4"></div>
          </div>

          {/* البطاقة الثانية */}
          <div className="border border-[#3b6d32] bg-[#f7f7f5] p-6 rounded-sm shadow-sm w-full max-w-sm h-64 flex flex-col justify-between relative">
            <div className="text-left">
              <span className="text-4xl md:text-5xl font-bold text-[#0b1b3d]">
                +<AnimatedCounter target={1000} />
              </span>
            </div>
            <div className="text-right">
              <span className="text-sm text-[#4a4a4a]">المستفيدين</span>
            </div>
          </div>

        </div>


        {/* القسم الأيمن: النصوص والصورة (يأخذ مساحة أكبر) */}
        <div className="lg:col-span-7 flex flex-col justify-between h-full">
          <div>
            <span className="text-[#3b6d32] text-sm font-medium">من نحن</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0b1b3d] mt-2 mb-4">
              من نحن في مؤسسة الوليد للإنسانية
            </h2>
            <p className="text-[#333333] text-sm md:text-base leading-relaxed mb-6 text-justify">
              نحن مؤسسة إنسانية تهدف إلى تقديم الدعم للأفراد والأسر المحتاجة في جميع أنحاء العالم. 
              نؤمن بأن العمل الإنساني هو واجب تجاه المجتمع، لذلك نعمل على توفير حلول عملية تشمل المساعدات المالية، الإسكان، ودعم التنقل.
              نسعى إلى إيصال المساعدات إلى مستحقيها بطريقة سهلة وسريعة من خلال نظام تسجيل إلكتروني متكامل.
            </p>
            <button className="bg-[#0e3b12] text-white px-6 py-3 rounded text-sm font-medium flex items-center gap-2 hover:bg-[#134d18] transition-colors">
              اقرأ المزيد <span>←</span>
            </button>
          </div>

          {/* الصورة السفلية المقصوصة */}
          <div className="mt-12 relative">
            <div className="overflow-hidden rounded-r-full rounded-l-2xl w-full max-w-md h-48 relative shadow-sm">
              <img 
                src="https://alwaleedphilanthropees.org/wp-content/uploads/2026/04/icon-1-1024x342.png" 
                alt="Together for humanity" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
    </section>
  );
}