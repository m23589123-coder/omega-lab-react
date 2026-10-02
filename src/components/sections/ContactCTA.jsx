import React from 'react';
import { MessageCircle, ArrowLeft } from 'lucide-react';
import { labInfo } from '../../data/labInfo';

export default function ContactCTA() {
  return (
    <section className="py-24 relative overflow-hidden bg-omega-charcoal text-white mt-10">
      {/* Dynamic Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-omega-red/20 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-black mb-6">جاهز للاطمئنان على صحتك؟</h2>
        <p className="text-gray-400 mb-10 text-lg max-w-2xl mx-auto">
          فريقنا الطبي مستعد لاستقبالك وتقديم الرعاية التي تستحقها. احجز موعدك الآن أو تواصل معنا لأي استفسار.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#booking" className="btn-primary w-full sm:w-auto px-10 py-4 text-lg">
            ابدأ الحجز الآن
            <ArrowLeft className="w-5 h-5" />
          </a>
          <a href={`https://wa.me/20${labInfo.contact.whatsapp}`} target="_blank" rel="noreferrer" className="w-full sm:w-auto px-10 py-4 rounded-2xl font-bold bg-white/10 hover:bg-white/20 border border-white/10 backdrop-blur-md transition-all flex items-center justify-center gap-2 text-white">
            <MessageCircle className="w-5 h-5 text-green-400" />
            استفسر عبر واتساب
          </a>
        </div>
      </div>
    </section>
  );
}