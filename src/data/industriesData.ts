import { IndustryItem } from '../types';

export const INDUSTRIES_DATA: IndustryItem[] = [
  {
    id: 'hospitality',
    name: 'Hospitality & Luxury Resorts',
    subtitle: 'Ultra-low-noise maintenance and luxury fitouts for Dubai 5-star hotels',
    description: 'Specialized MEP, guest-room acoustic improvements, pool temperature balancing, and night-shift preventive maintenance tailored to maintain uninterrupted guest satisfaction.',
    clientTypes: ['5-Star Luxury Hotels', 'Fine Dining Restaurants', 'Beachfront Resorts & Beach Clubs', 'Boutique Hotel Chains'],
    keyChallenges: [
      'Zero disturbance to in-house guests during occupied hours',
      'Instant 30-minute emergency HVAC and plumbing response SLAs',
      'Pristine luxury aesthetic standards with zero tolerance for visual defects'
    ],
    nspyrSolutions: [
      'Dedicated silent night-shift crews (11 PM - 6 AM) with muffled tooling',
      'Direct integration with hotel BMS and guest room management systems (GRMS)',
      'Pre-vetted hospitality-trained technicians in pristine Nspyr uniforms'
    ],
    complianceNotes: 'Dubai DTCM (Department of Economy & Tourism) luxury hotel classification standards and HACCP food safety kitchen compliance.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
    stats: '45+ Luxury Hotels Serviced'
  },
  {
    id: 'medical',
    name: 'Medical & Healthcare Clinics',
    subtitle: 'Sterile environment MEP, HEPA filtration and antimicrobial finishes',
    description: 'Clinical-grade MEP maintenance, negative pressure isolation room balancing, medical gas piping checks, and zero-VOC antimicrobial wall finishes for healthcare facilities.',
    clientTypes: ['Specialty Hospitals', 'Day Surgery Centers', 'Cosmetic & Dental Clinics', 'Dubai Healthcare City Diagnostics'],
    keyChallenges: [
      'Strict bio-containment and particulate airborne contamination controls',
      'Stringent Dubai Health Authority (DHA) audit readiness',
      'Continuous power reliability for critical life-support and cold-chain diagnostics'
    ],
    nspyrSolutions: [
      'ISO 14644 cleanroom certified duct sterilization and HEPA filter replacements',
      'Silver-ion antimicrobial epoxy wall and floor coatings',
      'Certified emergency generator transfer switch and UPS power diagnostics'
    ],
    complianceNotes: 'DHA Health Facility Guidelines (HFG), Dubai Healthcare City Authority (DHCA) regulatory compliance.',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80',
    stats: '30+ DHA Approved Facilities'
  },
  {
    id: 'education',
    name: 'Education & Universities',
    subtitle: 'Child-safe structural maintenance and rapid summer break campus overhauls',
    description: 'Turnkey refurbishment of classrooms, auditoriums, sports facilities, and laboratory MEP systems engineered with child-safe non-toxic materials.',
    clientTypes: ['IB & British International Schools', 'Higher Education Campuses in Knowledge Park', 'Early Learning Nurseries', 'STEM Research Labs'],
    keyChallenges: [
      'Massive workload compression into 4-week school summer break windows',
      'Mandatory strict background checks and child-safe physical job site barricading',
      'Heavy duty wear-and-tear resistance on floors, doors, and sanitaryware'
    ],
    nspyrSolutions: [
      'Multi-trade synchronized rapid deployment teams of up to 50 technicians',
      'High-impact acoustic drywall partitions and commercial vinyl flooring',
      '100% security vetted and background-verified technicians'
    ],
    complianceNotes: 'KHDA (Knowledge and Human Development Authority) safety guidelines and Dubai Civil Defence school fire codes.',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80',
    stats: '18 Campus Overhauls Completed'
  },
  {
    id: 'fitness',
    name: 'Fitness & Wellness Centers',
    subtitle: 'Heavy vibration dampening, high-humidity HVAC and sauna MEP',
    description: 'Engineering solutions for high-occupancy fitness clubs: high-velocity fresh air intake, pool & jacuzzi maintenance, acoustic drop-floor systems, and locker room fitouts.',
    clientTypes: ['Commercial Gym Chains', 'Boutique Pilates & Yoga Studios', 'CrossFit Boxes', 'Luxury Spa & Hammam Resorts'],
    keyChallenges: [
      'Extreme humidity control in hydrotherapy, steam rooms and indoor pools',
      'Heavy barbell impact shock transmission to neighboring commercial tenants',
      'Continuous sweat odor mitigation and fresh air exchange rates'
    ],
    nspyrSolutions: [
      'High CFM dedicated outdoor air systems (DOAS) with UV ozone odor neutralizers',
      'Multi-layer rubber acoustic isolation underlay and anti-slip wet area epoxy tiles',
      'Automated commercial pool heating, cooling, and automated saline chlorination'
    ],
    complianceNotes: 'Dubai Municipality Public Health & Safety department pool standards and noise limit regulations.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80',
    stats: '60+ Gyms & Spas Supported'
  },
  {
    id: 'events',
    name: 'Events & Temporary Pavilions',
    subtitle: 'Fast-track structural builds, rapid electrical distribution and quick strike-downs',
    description: 'Rapid turnaround technical staffing for exhibition pavilions, corporate galas, trade shows, and temporary venue conversions with guaranteed turnarounds.',
    clientTypes: ['Dubai World Trade Centre Exhibitors', 'DIFC Luxury Brand Pop-Ups', 'Concert & Festival Venues', 'Government Gala Pavilions'],
    keyChallenges: [
      'Hyper-compressed 48-hour build and 12-hour de-rig timelines',
      'Temporary 3-phase high amperage power routing with zero trip tolerance',
      'Flawless surface finishes under high-power stage and broadcast lighting'
    ],
    nspyrSolutions: [
      '24/7 on-site standby emergency electricians and carpenter strike-crews',
      'Modular lightweight acoustic partition panels and rapid-laying exhibition flooring',
      'Laser-leveled stage rigging support and decorative Mashrabiya installations'
    ],
    complianceNotes: 'DWTC Venue Safety Regulations, Dubai Civil Defence temporary structure event permits.',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80',
    stats: '120+ Events & Pavilions Delivered'
  },
  {
    id: 'corporate',
    name: 'Corporate & Commercial Offices',
    subtitle: 'Grade-A office fitouts, smart lighting automation and facility maintenance',
    description: 'Full-scope workspace technical services: demountable glass office partitions, server room precision cooling (CRAC units), data cabling, and smart meeting room joinery.',
    clientTypes: ['DIFC Financial Institutions', 'Tech Headquarters in Dubai Media City', 'Multinational Regional HQs', 'Co-working Hubs'],
    keyChallenges: [
      'Zero downtime for corporate IT server rooms and fiber conduits',
      'Adherence to strict high-rise building management rules (DIFC, Emaar, Tecom)',
      'Energy efficiency optimization to cut commercial DEWA utility bills'
    ],
    nspyrSolutions: [
      'CRAC precision cooling calibration and redundant N+1 power switchboards',
      'Acoustic phone booth and glass meeting room partition installations',
      'Smart DALI/KNX lighting sensors and intelligent programmable thermostats'
    ],
    complianceNotes: 'Dubai Green Building Al Safat Silver/Gold compliance and LEED Commercial Interior specifications.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
    stats: '85+ Corporate HQs Serviced'
  }
];
