import React, { useState, useEffect } from "react";

const pageSizeOptions = [10, 25, 50, 100];

const EmployeeList = ({ useBackend }) => {
  const [employees, setEmployees] = useState([]);
  const [filteredEmployees, setFilteredEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);

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

  useEffect(() => {
    const filtered = employees.filter((employee) =>
      Object.values(employee)
        .join(" ")
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    );
    setFilteredEmployees(filtered);
  }, [searchTerm, employees]);

  const pageCount = Math.ceil(filteredEmployees.length / pageSize);
  const employeesToShow = filteredEmployees.slice(
    currentPage * pageSize,
    (currentPage + 1) * pageSize
  );

  const renderPaginationButtons = () => {
    let buttons = [];
    let startPage, endPage;

    if (pageCount <= 5) {
      startPage = 0;
      endPage = pageCount;
    } else {
      // Afficher 5 onglets au début
      if (currentPage < 4) {
        startPage = 0;
        endPage = 5;
        // Afficher 5 onglets à la fin
      } else if (currentPage > pageCount - 5) {
        startPage = pageCount - 5;
        endPage = pageCount;
        // Afficher 3 onglets entre les points de suspension
      } else {
        startPage = currentPage - 1;
        endPage = currentPage + 2;
      }
    }

    // Premier groupe de points de suspension
    if (startPage > 0) {
      buttons.push(
        <button key="start" onClick={() => setCurrentPage(0)}>
          1
        </button>
      );
      buttons.push(<span key="ellipsis1">...</span>);
    }

    // Onglets numérotés
    for (let i = startPage; i < endPage; i++) {
      buttons.push(
        <button
          key={i}
          onClick={() => setCurrentPage(i)}
          disabled={currentPage === i}
        >
          {i + 1}
        </button>
      );
    }

    // Deuxième groupe de points de suspension
    if (endPage < pageCount) {
      buttons.push(<span key="ellipsis2">...</span>);
      buttons.push(
        <button key="end" onClick={() => setCurrentPage(pageCount - 1)}>
          {pageCount}
        </button>
      );
    }

    return buttons;
  };

  return (
    <div>
      <h1>Current Employees</h1>
      <div>
        <label htmlFor="search">Search:</label>
        <input
          type="text"
          id="search"
          placeholder="Enter name to search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
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
          Showing {Math.max(1, currentPage * pageSize + 1)} to{" "}
          {Math.min(filteredEmployees.length, (currentPage + 1) * pageSize)} of{" "}
          {filteredEmployees.length} entries
        </p>
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 0}
        >
          Previous
        </button>
        {renderPaginationButtons()}
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage >= pageCount - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default EmployeeList;
