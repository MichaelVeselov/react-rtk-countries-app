import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  search: '',
  region: '',
};
const controlSlice = createSlice({
  name: '@@controls',
  initialState: initialState,
  reducers: {
    setSearch: (state, action) => {
      const { payload } = action;
      state.search = payload;
    },
    setRegion: (state, action) => {
      const { payload } = action;
      state.region = payload;
    },
    clearControls: (state, action) => {
      return initialState;
    },
  },
});

export const { setSearch, setRegion, clearControls } = controlSlice.actions;

export const controlReducer = controlSlice.reducer;

export const selectControls = (state) => state.controls;
export const selectSearch = (state) => state.controls.search;
export const selectRegion = (state) => state.controls.region;
