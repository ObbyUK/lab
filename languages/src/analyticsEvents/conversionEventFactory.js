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
        date: state.date,
        email: state.email,
        name: state.name,
        lastName: state.lastName,
        phoneNumber: state.phoneNumber,
        chosenSession: state.chosenSession,
        chosenLocation: state.chosenLocation
      },
    ]
  }
};
