import { initializeApp } from "firebase/app";
// import { initializeApp } from 'firebase-admin/app';
// import { initializeAuth, getReactNativePersistence  } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";


export const firebaseApp = initializeApp({
    // enter your firebase project details
    apiKey: "AIzaSyAAqFHkCyeC2sKMMMBLFQYvw2u0vBJIEZs",
    authDomain: "ridesmash.com",
    projectId: "smashride-ee7a7",
    storageBucket: "smashride-ee7a7.appspot.com",
    messagingSenderId: "425620499927",
    appId: "1:425620499927:web:3a5c333265b54b38f12f92",
    measurementId: "G-4GL1H1TDQF"

  
  
  });

    export const auth = getAuth(firebaseApp)
  
//   export const auth = initializeAuth(firebaseApp, {
//     persistence: getReactNativePersistence(AsyncStorage),
//   });
  
  // const app = initializeApp(firebaseConfig);
  export const db = getFirestore(firebaseApp);
  
  export const storage = getStorage(firebaseApp);