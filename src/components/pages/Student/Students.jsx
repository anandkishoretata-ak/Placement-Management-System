import { Link } from "react-router-dom";
import StudentTable from "../../StudentTable/StudentTable";
import { useEffect, useState } from "react";
import "./Student.css";
import api from "../../../api/api";

function Students() {

    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");
   

    async function fetchStudents(){
        try{
            setLoading(true);
            const response = await api.get("/students");
            setStudents(response.data.students)
        } catch(error){
            console.log(error)
        }
        finally{
            setLoading(false);
        }
    };
     useEffect(()=>{
        fetchStudents();

    },[])

    async function deleteStudent(id) {
        try{
            await api.delete(`/students/${id}`)
            //reload the students
             fetchStudents()
        }
       catch(error){
        console.log(error)
       }
        
    }

    const filteredStudents = students.filter((student) =>
        student.studentName.toLowerCase().includes(search.toLowerCase()) ||
        student.rollNo.toLowerCase().includes(search.toLowerCase()) ||
        student.email.toLowerCase().includes(search.toLowerCase()) ||
        student.branch.toLowerCase().includes(search.toLowerCase())
    );

    if (loading) {
        return <h2>Loading....</h2>;
    }

    return (
        <div className="student-page">

            <h1>Student Management</h1>

            <p>Manage all registered students here.</p>

            <div className="student-header">

                <Link to="/Register">
                    <button className="add-btn">
                        Add New Student
                    </button>
                </Link>

                <input
                    type="text"
                    placeholder="🔍 Search Student..."
                    className="search-bar"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

            </div>

            <StudentTable
                students={students}
                deleteStudent={deleteStudent}
            />

        </div>
    );
}

export default Students ;