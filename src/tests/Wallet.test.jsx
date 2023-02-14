import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import WalletForm from '../components/WalletForm';
import INITIAL_STATE from './helpers/globalState';
import Wallet from '../pages/Wallet';

describe('Testando a página de formulário Wallet Forms', () => {
  // it('testando wallet', () => {
  //   renderWithRouterAndRedux(<WalletForm />);
  // });

  it('Deve renderizar os componentes corretamente', () => {
    renderWithRouterAndRedux(<WalletForm />);
    const valueImp = screen.getByTestId('value-input');
    expect(valueImp).toBeInTheDocument();

    const currencyImp = screen.getByTestId('currency-input');
    expect(currencyImp).toBeInTheDocument();

    const methodImp = screen.getByTestId('method-input');
    expect(methodImp).toBeInTheDocument();

    const valueImput = screen.getByTestId('description-input');
    expect(valueImput).toBeInTheDocument();

    const valueInput = screen.getByTestId('value-input');
    valueInput.value = '100';
    expect(valueInput.value).toBe('100');

    // const currencyInput = screen.getByTestId('currency-input');
    // currencyInput.value = 'USD';
    // expect(currencyInput.value).toBe('USD');

    const methodInput = screen.getByTestId('method-input');
    methodInput.value = 'Cartão de débito';
    expect(methodInput.value).toBe('Cartão de débito');

    const tagInput = screen.getByTestId('tag-input');
    tagInput.value = 'Trabalho';
    expect(tagInput.value).toBe('Trabalho');

    const descriptionInput = screen.getByTestId('description-input');
    descriptionInput.value = 'Almoço';
    expect(descriptionInput.value).toBe('Almoço');
  });
  it('', () => {
    renderWithRouterAndRedux(<Wallet />, { initialState: INITIAL_STATE });
    const deleteBtn = screen.getByTestId('delete-btn');
    expect(deleteBtn).toBeInTheDocument();
    userEvent.click(deleteBtn);
  });
});
