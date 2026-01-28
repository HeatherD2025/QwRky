import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const quoteApi = createApi({
  reducerPath: 'quoteApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api-get-quotes.vercel.app/api/v1/category/science',
  }),
  endpoints: (builder) => ({
    getQuote: builder.query({
      query: ({ count = 1 } = {}) => ({
        url: '',
        params: {
            api_key: X_RAPID_API_KEY,
            count,
        },
      }),
    }),
  }),
});

export const { useGetQuoteQuery } = quoteApi;