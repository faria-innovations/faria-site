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
  /** Visible label, e.g. "View Parcentry →" */
  label: string;
  /** href — external URL / route / anchor */
  href: string;
  /** Opens in a new tab with rel="noopener noreferrer". */
  external?: boolean;
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
  /** Optional secondary action (e.g. Book a Demo) shown beside the primary CTA. */
  demo?: VentureCTA;
  /** Optional signals (legacy field, unused in current rendering). */
  signals?: VentureSignal[];
  /** Optional metadata rows (legacy field, unused in current rendering). */
  metadata?: VentureMetadataField[];
  /** Optional supporting graphic component name to render in the entry. */
  graphic?: 'parcel-map';
  /** Optional modifier flag that tunes the row's typographic atmosphere. */
  atmosphere?: 'standard' | 'cinematic';
}

// Technology positioning only. Entertainment (Flight Risk) has moved to
// Faria Innovations Media and is intentionally absent from this site.
export const ventures: Venture[] = [
  {
    category: 'COMMERCIAL REAL ESTATE INTELLIGENCE',
    name: 'Parcentry',
    description: 'Tracks public-record changes across commercial properties.',
    entry: '/parcentry',
    stage: 'ACTIVE PRODUCT',
    // Proof metrics live only in the global proof strip — not duplicated here.
    cta: {
      label: 'View Parcentry →',
      href: 'https://parcentry.com',
      external: true,
    },
    // Secondary action → product page demo section (internal route).
    demo: {
      label: 'Book a Demo',
      href: '/parcentry/#book-demo',
    },
    atmosphere: 'standard',
  },
  {
    category: 'TECHNOLOGY EXPERIMENTS',
    name: 'Labs',
    description: 'Internal prototypes, tools, and working systems that may become future ventures.',
    entry: '#labs',
    stage: 'WORKING FIELD',
    cta: {
      label: 'View Labs →',
      href: '#labs',
    },
    atmosphere: 'standard',
  },
];
