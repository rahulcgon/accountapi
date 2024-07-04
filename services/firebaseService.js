const admin = require('firebase-admin');
const serviceAccount = require('../path/to/your/firebase-service-account.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

exports.verifyToken = (token) => {
  return admin.auth().verifyIdToken(token);
};
