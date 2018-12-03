export default ({ state }) => {
  return {
    type: 'track',
    payload: [
      'Choose Date',
      {
        selectedLanguage: state.selectedLanguage,
        skillLevel: state.skillLevel,
        time: state.time,
        locations: state.locations,
        date: state.date,
      },
    ]
  }
};
