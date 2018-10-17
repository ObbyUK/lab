const nodemailer = require('nodemailer');

module.exports = app => {
  app.post('/submit-lead', (req, res) => {

    let transporter = nodemailer.createTransport({
      host: process.env.STMP_SERVICE,
      port: process.env.STMP_PORT,
      // only port 465
      secure: (process.env.STMP_PORT === 465), 
      auth: {
        user: process.env.STMP_ACCOUNT,
        pass: process.env.STMP_ACCOUNT
      }
    });

    let mailOptions = {
        from: 'Languages test app',
        to: 'ciki@obby.co.uk',
        subject: 'Lead Generated from the Languages Test',
        text: JSON.stringify(req.body),
    };

    transporter.sendMail(
      mailOptions, 
      (error, info) => {
        if (error) {
          console.log(error);
          res.error(error);
        }
        
        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

        res.send('OK');
      }
    );

    // nodemailer.createTestAccount((err, account) => {

    // });
  });
};