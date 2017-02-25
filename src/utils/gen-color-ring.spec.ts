/**
 * Test: Generate a color ring from a start color
 */

import { genColorRing } from './gen-color-ring';

describe('Generate a color ring from a start color', () => {
  it('2 colors', () => {
    const result = genColorRing('#f00', 2);

    expect(result.length).toEqual(2);
    expect(result[0]).toEqual('#ff0000');
    expect(result[1]).toEqual('#00bfff');
  });

  it('3 colors', () => {
    const result = genColorRing('#f00', 3);

    expect(result.length).toEqual(3);
    expect(result[0]).toEqual('#ff0000');
    expect(result[1]).toEqual('#00ff2a');
    expect(result[2]).toEqual('#2b00ff');
  });

  it('4 colors', () => {
    const result = genColorRing('#f00', 4);

    expect(result.length).toEqual(4);
    expect(result[0]).toEqual('#ff0000');
    expect(result[1]).toEqual('#9fff00');
    expect(result[2]).toEqual('#00bfff');
    expect(result[3]).toEqual('#9f00ff');
  });

  it('start from hue 120', () => {
    const result = genColorRing('#008000', 3);

    expect(result[0]).toEqual('#008000');
    expect(result[1]).toEqual('#0b0080');
    expect(result[2]).toEqual('#80000b');
  });

  it('start from hue 240', () => {
    const result = genColorRing('#8080ff', 3);

    expect(result[0]).toEqual('#8080ff');
    expect(result[1]).toEqual('#ff8095');
    expect(result[2]).toEqual('#95ff80');
  });
});
