import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./EditStudent.css";

function EditStudent() {

  const { id } = useParams();
  const navigate = useNavigate();

  const [studentName, setStudentName] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [branch, setBranch] = useState("");
  const [cgpa, setCgpa] = useState("");
  const [year, setYear] = useState("");

  useEffect(() => {

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
    }

  }, [id]);

  function updateStudent(e) {

    e.preventDefault();

    let students =
      JSON.parse(localStorage.getItem("students")) || [];

    students = students.map((student) =>
      student.id === Number(id)
        ? {
            ...student,
            studentName,
            rollNo,
            email,
            password,
            branch,
            cgpa,
            year,
          }
        : student
    );

    localStorage.setItem(
      "students",
      JSON.stringify(students)
    );

    alert("Student Updated Successfully");

    navigate("/Students");
  }

  return (

    <div className="edit-container">

      <div className="edit-card">

        <h1>Edit Student</h1>

        <form onSubmit={updateStudent}>

          <input
            type="text"
            value={studentName}
            onChange={(e) =>
              setStudentName(e.target.value)
            }
            placeholder="Student Name"
          />

          <input
            type="text"
            value={rollNo}
            onChange={(e) =>
              setRollNo(e.target.value)
            }
            placeholder="Roll Number"
          />

          <input
            type="email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            placeholder="Email"
          />

          <input
            type="password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            placeholder="Password"
          />

          <input
            type="text"
            value={branch}
            onChange={(e) =>
              setBranch(e.target.value)
            }
            placeholder="Branch"
          />

          <input
            type="number"
            value={cgpa}
            onChange={(e) =>
              setCgpa(e.target.value)
            }
            placeholder="CGPA"
          />

          <select
            value={year}
            onChange={(e) =>
              setYear(e.target.value)
            }
          >
            <option>1st Year</option>
            <option>2nd Year</option>
            <option>3rd Year</option>
            <option>4th Year</option>
          </select>

          <button type="submit">
            Update Student
          </button>

        </form>

      </div>

    </div>

  );
}

export default EditStudent;