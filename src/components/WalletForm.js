import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { fetchWallet } from '../redux/actions';

class WalletForm extends Component {
  async componentDidMount() {
    const { dispatch } = this.props;
    console.log('asdad');
    await dispatch(fetchWallet());
  }

  render() {
    const { currencies } = this.props;
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
        <label htmlFor="select">
          Moeda:
          <select
            data-testid="currency-input"
            id="currency"
          >
            {
              currencies && currencies
                .map((coin) => (<option key={ coin }>{coin}</option>))
            }
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
  currencies: PropTypes.arrayOf(PropTypes.string),
  dispatch: PropTypes.func,
}.isRequired;

const mapStateToProps = ({ wallet }) => ({
  currencies: wallet.currencies,
});

export default connect(mapStateToProps)(WalletForm);
