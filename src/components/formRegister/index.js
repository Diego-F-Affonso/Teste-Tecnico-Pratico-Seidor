import React, { Component } from 'react';
import { connect } from 'react-redux';
import { registerAction, updateAction, separeteEmployeeEditAction, registerEditAction } from '../../redux/actions'

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
      irrf: 0,
      test: edit
    }

    this.updateStatus = this.updateStatus.bind(this);
    this.submitState = this.submitState.bind(this);
  }
  
  componentDidUpdate(prevProps, prevState) {
    const separeteEmployee = this.props.employeeEdit
    if (separeteEmployee.length !== 0 && prevProps.edit === false && this.props.edit === true) {
      this.setState({
        nome: separeteEmployee[0].nome,
        cpf: separeteEmployee[0].cpf,
        salario: separeteEmployee[0].salario,
        desconto: separeteEmployee[0].desconto,
        dependentes: separeteEmployee[0].dependentes,
      })
    }
  }

  submitState() {
    const { salario, desconto, dependentes, nome, cpf, irrf } = this.state;
    const { registerAction: addEmployee } = this.props
    const employee = {
      nome,
      cpf,
      salario,
      desconto,
      dependentes,
      irrf,
    };
    addEmployee(employee);
    this.setState({
      nome: '',
      cpf: 0,
      salario: 0,
      desconto: 0,
      dependentes: 0,
    })
  }

  updateStatus() {
    const { updateAction: changeEdit, separeteEmployeeEditAction: separeteEmployee, registerEditAction: addEditEmployee } = this.props;
    changeEdit(false);
    this.setState({
      nome: '',
      cpf: 0,
      salario: 0,
      desconto: 0,
      dependentes: 0,
    });
    separeteEmployee([])
    const { salario, desconto, dependentes, nome, cpf, irrf } = this.state;
    const employee = {
      nome,
      cpf,
      salario,
      desconto,
      dependentes,
      irrf,
    };
    addEditEmployee(employee)
  }

  render() {
    const { edit } = this.props
    const { nome, cpf, salario, desconto, dependentes } = this.state;
    return (
      <form>
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
        <button
          type="button"
          onClick={!edit ? this.submitState : this.updateStatus }
        >
         {!edit ? 'Cadastrar Funcionário' : 'Atualizar Funcionário' }
        </button>
      </form>
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
  employeeEdit: state.funcionariosReducer.employeeEdit
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
