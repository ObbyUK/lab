import UserId__UserId from './../lib/UserId__UserId';

export default ({ state }) => {
  return {
    type: 'track',
    payload: [
      'Conversion',
      {
        chosenClass: state.chosenClass,
        name: state.name,
        email: state.email,
      },
    ]
  }
};
