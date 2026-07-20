
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAhZw7f8IdvTw_zP0hx62hE7XJJZ6a5WzU",
    authDomain: "mokemate-e8104.firebaseapp.com",
    projectId: "mokemate-e8104",
    storageBucket: "mokemate-e8104.firebasestorage.app",
    messagingSenderId: "328088904599",
    appId: "1:328088904599:web:683174994a046af32e5ad2",
    measurementId: "G-SW5PZ987MQ"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);