import { initializeFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB54plz5rRYaBQMf6YjiStP2F_VK9ho2FM",
  authDomain: "testpr13-77fde.firebaseapp.com",
  projectId: "testpr13-77fde",
  storageBucket: "testpr13-77fde.appspot.com",
  messagingSenderId: "203400221717",
  appId: "1:203400221717:web:53d0ec1deb15736dee2a1c"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig)

const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});

export { db }
