import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage'




const firebaseConfig = {
    apiKey: "AIzaSyCVWXDn7zOWVg_vuyd8owS_C_2ZLsv73zo",
    authDomain: "projectmanagement-c19c5.firebaseapp.com",
    projectId: "projectmanagement-c19c5",
    storageBucket: "projectmanagement-c19c5.appspot.com",
    messagingSenderId: "870127533927",
    appId: "1:870127533927:web:d6f720e97dfeaf219cf9c2"
  };


  //init firebase
  firebase.initializeApp(firebaseConfig);

  // init services
  const projectFirestore = firebase.firestore();

  //auth
  const projectAuth = firebase.auth();

  //timestamp
  const timestamp = firebase.firestore.Timestamp;

  //storage
  const projectStorage = firebase.storage();


  export {projectFirestore,projectAuth,projectStorage,timestamp}
