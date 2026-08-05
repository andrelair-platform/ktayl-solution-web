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

export interface HDIService {
  id: string;
  icon: string;
  name: string;
  description: string;
}

const svgAttrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" width="100%" height="100%"`;

export const lobs: LOB[] = [
  {
    id: 'propriete-infrastructures',
    icon: `<svg ${svgAttrs}><path d="M3 21h18"/><path d="M9 8h1"/><path d="M9 12h1"/><path d="M9 16h1"/><path d="M14 8h1"/><path d="M14 12h1"/><path d="M14 16h1"/><path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16"/></svg>`,
    name: 'Propriété & Infrastructures',
    tagline: 'Dommages, Responsabilité Civile, Cyber, Flottes',
    description:
      "Solutions d'assurance pour les entreprises industrielles et commerciales, des groupes du CAC 40 aux ETI. HDI Global propose des couvertures sur mesure pour vos biens, vos responsabilités, vos risques cyber et vos flottes automobiles, en France et à l'international.",
    services: [
      { title: 'Dommages aux Biens', description: "Couverture des dommages matériels et pertes d'exploitation pour les installations industrielles et commerciales, de la PME au grand groupe." },
      { title: 'Responsabilité Civile', description: "Protection contre les préjudices causés à des tiers dans le cadre de l'activité professionnelle, des produits ou de l'exploitation." },
      { title: 'Cyber', description: "Solutions de protection contre les cyberattaques, violations de données, rançongiciels et interruptions d'activité informatique." },
      { title: 'Flottes Automobiles', description: "Gestion et couverture globale des flottes de véhicules d'entreprise, adaptée à chaque taille de parc et secteur d'activité." },
    ],
    sectors: ['Industrie', 'Commerce & Distribution', 'Services', 'PME-ETI'],
  },
  {
    id: 'transport',
    icon: `<svg ${svgAttrs}><rect x="1" y="3" width="15" height="13" rx="1"/><path d="M16 8h4l3 3v5h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>`,
    name: 'Transport',
    tagline: 'Marchandises transportées & programmes internationaux',
    description:
      "L'assurance des marchandises transportées offre aux entreprises une maîtrise indispensable de leurs opérations commerciales en accompagnant leurs biens dans le monde entier, jusqu'à leur parfaite livraison. Que ce soit par voie terrestre ou maritime, HDI Global garantit vos marchandises en France et via un réseau présent dans plus de 175 pays.",
    services: [
      { title: 'Transport Terrestre', description: "Couverture des marchandises acheminées par route, rail et transport express, en France et à l'export." },
      { title: 'Transport Maritime', description: "Assurance corps et facultés maritimes pour vos expéditions par voie de mer, incluant la couverture multimodale." },
      { title: 'Programmes Internationaux', description: "Structuration de programmes d'assurance coordonnés pour les entreprises présentes dans plusieurs pays." },
      { title: 'Valeur à Risque', description: "Analyse et optimisation de la valeur assurée de vos stocks et flux de marchandises en transit." },
    ],
    sectors: ['Négoce international', 'Logistique', 'Import / Export', 'Grands groupes industriels'],
  },
  {
    id: 'construction-projets',
    icon: `<svg ${svgAttrs}><path d="M2 20h20"/><path d="M4 20v-6a2 2 0 0 1 2-2h2V8"/><path d="M8 20V8l4-4 4 4v12"/><path d="M16 20v-6a2 2 0 0 1 2-2h2"/><path d="M12 4v4"/></svg>`,
    name: 'Construction & Projets',
    tagline: 'Risques techniques, montage et ingénierie',
    description:
      "En France comme à l'international, HDI Global accompagne les entreprises tout au long de leurs projets. Nous garantissons les phases de construction, de montage, d'essais et de mise en service, ainsi que des garanties en exploitation pour équipements spécifiques : énergie renouvelable, process industriels, engins de chantier.",
    services: [
      { title: 'Tous Risques Chantier', description: "Couverture des travaux de bâtiment et génie civil contre les dommages accidentels, malfaçons et responsabilités constructeur." },
      { title: 'Tous Risques Montage', description: "Assurance des opérations d'installation, d'assemblage et de mise en service d'équipements industriels et techniques." },
      { title: 'Bris de Machine', description: "Protection contre les dommages accidentels aux machines et équipements de production en phase d'exploitation." },
      { title: 'Risques Techniques Spéciaux', description: "Solutions sur mesure pour la production d'énergie renouvelable, process industriels et matériel électronique de haute valeur." },
    ],
    sectors: ['BTP', 'Énergie renouvelable', 'Process industriels', 'Immobilier & infrastructure'],
  },
  {
    id: 'managers-directeurs',
    icon: `<svg ${svgAttrs}><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/><line x1="2" y1="14" x2="22" y2="14"/></svg>`,
    name: 'Managers & Directeurs',
    tagline: 'Responsabilité Civile des Dirigeants (RCMS)',
    description:
      "Le contrat RCMS couvre l'ensemble des dirigeants de droit ou de fait dans le cadre de fautes professionnelles commises dans l'exercice de leur fonction. HDI Global propose des solutions complètes de protection des mandataires sociaux et des décideurs face aux risques juridiques croissants.",
    services: [
      { title: 'RC Mandataires Sociaux (RCMS)', description: "Couverture des dirigeants contre les réclamations de tiers pour fautes de gestion commises dans l'exercice de leur mandat." },
      { title: 'RC Professionnelle', description: "Protection contre les fautes, erreurs et omissions dans le cadre de l'exercice des responsabilités professionnelles." },
      { title: 'Lignes Financières', description: "Solutions globales incluant RCMS, garanties fraude, RC professionnelle et protection du bilan face aux risques financiers." },
      { title: 'Protection Juridique', description: "Accompagnement et prise en charge des frais de défense judiciaire pour les dirigeants et décideurs de l'entreprise." },
    ],
    sectors: ['PME-ETI', 'Grands groupes', 'Start-ups & scale-ups', 'Institutions financières'],
  },
  {
    id: 'collaborateurs',
    icon: `<svg ${svgAttrs}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
    name: 'Pour vos Collaborateurs',
    tagline: 'Protection & Sûreté des Personnes',
    description:
      "L'assurance collective contre les accidents de HDI Global garantit aux employés une couverture d'assurance complète. Nous proposons des solutions de protection et de sûreté pour vos collaborateurs en France comme lors de leurs déplacements professionnels à l'étranger.",
    services: [
      { title: 'Accidents Collectifs', description: "Couverture des accidents survenus dans le cadre professionnel, au-delà des obligations légales, pour l'ensemble du personnel." },
      { title: "Assurance Voyage d'Affaires", description: "Protection complète de vos collaborateurs lors de leurs déplacements professionnels en France et à l'étranger." },
      { title: 'Assistance & Rapatriement', description: "Services d'assistance médicale, d'évacuation sanitaire et de rapatriement pour le personnel expatrié ou en mission." },
      { title: 'Sûreté des Personnes', description: "Solutions de protection et de gestion de crise pour les collaborateurs exposés à des risques sécuritaires dans des zones sensibles." },
    ],
    sectors: ['Grands groupes', 'PME & ETI', 'Organisations internationales', 'Secteur public'],
  },
  {
    id: 'demandes-specifiques',
    icon: `<svg ${svgAttrs}><path d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2"/><path d="M8.5 2h7"/><path d="M7 16h10"/></svg>`,
    name: 'Demandes Spécifiques',
    tagline: 'Recherches biomédicales & risques environnementaux',
    description:
      "Afin de pouvoir commercialiser de nouveaux médicaments ou dispositifs médicaux, les laboratoires et industriels procèdent à des essais cliniques pour lesquels il existe une obligation légale d'assurance. HDI Global propose également des solutions couvrant les risques environnementaux et toute demande sectorielle nécessitant une couverture sur mesure.",
    services: [
      { title: 'Essais Cliniques & Biomédicaux', description: "Assurance obligatoire pour les essais et recherches biomédicaux, en conformité avec les exigences réglementaires françaises et européennes." },
      { title: 'Responsabilité Environnementale', description: "Couverture des dommages environnementaux accidentels et des coûts de dépollution en application de la directive européenne." },
      { title: 'Éco-risques', description: "Solutions adaptées aux risques d'atteinte à l'environnement liés à l'activité industrielle : sols, eaux souterraines, faune et flore." },
      { title: 'Solutions Sectorielles Sur Mesure', description: "Ingénierie d'assurance pour tout risque ne trouvant pas de réponse dans les gammes standard du marché." },
    ],
    sectors: ['Laboratoires & Pharma', 'Industrie chimique', 'Secteur public', 'R&D & Biotechs'],
  },
];

