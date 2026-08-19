import React from 'react';
import { useApp } from '../context/AppContext';
import { 
  Wrench, 
  MapPin, 
  Phone, 
  Mail, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowUpRight,
  ExternalLink,
  Award,
  Sparkles
} from 'lucide-react';
import { SERVICES_DATA } from '../data/servicesData';

export const Footer: React.FC = () => {
  const { navigateTo } = useApp();

  return (
    <footer id="site-footer" className="bg-[#1a1a1a] text-slate-300 border-t border-slate-700">
      {/* Top High Density Links Matrix */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {/* Company Bio */}
          <div className="lg:col-span-2 space-y-3">
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded bg-[#a7f3d0] flex items-center justify-center text-[#1a1a1a] font-extrabold text-base shadow-xs">
                N
              </div>
              <div>
                <span className="text-lg font-extrabold tracking-tight text-white">Nspyr <span className="text-[#bae6fd]">Technical</span></span>
                <p className="text-[10px] font-semibold text-[#a7f3d0] uppercase tracking-wider">Services L.L.C • Dubai</p>
              </div>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Dubai's premier commercial technical services partner for Corporate, Hospitality, Healthcare, and Residential sectors across 10 certified engineering disciplines.
            </p>

            <div className="pt-1 space-y-1.5 text-xs text-slate-300">
              <div className="flex items-start space-x-2">
                <MapPin className="w-3.5 h-3.5 text-[#a7f3d0] shrink-0 mt-0.5" />
                <span className="text-[11px] text-slate-400">DAMAC Smart Heights, Level 22, Office #02, Al Barsha, Dubai</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-3.5 h-3.5 text-[#a7f3d0] shrink-0" />
                <a href="tel:+971044513517" className="hover:text-white font-mono text-[11px]">+971 04 451 3517</a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-3.5 h-3.5 text-[#a7f3d0] shrink-0" />
                <a href="mailto:sales@nspyrtech.com" className="hover:text-white text-[11px]">sales@nspyrtech.com</a>
              </div>
            </div>
          </div>

          {/* 10 Services Column 1 */}
          <div>
            <h4 className="text-[#a7f3d0] font-bold text-xs tracking-wider uppercase mb-2.5">
              MEP &amp; HVAC
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li>
                <button 
                  onClick={() => navigateTo('services')} 
                  className="hover:text-white transition-colors text-left flex items-center group cursor-pointer text-[11px]"
                >
                  <span className="w-1 h-1 rounded-full bg-slate-600 group-hover:bg-[#a7f3d0] mr-1.5"></span>
                  AC &amp; Ventilation
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateTo('services')} 
                  className="hover:text-white transition-colors text-left flex items-center group cursor-pointer text-[11px]"
                >
                  <span className="w-1 h-1 rounded-full bg-slate-600 group-hover:bg-[#a7f3d0] mr-1.5"></span>
                  Electrical Fittings &amp; Repair
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateTo('services')} 
                  className="hover:text-white transition-colors text-left flex items-center group cursor-pointer text-[11px]"
                >
                  <span className="w-1 h-1 rounded-full bg-slate-600 group-hover:bg-[#a7f3d0] mr-1.5"></span>
                  Swimming Pool Installation
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateTo('services')} 
                  className="hover:text-white transition-colors text-left flex items-center group cursor-pointer text-[11px]"
                >
                  <span className="w-1 h-1 rounded-full bg-slate-600 group-hover:bg-[#a7f3d0] mr-1.5"></span>
                  Building Cleaning Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateTo('services')} 
                  className="hover:text-white transition-colors text-left flex items-center group cursor-pointer text-[11px]"
                >
                  <span className="w-1 h-1 rounded-full bg-slate-600 group-hover:bg-[#a7f3d0] mr-1.5"></span>
                  Painting Contracting
                </button>
              </li>
            </ul>
          </div>

          {/* 10 Services Column 2 */}
          <div>
            <h4 className="text-[#bae6fd] font-bold text-xs tracking-wider uppercase mb-2.5">
              Fitout &amp; Finishes
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li>
                <button 
                  onClick={() => navigateTo('services')} 
                  className="hover:text-white transition-colors text-left flex items-center group cursor-pointer text-[11px]"
                >
                  <span className="w-1 h-1 rounded-full bg-slate-600 group-hover:bg-[#bae6fd] mr-1.5"></span>
                  False Ceiling &amp; Partitions
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateTo('services')} 
                  className="hover:text-white transition-colors text-left flex items-center group cursor-pointer text-[11px]"
                >
                  <span className="w-1 h-1 rounded-full bg-slate-600 group-hover:bg-[#bae6fd] mr-1.5"></span>
                  Carpentry &amp; Wood Flooring
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateTo('services')} 
                  className="hover:text-white transition-colors text-left flex items-center group cursor-pointer text-[11px]"
                >
                  <span className="w-1 h-1 rounded-full bg-slate-600 group-hover:bg-[#bae6fd] mr-1.5"></span>
                  Floor &amp; Wall Tiling Works
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateTo('services')} 
                  className="hover:text-white transition-colors text-left flex items-center group cursor-pointer text-[11px]"
                >
                  <span className="w-1 h-1 rounded-full bg-slate-600 group-hover:bg-[#bae6fd] mr-1.5"></span>
                  Plaster &amp; Wallpaper Fixing
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateTo('services')} 
                  className="hover:text-white transition-colors text-left flex items-center group cursor-pointer text-[11px]"
                >
                  <span className="w-1 h-1 rounded-full bg-slate-600 group-hover:bg-[#bae6fd] mr-1.5"></span>
                  Engraving &amp; Ornamentation
                </button>
              </li>
            </ul>
          </div>

          {/* Portals & Operations */}
          <div>
            <h4 className="text-white font-bold text-xs tracking-wider uppercase mb-2.5">
              Portals
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li>
                <button 
                  onClick={() => navigateTo('book')} 
                  className="hover:text-[#a7f3d0] transition-colors flex items-center space-x-1 cursor-pointer font-bold text-white text-[11px]"
                >
                  <span>Hire / Request Quote</span>
                  <ArrowUpRight className="w-3 h-3 text-[#a7f3d0]" />
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateTo('staff')} 
                  className="hover:text-[#a7f3d0] transition-colors flex items-center space-x-1 cursor-pointer text-[11px]"
                >
                  <span>Staff Directory</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateTo('register-staff')} 
                  className="hover:text-[#a7f3d0] transition-colors flex items-center space-x-1 cursor-pointer text-[11px]"
                >
                  <span>Technician Onboarding</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateTo('admin')} 
                  className="hover:text-[#bae6fd] transition-colors flex items-center space-x-1 cursor-pointer text-[11px]"
                >
                  <span>Admin Portal</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateTo('deploy-guide')} 
                  className="hover:text-[#bae6fd] transition-colors flex items-center space-x-1 cursor-pointer text-[11px] text-sky-300 font-semibold"
                >
                  <span>Hostinger &amp; Git Guide</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* High Density Bottom Status Bar */}
      <div className="bg-[#262626] border-t border-slate-700 px-6 py-3">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-3">
          <div className="text-[10px] text-slate-400">
            DAMAC Smart Heights, Level 22, Office #02, Al Barsha, Dubai, UAE • © {new Date().getFullYear()} Nspyr Technical Services L.L.C
          </div>
          
          <div className="flex gap-6 items-center">
            <div className="flex flex-col text-right">
              <span className="text-[9px] text-slate-400 uppercase font-bold tracking-widest leading-tight">Operational Hours</span>
              <span className="text-[11px] font-bold text-slate-200">Sat - Thu: 08:00 - 18:00</span>
            </div>
            <div className="flex flex-col text-right">
              <span className="text-[9px] text-slate-400 uppercase font-bold tracking-widest leading-tight">Emergency Support</span>
              <span className="text-[11px] font-bold text-red-400">24/7 Available</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

