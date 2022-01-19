import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAmPsvYx-5YctznrVrZs73ZWDONzTKwB68",
  authDomain: "pic-gallery-74993.firebaseapp.com",
  projectId: "pic-gallery-74993",
  storageBucket: "pic-gallery-74993.appspot.com",
  messagingSenderId: "405663430071",
  appId: "1:405663430071:web:ac2d9990922e17ef68e432",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
