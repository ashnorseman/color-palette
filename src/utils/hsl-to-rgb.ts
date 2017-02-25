/**
 * Convert HSL to RGB
 */

import { HSL } from './HSL.model';
import { colorNumberToHex } from './color-number-to-hex';

export function hslToRgb(hsl: HSL): string {
  const l = hsl.l / 100;
  const s = hsl.s / 100;
  const h: number = hsl.h / 60;

  const chroma: number = (1 - Math.abs(2 * l - 1)) * s;
  const x: number = chroma * (1 - Math.abs(h % 2 - 1));

  let r: number;
  let g: number;
  let b: number;

  if (s === 0) {
    r = 0;
    g = 0;
    b = 0;
  } else if (h <= 1) {
    r = chroma;
    g = x;
    b = 0;
  } else if (h <= 2) {
    r = x;
    g = chroma;
    b = 0;
  } else if (h <= 3) {
    r = 0;
    g = chroma;
    b = x;
  } else if (h <= 4) {
    r = 0;
    g = x;
    b = chroma;
  } else if (h <= 5) {
    r = x;
    g = 0;
    b = chroma;
  } else if (h <= 6) {
    r = chroma;
    g = 0;
    b = x;
  }

  const m = l - chroma / 2;

  r = (r + m) * 255;
  g = (g + m) * 255;
  b = (b + m) * 255;

  return `#${colorNumberToHex(r)}${colorNumberToHex(g)}${colorNumberToHex(b)}`;
}
