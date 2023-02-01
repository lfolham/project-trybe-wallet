const WALLET = {
  currencies: [],
  expenses: [],
  editor: false,
  idToEdit: 0,
};

const walletInfo = (state = WALLET, action) => {
  switch (action.type) {
  case PERSONAL_FORM_SUBMIT:
    return { ...state, ...action.payload };
  default:
    return state;
  }
};

export default walletInfo;
