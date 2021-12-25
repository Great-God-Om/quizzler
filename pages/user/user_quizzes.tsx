import React from 'react'
import { Text, View } from 'react-native'
import { useAppSelector } from '../../store'
import { User } from '../../types/auth'

export default function UserQuizzes() {
	const user: User = useAppSelector(state=>state.user.user)
	return (
		<View>
			<Text>UserQuizzes</Text>
		</View>
	)
}
