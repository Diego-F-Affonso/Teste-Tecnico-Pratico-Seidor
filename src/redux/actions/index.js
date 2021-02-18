export const REGISTER_EMPLOYEE = 'REGISTER_EMPLOYEE';
export const DELETE_EMPLOYEE = 'DELETE_EMPLOYEE';
export const UPDATE_EMPLOYEE = 'UPDATE_EMPLOYEE';
export const EMPLOYEE_EDIT = 'EMPLOYEE_EDIT';
export const REGISTER_EDIT = 'REGISTER_EDIT';


export const registerAction = (data) => ({
  type: REGISTER_EMPLOYEE,
  payload: data
});

export const deleteAction = (data) => ({
  type: DELETE_EMPLOYEE,
  payload: data
});

export const updateAction = (data) => ({
  type: UPDATE_EMPLOYEE,
  payload: data
});

export const separeteEmployeeEditAction = (data) => ({
  type: EMPLOYEE_EDIT,
  payload: data
});

export const registerEditAction = (data) => ({
  type: REGISTER_EDIT,
  payload: data
});