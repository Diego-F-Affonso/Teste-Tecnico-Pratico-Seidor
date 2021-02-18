import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import logo from '../../images/logoSeidor.png';
import './index.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isDisable: true,
      redirect: false,
    }

    this.validateEmail = this.validateEmail.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    this.setState({redirect: true})
  }

  // setState
  handleInputChange({ name, value }) {
    this.setState({ [name]: value }, () => {
      const { email } = this.state;
      if (email !== '') {
        this.setState({ isDisable: false });
      } else {
        this.setState({ isDisable: true });
      }
    });
  }

   // https://www.itsolutionstuff.com/post/react-email-validation-exampleexample.html  valida email e tamanho min senha
   validateEmail() {
    const { email, password } = this.state;
    const regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    const resultRegex = regex.test(email);
    const minValue = 6;

    if (resultRegex && password.length >= minValue) {
      return this.setState({ isDisable: false });
    } else{
      this.setState({ isDisable: true });
    }
  }

  render() {
    const { email, isDisable, redirect } = this.state;
    return (
      <main className="login__wrapper">
        <form className="login__container">
          <img src={ logo } alt="seidor logo"/>
          <label htmlFor="email">
            Email:
            <input
              id="email"
              name="email"
              type="text"
              placeholder="seidor@seidor.com"
              value={ email }
              onKeyUp={ this.validateEmail }
              onChange={ ({ target }) => this.handleInputChange(target) }
            />
          </label>
          <label htmlFor="password">
            Senha:
            <input
              id="password"
              name="password"
              type="password"
              placeholder="*******"
              onKeyUp={ this.validateEmail }
              onChange={ ({ target }) => this.handleInputChange(target) }
            />
          </label>
          <button
            type="button"
            disabled={ isDisable }
            onClick={ () => this.handleSubmit() }
          >
            LOGIN
          </button>
          { redirect && <Redirect to="/registrar-funcionario"/>}
        </form>
      </main>
    )
  }
}

export default Login;
