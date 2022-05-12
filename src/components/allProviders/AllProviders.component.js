import { Provider } from 'react-redux';

import store from 'redux/store';

const AllProviders = ({ children }) => (
  <Provider store={store}>{children}</Provider>
);

export default AllProviders;
