// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyAS4DIsUkk1OJCGBteEEXSmdapyfrHTj2s',
	authDomain: 'quizzler-377db.firebaseapp.com',
	projectId: 'quizzler-377db',
	storageBucket: 'quizzler-377db.appspot.com',
	messagingSenderId: '792463771352',
	appId: '1:792463771352:web:9b66488a7b904b81cf79ad',
	measurementId: 'G-49ZGM92VL7',
}

// Initialize Firebase
export const firebase = initializeApp(firebaseConfig)
// const analytics = getAnalytics(app);
