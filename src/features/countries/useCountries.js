import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  loadCountries,
  selectVisibleCountries,
  selectCountryListInfo,
} from './countrySlice';

import { selectRegion, selectSearch } from '../controls/controlSlice';

export const useCountries = () => {
  const dispatch = useDispatch();

  const search = useSelector(selectSearch);
  const region = useSelector(selectRegion);

  const countries = useSelector((state) =>
    selectVisibleCountries(state, { search, region })
  );
  const { status, error, quantity } = useSelector(selectCountryListInfo);

  useEffect(() => {
    if (!quantity) {
      dispatch(loadCountries());
    }
    // eslint-disable-next-line
  }, [quantity]);

  return [countries, { status, error }];
};
