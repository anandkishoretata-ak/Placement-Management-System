import StudentTable from "../../StudentTable/Studenttable";

function Students(){
    const students = {
        
    }
    return(
        <>
        <h1>Student Management</h1>
        <p>Manage all registered students here</p>
        <Link to ="/Register">
        <button>
            Add New Student
        </button>
        </Link>
        <StudentTable />
        </>
    )
}
export default Students;