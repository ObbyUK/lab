export default ({ state }) => {
  return {
    type: 'track',
    payload: {
      userId: 'guest',
      event: 'Conversion',
      properties: {
        selectedLanguage: state.selectedLanguage,
        skillLevel: state.skillLevel,
        time: state.time,
        locations: state.locations,
        name: state.name,
        email: state.email,
      },
    }
  }
};
