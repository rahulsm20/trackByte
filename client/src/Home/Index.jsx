import {React,useState} from 'react'
import { useNavigate } from 'react-router-dom'
const Index = () => {
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    const [status,setStatus]=useState(false)
    const navigate = useNavigate()
    const handleForm=()=>{
        if(username=='username' && password=='password')
        {
            navigate('/analytics')
            setStatus(true)
        }
    }
  return (
    <div className='d-flex justify-content-center align-items-center mt-5'>
        <ul className='list-unstyled'>
        <h1>Welcome to <span className='text-danger'>TrackByte</span></h1>
        <h3 className='p-4 mt-3'>
        An easy and efficient way to keep track of your favorite music
        </h3>
        <form className='d-flex flex-wrap justify-content-center align-items-center' onSubmit={handleForm}>
                <div className='flex-column'>
            <h5>Login to your account</h5>
            <hr/>
                <label>Username</label>
                <li><input type="text" className='m-4 p-2'  onChange={(event)=>setUsername(event.target.value)} required/></li>
                <label>Password</label>
                <li><input type="password" className='m-4 p-2' onChange={(event)=>setPassword(event.target.value)} required/></li>
                <button className="m-4 submit text-white col-5" onClick={handleForm}>Login</button>
                {status ? <p>Good to see you back!</p> : <p className='text-danger'>Please enter correct details</p>}
                </div>
        </form>
        </ul>
        </div>
  )
}

export default Index