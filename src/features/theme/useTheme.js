import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setTheme, selectCurrentTheme } from './themeSlice';

export const useTheme = () => {
  const dispatch = useDispatch();

  const theme = useSelector(selectCurrentTheme);

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () =>
    dispatch(setTheme(theme === 'light' ? 'dark' : 'light'));

  return [theme, toggleTheme];
};
