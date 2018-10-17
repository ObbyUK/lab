const nodemailer = require('nodemailer');

module.exports = app => {
  app.post('/submit-lead', (req, res) => {

    nodemailer.createTestAccount((err, account) => {

      let transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: account.user,
          pass: account.pass
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
            res.error(error);
          }
          
          console.log('Message sent: %s', info.messageId);
          console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

          res.send('OK');
        }
      );

    });
  });
};