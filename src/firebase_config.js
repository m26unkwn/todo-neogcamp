import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD6SEN4ncNm0So9JQCOR_M6x1dfeIKulZ8",
  authDomain: "todo-app-54272.firebaseapp.com",
  projectId: "todo-app-54272",
  storageBucket: "todo-app-54272.appspot.com",
  messagingSenderId: "704067374474",
  appId: "1:704067374474:web:839225c694847403944c73",
  measurementId: "G-4CWXWRH579",
};
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };
