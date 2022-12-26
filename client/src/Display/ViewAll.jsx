import {React,useState,useEffect,useMemo} from 'react'
import Navbar from '../Home/Navbar'
import axios from 'axios'
import Table from 'react-bootstrap/Table'
import { useNavigate } from 'react-router-dom'
const ViewPlaylist = () => {
  const navigate= useNavigate()
    const [query,setQuery]=useState('')
    const [playlist,setPlayList]=useState([{
        songName:"",
        songId:"",
        genre:"",
        seconds:"",
        artName:""
    }])
    useEffect(()=>{
        axios.get("http://localhost:3000/displaySongs")
        .then((res)=>setPlayList(res.data))
        .catch((err)=>console.log(err))
    },[])
    const filteredPlaylist = useMemo(() => {
        return playlist.filter((song) => {
        return song.songName.toLowerCase().includes(query.toLowerCase());
        })},[playlist,query]);
    const handleClick = () =>{
      navigate('/addToPlaylist')
    }
  return (
    <div>
      <Navbar/>
      <div className='p-5'>
        <h1 className='mt-5 mb-5 pt-5'>Songs</h1>
        <input placeholder='Search for a song' className='p-3 mb-5' role="search"
            value={query}
            onChange={(event) => {
              setQuery(event.target.value)}}></input>
      <Table responsive variant="transparent" className='text-white'>
        <thead>
            <tr>
            <th>#</th>
            <th>Song </th>
            <th>Artist</th>
            <th>Genre</th>
            <th>Seconds</th>
            <th>Album ID</th>
            <th></th>
            </tr>
        </thead>
        <tbody>
        {filteredPlaylist.map((song,key)=>
        <tr id={key}>
          <td>{song.songId}</td>    
          <td>{song.songName}</td>
        <td>{song.artName}</td>
        <td>{song.genre}</td>
        <td>{song.seconds}</td>
        <td>{song.albumId}</td>
        <td>
            <ul className='list-unstyled d-flex '>
                <li>
                    <button className="btn delete text-white m-1 bg-primary" onClick={handleClick}>Add to playlist</button>
                    </li>
                </ul>
                </td>
        </tr>)}
        </tbody>
      </Table>
    </div>
    </div>
  )
}

export default ViewPlaylist
