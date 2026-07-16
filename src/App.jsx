import "./App.css";
import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Login from "./components/pages/Login/Login";
import Register from "./components/pages/Registration/Register";
import Layout from "./components/Layouts/Layout";
import Home from "./components/pages/Home";
import Dashboard from "./components/Dashboard/Dashboard";
import Students from "./components/pages/Student/Students";
import Company from "./components/pages/Companies/Company";
import NotFound from "./components/pages/Notfound/NotFound";
import EditStudent from "./components/pages/EditStudent";

function App() {
  
  
const [students, setStudents] = useState([
  {
    id: 1,
    name: "Anand",
    email: "anand@gmail.com",
    branch: "CSE",
    cgpa: 8.8,
  },
  {
    id: 2,
    name: "Rahul",
    email: "rahul@gmail.com",
    branch: "ECE",
    cgpa: 8.5,
  },
]);



  return (
    <Routes>
      {/* Default Route */}
      <Route path="/" element={<Navigate to="/Login" replace />} />

      {/* Authentication Routes */}
      <Route path="/Login" element={<Login />} />
      <Route path="/Register" element={<Register />} />

      {/* Protected Layout Routes */}
      <Route element={<Layout />}>
        <Route path="/Home" element={<Home />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Students" element={<Students />} />
        <Route path="/Companies" element={<Company />} />

        {/* Edit Student Route */}
        
        <Route
          path="/Students/edit/:id"
          element={
            <EditStudent
              students={students}
              setStudents={setStudents}
            />
          }
        />
      </Route>

      {/* 404 Page */}
      <Route path="*" element={<NotFound />} />
    </Routes>
    
  );
}

export default App;
