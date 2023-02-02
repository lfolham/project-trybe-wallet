import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ADD_EMAIL } from '../redux/actions';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
    isDisabled: true,
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    }, this.imputvalidation);
  };

  imputvalidation = () => {
    const { email, password } = this.state;
    const validEmail = /\S+@\S+\.\S+/; // https://horadecodar.com.br/2020/09/13/como-validar-email-com-javascript/
    const minLenght = 5;
    if (validEmail.test(email) && password.length >= minLenght) {
      this.setState({ isDisabled: false });
    } else {
      this.setState({ isDisabled: true });
    }
  };

  loginSuccessful = () => {
    const { dispatch, history } = this.props;
    const { email } = this.state;
    dispatch(ADD_EMAIL(email));
    history.push('/carteira');
  };

  render() {
    const { isDisabled } = this.state;
    return (
      <form>
        <label htmlFor="inputEmail">

          <p>Email</p>

          <input
            data-testid="email-input"
            id="inputEmail"
            type="email"
            name="email"
            value={ email }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="inputPassword">

          <p>Senha</p>

          <input
            data-testid="password-input"
            id="inputPassword"
            type="password"
            name="password"
            value={ password }
            onChange={ this.handleChange }
          />
        </label>

        <button
          type="button"
          disabled={ isDisabled }
          onClick={ this.loginSuccessful }

        >
          Entrar

        </button>
      </form>
    );
  }
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default connect()(Login);
