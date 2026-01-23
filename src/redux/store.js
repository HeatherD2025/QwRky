import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice.js";
import { scienceNewsApi } from "../features/news/scienceNewsApi.js";
import { userApi } from "../features/user/userApi.js";
import { spaceNewsApi } from "../features/news/spaceNewsApi.js";
import { spaceImagesApi } from "../features/news/apodApi.js";

const store = configureStore({
  reducer: {
    auth: authReducer,
    [scienceNewsApi.reducerPath]: scienceNewsApi.reducer,
    [spaceNewsApi.reducerPath]: spaceNewsApi.reducer,
    [spaceImagesApi.reducerPath]: spaceImagesApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(scienceNewsApi.middleware)
      .concat(spaceNewsApi.middleware)
      .concat(spaceImagesApi.middleware)
      .concat(userApi.middleware),
});

export default store;
