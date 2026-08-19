import React from 'react';
import { useApp } from '../context/AppContext';
import { 
  X, 
  CheckCircle2, 
  ShieldCheck, 
  Users, 
  Clock, 
  ArrowRight, 
  FileCheck, 
  Tag, 
  Award,
  Zap
} from 'lucide-react';

export const ServiceDetailModal: React.FC = () => {
  const { serviceModalItem, closeServiceModal, openBookingModal, navigateTo } = useApp();

  if (!serviceModalItem) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/75 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6">
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-3xl w-full border border-slate-200 overflow-hidden animate-in zoom-in-95 duration-200">
        
        {/* Banner with Image & Gradient */}
        <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-slate-900">
          <img
            src={serviceModalItem.image}
            alt={serviceModalItem.title}
            className="w-full h-full object-cover opacity-40 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent p-6 flex flex-col justify-end">
            <div className="flex items-center space-x-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-teal-500/20 text-teal-300 border border-teal-500/40">
                UAE Technical Trade
              </span>
              {serviceModalItem.emergencyAvailable && (
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-rose-500/20 text-rose-300 border border-rose-500/40 flex items-center gap-1">
                  <Zap className="w-3 h-3 text-rose-400" />
                  24/7 Emergency Dispatch
                </span>
              )}
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white leading-tight">
              {serviceModalItem.title}
            </h3>
          </div>
          <button
            onClick={closeServiceModal}
            className="absolute top-4 right-4 p-2 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors cursor-pointer border border-slate-700"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
          {/* Summary & Rates */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
            <div>
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">Starting Rate</span>
              <span className="text-xl font-black text-teal-800">AED {serviceModalItem.startingRateAED}</span>
              <span className="text-xs text-slate-500"> / hour</span>
            </div>
            <div>
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">Verified Staff</span>
              <div className="flex items-center space-x-1.5 mt-0.5">
                <Users className="w-4 h-4 text-sky-600" />
                <span className="text-base font-bold text-slate-800">{serviceModalItem.techniciansAvailable} Technicians</span>
              </div>
            </div>
            <div>
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">Compliance</span>
              <span className="text-xs font-semibold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded inline-block mt-0.5">
                Dubai Municipality & DEWA
              </span>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">Service Overview</h4>
            <p className="text-slate-600 text-sm leading-relaxed">{serviceModalItem.description}</p>
          </div>

          {/* Scope of Works */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3 flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-teal-600" />
              <span>Full Engineering Scope of Work</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {serviceModalItem.fullScope.map((scope, idx) => (
                <div key={idx} className="flex items-start space-x-2 p-2.5 rounded-lg bg-slate-50 border border-slate-200/80 text-xs text-slate-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-1.5 shrink-0"></span>
                  <span className="leading-snug">{scope}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Deliverables & Standards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-teal-50/50 border border-teal-200/70">
              <h5 className="text-xs font-bold text-teal-900 uppercase tracking-wider mb-2 flex items-center space-x-1.5">
                <Award className="w-4 h-4 text-teal-700" />
                <span>Standard Deliverables</span>
              </h5>
              <ul className="space-y-1.5 text-xs text-slate-700">
                {serviceModalItem.keyDeliverables.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-sky-50/50 border border-sky-200/70">
              <h5 className="text-xs font-bold text-sky-900 uppercase tracking-wider mb-2 flex items-center space-x-1.5">
                <ShieldCheck className="w-4 h-4 text-sky-700" />
                <span>UAE Code & Regulatory Standards</span>
              </h5>
              <p className="text-xs text-slate-700 leading-relaxed font-medium mb-3">
                {serviceModalItem.uaeStandards}
              </p>
              <div className="p-2 bg-white rounded-lg border border-sky-200 text-[11px] text-slate-600">
                All staff carry valid Emirates ID, HSE green pass, and mandatory worker insurance.
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="bg-slate-50 p-4 sm:px-8 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={() => {
              closeServiceModal();
              navigateTo('staff');
            }}
            className="text-xs font-bold text-teal-700 hover:text-teal-800 flex items-center space-x-1 cursor-pointer"
          >
            <span>Browse {serviceModalItem.techniciansAvailable} Available Technicians in this Trade</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <div className="flex items-center space-x-3">
            <button
              onClick={closeServiceModal}
              className="px-4 py-2 text-slate-600 hover:text-slate-900 text-sm font-semibold cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => {
                closeServiceModal();
                openBookingModal();
              }}
              className="px-5 py-2.5 bg-teal-600 hover:bg-teal-700 text-white rounded-lg text-sm font-bold shadow-md hover:shadow-lg transition-all cursor-pointer inline-flex items-center space-x-1.5"
            >
              <span>Book This Service Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
