import React, { useState, useEffect } from "react";

const DataTablePlugin = ({ data, columns }) => {
  const employees = data;
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

  const [filteredEmployees, setFilteredEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);
  const [sortField, setSortField] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    setCurrentPage(0); // Réinitialiser la page courante à 0 lorsque pageSize change
  }, [pageSize, searchTerm]);

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

  const renderHeader = () => {
    return columns.map((column) => (
      <th key={column.data} onClick={() => handleSort(column.data)}>
        {column.title}
      </th>
    ));
  };

  const isDate = (value) => {
    if (Object.prototype.toString.call(value) === "[object Date]") {
      return !isNaN(value.getTime());
    }
    if (typeof value === "string" || typeof value === "number") {
      var date = new Date(value);
      return !isNaN(date.getTime());
    }
    return false;
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
    <>
      <div className="search-and-size">
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
        <div className="search-box">
          <label htmlFor="search">Search:</label>
          <input
            type="text"
            id="search"
            // placeholder="..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      <div className="employee-table-container">
        <table className="employee-table">
          <thead>
            <tr>{renderHeader()}</tr>
          </thead>
          <tbody>
            {employeesToShow.map((employee) => (
              <tr key={employee.id}>
                {columns.map((column) => (
                  <td key={`${employee.id}-${column.data}`}>
                    {isDate(employee[column.data])
                      ? new Date(employee[column.data]).toLocaleDateString()
                      : employee[column.data]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="pagination-container">
        <p>
          Showing {Math.max(1, currentPage * pageSize + 1)} to{" "}
          {Math.min(filteredEmployees.length, (currentPage + 1) * pageSize)} of{" "}
          {filteredEmployees.length} entries
        </p>
        <div className="bloc-nav">
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
    </>
  );
};

export default DataTablePlugin;
