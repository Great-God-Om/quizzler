import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import Login from '../../pages/auth/login'
import Register from '../../pages/auth/register'
import Home from '../../pages/home'
import Profile from '../../pages/user/profile'
import UserQuizzes from '../../pages/user/user_quizzes'
import { useAppSelector } from '../../store'
import { User } from '../../types/auth'
import { RootDrawerParamList } from '../../types/navigation'

export default function Navigator() {
	const user: User = useAppSelector((state) => state.user.user)
	const Drawer = createDrawerNavigator<RootDrawerParamList>()
	return (
		<NavigationContainer>
			<Drawer.Navigator
				initialRouteName='Home'
				screenOptions={{
					headerStyle: {},
				}}
			>
				{user ? (
					<>
						<Drawer.Screen name='Home' component={Home} />
						<Drawer.Screen name='Profile' component={Profile} />
						<Drawer.Screen
							name='UserQuizzes'
							component={UserQuizzes}
							options={{
								title: 'My Quizzes',
							}}
						/>
					</>
				) : (
					<>
						<Drawer.Screen name='Login' component={Login} />
						<Drawer.Screen name='Register' component={Register} />
					</>
				)}
			</Drawer.Navigator>
		</NavigationContainer>
	)
}
