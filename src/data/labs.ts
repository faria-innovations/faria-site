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
    description: 'Internal project history and long-term decision records.',
    expanded: 'A record of past projects and the decisions behind them.',
  },
  {
    prefix: 'NOTE',
    name: 'labs-fieldnotes',
    description: 'Early research, technical notes, and operating observations.',
    expanded: 'Working notes from research and day-to-day operations.',
  },
  {
    prefix: 'INDEX',
    name: 'labs-cartograph',
    description: 'A working map of active systems, prototypes, and future venture paths.',
    expanded: 'Shows what is active, what is in prototype, and what may become a future venture.',
    cartograph: true,
  },
];
