import React from 'react'
import { useState } from 'react'
import Navbar from '../Home/Navbar'
import axios from 'axios'
const AddSong = () => {
    const [songId,setSongId]=useState('')
    const [songName,setSongName]=useState('')
    const [artId,setArtId]=useState('')
    const [genre,setGenre]=useState('')
    const [albumID,setAlbumID]=useState('')
    const [seconds,setSeconds]=useState('')
    const [success,setSuccess]=useState(false)
    const handleForm=(event)=>{
        event.preventDefault()
        axios.post(`${import.meta.env.VITE_SERVER_URL}/add`,{
          songId:songId,
          songName:songName,
          artId:artId,
          genre:genre,
          albumID:albumID,
          seconds:seconds
        }).then((res)=>setSuccess(true))
        .catch((err)=>console.log(err))
        
    }
  return (
    <div>
        <Navbar/>
        <div className="d-flex justify-content-center align-items-center mt-5">
            <ul className='list-unstyled mt-5'>
                <h3>Add song </h3>
                <hr/>
                <form className='d-flex flex-wrap justify-content-center align-items-center' onSubmit={handleForm}>
                <div className='flex-column'>
                <label>Song ID</label>
                <li><input type="number" className='m-4 p-2'  onChange={(event)=>setSongId(event.target.value)} required/></li>
                <label>Song Name</label>
                <li><input type="text" className='m-4 p-2' onChange={(event)=>setSongName(event.target.value)} required/></li>
                <label>Artist ID</label>
                <li><input type="number" className='m-4 p-2' onChange={(event)=>setArtId(event.target.value)} required/></li>
                </div>
                <div className='flex-column'>
                <label>Genre</label>
                <li><input type="text" className='m-4 p-2' onChange={(event)=>setGenre(event.target.value)} required/></li>
                <label>Album ID</label>
                <li><input type="number" className='m-4 p-2' onChange={(event)=>setAlbumID(event.target.value)} required/></li>
                <label>Length (in seconds)</label>
                <li><input type="number" className='m-4 p-2' onChange={(event)=>setSeconds(event.target.value)} required/></li>
                </div>
                <button className="m-4 submit text-white col-3" onClick={handleForm}>Submit</button>
                </form>
        {success ? <p>Song Added</p>:<p className='text-danger'>Please enter right details</p>}
            </ul>
        </div>
    </div>
  )
}

export default AddSong
