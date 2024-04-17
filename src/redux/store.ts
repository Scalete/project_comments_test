import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux';
import commentsSlice from './comments/slice';
import userSlice from './user/slice';

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export const store = configureStore({
  reducer: {
    comments: commentsSlice,
    user: userSlice,
  },
})