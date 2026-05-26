export interface Venture {
  category: string;        // small uppercase label
  name: string;            // venture name in Fraunces
  description: string;
  entry: string;           // internal detail page
  external?: { href: string; label: string };
  // File-drawer metadata revealed on hover/focus (desktop) and visible
  // by default on mobile. Rendered as small uppercase labels separated
  // by oxblood mid-dots.
  meta: string[];
}

export const ventures: Venture[] = [
  {
    category: 'commercial real estate',
    name: 'Parcentry',
    description: 'Tracks public-record changes across commercial properties.',
    entry: '/parcentry',
    external: { href: 'https://parcentry.com', label: 'parcentry.com →' },
    meta: ['PUBLIC RECORDS', 'CHANGE INTELLIGENCE', 'ACTIVE PRODUCT'],
  },
  {
    category: 'animated series',
    name: 'Flight Risk',
    description:
      'An ongoing world about leaving. Animated, written, scored, never finished.',
    entry: '/flight-risk',
    meta: ['ANIMATED SERIES', 'PLANET TEROVA', 'IN DEVELOPMENT'],
  },
];
