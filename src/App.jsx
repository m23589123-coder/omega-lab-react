import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ToastProvider } from './components/ui/ToastContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import TestDirectory from './pages/TestDirectory';
import NotFound from './pages/NotFound';
import FloatingActions from './components/ui/FloatingActions';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // إذا كان الرابط هو صفحة الحجز، انزل برفق لقسم الحجز
    if (pathname === '/booking' || hash === '#booking') {
      setTimeout(() => {
        const element = document.getElementById('booking');
        if (element) {
          // حساب المسافة لترك مساحة لشريط التنقل العائم (100 بكسل)
          const y = element.getBoundingClientRect().top + window.scrollY - 100;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 150);
    } 
    else if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash.replace('#', ''));
        if (element) {
          const y = element.getBoundingClientRect().top + window.scrollY - 100;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 150);
    } 
    else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

function App() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <ToastProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen relative overflow-hidden bg-noise flex flex-col">
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              {/* السطر التالي يحل مشكلة 404 لزر الحجز */}
              <Route path="/booking" element={<Home />} /> 
              <Route path="/directory" element={<TestDirectory />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
          <FloatingActions />
        </div>
      </Router>
    </ToastProvider>
  );
}

export default App;