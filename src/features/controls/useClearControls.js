import { useDispatch } from 'react-redux';
import { clearControls } from './controlSlice';

export const useClearControls = () => {
  const dispatch = useDispatch();

  const clearAllControls = () => dispatch(clearControls);

  return clearAllControls;
};
