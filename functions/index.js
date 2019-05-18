const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const admin = require("firebase-admin");
admin.initializeApp();
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
const db = admin.firestore();

const app = express();

app.use(cors({ origin: true }));

app.get("/", (req, res) => {
  db.collection("posts")
    .orderBy("createdAt")
    .get()
    .then(snapshot => {
      var arrayR = snapshot.docs.map(doc => {
        return doc.data();
      });

      return res.send(arrayR);
    })
    .catch(err => {
      console.log("Error getting documents", err);
    });
});
exports.postsAPI = functions.https.onRequest(app);
