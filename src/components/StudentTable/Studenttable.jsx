import "./StudentTable.css";
import { useState } from "react";
function StudentTable({students})
{
    return(
        
         
              students.length===0 ?
              <h3>No students Registered</h3>
            :
            
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
        {
            students.map((student, index) => (
                <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{student.studentName}</td>
                    <td>{student.rollNo}</td>
                    <td>{student.email}</td>
                    <td>{student.password}</td>
                    <td>{student.branch}</td>
                    <td>{student.cgpa}</td>
                    <td>{student.year}</td>
                </tr>
            ))
        }
            </tbody>
        </table>
    
    

    )
}
export default StudentTable;