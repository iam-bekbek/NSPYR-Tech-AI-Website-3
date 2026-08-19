import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { SERVICES_DATA } from '../data/servicesData';
import { StaffMember, BookingSubmission } from '../types';
import { 
  ShieldAlert, 
  UserCheck, 
  Users, 
  Calendar, 
  CheckCircle2, 
  XCircle, 
  AlertCircle, 
  Clock, 
  Search, 
  Filter, 
  FileText, 
  Eye, 
  MapPin, 
  ShieldCheck, 
  RefreshCw, 
  Trash2, 
  ArrowRight,
  Sparkles,
  Phone,
  Mail,
  Award
} from 'lucide-react';

export const AdminDashboardPage: React.FC = () => {
  const { 
    staffList, 
    bookings, 
    approveStaff, 
    rejectStaff, 
    toggleStaffVerification, 
    updateBookingStatus, 
    deleteBooking,
    resetToDefaults,
    navigateTo 
  } = useApp();

  const [activeTab, setActiveTab] = useState<'applicants' | 'work-orders' | 'all-staff'>('applicants');
  const [applicantFilter, setApplicantFilter] = useState<'all' | 'pending' | 'approved' | 'rejected'>('pending');
  const [selectedStaffDetail, setSelectedStaffDetail] = useState<StaffMember | null>(null);
  const [selectedBookingDetail, setSelectedBookingDetail] = useState<BookingSubmission | null>(null);

  // Stats calculation
  const pendingStaff = staffList.filter((s) => s.status === 'pending');
  const approvedStaff = staffList.filter((s) => s.status === 'approved');
  const activeBookings = bookings.filter((b) => b.status === 'new' || b.status === 'in-review' || b.status === 'technician-assigned');
  const totalPipelineAED = bookings.reduce((acc, curr) => acc + curr.estimatedCostMinAED, 0);

  // Filtered applicants
  const displayedApplicants = staffList.filter((s) => {
    if (applicantFilter === 'all') return true;
    return s.status === applicantFilter;
  });

  return (
    <div id="admin-dashboard-page" className="min-h-screen bg-slate-100 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Admin Header */}
        <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 mb-8 border border-slate-800 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-2xl bg-teal-500 text-slate-950 flex items-center justify-center font-black text-xl shadow-md">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h1 className="text-xl sm:text-2xl font-black text-white">Nspyr Operations Management Portal</h1>
                <span className="bg-teal-500/20 text-teal-300 text-[10px] font-bold px-2 py-0.5 rounded border border-teal-500/40 uppercase">
                  Admin Access
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                Staff compliance verification, client work orders &amp; technician assignment control room
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={resetToDefaults}
              className="px-3.5 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold rounded-xl border border-slate-700 flex items-center space-x-1.5 transition-colors cursor-pointer"
              title="Reset mock data to default seed"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Reset Seed Data</span>
            </button>
            <button
              onClick={() => navigateTo('home')}
              className="px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold rounded-xl transition-colors cursor-pointer"
            >
              Public Site
            </button>
          </div>
        </div>

        {/* 4 KPI Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex items-center justify-between">
            <div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Pending Registrations</span>
              <span className="text-2xl font-black text-amber-600 mt-0.5 block">{pendingStaff.length}</span>
              <span className="text-[11px] text-slate-500 font-medium">Awaiting ID Verification</span>
            </div>
            <div className="p-3 bg-amber-50 rounded-xl text-amber-600">
              <Clock className="w-6 h-6" />
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex items-center justify-between">
            <div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Active Work Orders</span>
              <span className="text-2xl font-black text-teal-800 mt-0.5 block">{activeBookings.length}</span>
              <span className="text-[11px] text-slate-500 font-medium">{bookings.length} Total Logged</span>
            </div>
            <div className="p-3 bg-teal-50 rounded-xl text-teal-600">
              <Calendar className="w-6 h-6" />
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex items-center justify-between">
            <div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Published Technicians</span>
              <span className="text-2xl font-black text-slate-900 mt-0.5 block">{approvedStaff.length}</span>
              <span className="text-[11px] text-slate-500 font-medium">Live on Directory</span>
            </div>
            <div className="p-3 bg-sky-50 rounded-xl text-sky-600">
              <Users className="w-6 h-6" />
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex items-center justify-between">
            <div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Est. Pipeline Value</span>
              <span className="text-2xl font-black text-slate-900 mt-0.5 block">AED {totalPipelineAED.toLocaleString()}</span>
              <span className="text-[11px] text-slate-500 font-medium">Active Inquiries</span>
            </div>
            <div className="p-3 bg-emerald-50 rounded-xl text-emerald-600">
              <Sparkles className="w-6 h-6" />
            </div>
          </div>

        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center space-x-2 border-b border-slate-200 pb-3 mb-6 overflow-x-auto">
          <button
            onClick={() => setActiveTab('applicants')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center space-x-2 ${
              activeTab === 'applicants'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200'
            }`}
          >
            <UserCheck className="w-4 h-4" />
            <span>Technician Applications ({staffList.length})</span>
            {pendingStaff.length > 0 && (
              <span className="bg-amber-500 text-slate-950 px-1.5 py-0.2 rounded-full text-[10px] font-black">
                {pendingStaff.length} new
              </span>
            )}
          </button>

          <button
            onClick={() => setActiveTab('work-orders')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center space-x-2 ${
              activeTab === 'work-orders'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Client Work Orders ({bookings.length})</span>
          </button>
        </div>

        {/* Tab 1: Technician Applications (Approval Management) */}
        {activeTab === 'applicants' && (
          <div className="space-y-6">
            
            {/* Filter pills */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                {(['pending', 'approved', 'rejected', 'all'] as const).map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setApplicantFilter(filter)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold capitalize transition-all cursor-pointer ${
                      applicantFilter === filter
                        ? 'bg-teal-700 text-white'
                        : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200'
                    }`}
                  >
                    {filter === 'all' ? 'All Applicants' : filter} ({staffList.filter(s => filter === 'all' ? true : s.status === filter).length})
                  </button>
                ))}
              </div>
            </div>

            {/* Applications Table / Cards */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 font-bold uppercase tracking-wider">
                    <tr>
                      <th className="p-4">Technician</th>
                      <th className="p-4">Primary Trade</th>
                      <th className="p-4">UAE Exp</th>
                      <th className="p-4">Daily Rate</th>
                      <th className="p-4">ID &amp; Security</th>
                      <th className="p-4">Status</th>
                      <th className="p-4 text-right">Approval Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-700">
                    {displayedApplicants.map((staff) => {
                      const serviceObj = SERVICES_DATA.find((s) => s.id === staff.primaryTrade);

                      return (
                        <tr key={staff.id} className="hover:bg-slate-50/80 transition-colors">
                          
                          {/* Technician Name & Avatar */}
                          <td className="p-4">
                            <div className="flex items-center space-x-3">
                              <img
                                src={staff.avatar}
                                alt={staff.fullName}
                                className="w-10 h-10 rounded-xl object-cover border border-slate-200"
                              />
                              <div>
                                <span className="font-bold text-slate-900 block text-sm">{staff.fullName}</span>
                                <span className="text-slate-500 text-[11px] font-mono">{staff.id} • {staff.nationality}</span>
                              </div>
                            </div>
                          </td>

                          {/* Primary Trade */}
                          <td className="p-4">
                            <span className="font-semibold text-teal-800 bg-teal-50 px-2 py-0.5 rounded border border-teal-200">
                              {serviceObj?.shortTitle || staff.primaryTrade}
                            </span>
                          </td>

                          {/* UAE Experience */}
                          <td className="p-4 font-semibold text-slate-900">
                            {staff.uaeExperienceYears} Years
                          </td>

                          {/* Daily Rate */}
                          <td className="p-4 font-bold text-slate-900">
                            AED {staff.dailyRateAED} / day
                          </td>

                          {/* Emirates ID & Verification */}
                          <td className="p-4">
                            <button
                              onClick={() => toggleStaffVerification(staff.id)}
                              className={`inline-flex items-center space-x-1 px-2.5 py-1 rounded-full text-[11px] font-bold cursor-pointer transition-all ${
                                staff.emiratesIdVerified
                                  ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                                  : 'bg-rose-100 text-rose-800 border border-rose-300'
                              }`}
                              title="Click to toggle Emirates ID verification status"
                            >
                              <ShieldCheck className="w-3.5 h-3.5" />
                              <span>{staff.emiratesIdVerified ? 'ID Verified' : 'Unverified'}</span>
                            </button>
                          </td>

                          {/* Current Status */}
                          <td className="p-4">
                            <span className={`inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold capitalize ${
                              staff.status === 'approved'
                                ? 'bg-teal-100 text-teal-800'
                                : staff.status === 'pending'
                                ? 'bg-amber-100 text-amber-800'
                                : 'bg-rose-100 text-rose-800'
                            }`}>
                              {staff.status}
                            </span>
                          </td>

                          {/* Actions */}
                          <td className="p-4 text-right">
                            <div className="flex items-center justify-end space-x-2">
                              {staff.status !== 'approved' && (
                                <button
                                  onClick={() => approveStaff(staff.id)}
                                  className="px-3 py-1.5 bg-teal-600 hover:bg-teal-700 text-white rounded-lg text-xs font-bold transition-colors cursor-pointer flex items-center space-x-1"
                                >
                                  <CheckCircle2 className="w-3.5 h-3.5" />
                                  <span>Approve &amp; Publish</span>
                                </button>
                              )}

                              {staff.status !== 'rejected' && (
                                <button
                                  onClick={() => rejectStaff(staff.id)}
                                  className="px-2.5 py-1.5 bg-slate-100 hover:bg-rose-100 text-slate-600 hover:text-rose-700 rounded-lg text-xs font-bold transition-colors cursor-pointer"
                                >
                                  Reject
                                </button>
                              )}

                              <button
                                onClick={() => setSelectedStaffDetail(staff)}
                                className="p-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg transition-colors cursor-pointer"
                                title="Inspect Full Application"
                              >
                                <Eye className="w-4 h-4" />
                              </button>
                            </div>
                          </td>

                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        )}

        {/* Tab 2: Client Work Orders */}
        {activeTab === 'work-orders' && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 font-bold uppercase tracking-wider">
                    <tr>
                      <th className="p-4">Work Order Ref</th>
                      <th className="p-4">Client &amp; Location</th>
                      <th className="p-4">Trades &amp; Headcount</th>
                      <th className="p-4">Duration &amp; Start</th>
                      <th className="p-4">Est. Value</th>
                      <th className="p-4">Status</th>
                      <th className="p-4 text-right">Dispatch Control</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-700">
                    {bookings.map((booking) => (
                      <tr key={booking.id} className="hover:bg-slate-50/80 transition-colors">
                        
                        {/* Ref */}
                        <td className="p-4">
                          <span className="font-mono font-bold text-slate-900 block text-sm">{booking.id}</span>
                          <span className="text-[10px] text-slate-400">{new Date(booking.createdAt).toLocaleDateString()}</span>
                        </td>

                        {/* Client */}
                        <td className="p-4">
                          <span className="font-bold text-slate-900 block">{booking.clientName}</span>
                          {booking.companyName && (
                            <span className="text-[11px] text-teal-800 font-semibold block">{booking.companyName}</span>
                          )}
                          <span className="text-[11px] text-slate-500 flex items-center gap-1 mt-0.5">
                            <MapPin className="w-3 h-3" />
                            {booking.uaeLocation}
                          </span>
                        </td>

                        {/* Trades */}
                        <td className="p-4">
                          <div className="flex flex-wrap gap-1 mb-1">
                            {booking.requiredTrades.map((t, idx) => (
                              <span key={idx} className="bg-slate-100 px-2 py-0.5 rounded text-[10px] font-bold text-slate-700">
                                {t}
                              </span>
                            ))}
                          </div>
                          <span className="text-[11px] text-slate-500 font-medium">{booking.headcountNeeded} Technicians</span>
                        </td>

                        {/* Duration */}
                        <td className="p-4">
                          <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold mb-1 ${
                            booking.projectDuration.includes('Emergency') ? 'bg-rose-100 text-rose-800' : 'bg-slate-100 text-slate-700'
                          }`}>
                            {booking.projectDuration}
                          </span>
                          <div className="text-[11px] text-slate-500">Start: {booking.startDate}</div>
                        </td>

                        {/* Cost */}
                        <td className="p-4 font-black text-slate-900">
                          AED {booking.estimatedCostMinAED.toLocaleString()}
                        </td>

                        {/* Status dropdown */}
                        <td className="p-4">
                          <select
                            value={booking.status}
                            onChange={(e: any) => updateBookingStatus(booking.id, e.target.value)}
                            className="text-xs font-bold px-2 py-1 rounded-lg border border-slate-300 bg-white"
                          >
                            <option value="new">New Requisition</option>
                            <option value="in-review">In Review</option>
                            <option value="technician-assigned">Staff Assigned</option>
                            <option value="completed">Completed</option>
                            <option value="cancelled">Cancelled</option>
                          </select>
                        </td>

                        {/* Actions */}
                        <td className="p-4 text-right">
                          <div className="flex items-center justify-end space-x-2">
                            <button
                              onClick={() => setSelectedBookingDetail(booking)}
                              className="px-2.5 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-md font-semibold text-xs cursor-pointer"
                            >
                              Scope Specs
                            </button>
                            <button
                              onClick={() => deleteBooking(booking.id)}
                              className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-md transition-colors cursor-pointer"
                              title="Delete Work Order"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>

                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Modal: Staff Details Inspection */}
        {selectedStaffDetail && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-6 border border-slate-200 space-y-4">
              <div className="flex justify-between items-start border-b border-slate-200 pb-4">
                <div className="flex items-center space-x-3">
                  <img
                    src={selectedStaffDetail.avatar}
                    alt={selectedStaffDetail.fullName}
                    className="w-14 h-14 rounded-xl object-cover border"
                  />
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">{selectedStaffDetail.fullName}</h3>
                    <p className="text-xs text-slate-500">{selectedStaffDetail.title} • {selectedStaffDetail.nationality}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedStaffDetail(null)}
                  className="text-slate-400 hover:text-slate-900 text-sm font-bold"
                >
                  ✕
                </button>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs bg-slate-50 p-4 rounded-xl">
                <div>
                  <span className="text-slate-400 block font-semibold">Emirates ID Status</span>
                  <span className="font-bold text-slate-900">{selectedStaffDetail.emiratesIdVerified ? 'Biometric Verified' : 'Pending Physical Card'}</span>
                </div>
                <div>
                  <span className="text-slate-400 block font-semibold">Visa Status</span>
                  <span className="font-bold text-slate-900">{selectedStaffDetail.visaStatus}</span>
                </div>
                <div>
                  <span className="text-slate-400 block font-semibold">Daily Rate</span>
                  <span className="font-bold text-slate-900">AED {selectedStaffDetail.dailyRateAED}/day</span>
                </div>
                <div>
                  <span className="text-slate-400 block font-semibold">UAE Experience</span>
                  <span className="font-bold text-slate-900">{selectedStaffDetail.uaeExperienceYears} Years in UAE</span>
                </div>
              </div>

              <div>
                <span className="text-xs font-bold text-slate-700 block mb-1">Competencies &amp; Bio:</span>
                <p className="text-xs text-slate-600 leading-relaxed bg-white p-3 rounded-lg border border-slate-200">{selectedStaffDetail.bio}</p>
              </div>

              <div className="pt-2 flex justify-end space-x-2">
                <button
                  onClick={() => {
                    approveStaff(selectedStaffDetail.id);
                    setSelectedStaffDetail(null);
                  }}
                  className="px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-lg text-xs font-bold"
                >
                  Approve Application
                </button>
                <button
                  onClick={() => setSelectedStaffDetail(null)}
                  className="px-4 py-2 bg-slate-200 text-slate-800 rounded-lg text-xs font-bold"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Modal: Booking Scope Inspection */}
        {selectedBookingDetail && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-xl w-full p-6 border border-slate-200 space-y-4">
              <div className="flex justify-between items-start border-b border-slate-200 pb-4">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Work Order Requisition {selectedBookingDetail.id}</h3>
                  <p className="text-xs text-slate-500">Client: {selectedBookingDetail.clientName} ({selectedBookingDetail.phone})</p>
                </div>
                <button
                  onClick={() => setSelectedBookingDetail(null)}
                  className="text-slate-400 hover:text-slate-900 text-sm font-bold"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-2 text-xs">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold block text-slate-700 mb-1">Scope Description:</span>
                  <p className="text-slate-600 leading-relaxed">{selectedBookingDetail.scopeDescription}</p>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div className="p-2.5 bg-slate-50 rounded-lg">
                    <span className="text-slate-400 block font-semibold">Location:</span>
                    <span className="font-bold text-slate-800">{selectedBookingDetail.uaeLocation}</span>
                  </div>
                  <div className="p-2.5 bg-slate-50 rounded-lg">
                    <span className="text-slate-400 block font-semibold">Preferred Contact:</span>
                    <span className="font-bold text-teal-800">{selectedBookingDetail.preferredContact.toUpperCase()}</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  onClick={() => setSelectedBookingDetail(null)}
                  className="px-4 py-2 bg-slate-900 text-white rounded-lg text-xs font-bold"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
