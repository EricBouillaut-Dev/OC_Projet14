import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { AppProvider } from "../components/AppContext";
import "../css/app.css";
import mockEmployees from "../datas/mock-users";
import EmployeeList from "../pages/Employee-list";
import EmployeeForm from "../pages/EmployeeForm";
import Error from "../pages/Error";
import Home from "../pages/Home";

const backend = true;

function App() {
  const [useBackend] = useState(backend);
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (useBackend) {
        try {
          const response = await fetch("http://localhost:3001/api/users");
          const data = await response.json();
          setEmployees(data.data);
        } catch (error) {
          console.error("Failed to fetch data from backend:", error);
        }
      } else {
        setEmployees(mockEmployees);
      }
    };

    fetchData();
  }, [useBackend]);

  const addEmployeeToContext = (employee) => {
    setEmployees((prevEmployees) => [...prevEmployees, employee]);
  };

  return (
    <AppProvider
      value={{
        useBackend,
        employees,
        addEmployeeToContext,
      }}
    >
      <Routes>
        <Route path="/" element={<Home useBackend={useBackend} />} />
        <Route path="/employee-form" element={<EmployeeForm />} />
        <Route
          path="/employee-list"
          element={<EmployeeList useBackend={useBackend} />}
        />
        <Route path="*" element={<Error />} />
      </Routes>
    </AppProvider>
  );
}

export default App;
