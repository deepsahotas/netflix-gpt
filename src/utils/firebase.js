// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: 'netflix-gpt-120986.firebaseapp.com',
  projectId: 'netflix-gpt-120986',
  storageBucket: 'netflix-gpt-120986.appspot.com',
  messagingSenderId: '745048691675',
  appId: '1:745048691675:web:6d08d5692f844007558dfe',
  measurementId: 'G-PW1R6DYC6B',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
