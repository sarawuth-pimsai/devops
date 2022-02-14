const functions = require("firebase-functions");
const admin = require("firebase-admin");
const config = require("./config");
admin.initializeApp();
const api = functions
  .region("asia-southeast1")
  .runWith({})
  .https.onRequest(async (req, res) => {
    try {
      res.json({
        hello: "Hello Sarawuth Pimsai",
        env: config,
      });
    } catch (err) {
      res.json({ message: err.message });
    }
  });

module.exports = { api };
