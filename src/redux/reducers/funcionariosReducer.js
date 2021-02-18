import { REGISTER_EMPLOYEE, DELETE_EMPLOYEE, UPDATE_EMPLOYEE, EMPLOYEE_EDIT, REGISTER_EDIT } from '../actions/';

const INITIAL_STATE = {
  employees: [],
  edit: false,
  employeeEdit: [],
}

function funcionariosReducer(state = INITIAL_STATE , action) {
  switch (action.type) {
    case REGISTER_EMPLOYEE:
      return { ...state,
        employees: [...state.employees, action.payload] };
    case DELETE_EMPLOYEE:
      return { ...state,
        employees: [...state.employees.filter((employee) => (employee.cpf !== action.payload))] };
    case UPDATE_EMPLOYEE:
      return { ...state,
        edit: action.payload };
    case EMPLOYEE_EDIT:
      return { ...state,
        employeeEdit: [...state.employees.filter((employee) => (employee.cpf === action.payload))]}
    case REGISTER_EDIT:
      return { ...state, 
        employees: [...state.employees.filter((employee) => (employee.cpf !== action.payload.cpf)), action.payload]}
    default:
      return state;
  }
}

export default funcionariosReducer;