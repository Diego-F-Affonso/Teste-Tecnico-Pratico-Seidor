import React, { Component } from 'react';
import Header from '../../components/header/index';
import EmployeeList from '../../components/employeeList';
import TableInformation from '../../components/tableInformation'

class Funcionarios extends Component {
  render() {
    return (
      <div>
        <Header />
        <TableInformation />
        <EmployeeList />
      </div>
    )
  }
}

export default Funcionarios;
