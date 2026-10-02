import React from 'react';
import { ArrowLeft, MessageCircle, Activity } from 'lucide-react';
import { labInfo } from '../../data/labInfo';

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center pt-10 pb-20 overflow-hidden">
      {/* Background Graphic System */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-100/40 dark:bg-red-900/10 rounded-full mix-blend-multiply blur-[100px] animate-blob -z-10" />
      <div className="absolute bottom-0 left-[-20%] w-[500px] h-[500px] bg-blue-50/40 dark:bg-blue-900/10 rounded-full mix-blend-multiply blur-[80px] animate-blob animation-delay-2000 -z-10" />

      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-16 items-center z-10">
        
        {/* Right Content (Text) */}
        <div className="animate-fade-up flex flex-col items-start text-right">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-800/50 mb-8">
            <span className="w-2 h-2 rounded-full bg-omega-red animate-pulse" />
            <span className="text-xs font-bold text-omega-red">{labInfo.name}</span>
          </div>
          
          <h1 className="text-6xl lg:text-8xl font-black text-omega-charcoal dark:text-white leading-[1.1] tracking-tight mb-6">
            حياتك <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-l from-omega-red to-red-800">تهمنا.</span>
          </h1>
          
          <p className="text-lg text-gray-500 dark:text-gray-400 font-medium max-w-lg mb-10 leading-relaxed">
            تحت إشراف {labInfo.doctor}. نقدم تجربة معملية رقمية تضمن لك دقة النتائج، سهولة التواصل، وراحة البال.
          </p>
          
          <div className="flex flex-wrap gap-4 w-full sm:w-auto">
            <a href="#booking" className="btn-primary w-full sm:w-auto group">
              احجز موعدك
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            </a>
            <a href={`https://wa.me/20${labInfo.contact.whatsapp}`} target="_blank" rel="noreferrer" className="btn-outline w-full sm:w-auto border-transparent bg-white dark:bg-omega-darkGray shadow-sm">
              <MessageCircle className="w-5 h-5 text-green-500" />
              تواصل سريع
            </a>
          </div>
        </div>

        {/* Left Content (Medical Abstract Visual) */}
        <div className="hidden lg:flex relative h-[500px] items-center justify-center animate-fade-up">
           {/* Abstract Medical UI Card */}
           <div className="absolute z-20 glass-panel p-6 rounded-3xl w-72 transform -translate-y-10 translate-x-10 shadow-2xl hover:scale-105 transition-transform duration-500">
             <div className="flex justify-between items-center mb-6">
               <div className="w-10 h-10 rounded-full bg-red-50 dark:bg-red-900/30 flex items-center justify-center text-omega-red">
                 <Activity className="w-5 h-5" />
               </div>
               <span className="text-xs font-bold text-gray-400">System Ready</span>
             </div>
             <div className="space-y-3">
               <div className="h-2 bg-gray-100 dark:bg-gray-800 rounded-full w-full overflow-hidden">
                 <div className="h-full bg-omega-red w-3/4 rounded-full" />
               </div>
               <div className="h-2 bg-gray-100 dark:bg-gray-800 rounded-full w-full overflow-hidden">
                 <div className="h-full bg-gray-300 dark:bg-gray-600 w-1/2 rounded-full" />
               </div>
             </div>
             <p className="mt-6 text-sm font-bold dark:text-white">دقة التحليل والمراجعة</p>
           </div>
           
           {/* Decorative SVG Circles */}
           <svg className="absolute inset-0 w-full h-full text-gray-200 dark:text-gray-800 animate-pulse-slow" viewBox="0 0 400 400">
             <circle cx="200" cy="200" r="180" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 8" />
             <circle cx="200" cy="200" r="140" fill="none" stroke="currentColor" strokeWidth="1" />
           </svg>
        </div>
        
      </div>
    </section>
  );
}