import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth';

// configure firebase utility for google authentication
const config = {
    apiKey: "AIzaSyBKatNpfQXRr13U08nZK26I7_3RQIyEaWc",
    authDomain: "crwn-db-f1d77.firebaseapp.com",
    databaseURL: "https://crwn-db-f1d77.firebaseio.com",
    projectId: "crwn-db-f1d77",
    storageBucket: "crwn-db-f1d77.appspot.com",
    messagingSenderId: "378901336555",
    appId: "1:378901336555:web:7352b4990730259fd409ae",
    measurementId: "G-M0BTER53EZ"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// set up google authentication utility
const provider = new firebase.auth.GoogleAuthProvider();

// always trigger google pop up whenever using google auth provider for sign in
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;