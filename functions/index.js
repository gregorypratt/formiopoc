const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: 'https://rental-agreement-poc.firebaseio.com',
});

const store = admin.firestore();
store.settings({ timestampsInSnapshots: true });

const rentalAgreementsApi = require('./rentalAgreements')(store);

exports.rentalAgreements = functions.https.onRequest(rentalAgreementsApi);
