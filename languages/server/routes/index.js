const submitLead = require('./submitLead');
const submitPaidSubscription = require('./submitPaidSubscription');
const submitCharge = require('./submitCharge');

module.exports = app => {
  submitLead(app);
  submitPaidSubscription(app);
  submitCharge(app);
};