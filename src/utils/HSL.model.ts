/**
 * HSL color model
 * h: [0, 360)
 * s: [0, 100] (%)
 * l: [0, 100] (%)
 */

import { hslToRgb } from './hsl-to-rgb';

export class HSL {

  constructor(
    public h: number,
    public s: number,
    public l: number
  ) { }

  /**
   * Convert to an HSL color string
   * e.g. hsl(84, 40%, 49%)
   */
  toString(): string {
    return `hsl(${Math.round(this.h)}, ${Math.round(this.s)}%, ${Math.round(this.l)}%)`;
  }

  /**
   * Convert to an RGB string
   * e.g. #88b04b
   */
  toRGBString(): string {
    return hslToRgb(this);
  }
}
