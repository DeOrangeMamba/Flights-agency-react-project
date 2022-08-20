import "./App.css";
import React, { useState, useEffect } from "react";
import { Navigate } from 'react-router-dom';
import jwt_decode from "jwt-decode";
function Login() {
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState("")
    const login = async () => {
        let response = await fetch("http://127.0.0.1:8000/base/token/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: username,
                password: password,
            }),
        });
        let data = await response.json();
        if (response.status === 200) {
            console.log(jwt_decode(data.access));
            localStorage.setItem("authTokens", JSON.stringify(data));
            alert("very good!");
            // Navigate('/Flights')
        } else {
            alert("Make sure you already registerd!!");
        }
    };
    return (
        <div className="App">
            <header className="App-header">
              <h1>LOGIN</h1>
            Username : <input value={username} onChange={(e)=>setUsername(e.target.value)}/>
            Password    <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <button onClick={() => login()}>Login</button>
                <br/><div>Need an account?</div>
                <a href="http://localhost:3000/Signup">Sign In</a>
            </header>
            
        </div>
    );
}
 
export default Login;



  // const Login = () => {
  //   return (

  //     <div className="img-log">
  //     <div className="login-all">
  //       <div className="fields">
  //         <h1>Login</h1>
  //         <div>
  //           UserName :{" "}
  //           <input
  //             type="text"
  //             placeholder="Enter Username"
  //             name="uname"
  //             required
  //           />{" "}
  //         </div>
  //         <br></br>
  //         Password :{" "}
  //         <input type="text" placeholder="Enter Password" name="pwd" required />
  //       </div>
  //       <br />
  //       <button>Login</button>
  //       <div className="not-have">
  //         <div>not have a user?</div>
  //         <button>
  //           <a class="nav-link " href="http://localhost:3000/Signup">
  //             signup
  //           </a>
  //         </button>
  //       </div>
  //     </div>
  //     </div>
  //   );
  // };

// export default Login;
