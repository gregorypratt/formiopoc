module.exports = (store) => {
  const app = require('express')();
  const bodyParser = require('body-parser');

  app.use(require('cors')({ origin: true }));
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  app.route('/rentalAgreements').post(async (req, res) => {
    try {
      await store.collection('agreements').doc().set(req.body.submission);
      return res.status(201);
    } catch (e) {
      console.error('/rentalAgreements', e);
      return res.status(500).send(e);
    }
  });

  return app;
};
