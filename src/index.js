import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import store from "./store";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore"; // <- needed if using firestore
import "firebase/database";

import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import { createFirestoreInstance } from "redux-firestore"; //
const rrfConfig = {
  userProfile: "users"
  // useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
};
const config = {
  apiKey: "AIzaSyBONryiBGJ835Lm3u5b_jCTJ4K32z6xdVk",
  authDomain: "carpoolingproject-b98da.firebaseapp.com",
  databaseURL: "https://carpoolingproject-b98da.firebaseio.com",
  projectId: "carpoolingproject-b98da",
  storageBucket: "carpoolingproject-b98da.appspot.com",
  messagingSenderId: "938083555751",
  appId: "1:938083555751:web:8d9cadb132f4496d"
};
firebase.initializeApp(config);
firebase.firestore();
const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
};
ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <App />
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
