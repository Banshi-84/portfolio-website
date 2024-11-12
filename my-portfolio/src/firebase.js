import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyA-sf52WbqJi-Kuzj2rxwp7_sSB82Th9nU",
  authDomain: "profile-2607a.firebaseapp.com",
  projectId: "profile-2607a",
  storageBucket: "profile-2607a.firebasestorage.app",
  messagingSenderId: "1073179043123",
  appId: "1:1073179043123:web:376925a08c1b8958090a46",
  measurementId: "G-SDZ3EJ0ZJK"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
