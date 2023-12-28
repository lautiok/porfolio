import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC-PQdqHhiCyEo4xf4zst6y6LsWaDaUptw",
  authDomain: "porfolio-84774.firebaseapp.com",
  projectId: "porfolio-84774",
  storageBucket: "porfolio-84774.appspot.com",
  messagingSenderId: "855507067199",
  appId: "1:855507067199:web:1367df59041198967a338a",
  measurementId: "G-S8C3M37322"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

