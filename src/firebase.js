import * as firebase from "firebase";
import "firebase/storage"

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGID,
  appId: process.env.REACT_APP_FIREBASE_APPID,
};

const app = firebase.initializeApp(firebaseConfig);

const storage = firebase.storage()

export  {
  storage,app, firebase as default
} 