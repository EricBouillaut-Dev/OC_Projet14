import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Modal from "../components/Modal";
import EmployeeForm from "../components/EmployeeForm";
import CalculateAge from "../utils/CalculateAge";
import HandleSaveEmployee from "../components/HandleSaveEmployee";

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

  useEffect(() => {
    const newErrorFields = {};
    Object.keys(employee).forEach((key) => {
      if (key === "dateOfBirth") {
        const age = CalculateAge(employee.dateOfBirth);
        newErrorFields[key] = !employee.dateOfBirth || age < 18;
      } else {
        newErrorFields[key] = employee[key].length < 2;
      }
    });
    setErrorFields(newErrorFields);
  }, [employee]);

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
        <HandleSaveEmployee
          employee={employee}
          ErrorFields={ErrorFields}
          setModalMessage={setModalMessage}
          setIsError={setIsError}
          setShowModal={setShowModal}
          useBackend={useBackend}
        />
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
