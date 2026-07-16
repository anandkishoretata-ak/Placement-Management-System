import { useState,useEffect } from "react";
import "./Dashboard.css";
import Clock from "../Clock/Clock";
import { Navigate, useNavigate } from "react-router-dom";

function Dashboard() {
  const [name, setName] = useState("Student");
  const [newName, setNewName] = useState("");

  const [students, setStudents] = useState(250);
  const [placedStudents, setPlacedStudents] = useState(35);
  const [companies, setCompanies] = useState(35);
  const [pendingStudents, setPendingStudents] = useState(70);

  const changeName = () => {
    if (newName.trim() !== "") {
      setName(newName);
      setNewName("");
    }
  };
  const navigate = useNavigate ()
  useEffect(()=>{
    const loginStatus = localStorage.getItem("isLoggedIn");
    if(loginStatus !== "true"){
      Navigate("/Login");

    }
  },[]);

  return (
    <div className="dashboard">
      <h1>Welcome Back 👋 {name}</h1>
      <Clock />

      <div className="name-section">
        <input
          type="text"
          placeholder="Enter your name"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />

        <button onClick={changeName}>
          Change Name
        </button>
      </div>

      <div className="cards">

        {/* Total Students */}
        <div className="card">
          <h2>{students}</h2>
          <p>Total Students</p>

          <div className="btn-group">
            <button onClick={() => setStudents((prev) => prev + 1)}>+</button>

            <button
              onClick={() =>
                setStudents((prev) => (prev > 0 ? prev - 1 : 0))
              }
            >
              -
            </button>

            <button
              className="resetBtn"
              onClick={() => setStudents(250)}
            >
              Reset
            </button>
          </div>
        </div>

        {/* Placed Students */}
        <div className="card">
          <h2>{placedStudents}</h2>
          <p>Placed Students</p>

          <div className="btn-group">
            <button onClick={() => setPlacedStudents((prev) => prev + 1)}>+</button>

            <button
              onClick={() =>
                setPlacedStudents((prev) => (prev > 0 ? prev - 1 : 0))
              }
            >
              -
            </button>

            <button
              className="resetBtn"
              onClick={() => setPlacedStudents(35)}
            >
              Reset
            </button>
          </div>
        </div>

        {/* Companies */}
        <div className="card">
          <h2>{companies}</h2>
          <p>Companies</p>

          <div className="btn-group">
            <button onClick={() => setCompanies((prev) => prev + 1)}>+</button>

            <button
              onClick={() =>
                setCompanies((prev) => (prev > 0 ? prev - 1 : 0))
              }
            >
              -
            </button>

            <button
              className="resetBtn"
              onClick={() => setCompanies(35)}
            >
              Reset
            </button>
          </div>
        </div>

        {/* Pending Students */}
        <div className="card">
          <h2>{pendingStudents}</h2>
          <p>Pending Students</p>

          <div className="btn-group">
            <button onClick={() => setPendingStudents((prev) => prev + 1)}>+</button>

            <button
              onClick={() =>
                setPendingStudents((prev) => (prev > 0 ? prev - 1 : 0))
              }
            >
              -
            </button>

            <button
              className="resetBtn"
              onClick={() => setPendingStudents(70)}
            >
              Reset
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;