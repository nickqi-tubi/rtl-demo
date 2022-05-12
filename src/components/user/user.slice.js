import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import userApi from './user.api';

const name = 'user';

export const fetchUser = createAsyncThunk(`${name}/fetchUser`, async () => {
  const response = await userApi.fetchUser();
  return response.data;
});

export default createSlice({
  name,

  initialState: {
    name: 'No user',
    status: 'idle',
  },

  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state, action) => {
      state.status = 'loading';
    });

    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.status = 'complete';
      state.name = action.payload;
    });
  },
});

export const selectUser = (state) => state.user.name;

export const selectUserFetchStatus = (state) => state.user.status;
