import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbJa17HECHu4Q03H3wVf7-VcpPgRlQHVc",
  authDomain: "greennest-678e4.firebaseapp.com",
  projectId: "greennest-678e4",
  storageBucket: "greennest-678e4.firebasestorage.app",
  messagingSenderId: "274792479005",
  appId: "1:274792479005:web:28be10d54ceee5d41609f4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
