/** Site-wide static assets from `src/images/` (logos, favicon). */

import { imageUrl } from '../lib/imageUrl';

import awLogo from '../images/aw-logo.svg';
import shieldLogo from '../images/shield-color-4x.svg';

export const siteAssets = {
  awLogo: imageUrl(awLogo),
  shieldLogo: imageUrl(shieldLogo),
};
