import { configureStore, createSlice } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';

const initialState: { input: string } = { input: 'Default' };

export const slice = createSlice({
  name: 'remote',
  initialState,
  reducers: {
    setInput: (_, { payload: { input } }: { payload: { input: string } }) => ({
      input,
    }),
  },
});

export const store = configureStore({
  reducer: slice.reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
