import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { SERVICES_DATA } from '../data/servicesData';
import { TradeCategory, IndustryType } from '../types';
import { 
  Building2, 
  MapPin, 
  Wrench, 
  Calendar, 
  Users, 
  Clock, 
  CheckCircle2, 
  Phone, 
  Mail, 
  User, 
  Calculator, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  FileText,
  Zap,
  Printer
} from 'lucide-react';

export const ClientBookingPage: React.FC = () => {
  const { addClientBooking, navigateTo } = useApp();

  // Form State
  const [clientName, setClientName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [industry, setIndustry] = useState<IndustryType | 'residential'>('corporate');
  const [uaeLocation, setUaeLocation] = useState('Al Barsha, Dubai');
  const [selectedTrades, setSelectedTrades] = useState<TradeCategory[]>(['ac-hvac']);
  const [headcountNeeded, setHeadcountNeeded] = useState(2);
  const [projectDuration, setProjectDuration] = useState<'Hourly / One-Off' | '1-3 Days' | '1-4 Weeks' | 'Long-Term Contract (AMC)' | 'Urgent Emergency (2h SLA)'>('1-3 Days');
  const [startDate, setStartDate] = useState(new Date().toISOString().split('T')[0]);
  const [scopeDescription, setScopeDescription] = useState('');
  const [preferredContact, setPreferredContact] = useState<'phone' | 'email' | 'whatsapp'>('whatsapp');
  
  // Submission
  const [submittedBookingId, setSubmittedBookingId] = useState<string | null>(null);

  // Toggle trade
  const toggleTrade = (tradeId: TradeCategory) => {
    if (selectedTrades.includes(tradeId)) {
      if (selectedTrades.length > 1) {
        setSelectedTrades(selectedTrades.filter((t) => t !== tradeId));
      }
    } else {
      setSelectedTrades([...selectedTrades, tradeId]);
    }
  };

  // Cost Estimation Calculator
  const calculateEstimate = () => {
    const selectedServiceObjs = SERVICES_DATA.filter((s) => selectedTrades.includes(s.id));
    const avgHourlyRate = selectedServiceObjs.length > 0
      ? selectedServiceObjs.reduce((acc, curr) => acc + curr.startingRateAED, 0) / selectedServiceObjs.length
      : 80;

    let durationMultiplier = 1;
    let shiftHours = 8;

    if (projectDuration === 'Urgent Emergency (2h SLA)') {
      durationMultiplier = 1.5;
      shiftHours = 4; // Emergency callout
    } else if (projectDuration === 'Hourly / One-Off') {
      durationMultiplier = 1;
      shiftHours = 8;
    } else if (projectDuration === '1-3 Days') {
      durationMultiplier = 2.5;
      shiftHours = 8;
    } else if (projectDuration === '1-4 Weeks') {
      durationMultiplier = 12;
      shiftHours = 8;
    } else if (projectDuration === 'Long-Term Contract (AMC)') {
      durationMultiplier = 22; // 1 month retainer base
      shiftHours = 8;
    }

    const baseCost = avgHourlyRate * shiftHours * headcountNeeded * durationMultiplier;
    const minAED = Math.round(baseCost);
    const maxAED = Math.round(baseCost * 1.3);

    return { minAED, maxAED };
  };

  const { minAED, maxAED } = calculateEstimate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName || !phone) {
      alert('Please provide your name and UAE contact phone.');
      return;
    }

    const result = addClientBooking({
      clientName,
      companyName: companyName || undefined,
      email: email || `${phone.replace(/\D/g, '')}@client.nspyr.ae`,
      phone,
      industry,
      uaeLocation,
      requiredTrades: selectedTrades,
      headcountNeeded,
      projectDuration,
      startDate,
      scopeDescription: scopeDescription || `Contract request for ${selectedTrades.join(', ')} in ${uaeLocation}`,
      estimatedCostMinAED: minAED,
      estimatedCostMaxAED: maxAED,
      preferredContact
    });

    if (result.success) {
      setSubmittedBookingId(result.id);
      window.scrollTo({ top: 100, behavior: 'smooth' });
    }
  };

  return (
    <div id="client-booking-page" className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-900 via-teal-950 to-slate-900 rounded-3xl p-8 sm:p-12 mb-8 text-white shadow-xl border border-teal-800">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-bold uppercase tracking-wider mb-3 border border-teal-500/30">
              Contracting &amp; Technical Manpower Booking
            </span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              Request Technical Services &amp; Quotation
            </h1>
            <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
              Book certified multi-trade teams, schedule facility maintenance, or dispatch emergency MEP technicians anywhere in Dubai and UAE.
            </p>
          </div>

          <div className="mt-6 pt-6 border-t border-slate-800 flex flex-wrap items-center gap-6 text-xs text-teal-200">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-teal-400" />
              <span>Full DED Licensed Operations</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-teal-400" />
              <span>Instant Response from Al Barsha Desk</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-teal-400" />
              <span>100% Insured &amp; Biometric Vetted</span>
            </div>
          </div>
        </div>

        {submittedBookingId ? (
          /* Confirmation Receipt Card */
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl text-center space-y-6 animate-in zoom-in-95 duration-200">
            <div className="w-20 h-20 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-12 h-12" />
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Work Order Quotation Queued!</h2>
              <p className="text-slate-600 text-sm max-w-lg mx-auto">
                Thank you, <strong className="text-slate-900">{clientName}</strong>. Your work order requisition has been recorded. Our project manager will reach out via <strong className="text-teal-700">{preferredContact.toUpperCase()}</strong> with a finalized site inspection schedule.
              </p>
            </div>

            {/* Receipt Summary Box */}
            <div className="bg-slate-50 rounded-2xl p-6 max-w-xl mx-auto border border-slate-200 text-left text-xs space-y-3">
              <div className="flex justify-between border-b border-slate-200 pb-2">
                <span className="text-slate-500 font-semibold">Work Order Reference:</span>
                <span className="font-mono font-bold text-slate-900 text-sm">{submittedBookingId}</span>
              </div>
              <div className="flex justify-between border-b border-slate-200 pb-2">
                <span className="text-slate-500 font-semibold">Project Site Location:</span>
                <span className="font-bold text-slate-900">{uaeLocation}</span>
              </div>
              <div className="flex justify-between border-b border-slate-200 pb-2">
                <span className="text-slate-500 font-semibold">Required Trades:</span>
                <span className="font-bold text-teal-800">{selectedTrades.join(', ')}</span>
              </div>
              <div className="flex justify-between border-b border-slate-200 pb-2">
                <span className="text-slate-500 font-semibold">Headcount &amp; Schedule:</span>
                <span className="font-bold text-slate-900">{headcountNeeded} Technicians • {projectDuration}</span>
              </div>
              <div className="flex justify-between border-b border-slate-200 pb-2">
                <span className="text-slate-500 font-semibold">Starting Date:</span>
                <span className="font-bold text-slate-900">{startDate}</span>
              </div>
              <div className="flex justify-between pt-1">
                <span className="text-slate-500 font-semibold">Budget Range Estimate:</span>
                <span className="font-black text-slate-900 text-sm">AED {minAED.toLocaleString()} - {maxAED.toLocaleString()}</span>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => window.print()}
                className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-xs font-bold transition-colors flex items-center space-x-1.5 cursor-pointer"
              >
                <Printer className="w-4 h-4" />
                <span>Print Work Order</span>
              </button>
              <button
                onClick={() => navigateTo('admin')}
                className="px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold transition-colors cursor-pointer"
              >
                View in Admin Operations Queue
              </button>
              <button
                onClick={() => setSubmittedBookingId(null)}
                className="px-6 py-2.5 bg-teal-600 hover:bg-teal-700 text-white rounded-xl text-xs font-bold transition-colors cursor-pointer"
              >
                Submit Another Request
              </button>
            </div>
          </div>
        ) : (
          /* Main 2-Column Form & Cost Estimator */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left 8-Cols: Interactive Multi-Step Builder */}
            <div className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-md space-y-8">
              <form onSubmit={handleSubmit} className="space-y-8">
                
                {/* 1. Client & Contact Info */}
                <div className="space-y-4">
                  <div className="border-b border-slate-100 pb-3">
                    <h3 className="text-base font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                      <User className="w-4 h-4 text-teal-600" />
                      <span>1. Client Information &amp; Site Details</span>
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Full Name / Contact Person *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Sultan Al-Nuaimi"
                        value={clientName}
                        onChange={(e) => setClientName(e.target.value)}
                        className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-teal-500 outline-hidden"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Company / Facility Name (Optional)</label>
                      <input
                        type="text"
                        placeholder="e.g. Hilton Dubai / Luxury Residence"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-teal-500 outline-hidden"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">UAE Contact Mobile *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+971 50 123 4567"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-teal-500 outline-hidden"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Email Address</label>
                      <input
                        type="email"
                        placeholder="operations@company.ae"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-teal-500 outline-hidden"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Sector / Industry Type</label>
                      <select
                        value={industry}
                        onChange={(e: any) => setIndustry(e.target.value)}
                        className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-teal-500 outline-hidden bg-white"
                      >
                        <option value="hospitality">Hospitality &amp; Luxury Resorts</option>
                        <option value="corporate">Corporate &amp; Commercial Offices</option>
                        <option value="medical">Medical &amp; Healthcare Clinics</option>
                        <option value="education">Education &amp; Universities</option>
                        <option value="fitness">Fitness &amp; Wellness Centers</option>
                        <option value="events">Events &amp; Temporary Pavilions</option>
                        <option value="residential">High-End Residential / Private Villa</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Project Site Location (Dubai / UAE)</label>
                      <select
                        value={uaeLocation}
                        onChange={(e) => setUaeLocation(e.target.value)}
                        className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-teal-500 outline-hidden bg-white"
                      >
                        <option value="Al Barsha, Dubai">Al Barsha, Dubai (Near Head Office)</option>
                        <option value="Downtown Dubai / DIFC">Downtown Dubai / DIFC</option>
                        <option value="Dubai Marina / JBR">Dubai Marina / JBR</option>
                        <option value="Palm Jumeirah">Palm Jumeirah</option>
                        <option value="Business Bay">Business Bay</option>
                        <option value="Dubai Healthcare City">Dubai Healthcare City</option>
                        <option value="Jumeirah Lake Towers (JLT)">Jumeirah Lake Towers (JLT)</option>
                        <option value="Al Quoz Industrial / Logistics">Al Quoz Industrial / Logistics</option>
                        <option value="Abu Dhabi / Other Emirates">Abu Dhabi / Other Emirates</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* 2. Required Trades Selection */}
                <div className="space-y-4">
                  <div className="border-b border-slate-100 pb-3 flex items-center justify-between">
                    <h3 className="text-base font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                      <Wrench className="w-4 h-4 text-teal-600" />
                      <span>2. Select Required Trades (Multi-Select)</span>
                    </h3>
                    <span className="text-xs text-teal-700 font-bold bg-teal-50 px-2 py-0.5 rounded">
                      {selectedTrades.length} Selected
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {SERVICES_DATA.map((srv) => {
                      const isChecked = selectedTrades.includes(srv.id);

                      return (
                        <div
                          key={srv.id}
                          onClick={() => toggleTrade(srv.id)}
                          className={`p-3.5 rounded-xl border cursor-pointer transition-all flex items-start space-x-3 ${
                            isChecked
                              ? 'bg-teal-50/80 border-teal-600 text-teal-950 ring-2 ring-teal-500/20'
                              : 'bg-slate-50/60 border-slate-200 hover:bg-slate-50 text-slate-700'
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => toggleTrade(srv.id)}
                            className="mt-1 rounded text-teal-600 focus:ring-teal-500"
                          />
                          <div className="text-xs flex-1">
                            <div className="flex items-center justify-between">
                              <span className="font-bold">{srv.shortTitle}</span>
                              <span className="text-[10px] font-semibold text-slate-500">AED {srv.startingRateAED}/hr</span>
                            </div>
                            <span className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">{srv.description}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* 3. Scale, Headcount & Schedule */}
                <div className="space-y-4">
                  <div className="border-b border-slate-100 pb-3">
                    <h3 className="text-base font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-teal-600" />
                      <span>3. Headcount, Duration &amp; Timeline</span>
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Headcount Needed: <strong className="text-teal-700 font-black">{headcountNeeded} Technicians</strong>
                      </label>
                      <input
                        type="range"
                        min="1"
                        max="20"
                        value={headcountNeeded}
                        onChange={(e) => setHeadcountNeeded(Number(e.target.value))}
                        className="w-full accent-teal-600 cursor-pointer"
                      />
                      <div className="flex justify-between text-[10px] text-slate-400">
                        <span>1 tech</span>
                        <span>10 techs</span>
                        <span>20+ squad</span>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Engagement Duration</label>
                      <select
                        value={projectDuration}
                        onChange={(e: any) => setProjectDuration(e.target.value)}
                        className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-teal-500 outline-hidden bg-white"
                      >
                        <option value="Urgent Emergency (2h SLA)">🚨 Urgent Emergency (2h SLA)</option>
                        <option value="Hourly / One-Off">Hourly / Single Day Inspection</option>
                        <option value="1-3 Days">Short Term (1 - 3 Days)</option>
                        <option value="1-4 Weeks">Project Execution (1 - 4 Weeks)</option>
                        <option value="Long-Term Contract (AMC)">Annual Maintenance (AMC)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Desired Start Date</label>
                      <input
                        type="date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-teal-500 outline-hidden bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Scope Details &amp; Special Site Instructions</label>
                    <textarea
                      rows={3}
                      placeholder="Describe the problem, square footage, specific building access requirements (e.g. security permits in DIFC, night-shift hours)..."
                      value={scopeDescription}
                      onChange={(e) => setScopeDescription(e.target.value)}
                      className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-teal-500 outline-hidden"
                    />
                  </div>
                </div>

                {/* 4. Preferred Contact & Action */}
                <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center space-x-3 text-xs text-slate-700">
                    <span className="font-bold">Contact Preference:</span>
                    {(['whatsapp', 'phone', 'email'] as const).map((method) => (
                      <label key={method} className="flex items-center space-x-1 cursor-pointer capitalize">
                        <input
                          type="radio"
                          name="preferredContact"
                          checked={preferredContact === method}
                          onChange={() => setPreferredContact(method)}
                          className="text-teal-600 focus:ring-teal-500"
                        />
                        <span>{method}</span>
                      </label>
                    ))}
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-teal-600 to-sky-600 hover:from-teal-700 hover:to-sky-700 text-white font-black text-sm shadow-lg hover:shadow-xl transition-all cursor-pointer flex items-center justify-center space-x-2"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>Submit Work Order Requisition</span>
                  </button>
                </div>

              </form>
            </div>

            {/* Right 4-Cols: Live Automated Quotation Box */}
            <div className="lg:col-span-4 space-y-6">
              
              <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-xl space-y-6 sticky top-24">
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <div className="flex items-center space-x-2">
                    <Calculator className="w-5 h-5 text-teal-400" />
                    <h4 className="font-bold text-sm text-white uppercase tracking-wider">Automated Estimate</h4>
                  </div>
                  <span className="text-[10px] font-mono bg-slate-800 px-2 py-0.5 rounded text-teal-300">
                    UAE DIRHAMS
                  </span>
                </div>

                {/* Main Figures */}
                <div>
                  <span className="text-xs text-slate-400 block mb-1">Estimated Budget Range:</span>
                  <div className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                    AED {minAED.toLocaleString()} <span className="text-slate-400 font-normal text-lg">-</span> {maxAED.toLocaleString()}
                  </div>
                  <p className="text-[11px] text-teal-300 mt-1">
                    Includes verified technician wages, standard tooling &amp; basic consumables.
                  </p>
                </div>

                {/* Summary Parameters */}
                <div className="space-y-2.5 pt-4 border-t border-slate-800 text-xs">
                  <div className="flex justify-between text-slate-300">
                    <span className="text-slate-400">Selected Trades:</span>
                    <span className="font-bold text-right text-teal-200">{selectedTrades.length} Specialty Trade(s)</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span className="text-slate-400">Headcount:</span>
                    <span className="font-bold">{headcountNeeded} Certified Technician(s)</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span className="text-slate-400">Engagement Mode:</span>
                    <span className="font-bold">{projectDuration}</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span className="text-slate-400">Location:</span>
                    <span className="font-bold">{uaeLocation.split(',')[0]}</span>
                  </div>
                </div>

                {/* Value Props */}
                <div className="pt-4 border-t border-slate-800 space-y-2 text-[11px] text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-400" />
                    <span>Free on-site technical inspection &amp; bill of quantities</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-400" />
                    <span>Itemized transparent invoicing with zero hidden charges</span>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="tel:+971044513517"
                    className="w-full py-2.5 px-4 bg-slate-800 hover:bg-slate-700 text-teal-300 font-bold rounded-xl text-xs flex items-center justify-center space-x-2 transition-colors border border-slate-700"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Direct Call: +971 04 451 3517</span>
                  </a>
                </div>
              </div>

            </div>

          </div>
        )}

      </div>
    </div>
  );
};
