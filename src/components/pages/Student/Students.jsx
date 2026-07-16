import { Link } from "react-router-dom";
import StudentTable from "../../StudentTable/StudentTable";
import { useEffect, useState } from "react";
import "./Student.css";

function Students() {

    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        setTimeout(() => {

            const storedStudents =
                JSON.parse(localStorage.getItem("students")) || [];

            setStudents(storedStudents);

            setLoading(false);

        }, 1000);

    }, []);

    if (loading) {
        return <h2>Loading....</h2>;
    }

    return (
        <>
            <h1>Student Management</h1>

            <p>Manage all registered students here.</p>

            <Link to="/Register">
                <button>Add New Student</button>
            </Link>

            <br />
            <br />

            <StudentTable students={students} />
        </>
    );
}

export default Students;