import React, { useState } from 'react';
import { Check, Calendar, User, FileText } from 'lucide-react';
import { labInfo } from '../../data/labInfo';

export default function BookingFlow() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ service: 'غير محدد', time: '', name: '', phone: '' });

  const nextStep = () => setStep(s => Math.min(s + 1, 3));
  const prevStep = () => setStep(s => Math.max(s - 1, 1));

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `طلب حجز جديد:%0A👤 الاسم: ${formData.name}%0A📞 الهاتف: ${formData.phone}%0A🧪 التحليل: ${formData.service}%0A⏰ الوقت المفضل: ${formData.time || 'لم يحدد'}`;
    window.open(`https://wa.me/20${labInfo.contact.whatsapp}?text=${msg}`, '_blank');
    setStep(1); // Reset
    setFormData({ service: 'غير محدد', time: '', name: '', phone: '' });
  };

  return (
    <section id="booking" className="py-24 bg-white dark:bg-omega-charcoal">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black mb-4">احجز موعدك بسهولة</h2>
          <p className="text-gray-500">نظام حجز رقمي يجهز طلبك فوراً للتأكيد عبر واتساب.</p>
        </div>

        <div className="glass-panel p-8 rounded-[2rem] relative overflow-hidden">
          {/* Progress Indicator */}
          <div className="flex justify-between relative z-10 mb-10">
            <div className="absolute top-1/2 right-0 left-0 h-0.5 bg-gray-100 dark:bg-gray-800 -z-10" />
            {[1, 2, 3].map(i => (
              <div key={i} className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${step >= i ? 'bg-omega-red text-white shadow-lg shadow-red-500/30' : 'bg-gray-100 dark:bg-gray-800 text-gray-400'}`}>
                {step > i ? <Check className="w-5 h-5" /> : i}
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="min-h-[280px] flex flex-col justify-between">
            {step === 1 && (
              <div className="animate-fade-up">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2"><FileText className="text-omega-red"/> الخدمة المطلوبة</h3>
                <div className="grid grid-cols-2 gap-3">
                  {labInfo.services.map(s => (
                    <label key={s.id} className="cursor-pointer">
                      <input type="radio" name="service" value={s.name} className="peer sr-only" onChange={(e) => setFormData({...formData, service: e.target.value})} />
                      <div className="p-4 rounded-xl border-2 border-gray-100 dark:border-gray-800 peer-checked:border-omega-red peer-checked:bg-red-50 dark:peer-checked:bg-red-900/20 transition-all text-sm font-bold text-center">
                        {s.name}
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="animate-fade-up">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2"><Calendar className="text-omega-red"/> الوقت المفضل</h3>
                <input type="text" placeholder="مثال: غداً الساعة 5 مساءً" value={formData.time} onChange={(e) => setFormData({...formData, time: e.target.value})} className="w-full bg-gray-50 dark:bg-gray-800 border-2 border-gray-100 dark:border-gray-700 rounded-xl p-4 focus:outline-none focus:border-omega-red transition-colors" />
                <p className="text-xs text-gray-400 mt-3">* مواعيد العمل: {labInfo.schedule.daily}</p>
              </div>
            )}

            {step === 3 && (
              <div className="animate-fade-up">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2"><User className="text-omega-red"/> البيانات الشخصية</h3>
                <div className="space-y-4">
                  <input type="text" required placeholder="الاسم بالكامل" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full bg-gray-50 dark:bg-gray-800 border-2 border-gray-100 dark:border-gray-700 rounded-xl p-4 focus:outline-none focus:border-omega-red" />
                  <input type="tel" required placeholder="رقم الهاتف" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="w-full bg-gray-50 dark:bg-gray-800 border-2 border-gray-100 dark:border-gray-700 rounded-xl p-4 focus:outline-none focus:border-omega-red" />
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 p-3 rounded-lg text-xs mt-4">
                  سيتم توجيهك لواتساب لإرسال الطلب. الحجز غير مؤكد حتى يتم الرد من المعمل.
                </div>
              </div>
            )}

            <div className="flex justify-between mt-8 pt-6 border-t border-gray-100 dark:border-gray-800">
              {step > 1 ? (
                <button type="button" onClick={prevStep} className="text-gray-500 font-bold px-4 py-2 hover:text-omega-red">العودة</button>
              ) : <div />}
              
              {step < 3 ? (
                <button type="button" onClick={nextStep} className="btn-primary">التالي</button>
              ) : (
                <button type="submit" className="btn-primary bg-green-500 hover:bg-green-600 shadow-green-500/30">إرسال عبر واتساب</button>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}