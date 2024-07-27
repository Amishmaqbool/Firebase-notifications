// src/firebase.ts
import { initializeApp } from "firebase/app";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
import { getAuth, connectAuthEmulator } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBvj3XKjWAkO6cIuQFWqva6f-dJAi3zZdU",
    authDomain: "notifications-testing-d482f.firebaseapp.com",
    projectId: "notifications-testing-d482f",
    storageBucket: "notifications-testing-d482f.appspot.com",
    messagingSenderId: "475819953839",
    appId: "1:475819953839:web:f993513cc7d5ecf5ffce5a"
  };

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);

if (window.location.hostname === "localhost") {
  connectFirestoreEmulator(db, "localhost", 8081);
  connectAuthEmulator(auth, "http://localhost:9099");
}
