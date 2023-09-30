import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
// import Home from './Home';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';

const Login = () => {
  const [show , setShow] = useState(false);
  const [email , setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

const handleLogin = () =>{
  if(!email || !password)
  {
    setErrorMessage('Please fill in all feild.');
  }
  else{  
        navigate('/Home');
      
    
  }

  setEmail('');
        setPassword('');

        // 
}
  
  const handleShow = () =>{
      setShow(!show)
  }

  const handleSignUp = () =>{
    navigate('/Signup')
  }
  
  return (
    <div className='body'>
      <form className='box form slide'>
       <h1 style={{ textAlign: 'center' }}>Login</h1>
      <label>
        <b>Email</b>
      <br></br>
      
      </label>
      <input type='text' value={email} onChange={(e)=> setEmail(e.target.value)}/>
      <br></br>
      <label>
        
      <b>Password</b>
             
      </label>
      <input type={show ? 'text' : 'password'} value={password} onChange={(e)=> setPassword(e.target.value)}  />
      <VisibilityOffIcon onClick={handleShow}/>
      

      {errorMessage && <p style={{ color: 'red'}}>{errorMessage}</p>}

      <button type='submit' onClick={handleLogin} ><b>Login</b> </button>

      <br></br>
      <span>Forget password</span>

      <p >Not a Member? <span className='signup' style={{"color" : "plum" }} onClick={handleSignUp}>Sign Up</span></p>
      <div class="col-md-12"> 
             <ul typeof='none' class="social-network social-circle " id='remove'> 
             <li>
                <a href="#" class="icoFacebook" title="Facebook">
                  <FacebookIcon/>
                </a>
            </li> 
             <li>
                <a href="#" class="icoTwitter" title="Twitter">
                <TwitterIcon/>
                </a>
            </li>
                <li>
                  <a href="#" class="icoGoogle" title="Google +">
                    <GoogleIcon/>
                  </a>
                </li>
              </ul>
        </div> 


      </form>
    </div>
  )
}

export default Login
