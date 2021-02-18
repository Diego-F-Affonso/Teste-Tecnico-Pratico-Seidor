import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteAction, updateAction, separeteEmployeeEditAction } from '../../redux/actions'
import './index.css'

class EmployeeList extends Component {
  constructor(props){
    super(props);
    this.state = {
      employeeWithIRRF: [],
    }
    this.updateStatus = this.updateStatus.bind(this);
    this.removeEmployee = this.removeEmployee.bind(this);
  }

  removeEmployee(name) {
    const { deleteAction: deleteEmployee } = this.props;
    deleteEmployee(name);
  }

  updateStatus(id) {
    const {
      updateAction: changeEdit,
      separeteEmployeeEditAction: separeteEmployee,
    } = this.props;
    changeEdit(true)
    separeteEmployee(id)
  }

  render() {
    const { employees } = this.props
    return(
      <div className="employees__container">
        <div className="employees__content">
            <table className="employees__table">
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>CPF</th>
                  <th>Salário</th>
                  <th>Desconto</th>
                  <th>Dependentes</th>
                  <th>Desconto IRRF</th>
                </tr>
              </thead>
              <tbody>
                { employees.map(({
                  name,
                  cpf,
                  salary,
                  discount,
                  dependents,
                  id,
                }) => {
                const dependentDeduction = 164.56;
                  if (salary <= 1903.98) {
                  return <tr key={ id }>
                    <td>{ name }</td>
                    <td>{ cpf }</td>
                    <td>{ salary }</td>
                    <td>{ discount }</td>
                    <td>{ dependents }</td>
                    <td>ISENTO</td>
                    <Link
                      to="/registrar-funcionario"
                      onClick={ () => this.updateStatus(id) }
                    >
                      <button>
                        EDITAR
                      </button>
                    </Link>
                    <button
                      type="button"
                      onClick={ () => this.removeEmployee(id) }
                    >
                      EXCLUIR
                    </button>
                  </tr>
                  } 
                else if (salary >= 1903.99 && salary <= 2826.65) {
                  const discountDependents = dependentDeduction * dependents;
                  const salaryBase = salary - (parseFloat(discount) + parseFloat(discountDependents));
                  const discountIRRF = (salaryBase * 0.075) - 142.80
                  return <tr key={ id }>
                    <td>{ name }</td>
                    <td>{ cpf }</td>
                    <td>{ salary }</td>
                    <td>{ discount }</td>
                    <td>{ dependents }</td>
                    <td>{ discountIRRF.toFixed(2) }</td>
                    <Link
                      to="/registrar-funcionario"
                      onClick={ () => this.updateStatus(id) }
                    >
                      <button>
                        EDITAR
                      </button>
                    </Link>
                    <button
                      type="button"
                      onClick={ () => this.removeEmployee(id) }
                    >
                      EXCLUIR
                    </button>
                  </tr>
                }
                else if (salary >= 2826.66 && salary <= 3751.05) {
                  const discountDependents = dependentDeduction * dependents;
                  const salaryBase = salary - (parseFloat(discount) + parseFloat(discountDependents));
                  const discountIRRF = parseFloat((salaryBase * 0.15)) - 354.80
                  return <tr key={ id }>
                    <td>{ name }</td>
                    <td>{ cpf }</td>
                    <td>{ salary }</td>
                    <td>{ discount }</td>
                    <td>{ dependents }</td>
                    <td>{ discountIRRF.toFixed(2) }</td>
                    <Link
                      to="/registrar-funcionario"
                      onClick={ () => this.updateStatus(id) }
                    >
                      <button>
                        EDITAR
                      </button>
                    </Link>
                    <button
                      type="button"
                      onClick={ () => this.removeEmployee(id) }
                    >
                      EXCLUIR
                    </button>
                  </tr>
                }
                else if (salary >= 3751.06 && salary <= 4664.68) {
                  const discountDependents = dependentDeduction * dependents;
                  const salaryBase = salary - (parseFloat(discount) + parseFloat(discountDependents));
                  const discountIRRF = parseFloat((salaryBase * 0.225)) - 636.13
                  return <tr key={ id }>
                    <td>{ name }</td>
                    <td>{ cpf }</td>
                    <td>{ salary }</td>
                    <td>{ discount }</td>
                    <td>{ dependents }</td>
                    <td>{ discountIRRF.toFixed(2) }</td>
                    <Link
                      to="/registrar-funcionario"
                      onClick={ () => this.updateStatus(id) }
                    >
                      <button>
                        EDITAR
                      </button>
                    </Link>
                    <button
                      type="button"
                      onClick={ () => this.removeEmployee(id) }
                    >
                      EXCLUIR
                    </button>
                  </tr>
                } else {
                  const discountDependents = dependentDeduction * dependents;
                  const salaryBase = salary - (parseFloat(discount) + parseFloat(discountDependents));
                  const discountIRRF = parseFloat((salaryBase * 0.275)) - 869.36
                  return <tr key={ id }>
                    <td>{ name }</td>
                    <td>{ cpf }</td>
                    <td>{ salary }</td>
                    <td>{ discount }</td>
                    <td>{ dependents }</td>
                    <td>{ discountIRRF.toFixed(2) }</td>
                    <Link
                      to="/registrar-funcionario"
                      onClick={ () => this.updateStatus(id) }
                    >
                      <button>
                        EDITAR
                      </button>
                    </Link>
                    <button
                      type="button"
                      onClick={ () => this.removeEmployee(id) }
                    >
                      EXCLUIR
                    </button>
                  </tr>
                }
                  }) }
              </tbody>
            </table>
        </div>
      </div>
    )
  }
}
const mapDispatchToProps = {
  deleteAction,
  updateAction,
  separeteEmployeeEditAction,
};

const mapStateToProps = (state) => ({
  employees: state.funcionariosReducer.employees
});

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeList);
