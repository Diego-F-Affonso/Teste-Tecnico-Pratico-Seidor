import React, { Component } from 'react';

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
          onClick={ () => this.handleSubmit() }
        >
          LOGIN
        </button>
      </form>
    )
  }
}

export default Login;
