import React, { useEffect, useState } from "react";
import "./DataTablePlugin.css";

const detectDateFormat = (dateString) => {
  const formats = {
    "dd/mm/yyyy": /^(0?[1-9]|[12][0-9]|3[01])\/(0?[1-9]|1[012])\/\d{4}$/,
    "mm/dd/yyyy": /^(0?[1-9]|1[012])\/(0?[1-9]|[12][0-9]|3[01])\/\d{4}$/,
    "yyyy/mm/dd": /^\d{4}\/(0?[1-9]|1[012])\/(0?[1-9]|[12][0-9]|3[01])$/,
    "dd-mm-yyyy": /^(0?[1-9]|[12][0-9]|3[01])-(0?[1-9]|1[012])-\d{4}$/,
    "mm-dd-yyyy": /^(0?[1-9]|1[012])-(0?[1-9]|[12][0-9]|3[01])-\d{4}$/,
    "yyyy-mm-dd": /^\d{4}-(0?[1-9]|1[012])-(0?[1-9]|[12][0-9]|3[01])$/,
    "dd.mm.yyyy": /^(0?[1-9]|[12][0-9]|3[01])\.(0?[1-9]|1[012])\.\d{4}$/,
    "mm.dd.yyyy": /^(0?[1-9]|1[012])\.(0?[1-9]|[12][0-9]|3[01])\.\d{4}$/,
    "yyyy.mm.dd": /^\d{4}\.(0?[1-9]|1[012])\.(0?[1-9]|[12][0-9]|3[01])$/,
    ISO: /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\+\d{4}$/,
  };

  for (const format in formats) {
    if (formats[format].test(dateString)) {
      return format;
    }
  }
  return null;
};

const convertDate = (dateString) => {
  const format = detectDateFormat(dateString);
  if (!format) return null;

  const parts = dateString.split(/[-/.T:+]/);
  switch (format) {
    case "dd/mm/yyyy":
    case "dd-mm-yyyy":
    case "dd.mm.yyyy":
      return `${parts[2]}-${parts[1].padStart(2, "0")}-${parts[0].padStart(
        2,
        "0"
      )}`;
    case "mm/dd/yyyy":
    case "mm-dd-yyyy":
    case "mm.dd.yyyy":
      return `${parts[2]}-${parts[0].padStart(2, "0")}-${parts[1].padStart(
        2,
        "0"
      )}`;
    case "yyyy/mm/dd":
    case "yyyy-mm-dd":
    case "yyyy.mm.dd":
    case "ISO":
      return `${parts[0]}-${parts[1].padStart(2, "0")}-${parts[2].padStart(
        2,
        "0"
      )}`;
    default:
      return dateString;
  }
};

const compareValues = (a, b, field, sortOrder) => {
  if (!a[field] || !b[field]) return 0;

  const dateA = convertDate(a[field]);
  const dateB = convertDate(b[field]);

  if (dateA && dateB) {
    return sortOrder === "asc"
      ? new Date(dateA) - new Date(dateB)
      : new Date(dateB) - new Date(dateA);
  }

  const valueA = a[field].toString().toLowerCase();
  const valueB = b[field].toString().toLowerCase();
  return valueA < valueB
    ? sortOrder === "asc"
      ? -1
      : 1
    : valueA > valueB
    ? sortOrder === "asc"
      ? 1
      : -1
    : 0;
};

const DataTablePlugin = ({ data, columns }) => {
  const pageSizeOptions = [10, 25, 50, 100];

  const [filteredItems, setFilteredItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);
  const [sortField, setSortField] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    setCurrentPage(0);
  }, [pageSize, searchTerm]);

  useEffect(() => {
    const filtered = data
      .filter((item) =>
        Object.values(item)
          .join(" ")
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      )
      .sort((a, b) => compareValues(a, b, sortField, sortOrder));
    setFilteredItems(filtered);
  }, [searchTerm, data, sortField, sortOrder]);

  const pageCount = Math.ceil(filteredItems.length / pageSize);
  const itemsToShow = filteredItems.slice(
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
        {sortField === column.data && (
          <i
            className={`fas fa-sort-${sortOrder === "asc" ? "up" : "down"}`}
          ></i>
        )}
        {sortField !== column.data && <i className="fas fa-sort"></i>}
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
      if (currentPage < 4) {
        startPage = 0;
        endPage = 5;
      } else if (currentPage > pageCount - 5) {
        startPage = pageCount - 5;
        endPage = pageCount;
      } else {
        startPage = currentPage - 1;
        endPage = currentPage + 2;
      }
    }

    if (startPage > 0) {
      buttons.push(
        <button key="start" onClick={() => setCurrentPage(0)}>
          1
        </button>
      );
      buttons.push(<span key="ellipsis1">...</span>);
    }

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
          Afficher
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
          entrées
        </div>
        <div className="search-box">
          <label htmlFor="search">Recherche:</label>
          <input
            type="text"
            id="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      <div className="item-table-container">
        <table className="item-table">
          <thead>
            <tr>{renderHeader()}</tr>
          </thead>
          <tbody>
            {itemsToShow.map((item, index) => (
              <tr key={item.id || `itemId-${index}`}>
                {columns.map((column) => (
                  <td key={`${item.id || `itemId-${index}`}-${column.data}`}>
                    {item[column.data]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="pagination-container">
        <p>
          Affichage de {Math.max(1, currentPage * pageSize + 1)} à{" "}
          {Math.min(filteredItems.length, (currentPage + 1) * pageSize)} sur{" "}
          {filteredItems.length} entrées
        </p>
        <div className="bloc-nav">
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 0}
          >
            Précédent
          </button>
          {renderPaginationButtons()}
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage >= pageCount - 1}
          >
            Suivant
          </button>
        </div>
      </div>
    </>
  );
};

export default DataTablePlugin;
