import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/database";

var config = {
  apiKey: "AIzaSyBONryiBGJ835Lm3u5b_jCTJ4K32z6xdVk",
  authDomain: "carpoolingproject-b98da.firebaseapp.com",
  databaseURL: "https://carpoolingproject-b98da.firebaseio.com",
  projectId: "carpoolingproject-b98da",
  storageBucket: "carpoolingproject-b98da.appspot.com",
  messagingSenderId: "938083555751",
  appId: "1:938083555751:web:8d9cadb132f4496d"
};
// Initialize Firebase
firebase.initializeApp(config);

export default firebase;
