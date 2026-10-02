import React, { createContext, useContext, useState, useCallback } from 'react';
import { CheckCircle } from 'lucide-react';

const ToastContext = createContext();

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const addToast = useCallback((message) => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, message }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 3000);
  }, []);

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      {/* Toast Container */}
      <div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-[100] flex flex-col gap-3 pointer-events-none w-max">
        {toasts.map(t => (
          <div key={t.id} className="animate-fade-up bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-3">
            <CheckCircle className="w-5 h-5 text-green-400 dark:text-green-600" />
            <span className="text-sm font-bold">{t.message}</span>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export const useToast = () => useContext(ToastContext);