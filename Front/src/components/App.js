import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import EmployeeList from "../pages/Employee-list";
import "../css/app.css";
import Error from "../pages/Error";
import mockUsers from "../datas/mock-users";

function App() {
  const useBackend = true;

  if (!useBackend) {
    const localData = localStorage.getItem("employees");
    if (!localData) {
      localStorage.setItem("employees", JSON.stringify(mockUsers));
    }
  } else {
    localStorage.removeItem("employees");
  }

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home useBackend={useBackend} />} />
        <Route
          path="/employee-list"
          element={<EmployeeList useBackend={useBackend} />}
        />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
