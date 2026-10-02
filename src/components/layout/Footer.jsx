import React from 'react';
import { labInfo } from '../../data/labInfo';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-omega-charcoal pt-20 pb-10 border-t border-gray-100 dark:border-gray-800 mt-20 z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-omega-red rounded-lg flex items-center justify-center text-white font-black shadow-md">Ω</div>
              <h3 className="font-black text-xl text-gray-900 dark:text-white">أوميجا للتحاليل الطبية</h3>
            </div>
            <p className="text-gray-500 dark:text-gray-400 font-medium max-w-sm text-sm leading-relaxed mb-8">
              {labInfo.slogan}. أحدث التقنيات وأفضل الطرق المرجعية لأعلى درجات الدقة والثقة بإشراف {labInfo.doctor}.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-6">التنقل السريع</h4>
            <ul className="space-y-4 text-sm font-medium text-gray-500 dark:text-gray-400">
              <li><a href="#/" className="hover:text-omega-red transition-colors">الرئيسية</a></li>
              <li><a href="#/" className="hover:text-omega-red transition-colors">الخدمات</a></li>
              <li><a href="#booking" className="hover:text-omega-red transition-colors">احجز موعد</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-100 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-semibold text-gray-400">
          <p>© {new Date().getFullYear()} معمل أوميجا. جميع الحقوق محفوظة.</p>
          <div className="flex items-center gap-2 bg-gray-50 dark:bg-gray-800 px-4 py-2 rounded-full border border-gray-100 dark:border-gray-700">
            <span>Developed by <span className="font-black text-gray-700 dark:text-gray-200">{labInfo.developer.name}</span></span>
            <span className="w-1 h-1 bg-gray-300 rounded-full mx-1"></span>
            <a href={`https://wa.me/20${labInfo.developer.whatsapp}`} target="_blank" rel="noreferrer" dir="ltr" className="hover:text-omega-red transition-colors">+20 {labInfo.developer.whatsapp}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
