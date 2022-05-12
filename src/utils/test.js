import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import userSlice from 'components/user/user.slice';

const render = (
  ui,
  {
    preloadedState,
    store = configureStore({
      reducer: { user: userSlice.reducer },
      preloadedState,
    }),
    ...renderOptions
  } = {}
) => {
  const Wrapper = ({ children }) => {
    return <Provider store={store}>{children}</Provider>;
  };
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
};

// re-export everything
export * from '@testing-library/react';

// override render method
export { render };
