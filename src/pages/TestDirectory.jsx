import React, { useState } from 'react';
import { Search, AlertCircle, X, ArrowLeft } from 'lucide-react';
import { testsData, categories } from '../data/testsData';
import { useNavigate } from 'react-router-dom';

export default function TestDirectory() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('الكل');
  const [selectedTest, setSelectedTest] = useState(null);
  const navigate = useNavigate();

  const filteredTests = testsData.filter(test => {
    const matchesSearch = test.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'الكل' || test.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const handleBookNow = () => {
    setSelectedTest(null);
    navigate('/#booking');
  };

  return (
    <div className="min-h-screen py-24 bg-gray-50 dark:bg-omega-charcoal relative">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Search Hero */}
        <div className="text-center mb-12 animate-fade-up">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6">ما التحليل الذي تبحث عنه؟</h1>
          <div className="relative max-w-2xl mx-auto group">
            <div className="absolute inset-y-0 right-0 flex items-center pr-5 pointer-events-none text-gray-400 group-focus-within:text-omega-red transition-colors">
              <Search className="w-6 h-6" />
            </div>
            <input 
              type="text" 
              placeholder="ابحث باسم التحليل (مثال: كبد، سكر، دهون)..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-5 pr-14 py-5 rounded-2xl border-2 border-gray-100 dark:border-gray-800 bg-white dark:bg-omega-darkGray text-gray-900 dark:text-white focus:outline-none focus:border-omega-red dark:focus:border-omega-red transition-all shadow-sm text-lg font-medium"
            />
          </div>
        </div>

        {/* Category Chips */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-up" style={{ animationDelay: '0.1s' }}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full font-bold text-sm transition-all duration-300 border ${
                activeCategory === cat 
                ? 'bg-omega-red border-omega-red text-white shadow-lg shadow-red-500/30' 
                : 'bg-white dark:bg-omega-darkGray border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:border-omega-red/50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Results Grid */}
        {filteredTests.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            {filteredTests.map(test => (
              <div 
                key={test.id} 
                onClick={() => setSelectedTest(test)}
                className="glass-panel p-6 rounded-2xl cursor-pointer hover:-translate-y-1 hover:border-omega-red/30 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-xs font-bold text-omega-red bg-red-50 dark:bg-red-900/20 px-2 py-1 rounded">
                      {test.category}
                    </span>
                    {test.fasting && <AlertCircle className="w-5 h-5 text-orange-500" title="يتطلب صيام" />}
                  </div>
                  <h3 className="font-bold text-lg dark:text-white group-hover:text-omega-red transition-colors mb-2">
                    {test.name}
                  </h3>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-800 flex justify-between items-center text-sm font-bold text-gray-400 group-hover:text-omega-red transition-colors">
                  <span>عرض التفاصيل</span>
                  <ArrowLeft className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 animate-fade-up">
            <Search className="w-16 h-16 text-gray-300 dark:text-gray-700 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">لا توجد نتائج</h3>
            <p className="text-gray-500">لم نتمكن من العثور على تحاليل تطابق بحثك. جرب كلمات مختلفة.</p>
            <button onClick={() => {setSearchTerm(''); setActiveCategory('الكل');}} className="mt-6 text-omega-red font-bold hover:underline">
              مسح خيارات البحث
            </button>
          </div>
        )}

        {/* Premium Test Details Modal */}
        {selectedTest && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm" onClick={() => setSelectedTest(null)} />
            <div className="bg-white dark:bg-omega-darkGray w-full max-w-lg rounded-[2rem] shadow-2xl relative z-10 animate-fade-up overflow-hidden border border-gray-100 dark:border-gray-800">
              <div className="p-8">
                <button onClick={() => setSelectedTest(null)} className="absolute top-6 left-6 text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                  <X className="w-6 h-6" />
                </button>
                
                <span className="text-xs font-bold text-omega-red bg-red-50 dark:bg-red-900/20 px-3 py-1.5 rounded-full inline-block mb-4">
                  {selectedTest.category}
                </span>
                
                <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-6">
                  {selectedTest.name}
                </h2>
                
                <div className="space-y-4 mb-8">
                  {selectedTest.fasting && (
                    <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-100 dark:border-orange-900/50 p-4 rounded-xl flex items-start gap-3">
                      <AlertCircle className="w-6 h-6 text-orange-500 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-orange-800 dark:text-orange-300 text-sm mb-1">تنبيه الصيام</h4>
                        <p className="text-xs text-orange-700 dark:text-orange-400 leading-relaxed">هذا التحليل يتطلب الصيام. تأكد من استيفاء الشروط قبل سحب العينة.</p>
                      </div>
                    </div>
                  )}
                  
                  <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-xl border border-gray-100 dark:border-gray-800">
                    <h4 className="font-bold text-gray-900 dark:text-white text-sm mb-2">تعليمات التحضير:</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      {selectedTest.prep}
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <button onClick={handleBookNow} className="btn-primary flex-1 py-4 text-sm">
                    احجز الآن
                  </button>
                  <a href={`https://wa.me/201223023717?text=استفسار عن تحليل: ${selectedTest.name}`} target="_blank" rel="noreferrer" className="btn-outline flex-1 py-4 text-sm text-center">
                    استفسر
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}