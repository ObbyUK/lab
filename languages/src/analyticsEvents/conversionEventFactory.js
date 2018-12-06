export default ({ state, payload }) => {
  console.log(payload);
  return {
    type: 'track',
    payload: [
      'Order Completed',
      {
        order_id: payload.charge.id,
        affiliation: 'Obby',
        total: payload.course.base,
        revenue: payload.course.final,
        discount: payload.course.discount,
        currency: 'GBP',
        products: [
          {
            product_id: payload.product.id,
            name: payload.product.name,
            price: payload.course.final,
            quantity: 1,
            category: 'Learning',
            url: window.location.href
          }
        ]
      },
    ]
  }
};
