import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import states from "../datas/states";

function Home({ useBackend }) {
  const [modalMessage, setModalMessage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [ErrorFields, setErrorFields] = useState({});
  const [employee, setEmployee] = useState({
    firstName: "John",
    lastName: "Smith",
    dateOfBirth: "01/01/1970",
    startDate: "01/01/2000",
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

  const handleChange = (event) => {
    setEmployee({ ...employee, [event.target.id]: event.target.value });
  };

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
        <h2>Create Employee</h2>
        <form id="create-employee">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            value={employee.firstName}
            onChange={handleChange}
            className={ErrorFields.firstName ? "error-field" : ""}
          />
          {ErrorFields.firstName && (
            <div className="error-message">
              Le prénom doit contenir au moins 2 caractères.
            </div>
          )}

          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            value={employee.lastName}
            onChange={handleChange}
            className={ErrorFields.lastName ? "error-field" : ""}
          />
          {ErrorFields.lastName && (
            <div className="error-message">
              Le nom doit contenir au moins 2 caractères.
            </div>
          )}

          <label htmlFor="dateOfBirth">Date of Birth</label>
          <input
            type="date"
            id="dateOfBirth"
            value={employee.dateOfBirth}
            onChange={handleChange}
            className={ErrorFields.dateOfBirth ? "error-field" : ""}
          />
          {ErrorFields.dateOfBirth && (
            <div className="error-message">
              {employee.dateOfBirth
                ? "L'utilisateur doit être majeur (18 ans ou plus)."
                : "Veuillez sélectionner une date de naissance."}
            </div>
          )}

          <label htmlFor="startDate">Start Date</label>
          <input
            type="date"
            id="startDate"
            value={employee.startDate}
            onChange={handleChange}
            className={ErrorFields.startDate ? "error-field" : ""}
          />
          {ErrorFields.startDate && (
            <div className="error-message">
              Veuillez sélectionner une date de début.
            </div>
          )}

          <fieldset className="address">
            <legend>Address</legend>

            <label htmlFor="street">Street</label>
            <input
              type="text"
              id="street"
              value={employee.street}
              onChange={handleChange}
              className={ErrorFields.street ? "error-field" : ""}
            />
            {ErrorFields.street && (
              <div className="error-message">
                L'adresse doit contenir au moins 2 caractères.
              </div>
            )}

            <label htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              value={employee.city}
              onChange={handleChange}
              className={ErrorFields.city ? "error-field" : ""}
            />
            {ErrorFields.city && (
              <div className="error-message">
                La ville doit contenir au moins 2 caractères.
              </div>
            )}

            <label htmlFor="state">State</label>
            <select id="state" value={employee.state} onChange={handleChange}>
              {states.map((state) => (
                <option key={state.abbreviation} value={state.abbreviation}>
                  {state.name}
                </option>
              ))}
            </select>

            <label htmlFor="zipCode">Zip Code</label>
            <input
              type="number"
              id="zipCode"
              value={employee.zipCode}
              onChange={handleChange}
              className={ErrorFields.zipCode ? "error-field" : ""}
            />
            {ErrorFields.zipCode && (
              <div className="error-message">
                Le code postal doit contenir au moins 2 chiffres.
              </div>
            )}
          </fieldset>

          <label htmlFor="department">Department</label>
          <select
            id="department"
            value={employee.department}
            onChange={handleChange}
          >
            {/* Options de départements, ajuster selon les données disponibles */}
            <option value="Sales">Sales</option>
            <option value="Marketing">Marketing</option>
            <option value="Engineering">Engineering</option>
            <option value="Human Resources">Human Resources</option>
            <option value="Legal">Legal</option>
          </select>

          <button type="button" onClick={handleSaveEmployee}>
            Save
          </button>
        </form>
      </div>
      {showModal && (
        <div className="modal">
          <div
            className={`modal-content ${
              isError ? "modal-error" : "modal-success"
            } ${isClosing ? "modal-exit" : ""}`}
          >
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <p>{modalMessage}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
