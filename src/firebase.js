import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyABE6g9AkZiv6K-CGQLQTlqGwfdnVGQckU",
  authDomain: "instagram-clone15.firebaseapp.com",
  databaseURL: "https://instagram-clone15.firebaseio.com",
  projectId: "instagram-clone15",
  storageBucket: "instagram-clone15.appspot.com",
  messagingSenderId: "941098298715",
  appId: "1:941098298715:web:5ebb15cf02e13387953e7e",
  measurementId: "G-QM6R47K307"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
