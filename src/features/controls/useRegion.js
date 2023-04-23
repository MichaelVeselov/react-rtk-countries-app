import { useDispatch, useSelector } from 'react-redux';

import { setRegion, selectRegion } from './controlSlice';

export const useRegion = () => {
  const dispatch = useDispatch();

  const region = useSelector(selectRegion);

  const handleSelect = (region) => {
    dispatch(setRegion(region?.value || ''));
  };

  return [region, handleSelect];
};
