import React, { useContext } from "react";
import AppContext from "./AppContext";

const HandleSaveEmployee = ({
  employee,
  setEmployee,
  ErrorFields,
  setModalMessage,
  setIsError,
  setShowModal,
  setTouched,
}) => {
  const { useBackend, employees, addEmployeeToContext } =
    useContext(AppContext); // Use AppContext

  const userExists = (newEmployee) => {
    const userKey = Object.values(newEmployee).join("").toLowerCase();
    return employees.some(
      (emp) => Object.values(emp).join("").toLowerCase() === userKey
    );
  };

  const resetForm = () => {
    setEmployee({
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      startDate: "",
      department: "",
      street: "",
      city: "",
      state: "",
      zipCode: "",
    });
    setTouched({});
  };

  const saveEmployee = async () => {
    const allFieldsFilled = !Object.values(ErrorFields).some((value) => value);
    if (!allFieldsFilled) {
      setModalMessage("Please fill in all fields correctly.");
      setIsError(true);
      setShowModal(true);
      setTouched({
        firstName: true,
        lastName: true,
        dateOfBirth: true,
        startDate: true,
        department: true,
        street: true,
        city: true,
        state: true,
        zipCode: true,
      });
      return;
    }

    if (allFieldsFilled) {
      const startDateParts = employee.startDate.split("-");
      const newStartDate = `${startDateParts[2]}/${startDateParts[1]}/${startDateParts[0]}`;

      const dateOfBirthParts = employee.dateOfBirth.split("-");
      const newDateOfBirth = `${dateOfBirthParts[2]}/${dateOfBirthParts[1]}/${dateOfBirthParts[0]}`;

      // Convert dates to strings
      const employeeToSave = {
        ...employee,
        startDate: newStartDate,
        dateOfBirth: newDateOfBirth,
      };

      if (userExists(employeeToSave)) {
        setModalMessage(
          `The user ${employee.firstName} ${employee.lastName} already exists.`
        );
        setIsError(true);
        setShowModal(true);
        return;
      }

      if (useBackend) {
        try {
          const response = await fetch("http://localhost:3001/api/users", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(employeeToSave),
          });

          const isError = !response.ok;
          setIsError(isError);
          const data = await response.json();
          setModalMessage(data.message);
          setShowModal(true);

          if (!isError) {
            addEmployeeToContext(employeeToSave);
            resetForm();
          }
        } catch (error) {
          console.error(error);
          console.log("Error while saving");
        }
      } else {
        addEmployeeToContext(employeeToSave);
        setModalMessage(
          `The user ${employee.firstName} ${employee.lastName} has been created successfully.`
        );
        setIsError(false);
        setShowModal(true);
        resetForm();
      }
    }
  };

  return (
    <button className="save-button" type="button" onClick={saveEmployee}>
      Save
    </button>
  );
};

export default HandleSaveEmployee;
