import { getFirebase } from "react-redux-firebase";

export const postARide = post => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const firebase = getFirebase();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;

    firestore
      .collection("posts")
      .add({
        ...post,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorId: authorId,
        GSM: profile.GSM,
        createdAt: new Date()
      })
      .then(() => {
        dispatch({ type: "POST_RIDE_SUCCESS" });
      })
      .catch(err => {
        dispatch({ type: "POST_RIDE_FAILED" }, err);
      });
  };
};
export const setCityName = ville => {
  return { type: "SET_CITY_NAME", ville };
};
export const addFavoris = post => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    // const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    firestore
      .collection("fav")
      .add({
        ...post,
        authorFirstName: "siham",
        authorLastName: "bendaia",
        authorId: authorId,
        createdAt: new Date()
      })
      .then(() => {
        dispatch({ type: "FAVORIS_SUCCESS" });
      })
      .catch(err => {
        dispatch({ type: "FAVORIS_FAILED" }, err);
      });
  };
};
export const contactUs = post => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();

    firestore
      .collection("messages")
      .add({
        ...post,
        sentAt: new Date()
      })
      .then(() => {
        dispatch({ type: "CONTACT_US_SUCCESS" });
      })
      .catch(err => {
        dispatch({ type: "CONTACT_US_FAILED" }, err);
      });
  };
};
