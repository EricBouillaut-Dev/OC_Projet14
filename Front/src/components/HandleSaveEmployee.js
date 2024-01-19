import React from "react";

const HandleSaveEmployee = ({
  employee,
  ErrorFields,
  setModalMessage,
  setIsError,
  setShowModal,
  useBackend,
}) => {
  const userExists = (newEmployee) => {
    const userKey = Object.values(newEmployee).join("");
    const employees = JSON.parse(localStorage.getItem("employees")) || [];
    return employees.some((emp) => Object.values(emp).join("") === userKey);
  };

  const saveEmployee = () => {
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
        fetch("http://localhost:3001/api/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(employee),
        })
          .then((response) => {
            const isError = !response.ok;
            setIsError(isError);
            return response.json().then((data) => ({ data, isError }));
          })
          .then(({ data, isError }) => {
            setModalMessage(
              isError
                ? data.message
                : `L'utilisateur ${employee.firstName} ${employee.lastName} a bien été créé.`
            );
            setShowModal(true);
          })
          .catch(() => {
            setModalMessage(
              "Une erreur est survenue lors de la communication avec le Backend."
            );
            setIsError(true);
            setShowModal(true);
          });
      } else {
        const employees = JSON.parse(localStorage.getItem("employees")) || [];
        employees.push(employee);
        localStorage.setItem("employees", JSON.stringify(employees));
        setModalMessage(
          `L'utilisateur ${employee.firstName} ${employee.lastName} a bien été créé.`
        );
        setIsError(false);
        setShowModal(true);
      }
    } else {
      setModalMessage("Veuillez remplir correctement tous les champs.");
      setIsError(true);
      setShowModal(true);
    }
  };

  return (
    <button className="send-button" type="button" onClick={saveEmployee}>
      Save
    </button>
  );
};

export default HandleSaveEmployee;
