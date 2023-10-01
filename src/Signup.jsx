import React, { useState } from 'react'
import './Signup.css'
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [name , setName] = useState("");
    const [email,setEmail] = useState("")
    const[password, setPassword] = useState("");
    const[nameError, setNameError] = useState("");
    const[passwordError,setPasswordError] = useState("")
    const navigate = useNavigate();

    const handleSubmit = async() =>{
        console.log('Button clicked')
        if(name.length<5)
        {
            setNameError('Name must be atleast 5 character long')

        }
        else{
            setNameError('')
        }
        if(password.length<5)
        {
            setPasswordError('Password must be atleast 5 character long')

        }
        else{
            setPasswordError('')
        }

        if(nameError === '' && passwordError=== '' )
        {
            const data = {
                name,
                email,
                password,
            }

            let result = await fetch('',{
                method : 'POST',
                body: JSON.stringify(data),
                headers : {
                    "content-Type" : 'application/json'
                    
                }
                
            })
            result = await result.json();
            console.log(result)
            localStorage.setItem("user-info",JSON.stringify(result))

            

            setName('');
        setEmail('');
        setPassword('');
        
        
        }
        
    }


const handleClick = () =>{
    navigate('/')
}
         


  return (
    <>
      <div className='container'>
        <form className='box' onClick={handleSubmit}>
            <h1>SignUp</h1>
        <label>Name</label>
        <input type='text' value={name} onChange={(e)=>setName(e.target.value)}/>
        {nameError && <div className='error'>{nameError}</div>}
        <label>Email</label>
        <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <label>Password</label>
        <input type='password'  value={password} onChange={(e)=>setPassword(e.target.value)}/>
        {password && <div className='error' >{passwordError}</div>}
        <br></br>
        <button type='button' onClick={handleClick} >Submit</button>
        </form>
      </div>

      
    </>
  )
}

export default Signup
