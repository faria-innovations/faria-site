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

export interface Venture {
  /** Tiny uppercase category prefix above the venture name. */
  category: string;
  /** Venture display name (rendered in the engineered display face). */
  name: string;
  /** One-line description in body voice. Kept short. */
  description: string;
  /** Internal detail page route or anchor. */
  entry: string;
  /** Optional external link, e.g. parcentry.com */
  external?: { href: string; label: string };
  /** Current development stage shown in CURRENT VENTURES. */
  stage: string;
  /** Optional signals (used by older dossier renderings). */
  signals?: VentureSignal[];
  /** Optional metadata rows (used by older dossier renderings). */
  metadata?: VentureMetadataField[];
  /** Optional supporting graphic component name to render in the entry. */
  graphic?: 'parcel-map';
  /** Optional modifier flag that tunes the row's typographic atmosphere. */
  atmosphere?: 'standard' | 'cinematic';
}

export const ventures: Venture[] = [
  {
    category: 'COMMERCIAL REAL ESTATE SOFTWARE',
    name: 'Parcentry',
    description: 'Commercial real estate intelligence.',
    entry: '/parcentry',
    external: { href: 'https://parcentry.com', label: 'parcentry.com →' },
    stage: 'ACTIVE PRODUCT',
    atmosphere: 'standard',
  },
  {
    category: 'ORIGINAL ANIMATED IP',
    name: 'Flight Risk',
    description: 'Original animated IP.',
    entry: '/flight-risk',
    stage: 'IN DEVELOPMENT',
    atmosphere: 'cinematic',
  },
  {
    category: 'EXPERIMENTS · WORKING FIELD',
    name: 'Labs',
    description: 'Early-stage experiments and prototypes.',
    entry: '#labs',
    stage: 'WORKING FIELD',
    atmosphere: 'standard',
  },
];
