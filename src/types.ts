export type TradeCategory = 
  | 'ac-hvac'
  | 'electrical'
  | 'false-ceiling'
  | 'carpentry-flooring'
  | 'tiling'
  | 'painting'
  | 'swimming-pools'
  | 'plaster-wallpaper'
  | 'cleaning'
  | 'engraving-ornamentation';

export interface ServiceItem {
  id: TradeCategory;
  title: string;
  shortTitle: string;
  description: string;
  fullScope: string[];
  keyDeliverables: string[];
  uaeStandards: string;
  iconName: string;
  image: string;
  techniciansAvailable: number;
  startingRateAED: number; // in AED/hr
  emergencyAvailable: boolean;
}

export type StaffAvailability = 'Available Immediately' | 'Available in 24h' | 'On Assignment' | 'Weekend Only';

export type VisaStatus = 'Employment Visa (Own/Nspyr)' | 'Partner/Freelance Visa' | 'Visit Visa (In Processing)' | 'Golden Visa';

export interface StaffCertification {
  name: string;
  issuer: string;
  year: number;
  verified: boolean;
}

export interface StaffReview {
  id: string;
  clientName: string;
  companyName?: string;
  rating: number;
  comment: string;
  date: string;
  projectType: string;
}

export interface StaffMember {
  id: string;
  fullName: string;
  title: string;
  avatar: string;
  primaryTrade: TradeCategory;
  secondaryTrades: TradeCategory[];
  yearsExperience: number;
  uaeExperienceYears: number;
  nationality: string;
  location: string;
  availability: StaffAvailability;
  hourlyRateAED: number;
  dailyRateAED: number;
  monthlyRateAED?: number;
  rating: number;
  completedJobs: number;
  visaStatus: VisaStatus;
  emiratesIdVerified: boolean;
  securityCleared: boolean;
  bio: string;
  certifications: StaffCertification[];
  skills: string[];
  languages: string[];
  portfolioImages: string[];
  reviews: StaffReview[];
  status: 'approved' | 'pending' | 'rejected';
  registeredAt: string;
}

export type IndustryType = 'hospitality' | 'medical' | 'education' | 'fitness' | 'events' | 'corporate';

export interface IndustryItem {
  id: IndustryType;
  name: string;
  subtitle: string;
  description: string;
  clientTypes: string[];
  keyChallenges: string[];
  nspyrSolutions: string[];
  complianceNotes: string;
  image: string;
  stats: string;
}

export interface BookingSubmission {
  id: string;
  clientName: string;
  companyName?: string;
  email: string;
  phone: string;
  industry: IndustryType | 'residential' | 'other';
  uaeLocation: string; // e.g. "Al Barsha, Dubai"
  requiredTrades: TradeCategory[];
  headcountNeeded: number;
  projectDuration: 'Hourly / One-Off' | '1-3 Days' | '1-4 Weeks' | 'Long-Term Contract (AMC)' | 'Urgent Emergency (2h SLA)';
  startDate: string;
  scopeDescription: string;
  estimatedCostMinAED: number;
  estimatedCostMaxAED: number;
  status: 'new' | 'in-review' | 'technician-assigned' | 'completed' | 'cancelled';
  assignedStaffIds?: string[];
  assignedStaffNames?: string[];
  createdAt: string;
  preferredContact: 'phone' | 'email' | 'whatsapp';
}

export interface StaffRegistrationForm {
  fullName: string;
  email: string;
  phone: string;
  whatsapp: string;
  nationality: string;
  currentLocation: string;
  emiratesIdNumber: string;
  visaStatus: VisaStatus;
  primaryTrade: TradeCategory;
  secondaryTrades: TradeCategory[];
  yearsExperience: number;
  uaeExperienceYears: number;
  availability: StaffAvailability;
  expectedDailyRateAED: number;
  languages: string[];
  skillsText: string;
  bio: string;
  certificationsText: string;
  idCardFrontUploaded: boolean;
  idCardBackUploaded: boolean;
  tradeCertUploaded: boolean;
  policeClearanceUploaded: boolean;
}
