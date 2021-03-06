import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../images/logoSeidor.png'
import './index.css';

class Header extends Component {
  render() {
    return (
      <header className="header__container">
        <Link
          className="header__register"
          to="/registrar-funcionario"
          type="button"
        >
          <p>Registrar Funcionário</p>
        </Link>
        <img src={ Logo } alt="seidor logo"/>
        <Link
          className="header__employee"
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
