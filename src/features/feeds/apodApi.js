import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import 'dotenv/config';

const SPACE_IMAGES_API_KEY = import.meta.env.VITE_SPACE_IMAGES_API_KEY;

export const spaceImagesApi = createApi({
  reducerPath: 'spaceImagesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.nasa.gov/planetary/apod',
  }),
  endpoints: (builder) => ({
    // getSpaceImages: builder.query({
    //   query: ({ count = 1 } = {}) => ({
    //     url: '',
    //     params: {
    //         api_key: SPACE_IMAGES_API_KEY,
    //         count,
    //         thumbs: true,
    //     },
    //   }),
    // }),
    getTodaysSpaceImage: builder.query({
      query: ({ date } ={}) => ({
        url: '',
        params: {
            api_key: SPACE_IMAGES_API_KEY,
            thumbs: true,
        }
      })
    }),
    getSpaceImagesByDates: builder.query({
      query: ({ start_date, end_date } = {}) => ({
        url: '',
        params: {
            api_key: SPACE_IMAGES_API_KEY,
            start_date,
            end_date,
            thumbs: true,
        },
      }),
    }),
  }),
});

export const { 
  useGetTodaysSpaceImageQuery, 
  // useGetSpaceImagesQuery, 
  useGetSpaceImagesByDatesQuery 
} = spaceImagesApi;
