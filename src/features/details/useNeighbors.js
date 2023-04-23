import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { loadNeighbors, selectNeighbors } from './detailSlice';

export const useNeighbors = (borders) => {
  const dispatch = useDispatch();

  const neighbors = useSelector(selectNeighbors);

  useEffect(() => {
    if (borders.length) {
      dispatch(loadNeighbors(borders));
    }
    // eslint-disable-next-line
  }, [borders]);

  return neighbors;
};
