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
      nome: '',
      cpf: 0,
      salario: 0,
      desconto: 0,
      dependentes: 0,
      edit: edit,
      id: 0
    }

    this.updateStatus = this.updateStatus.bind(this);
    this.submitState = this.submitState.bind(this);
  }
  componentDidMount() {
    this.setState({
      nome: '',
      cpf: 0,
      salario: 0,
      desconto: 0,
      dependentes: 0,
    });
  }
  
  componentDidUpdate(prevProps, prevState) {
    const separeteEmployee = this.props.employeeEdit
    if (separeteEmployee.length !== 0 && prevProps.edit !== false && prevState.edit === true) {
      this.setState({
        nome: separeteEmployee[0].nome,
        cpf: separeteEmployee[0].cpf,
        salario: separeteEmployee[0].salario,
        desconto: separeteEmployee[0].desconto,
        dependentes: separeteEmployee[0].dependentes,
        edit: false,
        id: separeteEmployee[0].id
      })
    }
  }

  submitState() {
    const { salario, desconto, dependentes, nome, cpf } = this.state;
    const { registerAction: addEmployee, employeesLength } = this.props
    console.log(employeesLength.length)
    const employee = {
      nome,
      cpf,
      salario,
      desconto,
      dependentes,
      id: employeesLength.length,
    };
    addEmployee(employee);
  }

  updateStatus() {
    const { updateAction: changeEdit, separeteEmployeeEditAction: separeteEmployee, registerEditAction: addEditEmployee } = this.props;
    changeEdit(false);
    separeteEmployee([])
    const { salario, desconto, dependentes, nome, cpf, id } = this.state;
    const employee = {
      nome,
      cpf,
      salario,
      desconto,
      dependentes,
      id,
    };
    addEditEmployee(employee)
  }

  render() {
    const { edit } = this.props
    const { nome, cpf, salario, desconto, dependentes } = this.state;
    return (
      <div className="form__wrapper">
        <form className="form__container">
          <label htmlFor="nome">
            NOME:
            <input
              type="text"
              name="nome"
              value={ nome }
              onChange={ ({ target }) => this.setState({nome: target.value})}
            />
          </label>
          <label htmlFor="CPF">
            CPF:
            <input
              type="number"
              name="CPF"
              value={ cpf }
              onChange={ ({ target }) => this.setState({cpf: target.value})}
            />
          </label>
          <label>
            SALÁRIO BRUTO:
            <input 
              type="number"
              name="salario"
              value={ salario }
              onChange={ ({ target }) => this.setState({salario: target.value})}
            />
          </label>
          <label>
            DESCONTO DA PREVIDÊNCIA:
            <input 
              type="number"
              name="desconto"
              value={ desconto }
              onChange={ ({ target }) => this.setState({desconto: target.value})}
            />
          </label>
          <label>
            NÚMERO DE DEPENDENTES:
            <input 
              type="number"
              name="dependentes"
              value={ dependentes }
              onChange={ ({ target }) => this.setState({dependentes: target.value})}
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
