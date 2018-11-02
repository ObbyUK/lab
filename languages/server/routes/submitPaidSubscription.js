var { propEq } = require("ramda");
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
      amount: 2000,
    });
  }
  return plan;
}

const getCustomer = async (customerDetails) => {
  var customers = await stripe.customers.list({ email: customerDetails.token.email });
  if (customers.data.length > 0) {
    return customers.data[0];
  }
  return await stripe.customers.create({
    email: customerDetails.token.email,
    source: customerDetails.token.id,
    metadata: {
      language: customerDetails.language,
      name: customerDetails.name,
      skillLevel: customerDetails.skillLevel,
      locations: customerDetails.locations.join(', '),
      time: customerDetails.time.join(', '),
    }
  });
}

module.exports = app => 
  app.post('/submit-paid-subscription', async (req, res) => {
    try {
      var product = await getProduct();
      var plan = await getProductPlan(product.id);
      var customer = await getCustomer(req.body);
      var subscription = stripe.subscriptions.create({
        customer: customer.id,
        items: [{plan: plan.id}],
        // has to be a unix timestamp 
        trial_end: req.body.trialEnd
      });
      res.status(200).json({ product, plan, customer, subscription });
    } catch (error) {

      res.status(500).json({
        status: 500,
        error: error.toString()
      });
    }
  });