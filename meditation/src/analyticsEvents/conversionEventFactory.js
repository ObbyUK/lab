import UserId__UserId from './../lib/UserId__UserId';

export default ({ state }) => {
  return {
    type: 'track',
    payload: [
      'Order Completed',
      {
        date: state.date,
      },
    ]
  }
};
