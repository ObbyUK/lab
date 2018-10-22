import UserId__UserId from './../lib/UserId__UserId';

export default ({ state }) => {
  return {
    type: 'track',
    payload: {
      userId: UserId__UserId(),
      event: 'Conversion',
      properties: {
        selectedLanguage: state.selectedLanguage,
        skillLevel: state.skillLevel,
        time: state.time,
        locations: state.locations,
        name: state.name,
        email: state.email,
      },
    }
  }
};
