/** About page photo strip (`about-us/index.astro`). Same pattern as `team.ts`: static imports from `src/images/`. */

import { imageUrl } from '../lib/imageUrl';

import candidStripLeft from '../images/photos/candid-001.jpg';
import candidStripCenter from '../images/photos/candid-002.jpg';
import candidStripRight from '../images/photos/candid-003.jpg';

/** Resolved URLs for the three-column photo strip (left, center, right). */
export const aboutPhotoStrip = {
  left: imageUrl(candidStripLeft),
  center: imageUrl(candidStripCenter),
  right: imageUrl(candidStripRight),
};
