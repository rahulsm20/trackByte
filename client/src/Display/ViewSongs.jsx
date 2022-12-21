import {React,useState,useEffect,useMemo} from 'react'
import Navbar from '../Home/Navbar'
import axios from 'axios'
import Table from 'react-bootstrap/Table'
import Card from './Card'
const ViewSongs = () => {
    const [query,setQuery]=useState('')
    const [songlist,setSongList]=useState([{
        songName:"",
        artName:"",
        albumName:"",
        genre:"",
        labelname:""
    }])
    useEffect(()=>{
        axios.get("http://localhost:3000/getSongs")
        .then((res)=>setSongList(res.data))
        .catch((err)=>console.log(err))
    },[])
    const filteredSonglist = useMemo(() => {
        return songlist.filter((song) => {
        return song.albumName.toLowerCase().includes(query.toLowerCase());
        })},[songlist,query]);
  return (
    <div>
      <Navbar/>
      <div>
        <h1 className='mt-5 mb-5 pt-5'>Albums</h1>
        <input placeholder='Search for an album' className='p-3 mb-5' role="search"
            value={query}
            onChange={(event) => {
              setQuery(event.target.value)}}></input>
    <div className='d-flex flex-wrap'>
    {filteredSonglist.map((album,key)=>
    <Card 
    id={key}
    albumName={album.albumName}
    link={album.link}
    artName={album.artName}/>
    )}
    </div>
    </div>
    </div>
  )
}

export default ViewSongs
