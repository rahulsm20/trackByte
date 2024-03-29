import {React,useState} from 'react'
import Navbar from '../Home/Navbar'
import axios from 'axios'
const addToPlaylist = () => {
    const [songId,setSongId]=useState('')
    const [songName,setSongName]=useState('')
    const [albumID,setAlbumID]=useState('')
    const [status,setStatus]=useState(false)
    const handleForm=(event)=>{
      event.preventDefault()
        axios.post(`${import.meta.env.VITE_SERVER_URL}/addToPlaylist`,{
            songId:songId,
            songName:songName,
            albumId:albumID
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
                <label>Album ID</label>
                <li><input type="number" className='m-4 p-2' onChange={(event)=>setAlbumID(event.target.value)} required/></li>
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
