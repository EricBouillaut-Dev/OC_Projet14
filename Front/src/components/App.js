import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import EmployeeList from "../pages/Employee-list";
import "../css/app.css";
import Error from "../pages/Error";

function App() {
  const useBackend = true;

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
