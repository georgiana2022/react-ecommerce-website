import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/analytics';


const firebaseConfig = {
  apiKey: "AIzaSyC7xqBAz-hqoXBr1EjrI8uwhlcqt0H3i4g",
  authDomain: "web-development-9dc40.firebaseapp.com",
  databaseURL: "https://web-development-9dc40-default-rtdb.firebaseio.com",
  projectId: "web-development-9dc40",
  storageBucket: "web-development-9dc40.firebasestorage.app",
  messagingSenderId: "319677071543",
  appId: "1:319677071543:web:fea695dca0ef3d8a4dcd32",
  measurementId: "G-NN98N409XP"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

const storage = firebase.storage();

export {
  storage, firebase as default
}