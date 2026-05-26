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
  /** One-line description in body voice. */
  description: string;
  /** Internal detail page route. */
  entry: string;
  /** Optional external link, e.g. parcentry.com */
  external?: { href: string; label: string };
  /** Real operational signals shown directly under the description. */
  signals: VentureSignal[];
  /** Bottom-row dossier metadata. Mono key/value pairs. */
  metadata: VentureMetadataField[];
  /** Optional supporting graphic component name to render in the entry. */
  graphic?: 'parcel-map';
  /** Optional modifier flag that tunes the row's typographic atmosphere. */
  atmosphere?: 'standard' | 'cinematic';
}

export const ventures: Venture[] = [
  {
    category: 'COMMERCIAL REAL ESTATE SOFTWARE',
    name: 'Parcentry',
    description:
      'Tracks public-record changes across commercial properties.',
    entry: '/parcentry',
    external: { href: 'https://parcentry.com', label: 'parcentry.com →' },
    signals: [
      { label: '281K PARCELS INDEXED' },
      { label: 'NIGHTLY SCANS' },
      { label: 'PUBLIC RECORDS' },
    ],
    metadata: [
      { key: 'STATUS',      value: 'OPERATIONAL' },
      { key: 'SCOPE',       value: 'UNITED STATES' },
      { key: 'DATA SOURCE', value: 'COUNTY RECORDS' },
    ],
    graphic: 'parcel-map',
    atmosphere: 'standard',
  },
  {
    category: 'ANIMATED SERIES',
    name: 'Flight Risk',
    description:
      'An ongoing world about leaving. Animated, written, scored, never finished.',
    entry: '/flight-risk',
    signals: [
      { label: 'WORLD: PLANET TEROVA' },
      { label: 'FORMAT: ANIMATED SERIES' },
      { label: 'IN DEVELOPMENT' },
    ],
    metadata: [
      { key: 'MEDIUM',  value: 'ANIMATION / PROSE / SCORE' },
      { key: 'STATE',   value: 'OPEN-ENDED' },
      { key: 'ORIGIN',  value: 'INTERNAL' },
    ],
    atmosphere: 'cinematic',
  },
];
