import React from 'react';
import { useApp } from '../context/AppContext';
import { CheckCircle2, AlertCircle, Info, AlertTriangle, X } from 'lucide-react';

export const NotificationToast: React.FC = () => {
  const { toasts, removeToast } = useApp();

  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col space-y-2 max-w-sm w-full pointer-events-none">
      {toasts.map((toast) => {
        let Icon = CheckCircle2;
        let bgClass = 'bg-slate-900 border-teal-500/50 text-white';
        let iconColor = 'text-teal-400';

        if (toast.type === 'error') {
          Icon = AlertCircle;
          bgClass = 'bg-rose-950 border-rose-600 text-white';
          iconColor = 'text-rose-400';
        } else if (toast.type === 'warning') {
          Icon = AlertTriangle;
          bgClass = 'bg-amber-950 border-amber-600 text-white';
          iconColor = 'text-amber-400';
        } else if (toast.type === 'info') {
          Icon = Info;
          bgClass = 'bg-sky-950 border-sky-600 text-white';
          iconColor = 'text-sky-400';
        }

        return (
          <div
            key={toast.id}
            className={`pointer-events-auto p-4 rounded-xl border shadow-xl flex items-start space-x-3 transition-all transform animate-in slide-in-from-bottom-2 ${bgClass}`}
          >
            <Icon className={`w-5 h-5 ${iconColor} shrink-0 mt-0.5`} />
            <div className="flex-1 pr-2">
              <h5 className="text-sm font-bold">{toast.title}</h5>
              <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">{toast.message}</p>
            </div>
            <button
              onClick={() => removeToast(toast.id)}
              className="text-slate-400 hover:text-white transition-colors p-1"
              aria-label="Dismiss notification"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        );
      })}
    </div>
  );
};
