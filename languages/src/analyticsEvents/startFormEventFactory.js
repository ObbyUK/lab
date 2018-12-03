export default ({ payload }) => {
  return {
    type: 'track',
    payload: [
      'Start Form',
      { 
        selectedLanguage: payload.language,
        type: payload.type,
        location: payload.location
      },
    ]
  }
};
