import { configureStore } from '@reduxjs/toolkit'
import user_reducer from '../slices/auth'
export const root_store = configureStore({
	reducer: {
		user: user_reducer,
	},
})
