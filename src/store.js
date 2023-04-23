import { configureStore } from '@reduxjs/toolkit';

import logger from 'redux-logger';

import axios from 'axios';
import * as api from './config';

import { themeReducer } from './features/theme/themeSlice';
import { controlReducer } from './features/controls/controlSlice';
import { countryReducer } from './features/countries/countrySlice';
import { detailReducer } from './features/details/detailSlice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    controls: controlReducer,
    countries: countryReducer,
    details: detailReducer,
  },
  devTools: true,
  middleware: (getDeafaultMiddleware) =>
    getDeafaultMiddleware({
      thunk: {
        extraArgument: { client: axios, api },
      },
      serializableCheck: false,
    }).concat(logger),
  preloadedState: {},
  enhancers: [],
});
