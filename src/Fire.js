import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA6X8mjaJJOqTfiC3YpMEzyYqY5D1oISek",
  authDomain: "project-x-e8f62.firebaseapp.com",
  projectId: "project-x-e8f62",
  storageBucket: "project-x-e8f62.appspot.com",
  messagingSenderId: "583800232269",
  appId: "1:583800232269:web:f90a04c7879cd8f5dcbf04",
};

const fire = firebase.initializeApp(firebaseConfig);
export default fire;
