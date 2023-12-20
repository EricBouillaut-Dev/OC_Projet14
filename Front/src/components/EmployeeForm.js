import React from "react";
import states from "../datas/states";

function EmployeeForm({ employee, ErrorFields, handleChange }) {
  return (
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
        <option value="Sales">Sales</option>
        <option value="Marketing">Marketing</option>
        <option value="Engineering">Engineering</option>
        <option value="Human Resources">Human Resources</option>
        <option value="Legal">Legal</option>
      </select>
    </form>
  );
}

export default EmployeeForm;
