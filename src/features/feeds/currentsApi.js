import { api } from "../api/baseApi";

export const currentsApi = api.injectEndpoints({
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
