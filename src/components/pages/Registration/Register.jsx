
import { Link, useNavigate, useParams } from "react-router-dom";
import "./Register.css";
import { useState, useEffect } from "react";
import api from "../../../api/api";

function Register() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [studentName, setStudentName] = useState("");
  const [rollno, setRollno] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [branch, setBranch] = useState("");
  const [cgpa, setCgpa] = useState("");
  const [year, setYear] = useState("");
  const [loading, setLoading] = useState(false);

  // Load student data when editing
  useEffect(() => {
    if (id) {
      getStudent();
    }
  }, [id]);

  async function getStudent() {
    try {
      const response = await api.get(`/students/${id}`);

      setStudentName(response.data.studentName);
      setRollno(response.data.rollno);
      setEmail(response.data.email);
      setPhone(response.data.phone);
      setBranch(response.data.branch);
      setCgpa(response.data.cgpa);
      setYear(response.data.year);
    } catch (error) {
      console.log(error);
      alert("Failed to load student details");
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const student = {
      studentName,
      rollno: Number(rollno),
      email,
      phone,
      branch,
      cgpa: Number(cgpa),
      year: Number(year),
    };

    try {
      setLoading(true);

      if (id) {
        const response = await api.put(`/students/${id}`, student);
        alert(response.data.message || "Student Updated Successfully");
      } else {
        const response = await api.post("/students", student);
        alert(response.data.message || "Student Registered Successfully");
      }

      navigate("/Student");
    } catch (error) {
      console.log(error);
      alert(error.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  function handleReset() {
    setStudentName("");
    setRollno("");
    setEmail("");
    setPhone("");
    setBranch("");
    setCgpa("");
    setYear("");
  }

  return (
    <div className="register">
      <h1>{id ? "Edit Student" : "Student Registration"}</h1>

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
          value={rollno}
          onChange={(e) => setRollno(e.target.value)}
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
          <option value="CSE-AI">CSE-AI</option>
          <option value="CSE-DS">CSE-DS</option>
          <option value="CSE-CS">CSE-CS</option>
          <option value="ECE">ECE</option>
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
          <button type="submit" disabled={loading}>
            {loading
              ? id
                ? "Updating..."
                : "Registering..."
              : id
              ? "Update Student"
              : "Register"}
          </button>

          <button
            type="button"
            onClick={handleReset}
            disabled={loading}
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