import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
 const firebaseConfig = {
    apiKey: "AIzaSyC94mbuKh1YOdHWSafjEog8iG0P3MCIMFE",
    authDomain: "e-ride4-5b654.firebaseapp.com",
    projectId: "e-ride4-5b654",
    storageBucket: "e-ride4-5b654.appspot.com",
    messagingSenderId: "74517061528",
    appId: "1:74517061528:web:b668bd33151bdb4e92d5ed"
  };




firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


