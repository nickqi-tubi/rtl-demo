import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export default createApi({
  reducerPath: 'user',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (builder) => ({
    fetchUser: builder.query({
      query: () => `move`,
    }),
  }),
});
