import React, { useContext } from "react";
import AppContext from "../components/AppContext";
import Footer from "../components/Footer";
import Header from "../components/Header";
import DataTablePlugin from "../components/plugin/DataTablePlugin";

const EmployeeList = () => {
  const { employees } = useContext(AppContext);

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
    <div className="home-container">
      <Header />
      <main className="home-body">
        <div className="employee-list-container">
          <h1 className="title">Current Employees</h1>
          <DataTablePlugin data={employees} columns={columns} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default EmployeeList;
