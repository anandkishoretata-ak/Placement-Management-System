import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../api/api"; 

function StudentDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStudent();
  }, []);

  async function fetchStudent() {
    try {
      const response = await api.get(`/students/${id}`);

      setStudent(response.data.student);
    } catch (error) {
      console.log(error);
      alert("Student not found");
      navigate("/Students");
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return <h2>Loading Student Details...</h2>;
  }

  if (!student) {
    return <h2>Student Not Found</h2>;
  }

  return (
    <div className="details-container">

      <h1>Student Details</h1>

      <div className="details-card">

        <p><strong>Name :</strong> {student.studentName}</p>

        <p><strong>Roll No :</strong> {student.rollNo}</p>

        <p><strong>Email :</strong> {student.email}</p>

        <p><strong>Password :</strong> {student.password}</p>

        <p><strong>Phone :</strong> {student.phone}</p>

        <p><strong>Branch :</strong> {student.branch}</p>

        <p><strong>CGPA :</strong> {student.cgpa}</p>

        <p><strong>Year :</strong> {student.year}</p>

        <p>
          <strong>Created At :</strong>{" "}
          {new Date(student.createdAt).toLocaleString()}
        </p>

      </div>

      <button
        className="back-btn"
        onClick={() => navigate("/Students")}
      >
        Back
      </button>

    </div>
  );
}

export default StudentDetails;