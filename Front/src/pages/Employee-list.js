import React, { useState, useEffect } from "react";
import DataTablePlugin from "../components/plugin/DataTablePlugin";

const EmployeeList = ({ useBackend }) => {
  const [employees, setEmployees] = useState([]);

  const loadEmployees = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/users");
      const data = await response.json();
      setEmployees(data.data);
    } catch (error) {
      console.error("Erreur lors du chargement depuis le backend", error);
    }
  };

  useEffect(() => {
    useBackend
      ? loadEmployees()
      : setEmployees(JSON.parse(localStorage.getItem("employees")));
  }, [useBackend]);

  const columns = [
    { title: "First Name", data: "firstName" },
    { title: "Last Name", data: "lastName" },
    { title: "Start Date", data: "startDate" },
    { title: "Department", data: "department" },
    { title: "Date of Birth", data: "dateOfBirth" },
    { title: "Street", data: "street" },
    { title: "City", data: "city" },
    { title: "State", data: "state" },
    { title: "Zip Code", data: "zipCode" },
  ];

  return (
    <div className="employee-list-container">
      <h1 className="title">Current Employees</h1>
      <DataTablePlugin data={employees} columns={columns} />
    </div>
  );
};

export default EmployeeList;
