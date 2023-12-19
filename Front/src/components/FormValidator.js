// FormValidator.js
const FormValidator = ({ values }) => {
  const emptyFields = {
    firstName: !values.firstName,
    lastName: !values.lastName,
    dateOfBirth: !values.dateOfBirth,
    startDate: !values.startDate,
    department: !values.department,
    street: !values.street,
    city: !values.city,
    state: !values.state,
    zipCode: !values.zipCode,
  };

  return emptyFields;
};

export default FormValidator;
