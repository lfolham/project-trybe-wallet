import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import App from '../App';

describe('Testando a página de Login', () => {
  it('testa pagina login/password', () => {
    renderWithRouterAndRedux(<App />);

    const imputEmail = screen.getByTestId('email-input');
    expect(imputEmail).toBeInTheDocument();
    const imputPassword = screen.getByTestId('password-input');
    expect(imputPassword).toBeInTheDocument();
    const btnEntrar = screen.getByRole('button', { name: /entrar/i });
    expect(btnEntrar).toBeInTheDocument();
    expect(btnEntrar).toBeDisabled();
    userEvent.type(imputEmail, 'lucas@lucas.com');
    userEvent.type(imputPassword, '123456');
    expect(btnEntrar).toBeEnabled();
    userEvent.click(btnEntrar);
  });
});
