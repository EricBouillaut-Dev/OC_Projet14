import React, { useState, useEffect } from "react";

const pageSizeOptions = [10, 25, 50, 100];

const EmployeeList = ({ useBackend }) => {
  const [employees, setEmployees] = useState([]);
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);

  const indexOfFirstEmployee = currentPage * pageSize;
  const indexOfLastEmployee = indexOfFirstEmployee + pageSize;
  const totalEmployees = employees.length;

  const loadFromBackend = () => {
    fetch("http://localhost:3001/api/users")
      .then((response) => response.json())
      .then((data) => setEmployees(data.data))
      .catch((error) =>
        console.error("Erreur lors du chargement depuis le backend", error)
      );
  };

  const loadFromLocalStorage = () => {
    const localData = localStorage.getItem("employees");
    setEmployees(JSON.parse(localData));
  };

  useEffect(() => {
    useBackend ? loadFromBackend() : loadFromLocalStorage();
  }, [useBackend]);

  const pageCount = Math.ceil(employees.length / pageSize);
  const employeesToShow = employees.slice(
    currentPage * pageSize,
    (currentPage + 1) * pageSize
  );

  return (
    <div>
      <h1>Current Employees</h1>
      <div>
        Show
        <select
          value={pageSize}
          onChange={(e) => setPageSize(Number(e.target.value))}
        >
          {pageSizeOptions.map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>
        entries
      </div>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Start Date</th>
            <th>Department</th>
            <th>Date of Birth</th>
            <th>Street</th>
            <th>City</th>
            <th>State</th>
            <th>Zip Code</th>
          </tr>
        </thead>
        <tbody>
          {employeesToShow.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{new Date(employee.startDate).toLocaleDateString()}</td>
              <td>{employee.department}</td>
              <td>{new Date(employee.dateOfBirth).toLocaleDateString()}</td>
              <td>{employee.street}</td>
              <td>{employee.city}</td>
              <td>{employee.state}</td>
              <td>{employee.zipCode}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <p>
          Showing {Math.max(1, indexOfFirstEmployee + 1)} to{" "}
          {Math.min(totalEmployees, indexOfLastEmployee)} of {totalEmployees}{" "}
          entries
        </p>
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 0}
        >
          Previous
        </button>
        {Array.from({ length: pageCount }, (_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index)}
            disabled={currentPage === index}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === pageCount - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default EmployeeList;
