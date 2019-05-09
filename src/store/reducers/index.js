import { combineReducers } from "redux";
import authReducer from "./authReducer.js";
import { firebaseReducer } from "react-redux-firebase";
import projectReducer from "./projectReducer";

export default combineReducers({
  auth: authReducer,
  firebase: firebaseReducer,
  project: projectReducer
});
