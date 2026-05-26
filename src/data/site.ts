export const site = {
  name: 'Faria Innovations',
  shortName: 'Faria',
  legalName: 'Faria Innovations LLC',
  descriptor: 'software, animation, and experiments, indexed under one name',
  domain: 'fariainnovations.com',
  url: 'https://fariainnovations.com',
  locale: 'en_US',
  email: 'felipe@fariainnovations.com',
  phone: '(443) 409-9543',
  phoneHref: 'tel:+14434099543',
  phoneE164: '+14434099543',
  location: 'Beltsville, Maryland',
  address: {
    locality: 'Beltsville',
    region: 'MD',
    country: 'US',
  },
  founder: 'Felipe Alves Faria',
  // Update this when you push a meaningful change.
  // Format: YYYY-MM-DD.
  // Used by the hero "INDEX STATE" line and the footer "LAST FILED" stamp.
  lastUpdated: '2026-05-25',
  // Ventures named here are used for JSON-LD subOrganization references.
  ventures: [
    { name: 'Parcentry',  url: 'https://parcentry.com' },
    { name: 'Flight Risk' },
  ],
} as const;
