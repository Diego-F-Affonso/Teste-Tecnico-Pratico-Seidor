import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      redirect: false,
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    const { history } = this.props;
    history.push('funcionarios')
  }

  render() {
    const { redirect } = this.state;
    return (
      <form>
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
          onClick={ (e) => this.handleSubmit(e) }
        >
          LOGIN
        </button>
      </form>
    )
  }
}

export default Login;
