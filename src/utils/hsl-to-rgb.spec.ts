/**
 * Test: Convert HSL to RGB
 */

import { hslToRgb } from './hsl-to-rgb';
import { HSL } from './HSL.model';

describe('HSL to RGB', () => {
  it('#fff: 0, 0%, 100%', () => {
    expect(hslToRgb(new HSL(0, 0, 100))).toEqual('#ffffff');
  });

  it('#000: 0, 0%, 0%', () => {
    expect(hslToRgb(new HSL(0, 0, 0))).toEqual('#000000');
  });

  it('#f00: 0, 100%, 50%', () => {
    expect(hslToRgb(new HSL(0, 100, 50))).toEqual('#ff0000');
  });

  it('#0f0: 120, 100%, 50%', () => {
    expect(hslToRgb(new HSL(120, 100, 50))).toEqual('#00ff00');
  });

  it('#0ff: 180, 100%, 50%', () => {
    expect(hslToRgb(new HSL(180, 100, 50))).toEqual('#00ffff');
  });

  it('#00f: 240, 100%, 50%', () => {
    expect(hslToRgb(new HSL(240, 100, 50))).toEqual('#0000ff');
  });

  it('#f0f: 300, 100%, 50%', () => {
    expect(hslToRgb(new HSL(300, 100, 50))).toEqual('#ff00ff');
  });

  it('#ff0080: 300, 100%, 50%', () => {
    expect(hslToRgb(new HSL(330, 100, 50))).toEqual('#ff0080');
  });

  it('#808080: 0, 0%, 50.2%', () => {
    expect(hslToRgb(new HSL(0, 0, 50.2))).toEqual('#808080');
  });

  it('#88B04B: 83.8, 40.2%, 49.2%', () => {
    expect(hslToRgb(new HSL(83.8, 40.2, 49.2))).toEqual('#88b04b');
  });
});
