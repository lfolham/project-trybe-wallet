import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const {
      email,
    } = this.props;

    return (
      <div style={ { display: 'flex', justifyContent: 'space-between' } }>
        <h1>TrybeWallet</h1>
        <div>
          <h4 data-testid="email-field">{email}</h4>
          <h4 data-testid="total-field"> 0 </h4>
          <h4 data-testid="header-currency-field"> BRL </h4>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Header);
