const { Firestore } = require("@google-cloud/firestore");
const path = require('path');

async function storeData(id, data) {
  const pathKey = path.resolve("./serviceaccountkey.json");
  const db = new Firestore({
    projectId: "submissionmlgc-azharymunir",
    keyFilename: pathKey,
  });

  const predictCollection = db.collection("predictions");
  return predictCollection.doc(id).set(data);
}

module.exports = storeData;
