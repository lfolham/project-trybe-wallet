import { CHOOSE_COIN, ADD_EXPENSE, DELET_EXPENSE } from '../actions';

const INITIAL_STATE = {

  currencies: [],
  expenses: [],
  editor: false, // true
  idToEdit: 0,

};

const walletToFill = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case CHOOSE_COIN:
    return {
      ...state,
      currencies: Object.keys(action.payload).filter((coin) => coin !== 'USDT'),
    };
  case ADD_EXPENSE:
    console.log(action.payload);
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };
  case DELET_EXPENSE:
    return {
      ...state,
      expenses: action.expenses,
    };

    // expense edit - elemento que está sendo editado
  default:
    return state;
  }
};

export default walletToFill;
