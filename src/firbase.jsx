import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDe0AmOQiSu63vxzVDGg-pud_TZaNDjtBU",
  authDomain: "manor-pharmacy.firebaseapp.com",
  projectId: "manor-pharmacy",
  storageBucket: "manor-pharmacy.firebasestorage.app",
  messagingSenderId: "850263799728",
  appId: "1:850263799728:web:3b5e0a7e69eccbba1a4875"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);