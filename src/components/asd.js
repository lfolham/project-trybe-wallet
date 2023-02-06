import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { walletData } from '../redux/actions';

class WalletForm extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(walletData());
  }

  render() {
    const { currencies } = this.state;
    console.log(currencies);

    return (
      <div>
        <h2>Wallet Form:</h2>
        <label htmlFor="valor">
          Valor :
          <input
            type="number"
            name="valor"
            id="valor"
            data-testid="value-input"
            placeholder="Digite o valor"
          />
        </label>
        <br />
        <label htmlFor="selectCurrency" className="labelInputSelect">
          Moeda
          <select name="selectCurrency" data-testid="currency-input">
            {currencies.map((currency) => (
              <option key={ currency } value={ currency }>{ currency }</option>
            ))}
          </select>
        </label>
        <br />
        <label htmlFor="metodo-pagamento">
          Método pagamento:
          <select data-testid="method-input">
            <option value="dinheiro">Dinheiro</option>
            <option value="credito">Cartão de crédito</option>
            <option value="debito">Cartão de débito</option>
          </select>
        </label>
        <br />
        <label htmlFor="descricao-imput">
          Categoria:
          <select name="tag-input" data-testid="tag-input" id="">
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
        <br />
        <label htmlFor="descricao">
          Descrição :
          <input
            type="text"
            name="descricao"
            id="descricao"
            data-testid="description-input"
          />
        </label>
      </div>
    );
  }
}
WalletForm.propTypes = {
  dispatch: PropTypes.func,
  moedas: PropTypes.array,
}.isRequired;
const mapStateToProps = (state) => ({
  moedas: state.wallet.currencies,
});
export default connect(mapStateToProps)(WalletForm);
