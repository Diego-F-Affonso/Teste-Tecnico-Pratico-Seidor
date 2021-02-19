import React from 'react';
import { fireEvent } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import Cadastro from '../pages/cadastro';
import Funcionarios from '../pages/funcionarios';

const employeesMock = [
  {
    "nome": "Letícia Aurora Farias",
    "cpf": "936.938.039-60",
    "salario": 998,
    "desconto": 74.85,
    "dependentes": 2
  },
  {
    "nome": "Edson Thiago Drumond",
    "cpf": "748.517.476-24",
    "salario": 1045,
    "desconto": 78.38,
    "dependentes": 1
  },
  {
    "nome": "Fátima Elza Tereza Castro",
    "cpf": "701.118.872-08",
    "salario": 5500,
    "desconto": 628.95,
    "dependentes": 0
  },
  {
    "nome": "Sandra Giovanna Drumond",
    "cpf": "715.890.756-25",
    "salario": 4522,
    "desconto": 492.03,
    "dependentes": 3
  },
  {
    "nome": "Valentina Clara Nunes",
    "cpf": "101.151.404-41",
    "salario": 10000,
    "desconto": 713.1,
    "dependentes": 4
  }
];

describe('Employees List Page', () => {
  test('if you have the header', () => {
    const { getByText } = renderWithRouter(<Funcionarios />);

    const buttonEmployees = getByText(/funcionarios/i);
    const buttonRegisterEmployee = getByText(/registrar funcionário/i);

    expect(buttonEmployees).toBeInTheDocument();
    expect(buttonRegisterEmployee).toBeInTheDocument();
  });

  test('if you have the information in the table', () => {
    const { getByText } = renderWithRouter(<Funcionarios />);

    const title = getByText(/tabelas e cálculos do irrf/i);
    const paragraph = getByText(/qual é o percentual/i);

    expect(paragraph).toBeInTheDocument();
    expect(title).toBeInTheDocument();
  });

  test('if you have the table', () => {
    const { getByText, queryAllByText } = renderWithRouter(<Funcionarios />);

    const theadName = getByText(/nome/i);
    const theadCPF = getByText(/cpf/i);
    const theadSalary = getByText(/salário/i);
    const theadDiscount = queryAllByText(/desconto/i);
    const theadDependents = getByText(/dependentes/i);
    const theadIRRF = getByText(/desconto irrf/i);

    expect(theadName).toBeInTheDocument();
    expect(theadCPF).toBeInTheDocument();
    expect(theadSalary).toBeInTheDocument();
    expect(theadDiscount.length).toBe(2);
    expect(theadDependents).toBeInTheDocument();
    expect(theadIRRF).toBeInTheDocument();
  });

  test('if the table is empty', () => {
    const { queryByText } = renderWithRouter(<Funcionarios />);

    const employeeNameMocked1 = queryByText(employeesMock[0].nome);
    const employeeNameMocked2 = queryByText(employeesMock[1].nome);
    const employeeNameMocked3 = queryByText(employeesMock[2].nome);

    expect(employeeNameMocked1).not.toBeInTheDocument();
    expect(employeeNameMocked2).not.toBeInTheDocument();
    expect(employeeNameMocked3).not.toBeInTheDocument();
  });

  test('when adding employee it appears in the list of employees', () => {
    const { getByLabelText, getByText, history } = renderWithRouter(<Cadastro />);

    const buttonRegisterEmployee = getByText(/cadastrar funcionário/i);

    const inputName = getByLabelText(/nome/i);
    const inputCPF = getByLabelText(/cpf/i);
    const inputSalary = getByLabelText(/salário bruto/i);
    const inputDiscount = getByLabelText(/desconto da previdência/i);
    const inputDepents = getByLabelText(/número de dependentes/i);

    fireEvent.change(inputName, { target: { value: employeesMock[0].nome } });
    fireEvent.change(inputCPF, { target: { value: employeesMock[0].cpf } });
    fireEvent.change(inputSalary, { target: { value: employeesMock[0].salario } });
    fireEvent.change(inputDiscount, { target: { value: employeesMock[0].desconto } });
    fireEvent.change(inputDepents, { target: { value: employeesMock[0].dependentes } });

    expect(buttonRegisterEmployee).not.toBeDisabled();

    fireEvent.click(buttonRegisterEmployee);
    const { pathname } = history.location;

    expect(pathname).toBe('/funcionarios');
  });

  test('added employee appears in the list and you can delete it from the list', () => {
    const { getByText, queryByText } = renderWithRouter(<Funcionarios />);

    const employeeName1 = getByText(employeesMock[0].nome);
    const employeeName2 = queryByText(employeesMock[1].nome);

    expect(employeeName1).toBeInTheDocument();
    expect(employeeName2).not.toBeInTheDocument();

    const deleteButton = getByText(/excluir/i);

    expect(deleteButton).toBeInTheDocument();
  
    fireEvent.click(deleteButton);

    expect(employeeName1).not.toBeInTheDocument();
  });

  test('can i add another employee and he appears in the list', () => {
    const { getByText, getByLabelText, history } = renderWithRouter(<Cadastro />);

    const inputName = getByLabelText(/nome/i);
    const inputCPF = getByLabelText(/cpf/i);
    const inputSalary = getByLabelText(/salário bruto/i);
    const inputDiscount = getByLabelText(/desconto da previdência/i);
    const inputDepents = getByLabelText(/número de dependentes/i);

    fireEvent.change(inputName, { target: { value: employeesMock[1].nome } });
    fireEvent.change(inputCPF, { target: { value: employeesMock[1].cpf } });
    fireEvent.change(inputSalary, { target: { value: employeesMock[1].salario } });
    fireEvent.change(inputDiscount, { target: { value: employeesMock[1].desconto } });
    fireEvent.change(inputDepents, { target: { value: employeesMock[1].dependentes } });

    const buttonRegisterEmployee = getByText(/cadastrar funcionário/i);

    expect(buttonRegisterEmployee).not.toBeDisabled();

    fireEvent.click(buttonRegisterEmployee);
    const { pathname } = history.location;

    expect(pathname).toBe('/funcionarios');
  });

  test('by clicking on the edit button you are redirected to the form', () => {
    const { getByText, queryByText, history } = renderWithRouter(<Funcionarios />);

    const employeeName1 = getByText(employeesMock[1].nome);
    const employeeName2 = queryByText(employeesMock[0].nome);

    expect(employeeName1).toBeInTheDocument();
    expect(employeeName2).not.toBeInTheDocument();

    const editButton = getByText(/editar/i);

    expect(editButton).toBeInTheDocument();

    fireEvent.click(editButton);
    const { pathname } = history.location;

    expect(pathname).toBe('/registrar-funcionario');
  });

  test('information of the selected user appears to change them', () => {
    const { getByLabelText, getByText, history } = renderWithRouter(<Cadastro />);

    const inputName = getByLabelText(/nome/i);

    expect(inputName).toBeInTheDocument();
    expect(inputName.value).toBe(employeesMock[1].nome);

    fireEvent.change(inputName, { target: { value: 'Diego Fernandes Affonso' } });

    expect(inputName.value).toBe("Diego Fernandes Affonso");

    const buttonEdit = getByText(/atualizar funcionário/i);

    expect(buttonEdit).toBeInTheDocument();

    fireEvent.click(buttonEdit);
    const { pathname } = history.location;

    expect(pathname).toBe('/funcionarios');
  });

  test('changed information appears in the list', () => {
    const { getByText, queryByText } = renderWithRouter(<Funcionarios />);

    const oldName = queryByText(employeesMock[1].nome);
    const editedName = getByText(/Diego Fernandes Affonso/i);

    expect(oldName).not.toBeInTheDocument();
    expect(editedName).toBeInTheDocument();
  });
})
