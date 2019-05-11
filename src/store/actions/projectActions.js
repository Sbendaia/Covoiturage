export const postARide = post => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();

    firestore
      .collection("posts")
      .add({
        ...post,
        authorFirstName: "Siham",
        authorLastName: "Bendaia",
        authorId: authorId,
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
