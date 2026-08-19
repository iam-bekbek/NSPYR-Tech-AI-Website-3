import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { SERVICES_DATA } from '../data/servicesData';
import { 
  Wrench, 
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
  CheckCircle2,
  Users,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Clock,
  PhoneCall
} from 'lucide-react';
import { ServiceItem } from '../types';

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

export const ServicesPage: React.FC = () => {
  const { openServiceModal, openBookingModal, navigateTo } = useApp();
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedServiceId, setExpandedServiceId] = useState<string | null>(null);

  const filtered = SERVICES_DATA.filter((s) => 
    s.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    s.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    s.fullScope.some((sc) => sc.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const toggleExpand = (id: string) => {
    setExpandedServiceId(expandedServiceId === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 mb-12 shadow-xl border border-slate-800">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-bold uppercase tracking-wider mb-3 border border-teal-500/30">
              Dubai Economy &amp; Tourism Licensed Trades
            </span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              10 Specialized Technical Services
            </h1>
            <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
              Explore the engineering scopes, UAE municipal regulatory compliance standards, and hourly technician rates for each of our 10 commercial disciplines.
            </p>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
            <div className="w-full sm:max-w-md">
              <input
                type="text"
                placeholder="Search services, scopes (e.g. Chiller, DEWA, Parquet, Marble)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-hidden"
              />
            </div>
            <button
              onClick={() => navigateTo('book')}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-sm transition-all shadow-md cursor-pointer flex items-center justify-center space-x-2"
            >
              <span>Request Custom Scope Estimate</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Services List */}
        <div className="space-y-6">
          {filtered.map((service, index) => {
            const IconComponent = iconMap[service.iconName] || Wrench;
            const isExpanded = expandedServiceId === service.id;

            return (
              <div
                key={service.id}
                id={`service-detail-${service.id}`}
                className="bg-white rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-all overflow-hidden"
              >
                <div className="p-6 sm:p-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
                  
                  {/* Image & Main Info */}
                  <div className="flex items-start space-x-5 flex-1">
                    <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden shrink-0 bg-slate-900 border border-slate-200">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-slate-950/20"></div>
                      <div className="absolute top-1.5 left-1.5 bg-slate-900/90 text-teal-400 px-1.5 py-0.5 rounded text-[10px] font-mono font-bold">
                        0{index + 1}
                      </div>
                    </div>

                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-xs font-bold px-2 py-0.5 rounded bg-teal-50 text-teal-800 border border-teal-200">
                          {service.shortTitle}
                        </span>
                        {service.emergencyAvailable && (
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-rose-50 text-rose-700 border border-rose-200">
                            24/7 Emergency Available
                          </span>
                        )}
                      </div>

                      <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                        {service.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-3xl">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Rates, Staff & Actions */}
                  <div className="flex flex-wrap sm:flex-nowrap items-center gap-4 w-full lg:w-auto justify-between lg:justify-end border-t lg:border-t-0 pt-4 lg:pt-0 border-slate-100">
                    <div className="text-left lg:text-right">
                      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Starting Rate</span>
                      <span className="text-lg font-black text-slate-900">AED {service.startingRateAED}</span>
                      <span className="text-xs text-slate-500"> / hr</span>
                      <div className="text-[11px] text-teal-700 font-semibold mt-0.5">
                        {service.techniciansAvailable} technicians ready
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => toggleExpand(service.id)}
                        className="px-3.5 py-2 rounded-xl text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors flex items-center space-x-1 cursor-pointer"
                      >
                        <span>{isExpanded ? 'Hide Scope' : 'View Full Scope'}</span>
                        {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                      </button>

                      <button
                        onClick={() => openBookingModal()}
                        className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-teal-600 hover:bg-teal-700 shadow-sm transition-all flex items-center space-x-1 cursor-pointer"
                      >
                        <span>Book</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                </div>

                {/* Expanded Scope Details */}
                {isExpanded && (
                  <div className="bg-slate-50/80 p-6 sm:p-8 border-t border-slate-200 animate-in slide-in-from-top-2 duration-200">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      
                      {/* Full Scope */}
                      <div className="lg:col-span-2 space-y-3">
                        <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                          <CheckCircle2 className="w-4 h-4 text-teal-600" />
                          <span>Detailed Scope of Works</span>
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {service.fullScope.map((item, idx) => (
                            <div key={idx} className="p-2.5 rounded-lg bg-white border border-slate-200 text-xs text-slate-700 flex items-start space-x-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-1.5 shrink-0"></span>
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Standards & Deliverables */}
                      <div className="space-y-4">
                        <div className="p-4 rounded-xl bg-white border border-slate-200">
                          <h5 className="text-xs font-bold text-teal-900 uppercase tracking-wider mb-2">
                            Key Deliverables
                          </h5>
                          <ul className="space-y-1.5 text-xs text-slate-600">
                            {service.keyDeliverables.map((deliv, idx) => (
                              <li key={idx} className="flex items-start space-x-1.5">
                                <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 mt-0.5 shrink-0" />
                                <span>{deliv}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="p-3.5 rounded-xl bg-sky-50 border border-sky-200 text-xs text-sky-900">
                          <span className="font-bold block mb-1">UAE Compliance:</span>
                          <p>{service.uaeStandards}</p>
                        </div>
                      </div>

                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Emergency Assistance Footer */}
        <div className="mt-12 text-center p-8 bg-slate-900 rounded-3xl text-white">
          <h3 className="text-2xl font-bold mb-2">Need Immediate Emergency MEP or Leak Containment?</h3>
          <p className="text-slate-300 text-sm max-w-xl mx-auto mb-6">
            Our Dubai rapid response dispatch center operates 24 hours a day, 7 days a week with a 2-hour maximum SLA.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="tel:+971044513517"
              className="px-6 py-3 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-sm shadow-md flex items-center space-x-2"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Call +971 04 451 3517</span>
            </a>
            <button
              onClick={() => navigateTo('book')}
              className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm border border-slate-700 cursor-pointer"
            >
              Schedule Inspection Visit
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
