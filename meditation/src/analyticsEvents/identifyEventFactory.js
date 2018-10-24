import UserId__UserId from './../lib/UserId__UserId';

export default ({ type, state }) => {
  return {
    type: 'identify',
    payload: {
      userId: UserId__UserId(),
      traits: {
        name: state.name,
        email: state.email,
      }
		}
  }
};
