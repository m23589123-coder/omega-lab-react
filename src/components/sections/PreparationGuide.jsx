import React from 'react';
import { Coffee, FileText, Stethoscope } from 'lucide-react';

export default function PreparationGuide() {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center">
        
        {/* Editorial Text */}
        <div className="lg:col-span-5">
          <h2 className="text-5xl font-black text-gray-200 dark:text-gray-800 mb-2">01</h2>
          <h3 className="text-3xl font-black text-gray-900 dark:text-white mb-6 leading-tight">
            تعليمات هامة <br/> <span className="text-omega-red">قبل زيارة المعمل.</span>
          </h3>
          <p className="text-gray-500 font-medium mb-8 leading-relaxed">
            لضمان أعلى درجات الدقة في نتائجك، هناك بعض الإرشادات العامة التي يجب مراعاتها. تذكر دائماً أن التعليمات الدقيقة تعتمد على نوع التحليل الذي طلبه طبيبك.
          </p>
          <div className="bg-orange-50 dark:bg-orange-900/20 border-r-4 border-orange-400 p-4 rounded-l-xl">
            <p className="text-orange-700 dark:text-orange-300 text-sm font-bold">
              تنبيه: تواصل معنا دائماً عبر واتساب لتأكيد شروط التحليل الخاص بك.
            </p>
          </div>
        </div>

        {/* Info Cards */}
        <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
          <div className="glass-panel p-6 rounded-3xl hover:-translate-y-1 transition-transform">
            <Coffee className="w-10 h-10 text-omega-red mb-4" />
            <h4 className="font-bold text-lg dark:text-white mb-2">الصيام قبل التحليل</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400">بعض التحاليل (مثل السكر والدهون) قد تتطلب الصيام من 8 إلى 12 ساعة والامتناع عن تناول الطعام.</p>
          </div>
          
          <div className="glass-panel p-6 rounded-3xl hover:-translate-y-1 transition-transform sm:translate-y-8">
            <FileText className="w-10 h-10 text-omega-red mb-4" />
            <h4 className="font-bold text-lg dark:text-white mb-2">الأدوية والروشتات</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400">إذا كنت تتناول أدوية بانتظام، يرجى إبلاغنا. ويُفضل إحضار روشتة الطبيب المعالج إن وجدت.</p>
          </div>

          <div className="glass-panel p-6 rounded-3xl hover:-translate-y-1 transition-transform">
            <Stethoscope className="w-10 h-10 text-omega-red mb-4" />
            <h4 className="font-bold text-lg dark:text-white mb-2">المجهود البدني</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400">تجنب المجهود البدني الشاق والتوتر قبل سحب العينة بفترة كافية لضمان استقرار المؤشرات الحيوية.</p>
          </div>
        </div>

      </div>
    </section>
  );
}