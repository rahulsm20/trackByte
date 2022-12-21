import {React,useState} from 'react'
import Navbar from '../Home/Navbar'
import axios from 'axios'
const addToPlaylist = () => {
    const [songId,setSongId]=useState('')
    const [songName,setSongName]=useState('')
    const [status,setStatus]=useState(false)
    const handleForm=(event)=>{
      event.preventDefault()
        axios.post('http://localhost:3000/addToPlaylist',{
            songId:songId,
            songName:songName
        }).then((res)=>setStatus(true))
        .catch((err)=>console.log(err))
    }
  return (
    <div>
      <Navbar/>
      <div className="d-flex justify-content-center align-items-center mt-5">
            <ul className='list-unstyled mt-5'>
                <h3>Add song to playlist</h3>
                <hr/>
                <form className='d-flex flex-wrap justify-content-center align-items-center' onSubmit={handleForm}>
                <div className='flex-column'>
                <label>Song ID</label>
                <li><input type="number" className='m-4 p-2'  onChange={(event)=>setSongId(event.target.value)} required/></li>
                <label>Song Name</label>
                <li><input type="text" className='m-4 p-2' onChange={(event)=>setSongName(event.target.value)} required/></li>
                <button className="m-4 submit text-white col-5" onClick={handleForm}>Submit</button>
                {status ? <p>Song added to playlist</p> : <p className='text-danger'>Please enter correct details</p>}
                </div>
                </form>
                </ul>
                </div>
    </div>
  )
}

export default addToPlaylist
