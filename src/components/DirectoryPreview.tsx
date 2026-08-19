import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  ShieldCheck, 
  Star, 
  MapPin, 
  Wrench, 
  CheckCircle2, 
  ArrowRight, 
  Clock, 
  UserCheck, 
  Calendar,
  Award,
  Filter
} from 'lucide-react';
import { TradeCategory } from '../types';
import { SERVICES_DATA } from '../data/servicesData';

export const DirectoryPreview: React.FC = () => {
  const { staffList, navigateTo, openBookingModal } = useApp();
  const [selectedTradeFilter, setSelectedTradeFilter] = useState<string>('all');

  const approvedStaff = staffList.filter((s) => s.status === 'approved');
  
  const displayedStaff = approvedStaff.filter((s) => {
    if (selectedTradeFilter === 'all') return true;
    return s.primaryTrade === selectedTradeFilter;
  });

  return (
    <section id="directory-preview-section" className="py-8 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex justify-between items-end mb-4">
          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
              Available Technicians
            </h2>
            <div className="text-lg font-black text-slate-900 tracking-tight">
              Biometric Verified Field Specialists
            </div>
          </div>

          <button
            onClick={() => navigateTo('staff')}
            className="text-[11px] font-bold text-sky-600 hover:text-sky-800 uppercase tracking-wider flex items-center gap-1 cursor-pointer"
          >
            <span>View All ({approvedStaff.length})</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>

        {/* High Density Technicians List Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {displayedStaff.slice(0, 6).map((staff) => {
            const isAvailable = staff.availability === 'Available Immediately';

            return (
              <div
                key={staff.id}
                id={`staff-item-${staff.id}`}
                className="bg-white p-3 rounded border border-slate-200 flex items-center gap-3 hover:border-[#a7f3d0] hover:shadow-xs transition-all"
              >
                <img
                  src={staff.avatar}
                  alt={staff.fullName}
                  className="w-10 h-10 rounded-full bg-slate-200 object-cover shrink-0 border border-slate-300"
                />
                
                <div className="min-w-0 flex-1">
                  <div 
                    onClick={() => navigateTo('staff-detail', { staffId: staff.id })}
                    className="text-[11px] font-bold text-slate-900 truncate hover:text-teal-700 cursor-pointer"
                  >
                    {staff.fullName}
                  </div>
                  <div className="text-[9px] text-slate-500 truncate">
                    {staff.title} • {staff.uaeExperienceYears} yrs Exp
                  </div>
                  
                  <div className="flex items-center gap-1.5 mt-1">
                    <span className={`w-2 h-2 rounded-full shrink-0 ${isAvailable ? 'bg-green-500' : 'bg-orange-400'}`}></span>
                    <span className={`text-[8px] font-bold uppercase tracking-wider ${isAvailable ? 'text-green-600' : 'text-orange-600'}`}>
                      {isAvailable ? 'AVAILABLE NOW' : 'ON SITE'}
                    </span>
                    <span className="text-[9px] text-slate-400 font-mono ml-auto">
                      AED {staff.hourlyRateAED}/hr
                    </span>
                  </div>
                </div>

                <div className="flex flex-col gap-1 shrink-0 ml-1">
                  <button
                    onClick={() => navigateTo('staff-detail', { staffId: staff.id })}
                    className="bg-slate-100 text-slate-800 text-[10px] px-2.5 py-1 rounded hover:bg-[#bae6fd] font-bold transition-colors cursor-pointer"
                  >
                    View
                  </button>
                  <button
                    onClick={() => openBookingModal(staff)}
                    className="bg-[#a7f3d0] text-[#1a1a1a] text-[10px] px-2.5 py-1 rounded hover:bg-emerald-300 font-bold transition-colors cursor-pointer"
                  >
                    Book
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Trusted By Leaders Strip */}
        <div className="mt-6 pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div>
            <span className="text-[10px] font-bold uppercase text-slate-400 block tracking-wider">
              Trusted By Leaders Across UAE Key Sectors
            </span>
          </div>

          <div className="flex flex-wrap gap-1.5">
            <span className="bg-slate-200 text-slate-700 text-[9px] px-2.5 py-1 rounded-xs font-bold uppercase">
              Hospitality
            </span>
            <span className="bg-slate-200 text-slate-700 text-[9px] px-2.5 py-1 rounded-xs font-bold uppercase">
              Medical
            </span>
            <span className="bg-slate-200 text-slate-700 text-[9px] px-2.5 py-1 rounded-xs font-bold uppercase">
              Education
            </span>
            <span className="bg-slate-200 text-slate-700 text-[9px] px-2.5 py-1 rounded-xs font-bold uppercase">
              Fitness
            </span>
            <span className="bg-slate-200 text-slate-700 text-[9px] px-2.5 py-1 rounded-xs font-bold uppercase">
              Events
            </span>
            <span className="bg-slate-200 text-slate-700 text-[9px] px-2.5 py-1 rounded-xs font-bold uppercase">
              Corporate
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};

