import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Menu, 
  X, 
  Wrench, 
  Users, 
  Calendar, 
  UserPlus, 
  ShieldAlert, 
  Layers, 
  ArrowRight,
  Server,
  Sparkles
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const { currentRoute, navigateTo, openBookingModal } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNav = (route: any) => {
    navigateTo(route);
    setMobileMenuOpen(false);
  };

  return (
    <header id="site-header" className="sticky top-0 z-40 bg-[#1a1a1a] text-white border-b border-[#a7f3d0]/20 shadow-md">
      {/* Top High-Density Info & Navigation Bar */}
      <div className="py-2.5 px-4 sm:px-6 flex justify-between items-center max-w-7xl mx-auto">
        
        {/* Brand Logo */}
        <div 
          id="brand-logo"
          onClick={() => handleNav('home')} 
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="bg-[#a7f3d0] w-8 h-8 rounded flex items-center justify-center font-extrabold text-[#1a1a1a] text-base group-hover:scale-105 transition-transform shadow-xs">
            N
          </div>
          <div className="flex flex-col">
            <span className="text-base sm:text-lg font-extrabold tracking-tight text-white leading-none">
              Nspyr <span className="text-[#bae6fd]">Technical</span>
            </span>
            <span className="text-[9px] uppercase tracking-[0.2em] text-slate-400 font-semibold leading-tight mt-0.5">
              Services L.L.C • Dubai
            </span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav id="desktop-nav" className="hidden lg:flex items-center space-x-1">
          <button
            onClick={() => handleNav('home')}
            className={`px-2.5 py-1 rounded text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
              currentRoute === 'home'
                ? 'text-[#a7f3d0] bg-[#262626]'
                : 'text-slate-300 hover:text-white hover:bg-[#262626]'
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => handleNav('services')}
            className={`px-2.5 py-1 rounded text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
              currentRoute === 'services'
                ? 'text-[#a7f3d0] bg-[#262626]'
                : 'text-slate-300 hover:text-white hover:bg-[#262626]'
            }`}
          >
            10 Services
          </button>
          <button
            onClick={() => handleNav('staff')}
            className={`px-2.5 py-1 rounded text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
              currentRoute === 'staff' || currentRoute === 'staff-detail'
                ? 'text-[#a7f3d0] bg-[#262626]'
                : 'text-slate-300 hover:text-white hover:bg-[#262626]'
            }`}
          >
            Technicians
          </button>
          <button
            onClick={() => handleNav('register-staff')}
            className={`px-2.5 py-1 rounded text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
              currentRoute === 'register-staff'
                ? 'text-[#a7f3d0] bg-[#262626]'
                : 'text-slate-300 hover:text-white hover:bg-[#262626]'
            }`}
          >
            Join Crew
          </button>
          <button
            onClick={() => handleNav('admin')}
            className={`px-2.5 py-1 rounded text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer flex items-center space-x-1 ${
              currentRoute === 'admin'
                ? 'text-[#bae6fd] bg-[#262626]'
                : 'text-slate-300 hover:text-white hover:bg-[#262626]'
            }`}
          >
            <ShieldAlert className="w-3.5 h-3.5 text-[#bae6fd]" />
            <span>Admin</span>
          </button>
        </nav>

        {/* Contact Info & CTAs */}
        <div className="flex items-center gap-3 sm:gap-5 text-[11px] uppercase tracking-wider text-slate-400">
          <a 
            href="tel:+971044513517" 
            className="hidden md:flex items-center gap-1.5 hover:text-[#a7f3d0] transition-colors font-medium text-slate-300"
          >
            <Phone className="w-3 h-3 text-[#a7f3d0]" />
            <span>+971 04 451 3517</span>
          </a>
          <a 
            href="mailto:sales@nspyrtech.com" 
            className="hidden xl:flex items-center gap-1.5 hover:text-[#a7f3d0] transition-colors text-slate-400"
          >
            <Mail className="w-3 h-3 text-[#a7f3d0]" />
            <span>sales@nspyrtech.com</span>
          </a>

          <button
            id="cta-book-service"
            onClick={() => handleNav('book')}
            className="bg-[#bae6fd] text-[#1a1a1a] px-3.5 py-1.5 rounded text-xs font-extrabold uppercase tracking-wider hover:bg-white transition-all shadow-xs cursor-pointer"
          >
            Book Now
          </button>

          {/* Mobile menu button */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded text-slate-300 hover:text-white hover:bg-[#262626] lg:hidden cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div id="mobile-menu-drawer" className="lg:hidden bg-[#1a1a1a] border-t border-[#333333] px-4 py-4 space-y-2 shadow-2xl">
          <div className="p-3 bg-[#262626] rounded border border-slate-700 mb-2 text-xs">
            <div className="font-bold text-white mb-0.5 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#a7f3d0]" />
              <span>DAMAC Smart Heights, Office #02, Al Barsha, Dubai</span>
            </div>
            <div className="flex items-center justify-between text-[11px] text-slate-300 mt-2">
              <a href="tel:+971044513517" className="font-bold text-[#a7f3d0]">+971 04 451 3517</a>
              <span className="text-[#1a1a1a] bg-[#a7f3d0] px-2 py-0.5 rounded text-[9px] font-extrabold uppercase">
                24/7 Response
              </span>
            </div>
          </div>

          <button
            onClick={() => handleNav('home')}
            className={`w-full flex items-center space-x-2.5 px-3 py-2 rounded text-xs font-bold uppercase tracking-wider ${
              currentRoute === 'home' ? 'bg-[#262626] text-[#a7f3d0]' : 'text-slate-300'
            }`}
          >
            <Layers className="w-3.5 h-3.5 text-[#a7f3d0]" />
            <span>Overview</span>
          </button>

          <button
            onClick={() => handleNav('services')}
            className={`w-full flex items-center space-x-2.5 px-3 py-2 rounded text-xs font-bold uppercase tracking-wider ${
              currentRoute === 'services' ? 'bg-[#262626] text-[#a7f3d0]' : 'text-slate-300'
            }`}
          >
            <Wrench className="w-3.5 h-3.5 text-[#a7f3d0]" />
            <span>10 Services</span>
          </button>

          <button
            onClick={() => handleNav('staff')}
            className={`w-full flex items-center space-x-2.5 px-3 py-2 rounded text-xs font-bold uppercase tracking-wider ${
              currentRoute === 'staff' ? 'bg-[#262626] text-[#a7f3d0]' : 'text-slate-300'
            }`}
          >
            <Users className="w-3.5 h-3.5 text-[#a7f3d0]" />
            <span>Technicians Directory</span>
          </button>

          <button
            onClick={() => handleNav('book')}
            className={`w-full flex items-center space-x-2.5 px-3 py-2 rounded text-xs font-bold uppercase tracking-wider ${
              currentRoute === 'book' ? 'bg-[#262626] text-[#bae6fd]' : 'text-slate-300'
            }`}
          >
            <Calendar className="w-3.5 h-3.5 text-[#bae6fd]" />
            <span>Client Booking &amp; Quote</span>
          </button>

          <button
            onClick={() => handleNav('register-staff')}
            className={`w-full flex items-center space-x-2.5 px-3 py-2 rounded text-xs font-bold uppercase tracking-wider ${
              currentRoute === 'register-staff' ? 'bg-[#262626] text-[#a7f3d0]' : 'text-slate-300'
            }`}
          >
            <UserPlus className="w-3.5 h-3.5 text-[#a7f3d0]" />
            <span>Join Crew Registration</span>
          </button>

          <button
            onClick={() => handleNav('admin')}
            className={`w-full flex items-center space-x-2.5 px-3 py-2 rounded text-xs font-bold uppercase tracking-wider ${
              currentRoute === 'admin' ? 'bg-[#262626] text-[#bae6fd]' : 'text-slate-300'
            }`}
          >
            <ShieldAlert className="w-3.5 h-3.5 text-[#bae6fd]" />
            <span>Admin Approvals</span>
          </button>

          <button
            onClick={() => handleNav('deploy-guide')}
            className={`w-full flex items-center space-x-2.5 px-3 py-2 rounded text-xs font-bold uppercase tracking-wider ${
              currentRoute === 'deploy-guide' ? 'bg-[#262626] text-white' : 'text-slate-400'
            }`}
          >
            <Server className="w-3.5 h-3.5 text-slate-400" />
            <span>Deployment Guide</span>
          </button>
        </div>
      )}
    </header>
  );
};

