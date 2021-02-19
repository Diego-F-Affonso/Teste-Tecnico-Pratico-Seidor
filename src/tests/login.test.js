import React from 'react';
import { fireEvent } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import Login from '../pages/login'

describe('Login page', () => {
  test('check if the document has two entries - an email and a password', () => {
    const { getByLabelText } = renderWithRouter(<Login />);

    const inputEmail = getByLabelText(/email/i);
    expect(inputEmail).toBeInTheDocument();

    const inputPassword = getByLabelText(/senha/i);
    expect(inputPassword).toBeInTheDocument();
  });

  test('it is possible to write in the input', () => {
    const { getByLabelText } = renderWithRouter(<Login />);

    const inputEmail = getByLabelText(/email/i);
    const inputPassword = getByLabelText(/senha/i);

    const email = 'teste@email.com';
    const password = '1234567';

    fireEvent.change(inputEmail, { target: { value: email } });
    fireEvent.change(inputPassword, { target: { value: password } });

    expect(inputEmail.value).toBe(email);
    expect(inputPassword.value).toBe(password);
  });

  test('checks if the Login button exists', () => {
    const { getByText } = renderWithRouter(<Login />);

    const button = getByText(/login/i);

    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('disabled');
  });

  test('checks if the login button is function', () => {
    const { getByText, getByLabelText, history } = renderWithRouter(<Login />);

    const button = getByText(/login/i);
    const inputEmail = getByLabelText(/email/i);
    const inputPassword = getByLabelText(/senha/i);

    const email = 'teste@email.com';
    const password = '1234567';

    fireEvent.change(inputEmail, { target: { value: email } });
    fireEvent.change(inputPassword, { target: { value: password } });

    expect(button).not.toBeDisabled();

    fireEvent.click(button);
    const { pathname } = history.location;

    expect(pathname).toBe('/registrar-funcionario')

  })
});
