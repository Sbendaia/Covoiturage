import React from "react";

import firebase from "../../config/config";

const FetchDataExample = () => {
  return (
    <div>
      {" "}
      <button
        onClick={() => {
            const db = firebase.firestore();
        db.collection('posts')
        .where("villeD", "==", "agadir")
        .get().then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
                console.log(doc.id, ' => ', doc.data());
            });
        });

         db.collection("posts")
         .doc("78NAnkSC0Y9LZ4Qz2nRd")
            .get()
            .then(doc => {
                if(doc.exists){
                    console.log(doc.data())
                }
              console.log("donc", doc);
            });
          console.log("click me ");
        }}
      >
        Click me to fetch data
      </button>
    </div>
  );
};

export default FetchDataExample;
