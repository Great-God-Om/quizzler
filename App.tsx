import { StyleSheet } from 'react-native';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import Navigator from './components/navigation/navigator';
import { root_store } from './store';


export default function App() {
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
