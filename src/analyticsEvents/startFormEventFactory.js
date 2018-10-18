export default ({ state }) => {
  return {
    type: 'track',
    payload: {
      userId: 'guest',
      event: 'Start Form',
      properties: {
        selectedLanguage: state.selectedLanguage
      },
    }
  }
};
