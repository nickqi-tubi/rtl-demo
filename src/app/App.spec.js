import { render, screen } from '@testing-library/react';
import App from './App.component';

describe('<App />', () => {
  it('should render App with heading', () => {
    render(<App />);
    const headingElem = screen.getByRole('heading', {
      name: 'RTL Demo',
    });
    expect(headingElem).toBeInTheDocument();
  });
});
