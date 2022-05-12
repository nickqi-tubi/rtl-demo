import React from 'react';
import userEvent from '@testing-library/user-event';

import User from './User.component';
import { getUser200, getSpecificUser200 } from 'mocks/handlers';
import { render, screen, waitFor } from 'utils/test';
import { server } from 'mocks/server';

describe('<User />', () => {
  it('should fetch user data if fetch button is clicked', async () => {
    server.use(getUser200);
    render(<User />);
    expect(screen.getByText('No user')).toBeInTheDocument();
    expect(screen.queryByText('Fetching user...')).not.toBeInTheDocument();
    userEvent.click(
      screen.getByRole('button', {
        name: 'Fetch user',
      })
    );
    expect(screen.getByText('Fetching user...')).toBeInTheDocument();
    await waitFor(() => {
      expect(screen.queryByText('No user')).not.toBeInTheDocument();
    });
  });

  it('should fetch specific user data', async () => {
    server.use(getSpecificUser200);
    render(<User />);
    userEvent.click(
      screen.getByRole('button', {
        name: 'Fetch user',
      })
    );
    await waitFor(() => {
      expect(screen.getByText('Nick Qi')).toBeInTheDocument();
    });
  });
});
