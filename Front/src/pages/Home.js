import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Modal from "../components/Modal";
import EmployeeForm from "../components/EmployeeForm";

function Home({ useBackend }) {
  const [modalMessage, setModalMessage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [ErrorFields, setErrorFields] = useState({});
  const [employee, setEmployee] = useState({
    firstName: "John",
    lastName: "Smith",
    dateOfBirth: "2000-01-01",
    startDate: "2020-01-01",
    department: "Sales",
    street: "232 Park Avenue",
    city: "Houston",
    state: "TX",
    zipCode: 77002,
  });

  const calculateAge = (dateOfBirth) => {
    const today = new Date();
    const birthDate = new Date(dateOfBirth);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  useEffect(() => {
    const newErrorFields = {};
    Object.keys(employee).forEach((key) => {
      if (key === "dateOfBirth") {
        const age = calculateAge(employee.dateOfBirth);
        newErrorFields[key] = !employee.dateOfBirth || age < 18;
      } else {
        newErrorFields[key] = employee[key].length < 2;
      }
    });
    setErrorFields(newErrorFields);
  }, [employee]);

  const userExists = (newEmployee) => {
    const userKey = Object.values(newEmployee).join("");
    const employees = JSON.parse(localStorage.getItem("employees")) || [];
    return employees.some(
      (employee) => Object.values(employee).join("") === userKey
    );
  };

  const handleSaveEmployee = () => {
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
      // Show error message if all fields are not filled
      setModalMessage("Veuillez remplir correctement tous les champs.");
      setIsError(true);
      setShowModal(true);
    }
  };

  const closeModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setShowModal(false);
      setIsClosing(false);
    }, 200);
  };

  return (
    <div>
      <div className="title">
        <h1>HRnet</h1>
      </div>
      <div className="container">
        <Link to="/employee-list">View Current Employees</Link>
        <EmployeeForm
          employee={employee}
          ErrorFields={ErrorFields}
          handleChange={(e) =>
            setEmployee({ ...employee, [e.target.id]: e.target.value })
          }
        />
        <button
          className="send-button"
          type="button"
          onClick={handleSaveEmployee}
        >
          Save
        </button>
      </div>
      <Modal
        showModal={showModal}
        isError={isError}
        isClosing={isClosing}
        modalMessage={modalMessage}
        closeModal={closeModal}
      />
    </div>
  );
}

export default Home;
