import {
	createUserWithEmailAndPassword,
	getAuth,
	onAuthStateChanged
} from 'firebase/auth'
import { set_user } from '../../slices/auth'
import { root_store } from '../../store'
import { firebase } from '../firebase'
const auth = getAuth(firebase)
async function login() {}
async function create_user(email: string, password:string) {
	return await createUserWithEmailAndPassword(auth, email, password)
}
async function logout() {
	auth.signOut()
}
onAuthStateChanged(auth, (user) => {
	console.log('Auth user Changed')
	if(user?.email && user?.uid) {
		root_store.dispatch(set_user({
			id: user.uid,
			email: user.email
		}))
	}
})

export { login, create_user, logout }
