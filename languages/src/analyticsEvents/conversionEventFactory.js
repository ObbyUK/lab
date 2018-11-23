export default ({ state, payload }) => {
  console.log(payload);
  return {
    type: 'track',
    payload: [
      'Order Completed',
      {
        order_id: payload.charge.id,
        affiliation: 'Obby',
        total: 200,
        revenue: 180,
        discount: 20,
        currency: 'GBP',
        products: [
          {
            product_id: payload.product.id,
            name: payload.product.name,
            price: 200,
            quantity: 1,
            category: 'Learning',
            url: window.location.href
          }
        ]
      },
    ]
  }
};
