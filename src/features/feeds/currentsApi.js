import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const currentsApi = createApi({
  reducerPath: "currentsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/.netlify/functions",
  }),
  endpoints: (builder) => ({
    getLatestNews: builder.query({
      query: ({
        language = "en",
        category
      } = {}) => {
        const params = new URLSearchParams({ language });
        if (category) params.set("category", category);
        
        return `currentsLatest?${params.toString()}`;
      },
    }),
  }),
});

export const { useGetLatestNewsQuery } = currentsApi;
