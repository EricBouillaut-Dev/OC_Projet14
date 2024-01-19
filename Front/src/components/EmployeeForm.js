import React from "react";
import states from "../datas/states";

function EmployeeForm({ employee, ErrorFields, handleChange }) {
  return (
    <div className="employee-form-container">
      <h2>Create Employee</h2>
      <form id="create-employee">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="firstName">Prénom *</label>
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
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Nom *</label>
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
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="dateOfBirth">Date de naissance *</label>
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
          </div>
          <div className="form-group">
            <label htmlFor="startDate">Date de début *</label>
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
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="department">Département *</label>
            <select
              id="department"
              value={employee.department}
              onChange={handleChange}
            >
              <option value="">Sélectionnez</option>
              <option value="Sales">Sales</option>
              <option value="Marketing">Marketing</option>
              <option value="Engineering">Engineering</option>
              <option value="Human Resources">Human Resources</option>
              <option value="Legal">Legal</option>
            </select>
          </div>
        </div>
        <fieldset className="address">
          <legend>Adresse</legend>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="street">Rue *</label>
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
            </div>
            <div className="form-group">
              <label htmlFor="city">Ville *</label>
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
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="state">État *</label>
              <select id="state" value={employee.state} onChange={handleChange}>
                <option value="">Sélectionnez</option>
                {states.map((state) => (
                  <option key={state.abbreviation} value={state.abbreviation}>
                    {state.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="zipCode">Code Postal *</label>
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
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default EmployeeForm;
