export interface VentureSignal {
  /** Short uppercase fact. Real operational signal only — no fake telemetry. */
  label: string;
}

export interface VentureMetadataField {
  /** Uppercase key on the left, e.g. STATUS */
  key: string;
  /** Uppercase value on the right, e.g. OPERATIONAL */
  value: string;
}

export interface VentureCTA {
  /** Visible label, e.g. "Request Demo" */
  label: string;
  /** href — mailto / route / anchor */
  href: string;
}

export interface Venture {
  /** Tiny uppercase category prefix above the venture name. */
  category: string;
  /** Venture display name. */
  name: string;
  /** Short one-line headline. */
  description: string;
  /** Longer sentence explaining what it does or where it stands. */
  expanded?: string;
  /** Internal detail page route or anchor. */
  entry: string;
  /** Optional external link, e.g. parcentry.com */
  external?: { href: string; label: string };
  /** Current development stage shown in CURRENT VENTURES. */
  stage: string;
  /** Operational proof bullets for active ventures. */
  proof?: string[];
  /** Per-venture call-to-action button. */
  cta?: VentureCTA;
  /** Optional signals (legacy field, unused in current rendering). */
  signals?: VentureSignal[];
  /** Optional metadata rows (legacy field, unused in current rendering). */
  metadata?: VentureMetadataField[];
  /** Optional supporting graphic component name to render in the entry. */
  graphic?: 'parcel-map';
  /** Optional modifier flag that tunes the row's typographic atmosphere. */
  atmosphere?: 'standard' | 'cinematic';
}

export const ventures: Venture[] = [
  {
    category: 'COMMERCIAL REAL ESTATE INTELLIGENCE',
    name: 'Parcentry',
    description: 'Commercial real estate intelligence.',
    expanded: 'Tracks public-record changes across commercial properties.',
    entry: '/parcentry',
    external: { href: 'https://parcentry.com', label: 'parcentry.com →' },
    stage: 'ACTIVE PRODUCT',
    proof: [
      '281,476 parcels indexed',
      'Nightly scans',
      'Public records monitored',
    ],
    cta: {
      label: 'Request Demo',
      href: 'mailto:felipe@fariainnovations.com?subject=Parcentry%20Demo%20Request',
    },
    atmosphere: 'standard',
  },
  {
    category: 'ORIGINAL ANIMATED IP',
    name: 'Flight Risk',
    description: 'Original animated IP.',
    expanded: 'An ongoing animated world in development.',
    entry: '/flight-risk',
    stage: 'IN DEVELOPMENT',
    cta: {
      label: 'View Entry',
      href: '/flight-risk/',
    },
    atmosphere: 'cinematic',
  },
  {
    category: 'EXPERIMENTAL SYSTEMS · PROTOTYPES',
    name: 'Labs',
    description: 'Experimental systems and prototypes.',
    expanded: 'Early-stage tools, notes, and internal systems.',
    entry: '#labs',
    stage: 'WORKING FIELD',
    cta: {
      label: 'View Labs',
      href: '#labs',
    },
    atmosphere: 'standard',
  },
];
