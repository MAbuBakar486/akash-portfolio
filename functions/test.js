// testWrite.js
const admin = require("firebase-admin");
admin.initializeApp({
  credential: admin.credential.applicationDefault(), // run in environment with gcloud auth OR use serviceAccount
});
const db = admin.firestore();

(async () => {
  const docRef = await db.collection("akashweb-contact").add({
    firstName: "AutoTest",
    lastName: "Trigger",
    email: "autotest@example.com",
    phone: "000",
    subject: "Function test",
    message: "This is a trigger test.",
    createdAt: admin.firestore.FieldValue.serverTimestamp()
  });
  console.log("Wrote doc:", docRef.id);
})();
