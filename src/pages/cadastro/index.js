import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../../components/header';
import Form from '../../components/formRegister';
import EmployeeList from '../../components/employeeList';

class Cadastro extends Component {
  render() {
    // const { employee } = this.props
    // console.log(employee)
    return (
      <div>
        <Header />
        <Form />
        <EmployeeList />
      </div>
    )
  }
}

// const mapStateToProps = (state) => ({
//   employee: state.funcionariosReducer
// });

// export default connect(mapStateToProps)(Cadastro);
export default Cadastro;