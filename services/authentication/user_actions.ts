import {
	createUserWithEmailAndPassword,
	getAuth,
	onAuthStateChanged,
	signInWithEmailAndPassword
} from 'firebase/auth'
import { doc, getFirestore, setDoc } from 'firebase/firestore'
import { set_user } from '../../slices/auth'
import { root_store } from '../../store'
import { firebase } from '../firebase'

const auth = getAuth(firebase)
const db = getFirestore(firebase)

async function login(email: string, password: string) {
	// TODO: Maybe add more sign in methods
	await signInWithEmailAndPassword(auth, email, password)
}
async function create_user(email: string, password: string) {
	const user = await createUserWithEmailAndPassword(auth, email, password)
	await setDoc(doc(db, 'Users', user.user.uid), {
		id: user.user.uid,
		email: user.user.email,
		name: user.user.displayName,
	})
}
async function logout() {
	auth.signOut()
}
onAuthStateChanged(auth, (user) => {
	if (user?.email && user?.uid) {
		root_store.dispatch(
			set_user({
				id: user.uid,
				email: user.email,
			})
		)
	}
})

export { login, create_user, logout }
