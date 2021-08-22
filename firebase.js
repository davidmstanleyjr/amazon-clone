// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyAyr6sWbNKtxiXRDLJn5PrY-Op8EpJiU1c",
	authDomain: "clone-454d7.firebaseapp.com",
	projectId: "clone-454d7",
	storageBucket: "clone-454d7.appspot.com",
	messagingSenderId: "1074375789223",
	appId: "1:1074375789223:web:3c0174e48dbf6fc6dbe982",
	// measurementId: "G-NTM8FJPN3Z",
};

const app = !firebase.apps.length
	? firebase.initializeApp(firebaseConfig)
	: firebase.app();

const db = app.firestore();

export default d;
