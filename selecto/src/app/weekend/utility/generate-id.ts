import {
  find as Rfind
} from 'ramda';

export function generateId() {
  const TOTAL_COUNT = 6;
  let result = '';

  for(let i = 0; i < TOTAL_COUNT; i++) {
    result += Math.floor((Math.random() * 9) + 1);
  }

  return +result;
}

export function checkIfNotEqual(countriesId: number[], generateCountryId: number = generateId()) {
  let check = false;
  for (let i = 0, len = countriesId.length; i < len; i++) {
    if (generateCountryId === countriesId[i]) {
      check = true;
    }

    if (check) {
      return checkIfNotEqual(countriesId);
    }
  }

  if (!check) {
    return generateCountryId;
  }
}
