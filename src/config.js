const BASE_URL = 'https://restcountries.com/v3.1/';

export const ALL_COUNTRIES = `${BASE_URL}all?fields=name,capital,flags,population,region,ccn3`;

export const searchByCode = (code) => `${BASE_URL}alpha?codes=${code}`;

export const filterByCode = (codes) =>
  `${BASE_URL}alpha?codes=${codes.join(',')}`;
