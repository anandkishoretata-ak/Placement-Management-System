import { useParams, Link } from "react-router-dom";

function StudentDetails() {

    const { id } = useParams();

    const students =
        JSON.parse(localStorage.getItem("students")) || [];

    const student = students.find(
        s => s.id === Number(id)
    );

    if (!student){
        return <h2>Student Not Found</h2>;
    }

    return(

        <div className="details-container">

            <div className="details-card">

                <h1>Student Details</h1>

                <p><b>Name :</b> {student.studentName}</p>

                <p><b>Roll No :</b> {student.rollNo}</p>

                <p><b>Email :</b> {student.email}</p>

                <p><b>Branch :</b> {student.branch}</p>

                <p><b>CGPA :</b> {student.cgpa}</p>

                <p><b>Year :</b> {student.year}</p>

                <Link to="/Students">
                    <button>
                        Back
                    </button>
                </Link>

            </div>

        </div>

    )

}

export default StudentDetails;