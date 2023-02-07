import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const {
      email,
      expenses,
    } = this.props;
    console.log(expenses);
    const result = expenses.reduce((acc, curr) => {
      const moeda = Object
        .entries(curr.exchangeRates).find((coin) => coin[0] === curr.currency);
      return acc + (Number(moeda[1].ask) * Number(curr.value));
    }, 0);

    return (
      <div>
        <h1>TRYBE WALLET</h1>
        <h3 data-testid="email-field">{email}</h3>
        <p data-testid="total-field">{ result.toFixed(2) }</p>
        <p data-testid="header-currency-field">BRL</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default connect(mapStateToProps)(Header);
