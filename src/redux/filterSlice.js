import { createSlice } from '@reduxjs/toolkit';
// import storage from 'redux-persist/lib/storage';
// import { persistReducer } from 'redux-persist';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setFilter: (state, action) => (state = action.payload),
  },
});

// const persistConfig = {
//   key: 'filter',
//   storage,
//   // whilelist: ['value'],
// };

export const { setFilter } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
// export const filterReducer = persistReducer(persistConfig, filterSlice.reducer);
