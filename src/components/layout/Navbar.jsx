import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // استيراد المكون الجديد
import { Menu, X, Moon, Sun } from 'lucide-react';
import { labInfo } from '../../data/labInfo';

export default function Navbar({ darkMode, setDarkMode }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 transition-all duration-300 rounded-2xl px-4 py-3 flex justify-between items-center ${
      scrolled ? 'glass-nav shadow-lg' : 'bg-transparent'
    }`}>
      
      {/* Logo */}
      <Link to="/" className="flex items-center gap-3 cursor-pointer">
        <div className="w-10 h-10 bg-omega-red rounded-xl flex items-center justify-center text-white font-black text-xl shadow-md">Ω</div>
        <div>
          <h1 className="font-black text-gray-900 dark:text-white leading-none tracking-tight">أوميجا</h1>
          <span className="text-[0.6rem] font-bold text-omega-red tracking-widest uppercase">Laboratory</span>
        </div>
      </Link>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-8 bg-white/50 dark:bg-black/20 backdrop-blur-md px-6 py-2 rounded-full border border-gray-200/50 dark:border-gray-700/50 shadow-sm">
        <Link to="/" className="text-sm font-bold text-gray-600 dark:text-gray-300 hover:text-omega-red dark:hover:text-omega-red transition-colors">الرئيسية</Link>
        <Link to="/directory" className="text-sm font-bold text-gray-600 dark:text-gray-300 hover:text-omega-red dark:hover:text-omega-red transition-colors">دليل التحاليل</Link>
        <Link to="/#booking" className="text-sm font-bold text-gray-600 dark:text-gray-300 hover:text-omega-red dark:hover:text-omega-red transition-colors">الحجز</Link>
      </div>

      {/* Desktop Actions */}
      <div className="hidden md:flex items-center gap-3">
        <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-full text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 transition">
          {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
        <Link to="/#booking" className="btn-primary text-sm px-5 py-2">
          احجز موعد
        </Link>
      </div>

      {/* Mobile Toggle */}
      <div className="md:hidden flex items-center gap-2">
        <button onClick={() => setDarkMode(!darkMode)} className="p-2 text-gray-600 dark:text-gray-300">
           {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-gray-600 dark:text-gray-300">
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-omega-darkGray rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-800 p-4 flex flex-col gap-4 md:hidden">
           <Link to="/" onClick={() => setMobileMenuOpen(false)} className="font-bold p-2 dark:text-white hover:text-omega-red">الرئيسية</Link>
           <Link to="/directory" onClick={() => setMobileMenuOpen(false)} className="font-bold p-2 dark:text-white hover:text-omega-red">دليل التحاليل</Link>
           <Link to="/#booking" onClick={() => setMobileMenuOpen(false)} className="font-bold p-2 dark:text-white hover:text-omega-red">الحجز</Link>
           <a href={`https://wa.me/20${labInfo.contact.whatsapp}`} className="btn-primary w-full text-center mt-2">تواصل سريع</a>
        </div>
      )}
    </nav>
  );
}