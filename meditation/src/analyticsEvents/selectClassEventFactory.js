export default ({ state }) => {
  return {
    type: 'track',
    payload: [
      'Meditation Select Class',
      { chosenClass: state.chosenClass }
    ]
  }
};
