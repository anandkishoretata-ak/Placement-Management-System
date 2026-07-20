import "./Login.css";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login() {

    const navigate = useNavigate();

    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [showPassword,setShowPassword]=useState(false);

    function handleLogin(e){

        e.preventDefault();

        if(email==="admin@gmail.com" && password==="admin123"){

            localStorage.setItem("isLoggedIn","true");

            navigate("/Dashboard");

        }

        else{

            alert("Invalid Email or Password");

        }

    }

    return(

<div className="login-page">

<div className="login-card">

<h1>Placement Management System</h1>

<p>Welcome Back 👋</p>

<form onSubmit={handleLogin}>

<input

type="email"

placeholder="Enter Email"

value={email}

onChange={(e)=>setEmail(e.target.value)}

/>

<input

type={showPassword?"text":"password"}

placeholder="Enter Password"

value={password}

onChange={(e)=>setPassword(e.target.value)}

/>

<div className="show-password">

<input

type="checkbox"

checked={showPassword}

onChange={()=>setShowPassword(!showPassword)}

/>

<span>Show Password</span>

</div>

<button>

Login

</button>

</form>

<Link to="/Register">

Create New Account

</Link>

</div>

</div>

)

}

export default Login;