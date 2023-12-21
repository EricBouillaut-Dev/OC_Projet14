import React, { useState, useEffect } from "react";

const pageSizeOptions = [10, 25, 50, 100];

const compareValues = (a, b, field, sortOrder) => {
  if (!a[field] || !b[field]) return 0;

  if (field === "startDate" || field === "dateOfBirth") {
    const dateA = new Date(a[field]);
    const dateB = new Date(b[field]);
    return sortOrder === "asc" ? dateA - dateB : dateB - dateA;
  }

  const valueA = a[field].toString().toLowerCase();
  const valueB = b[field].toString().toLowerCase();
  if (valueA < valueB) return sortOrder === "asc" ? -1 : 1;
  if (valueA > valueB) return sortOrder === "asc" ? 1 : -1;
  return 0;
};

const EmployeeList = ({ useBackend }) => {
  const [employees, setEmployees] = useState([]);
  const [filteredEmployees, setFilteredEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);
  const [sortField, setSortField] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

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
    setCurrentPage(0); // Réinitialiser la page courante à 0 lorsque pageSize change
  }, [pageSize, searchTerm]);

  useEffect(() => {
    useBackend
      ? loadEmployees()
      : setEmployees(JSON.parse(localStorage.getItem("employees")));
  }, [useBackend]);

  useEffect(() => {
    const filtered = employees
      .filter((employee) =>
        Object.values(employee)
          .join(" ")
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      )
      .sort((a, b) => compareValues(a, b, sortField, sortOrder));
    setFilteredEmployees(filtered);
  }, [searchTerm, employees, sortField, sortOrder]);

  const pageCount = Math.ceil(filteredEmployees.length / pageSize);
  const employeesToShow = filteredEmployees.slice(
    currentPage * pageSize,
    (currentPage + 1) * pageSize
  );

  const handleSort = (field) => {
    const order = field === sortField && sortOrder === "asc" ? "desc" : "asc";
    setSortField(field);
    setSortOrder(order);
  };

  const formatHeader = (header) => {
    switch (header) {
      case "firstName":
        return "First Name";
      case "lastName":
        return "Last Name";
      case "startDate":
        return "Start Date";
      case "dateOfBirth":
        return "Date of Birth";
      case "zipCode":
        return "Zip Code";
      default:
        return header.charAt(0).toUpperCase() + header.slice(1);
    }
  };

  const renderHeader = () => {
    const headers = [
      "firstName",
      "lastName",
      "startDate",
      "department",
      "dateOfBirth",
      "street",
      "city",
      "state",
      "zipCode",
    ];
    return headers.map((header) => (
      <th key={header} onClick={() => handleSort(header)}>
        {formatHeader(header)}
        {sortField === header && (
          <i
            className={`fas fa-sort-${sortOrder === "asc" ? "up" : "down"}`}
          ></i>
        )}
        {sortField !== header && <i className="fas fa-sort"></i>}
      </th>
    ));
  };

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
    <div className="employee-list-container">
      <h1 className="title">Current Employees</h1>
      <div className="search-and-size">
        <div className="search-box">
          <label htmlFor="search">Search:</label>
          <input
            type="text"
            id="search"
            placeholder="..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="page-size-selector">
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
      </div>
      <table className="employee-table">
        <thead>
          <tr>{renderHeader()}</tr>
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
      <div className="pagination-container">
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
