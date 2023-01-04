import {React,useEffect,useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Navbar from '../Home/Navbar'
import Table from 'react-bootstrap/Table'
import axios from 'axios'
const Album = () => {
    const {name} = useParams()
    const navigate=useNavigate()
    const [mapAlbum,setMapAlbum]=useState([{
        albumName:" ",
        link:" ",
        artName:" ",
        songName:" ",
        seconds:" ",
        labelName:" "
    }])
    const [state,setState]=useState(false)
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
    const handleClick=(id,name,al,key)=>{
      event.preventDefault()
        axios.post('http://localhost:3000/addToPlaylist',{
            songId:id,
            songName:name,
            albumId:al
        }).then((res)=>console.log(res))
        .then(()=>alert('Song added to playlist \n'+ name))
        .catch((err)=>alert('Song already in playlist'))
        // window.location.reload()
    }
    return (
    <div>
        <Navbar/>
        <div className='d-flex mt-5 pt-5 col-lg-12 justify-content-intial align-items-center albumcard'>
        <img src={album.link} className='col-5'/>
        <div className="d-flex flex-column mx-auto">
        <h1 className='mx-4 albumtitle'>{album.albumName}</h1>
        <p>
          {mapAlbum[0].albumId}
          </p> 
        {album.noOfSongs} song(s)
        <hr/>
        <p className='artist'><b className='cat'>Artist</b> - <span>{album.artName}</span> </p>
        <p className='genre'><b className='cat'>Genre</b> - {album.genre}</p>
        <p className='label'><b className='cat'>Label</b> - {album.labelName}</p>
        {/* <p className='noOfSongs'>{album.noOfSongs}<b className='cat'> songs</b></p> */}
        </div>
        </div>
        <Table responsive variant="transparent" className='mt-5 text-white'>
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
        <tr> 
        <td>{song.songId}</td>   
          <td>{song.songName}</td>
        <td>{song.artName}</td>
        <td>{song.seconds}</td>
        <td>
        <button key={key} className={`submit m-1 text-white bg-${state}`} type="submit" onClick={()=>handleClick(song.songId,song.songName,song.albumId,key)}>{state ? <>Already in playlist</>:<>Add to playlist</> }</button>         
        </td>
        </tr>)}
        </tbody>
      </Table>
    </div>
  )
}

export default Album