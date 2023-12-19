import React, { useState } from "react";
import { Link } from "react-router-dom";
import states from "../datas/states";
import FormValidator from "../components/FormValidator";

function Home({ useBackend }) {
  const [modalMessage, setModalMessage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [emptyFields, setEmptyFields] = useState({});

  const handleSaveEmployee = () => {
    const employee = {
      firstName: document.getElementById("first-name").value,
      lastName: document.getElementById("last-name").value,
      dateOfBirth: document.getElementById("date-of-birth").value,
      startDate: document.getElementById("start-date").value,
      department: document.getElementById("department").value,
      street: document.getElementById("street").value,
      city: document.getElementById("city").value,
      state: document.getElementById("state").value,
      zipCode: document.getElementById("zip-code").value,
    };

    const newEmptyFields = FormValidator({ values: employee });
    setEmptyFields(newEmptyFields);
    const allFieldsFilled = Object.values(newEmptyFields).every(
      (value) => !value
    );

    if (allFieldsFilled) {
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
        setShowModal(true);
      }
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
          <label htmlFor="first-name">First Name</label>
          <input
            type="text"
            id="first-name"
            className={emptyFields.firstName ? "empty-field" : ""}
          />
          {emptyFields.firstName && (
            <>
              <br />
              <span className="error-message">
                Ce champs ne doit pas être vide
              </span>
            </>
          )}
          <label htmlFor="last-name">Last Name</label>
          <input
            type="text"
            id="last-name"
            className={emptyFields.lastName ? "empty-field" : ""}
          />
          {emptyFields.lastName && (
            <>
              <br />
              <span className="error-message">
                Ce champ ne doit pas être vide
              </span>
            </>
          )}
          <label htmlFor="date-of-birth">Date of Birth</label>
          <input
            id="date-of-birth"
            type="date"
            className={emptyFields.dateOfBirth ? "empty-field" : ""}
          />
          {emptyFields.dateOfBirth && (
            <>
              <br />
              <span className="error-message">
                Ce champ ne doit pas être vide
              </span>
            </>
          )}
          <label htmlFor="start-date">Start Date</label>
          <input
            id="start-date"
            type="date"
            className={emptyFields.startDate ? "empty-field" : ""}
          />
          {emptyFields.startDate && (
            <>
              <br />
              <span className="error-message">
                Ce champ ne doit pas être vide
              </span>
            </>
          )}
          <fieldset className="address">
            <legend>Address</legend>
            <label htmlFor="street">Street</label>
            <input
              id="street"
              type="text"
              className={emptyFields.street ? "empty-field" : ""}
            />
            {emptyFields.street && (
              <>
                <br />
                <span className="error-message">
                  Ce champ ne doit pas être vide
                </span>
              </>
            )}
            <label htmlFor="city">City</label>
            <input
              id="city"
              type="text"
              className={emptyFields.city ? "empty-field" : ""}
            />
            {emptyFields.city && (
              <>
                <br />
                <span className="error-message">
                  Ce champ ne doit pas être vide
                </span>
              </>
            )}
            <label htmlFor="state">State</label>
            <select id="state">
              {states.map((state) => (
                <option key={state.abbreviation} value={state.abbreviation}>
                  {state.name}
                </option>
              ))}
            </select>
            <label htmlFor="zip-code">Zip Code</label>
            <input
              id="zip-code"
              type="number"
              className={emptyFields.zipCode ? "empty-field" : ""}
            />
            {emptyFields.zipCode && (
              <>
                <br />
                <span className="error-message">
                  Ce champ ne doit pas être vide
                </span>
              </>
            )}
          </fieldset>
          <label htmlFor="department">Department</label>
          <select id="department">
            <option>Sales</option>
            <option>Marketing</option>
            <option>Engineering</option>
            <option>Human Resources</option>
            <option>Legal</option>
          </select>
        </form>
        <button onClick={handleSaveEmployee}>Save</button>
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
