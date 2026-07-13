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

const svgAttrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" width="100%" height="100%"`;

export const lobs: LOB[] = [
  {
    id: 'marine',
    icon: `<svg ${svgAttrs}><circle cx="12" cy="5" r="2"/><path d="M12 7v14"/><path d="M5 12h14"/><path d="M5 12c0 3.87 3.13 7 7 7s7-3.13 7-7"/></svg>`,
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
    icon: `<svg ${svgAttrs}><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>`,
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
    icon: `<svg ${svgAttrs}><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4M10 10h4M10 14h4M10 18h4"/></svg>`,
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
    icon: `<svg ${svgAttrs}><path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="M7 21h10"/><path d="M12 3v18"/><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"/></svg>`,
    name: 'Liability',
    tagline: "General, Products & Employer's Liability",
    description:
      "Broad liability consulting spanning commercial general liability, products recall, employer's liability and professional indemnity. We design programmes that match exposure across jurisdictions.",
    services: [
      { title: 'General Liability Audit', description: 'Exposure review across premises, operations, products completed and contractual liability under civil law frameworks.' },
      { title: 'Products Recall Advisory', description: 'First-party recall cost, rehabilitation, extortion and contamination cover structuring for FMCG and pharma.' },
      { title: "Employer's Liability", description: 'Statutory and excess EL placement for multinationals with complex cross-border workforce exposures.' },
      { title: 'Professional Indemnity', description: 'PI coverage for consultancies, engineers, IT service providers, and regulated professionals.' },
    ],
    sectors: ['Consumer Goods', 'Pharma & Life Sciences', 'Professional Services', 'Multinationals'],
  },
  {
    id: 'financial-lines',
    icon: `<svg ${svgAttrs}><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/><line x1="2" y1="20" x2="22" y2="20"/></svg>`,
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
    icon: `<svg ${svgAttrs}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
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
    icon: `<svg ${svgAttrs}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>`,
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
