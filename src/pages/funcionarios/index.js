import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../../components/header/index';

class Funcionarios extends Component {
  render() {
    // const { employee } = this.props
    // console.log(employee)
    return (
      <div>
        <Header />
        <p>Funcionarios</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  employee: state.funcionariosReducer
});

export default connect(mapStateToProps)(Funcionarios);
