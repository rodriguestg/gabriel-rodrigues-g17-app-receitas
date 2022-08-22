const INITIAL_STATE = {};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'LOGIN':
    return {
      email: action.value,
    };
  default:
    return state;
  }
};

export default userReducer;
