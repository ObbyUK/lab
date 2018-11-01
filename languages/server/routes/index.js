const submitLead = require('./submitLead');
const submitPaidSubscription = require('./submitPaidSubscription');

module.exports = app => {
  submitLead(app);
  submitPaidSubscription(app);
};