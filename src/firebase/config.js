import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyABmJ4obFGFCDZbXDAVKBZi1AUKqjerz3o",
  authDomain: "mobile-eca7c.firebaseapp.com",
  projectId: "mobile-eca7c",
  storageBucket: "mobile-eca7c.firebasestorage.app",
  messagingSenderId: "373723243283",
  appId: "1:373723243283:web:43f6dc98797664d82870e6",
  databaseURL: "https://mobile-eca7c-default-rtdb.firebaseio.com/"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

export { auth, db };
