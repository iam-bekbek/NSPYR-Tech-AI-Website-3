import { StaffMember } from '../types';

export const INITIAL_STAFF_MEMBERS: StaffMember[] = [
  {
    id: 'tech-001',
    fullName: 'Rashid Al-Mansoor',
    title: 'Senior HVAC & Chiller Systems Specialist',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
    primaryTrade: 'ac-hvac',
    secondaryTrades: ['electrical'],
    yearsExperience: 12,
    uaeExperienceYears: 8,
    nationality: 'Jordanian',
    location: 'Al Barsha, Dubai',
    availability: 'Available Immediately',
    hourlyRateAED: 95,
    dailyRateAED: 720,
    monthlyRateAED: 14500,
    rating: 4.9,
    completedJobs: 184,
    visaStatus: 'Employment Visa (Own/Nspyr)',
    emiratesIdVerified: true,
    securityCleared: true,
    bio: 'Certified MEP HVAC Engineer with deep expertise in centrifugal chillers, Daikin VRV systems, and AHU controls across Dubai five-star hotels and Grade-A commercial towers.',
    certifications: [
      { name: 'ASHRAE Certified HVAC Designer', issuer: 'ASHRAE UAE Chapter', year: 2019, verified: true },
      { name: 'Daikin VRV Advanced Commissioning', issuer: 'Daikin Middle East', year: 2021, verified: true },
      { name: 'Dubai Municipality Green Building Specialist', issuer: 'Dubai Municipality', year: 2022, verified: true }
    ],
    skills: ['Centrifugal Chillers', 'VRV / VRF Diagnostics', 'Airflow Balancing CFM', 'Refrigerant Recovery R410A', 'Duct Robotic Sanitization'],
    languages: ['English (Fluent)', 'Arabic (Native)'],
    portfolioImages: [
      'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80'
    ],
    reviews: [
      {
        id: 'rev-1',
        clientName: 'Karim Haddad',
        companyName: 'Jumeirah Beach Luxury Suites',
        rating: 5,
        comment: 'Rashid resolved an intermittent chiller pressure drop that two other contractors failed to diagnose. Outstanding professionalism.',
        date: '2026-07-12',
        projectType: 'Chiller Plant Overhaul'
      },
      {
        id: 'rev-2',
        clientName: 'Sarah Jenkins',
        companyName: 'MedCare Clinic Al Safa',
        rating: 5,
        comment: 'Punctual, thorough, and left the AHU plant room spotless. Air balance test passed DHA audit with flying colors.',
        date: '2026-06-28',
        projectType: 'HEPA Filtration Retrofit'
      }
    ],
    status: 'approved',
    registeredAt: '2026-01-15'
  },
  {
    id: 'tech-002',
    fullName: 'Vikram Suresh Patel',
    title: 'Lead Commercial Electrician & Control Panel Tech',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80',
    primaryTrade: 'electrical',
    secondaryTrades: ['ac-hvac'],
    yearsExperience: 10,
    uaeExperienceYears: 7,
    nationality: 'Indian',
    location: 'Deira / Al Quoz, Dubai',
    availability: 'Available Immediately',
    hourlyRateAED: 85,
    dailyRateAED: 640,
    monthlyRateAED: 13000,
    rating: 4.85,
    completedJobs: 215,
    visaStatus: 'Employment Visa (Own/Nspyr)',
    emiratesIdVerified: true,
    securityCleared: true,
    bio: 'DEWA licensed master electrician specialized in SMDB/MDB switchgear wiring, thermal imaging diagnostics, KNX automation, and industrial cable pulling.',
    certifications: [
      { name: 'DEWA Approved Wireman License', issuer: 'Dubai Electricity & Water Authority', year: 2018, verified: true },
      { name: 'FLIR Certified Thermal Thermographer (Level 1)', issuer: 'ITC Middle East', year: 2020, verified: true },
      { name: 'KNX Advanced Home & Building Automation', issuer: 'KNX Association UAE', year: 2023, verified: true }
    ],
    skills: ['DEWA Code Compliance', 'Thermal Breaker Scans', '3-Phase Power Balancing', 'KNX / DALI Lighting', 'Backup Generator ATS'],
    languages: ['English (Fluent)', 'Hindi (Native)', 'Arabic (Basic)'],
    portfolioImages: [
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=80'
    ],
    reviews: [
      {
        id: 'rev-3',
        clientName: 'Nasser Al-Qasimi',
        companyName: 'DIFC Capital Offices',
        rating: 5,
        comment: 'Rewired our main distribution panel during a 12-hour Sunday maintenance window. Zero downtime for our server room.',
        date: '2026-08-02',
        projectType: 'MDB Panel Upgrade'
      }
    ],
    status: 'approved',
    registeredAt: '2026-02-10'
  },
  {
    id: 'tech-003',
    fullName: 'Mateo De Silva',
    title: 'Master Joiner & Parquet Wood Flooring Craftsman',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
    primaryTrade: 'carpentry-flooring',
    secondaryTrades: ['engraving-ornamentation', 'false-ceiling'],
    yearsExperience: 14,
    uaeExperienceYears: 9,
    nationality: 'Filipino',
    location: 'Dubai Marina / JLT',
    availability: 'Available in 24h',
    hourlyRateAED: 90,
    dailyRateAED: 680,
    monthlyRateAED: 13800,
    rating: 4.95,
    completedJobs: 168,
    visaStatus: 'Employment Visa (Own/Nspyr)',
    emiratesIdVerified: true,
    securityCleared: true,
    bio: 'Artisan carpenter with 9 years working on high-end penthouses on Palm Jumeirah and luxury boutique hotels in Downtown Dubai. Expert in herringbone parquet, acoustic wood slat walls, and custom reception desks.',
    certifications: [
      { name: 'Bona Certified Wood Floor Specialist', issuer: 'Bona Middle East', year: 2019, verified: true },
      { name: 'City & Guilds Level 3 Carpentry & Joinery', issuer: 'City & Guilds UK', year: 2015, verified: true },
      { name: 'Dubai Municipality Site Safety Pass', issuer: 'Dubai Municipality', year: 2024, verified: true }
    ],
    skills: ['Herringbone / Chevron Parquet', 'Acoustic Slat Wall Cladding', 'Bespoke Reception Joinery', 'Hardwood Sanding & Oiling', 'Concealed Door Hanging'],
    languages: ['English (Fluent)', 'Tagalog (Native)'],
    portfolioImages: [
      'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80'
    ],
    reviews: [
      {
        id: 'rev-4',
        clientName: 'Elena Rostova',
        companyName: 'Private Villa - Palm Jumeirah',
        rating: 5,
        comment: 'The French herringbone oak floor Mateo installed is breathtaking. The mitres and border detailing are absolute perfection.',
        date: '2026-07-22',
        projectType: 'Hardwood Parquet Installation'
      }
    ],
    status: 'approved',
    registeredAt: '2026-01-20'
  },
  {
    id: 'tech-004',
    fullName: 'Marco Antonelli',
    title: 'Senior Large-Format Porcelain & Marble Installer',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80',
    primaryTrade: 'tiling',
    secondaryTrades: ['swimming-pools', 'plaster-wallpaper'],
    yearsExperience: 15,
    uaeExperienceYears: 6,
    nationality: 'Italian',
    location: 'Business Bay, Dubai',
    availability: 'Available Immediately',
    hourlyRateAED: 110,
    dailyRateAED: 850,
    monthlyRateAED: 17000,
    rating: 4.98,
    completedJobs: 142,
    visaStatus: 'Partner/Freelance Visa',
    emiratesIdVerified: true,
    securityCleared: true,
    bio: 'Italian tile setter with extensive experience in ultra-large format porcelain slabs (3.2m x 1.6m), book-matched Calacatta marble, and zero-lippage precision bathrooms in Dubai luxury residences.',
    certifications: [
      { name: 'Master Tile Setter Diploma', issuer: 'Scuola Edile di Modena', year: 2012, verified: true },
      { name: 'Mapei Epoxy Specialist Certification', issuer: 'Mapei UAE', year: 2021, verified: true },
      { name: 'Raimondi Large-Format Handling License', issuer: 'Raimondi SpA', year: 2022, verified: true }
    ],
    skills: ['Large Format 3200x1600mm Slabs', 'Bookmatched Italian Marble', 'Zero-Lippage Laser Tuning', 'Mapei Kerapoxy Grouting', 'Wet Area Tanking & Flood Testing'],
    languages: ['English (Fluent)', 'Italian (Native)', 'Spanish (Conversational)'],
    portfolioImages: [
      'https://images.unsplash.com/photo-1502005229762-ee1b2b8ab00f?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80'
    ],
    reviews: [
      {
        id: 'rev-5',
        clientName: 'Faisal Al-Nuaimi',
        companyName: 'Emirates Hills Residence',
        rating: 5,
        comment: 'Marco installed 80 sqm of 3m marble slabs in our master bathroom with zero broken tiles and invisible joints. Worth every Dirham.',
        date: '2026-07-30',
        projectType: 'Luxury Marble Fitout'
      }
    ],
    status: 'approved',
    registeredAt: '2026-02-01'
  },
  {
    id: 'tech-005',
    fullName: 'Hamza Tariq',
    title: 'Commercial Swimming Pool MEP & Water Chemistry Tech',
    avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=300&q=80',
    primaryTrade: 'swimming-pools',
    secondaryTrades: ['electrical', 'tiling'],
    yearsExperience: 11,
    uaeExperienceYears: 8,
    nationality: 'Pakistani',
    location: 'Al Barsha 1, Dubai',
    availability: 'Available Immediately',
    hourlyRateAED: 90,
    dailyRateAED: 700,
    monthlyRateAED: 14000,
    rating: 4.9,
    completedJobs: 176,
    visaStatus: 'Employment Visa (Own/Nspyr)',
    emiratesIdVerified: true,
    securityCleared: true,
    bio: 'Certified Pool Operator (CPO) specializing in commercial resort pools, infinity overflow balance tanks, inverter heat/cool pumps, and Dubai Municipality public health chemical compliance.',
    certifications: [
      { name: 'Certified Pool & Spa Operator (NSPF CPO)', issuer: 'National Swimming Pool Foundation', year: 2018, verified: true },
      { name: 'AstralPool Commercial Equipment Specialist', issuer: 'Fluidra Middle East', year: 2021, verified: true },
      { name: 'Dubai Municipality Water Safety Certification', issuer: 'Dubai Municipality Public Health', year: 2023, verified: true }
    ],
    skills: ['Variable Speed Pump Sizing', 'ORP/pH Dosing Calibration', 'Heat-Cool Inverter Systems', 'Glass Filter Media Refurbishment', 'Underwater DMX LED Lighting'],
    languages: ['English (Fluent)', 'Urdu (Native)', 'Arabic (Conversational)'],
    portfolioImages: [
      'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80'
    ],
    reviews: [
      {
        id: 'rev-6',
        clientName: 'David Meyer',
        companyName: 'Bluewaters Beach Club',
        rating: 5,
        comment: 'Hamza re-calibrated our automated dosing plant and balanced 400,000L within 4 hours before our VIP sunset event.',
        date: '2026-08-05',
        projectType: 'Commercial Pool Diagnostics'
      }
    ],
    status: 'approved',
    registeredAt: '2026-01-10'
  },
  {
    id: 'tech-006',
    fullName: 'Jeronimo Santos',
    title: 'Drywall, Acoustic False Ceiling & Partitions Foreman',
    avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=300&q=80',
    primaryTrade: 'false-ceiling',
    secondaryTrades: ['plaster-wallpaper', 'carpentry-flooring'],
    yearsExperience: 9,
    uaeExperienceYears: 6,
    nationality: 'Filipino',
    location: 'Al Quoz / Al Barsha, Dubai',
    availability: 'Available Immediately',
    hourlyRateAED: 75,
    dailyRateAED: 580,
    monthlyRateAED: 11500,
    rating: 4.82,
    completedJobs: 198,
    visaStatus: 'Employment Visa (Own/Nspyr)',
    emiratesIdVerified: true,
    securityCleared: true,
    bio: 'Precision drywall installer specializing in Knauf and Gyproc high-acoustic partitions (STC 55+), concealed ceiling grids with linear diffuser integrations, and curved architectural bulkheads.',
    certifications: [
      { name: 'Knauf Drywall Certified Installer', issuer: 'Knauf UAE', year: 2020, verified: true },
      { name: 'Saint-Gobain Gyproc Acoustic Ceiling Specialist', issuer: 'Saint-Gobain Gulf', year: 2022, verified: true },
      { name: 'OSHA 30-Hour Construction Safety', issuer: 'OSHA Middle East', year: 2023, verified: true }
    ],
    skills: ['Knauf STC Acoustic Partitions', 'Concealed Shadow Gap Trim', 'Linear Slot Diffuser Cuts', 'Fire-Rated Drywall (2-Hr DCD)', 'Curved Gypsum Bulkheads'],
    languages: ['English (Fluent)', 'Tagalog (Native)'],
    portfolioImages: [
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80'
    ],
    reviews: [
      {
        id: 'rev-7',
        clientName: 'Alexander Vance',
        companyName: 'Creative Zone Offices Dubai',
        rating: 5,
        comment: 'Jeronimo and his team installed 400 sqm of acoustic ceiling with shadow gaps in 3 days. Super flat, no waves under lighting.',
        date: '2026-07-18',
        projectType: 'Office Acoustic Ceiling'
      }
    ],
    status: 'approved',
    registeredAt: '2026-03-05'
  },
  {
    id: 'tech-007',
    fullName: 'Ali Reza Ghorbani',
    title: 'Decorative Venetian Plaster & Architectural Painter',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=300&q=80',
    primaryTrade: 'painting',
    secondaryTrades: ['plaster-wallpaper', 'engraving-ornamentation'],
    yearsExperience: 13,
    uaeExperienceYears: 7,
    nationality: 'Iranian',
    location: 'Downtown Dubai',
    availability: 'Available in 24h',
    hourlyRateAED: 85,
    dailyRateAED: 650,
    monthlyRateAED: 13200,
    rating: 4.93,
    completedJobs: 156,
    visaStatus: 'Golden Visa',
    emiratesIdVerified: true,
    securityCleared: true,
    bio: 'Artisan painter and stucco master with deep expertise in polished Venetian marmorino, micro-cement seamless floors, airless commercial spraying, and Jotun Fenomastic luxury finishes.',
    certifications: [
      { name: 'Stucco Italiano Master Artisan', issuer: 'Stucco Italiano Gulf', year: 2018, verified: true },
      { name: 'Jotun Decorative Coating Applicator', issuer: 'Jotun UAE', year: 2020, verified: true },
      { name: 'Graco Airless High-Volume Spray Certification', issuer: 'Graco Inc.', year: 2022, verified: true }
    ],
    skills: ['Venetian Plaster Marmorino', 'Microcement Floors & Walls', 'Airless Paint Spraying', 'Color Spectrophotometry', 'Anti-Microbial Medical Paint'],
    languages: ['English (Fluent)', 'Persian (Native)', 'Arabic (Fluent)'],
    portfolioImages: [
      'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=600&q=80'
    ],
    reviews: [
      {
        id: 'rev-8',
        clientName: 'Nour Al-Sabah',
        companyName: 'Luxe Salon DIFC',
        rating: 5,
        comment: 'Ali Reza created a custom lime plaster finish that transforms the whole salon. True artist with impeccable work ethic.',
        date: '2026-08-01',
        projectType: 'Venetian Plaster Stucco'
      }
    ],
    status: 'approved',
    registeredAt: '2026-02-18'
  },
  {
    id: 'tech-008',
    fullName: 'Bilal Anwer',
    title: 'IRATA Level 2 Building Façade & Specialized Deep Cleaning Lead',
    avatar: 'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?auto=format&fit=crop&w=300&q=80',
    primaryTrade: 'cleaning',
    secondaryTrades: ['painting'],
    yearsExperience: 8,
    uaeExperienceYears: 6,
    nationality: 'Bangladeshi',
    location: 'Al Quoz, Dubai',
    availability: 'Available Immediately',
    hourlyRateAED: 70,
    dailyRateAED: 520,
    monthlyRateAED: 10500,
    rating: 4.88,
    completedJobs: 230,
    visaStatus: 'Employment Visa (Own/Nspyr)',
    emiratesIdVerified: true,
    securityCleared: true,
    bio: 'IRATA certified rope access technician leading high-rise external glass washing, post-construction industrial handovers, kitchen hood grease extraction, and marble floor diamond crystallization.',
    certifications: [
      { name: 'IRATA Rope Access Level 2', issuer: 'IRATA International', year: 2021, verified: true },
      { name: 'BICSc Cleaning Science Certification', issuer: 'British Institute of Cleaning Science', year: 2019, verified: true },
      { name: 'Dubai Municipality Water Tank Sterilization Card', issuer: 'Dubai Municipality Food & Health', year: 2023, verified: true }
    ],
    skills: ['IRATA Rope Access Façade', 'Post-Fitout Deep Handover', 'Kitchen Exhaust Degreasing', 'Marble Diamond Crystallization', 'Water Tank Municipal Sanitization'],
    languages: ['English (Fluent)', 'Bengali (Native)', 'Hindi (Fluent)', 'Arabic (Basic)'],
    portfolioImages: [
      'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=600&q=80'
    ],
    reviews: [
      {
        id: 'rev-9',
        clientName: 'Majid Khan',
        companyName: 'Silver Tower Owners Association',
        rating: 5,
        comment: 'Cleaned our 35-story exterior glass facade safely and swiftly. Thorough risk assessments and zero site damage.',
        date: '2026-07-14',
        projectType: 'High-Rise Façade Cleaning'
      }
    ],
    status: 'approved',
    registeredAt: '2026-03-01'
  },
  {
    id: 'tech-009',
    fullName: 'Tariq Mahmoud Al-Zahrani',
    title: 'CNC Mashrabiya & Islamic Ornamentation Craftsman',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80',
    primaryTrade: 'engraving-ornamentation',
    secondaryTrades: ['carpentry-flooring', 'painting'],
    yearsExperience: 16,
    uaeExperienceYears: 11,
    nationality: 'Egyptian',
    location: 'Al Barsha, Dubai',
    availability: 'Weekend Only',
    hourlyRateAED: 100,
    dailyRateAED: 780,
    monthlyRateAED: 15500,
    rating: 4.97,
    completedJobs: 110,
    visaStatus: 'Employment Visa (Own/Nspyr)',
    emiratesIdVerified: true,
    securityCleared: true,
    bio: 'Master of architectural Islamic ornamentation, CNC fretwork screens (Mashrabiya), GRG/GFRC cornice fabrication, and hand-carved calligraphy panels for mosques, VIP majlis, and luxury hospitality lobbies.',
    certifications: [
      { name: 'Architectural Heritage Restoration Diploma', issuer: 'Faculty of Applied Arts, Cairo', year: 2010, verified: true },
      { name: 'AutoCAD & CNC Multi-Axis Programming', issuer: 'Autodesk UAE', year: 2017, verified: true },
      { name: 'Dubai Culture Heritage Craft Guild Member', issuer: 'Dubai Culture Authority', year: 2022, verified: true }
    ],
    skills: ['CNC 5-Axis Wood & Brass Carving', 'Islamic Geometric Mashrabiya', 'GRG Cornice Casting & Fixing', 'Gold Leaf 24K Gilding', '3D Architectural Laser Etching'],
    languages: ['English (Fluent)', 'Arabic (Native)'],
    portfolioImages: [
      'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=600&q=80'
    ],
    reviews: [
      {
        id: 'rev-10',
        clientName: 'Sheikh Mansoor Majlis Admin',
        companyName: 'Private Majlis Al Khawaneej',
        rating: 5,
        comment: 'Tariq created the hand-finished teak mashrabiya screen for our reception hall. Breathtaking craftsmanship and strict deadlines met.',
        date: '2026-06-15',
        projectType: 'Custom Mashrabiya Screen'
      }
    ],
    status: 'approved',
    registeredAt: '2026-01-05'
  }
];

