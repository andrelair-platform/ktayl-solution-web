export interface Service {
  title: string;
  description: string;
}

export interface LOB {
  id: string;
  icon: string;
  name: string;
  tagline: string;
  description: string;
  services: Service[];
  sectors: string[];
}

export const lobs: LOB[] = [
  {
    id: 'marine',
    icon: '🚢',
    name: 'Marine',
    tagline: 'Cargo, Hull & Marine Liability',
    description:
      'Comprehensive risk solutions for ocean cargo, vessel hull, ports and terminals, and all forms of marine liability. We advise on coverage structure for complex international trade flows.',
    services: [
      { title: 'Cargo Risk Assessment', description: 'End-to-end supply chain exposure analysis and optimal coverage structuring for high-value or temperature-sensitive cargo.' },
      { title: 'Hull & Machinery Placement', description: 'Bespoke hull insurance placement for commercial fleets, specialist vessels and yacht portfolios.' },
      { title: 'Marine Liability Advisory', description: 'P&I club selection guidance, charterers liability, and terminal operator coverage review.' },
      { title: 'Claims Management', description: 'Average adjusting coordination, salvage negotiation, and dispute resolution support.' },
    ],
    sectors: ['Shipping & Logistics', 'Port Operators', 'Commodity Traders', 'Shipbuilders'],
  },
  {
    id: 'aviation',
    icon: '✈️',
    name: 'Aviation',
    tagline: 'Aircraft Hull, Liability & Passenger Risk',
    description:
      'Specialised advisory for airlines, charter operators, MRO facilities, and general aviation. We navigate international aviation and specialty markets to place complex risks.',
    services: [
      { title: 'Hull & Spares Coverage', description: 'Aircraft hull all-risk, agreed value, ground risk, and spares/spare engines placement.' },
      { title: 'Airline Liability', description: 'Third-party, passenger bodily injury, cargo and baggage liability structure under Montreal Convention.' },
      { title: 'MRO & Products Liability', description: 'Maintenance, repair and overhaul operators liability, aviation products, grounding and recall.' },
      { title: 'Airport & Premises', description: 'Airport operators liability, hangarkeepers, fuelling, and ground handling exposure.' },
    ],
    sectors: ['Airlines', 'Charter & Private', 'MRO Facilities', 'Airports & Ground Handlers'],
  },
  {
    id: 'property-engineering',
    icon: '🏗️',
    name: 'Property & Engineering',
    tagline: 'Industrial All Risk, Construction & Machinery',
    description:
      'Risk engineering and insurance placement for complex industrial property and large-scale construction projects. We combine on-site risk assessment with market-leading placement capacity.',
    services: [
      { title: 'Industrial All Risk', description: 'Material damage and business interruption coverage for manufacturing, warehousing, and process industries.' },
      { title: 'Construction All Risk', description: 'CAR/EAR programme structuring for infrastructure, civil engineering, and real estate development.' },
      { title: 'Machinery Breakdown', description: 'Coverage for mechanical and electrical breakdown with first-loss and business interruption extensions.' },
      { title: 'Risk Engineering Surveys', description: 'Pre-placement site surveys, loss prevention recommendations, and cresta zone accumulation analysis.' },
    ],
    sectors: ['Manufacturing', 'Real Estate', 'Infrastructure', 'Energy Utilities'],
  },
  {
    id: 'liability',
    icon: '⚖️',
    name: 'Liability',
    tagline: 'General, Products & Employer\'s Liability',
    description:
      'Broad liability consulting spanning commercial general liability, products recall, employer\'s liability and professional indemnity. We design programmes that match exposure across jurisdictions.',
    services: [
      { title: 'General Liability Audit', description: 'Exposure review across premises, operations, products completed and contractual liability under civil law frameworks.' },
      { title: 'Products Recall Advisory', description: 'First-party recall cost, rehabilitation, extortion and contamination cover structuring for FMCG and pharma.' },
      { title: 'Employer\'s Liability', description: 'Statutory and excess EL placement for multinationals with complex cross-border workforce exposures.' },
      { title: 'Professional Indemnity', description: 'PI coverage for consultancies, engineers, IT service providers, and regulated professionals.' },
    ],
    sectors: ['Consumer Goods', 'Pharma & Life Sciences', 'Professional Services', 'Multinationals'],
  },
  {
    id: 'financial-lines',
    icon: '📊',
    name: 'Financial Lines',
    tagline: 'D&O, E&O, Crime & Management Liability',
    description:
      'Structured advisory for the financial risks of directors, officers, and the entities they manage. We place and negotiate financial lines programmes in London, European, and Bermuda markets.',
    services: [
      { title: 'D&O Programme Design', description: 'Directors & Officers Side-A/B/C structuring, entity coverage extensions, and securities exclusion analysis.' },
      { title: 'E&O / Tech E&O', description: 'Errors & Omissions for financial institutions, technology companies, and regulated intermediaries.' },
      { title: 'Crime & Fidelity', description: 'Employee dishonesty, computer fraud, funds transfer fraud, and social engineering coverage.' },
      { title: 'M&A Representations & Warranties', description: 'R&W insurance for private equity transactions, SPACs, and corporate M&A deals.' },
    ],
    sectors: ['Financial Institutions', 'Private Equity', 'Technology Companies', 'Listed Corporates'],
  },
  {
    id: 'energy',
    icon: '⚡',
    name: 'Energy',
    tagline: 'Offshore, Onshore & Renewable Energy',
    description:
      "Dedicated energy practice covering upstream oil & gas, power generation, renewables, and downstream petrochemical complexes. We work with Lloyd's syndicates and specialist international energy markets.",
    services: [
      { title: 'Offshore Energy', description: 'Drilling rigs, FPSOs, jack-ups, and pipelines: physical damage and OEE programme structuring.' },
      { title: 'Onshore Energy', description: 'Refinery, storage, and transmission risk — combined property and business interruption for process plants.' },
      { title: 'Renewable Energy', description: 'Wind farm, solar PV, hydroelectric, and battery storage all-risk and revenue protection coverage.' },
      { title: 'Liability & Control of Well', description: 'OPL, pollution liability, operators extra expense, and well control coverage.' },
    ],
    sectors: ['Oil & Gas', 'Power Utilities', 'Renewable Developers', 'Petrochemicals'],
  },
  {
    id: 'cyber',
    icon: '🔐',
    name: 'Cyber',
    tagline: 'Cyber Risk, Data Breach & Business Interruption',
    description:
      'End-to-end cyber risk advisory from pre-placement controls assessment to incident response coordination. We place standalone cyber programmes and help clients quantify silent cyber exposure in traditional lines.',
    services: [
      { title: 'Cyber Risk Assessment', description: 'Technical controls review, threat landscape analysis, and coverage gap identification across existing policies.' },
      { title: 'Standalone Cyber Placement', description: 'First-party (ransomware, BI, restoration) and third-party (liability, regulatory) cyber programme placement.' },
      { title: 'Silent Cyber Audit', description: 'Identification and remediation of unintended cyber exposure in property, liability, and marine policies.' },
      { title: 'Incident Response Coordination', description: 'Insurer notification, forensic vendor management, ransom negotiation, and business continuity support.' },
    ],
    sectors: ['Technology', 'Healthcare', 'Financial Services', 'Critical Infrastructure'],
  },
];
