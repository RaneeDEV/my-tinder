import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore"

firebase.initializeApp({
  apiKey: "AIzaSyDozokJ1L-QfRiyiVy0fdee_H_JzKfttAM",
  authDomain: "mytindertest1.firebaseapp.com",
  projectId: "mytindertest1",
  storageBucket: "mytindertest1.appspot.com",
  messagingSenderId: "160646102335",
  appId: "1:160646102335:web:4586259a12735b1956278a"
});

const db = firebase.firestore();

export { firebase, db };