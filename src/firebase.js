// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCZZA5aSjf593nQuxsqi4L4Bb9tZiX8q8U",
  authDomain: "clone-77141.firebaseapp.com",
  databaseURL: "https://clone-77141.firebaseio.com",
  projectId: "clone-77141",
  storageBucket: "clone-77141.appspot.com",
  messagingSenderId: "388473997824",
  appId: "1:388473997824:web:178ea21a58491ebffca6e5",
  measurementId: "G-2SQEK1HMLG",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
