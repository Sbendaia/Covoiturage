import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "./store/reducers";
import thunk from "redux-thunk";
import { getFirestore, reduxFirestore } from "redux-firestore";
import { getFirebase } from "react-redux-firebase";

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),

    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
export default store;
