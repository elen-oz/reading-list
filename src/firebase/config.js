import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBJYgcDYFjqBHSnivzONqHhvXlNpvzKdeM',
  authDomain: 'readinglistsite-f3340.firebaseapp.com',
  projectId: 'readinglistsite-f3340',
  storageBucket: 'readinglistsite-f3340.appspot.com',
  messagingSenderId: '982207433740',
  appId: '1:982207433740:web:ed60cfb900a5108c307229',
};

// init firebase
initializeApp(firebaseConfig);

// init firestore
const db = getFirestore();

// init firebase auth
const auth = getAuth();

export { db, auth };
