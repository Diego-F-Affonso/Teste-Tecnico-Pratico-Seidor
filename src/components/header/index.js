import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

class Header extends Component {
  render() {
    return (
      <header>
        <Link
          to="/registrar-funcionario"
          type="button"
        >
          <p>Registrar Funcionário</p>
        </Link>
        <Link
          to="/funcionarios"
          type="button"
        >
          <p>Funcionarios</p>
        </Link>
      </header>
    )
  }
}

export default Header;
