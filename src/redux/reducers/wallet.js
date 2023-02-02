const INITIAL_STATE = {
  wallet: {
    currencies: [],
    expenses: [],
    editor: false,
    idToEdit: 0,

  },
};

const walletInfo = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case PERSONAL_FORM_SUBMIT:
    return { ...state, ...action.payload };
  default:
    return state;
  }
};

export default walletInfo;
