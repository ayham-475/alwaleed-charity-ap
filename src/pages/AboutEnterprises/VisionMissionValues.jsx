import React from 'react';
import { Eye, CheckCircle2 } from 'lucide-react';

export default function AboutSection() {
  return (
    <section dir="rtl" className="bg-white font-sans text-right">
      
      {/* 1. قسم الهيرو بنر العلوي */}
      <div className="relative w-full h-[400px] sm:h-[450px] flex items-center justify-center overflow-hidden">
        
        {/* صورة الخلفية */}
        <img
          src="https://alweleedphilanthopies.com/storage/news/media/V9Ts2KxAnqEFudJF0uyEUZRfDVhUCzXveebluQc8.jpg" 
          alt="عن المؤسسة"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        
        {/* الطبقة المظلمة فوق الصورة */}
        <div className="absolute inset-0 bg-black/65 backdrop-brightness-75" />

        {/* النصوص المتمركزة */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-4">
          
          <div className="inline-block px-5 py-1.5 rounded-full bg-white/20 text-white text-sm font-semibold backdrop-blur-md">
            عن المؤسسة
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-wide">
            مؤسسة الوليد للإنسانية
          </h1>

          <p className="text-base sm:text-lg text-gray-100 font-normal max-w-3xl mx-auto">
            مؤسسة خيرية عالمية رائدة تأسست لخدمة الإنسانية ودعم المحتاجين حول العالم
          </p>

        </div>
      </div>

      {/* 2. قسم قصتنا */}
      <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto text-center space-y-6">
        
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
          قصتنا
        </h2>

        <p className="text-base sm:text-lg text-gray-500 leading-relaxed max-w-5xl mx-auto font-normal">
          تأسست مؤسسة الوليد للإنسانية برؤية طموحة تهدف إلى إحداث تغيير إيجابي مستدام في حياة الناس. منذ انطلاقتنا، ونحن نعمل بلا كلل لتقديم يد العون للمحتاجين، ودعم المبادرات التعليمية والصحية، وتمكين المجتمعات من خلال برامج تنموية مبتكرة. نؤمن بأن العطاء ليس مجرد واجب، بل هو رسالة سامية نسعى لتحقيقها بكل شفافية ومصداقية.
        </p>

      </div>

      {/* 3. قسم رؤيتنا ورسالتنا وقيمنا (الخلفية الرمادية الفاتحة) */}
      <div className="bg-[#f8faf9] py-20 px-4 sm:px-6 lg:px-8 text-center border-t border-gray-100">
        <div className="max-w-6xl mx-auto space-y-16">
          
          {/* شبكة بطاقات رؤيتنا ورسالتنا */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* بطاقة رؤيتنا */}
            <div className="relative overflow-hidden bg-[#0d7a53] text-white rounded-3xl p-8 sm:p-12 shadow-md flex flex-col items-center justify-center space-y-5">
              
              {/* الدائرة المظلمة بالزاوية */}
              <div className="absolute -top-10 -right-10 w-36 h-36 bg-black/10 rounded-full pointer-events-none" />

              <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center z-10">
                <Eye className="w-8 h-8 text-white stroke-[2]" />
              </div>

              <h3 className="text-3xl font-bold text-white z-10">
                رؤيتنا
              </h3>

              <p className="text-base sm:text-lg text-white/95 leading-relaxed max-w-md font-light z-10">
                أن نكون النموذج الرائد عالمياً في العمل الإنساني المستدام، الذي يغير حياة الناس ويصنع مستقبلاً أفضل للمجتمعات.
              </p>

            </div>

            {/* بطاقة رسالتنا */}
            <div className="relative overflow-hidden bg-[#0d7a53] text-white rounded-3xl p-8 sm:p-12 shadow-md flex flex-col items-center justify-center space-y-5">
              
              {/* الدائرة المظلمة بالزاوية */}
              <div className="absolute -top-10 -left-10 w-36 h-36 bg-black/10 rounded-full pointer-events-none" />

              <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center z-10">
                <CheckCircle2 className="w-8 h-8 text-white stroke-[2]" />
              </div>

              <h3 className="text-3xl font-bold text-white z-10">
                رسالتنا
              </h3>

              <p className="text-base sm:text-lg text-white/95 leading-relaxed max-w-md font-light z-10">
                تقديم حلول إنسانية مبتكرة وفعالة تلبي احتياجات الفئات الأكثر ضعفا، وتعزز قيم التكافل الاجتماعي، وتساهم في التنمية الشاملة.
              </p>

            </div>

          </div>

          {/* قسم قيمنا */}
          <div className="max-w-5xl mx-auto space-y-5 pt-4">
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a2e26]">
              قيمنا
            </h2>

            <p className="text-base sm:text-lg text-gray-500 leading-relaxed font-normal">
              هي المبادئ التي توجه عملنا وتحدد هويتنا الإنسانية، حيث نلتزم بالعمل وفق أسس أخلاقية راسخة تقوم على النزاهة والشفافية والعدالة، ونحرص على احترام كرامة الإنسان، وتعزيز روح التكافل والتعاون، وتحقيق أثر إيجابي مستدام في خدمة المجتمع، بما يعكس رسالتنا الإنسانية ويعزز الثقة في أعمالنا ومبادراتنا.
            </p>

          </div>

        </div>
      </div>

    </section>
  );
}