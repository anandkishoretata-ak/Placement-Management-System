import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";

import Login from "./components/pages/Login/Login";
import Register from "./components/pages/Registration/Register";
import Layout from "./components/Layouts/Layout";
import Home from "./components/pages/Home";
import Dashboard from "./components/Dashboard/Dashboard";
import Students from "./components/pages/Student/Students";
import StudentTable from "./components/StudentTable/StudentTable";
import NotFound from "./components/pages/Notfound/NotFound";
import Company from "./components/pages/Companies/Company";


function App() {
  return (
    <Routes>
      {/* Default Route */}
      <Route path="/" element={<Navigate to="/Login" />} />

      {/* Login & Register */}
      <Route path="/Login" element={<Login />} />
      <Route path="/Register" element={<Register />} />

      {/* Layout Routes */}
      <Route element={<Layout />}>
        <Route path="/Home" element={<Home />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Students" element={<Students />} />
      </Route>

      {/* Student Table */}
      <Route path="/StudentTable" element={<StudentTable students={[]} />} />
      <Route path="/Companies" element={<Company/>}/>
      {/* Wildcard Route */}

      {/* Page Not Found */}
      <Route path="*" element={< NotFound/>} />
    </Routes>
  );
}

export default App;