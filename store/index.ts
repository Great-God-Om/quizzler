import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import user_reducer from '../slices/auth'
export const root_store = configureStore({
	reducer: {
		user: user_reducer,
	},
})
export type RootState = ReturnType<typeof root_store.getState>
export type AppDispatch = typeof root_store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector