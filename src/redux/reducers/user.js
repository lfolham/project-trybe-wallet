const INITIAL_STATE = {
  user: {
    email: '',
  },
};

const userProfile = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case PERSONAL_FORM_SUBMIT:
    return { ...state, email: payload };
  default:
    return state;
  }
};

export default userProfile;
