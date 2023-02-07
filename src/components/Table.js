import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Table extends Component {
  render() {
    const { expenses } = this.props;

    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Tag</th>
              <th>Método de pagamento</th>
              <th>Valor</th>
              <th>Moeda</th>
              <th>Câmbio utilizado</th>
              <th>Valor convertido</th>
              <th>Moeda de conversão</th>
              <th>Editar/Excluir</th>
            </tr>
          </thead>
          <tbody>
            {expenses
              .map(({ description, tag, method, value, currency, exchangeRates, id }) => {
                const ask = Number(exchangeRates[currency].ask);
                const { name } = exchangeRates[currency];
                const total = Number(value) * ask;
                const valueExpense = Number(value);
                return (
                  <tr key={ id }>
                    <td>{ description }</td>
                    <td>{ tag }</td>
                    <td>{ method }</td>
                    <td>{ valueExpense.toFixed(2) }</td>
                    <td>{ name }</td>
                    <td>{ ask.toFixed(2) }</td>
                    <td>{ total.toFixed(2) }</td>
                    <td> Real </td>
                    <td>
                      <button
                        data-testid="edit-btn"
                      >
                        edit
                      </button>
                      <button
                        data-testid="delete-btn"
                      >
                        Editar/Excluir
                      </button>
                    </td>
                  </tr>
                );
              }) }

          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = ({ wallet }) => ({
  expenses: wallet.expenses,
});

Table.propTypes = {
  expenses: PropTypes.shape({
    map: PropTypes.func,
  }),
}.isRequired;

export default connect(mapStateToProps)(Table);
