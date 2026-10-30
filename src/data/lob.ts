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

export interface KtaylService {
  id: string;
  icon: string;
  name: string;
  description: string;
}

export interface EmergingRisk {
  id: string;
  icon: string;
  name: string;
  description: string;
}

const svgAttrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" width="100%" height="100%"`;

export const lobs: LOB[] = [
  {
    id: 'dommages-pertes-exploitation',
    icon: `<svg ${svgAttrs}><path d="M3 21h18"/><path d="M9 8h1"/><path d="M9 12h1"/><path d="M9 16h1"/><path d="M14 8h1"/><path d="M14 12h1"/><path d="M14 16h1"/><path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16"/></svg>`,
    name: "Dommages & Pertes d'Exploitation",
    tagline: 'Risques industriels, CAT, bris de machines et continuité',
    description:
      "Notre branche phare protège les sites industriels, équipements, stocks et résultats d'exploitation des grandes entreprises françaises. Les programmes peuvent être étendus aux implantations internationales avec une police master et des polices locales lorsque nécessaire.",
    services: [
      { title: 'Dommages aux biens industriels', description: "Incendie, explosion, événements naturels et dommages matériels affectant bâtiments, machines, équipements et stocks." },
      { title: "Pertes d'exploitation", description: "Marge brute, frais supplémentaires et continuité d'activité après un dommage garanti, y compris la carence de fournisseurs." },
      { title: 'CAT & Terrorisme', description: "Modélisation et couverture des catastrophes naturelles, accumulations géographiques et mécanismes français applicables au terrorisme." },
      { title: 'Bris de machines', description: "Dommages accidentels aux équipements de production, installations techniques et systèmes industriels critiques." },
    ],
    sectors: ['Industrie lourde', 'Manufacturing', 'Logistique', 'Grands groupes'],
  },
  {
    id: 'responsabilites',
    icon: `<svg ${svgAttrs}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>`,
    name: 'Responsabilités Civiles',
    tagline: 'RC exploitation, produits, rappel et environnement',
    description:
      "Nous protégeons les entreprises contre les conséquences financières des dommages causés aux tiers par leur exploitation, leurs produits et leurs activités. La police française peut piloter un programme coordonné pour les filiales étrangères.",
    services: [
      { title: 'RC Exploitation', description: "Dommages corporels, matériels et immatériels causés aux tiers pendant l'activité de l'entreprise." },
      { title: 'RC Produits', description: "Responsabilité après livraison, défauts produits, retraits et frais de rappel." },
      { title: 'RC Professionnelle', description: "Erreurs, omissions et manquements professionnels adaptés aux activités assurées." },
      { title: 'Responsabilité environnementale', description: "Pollution accidentelle, dommages écologiques et frais de dépollution." },
    ],
    sectors: ['Industrie', 'Biens de consommation', 'Services B2B', 'Groupes internationaux'],
  },
  {
    id: 'construction-projets',
    icon: `<svg ${svgAttrs}><path d="M2 20h20"/><path d="M4 20v-6a2 2 0 0 1 2-2h2V8"/><path d="M8 20V8l4-4 4 4v12"/><path d="M16 20v-6a2 2 0 0 1 2-2h2"/><path d="M12 4v4"/></svg>`,
    name: 'Construction & Engineering',
    tagline: 'Chantiers, montage, risques techniques et décennale',
    description:
      "En France comme à l'international, ktayl-solution accompagne les entreprises tout au long de leurs projets. Nous garantissons les phases de construction, de montage, d'essais et de mise en service, ainsi que des garanties en exploitation pour équipements spécifiques : énergie renouvelable, process industriels, engins de chantier.",
    services: [
      { title: 'Tous Risques Chantier', description: "Dommages accidentels pendant les travaux de bâtiment, génie civil et infrastructure." },
      { title: 'Tous Risques Montage', description: "Installation, assemblage, essais et mise en service d'équipements industriels." },
      { title: 'Dommages-Ouvrage & Décennale', description: "Garanties adaptées aux obligations et pratiques du marché français de la construction." },
      { title: 'Retard de mise en service', description: "Protection des pertes financières liées au retard d'un projet après un dommage garanti." },
    ],
    sectors: ['BTP', 'Énergie renouvelable', 'Process industriels', 'Immobilier & infrastructure'],
  },
  {
    id: 'transport-marine',
    icon: `<svg ${svgAttrs}><rect x="1" y="3" width="15" height="13" rx="1"/><path d="M16 8h4l3 3v5h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>`,
    name: 'Marine Cargo & Transport',
    tagline: 'Marchandises, stock throughput et logistique mondiale',
    description:
      "Nous accompagnons les flux de marchandises des entreprises françaises, du site de production jusqu'au client final, par voie terrestre, maritime, aérienne ou multimodale. Les programmes suivent les chaînes logistiques internationales.",
    services: [
      { title: 'Marchandises transportées', description: "Couverture des biens pendant les transports nationaux et internationaux." },
      { title: 'Stock Throughput', description: "Programme continu couvrant transport, stockage intermédiaire et stocks." },
      { title: 'Project Cargo', description: "Équipements lourds, convois exceptionnels et projets industriels complexes." },
      { title: 'Responsabilité logistique', description: "Solutions pour transitaires, opérateurs logistiques et intermédiaires de transport." },
    ],
    sectors: ['Exportateurs', 'Industrie', 'Logistique', 'Négoce international'],
  },
  {
    id: 'cyber',
    icon: `<svg ${svgAttrs}><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 15h3M1 9h3M1 15h3"/></svg>`,
    name: 'Cyber',
    tagline: 'Incident, interruption, données et accumulation systémique',
    description:
      "Notre couverture cyber associe prévention, réponse à incident et protection financière. Elle tient compte des dépendances cloud, logiciels et fournisseurs susceptibles de provoquer des sinistres simultanés dans plusieurs entités du groupe.",
    services: [
      { title: 'Réponse à incident', description: "Investigation, gestion de crise, restauration, experts juridiques et communication." },
      { title: "Pertes d'exploitation cyber", description: "Interruption des systèmes IT/OT, frais supplémentaires et dépendances technologiques." },
      { title: 'Données & responsabilité', description: "Atteinte aux données, notification, défense et responsabilité envers les tiers." },
      { title: 'Extorsion & fraude', description: "Cyber-extorsion, négociation de crise et garanties de fraude selon les conditions du contrat." },
    ],
    sectors: ['Industrie connectée', 'Services numériques', 'Santé & pharma', 'Grands groupes'],
  },
  {
    id: 'energie-environnement',
    icon: `<svg ${svgAttrs}><path d="M13 2 3 14h7l-1 8 10-12h-7l1-8z"/><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2"/></svg>`,
    name: 'Énergie & Environnement',
    tagline: 'Production, renouvelables, stockage et responsabilité environnementale',
    description:
      "Nous couvrons les actifs et responsabilités des producteurs, exploitants et investisseurs de l'énergie, des installations conventionnelles aux renouvelables, batteries, hydrogène et infrastructures de transition.",
    services: [
      { title: 'Énergies renouvelables', description: "Éolien, solaire, hydraulique et stockage, de la construction à l'exploitation." },
      { title: 'Production conventionnelle', description: "Installations de production, réseaux et équipements critiques." },
      { title: 'Hydrogène & batteries', description: "Technologies émergentes, essais, mise en service et exploitation." },
      { title: 'Pollution & environnement', description: "Responsabilité, dépollution et dommages écologiques liés aux activités assurées." },
    ],
    sectors: ['Utilities', 'Renouvelables', 'Industrie énergétique', 'Transition énergétique'],
  },
];

