import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { FooterCompnent } from "./components/FooterCompnent";
import { HeaderrComponent } from "./components/HeaderrComponent";
import ListEmployeeComponent from "./components/ListEmployeeComponent";
import EmployeeComponent from "./components/EmployeeComponent.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderrComponent />
        <Routes>
          {/* //http://localhost:4000 */}
          <Route path="/" element={<ListEmployeeComponent />}></Route>

          {/* //http://localhost:4000/employees */}
          <Route path="/employees" element={<ListEmployeeComponent />}></Route>

          {/* //http://localhost:4000/add-employee */}
          <Route path="/add-employee" element={<EmployeeComponent />}></Route>

          {/* //http://localhost:4000/edit-employee/1 */}
          <Route path="/edit-employee/:id" element={<EmployeeComponent />}></Route>

        </Routes>
        <FooterCompnent />
      </BrowserRouter>
    </>
  );
}

export default App;
