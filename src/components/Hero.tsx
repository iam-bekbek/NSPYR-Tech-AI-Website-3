import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  ShieldCheck, 
  Users, 
  Wrench, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  Sparkles, 
  Search, 
  MapPin, 
  Zap, 
  Building,
  Briefcase
} from 'lucide-react';
import { SERVICES_DATA } from '../data/servicesData';
import { TradeCategory } from '../types';

export const Hero: React.FC = () => {
  const { navigateTo, openBookingModal } = useApp();
  const [selectedQuickTrade, setSelectedQuickTrade] = useState<TradeCategory>('ac-hvac');
  const [quickLocation, setQuickLocation] = useState('Al Barsha, Dubai');

  const handleQuickBook = () => {
    navigateTo('book');
  };

  return (
    <section className="relative bg-[#1a1a1a] text-white py-12 px-6 sm:px-12 overflow-hidden border-b-4 border-[#a7f3d0]">
      {/* Background Accent Geometry */}
      <div className="absolute right-[-20px] top-[-20px] opacity-20 pointer-events-none">
        <div className="w-96 h-96 border-[40px] border-[#bae6fd] rounded-full"></div>
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(#262626_1px,transparent_1px)] [background-size:20px_20px] opacity-60 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Main Headline & Context (8 Columns) */}
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center space-x-2 px-2.5 py-1 rounded bg-[#262626] border border-[#a7f3d0]/30 text-[10px] uppercase tracking-[0.2em] font-bold text-[#a7f3d0]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#a7f3d0] animate-pulse"></span>
              <span>Dubai DED Licensed • Commercial Technical Services</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-none tracking-tight">
              Technical Excellence <br className="hidden sm:inline" />
              <span className="text-[#a7f3d0]">Across Every Trade.</span>
            </h1>

            <p className="text-slate-400 text-xs sm:text-sm max-w-xl leading-relaxed">
              Dubai's premier technical services partner for Corporate, Hospitality, and Medical sectors. Certified maintenance and installation experts at your door across 10 specialized disciplines.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <button
                id="hero-cta-clients"
                onClick={() => navigateTo('book')}
                className="bg-[#a7f3d0] text-[#1a1a1a] px-5 sm:px-6 py-2.5 rounded font-extrabold text-xs uppercase tracking-wider shadow-lg hover:bg-white transition-all cursor-pointer flex items-center space-x-2"
              >
                <span>Hire Technicians</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                id="hero-cta-workers"
                onClick={() => navigateTo('register-staff')}
                className="border border-[#bae6fd] text-[#bae6fd] hover:bg-[#bae6fd]/10 px-5 sm:px-6 py-2.5 rounded font-bold text-xs uppercase tracking-wider transition-all cursor-pointer flex items-center space-x-2"
              >
                <span>Join Our Team</span>
              </button>

              <button
                onClick={() => navigateTo('staff')}
                className="bg-[#262626] border border-slate-700 text-slate-300 hover:text-white px-4 py-2.5 rounded text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer"
              >
                Browse Directory
              </button>
            </div>
          </div>

          {/* High Density Metric Cards (4 Columns) */}
          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
            
            <div className="bg-[#262626] p-3.5 rounded border border-slate-700 flex-1 shadow-sm">
              <div className="text-[#a7f3d0] text-2xl font-black leading-none">2,400+</div>
              <div className="text-[10px] text-slate-400 uppercase tracking-widest mt-1 font-semibold">
                Projects Completed
              </div>
              <div className="text-[10px] text-slate-500 mt-0.5">Commercial &amp; hospitality contracts</div>
            </div>

            <div className="bg-[#262626] p-3.5 rounded border border-slate-700 flex-1 shadow-sm">
              <div className="text-[#bae6fd] text-2xl font-black leading-none">450+</div>
              <div className="text-[10px] text-slate-400 uppercase tracking-widest mt-1 font-semibold">
                Verified Staff
              </div>
              <div className="text-[10px] text-slate-500 mt-0.5">Biometric Emirates ID authenticated</div>
            </div>

            <div className="bg-[#262626] p-3.5 rounded border border-slate-700 flex-1 shadow-sm">
              <div className="text-white text-2xl font-black leading-none">24/7</div>
              <div className="text-[10px] text-slate-400 uppercase tracking-widest mt-1 font-semibold">
                Emergency Support
              </div>
              <div className="text-[10px] text-emerald-400 mt-0.5">2-hour maximum dispatch SLA</div>
            </div>

          </div>

        </div>

        {/* High Density Trade Quick Dispatch Strip */}
        <div className="mt-8 bg-[#262626] p-3.5 rounded border border-slate-700 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
            
            <div className="md:col-span-5">
              <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                Quick Trade Selector:
              </label>
              <select
                value={selectedQuickTrade}
                onChange={(e: any) => setSelectedQuickTrade(e.target.value)}
                className="w-full bg-[#1a1a1a] border border-slate-700 rounded px-3 py-2 text-xs text-white font-medium focus:ring-1 focus:ring-[#a7f3d0] outline-hidden"
              >
                {SERVICES_DATA.map((srv) => (
                  <option key={srv.id} value={srv.id}>
                    {srv.shortTitle} (AED {srv.startingRateAED}/hr)
                  </option>
                ))}
              </select>
            </div>

            <div className="md:col-span-4">
              <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                Dubai Zone:
              </label>
              <select
                value={quickLocation}
                onChange={(e) => setQuickLocation(e.target.value)}
                className="w-full bg-[#1a1a1a] border border-slate-700 rounded px-3 py-2 text-xs text-white font-medium focus:ring-1 focus:ring-[#a7f3d0] outline-hidden"
              >
                <option value="Al Barsha, Dubai">Al Barsha, Dubai (Near Head Office)</option>
                <option value="Downtown Dubai / DIFC">Downtown Dubai / DIFC</option>
                <option value="Dubai Marina / JBR">Dubai Marina / JBR</option>
                <option value="Palm Jumeirah">Palm Jumeirah</option>
                <option value="Business Bay">Business Bay</option>
                <option value="Dubai Healthcare City">Dubai Healthcare City</option>
              </select>
            </div>

            <div className="md:col-span-3 md:self-end">
              <button
                onClick={handleQuickBook}
                className="w-full bg-[#bae6fd] hover:bg-white text-[#1a1a1a] font-extrabold px-3 py-2 rounded text-xs uppercase tracking-wider transition-all flex items-center justify-center space-x-1 cursor-pointer"
              >
                <span>Instant Quote</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

