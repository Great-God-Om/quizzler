import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StyleSheet } from 'react-native'
import { Provider } from 'react-redux'
import Navigator from './components/navigation/navigator'
import { root_store } from './store'
import { RootStackParamList } from './types/navigation'

export default function App() {
	const Stack = createNativeStackNavigator<RootStackParamList>()
	return (
		<Provider store={root_store}>
			<Navigator />
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
