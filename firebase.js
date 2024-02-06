import { initializeApp } from "firebase/app";
// import { initializeApp } from 'firebase-admin/app';
// import { initializeAuth, getReactNativePersistence  } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";


export const firebaseApp = initializeApp({
    // enter your firebase project details
    apiKey: REACT_APP_FIREBASE_API_KEY,
    authDomain: REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: REACT_APP_DATABASE_URL,
    projectId: REACT_APP_FIREBASE_PROJECT_ID ,
    storageBucket: REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: REACT_APP_FIREBASE_APP_ID,
    measurementId: REACT_APP_FIREBASE_MEASUREMENT_ID

  
  
  });

    export const auth = getAuth(firebaseApp)
  
//   export const auth = initializeAuth(firebaseApp, {
//     persistence: getReactNativePersistence(AsyncStorage),
//   });
  
  // const app = initializeApp(firebaseConfig);
  export const db = getFirestore(firebaseApp);
  
  export const storage = getStorage(firebaseApp);