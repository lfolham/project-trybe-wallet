const INITIAL_STATE = {
  user: {
    email: '',
  },
};

const userProfile = (state = USER, action) => {
  switch (action.type) {
  case PERSONAL_FORM_SUBMIT:
    return { ...state, ...action.payload };
  default:
    return state;
  }
};

export default userProfile;
