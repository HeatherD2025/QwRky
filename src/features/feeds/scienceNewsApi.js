import { api } from "../api/baseApi";

const NEWS_API_KEY = import.meta.env.NEWS_API_KEY;

export const scienceNewsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getScienceArticles: builder.query({
      query: ({ search = "", pageSize = 100 } = {}) => ({
        url: "science-news",
        params: {
          q: search || "science OR scientific",
          language: "en",
          page: 1,
          pageSize,
          sortBy: "publishedAt",
          apiKey: NEWS_API_KEY,
        },
      }),
    }),
  }),
});

export const { useGetScienceArticlesQuery } = scienceNewsApi;
