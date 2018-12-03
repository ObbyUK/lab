export default ({ state }) => {
  return {
    type: 'track',
    payload: [
      'Choose Language',
      { 
        selectedLanguage: state.selectedLanguage,
      },
    ]
  }
};
