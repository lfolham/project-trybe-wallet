const INITIAL_STATE = {
  email: '',
};

const userProfile = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_EMAIL:
    return { ...state, email: payload };
  default:
    return state;
  }
};

export default userProfile;
