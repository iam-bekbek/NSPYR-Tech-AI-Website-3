import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { SERVICES_DATA } from '../data/servicesData';
import { 
  ArrowLeft, 
  ShieldCheck, 
  Star, 
  MapPin, 
  Award, 
  Calendar, 
  CheckCircle2, 
  Clock, 
  Wrench, 
  UserCheck, 
  Building, 
  Briefcase, 
  Globe, 
  PhoneCall, 
  FileText,
  Sparkles
} from 'lucide-react';

export const StaffDetailPage: React.FC = () => {
  const { selectedStaffId, staffList, navigateTo, openBookingModal } = useApp();

  const staff = staffList.find((s) => s.id === selectedStaffId) || staffList[0];
  const serviceObj = SERVICES_DATA.find((s) => s.id === staff?.primaryTrade);

  if (!staff) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-6 text-center">
        <h2 className="text-xl font-bold text-slate-800">Technician Profile Not Found</h2>
        <button
          onClick={() => navigateTo('staff')}
          className="mt-4 px-4 py-2 bg-teal-600 text-white rounded-lg text-sm font-semibold"
        >
          Return to Directory
        </button>
      </div>
    );
  }

  return (
    <div id="staff-detail-page" className="min-h-screen bg-slate-50 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Back Link */}
        <button
          onClick={() => navigateTo('staff')}
          className="inline-flex items-center space-x-2 text-slate-600 hover:text-teal-700 font-bold text-sm mb-6 cursor-pointer group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Technicians Directory</span>
        </button>

        {/* Profile Card Header */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-md mb-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            
            {/* Avatar & Main Info */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <div className="relative">
                <img
                  src={staff.avatar}
                  alt={staff.fullName}
                  className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl object-cover border-4 border-white shadow-xl"
                />
                <div className="absolute -bottom-2 -right-2 bg-teal-600 text-white p-2 rounded-xl border-2 border-white shadow-md flex items-center justify-center" title="Verified Emirates ID & DCD Safety Pass">
                  <ShieldCheck className="w-5 h-5" />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-teal-100 text-teal-800 border border-teal-200">
                    {serviceObj?.shortTitle || 'Technical Trade'}
                  </span>
                  <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${
                    staff.availability === 'Available Immediately'
                      ? 'bg-emerald-100 text-emerald-800'
                      : 'bg-amber-100 text-amber-800'
                  }`}>
                    {staff.availability}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-slate-100 text-slate-700">
                    {staff.visaStatus}
                  </span>
                </div>

                <h1 className="text-2xl sm:text-3xl font-black text-slate-900">
                  {staff.fullName}
                </h1>
                <p className="text-sm font-semibold text-teal-800">
                  {staff.title}
                </p>

                <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 pt-1">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4 text-slate-400" />
                    {staff.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Award className="w-4 h-4 text-teal-600" />
                    {staff.uaeExperienceYears} Years UAE Exp ({staff.yearsExperience} Total)
                  </span>
                  <span className="flex items-center gap-1">
                    <Globe className="w-4 h-4 text-slate-400" />
                    {staff.languages.join(', ')}
                  </span>
                </div>
              </div>
            </div>

            {/* Rates & Direct Book Card */}
            <div className="w-full lg:w-auto bg-slate-50 p-6 rounded-2xl border border-slate-200 flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-baseline justify-between lg:justify-end gap-2">
                  <span className="text-3xl font-black text-slate-900">AED {staff.dailyRateAED}</span>
                  <span className="text-xs text-slate-500 font-semibold">/ day</span>
                </div>
                <div className="text-xs text-slate-500 text-right mt-0.5">
                  or AED {staff.hourlyRateAED}/hr • AED {staff.monthlyRateAED?.toLocaleString()}/mo (Contract)
                </div>
                
                <div className="mt-3 flex items-center justify-between text-xs text-amber-600 font-bold bg-amber-50 px-3 py-1.5 rounded-lg border border-amber-200">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-slate-900 font-bold">{staff.rating.toFixed(2)} Rating</span>
                  </div>
                  <span className="text-slate-600">{staff.completedJobs} Verified Jobs</span>
                </div>
              </div>

              <button
                onClick={() => openBookingModal(staff)}
                className="w-full py-3 px-6 bg-gradient-to-r from-teal-600 to-sky-600 hover:from-teal-700 hover:to-sky-700 text-white font-bold rounded-xl text-sm shadow-md hover:shadow-lg transition-all cursor-pointer flex items-center justify-center space-x-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Book {staff.fullName.split(' ')[0]} Now</span>
              </button>
            </div>

          </div>
        </div>

        {/* 2-Column Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left 2 Columns: Bio, Certifications, Portfolio & Reviews */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Bio & Skills */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-4">
              <h3 className="text-base font-bold text-slate-900 uppercase tracking-wider">
                Professional Background &amp; Competencies
              </h3>
              <p className="text-slate-700 text-sm leading-relaxed">
                {staff.bio}
              </p>

              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">
                  Specialized Technical Skills:
                </span>
                <div className="flex flex-wrap gap-2">
                  {staff.skills.map((skill, idx) => (
                    <span key={idx} className="bg-slate-100 text-slate-800 px-3 py-1 rounded-lg text-xs font-semibold border border-slate-200">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Certifications & UAE Compliance */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-4">
              <h3 className="text-base font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                <Award className="w-5 h-5 text-teal-600" />
                <span>Verified Trade Certifications</span>
              </h3>

              <div className="space-y-3">
                {staff.certifications.map((cert, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="space-y-0.5">
                      <div className="text-sm font-bold text-slate-900 flex items-center space-x-2">
                        <span>{cert.name}</span>
                        {cert.verified && (
                          <span className="bg-teal-100 text-teal-800 text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                            <CheckCircle2 className="w-3 h-3" />
                            Verified
                          </span>
                        )}
                      </div>
                      <div className="text-xs text-slate-500">
                        Issued by {cert.issuer} • Certified {cert.year}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Project Portfolio Photos */}
            {staff.portfolioImages.length > 0 && (
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-4">
                <h3 className="text-base font-bold text-slate-900 uppercase tracking-wider">
                  Past Project Execution Gallery
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {staff.portfolioImages.map((img, idx) => (
                    <div key={idx} className="relative h-48 rounded-xl overflow-hidden bg-slate-900 border border-slate-200 group">
                      <img
                        src={img}
                        alt={`Project ${idx + 1}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute bottom-2 left-2 bg-slate-950/80 backdrop-blur-xs text-white text-[11px] px-2.5 py-1 rounded font-medium">
                        Completed UAE Site Work
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Client Reviews */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold text-slate-900 uppercase tracking-wider">
                  Verified Client Reviews ({staff.reviews.length})
                </h3>
                <div className="flex items-center space-x-1 text-amber-500 text-sm font-bold">
                  <Star className="w-4 h-4 fill-current" />
                  <span>{staff.rating.toFixed(1)} / 5.0</span>
                </div>
              </div>

              {staff.reviews.length === 0 ? (
                <p className="text-xs text-slate-500">No client reviews logged yet for this recent onboarding.</p>
              ) : (
                <div className="space-y-4">
                  {staff.reviews.map((rev) => (
                    <div key={rev.id} className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="font-bold text-slate-900 text-sm block">{rev.clientName}</span>
                          {rev.companyName && (
                            <span className="text-xs text-teal-800 font-semibold">{rev.companyName}</span>
                          )}
                        </div>
                        <div className="text-right">
                          <div className="flex items-center text-amber-500">
                            {[...Array(rev.rating)].map((_, i) => (
                              <Star key={i} className="w-3.5 h-3.5 fill-current" />
                            ))}
                          </div>
                          <span className="text-[10px] text-slate-400">{rev.date}</span>
                        </div>
                      </div>
                      <p className="text-xs text-slate-700 leading-relaxed italic">
                        "{rev.comment}"
                      </p>
                      <div className="text-[11px] text-slate-500 font-medium">
                        Project: {rev.projectType}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

          </div>

          {/* Right Column: Verification Badges, Quick Booking, Office Info */}
          <div className="space-y-6">
            
            {/* Verification Checklist */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4">
              <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-teal-600" />
                <span>Nspyr Verification Guarantee</span>
              </h4>

              <ul className="space-y-2.5 text-xs text-slate-700">
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span>Emirates ID Biometric Verified</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span>Dubai Police Background Security Clearance</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span>Practical Trade Skills Assessment Passed</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span>Worker's Compensation &amp; CAR Insurance Covered</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span>Uniform &amp; Calibrated Professional Tooling</span>
                </li>
              </ul>
            </div>

            {/* Quick Contact & Dispatch Box */}
            <div className="bg-slate-900 text-white rounded-2xl p-6 border border-slate-800 space-y-4">
              <span className="text-teal-400 text-xs font-bold uppercase tracking-wider block">
                Direct Dispatch Helpline
              </span>
              <h4 className="text-lg font-bold text-white">Need this technician for an immediate project?</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Contact our Al Barsha dispatch center directly with reference ID <code className="text-teal-300 font-mono font-bold">{staff.id}</code>.
              </p>

              <div className="pt-2 space-y-2">
                <a
                  href="tel:+971044513517"
                  className="w-full py-2.5 px-4 bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold rounded-xl text-xs flex items-center justify-center space-x-2 transition-colors"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Call +971 04 451 3517</span>
                </a>
                <button
                  onClick={() => openBookingModal(staff)}
                  className="w-full py-2.5 px-4 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl text-xs border border-slate-700 transition-colors cursor-pointer"
                >
                  Book Online
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
