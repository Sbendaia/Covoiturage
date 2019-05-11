import { combineReducers } from "redux";
import authReducer from "./authReducer.js";
import { firebaseReducer, firestoreReducer } from "react-redux-firebase";
import projectReducer from "./projectReducer";

export default combineReducers({
  auth: authReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  project: projectReducer
});
