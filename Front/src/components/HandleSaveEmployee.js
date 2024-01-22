import React, { useContext } from "react";
import AppContext from "./AppContext";

const HandleSaveEmployee = ({
  employee,
  ErrorFields,
  setModalMessage,
  setIsError,
  setShowModal,
}) => {
  const { useBackend, employees, addEmployeeToContext } =
    useContext(AppContext); // Use AppContext

  const userExists = (newEmployee) => {
    const userKey = Object.values(newEmployee).join("").toLowerCase();
    return employees.some(
      (emp) => Object.values(emp).join("").toLowerCase() === userKey
    );
  };

  const saveEmployee = async () => {
    const allFieldsFilled = !Object.values(ErrorFields).some((value) => value);

    if (allFieldsFilled) {
      if (userExists(employee)) {
        setModalMessage(
          `L'utilisateur ${employee.firstName} ${employee.lastName} existe déjà.`
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
            body: JSON.stringify(employee),
          });

          const isError = !response.ok;
          setIsError(isError);
          const data = await response.json();
          setModalMessage(data.message);
          setShowModal(true);

          if (!isError) {
            addEmployeeToContext(employee);
          }
        } catch (error) {
          console.error(error);
          console.log("Erreur lors de la sauvegarde");
        }
      } else {
        addEmployeeToContext(employee);
        setModalMessage(
          `L'utilisateur ${employee.firstName} ${employee.lastName} a bien été créé.`
        );
        setIsError(false);
        setShowModal(true);
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
