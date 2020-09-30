import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB89DTA89jfwO87Zp9nSyv853ip61AASA0",
  authDomain: "instagram1-clone.firebaseapp.com",
  databaseURL: "https://instagram1-clone.firebaseio.com",
  projectId: "instagram1-clone",
  storageBucket: "instagram1-clone.appspot.com",
  messagingSenderId: "622932907136",
  appId: "1:622932907136:web:b2bcb37f3e0a076c844265",
  measurementId: "G-3ZQ59HBGFH"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
