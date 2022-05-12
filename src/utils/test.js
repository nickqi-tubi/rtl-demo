import React from 'react';
import { render as rtlRender } from '@testing-library/react';

import AllProviders from 'components/allProviders';

const render = (ui, options) => {
  const Wrapper = ({ children }) => {
    return <AllProviders>{children}</AllProviders>;
  };
  return rtlRender(ui, { wrapper: Wrapper, ...options });
};

// re-export everything
export * from '@testing-library/react';

// override render method
export { render };
