import firebase from 'firebase/app';
import 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyC7zXVIFTdY24dsQP39tsPA2o3kCTqDUnc",
    authDomain: "cooking-ninja-site-dfd95.firebaseapp.com",
    projectId: "cooking-ninja-site-dfd95",
    storageBucket: "cooking-ninja-site-dfd95.appspot.com",
    messagingSenderId: "965383598972",
    appId: "1:965383598972:web:107b8854b0475b91a42af9"
  };

  //initialize firebase
  firebase.initializeApp(firebaseConfig);

  // firesotre initialize
  const projectFirestore = firebase.firestore();

  export {projectFirestore}
