import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';

import Counter from './Counter.component';

describe('<Counter />', () => {
  it('should set the passed initialCount to state', () => {
    render(<Counter initialCount={2} />);
    expect(screen.getByLabelText('count')).toHaveTextContent(2);
  });

  it('should increment by 1 when increment button is clicked', () => {
    render(<Counter />);
    expect(screen.getByLabelText('count')).toHaveTextContent(0);
    userEvent.click(
      screen.getByRole('button', {
        name: 'Increment',
      })
    );
    expect(screen.getByLabelText('count')).toHaveTextContent(1);
  });
});
