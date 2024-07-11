import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAZOruJHjJ46aDn7HtFrO2GDLgJ3mmZLM4",
  authDomain: "e-Pay.firebaseapp.com",
  projectId: "e-Pay",
  storageBucket: "e-Pay.appspot.com",
  messagingSenderId: "439327798386",
  appId: "1:439327798386:web:29d1e46de110e3d2b53eeb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;