import UserId__UserId from './../lib/UserId__UserId';

export default ({ state }) => {
  return {
    type: 'track',
    payload: {
      userId: UserId__UserId(),
      event: 'Start Form',
      properties: {
        selectedLanguage: state.selectedLanguage
      },
    }
  }
};
