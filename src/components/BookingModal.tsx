import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  X, 
  CheckCircle2, 
  Calendar, 
  Clock, 
  MapPin, 
  Building2, 
  User, 
  Phone, 
  Mail, 
  ShieldCheck, 
  Wrench,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { SERVICES_DATA } from '../data/servicesData';
import { TradeCategory } from '../types';

export const BookingModal: React.FC = () => {
  const { bookingModalStaff, closeBookingModal, addClientBooking, navigateTo } = useApp();

  const [clientName, setClientName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('Al Barsha, Dubai');
  const [selectedTrade, setSelectedTrade] = useState<TradeCategory>(bookingModalStaff?.primaryTrade || 'ac-hvac');
  const [duration, setDuration] = useState<'Hourly / One-Off' | '1-3 Days' | '1-4 Weeks' | 'Long-Term Contract (AMC)' | 'Urgent Emergency (2h SLA)'>('Hourly / One-Off');
  const [headcount, setHeadcount] = useState(1);
  const [startDate, setStartDate] = useState(new Date().toISOString().split('T')[0]);
  const [scopeDescription, setScopeDescription] = useState(
    bookingModalStaff ? `Requesting direct booking for ${bookingModalStaff.fullName} (${bookingModalStaff.title}).` : ''
  );
  const [contactMethod, setContactMethod] = useState<'phone' | 'email' | 'whatsapp'>('whatsapp');
  const [submitted, setSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  if (!bookingModalStaff && !open) {
    // Only show if triggered
  }

  if (bookingModalStaff === null) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName || !phone) return;

    const serviceObj = SERVICES_DATA.find((s) => s.id === selectedTrade);
    const baseRate = bookingModalStaff ? bookingModalStaff.dailyRateAED : (serviceObj?.startingRateAED || 80) * 8;
    const estMin = Math.round(baseRate * headcount * (duration === '1-3 Days' ? 2 : duration === '1-4 Weeks' ? 10 : 1));
    const estMax = Math.round(estMin * 1.25);

    const result = addClientBooking({
      clientName,
      companyName: companyName || undefined,
      email: email || `${phone.replace(/\D/g, '')}@client.nspyr.ae`,
      phone,
      industry: 'corporate',
      uaeLocation: location,
      requiredTrades: [selectedTrade],
      headcountNeeded: headcount,
      projectDuration: duration,
      startDate,
      scopeDescription: scopeDescription || `Direct technician booking for ${selectedTrade}`,
      estimatedCostMinAED: estMin,
      estimatedCostMaxAED: estMax,
      assignedStaffIds: bookingModalStaff ? [bookingModalStaff.id] : [],
      assignedStaffNames: bookingModalStaff ? [bookingModalStaff.fullName] : [],
      preferredContact: contactMethod
    });

    if (result.success) {
      setBookingRef(result.id);
      setSubmitted(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6">
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full border border-slate-200 overflow-hidden animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-900 to-teal-950 p-6 text-white flex justify-between items-start border-b border-teal-800">
          <div>
            <div className="inline-flex items-center space-x-2 text-xs font-semibold px-2.5 py-1 rounded-full bg-teal-500/20 text-teal-300 border border-teal-500/30 mb-2">
              <Sparkles className="w-3 h-3 text-teal-300" />
              <span>Nspyr Verified Dispatch</span>
            </div>
            <h3 className="text-xl font-bold text-white">
              {bookingModalStaff ? `Book Technician: ${bookingModalStaff.fullName}` : 'Instant Technical Service Booking'}
            </h3>
            <p className="text-xs text-teal-200/80 mt-1">
              {bookingModalStaff ? `${bookingModalStaff.title} | ${bookingModalStaff.location}` : 'Select trade, UAE project site and preferred shift'}
            </p>
          </div>
          <button
            onClick={closeBookingModal}
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-black text-slate-900">Work Order Confirmed!</h4>
              <div className="inline-block bg-slate-100 px-4 py-2 rounded-lg font-mono font-bold text-slate-800 text-sm border border-slate-200">
                Reference Code: {bookingRef}
              </div>
              <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                Thank you, <strong className="text-slate-900">{clientName}</strong>. Our Dubai operations supervisor at DAMAC Smart Heights has received your request and will contact you via {contactMethod.toUpperCase()} shortly.
              </p>
              <div className="pt-4 flex justify-center space-x-3">
                <button
                  onClick={() => {
                    closeBookingModal();
                    navigateTo('admin');
                  }}
                  className="px-4 py-2 bg-slate-100 text-slate-700 hover:bg-slate-200 rounded-lg text-sm font-semibold transition-colors cursor-pointer"
                >
                  View in Admin Portal
                </button>
                <button
                  onClick={closeBookingModal}
                  className="px-5 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-lg text-sm font-semibold transition-colors cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {bookingModalStaff && (
                <div className="flex items-center space-x-3 p-3 bg-teal-50/60 rounded-xl border border-teal-200/80">
                  <img
                    src={bookingModalStaff.avatar}
                    alt={bookingModalStaff.fullName}
                    className="w-12 h-12 rounded-lg object-cover border border-teal-300"
                  />
                  <div className="flex-1 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-slate-900 text-sm">{bookingModalStaff.fullName}</span>
                      <span className="text-teal-800 font-bold bg-teal-100 px-2 py-0.5 rounded">
                        AED {bookingModalStaff.dailyRateAED}/day (AED {bookingModalStaff.hourlyRateAED}/hr)
                      </span>
                    </div>
                    <p className="text-slate-600">{bookingModalStaff.title} • {bookingModalStaff.uaeExperienceYears} yrs UAE exp</p>
                    <div className="flex items-center space-x-2 mt-1 text-[11px] text-teal-700">
                      <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
                      <span>Emirates ID & DCD Safety Verified</span>
                    </div>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Client Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Tariq Al-Nuaimi"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-hidden"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Company / Organization (Optional)
                  </label>
                  <div className="relative">
                    <Building2 className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                    <input
                      type="text"
                      placeholder="e.g. Radisson Blu Dubai / Private Villa"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-hidden"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    UAE Contact Phone *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                    <input
                      type="tel"
                      required
                      placeholder="+971 50 123 4567"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-hidden"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                    <input
                      type="email"
                      placeholder="sales@company.ae"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-hidden"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Project Site Location (Dubai / UAE)
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                    <select
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-hidden bg-white"
                    >
                      <option value="Al Barsha, Dubai">Al Barsha, Dubai (Near Head Office)</option>
                      <option value="Dubai Marina / JBR">Dubai Marina / JBR</option>
                      <option value="Downtown Dubai / DIFC">Downtown Dubai / DIFC</option>
                      <option value="Palm Jumeirah">Palm Jumeirah</option>
                      <option value="Business Bay">Business Bay</option>
                      <option value="Dubai Healthcare City">Dubai Healthcare City</option>
                      <option value="Jumeirah Lake Towers (JLT)">Jumeirah Lake Towers (JLT)</option>
                      <option value="Al Quoz Industrial / Logistics">Al Quoz Industrial / Logistics</option>
                      <option value="Abu Dhabi / Other Emirates">Abu Dhabi / Other Emirates</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Engagement Duration & Urgency
                  </label>
                  <select
                    value={duration}
                    onChange={(e: any) => setDuration(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-hidden bg-white"
                  >
                    <option value="Urgent Emergency (2h SLA)">🚨 Urgent Emergency (2-Hour SLA)</option>
                    <option value="Hourly / One-Off">Hourly / One-Off Job (1 Day)</option>
                    <option value="1-3 Days">Short Term (1 - 3 Days)</option>
                    <option value="1-4 Weeks">Project Phase (1 - 4 Weeks)</option>
                    <option value="Long-Term Contract (AMC)">Annual Maintenance Contract (AMC)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Scope of Work & Specific Requirements
                </label>
                <textarea
                  rows={2}
                  placeholder="Describe your maintenance or installation requirements (e.g. FCU valve leak, drywall partition installation, tile replacement)..."
                  value={scopeDescription}
                  onChange={(e) => setScopeDescription(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-hidden"
                />
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-slate-200">
                <div className="flex items-center space-x-2 text-xs text-slate-600">
                  <span className="font-semibold">Preferred Callback:</span>
                  {(['whatsapp', 'phone', 'email'] as const).map((method) => (
                    <label key={method} className="flex items-center space-x-1 cursor-pointer capitalize">
                      <input
                        type="radio"
                        name="contactMethod"
                        checked={contactMethod === method}
                        onChange={() => setContactMethod(method)}
                        className="text-teal-600 focus:ring-teal-500"
                      />
                      <span>{method}</span>
                    </label>
                  ))}
                </div>

                <div className="flex items-center space-x-3">
                  <button
                    type="button"
                    onClick={closeBookingModal}
                    className="px-4 py-2 text-slate-600 hover:text-slate-900 text-sm font-semibold cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 bg-gradient-to-r from-teal-600 to-sky-600 hover:from-teal-700 hover:to-sky-700 text-white rounded-lg text-sm font-bold shadow-md hover:shadow-lg transition-all cursor-pointer inline-flex items-center space-x-1.5"
                  >
                    <span>Submit Work Order</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
