import { createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice({
  name: '@@theme',
  initialState: 'light',
  reducers: {
    setTheme: (state, action) => {
      const { payload } = action;
      return payload;
    },
  },
});

export const { setTheme } = themeSlice.actions;

export const themeReducer = themeSlice.reducer;

export const selectCurrentTheme = (state) => state.theme;
