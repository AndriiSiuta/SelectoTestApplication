/**
 * @param {number} temperature
 * @returns {number}
 * */
export function ConvertToKelvin(temperature: number): number {
  const KELVIN_PARAM = 273.15;

  return temperature - KELVIN_PARAM;
}
