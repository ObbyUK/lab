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
      firstName: customerDetails.name,
      lastName: customerDetails.lastName,
      phoneNumber: customerDetails.phoneNumber,
      email: customerDetails.email,
      language: customerDetails.language,
      skillLevel: customerDetails.skillLevel,
      locations: customerDetails.locations.join(', '),
      time: customerDetails.time.join(', '),
      firstBookedDate: customerDetails.date,
    }
  });
}

module.exports = app => 
  app.post('/submit-charge', async (req, res) => {
    try {
      var product = await getProduct();
      var plan = await getProductPlan(product.id);
      var customer = await getCustomer(req.body);
      var charge = await stripe.charges.create({
        amount: 18000,
        currency: 'gbp',
        source: req.body.token.id,
        customer: customer.id,
        receipt_email: req.body.email,
        description: `Obby language course: ${req.body.language}, ${req.body.skillLevel} starts on ${req.body.date} at ${req.body.address}.`
      });
      res
        .status(200)
        .json({ product, plan, customer, charge });
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