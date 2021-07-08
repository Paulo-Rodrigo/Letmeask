import firebase from "firebase/app";

import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyB3mNM6FppyJyFXr40HHdL2Y2xRI3Gnzi4",
  authDomain: "letmeask-e105b.firebaseapp.com",
  databaseURL: "https://letmeask-e105b-default-rtdb.firebaseio.com",
  projectId: "letmeask-e105b",
  storageBucket: "letmeask-e105b.appspot.com",
  messagingSenderId: "334627785838",
  appId: "1:334627785838:web:e2be8dfe3afacb8e86aa7f"

 // apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
 // authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
 // databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
 // projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
 // storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
 // messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
 // appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();
const database = firebase.database();

export { firebase, auth, database };
