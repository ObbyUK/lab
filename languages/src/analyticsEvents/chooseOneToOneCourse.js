export default ({ state }) => {
  return {
    type: 'track',
    payload: [
      'Choosing one to one course',
      {
        selectedLanguage: state.selectedLanguage,
      },
    ]
  }
};
