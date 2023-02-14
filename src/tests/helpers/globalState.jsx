import mockData from './mockData';

const INITIAL_STATE = {
  user: {
    email: 'lucas@lucas.com',
  },
  wallet: {
    currencies: [
      'USD',
      'CAD',
      'GBP',
      'ARS',
      'BTC',
      'LTC',
      'EUR',
      'JPY',
      'CHF',
      'AUD',
      'CNY',
      'ILS',
      'ETH',
      'XRP',
      'DOGE',
    ],
    expenses: [
      {
        id: 0,
        value: '80',
        currency: 'USD',
        method: 'Dinheiro',
        tag: 'Alimentação',
        description: 'Almoço com a família',
        exchangeRates: mockData,
      },
    ],
  },
};

export default INITIAL_STATE;
