import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBj-FAvJlXZ8SDcq5lAaUbsetIb8k-WsZ4",
  authDomain: "facebook-clone-12e1d.firebaseapp.com",
  projectId: "facebook-clone-12e1d",
  storageBucket: "facebook-clone-12e1d.appspot.com",
  messagingSenderId: "653074113523",
  appId: "1:653074113523:web:99d8a827d15d6ab52ea886"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
