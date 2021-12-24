import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StyleSheet } from 'react-native'
import { Provider } from 'react-redux'
import register from './pages/auth/register'
import { root_store } from './store'

export default function App() {
	const Stack = createNativeStackNavigator()
	return (
		<Provider store={root_store}>
			<NavigationContainer>
				<Stack.Navigator initialRouteName='Home'>
					<Stack.Screen name='Home' component={register} />
				</Stack.Navigator>
			</NavigationContainer>
		</Provider>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
})
