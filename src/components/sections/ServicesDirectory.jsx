import React, { useState } from 'react';
import { Activity, Droplets, HeartPulse, Bone, ArrowLeft } from 'lucide-react';
import { labInfo } from '../../data/labInfo';

const iconMap = {
  Activity: <Activity className="w-16 h-16 opacity-80" />,
  Droplets: <Droplets className="w-16 h-16 opacity-80" />,
  HeartPulse: <HeartPulse className="w-16 h-16 opacity-80" />,
  Bone: <Bone className="w-16 h-16 opacity-80" />
};

export default function ServicesDirectory() {
  const [activeService, setActiveService] = useState(labInfo.services[0]);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleServiceChange = (service) => {
    if (service.id === activeService.id) return;
    setIsAnimating(true);
    setTimeout(() => {
      setActiveService(service);
      setIsAnimating(false);
    }, 300);
  };

  return (
    <section id="services" className="py-24 bg-omega-softGray relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h3 className="text-omega-red font-bold tracking-wider text-sm mb-2 uppercase">دليل التحاليل</h3>
          <h2 className="text-4xl md:text-5xl font-black text-omega-charcoal dark:text-white">خدمات صُممت <br/> لأجل صحتك.</h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 h-auto lg:h-[500px]">
          
          {/* Services List (Right Side) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {labInfo.services.map((service) => (
              <button
                key={service.id}
                onClick={() => handleServiceChange(service)}
                className={`text-right p-6 rounded-3xl border-2 transition-all duration-300 group ${
                  activeService.id === service.id 
                  ? 'border-omega-red bg-white dark:bg-omega-darkGray shadow-lg' 
                  : 'border-transparent bg-white/50 dark:bg-omega-darkGray/50 hover:border-gray-200 dark:hover:border-gray-700'
                }`}
              >
                <div className="flex justify-between items-center mb-1">
                  <h4 className={`text-xl font-bold transition-colors ${activeService.id === service.id ? 'text-omega-red' : 'text-gray-900 dark:text-white group-hover:text-omega-red'}`}>
                    {service.name}
                  </h4>
                  {activeService.id === service.id && <ArrowLeft className="w-5 h-5 text-omega-red animate-pulse" />}
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">{service.desc}</p>
              </button>
            ))}
          </div>

          {/* Visual Display Panel (Left Side) */}
          <div className="lg:col-span-7 bg-omega-charcoal rounded-[2.5rem] p-10 relative overflow-hidden flex items-center justify-center shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-omega-red/10 to-transparent" />
            
            <div className={`relative z-10 text-white text-center w-full max-w-md transition-all duration-300 ${isAnimating ? 'opacity-0 translate-y-8' : 'opacity-100 translate-y-0'}`}>
              <div className="flex flex-col items-center justify-center h-full text-omega-red">
                {iconMap[activeService.icon]}
                <h3 className="text-3xl font-black mb-4 mt-6 text-white">{activeService.name}</h3>
                <p className="text-gray-300 font-medium leading-relaxed">{activeService.desc}</p>
                
                <a href="#booking" className="mt-8 px-6 py-2 rounded-full border border-omega-red text-omega-red hover:bg-omega-red hover:text-white transition-colors font-bold text-sm">
                  احجز هذا التحليل
                </a>
              </div>
            </div>
            
            {/* Background Grid Pattern */}
            <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="gridPattern" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#gridPattern)"/>
            </svg>
          </div>

        </div>
      </div>
    </section>
  );
}