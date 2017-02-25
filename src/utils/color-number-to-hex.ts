/**
 * Convert a color number to a hex string
 */

export function colorNumberToHex(number: number): string {
  const str = Math.round(number).toString(16);

  return str.length === 1 ? '0' + str : str;
}
