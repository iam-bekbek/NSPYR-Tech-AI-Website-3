import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { INDUSTRIES_DATA } from '../data/industriesData';
import { IndustryItem, IndustryType } from '../types';
import { 
  Building2, 
  HeartPulse, 
  GraduationCap, 
  Dumbbell, 
  Sparkles, 
  Briefcase, 
  CheckCircle2, 
  ShieldCheck, 
  ArrowRight,
  ChevronRight
} from 'lucide-react';

const industryIcons: Record<IndustryType, React.FC<{ className?: string }>> = {
  hospitality: Building2,
  medical: HeartPulse,
  education: GraduationCap,
  fitness: Dumbbell,
  events: Sparkles,
  corporate: Briefcase
};

export const IndustriesSection: React.FC = () => {
  const { navigateTo } = useApp();
  const [activeTab, setActiveTab] = useState<IndustryType>('hospitality');

  const selectedIndustry = INDUSTRIES_DATA.find((ind) => ind.id === activeTab) || INDUSTRIES_DATA[0];
  const IconComponent = industryIcons[selectedIndustry.id] || Building2;

  return (
    <section id="industries-section" className="py-20 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-bold uppercase tracking-wider mb-3">
            <span>Specialized UAE Sector Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Target Industries Served
          </h2>
          <p className="text-slate-400 text-base mt-2">
            Tailored engineering workflows, night-shift maintenance, and regulatory compliance built specifically for high-demand Dubai commercial sectors.
          </p>
        </div>

        {/* Badge Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {INDUSTRIES_DATA.map((ind) => {
            const TabIcon = industryIcons[ind.id];
            const isActive = ind.id === activeTab;

            return (
              <button
                key={ind.id}
                onClick={() => setActiveTab(ind.id)}
                className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-teal-500 text-slate-950 shadow-lg shadow-teal-500/20 scale-105'
                    : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-700'
                }`}
              >
                <TabIcon className={`w-4 h-4 ${isActive ? 'text-slate-950' : 'text-teal-400'}`} />
                <span>{ind.name.split('&')[0].trim()}</span>
              </button>
            );
          })}
        </div>

        {/* Active Industry Showcase Card */}
        <div className="bg-slate-950 rounded-3xl border border-slate-800 overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Content Area */}
            <div className="p-6 sm:p-10 lg:col-span-7 flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-teal-500/20 border border-teal-500/40 flex items-center justify-center text-teal-400">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-white">{selectedIndustry.name}</h3>
                    <span className="text-xs font-semibold text-teal-400">{selectedIndustry.stats}</span>
                  </div>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed mb-6 font-medium">
                  {selectedIndustry.description}
                </p>

                {/* Clients Types Chips */}
                <div className="mb-6">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">
                    Key Client Environments in UAE:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {selectedIndustry.clientTypes.map((client, idx) => (
                      <span key={idx} className="bg-slate-900 px-3 py-1 rounded-lg text-xs text-slate-300 border border-slate-800">
                        {client}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Challenges & Nspyr Solutions */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-800">
                  <div className="p-3.5 rounded-xl bg-rose-950/20 border border-rose-900/30">
                    <span className="text-xs font-bold text-rose-400 uppercase tracking-wider block mb-2">
                      Sector Critical Challenges:
                    </span>
                    <ul className="space-y-1.5 text-xs text-slate-400">
                      {selectedIndustry.keyChallenges.map((ch, idx) => (
                        <li key={idx} className="flex items-start space-x-1.5">
                          <span className="text-rose-500 font-bold">•</span>
                          <span>{ch}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-3.5 rounded-xl bg-teal-950/30 border border-teal-900/40">
                    <span className="text-xs font-bold text-teal-400 uppercase tracking-wider block mb-2">
                      Nspyr Technical Solutions:
                    </span>
                    <ul className="space-y-1.5 text-xs text-slate-300">
                      {selectedIndustry.nspyrSolutions.map((sol, idx) => (
                        <li key={idx} className="flex items-start space-x-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 mt-0.5 shrink-0" />
                          <span>{sol}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Compliance & Action */}
              <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-start space-x-2 text-xs text-slate-400">
                  <ShieldCheck className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <span><strong>UAE Standard:</strong> {selectedIndustry.complianceNotes}</span>
                </div>

                <button
                  onClick={() => navigateTo('book')}
                  className="w-full sm:w-auto px-5 py-2.5 bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs rounded-xl transition-all shadow-md flex items-center justify-center space-x-1.5 shrink-0 cursor-pointer"
                >
                  <span>Book {selectedIndustry.name.split('&')[0]} Team</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Photo & Stat Overlay */}
            <div className="relative min-h-[300px] lg:min-h-full lg:col-span-5 bg-slate-900">
              <img
                src={selectedIndustry.image}
                alt={selectedIndustry.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent lg:bg-gradient-to-r lg:from-slate-950 lg:via-transparent lg:to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-slate-950/90 backdrop-blur-md border border-slate-800 text-xs">
                <span className="font-bold text-teal-400 block mb-1">Dubai SLA Guarantee</span>
                <p className="text-slate-300">
                  All work delivered with digital thermography logs, DEWA test stamps, and 100% compliant handover documentation.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
