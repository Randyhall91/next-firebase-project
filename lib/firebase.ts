import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'

const firebaseConfig = {
  apiKey: "AIzaSyAeP_UnSXR4ip1Gqi3A4BEa_wG5dlHhIDE",
  authDomain: "next-tutorial-d3728.firebaseapp.com",
  projectId: "next-tutorial-d3728",
  storageBucket: "next-tutorial-d3728.appspot.com",
  messagingSenderId: "841657537043",
  appId: "1:841657537043:web:2a6d9bfcb4af34d6dde5e6",
  measurementId: "G-WRY6YZM7KR"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}


export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();