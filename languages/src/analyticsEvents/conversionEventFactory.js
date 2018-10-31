export default ({ state }) => {
  return {
    type: 'track',
    payload: [
      'Conversion',
      {
        selectedLanguage: state.selectedLanguage,
        skillLevel: state.skillLevel,
        time: state.time,
        locations: state.locations,
        name: state.name,
        email: state.email,
      },
    ]
  }
};
