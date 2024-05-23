const { Firestore } = require("@google-cloud/firestore");
const path = require("path");

async function getData() {
  const pathKey = path.resolve("./serviceaccountkey.json");
  const db = new Firestore({
    projectId: "submissionmlgc-azharymunir",
    keyFilename: pathKey,
  });

  const predictCollection = db.collection("predictions");
  const snapshot = await predictCollection.get();
  let data = [];

  snapshot.forEach((doc) => {
    data.push({ id: doc.id, history: doc.data() });
  });

  return data;
}

module.exports = getData;
