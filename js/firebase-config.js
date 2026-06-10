import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyD_fJOPa6_dkRn69yexIsk3qsInDWs5GIk",
  authDomain: "coupedumonde2026-5046b.firebaseapp.com",
  projectId: "coupedumonde2026-5046b",
  storageBucket: "coupedumonde2026-5046b.firebasestorage.app",
  messagingSenderId: "1010691765876",
  appId: "1:1010691765876:web:8280c531ee6b0ecf098321"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
