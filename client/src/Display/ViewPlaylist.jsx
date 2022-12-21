import {React,useState,useEffect,useMemo} from 'react'
import Navbar from '../Home/Navbar'
import axios from 'axios'
import Table from 'react-bootstrap/Table'
const ViewPlaylist = () => {
    const [query,setQuery]=useState('')
    const [playlist,setPlayList]=useState([{
        songName:"",
        artName:"",
        albumName:"",
        genre:"",
        labelname:""
    }])
    useEffect(()=>{
        axios.get("http://localhost:3000/getPlaylist")
        .then((res)=>setPlayList(res.data[0]))
        .catch((err)=>console.log(err))
    },[])
    const filteredPlaylist = useMemo(() => {
        return playlist.filter((song) => {
        return song.songName.toLowerCase().includes(query.toLowerCase());
        })},[playlist,query]);
  return (
    <div>
      <Navbar/>
      <div className='p-5'>
        <h1 className='mt-5 mb-5 pt-5'>Playlist</h1>
        <input placeholder='Search for a song' className='p-3 mb-5' role="search"
            value={query}
            onChange={(event) => {
              setQuery(event.target.value)}}></input>
      <Table responsive striped="columns" bordered hover variant="dark">
        <thead>
            <tr>
            <th>Song </th>
            <th>Artist</th>
            <th>Album</th>
            <th>Genre</th>
            <th>Label</th>
            <th>Actions</th>
            </tr>
        </thead>
        <tbody>
        {filteredPlaylist.map((song,key)=>
        <tr key={key}>    
          <td>{song.songName}</td>
        <td>{song.artName}</td>
        <td>{song.albumName}</td>
        <td>{song.genre}</td>
        <td>{song.labelname}</td>
        <td>
            <ul className='list-unstyled d-flex '>
                <li>
                    <button className="btn delete text-white m-1">Delete</button>
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
