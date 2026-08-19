import React from 'react';
import { useApp } from '../context/AppContext';
import { 
  ShieldCheck, 
  Award, 
  FileCheck2, 
  HardHat, 
  CheckCircle2, 
  Building, 
  Lock, 
  Clock, 
  Zap,
  PhoneCall,
  Sparkles
} from 'lucide-react';

export const TrustCompliance: React.FC = () => {
  const { navigateTo } = useApp();

  return (
    <section id="compliance-section" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-4 h-4 text-emerald-700" />
            <span>Dubai Regulatory Authority Alignment</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Trust, Licensing &amp; Safety Assurance
          </h2>
          <p className="text-slate-600 text-base mt-2">
            Nspyr Technical Services L.L.C adheres strictly to the legal and technical codes mandated across the United Arab Emirates.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Pillar 1 */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-lg transition-all">
            <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center mb-4 border border-teal-200">
              <FileCheck2 className="w-6 h-6" />
            </div>
            <h4 className="text-base font-bold text-slate-900 mb-2">Dubai DED Licensing</h4>
            <p className="text-xs text-slate-600 leading-relaxed mb-3">
              Legally incorporated under the Dubai Department of Economy and Tourism (DET) with approved technical trade activity codes.
            </p>
            <div className="pt-2 border-t border-slate-100 text-[11px] text-teal-800 font-semibold flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Commercial License #02-AlBarsha</span>
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-lg transition-all">
            <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-700 flex items-center justify-center mb-4 border border-sky-200">
              <HardHat className="w-6 h-6" />
            </div>
            <h4 className="text-base font-bold text-slate-900 mb-2">OSHAD &amp; Civil Defence</h4>
            <p className="text-xs text-slate-600 leading-relaxed mb-3">
              Strict compliance with Occupational Safety and Health Abu Dhabi (OSHAD) and Dubai Civil Defence fire-stopping protocols.
            </p>
            <div className="pt-2 border-t border-slate-100 text-[11px] text-sky-800 font-semibold flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Full PPE &amp; Risk Assessments</span>
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-lg transition-all">
            <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-700 flex items-center justify-center mb-4 border border-indigo-200">
              <Lock className="w-6 h-6" />
            </div>
            <h4 className="text-base font-bold text-slate-900 mb-2">Biometric Verification</h4>
            <p className="text-xs text-slate-600 leading-relaxed mb-3">
              100% of technicians carry authenticated Emirates IDs, background criminal checks, and active medical fitness cards.
            </p>
            <div className="pt-2 border-t border-slate-100 text-[11px] text-indigo-800 font-semibold flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Zero Visa Non-Compliance</span>
            </div>
          </div>

          {/* Pillar 4 */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-lg transition-all">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center mb-4 border border-amber-200">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h4 className="text-base font-bold text-slate-900 mb-2">Liability Coverage</h4>
            <p className="text-xs text-slate-600 leading-relaxed mb-3">
              Comprehensive Workmen's Compensation and AED 5,000,000 Third-Party Contractors All-Risk (CAR) Insurance.
            </p>
            <div className="pt-2 border-t border-slate-100 text-[11px] text-amber-800 font-semibold flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Fully Indemnified Operations</span>
            </div>
          </div>

        </div>

        {/* Location & Office Callout */}
        <div className="mt-12 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-4">
            <div className="w-14 h-14 rounded-2xl bg-slate-900 text-teal-400 flex items-center justify-center font-black text-2xl shrink-0 shadow-md">
              <Building className="w-7 h-7" />
            </div>
            <div>
              <span className="text-xs font-bold text-teal-700 uppercase tracking-wider">
                Physical Office &amp; Verification Center
              </span>
              <h4 className="text-lg font-bold text-slate-900 mt-0.5">
                DAMAC Smart Heights, Level 22, Office #02, Al Barsha, Dubai
              </h4>
              <p className="text-xs text-slate-500 mt-0.5">
                Clients and technicians are welcome for in-person contract signing, trade assessments, and project consultations.
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-3 shrink-0">
            <a
              href="tel:+971044513517"
              className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs flex items-center space-x-2 transition-colors"
            >
              <PhoneCall className="w-4 h-4 text-teal-600" />
              <span>+971 04 451 3517</span>
            </a>
            <button
              onClick={() => navigateTo('book')}
              className="px-5 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs shadow-sm transition-colors cursor-pointer"
            >
              Book Project
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
