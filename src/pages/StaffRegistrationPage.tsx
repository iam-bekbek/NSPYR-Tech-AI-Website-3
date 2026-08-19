import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { SERVICES_DATA } from '../data/servicesData';
import { TradeCategory, VisaStatus, StaffAvailability, StaffRegistrationForm } from '../types';
import { 
  UserPlus, 
  CheckCircle2, 
  UploadCloud, 
  FileText, 
  ShieldCheck, 
  ArrowRight, 
  ArrowLeft, 
  Sparkles, 
  Calendar, 
  MapPin, 
  Phone, 
  Mail, 
  User, 
  Wrench, 
  DollarSign,
  AlertCircle,
  FileCheck
} from 'lucide-react';

export const StaffRegistrationPage: React.FC = () => {
  const { addStaffRegistration, navigateTo } = useApp();

  const [currentStep, setCurrentStep] = useState(1);
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  // Form State
  const [formData, setFormData] = useState<StaffRegistrationForm>({
    fullName: '',
    email: '',
    phone: '',
    whatsapp: '',
    nationality: 'UAE Resident',
    currentLocation: 'Al Barsha, Dubai',
    emiratesIdNumber: '784-1990-1234567-1',
    visaStatus: 'Employment Visa (Own/Nspyr)',
    primaryTrade: 'ac-hvac',
    secondaryTrades: ['electrical'],
    yearsExperience: 6,
    uaeExperienceYears: 4,
    availability: 'Available Immediately',
    expectedDailyRateAED: 600,
    languages: ['English', 'Arabic'],
    skillsText: 'Chiller diagnostics, VRV installation, brazing, duct sanitization',
    bio: 'Dedicated technical specialist with proven Dubai project delivery track record across commercial towers and residential communities.',
    certificationsText: 'HVAC EPA Universal, DEWA Safety Induction, First Aid',
    idCardFrontUploaded: true,
    idCardBackUploaded: true,
    tradeCertUploaded: true,
    policeClearanceUploaded: false
  });

  const updateField = (field: keyof StaffRegistrationForm, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (currentStep === 1 && (!formData.fullName || !formData.phone)) {
      alert('Please fill in your full name and UAE contact phone number.');
      return;
    }
    setCurrentStep((prev) => Math.min(prev + 1, 5));
    window.scrollTo({ top: 100, behavior: 'smooth' });
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
    window.scrollTo({ top: 100, behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = addStaffRegistration(formData);
    if (result.success) {
      setSubmittedRef(result.refId);
    }
  };

  return (
    <div id="staff-registration-page" className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header Banner */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 mb-8 border border-slate-800 shadow-xl">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-bold uppercase tracking-wider mb-3 border border-teal-500/30">
              <UserPlus className="w-4 h-4 text-teal-300" />
              <span>Nspyr Technical Staff Recruitment</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-black tracking-tight text-white">
              Join Our Verified Technician Team
            </h1>
            <p className="text-slate-300 text-sm mt-2 leading-relaxed">
              Partner with Dubai's premier technical services contractor. Access guaranteed high-tier hospitality, healthcare &amp; corporate work orders with prompt daily and monthly settlements.
            </p>
          </div>

          {/* Stepper indicator */}
          {!submittedRef && (
            <div className="mt-8 pt-6 border-t border-slate-800 grid grid-cols-5 gap-2 text-center text-xs">
              {[
                { num: 1, title: 'Personal' },
                { num: 2, title: 'Trade & Skills' },
                { num: 3, title: 'Documents' },
                { num: 4, title: 'Rates & Availability' },
                { num: 5, title: 'Review' }
              ].map((step) => {
                const isCurrent = currentStep === step.num;
                const isDone = currentStep > step.num;

                return (
                  <div key={step.num} className="flex flex-col items-center">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs mb-1.5 transition-all ${
                      isDone
                        ? 'bg-teal-500 text-slate-950'
                        : isCurrent
                        ? 'bg-white text-slate-950 ring-4 ring-teal-500/40'
                        : 'bg-slate-800 text-slate-400 border border-slate-700'
                    }`}>
                      {isDone ? <CheckCircle2 className="w-4 h-4" /> : step.num}
                    </div>
                    <span className={`text-[11px] hidden sm:block ${isCurrent ? 'font-bold text-white' : 'text-slate-400'}`}>
                      {step.title}
                    </span>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-md">
          {submittedRef ? (
            /* Success confirmation */
            <div className="py-10 text-center space-y-6">
              <div className="w-20 h-20 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-12 h-12" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900">Application Submitted!</h3>
                <p className="text-slate-600 text-sm max-w-md mx-auto">
                  Your technician profile has been successfully queued for compliance verification by the Nspyr operations desk in Al Barsha, Dubai.
                </p>
              </div>

              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 max-w-md mx-auto space-y-3 text-left text-xs">
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500">Tracking Reference:</span>
                  <span className="font-mono font-bold text-slate-900">{submittedRef}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500">Applicant Name:</span>
                  <span className="font-bold text-slate-900">{formData.fullName}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500">Primary Trade:</span>
                  <span className="font-bold text-teal-800">{formData.primaryTrade}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Initial Status:</span>
                  <span className="font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded">Pending Admin Approval</span>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={() => navigateTo('admin')}
                  className="w-full sm:w-auto px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold transition-colors cursor-pointer"
                >
                  View in Admin Portal Queue
                </button>
                <button
                  onClick={() => navigateTo('staff')}
                  className="w-full sm:w-auto px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-xl text-xs font-bold transition-colors cursor-pointer"
                >
                  Browse Public Directory
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Step 1: Personal Info */}
              {currentStep === 1 && (
                <div className="space-y-5 animate-in fade-in duration-200">
                  <div className="border-b border-slate-100 pb-4">
                    <h3 className="text-lg font-bold text-slate-900">Step 1: Personal &amp; Legal Identity</h3>
                    <p className="text-xs text-slate-500">Provide your official identification as per your UAE residency documents.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Full Name (As per Emirates ID) *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Tariq Mohammad Al-Sayed"
                        value={formData.fullName}
                        onChange={(e) => updateField('fullName', e.target.value)}
                        className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-teal-500 outline-hidden"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Emirates ID Number *</label>
                      <input
                        type="text"
                        required
                        placeholder="784-1990-1234567-1"
                        value={formData.emiratesIdNumber}
                        onChange={(e) => updateField('emiratesIdNumber', e.target.value)}
                        className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-teal-500 outline-hidden font-mono"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">UAE Contact Mobile Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+971 50 123 4567"
                        value={formData.phone}
                        onChange={(e) => updateField('phone', e.target.value)}
                        className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-teal-500 outline-hidden"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Email Address</label>
                      <input
                        type="email"
                        placeholder="technician@email.com"
                        value={formData.email}
                        onChange={(e) => updateField('email', e.target.value)}
                        className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-teal-500 outline-hidden"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Nationality</label>
                      <input
                        type="text"
                        placeholder="e.g. UAE / Filipino / Indian / Egyptian"
                        value={formData.nationality}
                        onChange={(e) => updateField('nationality', e.target.value)}
                        className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-teal-500 outline-hidden"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Current Base Location in UAE</label>
                      <select
                        value={formData.currentLocation}
                        onChange={(e) => updateField('currentLocation', e.target.value)}
                        className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-teal-500 outline-hidden bg-white"
                      >
                        <option value="Al Barsha, Dubai">Al Barsha, Dubai</option>
                        <option value="Al Quoz / Al Khail">Al Quoz / Al Khail</option>
                        <option value="Deira / Bur Dubai">Deira / Bur Dubai</option>
                        <option value="Dubai Marina / JLT">Dubai Marina / JLT</option>
                        <option value="Muhaisnah / Sonapur">Muhaisnah / Sonapur</option>
                        <option value="Sharjah / Ajman">Sharjah / Ajman</option>
                        <option value="Abu Dhabi">Abu Dhabi</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">UAE Residency Visa Status</label>
                    <select
                      value={formData.visaStatus}
                      onChange={(e: any) => updateField('visaStatus', e.target.value)}
                      className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-teal-500 outline-hidden bg-white"
                    >
                      <option value="Employment Visa (Own/Nspyr)">Employment Visa (Valid &amp; NOC Available)</option>
                      <option value="Partner/Freelance Visa">Partner / Green Freelance Visa</option>
                      <option value="Golden Visa">UAE Golden Visa (Specialist)</option>
                      <option value="Visit Visa (In Processing)">Visit Visa (Seeking Company Transfer)</option>
                    </select>
                  </div>
                </div>
              )}

              {/* Step 2: Trade & Skills */}
              {currentStep === 2 && (
                <div className="space-y-5 animate-in fade-in duration-200">
                  <div className="border-b border-slate-100 pb-4">
                    <h3 className="text-lg font-bold text-slate-900">Step 2: Trade Specialty &amp; UAE Experience</h3>
                    <p className="text-xs text-slate-500">Select your primary and secondary engineering trades.</p>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-2">Primary Trade Discipline (from 10 Services) *</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {SERVICES_DATA.map((service) => {
                        const isSelected = formData.primaryTrade === service.id;
                        return (
                          <div
                            key={service.id}
                            onClick={() => updateField('primaryTrade', service.id)}
                            className={`p-3.5 rounded-xl border cursor-pointer transition-all flex items-start space-x-3 ${
                              isSelected
                                ? 'bg-teal-50/80 border-teal-600 text-teal-950 ring-2 ring-teal-500/20'
                                : 'bg-slate-50/50 border-slate-200 hover:bg-slate-50 text-slate-700'
                            }`}
                          >
                            <input
                              type="radio"
                              name="primaryTrade"
                              checked={isSelected}
                              onChange={() => updateField('primaryTrade', service.id)}
                              className="mt-1 text-teal-600 focus:ring-teal-500"
                            />
                            <div className="text-xs">
                              <span className="font-bold block">{service.shortTitle}</span>
                              <span className="text-[11px] text-slate-500">{service.title}</span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Total Years in Trade</label>
                      <input
                        type="number"
                        min="1"
                        max="35"
                        value={formData.yearsExperience}
                        onChange={(e) => updateField('yearsExperience', Number(e.target.value))}
                        className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-teal-500 outline-hidden"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Years Working in UAE *</label>
                      <input
                        type="number"
                        min="0"
                        max="35"
                        value={formData.uaeExperienceYears}
                        onChange={(e) => updateField('uaeExperienceYears', Number(e.target.value))}
                        className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-teal-500 outline-hidden"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Key Technical Competencies &amp; Equipment Handled</label>
                    <textarea
                      rows={2}
                      placeholder="e.g. Megger insulation testing, Daikin VRV commissioning, Laser leveling, Knauf acoustic installation..."
                      value={formData.skillsText}
                      onChange={(e) => updateField('skillsText', e.target.value)}
                      className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-teal-500 outline-hidden"
                    />
                  </div>
                </div>
              )}

              {/* Step 3: Documents & Uploads */}
              {currentStep === 3 && (
                <div className="space-y-5 animate-in fade-in duration-200">
                  <div className="border-b border-slate-100 pb-4">
                    <h3 className="text-lg font-bold text-slate-900">Step 3: Verification Documents &amp; Certificates</h3>
                    <p className="text-xs text-slate-500">Upload photocopies of your Emirates ID and trade certifications.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    {/* Emirates ID Front */}
                    <div className="p-4 rounded-2xl border border-dashed border-teal-300 bg-teal-50/30 text-center space-y-2">
                      <div className="w-10 h-10 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center mx-auto">
                        <UploadCloud className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-bold text-slate-900 block">Emirates ID (Front Card) *</span>
                      <p className="text-[11px] text-slate-500">JPEG, PNG or PDF (Max 5MB)</p>
                      <button
                        type="button"
                        onClick={() => updateField('idCardFrontUploaded', true)}
                        className={`px-3 py-1 rounded-lg text-xs font-bold ${
                          formData.idCardFrontUploaded ? 'bg-teal-600 text-white' : 'bg-slate-200 text-slate-700'
                        }`}
                      >
                        {formData.idCardFrontUploaded ? '✓ Document Attached' : 'Attach File'}
                      </button>
                    </div>

                    {/* Emirates ID Back */}
                    <div className="p-4 rounded-2xl border border-dashed border-teal-300 bg-teal-50/30 text-center space-y-2">
                      <div className="w-10 h-10 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center mx-auto">
                        <UploadCloud className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-bold text-slate-900 block">Emirates ID (Back Card) *</span>
                      <p className="text-[11px] text-slate-500">Showing chip &amp; validity dates</p>
                      <button
                        type="button"
                        onClick={() => updateField('idCardBackUploaded', true)}
                        className={`px-3 py-1 rounded-lg text-xs font-bold ${
                          formData.idCardBackUploaded ? 'bg-teal-600 text-white' : 'bg-slate-200 text-slate-700'
                        }`}
                      >
                        {formData.idCardBackUploaded ? '✓ Document Attached' : 'Attach File'}
                      </button>
                    </div>

                    {/* Trade Certificate */}
                    <div className="p-4 rounded-2xl border border-dashed border-slate-300 bg-slate-50 text-center space-y-2">
                      <div className="w-10 h-10 rounded-full bg-slate-200 text-slate-700 flex items-center justify-center mx-auto">
                        <FileCheck className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-bold text-slate-900 block">Trade / Safety Certificate</span>
                      <p className="text-[11px] text-slate-500">DEWA Wireman, OSHA, CPO, IRATA</p>
                      <button
                        type="button"
                        onClick={() => updateField('tradeCertUploaded', !formData.tradeCertUploaded)}
                        className={`px-3 py-1 rounded-lg text-xs font-bold ${
                          formData.tradeCertUploaded ? 'bg-teal-600 text-white' : 'bg-slate-200 text-slate-700'
                        }`}
                      >
                        {formData.tradeCertUploaded ? '✓ Certificate Attached' : 'Attach Certificate'}
                      </button>
                    </div>

                    {/* Police Clearance */}
                    <div className="p-4 rounded-2xl border border-dashed border-slate-300 bg-slate-50 text-center space-y-2">
                      <div className="w-10 h-10 rounded-full bg-slate-200 text-slate-700 flex items-center justify-center mx-auto">
                        <ShieldCheck className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-bold text-slate-900 block">Dubai Police Good Conduct Card</span>
                      <p className="text-[11px] text-slate-500">Optional for fast-track VIP projects</p>
                      <button
                        type="button"
                        onClick={() => updateField('policeClearanceUploaded', !formData.policeClearanceUploaded)}
                        className={`px-3 py-1 rounded-lg text-xs font-bold ${
                          formData.policeClearanceUploaded ? 'bg-teal-600 text-white' : 'bg-slate-200 text-slate-700'
                        }`}
                      >
                        {formData.policeClearanceUploaded ? '✓ Police Clearance Attached' : 'Attach (Optional)'}
                      </button>
                    </div>

                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">List Certifications &amp; License Numbers</label>
                    <input
                      type="text"
                      placeholder="e.g. DEWA Wireman #55412, ASHRAE Member, Knauf Certified"
                      value={formData.certificationsText}
                      onChange={(e) => updateField('certificationsText', e.target.value)}
                      className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-teal-500 outline-hidden"
                    />
                  </div>
                </div>
              )}

              {/* Step 4: Availability & Rates */}
              {currentStep === 4 && (
                <div className="space-y-5 animate-in fade-in duration-200">
                  <div className="border-b border-slate-100 pb-4">
                    <h3 className="text-lg font-bold text-slate-900">Step 4: Availability &amp; Compensation</h3>
                    <p className="text-xs text-slate-500">Set your preferred work schedule and expected payout rates.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Availability Status</label>
                      <select
                        value={formData.availability}
                        onChange={(e: any) => updateField('availability', e.target.value)}
                        className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-teal-500 outline-hidden bg-white"
                      >
                        <option value="Available Immediately">⚡ Available Immediately (Full Time)</option>
                        <option value="Available in 24h">Available in 24 Hours</option>
                        <option value="Weekend Only">Weekends / Night Shifts Only</option>
                        <option value="On Assignment">Currently On Assignment (Future Roster)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Expected Daily Rate (AED / 8-hour shift) *</label>
                      <div className="relative">
                        <span className="absolute left-3.5 top-2.5 text-xs font-bold text-slate-400">AED</span>
                        <input
                          type="number"
                          step="10"
                          min="300"
                          max="2000"
                          value={formData.expectedDailyRateAED}
                          onChange={(e) => updateField('expectedDailyRateAED', Number(e.target.value))}
                          className="w-full pl-12 pr-3.5 py-2.5 border border-slate-300 rounded-xl text-sm font-bold text-slate-900 focus:ring-2 focus:ring-teal-500 outline-hidden"
                        />
                      </div>
                      <span className="text-[11px] text-slate-400 mt-1 block">
                        Approx: AED {Math.round(formData.expectedDailyRateAED / 8)}/hr • AED {(formData.expectedDailyRateAED * 22).toLocaleString()}/month
                      </span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Professional Bio / Self Summary</label>
                    <textarea
                      rows={3}
                      placeholder="Briefly describe your craftsmanship, notable projects in UAE, and work ethic..."
                      value={formData.bio}
                      onChange={(e) => updateField('bio', e.target.value)}
                      className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-teal-500 outline-hidden"
                    />
                  </div>
                </div>
              )}

              {/* Step 5: Review & Submit */}
              {currentStep === 5 && (
                <div className="space-y-5 animate-in fade-in duration-200">
                  <div className="border-b border-slate-100 pb-4">
                    <h3 className="text-lg font-bold text-slate-900">Step 5: Review &amp; Confirmation</h3>
                    <p className="text-xs text-slate-500">Please review all submitted information before dispatching to the admin queue.</p>
                  </div>

                  <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 text-xs">
                    <div className="grid grid-cols-2 gap-2 border-b border-slate-200 pb-2">
                      <span className="text-slate-500 font-semibold">Full Name:</span>
                      <span className="font-bold text-slate-900">{formData.fullName}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 border-b border-slate-200 pb-2">
                      <span className="text-slate-500 font-semibold">Emirates ID:</span>
                      <span className="font-mono font-bold text-slate-900">{formData.emiratesIdNumber}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 border-b border-slate-200 pb-2">
                      <span className="text-slate-500 font-semibold">Primary Trade:</span>
                      <span className="font-bold text-teal-800">{formData.primaryTrade}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 border-b border-slate-200 pb-2">
                      <span className="text-slate-500 font-semibold">UAE Experience:</span>
                      <span className="font-bold text-slate-900">{formData.uaeExperienceYears} Years</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 border-b border-slate-200 pb-2">
                      <span className="text-slate-500 font-semibold">Daily Rate:</span>
                      <span className="font-bold text-slate-900">AED {formData.expectedDailyRateAED} / day</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <span className="text-slate-500 font-semibold">Availability:</span>
                      <span className="font-bold text-emerald-700">{formData.availability}</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-teal-50 border border-teal-200 text-xs text-teal-900 flex items-start space-x-2.5">
                    <ShieldCheck className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
                    <span>
                      By submitting this registration, you certify that all UAE trade credentials and residency identification provided are genuine and subject to biometric verification at Nspyr Technical Services LLC, DAMAC Smart Heights, Al Barsha.
                    </span>
                  </div>
                </div>
              )}

              {/* Navigation Controls */}
              <div className="pt-6 border-t border-slate-200 flex items-center justify-between">
                {currentStep > 1 ? (
                  <button
                    type="button"
                    onClick={handleBack}
                    className="px-5 py-2.5 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-100 font-bold text-xs flex items-center space-x-1.5 cursor-pointer"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back</span>
                  </button>
                ) : (
                  <div></div>
                )}

                {currentStep < 5 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="px-6 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs shadow-md flex items-center space-x-1.5 cursor-pointer"
                  >
                    <span>Continue</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="px-8 py-3 rounded-xl bg-gradient-to-r from-teal-600 to-sky-600 hover:from-teal-700 hover:to-sky-700 text-white font-black text-sm shadow-lg hover:shadow-xl transition-all cursor-pointer flex items-center space-x-2"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>Submit Official Application</span>
                  </button>
                )}
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
