import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

const config = {
    apiKey: "AIzaSyBUw2v6CJCO8jUVl8zFaZ-7sidzejpCEFs",
    authDomain: "zay-clothing.firebaseapp.com",
    databaseURL: "https://zay-clothing.firebaseio.com",
    projectId: "zay-clothing",
    storageBucket: "zay-clothing.appspot.com",
    messagingSenderId: "875068309327",
    appId: "1:875068309327:web:0e53aed44a6d4e447e0f3a",
    measurementId: "G-YF2DJL8WZJ"
  };

firebase.initializeApp(config);

//Used for authentication
export const auth = firebase.auth();

export const fireStore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: "select_account"})
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
