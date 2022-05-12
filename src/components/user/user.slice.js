import { API_BASE_URL } from 'constants';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const name = 'user';

export const fetchUser = createAsyncThunk(`${name}/fetchUser`, async () => {
  const randomUserId = Math.floor(Math.random() * 10) + 1;
  const res = await fetch(`${API_BASE_URL}/users/${randomUserId}`).then(
    (data) => data.json()
  );
  return res;
});

export default createSlice({
  name,

  initialState: {
    user: null,
    status: 'idle',
  },

  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state, action) => {
      state.status = 'loading';
    });

    builder.addCase(fetchUser.rejected, (state, action) => {
      state.status = 'failed';
    });

    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.status = 'successful';
      state.name = action.payload;
    });
  },
});

export const selectUser = (state) => state.user.name;

export const selectUserFetchStatus = (state) => state.user.status;
