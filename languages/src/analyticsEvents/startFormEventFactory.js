export default ({ state }) => {
  return {
    type: 'track',
    payload: [
      'Start Form',
      { selectedLanguage: state.selectedLanguage },
    ]
  }
};
