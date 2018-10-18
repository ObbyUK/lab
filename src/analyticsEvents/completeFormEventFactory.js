export default ({ state }) => {
  return {
    type: 'track',
    payload: {
      userId: 'guest',
      event: 'Complete Form',
      properties: {
        selectedLanguage: state.selectedLanguage,
        skillLevel: state.skillLevel,
        time: state.time,
        locations: state.locations,
      },
    }
  }
};
