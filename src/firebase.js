import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAv3goo4FMy0f3Wh6p1C-uxTcEvlEfs3p4",
  authDomain: "twitter-cne.firebaseapp.com",
  projectId: "twitter-cne",
  storageBucket: "twitter-cne.appspot.com",
  messagingSenderId: "79433619276",
  appId: "1:79433619276:web:c0e56cc660e7ee8170a1e9",
  measurementId: "G-QLEHD3NJCE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

// export default db;
