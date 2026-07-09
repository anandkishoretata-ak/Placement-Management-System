const Student = function({name,rollno,branch,year}){
//   const name = "Mastan"
  return(
    //can write js in html
    <div>
    <h2>Welcome: {name}</h2>
    <h3>Roll no: {rollno}</h3>
    <h3>Branch: {branch}</h3>
    <h3>year: {year}</h3>
    </div> 
  )
}
export default Student