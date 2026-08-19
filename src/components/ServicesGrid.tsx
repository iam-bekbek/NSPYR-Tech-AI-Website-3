import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { SERVICES_DATA } from '../data/servicesData';
import { ServiceItem, TradeCategory } from '../types';
import { 
  Wind, 
  Zap, 
  Layers, 
  Hammer, 
  Grid, 
  Paintbrush, 
  Waves, 
  Sparkles, 
  ShieldCheck, 
  Feather,
  Wrench,
  ArrowRight,
  CheckCircle2,
  Users,
  Clock,
  ChevronRight
} from 'lucide-react';

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Wind,
  Zap,
  Layers,
  Hammer,
  Grid,
  Paintbrush,
  Waves,
  Sparkles,
  ShieldCheck,
  Feather
};

// 2-letter codes for High Density matrix
const tradeCodes: Record<string, string> = {
  'ac-hvac': 'AC',
  'electrical': 'EL',
  'false-ceiling': 'CE',
  'carpentry-flooring': 'CA',
  'tiling': 'TI',
  'painting': 'PA',
  'swimming-pools': 'SW',
  'plaster-wallpaper': 'PW',
  'cleaning': 'CL',
  'engraving-ornamentation': 'EN'
};

export const ServicesGrid: React.FC = () => {
  const { openServiceModal, openBookingModal, navigateTo } = useApp();
  const [filterCategory, setFilterCategory] = useState<'all' | 'mep' | 'fitout' | 'specialized'>('all');

  const filteredServices = SERVICES_DATA.filter((s) => {
    if (filterCategory === 'mep') return ['ac-hvac', 'electrical', 'swimming-pools'].includes(s.id);
    if (filterCategory === 'fitout') return ['false-ceiling', 'carpentry-flooring', 'tiling', 'plaster-wallpaper', 'painting'].includes(s.id);
    if (filterCategory === 'specialized') return ['cleaning', 'engraving-ornamentation', 'swimming-pools'].includes(s.id);
    return true;
  });

  return (
    <section id="services-section" className="py-10 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* High Density Directory Header */}
        <div className="flex justify-between items-end mb-4">
          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
              Service Directory
            </h2>
            <div className="text-lg font-black text-slate-900 tracking-tight">
              10 Core Technical Disciplines
            </div>
          </div>
          <span className="text-[11px] text-sky-600 font-bold uppercase tracking-wider">
            10 specialized units • Dubai Municipality Approved
          </span>
        </div>

        {/* High Density 5-Column Trade Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-6">
          {SERVICES_DATA.map((srv) => {
            const code = tradeCodes[srv.id] || 'TS';
            return (
              <div
                key={srv.id}
                onClick={() => openServiceModal(srv)}
                className="bg-white p-3 rounded border border-slate-200 flex flex-col items-center text-center justify-center gap-2 hover:border-[#a7f3d0] hover:shadow-xs transition-all cursor-pointer group"
              >
                <div className="w-8 h-8 bg-slate-100 group-hover:bg-[#a7f3d0] group-hover:text-[#1a1a1a] rounded flex items-center justify-center text-slate-700 font-extrabold text-xs transition-colors">
                  {code}
                </div>
                <div className="text-[11px] font-bold leading-tight text-slate-900 group-hover:text-teal-700 transition-colors">
                  {srv.shortTitle}
                </div>
                <div className="text-[9px] text-slate-400 font-mono">
                  AED {srv.startingRateAED}/hr
                </div>
              </div>
            );
          })}
        </div>

        {/* Certified Compliance Bar */}
        <div className="bg-[#1a1a1a] p-4 rounded flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div className="flex flex-col">
            <span className="text-[#a7f3d0] text-[10px] font-bold uppercase tracking-widest mb-0.5">
              Certified Compliance &amp; Engineering Codes
            </span>
            <span className="text-white text-xs sm:text-sm font-medium">
              Fully licensed by Dubai Economic Dept (DED) • DEWA Certified • Civil Defence Approved
            </span>
          </div>
          <div className="flex gap-2">
            <div className="w-8 h-8 border border-white/20 rounded flex items-center justify-center text-[9px] font-extrabold text-white">
              DED
            </div>
            <div className="w-8 h-8 border border-white/20 rounded flex items-center justify-center text-[9px] font-extrabold text-white">
              ISO
            </div>
            <div className="w-8 h-8 border border-white/20 rounded flex items-center justify-center text-[9px] font-extrabold text-white">
              HSE
            </div>
            <div className="w-8 h-8 border border-[#a7f3d0]/40 text-[#a7f3d0] rounded flex items-center justify-center text-[9px] font-extrabold">
              DEWA
            </div>
          </div>
        </div>

        {/* Detailed Service Cards Grid with Filters */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <h3 className="text-sm font-black uppercase tracking-wider text-slate-700">
            Scope Specifications &amp; Project Rates
          </h3>

          <div className="flex flex-wrap items-center gap-1.5 bg-white p-1 rounded border border-slate-200">
            <button
              onClick={() => setFilterCategory('all')}
              className={`px-3 py-1 rounded text-xs font-bold transition-all cursor-pointer ${
                filterCategory === 'all'
                  ? 'bg-[#1a1a1a] text-white'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              All 10
            </button>
            <button
              onClick={() => setFilterCategory('mep')}
              className={`px-3 py-1 rounded text-xs font-bold transition-all cursor-pointer ${
                filterCategory === 'mep'
                  ? 'bg-teal-700 text-white'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              MEP &amp; HVAC
            </button>
            <button
              onClick={() => setFilterCategory('fitout')}
              className={`px-3 py-1 rounded text-xs font-bold transition-all cursor-pointer ${
                filterCategory === 'fitout'
                  ? 'bg-sky-700 text-white'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              Fitout &amp; Finishes
            </button>
            <button
              onClick={() => setFilterCategory('specialized')}
              className={`px-3 py-1 rounded text-xs font-bold transition-all cursor-pointer ${
                filterCategory === 'specialized'
                  ? 'bg-amber-700 text-white'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              Specialized
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredServices.map((service, index) => {
            const IconComponent = iconMap[service.iconName] || Wrench;

            return (
              <div
                key={service.id}
                id={`service-card-${service.id}`}
                className="bg-white rounded border border-slate-200 hover:border-[#a7f3d0] transition-all flex flex-col justify-between overflow-hidden shadow-xs hover:shadow-sm"
              >
                <div>
                  <div className="relative h-36 w-full overflow-hidden bg-slate-900">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                    
                    <div className="absolute top-2.5 left-2.5 bg-[#1a1a1a] text-white px-2 py-0.5 rounded text-[10px] font-mono font-bold border border-slate-700">
                      0{index + 1}
                    </div>

                    <div className="absolute top-2.5 right-2.5 flex items-center gap-1">
                      <span className="bg-[#a7f3d0] text-[#1a1a1a] px-2 py-0.5 rounded text-[10px] font-black shadow-xs">
                        From AED {service.startingRateAED}/hr
                      </span>
                    </div>

                    <div className="absolute bottom-2.5 left-3 w-7 h-7 rounded bg-white flex items-center justify-center text-teal-700 shadow-sm border border-slate-200">
                      <IconComponent className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  <div className="p-3.5">
                    <h4 className="text-xs font-bold text-slate-900 leading-snug line-clamp-1 mb-1">
                      {service.title}
                    </h4>
                    <p className="text-slate-600 text-[11px] line-clamp-2 leading-relaxed mb-2.5">
                      {service.description}
                    </p>

                    <div className="space-y-1 border-t border-slate-100 pt-2 mb-2">
                      {service.fullScope.slice(0, 2).map((item, idx) => (
                        <div key={idx} className="flex items-start space-x-1.5 text-[10px] text-slate-600">
                          <CheckCircle2 className="w-3 h-3 text-teal-600 shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="px-3.5 py-2.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[10px] font-bold text-slate-500">
                    {service.techniciansAvailable} Staff Active
                  </span>

                  <div className="flex items-center space-x-1.5">
                    <button
                      onClick={() => openServiceModal(service)}
                      className="px-2.5 py-1 rounded text-[10px] font-bold text-slate-700 bg-white hover:bg-slate-100 border border-slate-200 cursor-pointer"
                    >
                      Specs
                    </button>
                    <button
                      onClick={() => openBookingModal()}
                      className="px-2.5 py-1 rounded text-[10px] font-bold text-[#1a1a1a] bg-[#a7f3d0] hover:bg-white hover:border-[#a7f3d0] border border-transparent transition-colors cursor-pointer"
                    >
                      Book
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

