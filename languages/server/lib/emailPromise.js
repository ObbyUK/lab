var mandrill = require('node-mandrill')(process.env.MANDRILL_API_KEY);
var Q = require('q');

module.exports = (send) => {

  var deferred = Q.defer();

	mandrill(
    '/messages/send', 
    {
      message: {
        "headers": {
          "Reply-To": send.from
        },
        "to": [
          {
            email: send.to
          }
        ],
        "from_name": send.name,
        "from_email": send.from,
        "subject": send.subject,
        "text": send.text,
      },
      async: true
	  },
    (error, response) => {
      if (error) {
        console.log(JSON.stringify(error));
        deferred.reject(new Error(error));
      }
      else {
        console.log('  Mandrill response: ' + JSON.stringify(response));
        deferred.resolve();
      }
	});

  return deferred.promise;

};