import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyCFBErUn0KdMDpzbHNWX6pf7mY693fssSA",
    authDomain: "financeapp-e89d5.firebaseapp.com",
    projectId: "financeapp-e89d5",
    storageBucket: "financeapp-e89d5.appspot.com",
    messagingSenderId: "770817232509",
    appId: "1:770817232509:web:3b5b9b0d6807952144eb14"
  };

  //init firebase

  firebase.initializeApp(firebaseConfig)

  const projectFirestore = firebase.firestore();

  const projectAuth = firebase.auth();

  export {projectFirestore, projectAuth};
