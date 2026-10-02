import React from 'react';
import { MousePointerClick, MessageCircle, CalendarCheck, MapPin } from 'lucide-react';

const steps = [
  { icon: MousePointerClick, title: "1. اختر التحليل", desc: "حدد نوع التحليل أو الخدمة المطلوبة من قائمة الخدمات بالموقع." },
  { icon: MessageCircle, title: "2. أرسل طلبك", desc: "املأ بياناتك السريعة ليتم تجهيز رسالة واتساب تلقائية." },
  { icon: CalendarCheck, title: "3. تأكيد الموعد", desc: "سيرد عليك موظف الاستقبال فوراً لتأكيد الموعد المناسب لك." },
  { icon: MapPin, title: "4. التوجه للمعمل", desc: "شرفنا في المعمل لسحب العينة بأحدث الأجهزة المعملية." }
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-white dark:bg-omega-charcoal relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-omega-red font-bold tracking-wider text-sm mb-2 uppercase">كيف يعمل النظام؟</h3>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-4">خطوات بسيطة لراحتك</h2>
        </div>

        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-10 right-10 h-0.5 bg-gray-100 dark:bg-gray-800 -z-10" />
          
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center relative group">
              <div className="w-24 h-24 bg-white dark:bg-omega-darkGray border-4 border-gray-50 dark:border-gray-900 rounded-full flex items-center justify-center text-omega-red shadow-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <step.icon className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{step.title}</h4>
              <p className="text-gray-500 text-sm font-medium leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}