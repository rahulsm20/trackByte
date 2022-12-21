import {React,useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../Home/Navbar'
import Table from 'react-bootstrap/Table'
import axios from 'axios'
const Album = () => {
    const {name} = useParams()
    const [mapAlbum,setMapAlbum]=useState([{
        albumName:" ",
        link:" ",
        artName:" ",
        songName:" ",
        seconds:" ",
        labelName:" "
    }])
    const [state,setState]=useState('primary')
    const [album,setAlbum]=useState('')
    useEffect(()=>{
        axios.get(`http://localhost:3000/album/${name}`)
        .then((res)=>setAlbum(res.data[0][0]))
        .catch((err)=>console.log(err))
    },[]);
    useEffect(()=>{
        axios.get(`http://localhost:3000/album/${name}`)
        .then((res)=>setMapAlbum(res.data[0]))
        .catch((err)=>console.log(err))
    },[]);
    const handleShow = async ()=> {
        setState('success')
    }
    return (
    <div>
        <Navbar/>
        <div className='d-flex mt-5 pt-5 col-lg-12 justify-content-intial align-items-center albumcard'>
        <img src={album.link} className='col-5'/>
        <div className="d-flex flex-column mx-auto">
        <p className='mx-4 albumtitle'>{album.albumName}</p>
        <hr/>
        <p className='artist'><b>Artist</b> - <span>{album.artName}</span> </p>
        <p className='genre'><b>Genre</b> - {album.genre}</p>
        <p className='label'><b>Label</b> - {album.labelName}</p>
        </div>
        </div>
        <Table responsive striped="columns" hover variant="dark" className='mt-5'>
        <thead>
            <tr>
            <th>Song ID</th>
            <th>Song </th>
            <th>Artist</th>
            <th>Length</th>
            <th>Actions</th>
            </tr>
        </thead>
        <tbody>
        {mapAlbum.map((song,key)=>
        <tr key={key}> 
        <td>{song.songId}</td>   
          <td>{song.songName}</td>
        <td>{song.artName}</td>
        <td>{song.seconds}</td>
        <td>
        <button className="submit m-1 text-white" type="submit">Add to playlist</button>         
        </td>
        </tr>)}
        </tbody>
      </Table>
    </div>
  )
}

export default Album