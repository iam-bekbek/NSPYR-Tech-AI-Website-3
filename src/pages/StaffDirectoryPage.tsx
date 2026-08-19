import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { SERVICES_DATA } from '../data/servicesData';
import { StaffMember, TradeCategory, StaffAvailability } from '../types';
import { 
  Search, 
  Filter, 
  ShieldCheck, 
  Star, 
  MapPin, 
  Wrench, 
  CheckCircle2, 
  ArrowRight, 
  UserCheck, 
  Calendar, 
  SlidersHorizontal, 
  LayoutGrid, 
  List, 
  PlusCircle, 
  Award,
  Sparkles,
  Zap
} from 'lucide-react';

export const StaffDirectoryPage: React.FC = () => {
  const { staffList, navigateTo, openBookingModal } = useApp();

  // Filters State
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTrade, setSelectedTrade] = useState<string>('all');
  const [selectedAvailability, setSelectedAvailability] = useState<string>('all');
  const [minUaeExp, setMinUaeExp] = useState<number>(0);
  const [sortBy, setSortBy] = useState<'rating' | 'experience' | 'price-asc' | 'price-desc'>('rating');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Only show approved staff on public directory
  const approvedStaff = staffList.filter((s) => s.status === 'approved');

  // Filter logic
  const filteredStaff = approvedStaff.filter((staff) => {
    const matchesSearch = 
      staff.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      staff.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      staff.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      staff.skills.some((sk) => sk.toLowerCase().includes(searchTerm.toLowerCase())) ||
      staff.nationality.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesTrade = selectedTrade === 'all' || staff.primaryTrade === selectedTrade || staff.secondaryTrades.includes(selectedTrade as TradeCategory);
    const matchesAvailability = selectedAvailability === 'all' || staff.availability === selectedAvailability;
    const matchesExp = staff.uaeExperienceYears >= minUaeExp;

    return matchesSearch && matchesTrade && matchesAvailability && matchesExp;
  });

  // Sort logic
  const sortedStaff = [...filteredStaff].sort((a, b) => {
    if (sortBy === 'rating') return b.rating - a.rating;
    if (sortBy === 'experience') return b.uaeExperienceYears - a.uaeExperienceYears;
    if (sortBy === 'price-asc') return a.dailyRateAED - b.dailyRateAED;
    if (sortBy === 'price-desc') return b.dailyRateAED - a.dailyRateAED;
    return 0;
  });

  return (
    <div id="staff-directory-page" className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Page Header */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-950 to-teal-950 rounded-3xl p-8 sm:p-12 mb-8 text-white shadow-xl border border-slate-800">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-bold uppercase tracking-wider mb-3 border border-teal-500/30">
              <UserCheck className="w-4 h-4 text-teal-300" />
              <span>Verified UAE Technical Talent Pool</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              Technicians &amp; Specialists Directory
            </h1>
            <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
              Directly hire vetted HVAC mechanics, licensed electricians, master carpenters, marble installers, pool technicians, and decorative ornamentation artisans across Dubai.
            </p>
          </div>

          {/* Quick CTA to join */}
          <div className="mt-6 pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center space-x-4 text-xs text-teal-300">
              <span className="flex items-center gap-1.5 font-semibold">
                <ShieldCheck className="w-4 h-4 text-teal-400" />
                Biometric Emirates ID Verified
              </span>
              <span className="hidden sm:flex items-center gap-1.5 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-teal-400" />
                DCD &amp; DEWA Safety Compliant
              </span>
            </div>

            <button
              onClick={() => navigateTo('register-staff')}
              className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-teal-300 rounded-xl text-xs font-bold border border-teal-500/40 transition-colors flex items-center space-x-1.5 cursor-pointer"
            >
              <PlusCircle className="w-4 h-4 text-teal-400" />
              <span>Register as Technician</span>
            </button>
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs mb-8 space-y-4">
          {/* Search & Sort Row */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            
            {/* Search */}
            <div className="md:col-span-6 relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              <input
                type="text"
                placeholder="Search by name, skill (e.g. Chiller, Parquet, Marble), location..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-hidden"
              />
            </div>

            {/* Trade Specialty Filter */}
            <div className="md:col-span-3">
              <select
                value={selectedTrade}
                onChange={(e) => setSelectedTrade(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm font-medium text-slate-800 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-hidden"
              >
                <option value="all">All 10 Trade Specialties</option>
                {SERVICES_DATA.map((srv) => (
                  <option key={srv.id} value={srv.id}>
                    {srv.shortTitle}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort Dropdown */}
            <div className="md:col-span-3">
              <select
                value={sortBy}
                onChange={(e: any) => setSortBy(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm font-medium text-slate-800 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-hidden"
              >
                <option value="rating">Sort: Highest Rating (5.0 - 4.0)</option>
                <option value="experience">Sort: Most UAE Experience</option>
                <option value="price-asc">Sort: Daily Rate (Low to High)</option>
                <option value="price-desc">Sort: Daily Rate (High to Low)</option>
              </select>
            </div>
          </div>

          {/* Secondary Filters: Availability & Min Exp */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-100 text-xs text-slate-600">
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-bold text-slate-800 flex items-center gap-1">
                <SlidersHorizontal className="w-3.5 h-3.5 text-teal-600" />
                Filters:
              </span>

              {/* Availability Filter Chips */}
              <div className="flex items-center space-x-1.5">
                {(['all', 'Available Immediately', 'Available in 24h'] as const).map((avail) => (
                  <button
                    key={avail}
                    onClick={() => setSelectedAvailability(avail)}
                    className={`px-3 py-1 rounded-lg font-semibold transition-all cursor-pointer ${
                      selectedAvailability === avail
                        ? 'bg-slate-900 text-white'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {avail === 'all' ? 'Any Availability' : avail}
                  </button>
                ))}
              </div>

              {/* Min Experience Pill */}
              <div className="flex items-center space-x-1.5 ml-2">
                <span className="font-semibold text-slate-500">Min UAE Exp:</span>
                {[0, 5, 8].map((years) => (
                  <button
                    key={years}
                    onClick={() => setMinUaeExp(years)}
                    className={`px-2.5 py-1 rounded-lg font-semibold transition-all cursor-pointer ${
                      minUaeExp === years
                        ? 'bg-teal-700 text-white'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {years === 0 ? 'All' : `${years}+ yrs`}
                  </button>
                ))}
              </div>
            </div>

            {/* Results Count & View Toggle */}
            <div className="flex items-center space-x-4">
              <span className="font-bold text-slate-900">
                Showing {sortedStaff.length} of {approvedStaff.length} Technicians
              </span>

              <div className="flex items-center bg-slate-100 p-1 rounded-lg border border-slate-200">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-1.5 rounded-md transition-colors cursor-pointer ${
                    viewMode === 'grid' ? 'bg-white shadow-xs text-teal-700' : 'text-slate-500'
                  }`}
                  aria-label="Grid view"
                >
                  <LayoutGrid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-1.5 rounded-md transition-colors cursor-pointer ${
                    viewMode === 'list' ? 'bg-white shadow-xs text-teal-700' : 'text-slate-500'
                  }`}
                  aria-label="List view"
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Directory Listings */}
        {sortedStaff.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center border border-slate-200">
            <UserCheck className="w-12 h-12 text-slate-400 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-800">No technicians match your search filters</h3>
            <p className="text-slate-500 text-xs mt-1">Try resetting the filters or searching for another trade.</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedTrade('all');
                setSelectedAvailability('all');
                setMinUaeExp(0);
              }}
              className="mt-4 px-4 py-2 bg-teal-600 text-white rounded-lg text-xs font-bold hover:bg-teal-700 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : viewMode === 'grid' ? (
          /* Grid View */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedStaff.map((staff) => {
              const serviceObj = SERVICES_DATA.find((s) => s.id === staff.primaryTrade);

              return (
                <div
                  key={staff.id}
                  id={`staff-card-full-${staff.id}`}
                  className="bg-white rounded-2xl border border-slate-200/90 hover:border-teal-500/60 p-6 shadow-xs hover:shadow-xl transition-all duration-200 flex flex-col justify-between group"
                >
                  <div>
                    {/* Header with Avatar & Badge */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-start space-x-3.5">
                        <div className="relative">
                          <img
                            src={staff.avatar}
                            alt={staff.fullName}
                            className="w-16 h-16 rounded-2xl object-cover border-2 border-slate-100 shadow-md group-hover:scale-105 transition-transform"
                          />
                          <div className="absolute -bottom-1 -right-1 bg-teal-600 text-white p-1 rounded-full border-2 border-white shadow-xs" title="Emirates ID & Background Verified">
                            <ShieldCheck className="w-3 h-3" />
                          </div>
                        </div>

                        <div>
                          <h3 
                            onClick={() => navigateTo('staff-detail', { staffId: staff.id })}
                            className="text-base font-bold text-slate-900 group-hover:text-teal-700 transition-colors cursor-pointer leading-snug"
                          >
                            {staff.fullName}
                          </h3>
                          <span className="inline-block px-2 py-0.5 rounded bg-teal-50 text-teal-800 text-[11px] font-bold mt-1 border border-teal-200/70">
                            {serviceObj?.shortTitle || 'Technical Specialist'}
                          </span>
                        </div>
                      </div>

                      <div className="text-right">
                        <div className="flex items-center space-x-1 text-amber-500 text-xs font-bold justify-end">
                          <Star className="w-3.5 h-3.5 fill-current" />
                          <span className="text-slate-900">{staff.rating.toFixed(1)}</span>
                          <span className="text-slate-400 font-normal">({staff.completedJobs})</span>
                        </div>
                        <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold mt-1 ${
                          staff.availability === 'Available Immediately'
                            ? 'bg-emerald-100 text-emerald-800'
                            : 'bg-amber-100 text-amber-800'
                        }`}>
                          {staff.availability}
                        </span>
                      </div>
                    </div>

                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-3">
                      {staff.bio}
                    </p>

                    {/* Metadata chips */}
                    <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-600 bg-slate-50 p-2.5 rounded-xl border border-slate-100 mb-3">
                      <div className="flex items-center space-x-1.5">
                        <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        <span className="line-clamp-1">{staff.location}</span>
                      </div>
                      <div className="flex items-center space-x-1.5">
                        <Award className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                        <span>{staff.uaeExperienceYears} yrs UAE Exp</span>
                      </div>
                    </div>

                    {/* Skills tags */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {staff.skills.slice(0, 3).map((skill, idx) => (
                        <span key={idx} className="bg-slate-100 px-2 py-0.5 rounded text-[11px] font-medium text-slate-700">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Footer Rates & CTA */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-base font-black text-slate-900">
                        AED {staff.dailyRateAED}
                      </span>
                      <span className="text-[11px] text-slate-500 font-medium block -mt-0.5">
                        / day (AED {staff.hourlyRateAED}/hr)
                      </span>
                    </div>

                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => navigateTo('staff-detail', { staffId: staff.id })}
                        className="px-3 py-2 rounded-xl text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors cursor-pointer"
                      >
                        Profile
                      </button>
                      <button
                        onClick={() => openBookingModal(staff)}
                        className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-teal-600 hover:bg-teal-700 shadow-xs hover:shadow transition-all cursor-pointer flex items-center space-x-1"
                      >
                        <span>Book</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* List View */
          <div className="space-y-4">
            {sortedStaff.map((staff) => {
              const serviceObj = SERVICES_DATA.find((s) => s.id === staff.primaryTrade);

              return (
                <div
                  key={staff.id}
                  className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs hover:shadow-md transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
                >
                  <div className="flex items-start space-x-4 flex-1">
                    <img
                      src={staff.avatar}
                      alt={staff.fullName}
                      className="w-16 h-16 rounded-xl object-cover border border-slate-200 shrink-0"
                    />

                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3
                          onClick={() => navigateTo('staff-detail', { staffId: staff.id })}
                          className="text-base font-bold text-slate-900 hover:text-teal-700 transition-colors cursor-pointer"
                        >
                          {staff.fullName}
                        </h3>
                        <span className="text-xs px-2 py-0.5 rounded bg-teal-100 text-teal-800 font-bold">
                          {serviceObj?.shortTitle}
                        </span>
                        <span className="text-xs text-slate-500 font-medium">
                          • {staff.nationality} • {staff.uaeExperienceYears} yrs UAE exp
                        </span>
                      </div>

                      <p className="text-xs text-slate-600 line-clamp-1">
                        {staff.bio}
                      </p>

                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {staff.skills.map((skill, idx) => (
                          <span key={idx} className="bg-slate-100 px-2 py-0.5 rounded text-[10px] text-slate-700 font-medium">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between md:justify-end gap-6 w-full md:w-auto border-t md:border-t-0 pt-3 md:pt-0 border-slate-100">
                    <div className="text-left md:text-right">
                      <span className="text-base font-black text-slate-900">AED {staff.dailyRateAED}</span>
                      <span className="text-xs text-slate-500 block">/ day</span>
                    </div>

                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => navigateTo('staff-detail', { staffId: staff.id })}
                        className="px-3 py-2 rounded-lg text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-800 cursor-pointer"
                      >
                        Full Profile
                      </button>
                      <button
                        onClick={() => openBookingModal(staff)}
                        className="px-4 py-2 rounded-lg text-xs font-bold bg-teal-600 hover:bg-teal-700 text-white cursor-pointer"
                      >
                        Book
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </div>
  );
};
