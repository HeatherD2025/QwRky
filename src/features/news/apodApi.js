import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import 'dotenv/config';

const SPACE_IMAGES_API_KEY = import.meta.env.VITE_SPACE_IMAGES_API_KEY;

export const spaceImagesApi = createApi({
  reducerPath: 'spaceImagesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.nasa.gov/planetary/apod',
  }),
  endpoints: (builder) => ({
    getSpaceImages: builder.query({
      query: ({ count = 1 } = {}) => ({
        url: '',
        params: {
            api_key: SPACE_IMAGES_API_KEY,
            count,
            thumbs: true,
        },
      }),
    }),
  }),
});

export const { useGetSpaceImagesQuery } = spaceImagesApi;
