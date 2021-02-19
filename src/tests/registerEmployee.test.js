import React from 'react';
import { fireEvent } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import Cadastro from '../pages/cadastro';

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

describe('Register Employee Page', () => {
  test('if you have the header', () => {
    const { getByText } = renderWithRouter(<Cadastro />);

    const buttonEmployees = getByText(/funcionarios/i);
    const buttonRegisterEmployee = getByText(/registrar funcionário/i);

    expect(buttonEmployees).toBeInTheDocument();
    expect(buttonRegisterEmployee).toBeInTheDocument();
  });

  test('if you have all registration inputs and can write to them', () => {
    const { getByLabelText } = renderWithRouter(<Cadastro />);

    const inputName = getByLabelText(/nome/i);
    const inputCPF = getByLabelText(/cpf/i);
    const inputSalary = getByLabelText(/salário bruto/i);
    const inputDiscount = getByLabelText(/desconto da previdência/i);
    const inputDepents = getByLabelText(/número de dependentes/i);

    expect(inputName).toBeInTheDocument();
    expect(inputCPF).toBeInTheDocument();
    expect(inputSalary).toBeInTheDocument();
    expect(inputDiscount).toBeInTheDocument();
    expect(inputDepents).toBeInTheDocument();

    fireEvent.change(inputName, { target: { value: employeesMock[0].nome } });
    fireEvent.change(inputCPF, { target: { value: employeesMock[0].cpf } });
    fireEvent.change(inputSalary, { target: { value: employeesMock[0].salario } });
    fireEvent.change(inputDiscount, { target: { value: employeesMock[0].desconto } });
    fireEvent.change(inputDepents, { target: { value: employeesMock[0].dependentes } });

    expect(inputName.value).toBe(employeesMock[0].nome);
    expect(inputCPF.value).toBe(employeesMock[0].cpf);
    expect(inputSalary.value).toBe("998");
    expect(inputDiscount.value).toBe("74.85");
    expect(inputDepents.value).toBe("2");
  });

  test('if there is a button and it is disabled', () => {
    const { getByText } = renderWithRouter(<Cadastro />);

    const buttonRegisterEmployee = getByText(/cadastrar funcionário/i);

    expect(buttonRegisterEmployee).toBeInTheDocument();
    expect(buttonRegisterEmployee).toBeDisabled();
  });

  test('register employee is redirected to employee page', () => {
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

    expect(pathname).toBe('/funcionarios')
  });
})
