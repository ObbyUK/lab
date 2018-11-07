export default ({ state }) => {
  return {
    type: 'track',
    payload: [
      'Order Completed',
      {
        selectedLanguage: state.selectedLanguage,
        skillLevel: state.skillLevel,
        time: state.time,
        locations: state.locations,
        date: state.date
      },
    ]
  }
};
