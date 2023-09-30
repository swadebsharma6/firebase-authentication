// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgCmfFsKplcNneQamamTSNkkZ-kwaY5Uk",
  authDomain: "auth-milon-intregration.firebaseapp.com",
  projectId: "auth-milon-intregration",
  storageBucket: "auth-milon-intregration.appspot.com",
  messagingSenderId: "206588760762",
  appId: "1:206588760762:web:b7ea0a0162f67de67d6883"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;