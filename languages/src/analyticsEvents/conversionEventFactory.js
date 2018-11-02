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
        date: state.date
      },
    ]
  }
};
