
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

function EditStudent({ students, setStudents }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const student = students.find(
    (s) => s.id === Number(id)
  );

  const [name, setName] = useState(student?.name || "");
  const [email, setEmail] = useState(student?.email || "");
  const [branch, setBranch] = useState(student?.branch || "");
  const [cgpa, setCgpa] = useState(student?.cgpa || "");

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedStudents = students.map((s) =>
      s.id === Number(id)
        ? {
            ...s,
            name,
            email,
            branch,
            cgpa,
          }
        : s
    );

    setStudents(updatedStudents);

    alert("Student Updated Successfully!");
    navigate("/Students");
  };

  if (!student) {
    return <h2>Student Not Found</h2>;
  }

  return (
    <div className="edit-student-container">
      <h1>Edit Student</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Student Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Student Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Branch"
          value={branch}
          onChange={(e) => setBranch(e.target.value)}
          required
        />

        <input
          type="number"
          placeholder="CGPA"
          value={cgpa}
          onChange={(e) => setCgpa(e.target.value)}
          step="0.1"
          min="0"
          max="10"
          required
        />

        <button type="submit">
          Update Student
        </button>
      </form>
    </div>
  );
}

export default EditStudent;


