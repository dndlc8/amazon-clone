import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB43D_i6sIONzIdOmvVbMW9PGlPaZrdKQU",
  authDomain: "challenge-db636.firebaseapp.com",
  databaseURL: "https://challenge-db636.firebaseio.com",
  projectId: "challenge-db636",
  storageBucket: "challenge-db636.appspot.com",
  messagingSenderId: "834688436593",
  appId: "1:834688436593:web:048e163ead5d3f51f74ed0",
  measurementId: "G-R5LDNN2TB5"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};