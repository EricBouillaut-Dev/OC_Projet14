import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import HandleSaveEmployee from "../components/HandleSaveEmployee";
import Header from "../components/Header";
import Modal from "../components/Modal";
import states from "../datas/states";
import CalculateAge from "../utils/CalculateAge";

function EmployeeForm() {
  const [modalMessage, setModalMessage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [ErrorFields, setErrorFields] = useState({});
  const [employee, setEmployee] = useState({
    firstName: "Patrick",
    lastName: "Ward",
    dateOfBirth: "",
    startDate: "",
    department: "",
    street: "160 Michael Garden",
    city: "Singhberg",
    state: "",
    zipCode: "65578",
  });

  useEffect(() => {
    const newErrorFields = {};
    Object.keys(employee).forEach((key) => {
      if (key === "dateOfBirth") {
        const age = CalculateAge(employee.dateOfBirth);
        newErrorFields[key] = !employee.dateOfBirth || age < 18;
      } else {
        newErrorFields[key] = !employee[key] || employee[key].length < 2;
      }
    });

    // Gestion de l'erreur pour le champ 'state'
    newErrorFields.state = !employee.state || employee.state === "Select";

    // Gestion de l'erreur pour le champ 'department'
    newErrorFields.department =
      !employee.department || employee.department === "Select";

    setErrorFields(newErrorFields);
  }, [employee]);

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.id]: e.target.value });
  };

  const closeModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setShowModal(false);
      setIsClosing(false);
    }, 200);
  };

  return (
    <div className="home-container">
      <Header />
      <main className="home-body">
        <div className="container">
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
                    className={ErrorFields.department ? "error-field" : ""}
                  >
                    <option value="Select">Select</option>
                    <option value="Sales">Sales</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Engineering">Engineering</option>
                    <option value="Human Resources">Human Resources</option>
                    <option value="Legal">Legal</option>
                  </select>
                  {ErrorFields.department && (
                    <div className="error-message">
                      Veuillez sélectionner un département.
                    </div>
                  )}
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
                    <select
                      id="state"
                      value={employee.state}
                      onChange={handleChange}
                      className={ErrorFields.state ? "error-field" : ""}
                    >
                      <option value="Select">Select</option>
                      {states.map((state) => (
                        <option
                          key={state.abbreviation}
                          value={state.abbreviation}
                        >
                          {state.name}
                        </option>
                      ))}
                    </select>
                    {ErrorFields.state && (
                      <div className="error-message">
                        Veuillez sélectionner un état.
                      </div>
                    )}
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
            <div className="form-actions">
              <HandleSaveEmployee
                employee={employee}
                ErrorFields={ErrorFields}
                setModalMessage={setModalMessage}
                setIsError={setIsError}
                setShowModal={setShowModal}
              />
            </div>
          </div>
        </div>
        <Modal
          showModal={showModal}
          isError={isError}
          isClosing={isClosing}
          modalMessage={modalMessage}
          closeModal={closeModal}
        />
      </main>
      <Footer />
    </div>
  );
}

export default EmployeeForm;
