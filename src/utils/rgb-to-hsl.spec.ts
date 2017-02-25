/**
 * Test: Convert RGB to HSL
 */

import { rgbToHsl } from './rgb-to-hsl';
import { HSL } from './HSL.model';

describe('RGB to HSL', () => {
  it('#fff: 0, 0%, 100%', () => {
    const result: HSL = rgbToHsl('#fff');

    expect(result.h).toEqual(0);
    expect(result.s).toEqual(0);
    expect(result.l).toEqual(100);
  });

  it('#000: 0, 0%, 0%', () => {
    const result: HSL = rgbToHsl('#000');

    expect(result.h).toEqual(0);
    expect(result.s).toEqual(0);
    expect(result.l).toEqual(0);
  });

  it('#f00: 0, 100%, 50%', () => {
    const result: HSL = rgbToHsl('#f00');

    expect(result.h).toEqual(0);
    expect(result.s).toEqual(100);
    expect(result.l).toEqual(50);
  });

  it('#0f0: 120, 100%, 50%', () => {
    const result: HSL = rgbToHsl('#0f0');

    expect(result.h).toEqual(120);
    expect(result.s).toEqual(100);
    expect(result.l).toEqual(50);
  });

  it('#00f: 240, 100%, 50%', () => {
    const result: HSL = rgbToHsl('#00f');

    expect(result.h).toEqual(240);
    expect(result.s).toEqual(100);
    expect(result.l).toEqual(50);
  });

  it('#808080: 0, 0%, 50.2%', () => {
    const result: HSL = rgbToHsl('#808080');

    expect(result.h).toEqual(0);
    expect(result.s).toEqual(0);
    expect(result.l).toBeCloseTo(50.2, 1);
  });

  it('#88B04B: 83.8, 40.2%, 49.2%', () => {
    const result: HSL = rgbToHsl('#88B04B');

    expect(result.h).toBeCloseTo(83.8, 1);
    expect(result.s).toBeCloseTo(40.2, 1);
    expect(result.l).toBeCloseTo(49.2, 1);
  });

  it('color without #', () => {
    const result: HSL = rgbToHsl('88B04B');

    expect(result.h).toBeCloseTo(83.8, 1);
    expect(result.s).toBeCloseTo(40.2, 1);
    expect(result.l).toBeCloseTo(49.2, 1);
  });
});
