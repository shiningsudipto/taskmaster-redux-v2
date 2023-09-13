import { configureStore } from '@reduxjs/toolkit';
import tasksSlice from './features/tasks/tasksSlice';
import userSlice from './features/user/userSlice';
import baseAPI from './features/api/baseApi';
// import baseAPI from './features/apiTesting/baseAPI';   

const store = configureStore({
  reducer: {
    [baseAPI.reducerPath]: baseAPI.reducer,
    tasksSlice: tasksSlice,
    userSlice: userSlice,
    // API Testing
    // [baseAPI.reducerPath]: baseAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseAPI.middleware),
  // API Testing
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseAPI.middleware),
});

export default store;
