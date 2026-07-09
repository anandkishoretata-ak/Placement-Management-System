import "./Register.css";
import { useState } from "react";

function Register() {
  const initialData = {
    name: "",
    rollNo: "",
    email: "",
    password: "",
    branch: "",
    year: "",
    gender: "",
    cgpa: "",
    skills: "",
  };

  const [formData, setFormData] = useState(initialData);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const registerStudent = (e) => {
    e.preventDefault();

    for (let key in formData) {
      if (formData[key] === "") {
        alert("Please fill all fields");
        return;
      }
    }

    if (formData.cgpa < 0 || formData.cgpa > 10) {
      alert("CGPA must be between 0 and 10");
      return;
    }

    alert(
      `Registration Successful!

Name : ${formData.name}
Roll No : ${formData.rollNo}
Email : ${formData.email}
Branch : ${formData.branch}
Year : ${formData.year}
Gender : ${formData.gender}
CGPA : ${formData.cgpa}
Skills : ${formData.skills}`
    );

    setFormData(initialData);
  };

  return (
    <div className="register-page">
      <div className="left-box">
        <h1>Student Registration</h1>

        <form onSubmit={registerStudent}>

          <input
            type="text"
            name="name"
            placeholder="Student Name"
            value={formData.name}
            onChange={handleChange}
          />

          <input
            type="text"
            name="rollNo"
            placeholder="Roll Number"
            value={formData.rollNo}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />

          <select
            name="branch"
            value={formData.branch}
            onChange={handleChange}
          >
            <option value="">Select Branch</option>
            <option>CSE</option>
            <option>ECE</option>
            <option>EEE</option>
            <option>AIML</option>
            <option>IT</option>
          </select>

          <select
            name="year"
            value={formData.year}
            onChange={handleChange}
          >
            <option value="">Select Year</option>
            <option>1st Year</option>
            <option>2nd Year</option>
            <option>3rd Year</option>
            <option>4th Year</option>
          </select>

          <input
            type="number"
            name="cgpa"
            placeholder="CGPA"
            value={formData.cgpa}
            onChange={handleChange}
          />

          <div className="gender-group">
            <label>
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={formData.gender === "Male"}
                onChange={handleChange}
              />
              Male
            </label>

            <label>
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={formData.gender === "Female"}
                onChange={handleChange}
              />
              Female
            </label>
          </div>

          <textarea
            name="skills"
            placeholder="Enter Skills"
            value={formData.skills}
            onChange={handleChange}
          />

          <div className="btns">
            <button type="submit">Register</button>

            <button
              type="button"
              onClick={() => setFormData(initialData)}
            >
              Clear
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}

export default Register;