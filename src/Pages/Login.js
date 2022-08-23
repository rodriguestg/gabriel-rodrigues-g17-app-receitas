import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import userAction from '../redux/actions';
import 'bootstrap/dist/css/bootstrap.min.css';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      isSubmitButtonDisabled: true,
    };
  }

  handleLogin = () => {
    const { dispatchLogin, history } = this.props;
    const { email } = this.state;
    dispatchLogin(email);
    const userEmail = {
      email,
    };

    localStorage.setItem('user', JSON.stringify(userEmail));
    localStorage.setItem('mealsToken', '1');
    localStorage.setItem('cocktailsToken', '1');

    history.push('/foods');
  }

  handleButton = () => {
    const { email, password } = this.state;

    const valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

    const passwordMinLength = 7;

    if (email.match(valid) && password.length >= passwordMinLength) {
      return this.setState({
        isSubmitButtonDisabled: false,
      });
    }
    return this.setState({
      isSubmitButtonDisabled: true,
    });
  }

  onInputChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    }, () => {
      this.handleButton();
    });
  }

  render() {
    const { isSubmitButtonDisabled, email, password } = this.state;
    return (
      <div>
        <form>
          <div>
            <input
              data-testid="email-input"
              type="email"
              onChange={ this.onInputChange }
              placeholder="E-mail"
              value={ email }
              name="email"
            />
          </div>
          <div>
            <input
              data-testid="password-input"
              type="password"
              onChange={ this.onInputChange }
              placeholder="Password"
              value={ password }
              name="password"
            />
          </div>
          <div>
            <button
              type="button"
              data-testid="login-submit-btn"
              disabled={ isSubmitButtonDisabled }
              onClick={ this.handleLogin }
            >
              Entrar
            </button>
          </div>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  dispatchLogin: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  dispatchLogin: (value) => dispatch(userAction(value)),
});

export default connect(null, mapDispatchToProps)(Login);
