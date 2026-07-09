import { useState } from "react";
import "./Dashboard.css";

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

  return (
    <div className="dashboard">
      <h1>Welcome Back 👋 {name}</h1>

      <div className="name-section">
        <input
          type="text"
          placeholder="Enter your name"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
        <button onClick={changeName}>Change Name</button>
      </div>

      <div className="cards">
        <div className="card">
          <h2>{students}</h2>
          <p>Total Students</p>

          <button onClick={() => setStudents(students + 1)}>+</button>
          <button onClick={() => setStudents(students > 0 ? students - 1 : 0)}>-</button>
          <button onClick={() => setStudents(250)}>Reset</button>
        </div>

        <div className="card">
          <h2>{placedStudents}</h2>
          <p>Placed Students</p>

          <button onClick={() => setPlacedStudents(placedStudents + 1)}>+</button>
          <button onClick={() => setPlacedStudents(placedStudents > 0 ? placedStudents - 1 : 0)}>-</button>
          <button onClick={() => setPlacedStudents(35)}>Reset</button>
        </div>

        <div className="card">
          <h2>{companies}</h2>
          <p>Companies</p>

          <button onClick={() => setCompanies(companies + 1)}>+</button>
          <button onClick={() => setCompanies(companies > 0 ? companies - 1 : 0)}>-</button>
          <button onClick={() => setCompanies(35)}>Reset</button>
        </div>

        <div className="card">
          <h2>{pendingStudents}</h2>
          <p>Pending Students</p>

          <button onClick={() => setPendingStudents(pendingStudents + 1)}>+</button>
          <button onClick={() => setPendingStudents(pendingStudents > 0 ? pendingStudents - 1 : 0)}>-</button>
          <button onClick={() => setPendingStudents(70)}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;