export const INITIAL_BOOKINGS = [
  {
    id: 'WO-2026-084',
    clientName: 'Hassan Al-Maktoum',
    companyName: 'Marina View Grand Hotel',
    email: 'hassan@marinaview.ae',
    phone: '+971 50 821 4490',
    industry: 'hospitality' as const,
    uaeLocation: 'Dubai Marina, Dubai',
    requiredTrades: ['ac-hvac' as const, 'electrical' as const],
    headcountNeeded: 3,
    projectDuration: 'Urgent Emergency (2h SLA)' as const,
    startDate: '2026-08-20',
    scopeDescription: 'Emergency FCU cooling failure in 4th floor VIP presidential suites before guest check-in at 2 PM. Need instant diagnostic and capacitor replacement.',
    estimatedCostMinAED: 1800,
    estimatedCostMaxAED: 2600,
    status: 'in-review' as const,
    assignedStaffIds: ['tech-001'],
    assignedStaffNames: ['Rashid Al-Mansoor'],
    createdAt: '2026-08-19T08:30:00Z',
    preferredContact: 'phone' as const
  },
  {
    id: 'WO-2026-081',
    clientName: 'Sophie Bennett',
    companyName: 'Aura Medical Center LLC',
    email: 'operations@auramedical.ae',
    phone: '+971 52 443 9081',
    industry: 'medical' as const,
    uaeLocation: 'Dubai Healthcare City, Dubai',
    requiredTrades: ['painting' as const, 'cleaning' as const],
    headcountNeeded: 4,
    projectDuration: '1-3 Days' as const,
    startDate: '2026-08-22',
    scopeDescription: 'Applying silver-ion antimicrobial low-VOC wall coatings in two outpatient surgical recovery suites followed by HEPA deep cleaning sterilization for DHA inspection.',
    estimatedCostMinAED: 4500,
    estimatedCostMaxAED: 6200,
    status: 'technician-assigned' as const,
    assignedStaffIds: ['tech-007', 'tech-008'],
    assignedStaffNames: ['Ali Reza Ghorbani', 'Bilal Anwer'],
    createdAt: '2026-08-18T14:15:00Z',
    preferredContact: 'whatsapp' as const
  },
  {
    id: 'WO-2026-079',
    clientName: 'Tariq Al-Hashemi',
    companyName: 'FinTech Hub MENA',
    email: 'facility@fintechhub.ae',
    phone: '+971 54 990 1234',
    industry: 'corporate' as const,
    uaeLocation: 'DIFC Gate Precinct 4, Dubai',
    requiredTrades: ['false-ceiling' as const, 'carpentry-flooring' as const],
    headcountNeeded: 2,
    projectDuration: '1-4 Weeks' as const,
    startDate: '2026-08-25',
    scopeDescription: 'Installing acoustic drywall partitions and French oak herringbone flooring for 4 executive private offices and a central boardroom.',
    estimatedCostMinAED: 14500,
    estimatedCostMaxAED: 18900,
    status: 'new' as const,
    assignedStaffIds: [],
    assignedStaffNames: [],
    createdAt: '2026-08-17T11:00:00Z',
    preferredContact: 'email' as const
  }
];
