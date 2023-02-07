export const ADD_EMAIL = 'ADD_EMAIL';
export const ADD_VALUE = 'ADD_VALUE';
export const ADD_EXPENSE = 'ADD__EXPENSE';
export const CHOOSE_COIN = 'CHOOSE_COIN';

export const actionAddemail = (email) => ({
  type: ADD_EMAIL,
  email,
});

export const actionValue = (value) => ({
  type: ADD_VALUE,
  value,
});

export const actionAddExpense = (payload) => ({
  type: ADD_EXPENSE,
  payload,
});

export const chooseCoin = (coin) => ({
  type: CHOOSE_COIN,
  payload: coin,
});

// export function fetchWallet() {
//   return (dispatch) => {
//     fetch('https://economia.awesomeapi.com.br/json/all')
//       .then((response) => response.json())
//       .then((data) => dispatch(chooseCoin(data)));
//   };
// }

export const fetchWallet = () => async (dispatch) => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const data = await response.json();
  return dispatch(chooseCoin(data));
};

export const walletData = () => async (dispatch) => {
  const requestFetch = await fetchWallet();
  dispatch(chooseCoin(requestFetch));
};
