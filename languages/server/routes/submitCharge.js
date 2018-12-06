var { propEq, merge } = require("ramda");
var stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const productName = "Obby Language Course";
const planNickname = "Language Course Plan";

const RequestBoy__Metadata = (body) => ({
  date: body.date,
  address: body.address,
  skillLevel: body.skillLevel,
  language: body.language,
  region: body.region,
  startTime: body.startTime,
  endTime: body.endTime,
  region: body.region,
  name: body.name,
  lastName: body.lastName,
  email: body.email,
  phoneNumber: body.phoneNumber,
})

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

module.exports = app => 
  app.post('/submit-charge', async (req, res) => {
    try {
      var product = await getProduct();
      var plan = await getProductPlan(product.id);
      var metadata = RequestBoy__Metadata(req.body);
      var charge = await stripe.charges.create({
        amount: req.body.charge,
        currency: 'gbp',
        source: req.body.token.id,
        receipt_email: req.body.email,
        description: `Obby language course: ${req.body.language}, ${req.body.skillLevel} starts on ${req.body.date} at ${req.body.address}.`,
        metadata,
      });
      res
        .status(200)
        .json({ 
          product, 
          plan, 
          charge, 
          customer: {},
          course: merge(
            {
              base: req.body.baseCharge,
              final: req.body.charge,
              discount: req.body.baseCharge-req.body.charge,
            },
            metadata
          ),
        });
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