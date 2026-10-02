import React from 'react';
import { labInfo } from '../../data/labInfo';

export default function TrustBar() {
  return (
    <div className="w-full bg-omega-charcoal border-y border-gray-800 overflow-hidden py-4 flex items-center relative z-20 shadow-2xl">
      {/* Ticker Container - requires the 'animate-ticker' defined in index.css */}
      <div className="animate-ticker flex gap-12 text-sm font-bold text-gray-400 tracking-wide w-max">
        <span className="flex items-center gap-2"><span className="text-omega-red">●</span> مواعيد العمل: {labInfo.schedule.daily}</span>
        <span className="flex items-center gap-2"><span className="text-omega-red">●</span> الجمعة: {labInfo.schedule.friday}</span>
        <span className="flex items-center gap-2"><span className="text-omega-red">●</span> الموقع: {labInfo.location.address.split('،')[0]}</span>
        <span className="flex items-center gap-2"><span className="text-omega-red">●</span> تواصل سريع: {labInfo.contact.phone}</span>
        
        {/* Duplicate for infinite seamless loop */}
        <span className="flex items-center gap-2"><span className="text-omega-red">●</span> مواعيد العمل: {labInfo.schedule.daily}</span>
        <span className="flex items-center gap-2"><span className="text-omega-red">●</span> الجمعة: {labInfo.schedule.friday}</span>
        <span className="flex items-center gap-2"><span className="text-omega-red">●</span> الموقع: {labInfo.location.address.split('،')[0]}</span>
        <span className="flex items-center gap-2"><span className="text-omega-red">●</span> تواصل سريع: {labInfo.contact.phone}</span>
      </div>
    </div>
  );
}