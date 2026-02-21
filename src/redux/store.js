import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice.js";
import { scienceNewsApi } from "../features/feeds/scienceNewsApi.js";
import { userApi } from "../features/user/userApi.js";
import { spaceNewsApi } from "../features/feeds/spaceNewsApi.js";
import { spaceImagesApi } from "../features/feeds/apodApi.js";
import { currentsApi } from "../features/feeds/currentsApi.js";

const store = configureStore({
  reducer: {
    auth: authReducer,
    [scienceNewsApi.reducerPath]: scienceNewsApi.reducer,
    [spaceNewsApi.reducerPath]: spaceNewsApi.reducer,
    [spaceImagesApi.reducerPath]: spaceImagesApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [currentsApi.reducerPath]: currentsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(scienceNewsApi.middleware)
      .concat(spaceNewsApi.middleware)
      .concat(spaceImagesApi.middleware)
      .concat(userApi.middleware)
      .concat(currentsApi.middleware),
});

export default store;
