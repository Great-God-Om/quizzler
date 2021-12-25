import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Login from '../../pages/auth/login'
import Register from '../../pages/auth/register'
import Home from '../../pages/home'
import { useAppSelector } from '../../store'

export default function Navigator() {
	const user = useAppSelector((state) => state.user)
	const Stack = createNativeStackNavigator()
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName='Home'>
				{user ? (
				<>
					<Stack.Screen name='Home' component={Home} />
				</>
				) : (
				<>
					<Stack.Screen name='Login' component={Login} />
					<Stack.Screen name='Register' component={Register} />
				</>
				)}
			</Stack.Navigator>
		</NavigationContainer>
	)
}
