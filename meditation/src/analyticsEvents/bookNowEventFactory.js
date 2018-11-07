export default ({ state }) => {
  return {
    type: 'track',
    payload: [
      'Book Now',
      {
        date: state.date
      },
    ]
  }
};
