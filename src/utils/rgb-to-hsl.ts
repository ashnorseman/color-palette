/**
 * Convert RGB to HSL
 */

import { HSL } from './HSL.model';

export function rgbToHsl(rgb: string): HSL {

  // Remove leading `#`
  rgb = rgb.replace(/^#/, '');

  // Convert format `000` to `000000`
  if (rgb.length === 3) {
    rgb = rgb[0] + rgb[0] + rgb[1] + rgb[1] + rgb[2] + rgb[2];
  }

  // Convert hex strings to numbers [0, 1]
  let r: number = parseInt(rgb.slice(0, 2), 16) / 255 || 0;
  let g: number = parseInt(rgb.slice(2, 4), 16) / 255 || 0;
  let b: number = parseInt(rgb.slice(4, 6), 16) / 255 || 0;

  const max: number = Math.max(r, g, b);
  const min: number = Math.min(r, g, b);
  const chroma: number = max - min;

  let h: number;
  let s: number;
  let l: number = (max + min) / 2;

  if (chroma === 0) {
    h = 0;
    s = 0;
  } else {
    switch (max) {
      case r:
        h = (g - b) / chroma % 6;
        break;
      case g:
        h = (b - r) / chroma + 2;
        break;
      case b:
        h = (r - g) / chroma + 4;
        break;
    }

    s = chroma / (1 - Math.abs(2 * l - 1));
  }

  // h: 0 - 360
  // s: 0% – 100%
  // l: 0% – 100%
  h *= 60;
  s *= 100;
  l *= 100;

  return new HSL(h, s, l);
}
