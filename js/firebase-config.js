import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "VOTRE_API_KEY",
    authDomain: "VOTRE_PROJET.firebaseapp.com",
    projectId: "VOTRE_PROJET",
    storageBucket: "VOTRE_PROJET.appspot.com",
    messagingSenderId: "VOTRE_MESSAGING_ID",
    appId: "VOTRE_APP_ID"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
