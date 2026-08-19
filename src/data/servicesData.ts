import { ServiceItem } from '../types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'ac-hvac',
    title: 'Air-Conditioning, Ventilations & Air Filtration Systems Installation & Maintenance',
    shortTitle: 'AC & Ventilation Systems',
    description: 'Complete HVAC lifecycle support from chiller & VRF commissioning to indoor air quality filtration and duct sterilization across Dubai commercial & luxury residential properties.',
    fullScope: [
      'Central Chiller plant maintenance & cooling tower chemical balancing',
      'VRF/VRV multi-split system installation, testing & commissioning',
      'Air Handling Units (AHU) & Fan Coil Units (FCU) motor overhauls',
      'HEPA & MERV-13 medical grade filtration system retrofitting',
      'Duct acoustic thermal insulation & robotic camera sanitization',
      '24/7 emergency compressor replacement & refrigerant recovery (R410A / R32)'
    ],
    keyDeliverables: [
      'ASHRAE 62.1 & Dubai Municipality green building compliance report',
      'Pre & post airflow CFM CFM & static pressure balancing certificate',
      'Digital thermographic heat-loss inspection logs',
      'Formal warranty & scheduled quarterly preventive maintenance (PPM)'
    ],
    uaeStandards: 'DEWA Green Building Regulations, Dubai Municipality Health Code, ASHRAE Standard 62.1 & 90.1',
    iconName: 'Wind',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80',
    techniciansAvailable: 34,
    startingRateAED: 85,
    emergencyAvailable: true
  },
  {
    id: 'electrical',
    title: 'Electrical Fittings & Fixtures Repairing & Maintenance',
    shortTitle: 'Electrical Fittings & Fixtures',
    description: 'Certified electrical contracting covering 3-phase power distribution, switchgear maintenance, LED architectural lighting, UPS systems, and load balancing.',
    fullScope: [
      'Main Distribution Board (MDB) & Sub-Main Distribution Board (SMDB) maintenance',
      'Earth leakage breaker testing, megger insulation diagnostics & phase balancing',
      'Commercial smart lighting automation (DALI, KNX & Lutron integration)',
      'Cable tray laying, conduit wiring and emergency generator transfer switch testing',
      'DEWA load compliance audits and power factor correction capacitors',
      'Industrial busbar trunking systems and EV charging station connections'
    ],
    keyDeliverables: [
      'DEWA certified engineer inspection stamp & test reports',
      'Thermal imaging inspection of all breakers and busbars',
      'As-built electrical single line diagrams (SLD)',
      '100% safety lockout-tagout (LOTO) procedure sign-off'
    ],
    uaeStandards: 'DEWA Regulations for Electrical Installations (Latest Ed.), IEC 60364, NFPA 70',
    iconName: 'Zap',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
    techniciansAvailable: 28,
    startingRateAED: 80,
    emergencyAvailable: true
  },
  {
    id: 'false-ceiling',
    title: 'False Ceiling & Light Partitions Installation',
    shortTitle: 'False Ceiling & Light Partitions',
    description: 'Architectural drywall partitions, acoustic gypsum ceilings, metal cassette grid systems, and fire-rated demountable office partitions with seamless lighting integration.',
    fullScope: [
      'Acoustic mineral fiber & perforated gypsum suspended ceiling grids',
      'Concealed grid monolithic gypsum ceilings with perimeter shadow gaps',
      'Fire-rated drywall partitions (1-hour & 2-hour civil defence approved systems)',
      'Frameless glass partition integration with aluminum channel profiles',
      'Access panel installation for MEP overhead maintenance access',
      'Curved and multi-tiered architectural bulkheads with hidden LED coves'
    ],
    keyDeliverables: [
      'Acoustic STC sound transmission testing verification',
      'Dubai Civil Defence (DCD) approved material certificates',
      'Laser-aligned level tolerance guarantee (under 1.5mm deviation)',
      'Integrated structural hanger load testing records'
    ],
    uaeStandards: 'Dubai Civil Defence Material Approval, ASTM C840, BS EN 13964',
    iconName: 'Layers',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
    techniciansAvailable: 22,
    startingRateAED: 70,
    emergencyAvailable: false
  },
  {
    id: 'carpentry-flooring',
    title: 'Carpentry & Wood Flooring Works',
    shortTitle: 'Carpentry & Wood Flooring',
    description: 'Bespoke joinery, hardwood parquet flooring, luxury vinyl tile (LVT), architectural wall paneling, custom reception desks, and fire-rated solid wood door sets.',
    fullScope: [
      'Solid oak, walnut & engineered hardwood flooring installation with acoustic underlay',
      'Subfloor moisture barrier testing, self-leveling screed preparation & sanding',
      'Custom acoustic fluted wood wall paneling and slatted timber screens',
      'Luxury reception counters, executive credenzas, and integrated wardrobe joinery',
      'Solid core fire-rated wooden door supply, hardware hanging & master keying',
      'Decking installation (teak, composite WPC, thermo-wood) for outdoor terraces'
    ],
    keyDeliverables: [
      'Moisture equilibrium test certificates before installation',
      'Precision mitred joinery with concealed fixings guarantee',
      'UV resistant, non-toxic polyurethane & oil finishes',
      '10-Year warranty on structural timber installations'
    ],
    uaeStandards: 'FSC Certified Timber Supply, Dubai Municipality Indoor VOC Limit standard, BS 8201',
    iconName: 'Hammer',
    image: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&w=800&q=80',
    techniciansAvailable: 26,
    startingRateAED: 75,
    emergencyAvailable: false
  },
  {
    id: 'tiling',
    title: 'Floor & Wall Tiling Works',
    shortTitle: 'Floor & Wall Tiling',
    description: 'Large-format porcelain slabs, book-matched Italian marble, anti-slip commercial kitchen tiles, mosaic swimming pool tiling, and epoxy chemical-resistant grouting.',
    fullScope: [
      'Ultra large-format porcelain slab (up to 3200x1600mm) handling and installation',
      'Italian & Greek natural marble book-matching, mechanical anchoring and polishing',
      'Waterproofing membrane application (liquid polyurethane & sheet systems) with 24h pond test',
      'Two-part epoxy grouting for high-hygiene hospitals, kitchens and wet areas',
      'Exterior pavers and pedestal raised floor paving for podium decks',
      'Precision diamond cut mitered edges and expansion joint caulking'
    ],
    keyDeliverables: [
      'Pre-tiling 24-hour flood test certificate',
      'Zero-lippage laser alignment guarantee using mechanical leveling clips',
      'Full hollow-sounding inspection tap test',
      'Comprehensive slip-resistance pendulum test report'
    ],
    uaeStandards: 'ANSI A108/A118 standards, Dubai Building Code (DBC Section 4), BS 5385',
    iconName: 'Grid',
    image: 'https://images.unsplash.com/photo-1502005229762-ee1b2b8ab00f?auto=format&fit=crop&w=800&q=80',
    techniciansAvailable: 30,
    startingRateAED: 75,
    emergencyAvailable: false
  },
  {
    id: 'painting',
    title: 'Painting Contracting',
    shortTitle: 'Painting Contracting',
    description: 'High-volume commercial spray painting, epoxy floor coatings for warehouses, antimicrobial wall coatings for healthcare, and decorative Venetian stucco finishes.',
    fullScope: [
      'Airless industrial spray painting for massive ceilings, warehouses and logistics hubs',
      'Low-VOC & zero-odor paints certified for occupied hotels and corporate offices',
      'Anti-microbial & silver-ion sanitizing wall coatings for clinics and operating rooms',
      'Heavy-duty epoxy and polyurethane self-leveling floor coatings for car parks',
      'Exterior elastomeric weather-proof coatings resistant to UAE thermal expansion & UV',
      'Artisanal Venetian plaster, metallic glazes, and textured lime washes'
    ],
    keyDeliverables: [
      'Dry Film Thickness (DFT) micron gauge testing report',
      'Dubai Green Building Regulations VOC content certification',
      'Color spectrophotometer exact match verification',
      '5-Year anti-peel and anti-chalking warranty'
    ],
    uaeStandards: 'Dubai Green Building Specs (Al Safat System), ISO 12944 Paint Corrosion Standard',
    iconName: 'Paintbrush',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=80',
    techniciansAvailable: 38,
    startingRateAED: 65,
    emergencyAvailable: true
  },
  {
    id: 'swimming-pools',
    title: 'Swimming Pools Installation Works',
    shortTitle: 'Swimming Pools Installation & MEP',
    description: 'Turnkey commercial and residential swimming pool construction, overflow/infinity troughs, water filtration plant rooms, heat-cool pumps, and smart chemical dosing.',
    fullScope: [
      'Reinforced concrete pool shell structural waterproofing and hydrostatic pressure testing',
      'Installation of high-efficiency variable speed pumps, glass media sand filters & UV purifiers',
      'Reversible heat/cool inverter heat pumps for year-round temperature control (28°C)',
      'Automated ORP/pH chemical dosing controllers with remote IoT cloud monitoring',
      'Under-water LED RGB illumination with DMX synchronization',
      'Infinity edge weir troughs, stainless steel handrails and automated pool covers'
    ],
    keyDeliverables: [
      'Dubai Municipality Public Health & Safety approved pool water test certificate',
      'Structural leak test sign-off prior to finishes',
      'Plant room mechanical operation & maintenance (O&M) manual',
      'Automated chemical dosing training & 1-year complimentary maintenance'
    ],
    uaeStandards: 'Dubai Municipality Code of Practice for Swimming Pools, WHO Water Quality Standard, DIN 19643',
    iconName: 'Waves',
    image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=800&q=80',
    techniciansAvailable: 16,
    startingRateAED: 95,
    emergencyAvailable: true
  },
  {
    id: 'plaster-wallpaper',
    title: 'Plaster & Wallpaper Fixing Works',
    shortTitle: 'Plaster & Wallpaper Fixing',
    description: 'Precision internal cement plastering, drywall taping & jointing to Level 5 mirror finish, luxury imported wallpaper installation, and acoustic fabric wall paneling.',
    fullScope: [
      'Internal sand-cement rendering, angle bead setting and screed guide plastering',
      'Gypsum board taping, skim coating and Level 5 mirror smooth surface preparation',
      'Heavy commercial vinyl wallcoverings (Type II) for hotel corridors and conference rooms',
      'Luxury natural grasscloth, silk, metallic foil and custom digital mural wallpapers',
      'Crack stitching, structural masonry repair and damp-proof plaster injections',
      'Acoustic upholstered wall panels with acoustic rockwool backing for theaters & pods'
    ],
    keyDeliverables: [
      'Seamless wallpaper pattern repeat matching guarantee with zero visible seams',
      'Level 5 finish inspection under grazing halogen inspection lights',
      'Mildew-resistant and anti-fungal adhesive application certificate',
      'Clean hand-over with zero adhesive residue on skirting and architraves'
    ],
    uaeStandards: 'ASTM C840 Level 5 Finish standard, British Standard BS 5492 for Plastering',
    iconName: 'Sparkles',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
    techniciansAvailable: 24,
    startingRateAED: 70,
    emergencyAvailable: false
  },
  {
    id: 'cleaning',
    title: 'Building Cleaning Services',
    shortTitle: 'Building Cleaning Services',
    description: 'Post-construction builders deep cleaning, rope-access BMU high-rise facade washing, industrial kitchen kitchen-hood degreasing, and specialized floor crystallization.',
    fullScope: [
      'Post-construction handover deep cleaning with debris removal and paint overspray elimination',
      'Rope access (IRATA certified) high-rise exterior glass and aluminum composite panel washing',
      'Commercial kitchen exhaust hood, electrostatic precipitator (ESP) & duct grease extraction',
      'Marble crystallization, diamond honing and terrazzo restoration polishing',
      'Carpet and upholstery deep steam extraction with sanitizing enzymes',
      'Water tank sterilization, biological testing and Dubai Municipality municipal certification'
    ],
    keyDeliverables: [
      'Dubai Municipality Approved Water Tank Cleaning Certificate',
      'Dubai Civil Defence Kitchen Hood Grease Clearance Certificate',
      'IRATA certified safety plan and third-party rig inspection log',
      'Pre and post ATP biological swab hygiene test validation'
    ],
    uaeStandards: 'Dubai Municipality Public Health Department Food Safety & Hygiene Guidelines, IRATA International Safety Code',
    iconName: 'ShieldCheck',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80',
    techniciansAvailable: 45,
    startingRateAED: 60,
    emergencyAvailable: true
  },
  {
    id: 'engraving-ornamentation',
    title: 'Engraving & Ornamentation Works',
    shortTitle: 'Engraving & Ornamentation',
    description: 'Architectural CNC router relief carving, laser metal fretwork, traditional Islamic Mashrabiya patterns, custom cast GFRC/GRG ornamental moldings, and signage fabrication.',
    fullScope: [
      'CNC carved wood and high-density polyurethane architectural wall relief panels',
      'Laser-cut stainless steel, brass and aluminum Mashrabiya screens and balustrades',
      'Glass Fiber Reinforced Gypsum (GRG) and Concrete (GFRC) ornate cornices and domes',
      'Intricate Islamic calligraphy engraving on granite, marble and solid hardwoods',
      'Illuminated 3D architectural signage, acrylic lettering and brass etched plaques',
      'Handcrafted gold-leaf gilding, antique patinas, and decorative metal restoration'
    ],
    keyDeliverables: [
      'Precision CAD/CAM shop drawings and 3D mockups prior to fabrication',
      'Structural wind-load engineering calculations for exterior screen facades',
      'High-grade electroplated / PVD coated metal finish guarantee (15+ years)',
      'Detailed site installation with invisible architectural anchor brackets'
    ],
    uaeStandards: 'Dubai Municipality Architectural Heritage Guidelines, BS 8298 for Stone Cladding',
    iconName: 'Feather',
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80',
    techniciansAvailable: 15,
    startingRateAED: 90,
    emergencyAvailable: false
  }
];
