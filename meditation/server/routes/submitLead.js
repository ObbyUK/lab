const emailPromise = require('./../lib/emailPromise');

module.exports = app => {
  app.post('/submit-lead', (req, res) => {

    emailPromise({
      name: 'Meditation Test App',
			from: 'meditation-test-app@obby.co.uk',
			to: process.env.LEAD_GENERATION_EMAIL,
			subject: 'Lead Generated from the Meditation Test',
			text: JSON.stringify(req.body),
		})
      .then((error) => {
        if (error) {
          throw new Error(error);
        }
        res.send('OK');
      });
  });
};