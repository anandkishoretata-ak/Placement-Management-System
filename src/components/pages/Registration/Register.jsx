import { Link, useNavigate } from "react-router-dom";
import "./Register.css";
import { useState } from "react";
import api from "../../../api/api";

function Register() {
  const navigate = useNavigate();

  const [studentName, setStudentName] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [branch, setBranch] = useState("");
  const [cgpa, setCgpa] = useState("");
  const [year, setYear] = useState("");

  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    const student = {
      studentName,
      rollNo: Number(rollNo),
      email,
      password,
      phone,
      branch,
      cgpa: Number(cgpa),
      year: Number(year),
    };

    try {
      setLoading(true);

      const response = await api.post("/students", student);

      alert(response.data.message);

      navigate("/Students");
    } catch (error) {
      console.log(error);

      alert(error.response?.data?.message || "Registration Failed");
    } finally {
      setLoading(false);
    }
  }

  function handleReset() {
    setStudentName("");
    setRollNo("");
    setEmail("");
    setPassword("");
    setPhone("");
    setBranch("");
    setCgpa("");
    setYear("");
  }

  return (
    <div className="register">

      <h1>Student Registration</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Student Name"
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
          required
        />

        <input
          type="number"
          placeholder="Roll Number"
          value={rollNo}
          onChange={(e) => setRollNo(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />

        <select
          value={branch}
          onChange={(e) => setBranch(e.target.value)}
          required
        >
          <option value="">Select Branch</option>
          <option value="CSE">CSE</option>
          <option value="CSM">CSM</option>
          <option value="CIVIL">CIVIL</option>
          <option value="ECE">ECE</option>
          <option value="EEE">EEE</option>
          <option value="IT">IT</option>
          <option value="CSE-AI">CSE-AI</option>
          <option value="CSE-DS">CSE-DS</option>
          <option value="CSE-CS">CSE-CS</option>
        </select>

        <input
          type="number"
          placeholder="CGPA"
          value={cgpa}
          onChange={(e) => setCgpa(e.target.value)}
          step="0.01"
          min="0"
          max="10"
          required
        />

        <select
          value={year}
          onChange={(e) => setYear(e.target.value)}
          required
        >
          <option value="">Select Year</option>
          <option value="1">1st Year</option>
          <option value="2">2nd Year</option>
          <option value="3">3rd Year</option>
          <option value="4">4th Year</option>
        </select>

        <div className="buttons">

          <button
            type="submit"
            disabled={loading}
          >
            {loading ? "Registering..." : "Register"}
          </button>

          <button
            type="button"
            onClick={handleReset}
          >
            Reset
          </button>

        </div>

      </form>

      <Link to="/Login">
        Already have an account? Login
      </Link>

    </div>
  );
}

export default Register;