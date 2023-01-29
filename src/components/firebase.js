import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyB3BJ0k0JmpelB9vS5MjYU4P3b37dwvn8w",
    authDomain: "chat-app-398a6.firebaseapp.com",
    projectId: "chat-app-398a6",
    storageBucket: "chat-app-398a6.appspot.com",
    messagingSenderId: "908488922451",
    appId: "1:908488922451:web:7517932538b55919eefda6",
  })
  .auth();
