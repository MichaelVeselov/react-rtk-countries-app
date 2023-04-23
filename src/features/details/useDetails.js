import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  loadCountryByCode,
  clearDetails,
  selectAllDetails,
} from './detailSlice';

export const useDetails = (code) => {
  const dispatch = useDispatch();

  const { status, error, currentCountry } = useSelector(selectAllDetails);

  useEffect(() => {
    dispatch(loadCountryByCode(code));
    return () => dispatch(clearDetails());
    // eslint-disable-next-line
  }, [code]);

  const countryInfo = () => ({
    name: currentCountry?.name.common || '',

    nativeNames: currentCountry?.name?.nativeName
      ? Object.keys(currentCountry?.name?.nativeName).map((key) => [
          key,
          currentCountry?.name?.nativeName[key]?.common,
        ])
      : [],

    flag: currentCountry?.flags.png || currentCountry?.flags.svg || '',

    flagDescription: currentCountry?.flags.alt || '',

    capital: currentCountry?.capital ? currentCountry?.capital[0] : '',

    population: currentCountry?.population.toLocaleString() || '',

    region: currentCountry?.region || '',

    subregion: currentCountry?.subregion || '',

    topLevelDomains: currentCountry?.tld || '',

    currencies: currentCountry?.currencies
      ? Object.keys(currentCountry?.currencies).map((key) => [
          key,
          currentCountry?.currencies[key].name,
        ])
      : [],

    languages: currentCountry?.languages
      ? Object.keys(currentCountry?.languages).map((key) => [
          key,
          currentCountry?.languages[key],
        ])
      : [],

    borders: currentCountry?.borders || [],
  });
  return [countryInfo, { status, error, currentCountry }];
};
