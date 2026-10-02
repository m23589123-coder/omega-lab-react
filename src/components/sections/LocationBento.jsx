import React from 'react';
import { Clock, Phone, Copy, Map } from 'lucide-react';
import { labInfo } from '../../data/labInfo';
import { useToast } from '../ui/ToastContext'; // استدعاء الإشعارات

export default function LocationBento() {
  const { addToast } = useToast();

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(labInfo.location.address);
    addToast("تم نسخ عنوان المعمل بنجاح");
  };

  return (
    <section id="location" className="py-24 bg-[#0a0a0a] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-6 auto-rows-[200px]">
          
          {/* Map Card */}
          <div className="lg:col-span-8 lg:row-span-2 rounded-[2rem] overflow-hidden relative group border border-white/10">
            <iframe 
              title="Omega Lab Location"
              src={labInfo.location.mapUrl.replace("https://maps.app.goo.gl/", "https://www.google.com/maps/embed/v1/place?q=")} 
              className="w-full h-full grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
              style={{ border: 0 }} loading="lazy" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent pointer-events-none" />
            <div className="absolute bottom-6 right-6 left-6 flex justify-between items-end pointer-events-none">
              <div>
                <span className="bg-omega-red px-3 py-1 rounded-full text-xs font-bold mb-2 inline-block">المقر الرئيسي</span>
                <h3 className="text-2xl font-black">{labInfo.location.address.split('،')[0]}</h3>
              </div>
              <div className="flex gap-2 pointer-events-auto">
                <button onClick={handleCopyAddress} className="btn-outline border-white/20 text-white hover:bg-white/10 px-4 py-2 text-sm flex items-center gap-2 backdrop-blur-md">
                  <Copy className="w-4 h-4" /> نسخ
                </button>
                <a href={labInfo.location.mapUrl} target="_blank" rel="noreferrer" className="btn-primary px-4 py-2 text-sm flex items-center gap-2">
                  <Map className="w-4 h-4" /> الخرائط
                </a>
              </div>
            </div>
          </div>

          {/* Contact Details */}
          <div onClick={() => window.open(`https://wa.me/20${labInfo.contact.whatsapp}`, '_blank')} className="lg:col-span-4 lg:row-span-1 bg-gradient-to-br from-omega-red to-red-900 rounded-[2rem] p-8 flex flex-col justify-center relative overflow-hidden cursor-pointer hover:scale-[1.02] transition-transform">
             <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl transform translate-x-10 -translate-y-10" />
             <Phone className="w-8 h-8 text-white/50 mb-4" />
             <p className="text-red-200 text-sm font-bold mb-1">دعم فني وحجوزات</p>
             <h4 className="text-3xl font-black">{labInfo.contact.phone}</h4>
          </div>

          {/* Working Hours */}
          <div className="lg:col-span-4 lg:row-span-1 bg-white/5 border border-white/10 rounded-[2rem] p-8 flex flex-col justify-center backdrop-blur-md">
             <Clock className="w-8 h-8 text-gray-400 mb-4" />
             <p className="text-gray-400 text-sm font-bold mb-1">مواعيد العمل</p>
             <h4 className="text-xl font-bold">{labInfo.schedule.daily}</h4>
             <span className="text-xs text-omega-red font-bold mt-2">الجمعة: {labInfo.schedule.friday}</span>
          </div>

        </div>
      </div>
    </section>
  );
}