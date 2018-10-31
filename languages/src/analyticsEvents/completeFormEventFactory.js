export default ({ state }) => {
  return {
    type: 'track',
    payload: [
      'Complete Form',
      {
        selectedLanguage: state.selectedLanguage,
        skillLevel: state.skillLevel,
        time: state.time,
        locations: state.locations,
      },
    ]
  }
};
