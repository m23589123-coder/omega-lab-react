import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { labInfo } from '../../data/labInfo';

const faqs = [
  {
    q: "ما هي مواعيد عمل المعمل؟",
    a: `نعمل يومياً من ${labInfo.schedule.daily}. ويوم الجمعة مخصص للطوارئ فقط عبر الواتساب.`
  },
  {
    q: "كيف يمكنني حجز موعد لسحب عينة؟",
    a: "يمكنك استخدام نموذج الحجز السريع في الموقع، وسيتم تجهيز طلبك وتحويلك مباشرة لمحادثة واتساب لتأكيد الموعد النهائي."
  },
  {
    q: "هل يجب الصيام قبل التحاليل؟",
    a: "بعض التحاليل مثل السكر الصائم أو دهون الدم تتطلب الصيام من 8 إلى 12 ساعة. يُرجى سؤالنا عبر الواتساب عند الحجز لتأكيد التعليمات الخاصة بتحليلك."
  },
  {
    q: "أين يقع المعمل؟",
    a: labInfo.location.address
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-24 bg-white dark:bg-omega-charcoal">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <HelpCircle className="w-12 h-12 text-omega-red mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-4">الأسئلة الشائعة</h2>
          <p className="text-gray-500">إجابات سريعة لأهم استفساراتك قبل زيارة المعمل.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
                openIndex === index 
                ? 'border-omega-red bg-red-50 dark:bg-red-900/10' 
                : 'border-gray-200 dark:border-gray-800 bg-white dark:bg-omega-darkGray hover:border-gray-300 dark:hover:border-gray-700'
              }`}
            >
              <button 
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full px-6 py-5 flex justify-between items-center text-right outline-none"
              >
                <span className={`font-bold text-lg transition-colors ${openIndex === index ? 'text-omega-red' : 'text-gray-900 dark:text-white'}`}>
                  {faq.q}
                </span>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${openIndex === index ? 'bg-omega-red text-white' : 'bg-gray-100 dark:bg-gray-800 text-gray-500'}`}>
                  {openIndex === index ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </div>
              </button>
              
              <div 
                className={`px-6 transition-all duration-300 ease-in-out origin-top ${
                  openIndex === index ? 'py-5 border-t border-red-100 dark:border-red-900/30 opacity-100' : 'max-h-0 opacity-0 overflow-hidden py-0'
                }`}
              >
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-medium">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}