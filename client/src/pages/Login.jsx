//import axios from 'axios'
import React, { useState } from 'react'
import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { AuthContext } from '../components/context/authContext'

export default function Login() {
  const navigate = useNavigate()
  const [error, setError] = useState("")
  const [inputs, setInputs] = useState({
    username:"",
    password:"",
  })
const {login} = useContext(AuthContext);

  const handleChange = e =>{
    setInputs(prev=>({...prev, [e.target.name]: e.target.value}))
  }
  const handleSubmit = async e =>{
    e.preventDefault()
    try{
     await login(inputs)
navigate("/");
    }catch(err){
      setError(err.response.data)
    }

  }
console.log(inputs)
  return (
    <div className='auth'>
      <h1>Login</h1>
      <form>
        <input type="text" placeholder='username' onChange={handleChange}/>
        <input type="password" placeholder='password' onChange={handleChange}/>
        <button onClick={handleSubmit}>Login</button>
        {error && <p>{error}</p>}
        <span>Don't have account? <Link to="/register">Register</Link></span>
      </form>
    </div>
  )
}
