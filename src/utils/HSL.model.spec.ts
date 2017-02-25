/**
 * Test: HSL color model
 */

import { HSL } from './HSL.model';

describe('HSL color model', () => {
  it('toString()', () => {
    expect(new HSL(0, 0, 0).toString()).toEqual('hsl(0, 0%, 0%)');
    expect(new HSL(83.81, 40.29, 49.25).toString()).toEqual('hsl(84, 40%, 49%)');
    expect(new HSL(83.8, 40.3, 49.2).toRGBString()).toEqual('#88b04b');
  });
});
