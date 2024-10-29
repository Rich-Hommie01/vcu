import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './slices/loginSlice';
import registrationReducer from './slices/registrationSlice';

const store = configureStore({
  reducer: {
    auth: loginReducer,
    registration: registrationReducer,
  },
});

export default store;
