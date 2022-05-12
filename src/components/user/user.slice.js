import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const name = 'user';

export const fetchUser = createAsyncThunk(`${name}/fetchUser`, async () => {
  const randomUserId = Math.floor(Math.random() * 10) + 1;
  const resp = await fetch(
    `https://jsonplaceholder.typicode.com/users/${randomUserId}`
  ).then((data) => data.json());
  return resp;
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

    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.status = 'complete';
      state.name = action.payload;
    });
  },
});

export const selectUser = (state) => state.user.name;

export const selectUserFetchStatus = (state) => state.user.status;
