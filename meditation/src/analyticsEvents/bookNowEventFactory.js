export default ({ state }) => {
  return {
    type: 'track',
    payload: [
      'Book Now',
      {
        date: state.date,
        locations: state.locations,
        chosenLocation: state.chosenLocation
      },
    ]
  }
};
