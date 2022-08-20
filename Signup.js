import React , {useState} from 'react' 
import "./css/flight.css";
import axios from 'axios'
import {  useNavigate } from 'react-router-dom';

const Signup = () => {
  const [userName, setUserName] = useState()
  const [password, setPassword] = useState()
  const [email, setEmail] = useState()
  const [role, setRole] = useState('Customer')
  const Navigate = useNavigate()
  const [success, setSuccess] = useState(false)


  const submitSignUp=()=>{
    let response=axios.post('http://127.0.0.1:8000/base/users',
    {
      Username:userName,
      Email:email,
      Password:password,
      User_Role:role
    }).then((response)=>console.log(response))

    if (response.statusCode === 200) {
      setSuccess(true);
    } else {
      alert('fail')
    }

  //  an 'if' sentence . if user registered => href to login page + a succes alert.

    // if (response.status === 200) {
    //   alert('succes Register ');
    //   Navigate('/Login')
  
    // } else {
    //   alert('somethng went wrong');
    // }

    
  }

  
  return (
    <>
    {success ? (
      <div class="alert alert-success" role="alert">
      <h4 class="alert-heading">You are logged in!</h4>
      <p>Aww yeah, you successfully logged to the best airline company in the world !
        <br/> Enjoy buying a flight! </p>
        <br/>
        <p>
          <a href='http://localhost:3000/Flights'>Go to buy a flight!</a>
        </p></div>

    ) : (
      <section>
    
    <div className='all-cards'>
          <header className="App-header">

        <div className="signup">
      
      <div className="fields">
          <h1>Signup</h1>
          <form>
             <div>create your UserName :  <input onChange={(event)=>{setUserName(event.target.value)}} type="text" placeholder="Enter Username" name="uname" required/> </div><br/>
             <div>create your Email :  <input onChange={(event)=>{setEmail(event.target.value)}} type="email" placeholder="Enter Email" name="pwd" required/></div><br/>
             <div>create your Password :  <input onChange={(event)=>{setPassword(event.target.value)}} type="password" placeholder="Enter Password" name="pwd" required/></div><br/>
             <div>choose your role :  
               <select onChange={(event)=>{setRole(event.target.value)}}>
                 <option value='Customer'>Customer</option>
                 <option value='Company'>Manager</option>
                 <option value='Maneger'>Airline company</option>
               </select>
             </div></form>
        </div>
        <br/>
        <button onClick={()=>submitSignUp()}>Submit</button>
        
        <div>Already have User?<button>
    <a class="nav-link " href="http://localhost:3000/Login">
    Login
              </a></button> </div>
        </div>
        
        </header></div>
        </section>)}</>)
}

export default Signup