import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBAc0A3QIcpyXDCcZDGLdtceNwYF-zShaI",
  authDomain: "homemaster-5ed94.firebaseapp.com",
  projectId: "homemaster-5ed94",
  storageBucket: "homemaster-5ed94.firebasestorage.app",
  messagingSenderId: "939334689492",
  appId: "1:939334689492:web:33edfab2e5ae7e737a9141",
  measurementId: "G-92Y5LPJCH6",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
