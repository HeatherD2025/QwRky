import { api } from '../api/baseApi';

export const spaceImagesApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getSpaceImages: builder.query({
      query: ({ count = 1 } = {}) => ({
        url: "nasa",
        params: {
          count,
          thumbs: true,
        },
      }),
    }),

    getTodaysSpaceImage: builder.query({
      query: ({ date } ={}) => ({
        url: "nasa",
        params: {
            date,
            thumbs: true,
        },
      }),
    }),

    getSpaceImagesByDates: builder.query({
      query: ({ start_date, end_date } = {}) => ({
        url: "nasa",
        params: {
            start_date,
            end_date,
        },
      }),
    }),
  }),
});

export const { 
  useGetTodaysSpaceImageQuery, 
  useGetSpaceImagesQuery, 
  useGetSpaceImagesByDatesQuery 
} = spaceImagesApi;
