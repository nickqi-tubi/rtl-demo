import { configureStore } from '@reduxjs/toolkit';

import userSlice from 'components/user/user.slice';

export default configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});
