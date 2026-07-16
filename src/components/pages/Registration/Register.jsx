import "./Register.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [studentName, setStudentName] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [branch, setBranch] = useState("");
  const [cgpa, setCgpa] = useState("");
  const [year, setYear] = useState("");

  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    let validationErrors = {};

    // Student Name
    if (!studentName.trim()) {
      validationErrors.studentName = "Student Name is required";
    }

    // Roll Number
    if (!rollNo.trim()) {
      validationErrors.rollNo = "Roll Number is required";
    }

    // Email
    if (!email.trim()) {
      validationErrors.email = "Email is required";
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/.test(email)
    ) {
      validationErrors.email = "Invalid Email";
    }

    // Password
    if (!password.trim()) {
      validationErrors.password = "Password is required";
    } else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/.test(password)
    ) {
      validationErrors.password =
        "Password must contain uppercase, lowercase, number & special character.";
    }

    // Branch
    if (!branch.trim()) {
      validationErrors.branch = "Branch is required";
    }

    // CGPA
    if (!cgpa) {
      validationErrors.cgpa = "CGPA is required";
    } else if (cgpa < 0 || cgpa > 10) {
      validationErrors.cgpa = "CGPA should be between 0 and 10";
    }

    // Year
    if (!year) {
      validationErrors.year = "Select Year";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    // Student Object
    const student = {
      id: Date.now(),
      studentName,
      rollNo,
      email,
      password,
      branch,
      cgpa,
      year,
    };

    // Get Existing Students
    const existingStudents =
      JSON.parse(localStorage.getItem("students")) || [];

    // Add New Student
    existingStudents.push(student);

    // Save Back to LocalStorage
    localStorage.setItem(
      "students",
      JSON.stringify(existingStudents)
    );

    alert("Registration Successful!");

    // Clear Form
    setStudentName("");
    setRollNo("");
    setEmail("");
    setPassword("");
    setBranch("");
    setCgpa("");
    setYear("");
    setErrors({});

    // Navigate to Students Page
    navigate("/Students");
  };

  const handleReset = () => {
    setStudentName("");
    setRollNo("");
    setEmail("");
    setPassword("");
    setBranch("");
    setCgpa("");
    setYear("");
    setErrors({});
  };

  return (
    <div className="register">

      <h1>Student Registration</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Student Name"
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
        />
        {errors.studentName && (
          <p className="error">{errors.studentName}</p>
        )}

        <input
          type="text"
          placeholder="Roll Number"
          value={rollNo}
          onChange={(e) => setRollNo(e.target.value)}
        />
        {errors.rollNo && (
          <p className="error">{errors.rollNo}</p>
        )}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && (
          <p className="error">{errors.email}</p>
        )}

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && (
          <p className="error">{errors.password}</p>
        )}

        <input
          type="text"
          placeholder="Branch"
          value={branch}
          onChange={(e) => setBranch(e.target.value)}
        />
        {errors.branch && (
          <p className="error">{errors.branch}</p>
        )}

        <input
          type="number"
          placeholder="CGPA"
          value={cgpa}
          onChange={(e) => setCgpa(e.target.value)}
          min="0"
          max="10"
          step="0.01"
        />
        {errors.cgpa && (
          <p className="error">{errors.cgpa}</p>
        )}

        <select
          value={year}
          onChange={(e) => setYear(e.target.value)}
        >
          <option value="">Select Year</option>
          <option>1st Year</option>
          <option>2nd Year</option>
          <option>3rd Year</option>
          <option>4th Year</option>
        </select>
        {errors.year && (
          <p className="error">{errors.year}</p>
        )}

        <div className="buttons">
          <button type="submit">Register</button>

          <button
            type="button"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>

      </form>

      <p>
        Already have an account?{" "}
        <Link to="/Login">Login Here</Link>
      </p>

    </div>
  );
}

export default Register;