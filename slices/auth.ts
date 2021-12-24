import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { User } from '../types/auth'
const initial_state: { user: User } = { user: null }
const auth_slice = createSlice({
	name: 'auth',
	initialState: initial_state,
	reducers: {
		set_user: (state, action: PayloadAction<User>) => {
			console.log('user about to set')
			state.user = action.payload
			console.log('user set')
		},
	},
})

export const { set_user } = auth_slice.actions
export default auth_slice.reducer
