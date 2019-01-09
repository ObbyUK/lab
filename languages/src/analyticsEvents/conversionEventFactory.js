export default ({ state, payload }) => {
  console.log(payload);
  return {
    type: 'track',
    payload: [
      'Order Completed',
      {
        order_id: payload.charge.id,
        affiliation: 'Obby',
        total: payload.course.base/100,
        revenue: payload.course.final/100,
        discount: payload.course.discount/100,
        currency: 'GBP',
        products: [
          {
            product_id: payload.product.id,
            name: payload.product.name,
            price: payload.course.final/100,
            quantity: 1,
            category: 'Learning',
            url: window.location.href
          }
        ]
      },
    ]
  }
};
