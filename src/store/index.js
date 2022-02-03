import { configureStore } from '@reduxjs/toolkit'
import UserReducer from './userSlice'
import authReducer from './authSlice';




const store = configureStore({
    reducer: { userSlice: UserReducer, authSlice: authReducer },
});

export default store