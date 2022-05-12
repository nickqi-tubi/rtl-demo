import App from './App.component';
import { render, screen } from 'utils/test';

describe('<App />', () => {
  it('should render App with heading', () => {
    render(<App />);
    const headingElem = screen.getByRole('heading', {
      name: 'RTL Demo',
    });
    expect(headingElem).toBeInTheDocument();
  });
});
