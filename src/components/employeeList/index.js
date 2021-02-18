import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteAction, updateAction, separeteEmployeeEditAction } from '../../redux/actions'

class EmployeeList extends Component {
  constructor(props){
    super(props);
    this.state = {
      employeeWithIRRF: [],
    }
    this.updateStatus = this.updateStatus.bind(this);
    this.removeEmployee = this.removeEmployee.bind(this);
  }
  // componentDidUpdate() {
  //   this.altera()
  // }
  // altera() {
  //   const { employees } = this.props
  // }
  removeEmployee(name) {
    const { deleteAction: deleteEmployee } = this.props;
    deleteEmployee(name);
  }

  updateStatus(cpf) {
    const {
      updateAction: changeEdit,
      separeteEmployeeEditAction: separeteEmployee,
    } = this.props;
    changeEdit(true)
    separeteEmployee(cpf)
  }

  render() {
    const { employees } = this.props
    return(
     <table>
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
           nome,
           cpf,
           salario,
           desconto,
           dependentes,
         }, index) => {
          const deduçãoDependente = 164.56;
           if (salario <= 1903.98) {
            return <tr key={ index }>
              <td>{ nome }</td>
              <td>{ cpf }</td>
              <td>{ salario }</td>
              <td>{ desconto }</td>
              <td>{ dependentes }</td>
              <td>ISENTO</td>
              <button
                type="button"
                onClick={ () => this.updateStatus(cpf) }
              >
                EDITAR
              </button>
              <button
                type="button"
                onClick={ () => this.removeEmployee(cpf) }
              >
                EXCLUIR
              </button>
            </tr>
           } 
          else if (salario >= 1903.99 && salario <= 2826.65) {
            const descontoDependentes = deduçãoDependente * dependentes;
            const salarioBase = salario - (parseFloat(desconto) + parseFloat(descontoDependentes));
            const descontoIRRF = (salarioBase * 0.075) - 142.80
            return <tr key={ index }>
              <td>{ nome }</td>
              <td>{ cpf }</td>
              <td>{ salario }</td>
              <td>{ desconto }</td>
              <td>{ dependentes }</td>
              <td>{ descontoIRRF.toFixed(2) }</td>
              <button>EDITAR</button>
              <button
                type="button"
                onClick={ () => this.removeEmployee(cpf) }
              >
                EXCLUIR
              </button>
            </tr>
          }
          else if (salario >= 2826.66 && salario <= 3751.05) {
            const descontoDependentes = deduçãoDependente * dependentes;
            const salarioBase = salario - (parseFloat(desconto) + parseFloat(descontoDependentes));
            const descontoIRRF = parseFloat((salarioBase * 0.15)) - 354.80
            return <tr key={ index }>
              <td>{ nome }</td>
              <td>{ cpf }</td>
              <td>{ salario }</td>
              <td>{ desconto }</td>
              <td>{ dependentes }</td>
              <td>{ descontoIRRF.toFixed(2) }</td>
              <button>EDITAR</button>
              <button
                type="button"
                onClick={ () => this.removeEmployee(cpf) }
              >
                EXCLUIR
              </button>
            </tr>
          }
          else if (salario >= 3751.06 && salario <= 4664.68) {
            const descontoDependentes = deduçãoDependente * dependentes;
            const salarioBase = salario - (parseFloat(desconto) + parseFloat(descontoDependentes));
            const descontoIRRF = parseFloat((salarioBase * 0.225)) - 636.13
            return <tr key={ index }>
              <td>{ nome }</td>
              <td>{ cpf }</td>
              <td>{ salario }</td>
              <td>{ desconto }</td>
              <td>{ dependentes }</td>
              <td>{ descontoIRRF.toFixed(2) }</td>
              <button>EDITAR</button>
              <button
                type="button"
                onClick={ () => this.removeEmployee(cpf) }
              >
                EXCLUIR
              </button>
            </tr>
          } else {
            const descontoDependentes = deduçãoDependente * dependentes;
            const salarioBase = salario - (parseFloat(desconto) + parseFloat(descontoDependentes));
            const descontoIRRF = parseFloat((salarioBase * 0.275)) - 869.36
            return <tr key={ index }>
              <td>{ nome }</td>
              <td>{ cpf }</td>
              <td>{ salario }</td>
              <td>{ desconto }</td>
              <td>{ dependentes }</td>
              <td>{ descontoIRRF.toFixed(2) }</td>
              <button>EDITAR</button>
              <button
                type="button"
                onClick={ () => this.removeEmployee(cpf) }
              >
                EXCLUIR
              </button>
            </tr>
          }
           }) }
       </tbody>
     </table>
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


// <tbody>
//          { employees.map(({
//            nome,
//            cpf,
//            salario,
//            desconto,
//            dependentes,
//            irrf,
//          }, index) => (
//            <tr key={ index }>
//              <td>{ nome }</td>
//              <td>{ cpf }</td>
//              <td>{ salario }</td>
//              <td>{ desconto }</td>
//              <td>{ dependentes }</td>
//              <td>{ irrf }</td>
//              <button>EDITAR</button>
//              <button>EXCLUIR</button>
//            </tr>
//          )) }
//        </tbody>