
const admin = require("firebase-admin");

var serviceAccount = require("../firebase-admin-keys.json");

if (!admin.apps.length) {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount)
    });
}

export default admin.firestore();