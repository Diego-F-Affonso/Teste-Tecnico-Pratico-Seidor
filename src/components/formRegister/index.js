import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { registerAction, updateAction, separeteEmployeeEditAction, registerEditAction } from '../../redux/actions';
import './index.css';

class Form extends Component {
  constructor(props){
    super(props);
    const { edit } = this.props 
    this.state = {
      name: '',
      cpf: 0,
      salary: 0,
      discount: 0,
      dependents: 0,
      edit: edit,
      id: 0
    }

    this.updateStatus = this.updateStatus.bind(this);
    this.submitState = this.submitState.bind(this);
  }
  // limpa os input
  componentDidMount() {
    this.setState({
      name: '',
      cpf: 0,
      salary: 0,
      discount: 0,
      dependents: 0,
    });
  };
  // set os valores do funcionario que está sendo atualizado nos input
  componentDidUpdate(prevProps, prevState) {
    const separeteEmployee = this.props.employeeEdit;
    const { name, cpf, salary, discount, dependents, id } = separeteEmployee[0];
    if (separeteEmployee.length !== 0 && prevProps.edit !== false && prevState.edit === true) {
      this.setState({
        name: name,
        cpf: cpf,
        salary: salary,
        discount: discount,
        dependents: dependents,
        edit: false,
        id: id
      })
    }
  };
  // adiciona um funcionario
  submitState() {
    const { salary, discount, dependents, name, cpf } = this.state;
    const { registerAction: addEmployee, employeesLength } = this.props;
    const employee = {
      name,
      cpf,
      salary,
      discount,
      dependents,
      id: employeesLength.length,
    };
    addEmployee(employee);
  }
  // atualiza os dados do funcionario selecionado
  updateStatus() {
    const {
      updateAction: changeEdit,
      separeteEmployeeEditAction: separeteEmployee,
      registerEditAction: addEditEmployee
    } = this.props;
    changeEdit(false);
    separeteEmployee([]);
    const { salary, discount, dependents, name, cpf, id } = this.state;
    const employee = {
      name,
      cpf,
      salary,
      discount,
      dependents,
      id,
    };
    addEditEmployee(employee)
  };

  render() {
    const { edit } = this.props;
    const { name, cpf, salary, discount, dependents } = this.state;
    return (
      <div className="form__wrapper">
        <form className="form__container">
          <label htmlFor="name">
            NOME:
            <input
              type="text"
              name="name"
              value={ name }
              onChange={ ({ target }) => this.setState({name: target.value})}
            />
          </label>
          <label htmlFor="cpf">
            CPF:
            <input
              type="number"
              name="cpf"
              value={ cpf }
              onChange={ ({ target }) => this.setState({cpf: target.value})}
            />
          </label>
          <label htmlFor="salary">
            SALÁRIO BRUTO:
            <input 
              type="number"
              name="salary"
              value={ salary }
              onChange={ ({ target }) => this.setState({salary: target.value})}
            />
          </label>
          <label htmlFor="discount">
            DESCONTO DA PREVIDÊNCIA:
            <input 
              type="number"
              name="discount"
              value={ discount }
              onChange={ ({ target }) => this.setState({discount: target.value})}
            />
          </label>
          <label htmlFor="dependents">
            NÚMERO DE DEPENDENTES:
            <input 
              type="number"
              name="dependents"
              value={ dependents }
              onChange={ ({ target }) => this.setState({dependents: target.value})}
            />
          </label>
          <Link
            to="/funcionarios"
            onClick={!edit ? this.submitState : this.updateStatus }
          >
            <button>
              {!edit ? 'Cadastrar Funcionário' : 'Atualizar Funcionário' }
            </button>
          </Link>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = {
  registerAction,
  updateAction,
  separeteEmployeeEditAction,
  registerEditAction,
};

const mapStateToProps = (state) => ({
  edit: state.funcionariosReducer.edit,
  employeeEdit: state.funcionariosReducer.employeeEdit,
  employeesLength: state.funcionariosReducer.employees
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
