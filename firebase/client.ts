// Import the functions you need from the SDKs you need
import { initializeApp,getApp,getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD5kR1rBDjPNIpC2zxX-gOSNs1qDoFlFNE",
  authDomain: "interviewprep-7b7dc.firebaseapp.com",
  projectId: "interviewprep-7b7dc",
  storageBucket: "interviewprep-7b7dc.firebasestorage.app",
  messagingSenderId: "841610586636",
  appId: "1:841610586636:web:d8254295f7580245ee5c29",
  measurementId: "G-HGHDQ5SLEB"
};

// Initialize Firebase
const app = !getApps.length? initializeApp(firebaseConfig): getApp();

export const auth = getAuth(app);
export const db =  getFirestore(app);