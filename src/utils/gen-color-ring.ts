/**
 * Generate a color ring from a start color
 */

import { HSL } from './HSL.model';
import { rgbToHsl } from './rgb-to-hsl'

export function genColorRing(startRGB: string, count: number): string[] {
  const startHSL: HSL = rgbToHsl(startRGB);
  const results: HSL[] = [];

  // Shorten distance of green on the color ring for a better distinguish between colors
  const GREEN_START: number = 90;
  const GREEN_END: number = 150;
  const SHORTENED: number = (GREEN_END - GREEN_START) / 2;
  const RING_LENGTH: number = 360 - SHORTENED;

  let startHueTuned: number;

  if (startHSL.h <= GREEN_START) {
    startHueTuned = startHSL.h;
  } else if (startHSL.h >= GREEN_END) {
    startHueTuned = startHSL.h - SHORTENED;
  } else {
    startHueTuned = GREEN_START + (startHSL.h - GREEN_START) / 2;
  }

  for (let i = 0; i < count; i += 1) {
    const hueTuned = (startHueTuned + RING_LENGTH / count * i + RING_LENGTH) % RING_LENGTH;

    let realHue;

    if (hueTuned <= GREEN_START) {
      realHue = hueTuned;
    } else if (hueTuned >= GREEN_END - SHORTENED) {
      realHue = hueTuned + SHORTENED;
    } else {
      realHue = hueTuned + (hueTuned - GREEN_START);
    }

    results.push(new HSL(realHue, startHSL.s, startHSL.l));
  }

  return results.map((hsl) => hsl.toRGBString());
}