export const ktaylServices: KtaylService[] = [
  {
    id: 'production',
    icon: `<svg ${svgAttrs}><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>`,
    name: 'Production',
    description:
      "Pour répondre efficacement à ses clients, ktayl-solution a mis en place une organisation spécifique basée sur la qualité de la souscription, la réactivité des équipes dédiées et la capacité à proposer des solutions innovantes sur mesure.",
  },
  {
    id: 'prevention',
    icon: `<svg ${svgAttrs}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>`,
    name: 'Prévention',
    description:
      "140 ingénieurs experts conçoivent avec nos clients les solutions de prévention et de protection les plus adaptées à leurs risques. Notre approche préventive réduit significativement la sinistralité et protège durablement l'activité.",
  },
  {
    id: 'international',
    icon: `<svg ${svgAttrs}><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
    name: 'Réseau International',
    description:
      "Pour accompagner ses clients présents à l'étranger, ktayl-solution met en place des programmes internationaux pouvant intégrer des polices locales émises dans plus de 120 pays, avec un service local adapté à chaque marché.",
  },
  {
    id: 'indemnisation',
    icon: `<svg ${svgAttrs}><polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><path d="M12 22V7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/></svg>`,
    name: 'Indemnisation',
    description:
      "La survenance d'un sinistre peut s'avérer lourde de conséquences. ktayl-solution propose un véritable partenariat dans la gestion des sinistres, avec des experts dédiés qui accompagnent chaque client tout au long du processus d'indemnisation.",
  },
  {
    id: 'courtiers',
    icon: `<svg ${svgAttrs}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 11v6"/><path d="M20 8h6"/></svg>`,
    name: 'Pour les Courtiers',
    description:
      "ktayl-solution travaille à travers le courtage, dans une véritable relation partenaire basée sur la qualité et l'accompagnement sur le long terme. Outils dédiés, expertises métier et appui technique pour valoriser les clients des courtiers.",
  },
  {
    id: 'financement-risques',
    icon: `<svg ${svgAttrs}><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`,
    name: 'Financement des Risques',
    description:
      "Les solutions de financement de risques — ART, captives et alternatives — permettent de répondre aux besoins spécifiques de protection de bilan de chaque entreprise, en complément des programmes d'assurance traditionnels.",
  },
];

