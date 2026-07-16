import "./StudentTable.css";

function StudentTable({ students = [] }) {
  if (students.length === 0) {
    return <h3>No Students Registered</h3>;
  }

  return (
    <table border="1">
      <thead>
        <tr>
          <th>S.No</th>
          <th>Student Name</th>
          <th>Roll No</th>
          <th>Email</th>
          <th>Password</th>
          <th>Branch</th>
          <th>CGPA</th>
          <th>Year</th>
        </tr>
      </thead>

      <tbody>
        {students.map((student, index) => (
          <tr key={student.id}>
            <td>{index + 1}</td>
            <td>{student.studentName}</td>
            <td>{student.rollNo}</td>
            <td>{student.email}</td>
            <td>{student.password}</td>
            <td>{student.branch}</td>
            <td>{student.cgpa}</td>
            <td>{student.year}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default StudentTable;