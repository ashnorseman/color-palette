/**
 * Test: Convert a color number to a hex string
 */

import { colorNumberToHex } from './color-number-to-hex';

describe('Convert a color number to a hex string', () => {
  it('convert', () => {
    expect(colorNumberToHex(0)).toEqual('00');
    expect(colorNumberToHex(255)).toEqual('ff');
  });
});