export const hdiServices: HDIService[] = [
  {
    id: 'production',
    icon: `<svg ${svgAttrs}><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>`,
    name: 'Production',
    description:
      "Pour répondre efficacement à ses clients, HDI Global a mis en place une organisation spécifique basée sur la qualité de la souscription, la réactivité des équipes dédiées et la capacité à proposer des solutions innovantes sur mesure.",
  },
  {
    id: 'prevention',
    icon: `<svg ${svgAttrs}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>`,
    name: 'Prévention',
    description:
      "180 ingénieurs experts conçoivent avec nos clients les solutions de prévention et de protection les plus adaptées à leurs risques. Notre approche préventive réduit significativement la sinistralité et protège durablement l'activité.",
  },
  {
    id: 'international',
    icon: `<svg ${svgAttrs}><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
    name: 'Réseau International',
    description:
      "Pour accompagner ses clients présents à l'étranger, HDI met en place des programmes internationaux pouvant intégrer des polices locales émises dans plus de 130 pays, avec un service local adapté à chaque marché.",
  },
  {
    id: 'indemnisation',
    icon: `<svg ${svgAttrs}><polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><path d="M12 22V7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/></svg>`,
    name: 'Indemnisation',
    description:
      "La survenance d'un sinistre peut s'avérer lourde de conséquences. HDI propose un véritable partenariat dans la gestion des sinistres, avec des experts dédiés qui accompagnent chaque client tout au long du processus d'indemnisation.",
  },
  {
    id: 'courtiers',
    icon: `<svg ${svgAttrs}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 11v6"/><path d="M20 8h6"/></svg>`,
    name: 'Pour les Courtiers',
    description:
      "HDI Global SE travaille à travers le courtage, dans une véritable relation partenaire basée sur la qualité et l'accompagnement sur le long terme. Outils dédiés, expertises métier et appui technique pour valoriser les clients des courtiers.",
  },
  {
    id: 'financement-risques',
    icon: `<svg ${svgAttrs}><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`,
    name: 'Financement des Risques',
    description:
      "Les solutions de financement de risques — ART, captives et alternatives — permettent de répondre aux besoins spécifiques de protection de bilan de chaque entreprise, en complément des programmes d'assurance traditionnels.",
  },
];
