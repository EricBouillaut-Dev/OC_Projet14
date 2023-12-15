import { Routes, Route } from "react-router-dom";
import "../css/app.css";
import Error from "../pages/Error";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
