const emailPromise = require('./../lib/emailPromise');

module.exports = app => {
  app.post('/submit-lead', (req, res) => {

    emailPromise({
      name: 'Lanages Test App',
			from: 'languages-test-app@obby.co.uk',
			to: process.env.LEAD_GENERATION_EMAIL,
			subject: 'Lead Generated from the Languages Test',
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