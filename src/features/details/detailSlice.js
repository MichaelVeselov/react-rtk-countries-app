import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const loadCountryByCode = createAsyncThunk(
  '@@details/load-country-by-name',
  (code, thunkAPI) => {
    const {
      extra: { client, api },
    } = thunkAPI;

    return client.get(api.searchByCode(code)).then((response) => {
      const { data } = response;
      return data[0];
    });
  }
);

export const loadNeighbors = createAsyncThunk(
  '@@details/load-neighbors',
  (codes, thunkAPI) => {
    const {
      extra: { client, api },
    } = thunkAPI;

    return client.get(api.filterByCode(codes)).then((resonse) => {
      const { data } = resonse;
      return data;
    });
  }
);

const initialState = {
  currentCountry: null,
  neighbors: [],
  status: 'idle',
  error: null,
};

const detailSlice = createSlice({
  name: '@@details',
  initialState: initialState,
  reducers: {
    clearDetails: (state, action) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadCountryByCode.pending, (state, action) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(loadCountryByCode.rejected, (state, action) => {
        const { payload, meta } = action;
        state.status = 'rejected';
        state.error = payload || meta.error;
      })
      .addCase(loadCountryByCode.fulfilled, (state, action) => {
        const { payload } = action;
        state.status = 'idle';
        state.currentCountry = payload;
      })
      .addCase(loadNeighbors.pending, (state, action) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(loadNeighbors.rejected, (state, action) => {
        const { payload, meta } = action;
        state.status = 'rejected';
        state.error = payload || meta.error;
      })
      .addCase(loadNeighbors.fulfilled, (state, action) => {
        const { payload } = action;
        state.status = 'idle';
        state.error = null;
        state.neighbors = payload.map((country) => [
          country.name.common,
          country.ccn3,
        ]);
      });
  },
});

export const { clearDetails } = detailSlice.actions;

export const detailReducer = detailSlice.reducer;

export const selectCurrentCountry = (state) => state.details.currentCountry;
export const selectAllDetails = (state) => state.details;
export const selectNeighbors = (state) => state.details.neighbors;
