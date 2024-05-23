const { Firestore } = require("@google-cloud/firestore");

const pathKey = path.resolve("./serviceaccountkey.json");

async function storeData(id, data) {
  const db = new Firestore({
    projectId: "submissionmlgc-azharymunir",
    keyFilename: pathKey,
  });

  const predictCollection = db.collection("predictions");
  return predictCollection.doc(id).set(data);
}

module.exports = storeData;
