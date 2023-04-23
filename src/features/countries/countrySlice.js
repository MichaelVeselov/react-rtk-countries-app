import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { orderBy } from 'lodash';

export const loadCountries = createAsyncThunk(
  '@@countries/load-countries',
  (_, thunkAPI) => {
    const {
      extra: { client, api },
    } = thunkAPI;

    return client.get(api.ALL_COUNTRIES).then((response) => {
      const { data } = response;
      return data;
    });
  }
);

const initialState = {
  status: 'idle',
  error: null,
  list: [],
};

const countrySlice = createSlice({
  name: '@@countries',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadCountries.pending, (state, action) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(loadCountries.rejected, (state, action) => {
        const { payload, meta } = action;
        state.status = 'rejected';
        state.error = payload || meta.error;
      })
      .addCase(loadCountries.fulfilled, (state, action) => {
        const { payload } = action;
        state.status = 'received';
        state.list = orderBy(payload, ['name.common'], ['asc']);
      });
  },
});

export const countryReducer = countrySlice.reducer;

export const selectCountryListInfo = (state) => ({
  status: state.countries.status,
  error: state.countries.error,
  quantity: state.countries.list.length,
});

export const selectAllCountries = (state) => state.countries.list;

export const selectVisibleCountries = (state, { search = '', region = '' }) => {
  const data = state.countries.list;

  return data.filter(
    (country) =>
      country.name.common.toLowerCase().includes(search.toLowerCase()) &&
      country.region.includes(region)
  );
};
