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

module.exports = app => 
  app.post('/submit-paid-subscription', async (req, res) => {
    try {

      var product = await getProduct();
      var plan = await getProductPlan(product.id);
      
      res.status(200).json({ product, plan });

    } catch (error) {

      res.status(500).json({
        status: 500,
        error: error.toString()
      });
    }
  });