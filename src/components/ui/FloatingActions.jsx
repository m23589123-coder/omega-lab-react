import React from 'react';
import { MessageCircle } from 'lucide-react';
import { labInfo } from '../../data/labInfo';

export default function FloatingActions() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      <a 
        href={`https://wa.me/20${labInfo.contact.whatsapp}`} 
        target="_blank" 
        rel="noreferrer" 
        className="w-14 h-14 bg-[#25D366] text-white rounded-2xl shadow-xl shadow-green-500/20 flex items-center justify-center hover:scale-110 hover:-translate-y-1 transition-all group relative"
      >
        <MessageCircle className="w-7 h-7" />
        <span className="absolute right-[120%] bg-white dark:bg-gray-800 text-gray-800 dark:text-white text-sm font-bold px-4 py-2 rounded-xl shadow-lg opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all pointer-events-none whitespace-nowrap">
          تواصل معنا
        </span>
      </a>
    </div>
  );
}