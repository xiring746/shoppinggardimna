import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
                apiKey: "AIzaSyAThXohKPUpuz5slPwnGHO_ARNi99q-Y34",
                authDomain: "shopping-gardimna.firebaseapp.com",
                projectId: "shopping-gardimna",
                storageBucket: "shopping-gardimna.appspot.com",
                messagingSenderId: "1094624647427",
                appId: "1:1094624647427:web:e13330a8a7d145f04a7136",
                measurementId: "G-M4JJMM43GD"
  }

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;