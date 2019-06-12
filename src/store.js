import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "./store/reducers";
import thunk from "redux-thunk";
import { getFirestore, reduxFirestore } from "redux-firestore";
import { reactReduxFirebase, getFirebase } from "react-redux-firebase";
import config from "./config/config";
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reactReduxFirebase(config, {
      userProfile: "users",
      useFirestoreForProfile: true,
      attachAuthIsReady: true
    }),
    reduxFirestore(config),
    reactReduxFirebase(config),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
export default store;