// §34 — the major risks reshaping industrial insurance (client-facing: the risk + how we cover it)
export const emergingRisks: EmergingRisk[] = [
  {
    id: 'climat-catnat',
    icon: `<svg ${svgAttrs}><path d="M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9"/><polyline points="13 11 9 17 15 17 11 23"/></svg>`,
    name: 'Climat & Catastrophes Naturelles',
    description:
      "Inondations, tempêtes, sécheresses et incendies s'intensifient et frappent des sites toujours plus exposés. Nous modélisons votre exposition CAT et structurons des capacités adaptées, jusqu'aux couvertures paramétriques.",
  },
  {
    id: 'cyber-industriel',
    icon: `<svg ${svgAttrs}><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></svg>`,
    name: 'Cyber Industriel (IT / OT)',
    description:
      "La convergence des systèmes informatiques (IT), industriels (OT) et connectés transforme un incident cyber en véritable interruption d'activité. Nous couvrons le risque cyber et ses conséquences d'exploitation sur vos chaînes de production.",
  },
  {
    id: 'supply-chain',
    icon: `<svg ${svgAttrs}><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>`,
    name: 'Supply Chain & Carence Fournisseur',
    description:
      "La défaillance d'un seul fournisseur peut arrêter plusieurs usines et propager une interruption mondiale. Nos garanties de pertes d'exploitation sans dommage (CBI) et l'analyse de vos dépendances sécurisent votre chaîne d'approvisionnement.",
  },
  {
    id: 'geopolitique',
    icon: `<svg ${svgAttrs}><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
    name: 'Risques Géopolitiques',
    description:
      "Sanctions, conflits, terrorisme, expropriation et restrictions commerciales fragilisent les opérations internationales. Nos solutions Crédit & Risques Politiques protègent vos actifs et vos flux sur les marchés sensibles.",
  },
  {
    id: 'transition-energetique',
    icon: `<svg ${svgAttrs}><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6"/></svg>`,
    name: 'Transition Énergétique',
    description:
      "Nouveaux actifs — renouvelables, hydrogène, batteries — et nouvelles responsabilités accompagnent la décarbonation. Nous assurons ces technologies émergentes, de la construction à l'exploitation, avec une ingénierie de risque dédiée.",
  },
  {
    id: 'intelligence-artificielle',
    icon: `<svg ${svgAttrs}><path d="M12 5a3 3 0 1 0-5.997.142 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/><path d="M12 5a3 3 0 1 1 5.997.142 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"/></svg>`,
    name: 'Intelligence Artificielle',
    description:
      "L'IA crée de nouvelles expositions : décision automatisée, responsabilité algorithmique et dépendance aux modèles. Nous aidons à cadrer et transférer ces risques émergents au fur et à mesure de leur adoption industrielle.",
  },
];
