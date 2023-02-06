import { CHOOSE_COIN } from '../actions';

const INITIAL_STATE = {
  wallet: {
    currencies: [],
    expenses: [],
    editor: false,
    idToEdit: 0,

  },
};

const walletToFill = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case CHOOSE_COIN:
    return {
      ...state,
      currencies: Object.keys(action.payload).filter((coin) => coin !== 'USDT'),
    };
  default:
    return state;
  }
};
export default walletToFill;
