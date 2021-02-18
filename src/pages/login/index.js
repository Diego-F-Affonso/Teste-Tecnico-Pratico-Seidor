import React, { Component } from 'react';
import './index.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    const { history } = this.props;
    history.push('registrar-funcionario')
  }

  render() {
    return (
      <main className="login__wrapper">
        <form className="login__container">
          <img src="https://www.seidor.com.br/etc/designs/seidorweb/images/logoSeidor.png" alt="seidor logo"/>
          <label htmlFor="email">
            Email:
            <input
              id="email"
              name="email"
              type="text"
              placeholder="seidor@seidor.com"
            />
          </label>
          <label htmlFor="senha">
            Senha:
            <input
              id="senha"
              name="senha"
              type="password"
              placeholder="*******"
            />
          </label>
          <button
            type="button"
            onClick={ () => this.handleSubmit() }
          >
            LOGIN
          </button>
        </form>
      </main>
    )
  }
}

export default Login;
