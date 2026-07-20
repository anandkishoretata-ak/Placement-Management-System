import "./Register.css";
import { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [studentName, setStudentName] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [branch, setBranch] = useState("");
  const [cgpa, setCgpa] = useState("");
  const [year, setYear] = useState("");
  const [phone, setPhone] = useState("");

  const [errors, setErrors] = useState({});

  // Load student data when editing
  useEffect(() => {
    if (!id) return;

    const students =
      JSON.parse(localStorage.getItem("students")) || [];

    const student = students.find(
      (item) => item.id === Number(id)
    );

    if (student) {
      setStudentName(student.studentName);
      setRollNo(student.rollNo);
      setEmail(student.email);
      setPassword(student.password);
      setBranch(student.branch);
      setCgpa(student.cgpa);
      setYear(student.year);
      setPhone(student.phone || "");
    }
  }, [id]);

  function validate() {
    let newErrors = {};

    if (studentName.trim() === "") {
      newErrors.studentName = "Student name is required";
    }

    if (rollNo.trim() === "") {
      newErrors.rollNo = "Roll Number is required";
    }

    if (email.trim() === "") {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email)
    ) {
      newErrors.email = "Invalid Email";
    }

    if (password.length < 6) {
      newErrors.password =
        "Password must be at least 6 characters";
    }

    if (phone.trim() === "") {
      newErrors.phone = "Phone Number is required";
    } else if (!/^[0-9]{10}$/.test(phone)) {
      newErrors.phone =
        "Phone Number should contain 10 digits";
    }

    if (branch.trim() === "") {
      newErrors.branch = "Branch is required";
    }

    if (cgpa === "") {
      newErrors.cgpa = "CGPA is required";
    } else if (cgpa < 0 || cgpa > 10) {
      newErrors.cgpa =
        "CGPA should be between 0 and 10";
    }

    if (year === "") {
      newErrors.year = "Select Year";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!validate()) return;

    let students =
      JSON.parse(localStorage.getItem("students")) || [];

    const student = {
      id: id ? Number(id) : Date.now(),
      studentName,
      rollNo,
      email,
      password,
      phone,
      branch,
      cgpa,
      year,
    };

    if (id) {
      students = students.map((item) =>
        item.id === Number(id)
          ? student
          : item
      );

      alert("Student Updated Successfully");
    } else {
      students.push(student);

      alert("Student Registered Successfully");
    }

    localStorage.setItem(
      "students",
      JSON.stringify(students)
    );

    navigate("/Students");
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
    setErrors({});
  }

  return (
    <div className="register-container">

      <div className="register-card">

        <h1>
          {id
            ? "Edit Student"
            : "Student Registration"}
        </h1>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder="Student Name"
            value={studentName}
            onChange={(e) =>
              setStudentName(e.target.value)
            }
          />
          <span>{errors.studentName}</span>

          <input
            type="text"
            placeholder="Roll Number"
            value={rollNo}
            onChange={(e) =>
              setRollNo(e.target.value)
            }
          />
          <span>{errors.rollNo}</span>

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />
          <span>{errors.email}</span>

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
          />
          <span>{errors.password}</span>

          <input
            type="text"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) =>
              setPhone(e.target.value)
            }
          />
          <span>{errors.phone}</span>

          <input
            type="text"
            placeholder="Branch"
            value={branch}
            onChange={(e) =>
              setBranch(e.target.value)
            }
          />
          <span>{errors.branch}</span>

          <input
            type="number"
            placeholder="CGPA"
            min="0"
            max="10"
            step="0.01"
            value={cgpa}
            onChange={(e) =>
              setCgpa(e.target.value)
            }
          />
          <span>{errors.cgpa}</span>

          <select
            value={year}
            onChange={(e) =>
              setYear(e.target.value)
            }
          >
            <option value="">
              Select Year
            </option>
            <option>1st Year</option>
            <option>2nd Year</option>
            <option>3rd Year</option>
            <option>4th Year</option>
          </select>

          <span>{errors.year}</span>

          <div className="btn-group">

            <button type="submit">
              {id
                ? "Update Student"
                : "Register"}
            </button>

            <button
              type="button"
              onClick={handleReset}
            >
              Reset
            </button>

          </div>

          <div className="login-link">
            <Link to="/Login">
              Back to Login
            </Link>
          </div>

        </form>

      </div>

    </div>
  );
}

export default Register;