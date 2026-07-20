import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/pages/Home/Home";

import Login from "./components/pages/Login/Login";
import Register from "./components/pages/Registration/Register";

import Layout from "./components/Layouts/Layout";

import Dashboard from "./components/Dashboard/Dashboard";
import Students from "./components/pages/Student/Students";
import StudentDetails from "./components/StudentDetails";
import EditStudent from "./components/pages/EditStudent/EditStudent";
import Company from "./components/pages/Companies/Company";
import Reports from "./components/pages/Reports/Reports";
import Settings from "./components/pages/Settings/Settings";
import NotFound from "./components/pages/NotFound/NotFound";

function App() {
  return (
    <Routes>

      <Route path="/" element={<Navigate to="/Login" />} />

      <Route path="/Login" element={<Login />} />
      <Route path="/Register" element={<Register />} />

      <Route element={<Layout />}>
      <Route path="/Home" element={<Home />} />

        <Route path="/Dashboard" element={<Dashboard />} />

        <Route path="/Students" element={<Students />} />

        <Route path="/Students/:id" element={<StudentDetails />} />

        <Route path="/EditStudent/:id" element={<EditStudent />} />

        <Route path="/Companies" element={<Company />} />

        <Route path="/Reports" element={<Reports />} />

        <Route path="/Settings" element={<Settings />} />

      </Route>

      <Route path="*" element={<NotFound />} />

    </Routes>
  );
}

export default App;