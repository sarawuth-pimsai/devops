const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();
const api = functions
  .region("asia-southeast1")
  .runWith({})
  .https.onRequest(async (req, res) => {
    try {
      res.json({ hello: "love" });
    } catch (err) {
      res.json({ message: err.message });
    }
  });

module.exports = { api };
