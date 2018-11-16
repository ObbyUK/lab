export default ({ state }) => {
  return {
    type: 'track',
    payload: [
      'Book Now',
      {
        selectedLanguage: state.selectedLanguage,
        skillLevel: state.skillLevel,
        time: state.time,
        locations: state.locations,
        date: state.date,
        chosenSession: state.chosenSession,
        chosenLocation: state.chosenLocation
      },
    ]
  }
};
