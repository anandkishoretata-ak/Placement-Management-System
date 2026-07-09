// import './App.css'
// import Navbar from './components/Navbar';
// // import Heading from './Components/Heading';
// // import Student from './components/student';
// import Sidebar from './Components/Sidebar/Sidebar'
// import Footer from './components/Footer/Footer'
// // import Dashboard from './components/Dashboard/Dashboard';
// import { useState } from 'react';
// // import Register from './components/pages/Registration/Register';
// import Login from './components/pages/Login/Login';

// //App.jsx: The Root Component
// //Initially everything is displayed from here
// //Creating a root component
// //js --HTML --JSX
// //jsx --browser
// //babel --help to convert to js
// //NavBar Component
// // const Navbar = function(){
// //   return(
// //     <h1>Placement Management System</h1>
// //   )
// // };
// //My second Component
// //use destructuring
// // const Heading = function({name ,year}){
// //   const name = "Mastan";
// //   return(
// //     //Can i write js in html
// //     <div>
// //       <h2>Welocome {name}</h2>
      
// //     </div>
// //   )
// // };
// function App(){
//   // const [count, setCount] = useState(250)
//   // function addStudent(){
//   //   setCount(count+1)
//   //   console.log(count)
//   // }
//   return(
//      <>
//      {/* <h1>{count}</h1>
//      <button onClick={addStudent}>Add student</button> */}
    
//       <Navbar />
//        {/* <Heading /> */}
//          {/* <Student 
//          name = "Mastan"
//         rollno = {"23ht1a05e9"}
//         branch = "CSE"
//          year = {"4thyear"} /> */}

//          <Sidebar />
//          {/* <Dashboard /> */}
//          <Login />
//          {/* <Register /> */}
//          <Footer />


//        </>
    
//   )

// }


// export default App;
import "./App.css";
import Login from "./components/pages/Login/Login";

function App() {
  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;