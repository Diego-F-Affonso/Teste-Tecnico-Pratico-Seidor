import React, { Component } from 'react';

class Header extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     email: ''
  //   }
  // }

  render() {
    return (
      <header>
        <a
          href="/registrar-funcionario"
          type="button"
        >
          <p>Registrar Funcionário</p>
        </a>
        <a
          href="/funcionarios"
          type="button"
        >
          <p>Funcionarios</p>
        </a>
      </header>
    )
  }
}

export default Header;
