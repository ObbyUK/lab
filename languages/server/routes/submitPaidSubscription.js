var { propEq } = require("ramda");
var moment = require("moment");
var stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const productName = "Obby Language Course";
const planNickname = "Language Course Plan";

const getProduct = async () => {
  var products =  await stripe.products.list({
    type: "service"
  });
  var product =  products.data.find(propEq('name', productName));
  if (!product) {
    product = await stripe.products.create({
      name: productName,
      type: "service"
    });
  }
  return product;
}

const getProductPlan = async (productId) => {
  var plans =  await stripe.plans.list({
    product: productId
  });
  var plan =  plans.data.find(propEq('nickname', planNickname));
  if (!plan) {
    plan = await stripe.plans.create({
      currency: 'gbp',
      interval: 'week',
      product: productId,
      nickname: planNickname,
      amount: 2400,
    });
  }
  return plan;
}

const getCustomer = async (customerDetails) => {
  var customers = await stripe.customers.list({ email: customerDetails.email });
  if (customers.data.length > 0) {
    return customers.data[0];
  }
  return await stripe.customers.create({
    email: customerDetails.email,
    source: customerDetails.token.id,
    metadata: {
      date: customerDetails.date,
      address: customerDetails.address,
      skillLevel: customerDetails.skillLevel,
      language: customerDetails.language,
      region: customerDetails.region,
      startTime: customerDetails.startTime,
      endTime: customerDetails.endTime,
      region: customerDetails.region,
      name: customerDetails.name,
      lastName: customerDetails.lastName,
      email: customerDetails.email,
      phoneNumber: customerDetails.phoneNumber,
    }
  });
}

module.exports = app => 
  app.post('/submit-paid-subscription', async (req, res) => {
    try {
      var product = await getProduct();
      var plan = await getProductPlan(product.id);
      var customer = await getCustomer(req.body);
      var subscription = await stripe.subscriptions.create({
        customer: customer.id,
        items: [{plan: plan.id}],
        // has to be a unix timestamp 
        trial_end: moment(req.body.date, 'DD/MM/YYYY').add(2, 'd').unix()
      });
      res
        .status(200)
        .json({ product, plan, customer, subscription });
    } catch (error) {
      res
        .status(500)
        .json({
          status: 500,
          message: error.toString(),
          type: "server_error"
        });
    }
  });