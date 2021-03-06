import { rest } from 'msw';

import mockUsers from 'mocks/mockData/users.json';
import { API_BASE_URL } from 'constants';

export const getUser200 = rest.get(
  `${API_BASE_URL}/users/:userId`,
  (req, res, ctx) => {
    const { userId } = req.params;
    return res(ctx.status(200), ctx.json(mockUsers[userId - 1]));
  }
);

export const getSpecificUser200 = rest.get(
  `${API_BASE_URL}/users/:userId`,
  (req, res, ctx) => res(ctx.status(200), ctx.json(mockUsers[0]))
);

export const getUser500 = rest.get(
  `${API_BASE_URL}/users/:userId`,
  (req, res, ctx) => res(ctx.status(500))
);

const handlers = [getUser200];

export default handlers;
