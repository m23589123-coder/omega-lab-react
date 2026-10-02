import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Activity } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center relative overflow-hidden bg-gray-50 dark:bg-omega-charcoal">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-100/30 dark:bg-red-900/10 rounded-full mix-blend-multiply blur-[100px] animate-pulse-slow pointer-events-none" />
      
      <div className="text-center relative z-10 p-6">
        <Activity className="w-20 h-20 text-omega-red mx-auto mb-6 opacity-80" />
        <h1 className="text-7xl md:text-9xl font-black text-gray-900 dark:text-white tracking-tighter mb-4">
          4<span className="text-omega-red">0</span>4
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-700 dark:text-gray-300 mb-4">
          عذراً، الصفحة غير موجودة
        </h2>
        <p className="text-gray-500 max-w-md mx-auto mb-10 font-medium">
          يبدو أن الرابط الذي تبحث عنه قد تم نقله أو حذفه. دعنا نعود بك إلى الصفحة الرئيسية.
        </p>
        <Link to="/" className="btn-primary inline-flex">
          <ArrowRight className="w-5 h-5 ml-2" />
          العودة للرئيسية
        </Link>
      </div>
    </div>
  );
}