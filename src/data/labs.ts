export interface LabEntry {
  prefix: string;        // small uppercase label, e.g. IN PROGRESS, NOTE, INDEX, ARCHIVE
  name: string;          // labs-<name>
  description: string;   // one-line annotation shown in the row
  expanded: string;      // one quiet extra line revealed when the row is opened
  cartograph?: boolean;  // if true, the cartograph mini-map renders inside the expanded panel
}

// Quiet catalog annotations. Add/edit freely.
export const labs: LabEntry[] = [
  {
    prefix: 'IN PROGRESS',
    name: 'labs-archive',
    description: 'long-arc decision memory',
    expanded: 'preserves decisions before they become folklore.',
  },
  {
    prefix: 'NOTE',
    name: 'labs-fieldnotes',
    description: 'fragments before they become public',
    expanded: 'catches rough material before it hardens into public work.',
  },
  {
    prefix: 'INDEX',
    name: 'labs-cartograph',
    description: 'a map of ventures and unfinished threads',
    expanded: 'shows what exists, what is dormant, and what is becoming real.',
    cartograph: true,
  },
];
