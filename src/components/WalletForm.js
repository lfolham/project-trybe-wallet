import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { fetchWallet, actionAddExpense } from '../redux/actions';

class WalletForm extends Component {
  state = {
    id: 0,
    value: '',
    description: '',
    currency: 'USD',
    method: 'Dinheiro',
    tag: 'Lazer',
    exchangeRates: '',
  };

  async componentDidMount() {
    const { dispatch } = this.props;
    console.log('asdad');
    await dispatch(fetchWallet());
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  saveExpenses = async () => {
    const { dispatch } = this.props;
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await response.json();
    delete data.USDT;
    const { id } = this.state;
    this.setState({
      exchangeRates: data,
    }, async () => {
      await dispatch(actionAddExpense(this.state));
      this.setState({
        id: id + 1,
        value: '',
        description: '',
      });
    });
  };

  render() {
    const { currencies } = this.props;
    const { value, description, currency, method, tag } = this.state;
    console.log(currencies);
    return (
      <div>
        <h2>Wallet Form:</h2>

        <label htmlFor="valor">
          Valor :
          <input
            type="number"
            name="value"
            id="valor"
            data-testid="value-input"
            placeholder="Digite o valor"
            value={ value }
            onChange={ this.handleChange }
          />
        </label>

        <label htmlFor="select">
          Moeda:
          <select
            data-testid="currency-input"
            id="currency"
            value={ currency }
            onChange={ this.handleChange }
            name="currency"
          >
            {
              currencies && currencies
                .map((coin) => (<option key={ coin }>{coin}</option>))
            }
          </select>
        </label>

        <label htmlFor="metodo-pagamento">
          Método pagamento:
          <select
            data-testid="method-input"
            name="method"
            value={ method }
            onChange={ this.handleChange }
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>

        <label htmlFor="descricao-imput">
          Categoria:
          <select
            name="tag"
            data-testid="tag-input"
            id=""
            value={ tag }
            onChange={ this.handleChange }
          >
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>

        <label htmlFor="descricao">
          Descrição :
          <input
            type="text"
            name="description"
            id="descricao"
            data-testid="description-input"
            value={ description }
            onChange={ this.handleChange }
          />
        </label>

        <button onClick={ this.saveExpenses } type="button">Adicionar despesa</button>
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
