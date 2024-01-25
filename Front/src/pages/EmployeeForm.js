import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import HandleSaveEmployee from "../components/HandleSaveEmployee";
import Header from "../components/Header";
import Modal from "../components/Modal";
import states from "../datas/states";
import CalculateAge from "../utils/CalculateAge";

function EmployeeForm() {
  const [touched, setTouched] = useState({});
  const [modalMessage, setModalMessage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [ErrorFields, setErrorFields] = useState({});
  const [employee, setEmployee] = useState({
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
  }, [employee, touched]);

  const handleBlur = (e) => {
    setTouched({ ...touched, [e.target.id]: true }); // Mettre à jour l'état touched lorsque le champ perd le focus
  };

  const handleChange = (e) => {
    setTouched({ ...touched, [e.target.id]: true }); // Mettre à jour l'état touched lorsque l'utilisateur interagit avec le champ
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
                  <label htmlFor="firstName">First Name *</label>
                  <input
                    type="text"
                    id="firstName"
                    placeholder="Enter first name"
                    value={employee.firstName}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    className={ErrorFields.firstName ? "error-field" : ""}
                  />
                  {touched.firstName && ErrorFields.firstName && (
                    <div className="error-message">
                      First name must be at least 2 characters long.
                    </div>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name *</label>
                  <input
                    type="text"
                    id="lastName"
                    placeholder="Enter last name"
                    value={employee.lastName}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    className={ErrorFields.lastName ? "error-field" : ""}
                  />
                  {touched.lastName && ErrorFields.lastName && (
                    <div className="error-message">
                      Last name must be at least 2 characters long.
                    </div>
                  )}
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="dateOfBirth">Date of Birth *</label>
                  <input
                    type="date"
                    id="dateOfBirth"
                    value={employee.dateOfBirth}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    className={ErrorFields.dateOfBirth ? "error-field" : ""}
                  />
                  {touched.dateOfBirth && ErrorFields.dateOfBirth && (
                    <div className="error-message">
                      {employee.dateOfBirth
                        ? "User must be at least 18 years old."
                        : "Please select a date of birth."}
                    </div>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="startDate">Start Date *</label>
                  <input
                    type="date"
                    id="startDate"
                    value={employee.startDate}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    className={ErrorFields.startDate ? "error-field" : ""}
                  />
                  {touched.startDate && ErrorFields.startDate && (
                    <div className="error-message">
                      Please select a start date.
                    </div>
                  )}
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="department">Department *</label>
                  <select
                    id="department"
                    value={employee.department}
                    onBlur={handleBlur}
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
                  {touched.department && ErrorFields.department && (
                    <div className="error-message">
                      Please select a department.
                    </div>
                  )}
                </div>
              </div>
              <fieldset className="address">
                <legend>Address</legend>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="street">Street *</label>
                    <input
                      type="text"
                      id="street"
                      placeholder="Enter street"
                      value={employee.street}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      className={ErrorFields.street ? "error-field" : ""}
                    />
                    {touched.street && ErrorFields.street && (
                      <div className="error-message">
                        Address must be at least 2 characters long.
                      </div>
                    )}
                  </div>
                  <div className="form-group">
                    <label htmlFor="city">City *</label>
                    <input
                      type="text"
                      id="city"
                      placeholder="Enter city"
                      value={employee.city}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      className={ErrorFields.city ? "error-field" : ""}
                    />
                    {touched.city && ErrorFields.city && (
                      <div className="error-message">
                        City must be at least 2 characters long.
                      </div>
                    )}
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="state">State *</label>
                    <select
                      id="state"
                      value={employee.state}
                      onBlur={handleBlur}
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
                    {touched.state && ErrorFields.state && (
                      <div className="error-message">
                        Please select a state.
                      </div>
                    )}
                  </div>
                  <div className="form-group">
                    <label htmlFor="zipCode">Zip Code *</label>
                    <input
                      type="number"
                      id="zipCode"
                      placeholder="Enter zip code"
                      value={employee.zipCode}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      className={ErrorFields.zipCode ? "error-field" : ""}
                    />
                    {touched.zipCode && ErrorFields.zipCode && (
                      <div className="error-message">
                        Zip code must be at least 2 digits long.
                      </div>
                    )}
                  </div>
                </div>
              </fieldset>
            </form>
            <div className="form-actions">
              <HandleSaveEmployee
                employee={employee}
                setEmployee={setEmployee}
                ErrorFields={ErrorFields}
                setModalMessage={setModalMessage}
                setIsError={setIsError}
                setShowModal={setShowModal}
                setTouched={setTouched}
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
